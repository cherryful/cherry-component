<script setup>
import { reactive } from 'vue'
import Tab from '@/components/base/Tab.vue'

const flux = reactive({
  current: 0,
})
</script>

<template>
  <Tab
    v-model="flux.current"
    class="my-4 bg-white dark:bg-slate-800 border dark:border-slate-600 rounded-lg"
  >
    <div title="Vue" icon="i-mdi:lightning-bolt">
      <div>Vue Content</div> {{ flux.current }}
    </div>
    <div title="React" icon="i-mdi:abacus">
      <div>React Content</div> {{ flux.current }}
    </div>
  </Tab>
</template>
