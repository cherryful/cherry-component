<script setup>
import { ref } from 'vue'
import Input from '@/components/base/Input.vue'

const value = ref()
</script>

<template>
  <div class="w-70">
    <Input v-model:value="value" placeholder="Custom placeholder" label="placeholder" />
    <Input v-model:value="value" label="required" required />
    <Input v-model:value="value">
      Template:
    </Input>
  </div>
  <div class="w-70 space-y-3">
    <Input
      v-model:value="value"
      label="pre-icon & suff-icon"
      pre-icon="i-mdi:lightning-bolt"
      suff-icon="i-mdi:apple"
    />
    <Input v-model:value="value" label="#prehand & #append">
      <template #prepend>
        https://
      </template>
      <template #append>
        .com
      </template>
    </Input>
    <Input v-model:value="value" error-message="oh!!!!" label="error-message" />
  </div>
  <div class="w-70">
    <Input v-model:value="value" @keyup.enter="value = 'type enter!'" />
  </div>
</template>
