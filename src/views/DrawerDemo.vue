<script setup>
import { reactive } from 'vue'
import Drawer from '@/components/base/Drawer.vue'

const drawer = reactive({
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
      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="drawer.left = true">
        left
      </button>
      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="drawer.right = true">
        right
      </button>
      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="drawer.top = true">
        top
      </button>
      <button class="bg-indigo-500 px-2 py-1 rounded-md text-white" @click="drawer.bottom = true">
        bottom
      </button>
    </div>
  </div>

  <Drawer v-model="drawer.left" placement="left" />
  <Drawer v-model="drawer.right" placement="right" />
  <Drawer v-model="drawer.top" placement="top" />
  <Drawer v-model="drawer.bottom" placement="bottom" />
</template>
