<script setup lang="ts">
import Skeleton from '@/components/base/Skeleton.vue'

function onClick() {
  alert(1)
}
</script>

<template>
  <Skeleton />
  <div class="flex">
    <Skeleton class="bg-primary-300 w-full" />
    <Skeleton class="bg-secondary-300 w-full" />
    <Skeleton class="bg-accent-300 w-full" />
  </div>
  <div class="flex gap-5">
    <Skeleton as="button" class="w-16 h-16 rounded-full" @click="onClick" />
    <Skeleton class="w-16 h-16 rounded-full bg-success-300" />
    <Skeleton class="w-16 h-16 rounded-full bg-info-300" />
    <Skeleton class="w-16 h-16 rounded-full bg-warning-300" />
    <Skeleton class="w-16 h-16 rounded-full bg-error-300" />
  </div>
</template>
