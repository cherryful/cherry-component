<script setup lang="ts">
import Tag from '@/components/Tag.vue'

function onClose() {
  alert('close')
}
</script>

<template>
  <div class="space-y-4">
    Tag Demo:
    <div class="space-x-3">
      <span class="inline-block w-20">
        size:
      </span>
      <Tag size="sm">
        sm
      </Tag>
      <Tag>
        base
      </Tag>
      <Tag size="lg">
        lg
      </Tag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        type:
      </span>
      <Tag type="default">
        default
      </Tag>
      <Tag type="success">
        success
      </Tag>
      <Tag type="info">
        info
      </Tag>
      <Tag type="warning">
        warning
      </Tag>
      <Tag type="error">
        error
      </Tag>
      <Tag type="primary">
        primary
      </Tag>
      <Tag type="secondary">
        primary
      </Tag>
      <Tag type="accent">
        primary
      </Tag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        rounded:
      </span>
      <Tag rounded="sm">
        sm
      </Tag>
      <Tag rounded="base">
        base
      </Tag>
      <Tag rounded="lg">
        lg
      </Tag>
      <Tag>
        full
      </Tag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        border:
      </span>
      <Tag>
        no-border
      </Tag>
      <Tag :border="true">
        border
      </Tag>
    </div>
    <div class="flex items-center space-x-3">
      <span class="inline-block w-20">
        icon:
      </span>
      <Tag>
        <div class="flex items-center justify-center">
          <span class="i-mdi:lightning-bolt text-4" />
          <span> Lightning </span>
        </div>
      </Tag>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <Tag custom="bg-pink-200 text-pink-600 px-4 py-2 border-2 border-pink-600 rounded-xl">
        custom
      </Tag>
      <Tag closeable @close="onClose">
        closeable
      </Tag>
    </div>
  </div>
</template>
