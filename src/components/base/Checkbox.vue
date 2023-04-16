<script setup lang="ts">
import { ref, watch } from 'vue'

interface Props {
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  checked?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  checked: false,
  disabled: false,
})

defineEmits(['update:checked'])

const colors = {
  success: 'text-success focus:ring-success-500',
  info: 'text-info  focus:ring-info-500',
  warning: 'text-warning focus:ring-warning-500',
  error: 'text-error focus:ring-error-500',
  primary: 'text-primary focus:ring-primary-500',
  secondary: 'text-secondary focus:ring-secondary-500',
  accent: 'text-accent focus:ring-accent-500',
}

const checked = ref(props.checked)
watch(() => props.checked, val => checked.value = val)
</script>

<template>
  <div class="flex h-6 items-center">
    <input
      v-model="checked"
      type="checkbox"
      :disabled="disabled"
      aria-describedby="comments-description"
      class="h-4 w-4 rounded border-gray-300 mr-2"
      :class="[
        disabled ? 'text-gray-300 cursor-not-allowed' : colors[type],
      ]"
      @change="$emit('update:checked', checked)"
    >
    <slot />
  </div>
</template>
