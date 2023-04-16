<script setup lang="ts">
import { ref } from 'vue'

import Progress from '@/components/base/Progress.vue'

const percentage = ref(0)
setInterval(() => {
  percentage.value !== 100
    ? percentage.value += 1
    : percentage.value = 0
}, 1000)
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-6">
      Color:
      <div class="w-30">
        <Progress color="success" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="info" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="error" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="warning" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="primary" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="secondary" :percentage="percentage" />
      </div>
      <div class="w-30">
        <Progress color="accent" :percentage="percentage" />
      </div>
    </div>
    <div class="space-y-6 space-x-5">
      Varient:
      <div class="w-30">
        <Progress :percentage="percentage" variant="circle" />
      </div>

      <div class="w-30">
        <Progress :percentage="percentage" variant="score" />
      </div>
    </div>
  </div>
</template>
