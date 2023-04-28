<script setup lang="ts">
import { ref } from 'vue'
import FileInput from '@/components/base/FileInput.vue'

const fileList = ref<any>([])

function afterUpload(event: Event) {
  console.log('File uploaded', event)
}
</script>

<template>
  <div class="my-4 flex items-center space-x-5">
    <div class="w-72">
      <FileInput
        v-model:file-list="fileList"
        @change="afterUpload"
      />
    </div>
    <div class="w-72">
      <FileInput
        v-model:file-list="fileList"
        multiple
      />
    </div>
    <FileInput>
      <div class="btn inline-block">
        <div class="flex items-center justify-center">
          <div class="i-mdi:lightning-bolt" />
          <span class="mr-2">Upload</span>
        </div>
      </div>
      <div v-for="(item, idx) in fileList" :key="idx">
        {{ item.name }}
      </div>
    </FileInput>
  </div>
</template>
