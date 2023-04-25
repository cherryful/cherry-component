<script setup lang="ts">
const props = defineProps<{
  label?: string
  options?: string[] | Array<{ label: string; value: unknown }>
}>()

const emit = defineEmits<{
  (evt: 'update:value', val: unknown): void
  (evt: 'change', val: unknown): void
}>()
</script>

<template>
  <label v-for="option in props.options" class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
    <input type="radio" name="project-type" value="Existing Customers" class="sr-only" aria-labelledby="project-type-1-label" aria-describedby="project-type-1-description-0 project-type-1-description-1">
    <span class="flex flex-1">
      <span class="flex flex-col">
        <span id="project-type-1-label" class="block text-sm font-medium text-gray-900">{{ option.title }}</span>
        <span id="project-type-1-description-0" class="mt-1 flex items-center text-sm text-gray-500">{{ option.content }}</span>
        <!-- <span id="project-type-1-description-1" class="mt-6 text-sm font-medium text-gray-900">1200 users</span> -->
      </span>
    </span>
    <!-- Not Checked: "invisible" -->
    <svg class="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
    </svg>
    <!--
        Active: "border", Not Active: "border-2"
        Checked: "border-indigo-600", Not Checked: "border-transparent"
      -->
    <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true" />
  </label>
</template>
