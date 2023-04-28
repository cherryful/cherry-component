<script setup lang="ts">
import { ref } from 'vue'
import Toast from '@/components/base/Toast.vue'
import Button from '@/components/base/Button.vue'

type ToastCtx = InstanceType<typeof Toast>

const toast1 = ref<ToastCtx | null>(null)

const position = ref<'top' | 'bottom' >('top')
const align = ref<'left' | 'center' | 'right'>('center')
</script>

<template>
  <Toast ref="toast1" :queue="false" :timeout="1000" />
  <Toast ref="toast2" v-slot="{ type }">
    <div class="bg-orange-400 p-3 rounded text-white font-bold text-lg">
      Type:  {{ type }}
    </div>
  </Toast>
  <Toast ref="toast3" />
  <Toast ref="toast4" :position="position" :align="align" />

  <div class="space-y-4">
    <div class="space-x-4">
      <Button @click="toast1?.info('This is a no queue toast.')">
        Toast1: no-queue, timeout-1000
      </Button>
    </div>
    <div class="space-x-4">
      <Button
        type="success"
        @click="($refs.toast2 as ToastCtx)?.success('This is a custom toast.')"
      >
        Toast2: Custom Slot
      </Button>
      <Button
        type="info"
        @click="($refs.toast2 as ToastCtx)?.info('This is a custom toast.')"
      >
        Toast2: Custom Slot
      </Button>
      <Button
        type="warning"
        @click="($refs.toast2 as ToastCtx)?.warning('This is a custom toast.')"
      >
        Toast2: Custom Slot
      </Button>
      <Button
        type="error"
        @click="($refs.toast2 as ToastCtx)?.error('This is a custom toast.')"
      >
        Toast2: Custom Slot
      </Button>
    </div>
    <div class="space-x-4">
      <Button
        type="success"
        @click="($refs.toast3 as ToastCtx).success('This is a warning toast.')"
      >
        Toast3: Success
      </Button>
      <Button
        type="info"
        @click="($refs.toast3 as ToastCtx).info('This is a info toast.')"
      >
        Toast3: Info
      </Button>
      <Button
        type="warning"
        @click="($refs.toast3 as InstanceType<typeof Toast>).warning('This is a warning toast.')"
      >
        Toast3: Warning
      </Button>
      <Button
        type="error"
        @click="($refs.toast3 as ToastCtx).error('This is a error toast.')"
      >
        Toast3: Error
      </Button>
    </div>
    <div class="space-x-4">
      <Button
        type="secondary"
        @click="
          position = 'top';
          align = 'center';
          ($refs.toast4 as ToastCtx).info('This is a top-center toast.')
        "
      >
        Toast4: top center
      </Button>
      <Button
        type="secondary"
        @click="
          position = 'bottom';
          align = 'center';
          ($refs.toast4 as ToastCtx).info('This is a bottom-center toast.')
        "
      >
        Toast4: bottom center
      </Button>
      <Button
        type="secondary"
        @click="
          position = 'top';
          align = 'left';
          ($refs.toast4 as ToastCtx).info('This is a top-left toast.')
        "
      >
        Toast4: top left
      </Button>
      <Button
        type="secondary"
        @click="
          position = 'top';
          align = 'right';
          ($refs.toast4 as ToastCtx).info('This is a top-right toast.')
        "
      >
        Toast4: top right
      </Button>
      <Button
        type="secondary"
        @click="
          position = 'bottom';
          align = 'left';
          ($refs.toast4 as ToastCtx).info('This is a bottom-left toast.')
        "
      >
        Toast4: bottom left
      </Button>
      <Button
        type="secondary"
        @click="
          position = 'bottom';
          align = 'right';
          ($refs.toast4 as ToastCtx).info('This is a bottom-right toast.')
        "
      >
        Toast4: bottom right
      </Button>
    </div>
  </div>
</template>
