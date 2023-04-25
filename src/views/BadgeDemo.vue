<script setup>
import Badge from '@/components/base/Badge.vue'
</script>

<template>
  <div> BadgeDemo: </div>
  <div class="space-x-16">
    <span>type:</span>
    <Badge content="default" type="default">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="success" type="success">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="info" type="info">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="warning" type="warning">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="error" type="error">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="primary" type="primary">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="secondary" type="secondary">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="accent" type="accent">
      <span class="text-xl"> update</span>
    </Badge>
  </div>
  <div class="space-x-20">
    <span>size:</span>
    <Badge content="xs" size="sm">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="base">
      <span class="text-xl"> update</span>
    </Badge>
    <Badge content="lg" size="lg">
      <span class="text-xl"> update</span>
    </Badge>
  </div>
  <div class="space-x-20">
    <span>other:</span>
    <Badge>
      <span class="text-xl"> demo </span>
    </Badge>
  </div>
</template>
