<script setup lang="ts">
import Skeleton from '@/components/Skeleton.vue'

function onClick() {
  alert(1)
}
</script>

<template>
  <Skeleton />
  <div class="flex">
    <Skeleton class="w-full bg-primary-300" />
    <Skeleton class="w-full bg-secondary-300" />
    <Skeleton class="w-full bg-accent-300" />
  </div>
  <div class="flex gap-5">
    <Skeleton as="button" class="h-16 w-16 rounded-full" @click="onClick" />
    <Skeleton class="h-16 w-16 rounded-full bg-success-300" />
    <Skeleton class="h-16 w-16 rounded-full bg-info-300" />
    <Skeleton class="h-16 w-16 rounded-full bg-warning-300" />
    <Skeleton class="h-16 w-16 rounded-full bg-error-300" />
  </div>
</template>
