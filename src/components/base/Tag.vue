<script setup lang="ts">
interface Props {
  type?: 'default' | 'success' | 'info' | 'warning' | 'error' | 'primary' | 'empty'
  size?: 'sm' | 'base' | 'lg' | 'empty'
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

const colors = {
  empty: '',
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  info: 'bg-blue-100 text-blue-800',
  warning: 'bg-yellow-100 text-yellow-800',
  error: 'bg-red-100 text-red-800',
  primary: 'bg-indigo-100 text-indigo-800',
}

const sizes = {
  empty: '',
  sm: 'px-2 py-1',
  base: 'px-3 py-1.5',
  lg: 'px-6 py-3',
}

const rounds = {
  sm: 'rounded-sm',
  base: 'rounded-md',
  lg: 'rounded-lg',
  full: 'rounded-full',
}
</script>

<template>
  <div
    class="inline-block text-xs shadow-sm whitespace-nowrap cursor-default font-medium duration-500"
    :class="[colors[type], sizes[size], rounds[rounded], custom, {
      'border border-gray-300': border,
    },
    ]"
  >
    <div class="flex items-center justify-center">
      <slot />
    </div>
  </div>
</template>
