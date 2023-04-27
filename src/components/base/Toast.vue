<script setup lang="ts">
import { reactive } from 'vue'
import Alert from './Alert.vue'

interface Event {
  show?: boolean
  id: number
  content: string
  type: 'success' | 'info' | 'warning' | 'error'
}

const props = withDefaults(defineProps<{
  show?: false
  position?: 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  timout?: number
  queue?: boolean
}>(), {
  position: 'top',
  timout: 2500,
  queue: true,
})

const flux = reactive({
  events: [] as Event[],
  success: (content: string) => {
    flux.add(content, 'success')
  },
  info: (content: string) => {
    flux.add(content, 'info')
  },
  warning: (content: string) => {
    flux.add(content, 'warning')
  },
  error: (content: string) => {
    flux.add(content, 'error')
  },
  show: (content: string, type: 'success' | 'info' | 'warning' | 'error') => {
    flux.add(content, type)
  },
  add: (content: string, type: 'success' | 'info' | 'warning' | 'error') => {
    if (!props.queue)
      flux.events = []
    setTimeout(() => {
      const event = { id: Date.now(), content, type }
      flux.events.push(event)
      setTimeout(() => flux.remove(event), props.timout)
    }, 10)
  },
  remove: (event: Event) => {
    flux.events = flux.events.filter(e => e.id !== event.id)
  },
})

defineExpose({
  show: flux.show,
  success: flux.success,
  info: flux.info,
  warning: flux.warning,
  error: flux.error,
})
</script>

<template>
  <div
    class="fixed w-full z-40 sm:w-96"
    :class="{
      'bottom-0': position === 'bottom',
      'top-0': position === 'top',
    }"
  >
    <!-- TODO: animation -->
    <TransitionGroup
      tag="div"
      name="list"
      class="grid gap-4 fixed left-1/2 top-12 -translate-x-1/2 z-200"
    >
      <Alert
        v-for="event in flux.events"
        :key="event.id"
        :type="event.type"
      >
        {{ event.content }}
      </Alert>
    </TransitionGroup>
  </div>
</template>
