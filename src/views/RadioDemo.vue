<script setup>
import { reactive } from 'vue'
import Radio from '@/components/base/Radio.vue'

const flux = reactive({
  placementOptions: ['one', 'two', 'three', 'fours'],
})
</script>

<template>
  <div class="flex">
    <Radio v-model:value="flux.placement" :options="flux.placementOptions" />
  </div>
</template>
