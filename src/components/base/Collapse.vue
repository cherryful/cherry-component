<script setup>
import { ref } from 'vue'
const openCollapse = ref(false)
</script>

<template>
  <div class="p-4 border border-gray-100 rounded-md w-80">
    <div class="flex justify-between" @click="openCollapse = !openCollapse">
      <p> <slot name="title" /></p>

      <div v-if="openCollapse" class="transition duration-300 ease-in-out flex items-end">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </div>
      <div v-else class="transition duration-600 ease-in-out ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5  text-gray-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </div>
    <div v-if="openCollapse">
      <span class="text-sm text-gray-500 pt-2">
        <slot name="content" /></span>
    </div>
  </div>
</template>
