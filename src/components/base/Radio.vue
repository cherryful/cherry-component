<!-- <script lang="ts" setup>
import { computed } from 'vue'
import uniqueId from 'lodash/uniqueId'

const props = defineProps<{
  label?: string
  value?: unknown
  options?: string[] | Array<{ label: string; value: unknown }>
  disabled?: boolean
}>()

const emit = defineEmits<{
  (evt: 'update:value', val: unknown): void
  (evt: 'change', val: unknown): void
}>()

const uid = uniqueId('radio-group-')

const radioGroupValue = computed({
  get: () => props.value,
  set: val => emit('update:value', val),
})
</script>

<template>
  <div class="radio-group">
    <div class="text-sm mb-2 font-bold empty:hidden">
      {{ label }}
    </div>

    <div class="flex items-center h-38px space-x-4">
      <label
        v-for="(item, idx) in options"
        :key="idx"
        class="flex items-center"
        :class="[disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer']"
      >
        <div class="relative flex justify-center items-center">
          <input
            :id="`${uid}-${idx}`"
            v-model="radioGroupValue"
            v-bind="$attrs"
            type="radio"
            :name="uid"
            :value="typeof item === 'object' ? item.value : item"
            :disabled="disabled"
            class="radio"
            @change="emit('change', radioGroupValue)"
          >

          <div
            class="absolute select-none w-3.5 h-3.5 text-primary-500"
            :class="{
              'i-mdi-circle': radioGroupValue === (typeof item === 'object' ? item.value : item),
            }"
          />
        </div>

        <div class="ml-2">
          {{ typeof item === 'object' ? item.label : item }}
        </div>
      </label>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.radio-group {
  @apply flex flex-col;
}

.radio {
  @apply appearance-none w-5 h-5 rounded-full bg-white border border-slate-400 dark:border-slate-600;
  @apply focus:outline-none focus:ring-2 focus:ring-primary-400 focus:shadow-lg;
}
</style> -->
<script setup lang="ts">
const props = defineProps<{
  label?: string
  options?: Array<{ id: any; title: string ;value: string }>
}>()

const emit = defineEmits<{
  (evt: 'update:value', val: unknown): void
  (evt: 'change', val: unknown): void
}>()
</script>

<template>
  <div>
    <label class="text-base font-semibold text-gray-900">Notifications</label>
    <p class="text-sm text-gray-500">
      How do you prefer to receive notifications?
    </p>
    <fieldset class="mt-4">
      <legend class="sr-only">
        Notification method
      </legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div v-for="(notificationMethod, index) in props.options" :key="index" class="flex items-center">
          <input :id="notificationMethod.id" name="notification-method" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
          <label :for="notificationMethod.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ notificationMethod.title }}</label>
        </div>
      </div>
    </fieldset>
  </div>
</template>
