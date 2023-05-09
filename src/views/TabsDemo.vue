<script setup>
import { ref } from 'vue'
import Tabs from '@/components/base/Tabs/Tabs.vue'
import TabPane from '@/components/base/Tabs/TabPane.vue'

const numberCurrent = ref(0)
const stringCurrent = ref('vue')
</script>

<template>
  <Tabs
    v-model="numberCurrent"
    class="my-1 border rounded-lg bg-white"
  >
    <TabPane title="Vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ numberCurrent }}</div>
    </TabPane>
    <TabPane title="React" icon="i-mdi:react">
      <div>modelValue: {{ numberCurrent }}</div>
    </TabPane>
  </Tabs>
  <Tabs
    v-model="numberCurrent"
    type="flex"
    class="my-1 border rounded-lg bg-white"
  >
    <TabPane title="Vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ numberCurrent }}</div>
    </TabPane>
    <TabPane title="React" icon="i-mdi:react">
      <div>modelValue: {{ numberCurrent }}</div>
    </TabPane>
  </Tabs>
  <Tabs v-model="stringCurrent">
    <template #prefix>
      Prefix
    </template>
    <template #suffix>
      Suffix
    </template>
    <TabPane title="Vue" value="vue" icon="i-mdi:vuejs">
      <div>modelValue: {{ stringCurrent }}</div>
    </TabPane>
    <TabPane title="React" value="react" icon="i-mdi:react">
      <div>modelValue: {{ stringCurrent }}</div>
    </TabPane>
  </Tabs>
</template>
