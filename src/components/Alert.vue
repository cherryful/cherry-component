<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  icon?: string
  closeable?: boolean
  noIcon?: boolean
}>(), {
  type: 'primary',
  icon: '',
  noIcon: false,
  closeable: false,
})

const computedIcon = computed(() => {
  if (props.noIcon)
    return ''
  if (props.icon)
    return props.icon
  switch (props.type) {
    case 'success':
      return 'i-fa-check-circle'
    case 'info':
      return 'i-fa-info-circle'
    case 'warning':
      return 'i-fa-exclamation-triangle'
    case 'error':
      return 'i-fa-exclamation-circle'
    case 'primary':
    case 'secondary':
    case 'accent':
      return 'i-fa-info-circle'
    default:
      return ''
  }
})
</script>

<script lang="ts">
export default {
  inheritAttrs: false,
}
</script>

<template>
  <div
    v-bind="$attrs"
    class="max-w-lg flex justify-between border border-current rounded-lg px-4 py-3"
    :class="[[type]]"
  >
    <div class="flex">
      <div v-if="!noIcon">
        <div class="mr-3 h-6 w-6" :class="computedIcon" />
      </div>
      <slot />
    </div>
    <div v-if="closeable" class="ml-3 h-6 w-6 flex items-center justify-center">
      <div class="i-fa-times h-3 w-3 cursor-pointer transition hover:scale-125" />
    </div>
  </div>
</template>

<style scoped>
.primary {
  @apply bg-primary-50 text-primary-800
}
.secondary {
  @apply bg-secondary-50 text-secondary-800
}
.accent {
  @apply bg-accent-50 text-accent-800
}
.success {
  @apply bg-success-50 text-success-800
}
.info {
  @apply bg-info-50 text-info-800
}
.warning {
  @apply bg-warning-50 text-warning-800
}
.error {
  @apply bg-error-50 text-error-800
}
</style>
