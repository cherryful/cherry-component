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
      <Switch v-model="value" size="sm" />
      <Switch v-model="value" size="base" />
      <Switch v-model="value" size="lg" />
    </div>

    <div class="space-x-3 flex">
      <span class="inline-block w-20">
        type:
      </span>
      <Switch v-model="value" />
      <Switch v-model="value" type="secondary" />
      <Switch v-model="value" type="accent" />
      <Switch v-model="value" type="success" />
      <Switch v-model="value" type="info" />
      <Switch v-model="value" type="warning" />
      <Switch v-model="value" type="error" />
      <Switch v-model="value" disabled />
    </div>
    <div class="space-x-3 flex">
      <span class="inline-block w-20">
        icon:
      </span>
      <Switch v-model="value" icon type="primary" />
      <Switch v-model="value" icon type="secondary" />
      <Switch v-model="value" icon type="accent" />
      <Switch v-model="value" icon type="success" />
      <Switch v-model="value" icon type="info" />
      <Switch v-model="value" icon type="warning" />
      <Switch v-model="value" icon type="error" />
    </div>
    <div class="space-x-3 flex">
      <span class="inline-block w-20">
        other:
      </span>
      <Switch v-model="value" icon>
        Enabled
      </Switch>
      <Switch readonly checked icon>
        Enabled
      </Switch>
    </div>
  </div>
</template>
