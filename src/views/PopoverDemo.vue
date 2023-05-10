<script setup lang="ts">
import { ref } from 'vue'
import Popover from '@/components/Popover.vue'
import Button from '@/components/Button.vue'

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
        <Button type="secondary">
          click {{ msg1 }}
        </Button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" @open="msg2 = 'opened'" @close="msg2 = 'closed'">
        <Button type="secondary">
          hover {{ msg2 }}
        </Button>
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
        <Button type="secondary">
          dissmissable
        </Button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" sustain>
        <Button type="secondary">
          hover & sustain
        </Button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
      <Popover trigger="hover" hover-alive>
        <Button type="secondary">
          hover-alive
        </Button>
        <template #content>
          <div class="px-4 py-2">
            The content of the Popover.
          </div>
        </template>
      </Popover>
    </div>
  </div>
</template>
