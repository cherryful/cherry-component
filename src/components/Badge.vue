<script setup lang="ts">
withDefaults(defineProps<{
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  size?: 'sm' | 'base' | 'lg'
  content?: string
}>(), {
  type: 'default',
  size: 'base',
  content: '',
})
</script>

<template>
  <span class="relative cursor-default">
    <slot />
    <span
      class="absolute translate-x-1/2 rounded-full text-white -right-4 -top-3"
      :class="[
        content ? 'min-w-5' : 'w-3 h-3',
        [type],
        {
          'text-xs': size === 'sm',
          'px-1 py-0.5 text-xs': size === 'base',
          'px-2.5 py-1 text-sm ': size === 'lg',
        },
      ]"
    >
      {{ content }}
    </span>
  </span>
</template>

<style scoped>
.default {
  @apply text-black bg-gray-100
}
.primary {
  @apply text-white bg-primary-500
}
.secondary {
  @apply text-white bg-secondary-500
}
.accent {
  @apply text-white bg-accent-500
}
.success {
  @apply text-white bg-success-500
}
.info {
  @apply text-white bg-info-500
}
.warning {
  @apply text-white bg-warning-500
}
.error {
  @apply text-white bg-error-500
}
</style>
