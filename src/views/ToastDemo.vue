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
    <div class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <div
              class="h-6 w-6"
              :class="{
                'i-mdi:check-circle text-success-400': type === 'success',
                'i-mdi:information-outline text-info-400': type === 'info',
                'i-mdi:alert-outline text-warning-400': type === 'warning',
                'i-mdi:alert-circle-outline text-error-400': type === 'error',
              }"
            />
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">
              This is the custom {{ type }}  toast!
            </p>
            <p class="mt-1 text-sm text-gray-500">
              Anyone with a link can now view this file.
            </p>
          </div>
        </div>
      </div>
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
