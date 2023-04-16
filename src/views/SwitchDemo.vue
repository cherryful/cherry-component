<script setup>
import { ref } from 'vue'
import Switch from '@/components/base/Switch.vue'
const value = ref(true)
</script>

<template>
  <div class="space-y-4">
    Switch Demo:

    <div class="space-x-3 flex">
      <span class="inline-block w-20">
        size:
      </span>
      <Switch v-model:value="value" sizes="sm" />
      <Switch v-model:value="value" size="base" />
      <Switch v-model:value="value" size="lg" />
    </div>

    <div class="space-x-3 flex">
      <span class="inline-block w-20">
        type:
      </span>
      <Switch v-model:value="value" />
      <Switch v-model:value="value" type="success" />
      <Switch v-model:value="value" type="info" />
      <Switch v-model:value="value" type="warning" />
      <Switch v-model:value="value" type="error" />
      <Switch v-model:value="value" type="secondary" />
      <Switch v-model:value="value" type="accent" />
      <Switch v-model:value="value" disabled />
    </div>
  </div>
</template>
