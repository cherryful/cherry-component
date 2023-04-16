<script setup lang="ts">
interface Props {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'empty'
  size?: 'sm' | 'base' | 'lg' | 'empty'
  disabled?: boolean
  custom?: string
}

withDefaults(defineProps<Props>(), {
  type: 'default',
  size: 'base',
  disabled: false,
  custom: '',
})

const colors = {
  empty: '',
  default: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-500',
  success: 'text-white bg-success-500 hover:bg-success-700 focus:ring-success-500',
  info: 'text-white bg-info-500 hover:info focus:ring-info-500',
  warning: 'text-white bg-warning-500 hover:bg-warning-700 focus:ring-warning-500',
  error: 'text-white bg-error-500 hover:bg-error-700 focus:ring-error-500',
  primary: 'text-white bg-primary-500 hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'text-white bg-secondary-500 hover:bg-secondary-700 focus:ring-secondary-500',
  accent: 'text-white bg-accent-500 hover:bg-accent-700 focus:ring-accent-500',
}

const sizes = {
  empty: '',
  sm: 'px-2 py-1',
  base: 'px-3 py-2.5 sm:py-2',
  lg: 'px-10 py-4',
}
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    class="whitespace-nowrap inline-flex w-full items-center justify-center
    rounded-md shadow-sm text-xs font-sans font-semibold leading-4
    focus:outline-none focus:ring-2 focus:ring-offset-2
    disabled:cursor-not-allowed disabled:opacity-30
    sm:w-auto"
    :class="[sizes[size], colors[type], custom]"
  >
    <slot />
  </button>
</template>
