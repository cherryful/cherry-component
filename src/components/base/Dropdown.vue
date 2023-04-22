<script setup lang="ts">
import type { VNode } from 'vue'
import { nextTick, reactive, ref } from 'vue'

// use iconify or h() to render icon.
export interface DropdownOption {
  key: string
  label: string
  icon?: string | VNode
}

defineProps<{
  options?: DropdownOption[]
}>()

const emit = defineEmits<{
  (evt: 'select', val: string): void
}>()

const target = ref()
const dropdown = ref()

const flux = reactive({
  status: false,
  timeout: undefined as ReturnType<typeof setTimeout> | undefined,
  onMouseenter() {
    flux.status = true
    clearTimeout(flux.timeout)

    // 计算它的位置偏量
    nextTick(() => {
      const rect = target.value.getBoundingClientRect()

      const center = window.innerHeight / 2
      const middle = window.innerWidth / 2

      if (rect.top > center)
        dropdown.value.style.bottom = 'calc(100% + 0.5rem)'
      else
        dropdown.value.classList.add('mt-2')

      if (rect.right > middle)
        dropdown.value.classList.add('right-0')

      else
        dropdown.value.classList.add('left-0')
    })
  },
  onMouseleave() {
    flux.timeout = setTimeout(() => {
      flux.status = false
    }, 250)
  },

  select(option: DropdownOption) {
    flux.status = false
    flux.timeout = undefined

    emit('select', option.key)
  },
})
</script>

<template>
  <div class="relative inline-block text-left" @mouseleave="flux.onMouseleave">
    <div
      ref="target"
      class="inline-flex w-full justify-center items-center rounded-md"
      @mouseenter="flux.onMouseenter"
    >
      <slot />
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <div
        v-if="flux.status"
        ref="dropdown"
        class="absolute z-10 min-w-max bg-white dark:bg-slate-800 rounded-lg shadow-lg"
        tabindex="-1"
        @mouseenter="flux.onMouseenter"
      >
        <div class="py-1">
          <slot name="options">
            <div class="px-1 py-2 text-sm">
              <template v-for="option in options" :key="option">
                <div
                  v-if="option"
                  class="flex items-center px-3 py-1 cursor-pointer rounded-md hover:text-primary-600 hover:bg-indigo-200"
                  @click.stop="flux.select(option)"
                >
                  <template v-if="typeof option.icon === 'string'">
                    <div :class="option.icon" class="text-gray-500 w-5" />
                  </template>
                  <template v-else>
                    <component :is="option.icon" class="w-5" />
                  </template>
                  <span class="ml-2">{{ option.label }}</span>
                </div>
                <div v-else class="border dark:border-slate-600 my-2" />
              </template>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
