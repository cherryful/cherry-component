<script setup>
import { onMounted, ref } from 'vue'

import ModalDemo from './ModalDemo.vue'
import ButtonDemo from './ButtonDemo.vue'
import TagDemo from './TagDemo.vue'
import CheckboxDemo from './CheckboxDemo.vue'
import RadioDemo from './RadioDemo.vue'
import ProgressDemo from './ProgressDemo.vue'
import SwitchDemo from './SwitchDemo.vue'
import DrawerDemo from './DrawerDemo.vue'
import AlertDemo from './AlertDemo.vue'
import InputDemo from './InputDemo.vue'
import PopoverDemo from './PopoverDemo.vue'
import DividerDemo from './DividerDemo.vue'
import TabDemo from './TabDemo.vue'
import BadgeDemo from './BadgeDemo.vue'
import DropdownDemo from './DropdownDemo.vue'
import SelectDemo from './SelectDemo.vue'
import LoadingDemo from './LoadingDemo.vue'
import CollapseDemo from './CollapseDemo.vue'
import FileInputDemo from './FileInputDemo.vue'
import ToastDemo from './ToastDemo.vue'
import SkeletonDemo from './SkeletonDemo.vue'
import TableDemo from './TableDemo.vue'
import TreeDemo from './TreeDemo.vue'
import DynamicTagsDemo from './DynamicTagsDemo.vue'

import { useStore } from '@/store'
import useMouseClick from '@/composables/useMouse'
import api from '@/api'

const store = useStore()

const mouse = useMouseClick()
const sentence = ref('君子不器。')

onMounted(() => {
  fetchSentence()
})

async function fetchSentence() {
  const resp = await api.oneSentence()
  sentence.value = resp.hitokoto
}
</script>

<template>
  <div class="mx-5">
    <div class="my-5 space-y-5">
      <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy text-3xl" />
      <div>
        <button class="mr-5 bg-amber-500 btn hover:bg-amber-600" @click="fetchSentence">
          Fetch API
        </button>
        {{ sentence }}
      </div>

      <div>
        <div class="mr-5 bg-blue-500 btn hover:bg-blue-600" @click="store.increment">
          Increase Store Count
        </div>
        <span class="text-xl font-bold text-green-400">
          {{ store.count }}
        </span>
      </div>

      <div>
        <RouterLink to="/hello">
          <div class="bg-red-500 btn hover:bg-red-600">
            To Hello Page
          </div>
        </RouterLink>
      </div>

      <div>
        <div class="inline-block border p-4">
          useMouseClick hook
          <p>
            Mouse click x:
            <span class="text-lg font-bold text-red-500">
              {{ mouse.x }}
            </span>
          </p>
          <p>
            Mouse click y:
            <span class="text-lg font-bold text-blue-500">
              {{ mouse.y }}
            </span>
          </p>
        </div>
      </div>

      <ModalDemo />
      <ButtonDemo />
      <TagDemo />
      <ProgressDemo />
      <CheckboxDemo />
      <SwitchDemo />
      <AlertDemo />
      <InputDemo />
      <PopoverDemo />
      <DrawerDemo />
      <TabDemo />
      <DividerDemo />
      <BadgeDemo />
      <SelectDemo />
      <DropdownDemo />
      <LoadingDemo />
      <RadioDemo />
      <CollapseDemo />
      <FileInputDemo />
      <ToastDemo />
      <SkeletonDemo />
      <TableDemo />
      <TreeDemo />
      <DynamicTagsDemo />
    </div>
  </div>
</template>
