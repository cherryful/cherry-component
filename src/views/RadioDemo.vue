<script setup>
import { reactive } from 'vue'
import Radio from '@/components/base/Radio.vue'

const flux = reactive({
  options: [
    { id: 'email', title: 'Email' },
    { id: 'sms', title: 'Phone (SMS)' },
    { id: 'push', title: 'Push notification' },
  ],
})
</script>

<template>
  <div class="flex">
    <Radio :options="flux.options" />
  </div>
</template>
