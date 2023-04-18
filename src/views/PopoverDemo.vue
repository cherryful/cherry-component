<script setup lang="ts">
import { ref } from 'vue'
import Popover from '@/components/base/Popover.vue'

const msg1 = ref('closed')
const msg2 = ref('closed')
</script>

<template>
  <div class="space-y-4">
    Popover Demo:
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Position:
      </span>
      <Popover>
        auto
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="left">
        left
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="right">
        right
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="top">
        top
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="bottom">
        bottom
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Hover:
      </span>
      <Popover trigger="hover">
        auto
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="left" trigger="hover">
        left
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="right" trigger="hover">
        right
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="top" trigger="hover">
        top
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover position="bottom" trigger="hover">
        bottom
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        Event:
      </span>
      <Popover @open="msg1 = 'opened'" @close="msg1 = 'closed'">
        <button class="btn">
          click {{ msg1 }}
        </button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" @open="msg2 = 'opened'" @close="msg2 = 'closed'">
        <button class="btn">
          hover {{ msg2 }}
        </button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
    </div>
    <div class="space-x-3 space-y-3">
      <span class="inline-block w-20">
        other:
      </span>
      <Popover dissmissable>
        <button class="btn">
          dissmissable
        </button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" sustain>
        <button class="btn">
          hover & sustain
        </button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" hover-alive>
        <button class="btn">
          hover-alive
        </button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
    </div>
  </div>
</template>
