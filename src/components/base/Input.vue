<script setup lang="ts">
import { computed, reactive } from 'vue'
interface Props {
  label?: string
  value?: string
  type?: string
  disabled?: boolean
  required?: boolean
  prepend?: string
  append?: string
  errorMessage?: string
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (evt: 'update:value', val: string): void
  (evt: 'prepend'): void
  (evt: 'append'): void
}>()

const textFieldValue = computed({
  get: () => props.value || '',
  set: val => emit('update:value', val),
})

const flux = reactive({
  focused: false,
})
</script>

<template>
  <div class="flex flex-col w-full relative" :class="[disabled ? 'opacity-60' : '']">
    <label class="text-sm font-bold mb-2 empty:hidden">
      <template v-if="label">{{ label }}</template>
      <slot v-else />
      <span v-if="required" class="text-red-500">*</span>
    </label>

    <div class="flex w-full items-center">
      <div
        v-if="prepend"
        class=" p-2 border border-slate-400 border-r-0 rounded rounded-r-0 bg-white dark:bg-slate-800 z-1"
        :class="{
          'ring-1 ring-primary-400 border-primary-400': flux.focused,
          'important:border-red-500 important:ring-red-500 mb-1': errorMessage,
        }"
        @click.stop="emit('prepend')"
      >
        <div :class="prepend" class="w-5 h-5" />
      </div>
      <input
        v-model="textFieldValue"
        v-bind="$attrs"
        :type="type ? type : 'text'"
        :disabled="disabled"
        class="w-full border border-slate-400 rounded px-3 py-2 z-2 bg-white dark:bg-slate-800 leading-tight   focus:outline-none focus:ring-1 focus:ring-primary-400 focus:border-primary-400"
        :class="{
          danger: errorMessage,
          prepend,
          append,
        }"
        @focus="flux.focused = true"
        @blur="flux.focused = false"
      >
      <div
        v-if="append"
        class=" p-2 border border-slate-400 border-r-0 rounded rounded-r-0 bg-white dark:bg-slate-800 z-1;"
        :class="{
          'ring-1 ring-primary-400 border-primary-400': flux.focused,
          'important:border-red-500 important:ring-red-500 mb-1': errorMessage,
        }"
        @click.stop="emit('append')"
      >
        <div :class="append" class="w-5 h-5" />
      </div>
    </div>

    <div v-if="errorMessage" class="text-red-500 text-xs">
      {{ errorMessage }}
    </div>
  </div>
</template>
