<script setup>
import { reactive } from 'vue'
import Tab from '@/components/base/Tab.vue'

const flux = reactive({
  tabs1: 0,
  tabs2: 'vue',
})
</script>

<template>
  <Tab
    v-model="flux.tabs1"
    class="my-4 bg-white dark:bg-slate-800 border dark:border-slate-600 rounded-lg"
  >
    <div title="Vue">
      <div>Vue Content</div>
    </div>

    <div title="React">
      <div>React Content</div>
    </div>
  </Tab>
</template>
