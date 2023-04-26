<script setup>
import Collapse from '@/components/base/Collapse.vue'
</script>

<template>
  <div> CollapseDemo: </div>
  <div class="flex space-x-8">
    <Collapse>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </template>
    </Collapse>
    <Collapse>
      <template #title>
        collapse
      </template>
      <template #content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </template>
    </Collapse>
    <div />
  </div>
</template>
