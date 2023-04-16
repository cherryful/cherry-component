<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/base/Checkbox.vue'

const checked = ref(true)
</script>

<template>
  <div class="space-y-4">
    Checkbox Demo:
    <div class="space-x-3 flex">
      <Checkbox v-model:checked="checked" type="primary" />
      <Checkbox v-model:checked="checked" type="secondary" />
      <Checkbox v-model:checked="checked" type="accent" />
      <Checkbox v-model:checked="checked" type="success" />
      <Checkbox v-model:checked="checked" type="warning" />
      <Checkbox v-model:checked="checked" type="error" />
      <Checkbox v-model:checked="checked" type="info" />
      <Checkbox disabled checked />
    </div>
    <div class="space-x-3 flex">
      <Checkbox v-model:checked="checked">
        Enabled
      </Checkbox>
      <Checkbox checked disabled /> Disabled
    </div>
  </div>
</template>
