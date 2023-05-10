<script setup lang="ts">
import { h } from 'vue'
import type { DropdownOption } from '@/components/Dropdown.vue'
import Dropdown from '@/components/Dropdown.vue'
import Button from '@/components/Button.vue'

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

function select(val: DropdownOption) {
  alert(val.key)
}
</script>

<template>
  <div class="mb-4 h-32 flex flex-col border p-4">
    <div class="mb-2">
      Basic
    </div>

    <div class="flex justify-center gap-x-4">
      <Dropdown :options="options">
        <Button>Base</Button>
      </Dropdown>
      <Dropdown :options="options" @select="select">
        <Button>@select</Button>
      </Dropdown>
      <Dropdown :options="options">
        <Button>options slot</Button>
        <template #options>
          <div
            v-for="option of options" :key="option.key"
            class="mx-1 cursor-pointer rounded-md px-2 py-1 hover:bg-amber-500"
            @click="select(option)"
          >
            {{ option.label }}
          </div>
        </template>
      </Dropdown>
    </div>
  </div>
</template>
