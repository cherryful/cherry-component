<script setup lang="ts">
import { computed } from 'vue'
import uniqueId from 'lodash/uniqueId'

interface Props {
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  modelValue?: boolean
  checked?: boolean
  size?: 'sm' | 'base' | 'lg'
  disabled?: boolean
  icon?: boolean
  readonly?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  modelValue: false,
  size: 'base',
  disabled: false,
  icon: false,
  readonly: false,
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: boolean): void
}>()

const uid = uniqueId('switch-')

const switchValue = computed({
  get: () => props.modelValue || false,
  set: val => emit('update:modelValue', val),
})

const colors = {
  success: 'bg-success-500',
  info: 'bg-info-500',
  warning: 'bg-warning-500',
  error: 'bg-error-500',
  primary: 'bg-primary-500',
  secondary: 'bg-secondary-500',
  accent: 'bg-accent-500',
}
const textColors = {
  success: 'text-success-500',
  info: 'text-info-500',
  warning: 'text-warning-500',
  error: 'text-error-500',
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  accent: 'text-accent-500',
}
</script>

<template>
  <div class="flex items-center">
    <label
      :for="uid"
      class="flex items-center"
      :class="[disabled ? 'cursor-not-allowed opacity-60' : readonly ? '' : 'cursor-pointer']"
    >
      <div
        tabindex="0" class="relative focus:rounded-full focus:ring-indigo-500 focus:ring-offset-2 focus:outline-none focus:ring-2"
      >
        <input
          :id="uid"
          v-model="switchValue"
          v-bind="$attrs"
          type="checkbox"
          :disabled="disabled"
          class="sr-only"
        >
        <div
          class="block rounded-full"
          :class="[
            {
              'w-9 h-4': size === 'sm',
              'w-11 h-6': size === 'base',
              'w-14 h-9': size === 'lg',
            },
            (switchValue || checked) ? colors[type] : 'bg-gray-200',
          ]"
        />

        <div
          class="absolute left-0 top-0.5 bg-white rounded-full transition"
          :class="[
            {
              'w-3 h-3': size === 'sm',
              'h-5 w-5': size === 'base',
              'w-8 h-8': size === 'lg',
            },
            (switchValue || checked) ? 'translate-x-5' : 'translate-x-0',
          ]"
        >
          <svg
            v-if="icon"
            fill="currentColor" viewBox="0 0 12 12"
            :class="[
              (checked || switchValue) ? textColors[type] : 'text-gray-200',
              {
                'w-3 h-3': size === 'sm',
                'h-5 w-5': size === 'base',
                'w-8 h-8': size === 'lg',
              }]"
          >
            <path v-if="checked || switchValue" d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
            <path v-else d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
      </div>

      <div class="ml-2 font-medium empty:hidden">
        <slot />
      </div>
    </label>
  </div>
</template>
