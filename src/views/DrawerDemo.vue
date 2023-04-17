<script setup>
import { reactive } from 'vue'
import Drawer from '@/components/base/Drawer.vue'
const model = reactive({
  left: false,
  right: false,
  top: false,
  bottom: false,
})
</script>

<template>
  <div class="space-y-4">
    Drawer Demo:
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        placement:
      </span>
      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="model.left = true">
        left
      </button>

      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="model.right = true">
        right
      </button>

      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="model.top = true">
        top
      </button>

      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="model.bottom = true">
        bottom
      </button>
    </div>
  </div>
  <Drawer v-model="model.left" placement="left" />
  <Drawer v-model="model.right" placement="right" />
  <Drawer v-model="model.top" placement="top" />
  <Drawer v-model="model.bottom" placement="bottom" />
</template>
