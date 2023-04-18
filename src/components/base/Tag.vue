<script setup lang="ts">
interface Props {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  rounded?: 'sm' | 'base' | 'lg' | 'full'
  border?: boolean
  custom?: string
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'base',
  rounded: 'full',
  border: false,
  custom: '',
})
</script>

<template>
  <div
    class="inline-block text-xs shadow-sm whitespace-nowrap cursor-default font-medium"
    :class="[custom || {
      'border border-gray-300': border,

      'default': type === 'default',
      'primary': type === 'primary',
      'secondary': type === 'secondary',
      'accent': type === 'accent',
      'success': type === 'success',
      'info': type === 'info',
      'error': type === 'error',
      'warning': type === 'warning',

      'px-2 py-1': size === 'sm',
      'px-3 py-1.5': size === 'base',
      'px-6 py-3': size === 'lg',

      'rounded-sm': rounded === 'sm',
      'rounded-md': rounded === 'base',
      'rounded-lg': rounded === 'lg',
      'rounded-full': rounded === 'full',
    },
    ]"
  >
    <div class="flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.default {
  @apply text-gray-800 bg-gray-100
}
.primary {
  @apply bg-primary-100 text-primary-800
}
.secondary {
  @apply bg-secondary-100 text-secondary-800
}
.accent {
  @apply bg-accent-100 text-accent-800
}
.success {
  @apply bg-success-100 text-success-800
}
.info {
  @apply bg-info-100 text-info-800
}
.warning {
  @apply bg-warning-100 text-warning-800
}
.error {
  @apply bg-error-100 text-error-800
}
</style>
