<script setup lang="ts">
import { h } from 'vue'
import type { DropdownOption } from '@/components/base/Dropdown.vue'
import Dropdown from '@/components/base/Dropdown.vue'
import Button from '@/components/base/Button.vue'

const options: DropdownOption[] = [
  {
    label: 'Action',
    key: 'Action',
    icon: 'i-mdi:lightning-bolt',
  },
  {
    label: 'Another action',
    key: 'Another action',
    icon: 'i-mdi:apple',
  },
  {
    label: 'Something else here',
    key: 'Something else here',
    icon: h('div', { class: 'i-mdi:abacus text-red-500' }),
  },
]
</script>

<template>
  <div class="flex flex-col border p-4 mb-4 h-32">
    <div class="mb-2">
      Basic
    </div>

    <div class="flex justify-center">
      <Dropdown :options="options">
        <Button>Button</Button>
      </Dropdown>
    </div>
  </div>
</template>
