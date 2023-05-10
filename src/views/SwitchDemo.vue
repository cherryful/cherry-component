<script setup>
import { ref } from 'vue'
import Switch from '@/components/Switch.vue'

const value = ref(true)

const checkedValue = ref('checked')

function onChange(val) {
  alert(val)
}
</script>

<template>
  <div class="space-y-4">
    Switch Demo:

    <div class="flex space-x-3">
      <span class="inline-block w-20">
        size:
      </span>
      <Switch v-model="value" size="sm" />
      <Switch v-model="value" size="base" />
      <Switch v-model="value" size="lg" />
    </div>

    <div class="flex space-x-3">
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
    <div class="flex space-x-3">
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
    <div class="flex space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <Switch v-model="value" icon>
        Enabled
      </Switch>
      <Switch icon readonly checked>
        readonly
      </Switch>
      <Switch v-model="value" @update:model-value="onChange">
        @update:model-value
      </Switch>
      <Switch v-model="checkedValue" checked-value="checked" unchecked-value="unchecked" @update:model-value="onChange">
        custom-value
      </Switch>
      <Switch :model-value="value" @update:model-value="$e => value = $e">
        manual control
      </Switch>
      <Switch loading>
        loading
      </Switch>
    </div>
  </div>
</template>
