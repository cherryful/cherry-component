<script setup>
import Collapse from '@/components/base/Collapse.vue'
</script>

<template>
  <div> CollapseDemo: </div>
  <div class="space-y-8">
    <Collapse class="w-lg">
      <p class="my-2">
        basic collapse
      </p>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </template>
    </Collapse>
    <Collapse class="w-lg" expanded disabled>
      <p class="my-2">
        default expanded && disabled
      </p>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </template>
    </Collapse>
    <Collapse class="w-lg" icon-left>
      <p class="my-2">
        left icon collapse
      </p>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </template>
    </Collapse>
    <div />
  </div>
</template>
