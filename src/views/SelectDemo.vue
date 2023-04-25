<script setup lang="ts">
import { ref } from 'vue'
import Select from '@/components/base/Select.vue'

const options = [
  { label: 'Angular', value: 'angular', other: 'HHH1' },
  { label: 'React', value: 'react', other: 'HHH2' },
  { label: 'Svelte', value: 'label', other: 'HHH3' },
  { label: 'None', value: 'none', other: 'HHH4' },
]

const selected = ref('angular')
</script>

<template>
  <div>
    Select Demo
  </div>
  <div class="w-64">
    <Select v-model="selected" placeholder="Yooooo~" :label="selected || 'Base Demo'" :options="options" />
  </div>
  <div class="w-64">
    <Select v-model="selected" label="clearable" clearable :options="options" />
  </div>
  <div class="w-64">
    <Select v-model="selected" label="error" :options="options" :error-message="selected" />
  </div>
  <div class="w-64">
    <Select v-model="selected" label="disabled" :options="options" disabled />
  </div>
  <div class="w-64">
    <Select v-model="selected" label="display" display="other" :options="options" />
  </div>
</template>
