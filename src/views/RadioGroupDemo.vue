<script setup>
import { reactive } from 'vue'
import RadioGroup from '../components/base/RadioGroup.vue'

// const flux = reactive({
//   placementOptions: ['one', 'two', 'three', 'fours'],
// })
const flux = reactive({
  options: [
    { content: 'email', title: 'Email' },
    { content: 'sms', title: 'Phone (SMS)' },
    { content: 'push', title: 'Push notification' },
  ],
})
</script>

<template>
  <div class="flex">
    <RadioGroup :options="flux.options" />
  </div>
</template>
