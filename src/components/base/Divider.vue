<script setup lang="ts">
interface Props {
  align?: 'left' | 'right' | 'center'
  dashed?: boolean
}

withDefaults(defineProps<Props>(), {
  align: 'center',
  dashed: false,
})
</script>

<template>
  <div class="relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div
        class="w-full border-t border-gray-300"
        :class="{
          'border-dashed': dashed,
        }"
      />
    </div>
    <div
      class="relative flex"
      :class="{
        'justify-center': align === 'center',
        'justify-end': align === 'right',
        'justify-start': align === 'left',
      }"
    >
      <slot />
    </div>
  </div>
</template>
