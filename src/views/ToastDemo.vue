<script setup lang="ts">
import { ref } from 'vue'
import Toast from '@/components/base/Toast.vue'
import Button from '@/components/base/Button.vue'

type ToastCtx = InstanceType<typeof Toast>

const toast1 = ref<ToastCtx | null>(null)
const toast2 = ref<ToastCtx | null>(null)
const toast3 = ref<ToastCtx | null>(null)
</script>

<template>
  <Toast ref="toast1" :queue="false" />
  <Toast ref="toast2" />
  <Toast ref="toast3" position="bottom">
    1111
  </Toast>

  <div class="space-x-4">
    <Button
      @click="toast1?.show('This is a no queue toast.', 'info')"
    >
      Toast1: No Queue
    </Button>
    <Button
      type="primary"
      @click="toast3?.show('This is a custom toast.', 'success')"
    >
      Toast2: Custom Slot
    </Button>
    <Button
      type="success"
      @click="toast2?.show('This is a warning toast.', 'success')"
    >
      Toast3: Success
    </Button>
    <Button
      type="info"
      @click="($refs as any).toast2.show('This is a info toast.', 'info')"
    >
      Toast3: Info
    </Button>
    <Button
      type="warning"
      @click="($refs.toast2 as InstanceType<typeof Toast>).show('This is a warning toast.', 'warning')"
    >
      Toast3: Warning
    </Button>
    <Button
      type="error"
      @click="($refs.toast2 as ToastCtx).show('This is a error toast.', 'error')"
    >
      Toast3: Error
    </Button>
  </div>
</template>
