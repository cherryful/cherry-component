<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: 'primary' | 'secondary' | 'accent' | 'error' | 'success' | 'warning' | 'info'
  percentage: number
  scoreLength?: number
  tag?: string
  variant?: 'bar' | 'circle' | 'score'
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  scoreLength: 5,
  tag: 'div',
  variant: 'bar',
})

const colors = {
  primary: 'bg-primary-500 text-primary-500',
  secondary: 'bg-secondary-500 text-secondary-500',
  accent: 'bg-accent-500 text-accent-500',
  info: 'bg-info-500 text-info-500',
  error: 'bg-error-500 text-error-500',
  success: 'bg-success-500 text-success-500',
  warning: 'bg-warning-500 text-warning-500',
}

const circleProgress = computed(() => {
  return (251 / 100) * props.percentage
})

function isScoreActive(i: number) {
  return (i - 1) * (100 / props.scoreLength) <= props.percentage
}
</script>

<template>
  <component :is="tag">
    <div
      v-if="variant === 'bar'"
      class="rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden"
    >
      <div
        class="h-2 rounded-lg"
        :class="colors[color]"
        :style="{ width: `${percentage}%` }"
      />
    </div>

    <svg
      v-else-if="variant === 'circle'"
      class="transform -rotate-90"
      viewBox="0 0 100 100"
    >
      <circle
        class="text-gray-200 dark:text-gray-700"
        stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" fill="none" cx="50" cy="50" r="40"
      />
      <circle
        :class="colors[color]"
        :style="{ strokeDasharray: `${circleProgress} 252` }"
        stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" stroke-width="8" fill="none" cx="50" cy="50" r="40"
      />
    </svg>

    <div
      v-else-if="variant === 'score'"
      class="space-x-1 inline-block"
    >
      <div
        v-for="index in scoreLength"
        :key="index"
        class="rounded-sm h-2 w-3 inline-block"
        :class="{
          'bg-gray-200 dark:bg-gray-700': !isScoreActive(index), // TODO: dark mode
          'bg-primary-500': isScoreActive(index) && color === 'primary',
          'bg-secondary-500': isScoreActive(index) && color === 'secondary',
          'bg-success-500': isScoreActive(index) && color === 'success',
          'bg-error-500': isScoreActive(index) && color === 'error',
          'bg-warning-500': isScoreActive(index) && color === 'warning',
          'bg-info-500': isScoreActive(index) && color === 'info',
          'bg-accent-500': isScoreActive(index) && color === 'accent',
        }"
      />
    </div>
  </component>
</template>
