<script setup lang="ts">
import { ref, watch } from 'vue'
import { Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'

interface Props {
  type?: 'success' | 'info' | 'warning' | 'error' | 'primary' | 'secondary' | 'accent'
  value?: boolean
  size?: 'sm' | 'base' | 'lg' | 'empty'
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  type: 'primary',
  value: false,
  size: 'base',
  disabled: false,
})

defineEmits(['update:value'])

const colors = {
  success: 'bg-success focus:ring-success-500',
  info: 'bg-info  focus:ring-info-500',
  warning: 'bg-warning focus:ring-warning-500',
  error: 'bg-error focus:ring-error-500',
  primary: 'bg-primary focus:ring-primary-500',
  secondary: 'bg-secondary focus:ring-secondary-500',
  accent: 'bg-accent focus:ring-accent-500',
}

// const sizes = {
//   empty: '',
//   sm: 'h-5 w-6',
//   base: 'h-7 w-12 py-0.5 px-1',
//   lg: 'py-2 px-4 w-16',
// }

const sizes = {
  empty: '',
  sm: 'w-3 h-3',
  base: 'w-5 h-5',
  lg: 'w-7',
}
const enabled = ref(props.value)
watch(() => props.value, val => enabled.value = val)
</script>

<template>
  <SwitchGroup as="div" class="flex items-center">
    <Switch
      v-model="enabled"
      :disabled="disabled"
      class="relative inline-flex flex-shrink-0 cursor-pointer w-11 h-7 py-0.5 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      :class="[
        (!disabled && enabled) ? colors[type] : 'bg-gray-200',
        {
          'bg-gray-200 cursor-not-allowed': disabled,
        },
      ]"

      @update:model-value="val => $emit('update:value', val)"
    >
      <span
        aria-hidden="true"
        class="pointer-events-none inline-block transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
        :class="[sizes[size], enabled ? 'translate-x-5' : 'translate-x-0']"
      />
    </Switch>
    <SwitchLabel as="span" class="ml-3">
      <slot />
    </SwitchLabel>
  </SwitchGroup>
</template>
