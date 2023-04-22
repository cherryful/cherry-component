<script setup lang="ts">
interface Props {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  content?: string
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'base',
  content: '',
})
</script>

<template>
  <span class="relative">
    <slot />
    <span
      class="absolute -top-3 -right-4 text-white rounded-full translate-x-1/2"
      :class="[
        content ? 'min-w-5' : 'w-3 h-3',
        {
          'default': type === 'default',
          'primary': type === 'primary',
          'secondary': type === 'secondary',
          'accent': type === 'accent',
          'success': type === 'success',
          'info': type === 'info',
          'error': type === 'error',
          'warning': type === 'warning',
          'text-xs': size === 'sm',
          'px-1 py-0.5 text-xs': size === 'base',
          'px-2.5 py-1 text-sm ': size === 'lg',
        },
      ]"
    >
      {{ content }}</span>
  </span>
</template>

<style scoped>
.default {
  @apply text-black bg-gray-100
}
.primary {
  @apply text-white bg-primary-500
  @apply hover:bg-primary-600 focus:ring-primary-500
}
.secondary {
  @apply text-white bg-secondary-500
  @apply hover:bg-secondary-600 focus:ring-secondary-500
}
.accent {
  @apply text-white bg-accent-500
  @apply hover:bg-accent-600 focus:ring-accent-500
}
.success {
  @apply text-white bg-success-500
  @apply hover:bg-success-600 focus:ring-success-500
}
.info {
  @apply text-white bg-info-500
  @apply hover:bg-info-600 focus:ring-info-500
}
.warning {
  @apply text-white bg-warning-500
  @apply hover:bg-warning-600 focus:ring-warning-500
}
.error {
  @apply text-white bg-error-500
  @apply hover:bg-error-600 focus:ring-error-500
}
</style>
