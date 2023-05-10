<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/Checkbox.vue'

const checked = ref(true)
</script>

<template>
  <div class="space-y-4">
    Checkbox Demo:
    <div class="flex space-x-3">
      <Checkbox v-model="checked" type="primary" />
      <Checkbox v-model="checked" type="secondary" />
      <Checkbox v-model="checked" type="accent" />
      <Checkbox v-model="checked" type="success" />
      <Checkbox v-model="checked" type="warning" />
      <Checkbox v-model="checked" type="error" />
      <Checkbox v-model="checked" type="info" />
      <Checkbox disabled checked />
    </div>
    <div class="flex space-x-3">
      <Checkbox v-model="checked">
        Enabled
      </Checkbox>
      <Checkbox checked disabled /> Disabled
    </div>
  </div>
</template>
