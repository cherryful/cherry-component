<script setup>
import { ref } from 'vue'
import Input from '@/components/base/Input.vue'

const value = ref('')

function onEnter() {
  // eslint-disable-next-line no-console
  console.log(value.value)
}
</script>

<template>
  <div class="w-72">
    <Input v-model="value" placeholder="Custom placeholder" label="placeholder" />
    <Input v-model="value" label="required" required />
    <Input v-model="value">
      Template:
    </Input>
  </div>
  <div class="w-72 space-y-3">
    <Input
      v-model="value"
      label="pre-icon & suff-icon"
      pre-icon="i-mdi:lightning-bolt"
      suff-icon="i-mdi:apple"
    />
    <Input v-model="value" label="#prepend & #append">
      <template #prepend>
        https://
      </template>
      <template #append>
        .com
      </template>
    </Input>
    <Input v-model="value" error-message="oh!!!!" label="error-message" />
  </div>
  <div class="w-72">
    <Input v-model="value" @keyup.enter="onEnter" />
  </div>
</template>
