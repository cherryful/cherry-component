<script setup lang="ts">
import { h, nextTick, ref, watch } from 'vue'
import Tag from '@/components/base/Tag.vue'
import DynamicTags from '@/components/base/DynamicTags.vue'

const tagNames = ref(['AAAA', 'BBBB', 'CCCC'])

function renderTag(tag: string, index: number) {
  return h(Tag, {
    type: index % 2 === 0 ? 'primary' : 'success',
    closeable: true,
    onClose: () => tagNames.value.splice(index, 1),
  }, {
    default: () => tag,
  })
}

const newTagValue = ref('')
const newTagInputRef = ref<HTMLInputElement | null>(null)
watch(newTagInputRef, (value) => {
  nextTick(() => value?.focus())
})
</script>

<template>
  DynamicTags Demo:
  <div class="flex items-center gap-4">
    <span> Basic Usage </span>
    <DynamicTags v-model="tagNames" />
  </div>
  <div class="flex items-center gap-4">
    <span> Max 3 </span>
    <DynamicTags v-model="tagNames" :max="3" />
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Render </span>
    <DynamicTags v-model="tagNames" :render-tag="renderTag" />
  </div>
  <div class="flex items-center gap-4">
    <span> Not Closeable </span>
    <DynamicTags v-model="tagNames" :closeable="false" />
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Trigger </span>
    <DynamicTags v-model="tagNames">
      <template #trigger>
        <button class="h-4 w-4 flex items-center rounded-full bg-red-500" />
      </template>
    </DynamicTags>
  </div>
  <div class="flex items-center gap-4">
    <span> Custom Input </span>
    <DynamicTags v-model="tagNames">
      <template #input="{ submit, deactive }">
        <input
          ref="newTagInputRef"
          v-model="newTagValue"
          class="h-7 w-20 border border-gray-300 rounded px-2 text-sm"
          @keyup.enter="$event => {
            submit($event)
            newTagValue = ''
          }"
          @blur="deactive"
        >
      </template>
    </DynamicTags>
  </div>
</template>
