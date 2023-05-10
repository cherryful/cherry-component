<script setup lang="ts">
import Alert from '@/components/Alert.vue'
</script>

<template>
  <div class="space-y-4">
    Alert Demo:
    <div class="space-x-3">
      <span class="inline-block w-20">
        type:
      </span>
      <div class="space-y-3">
        <Alert type="primary">
          I'm an alert with a color of primary
        </Alert>
        <Alert type="secondary">
          I'm an alert with a color of secondary
        </Alert>
        <Alert type="accent">
          I'm an alert with a color of accent
        </Alert>
        <Alert type="success">
          I'm an alert with a color of succcess
        </Alert>
        <Alert type="info">
          I'm an alert with a color of info
        </Alert>
        <Alert type="warning">
          I'm an alert with a color of warning
        </Alert>
        <Alert type="error">
          I'm an alert with a color of error
        </Alert>
      </div>
    </div>
    <div class="space-x-3">
      <span class="inline-block w-20">
        other:
      </span>
      <div class="space-y-3">
        <Alert icon="i-mdi:lightning-bolt">
          I'm an alert with a color of primary
        </Alert>
        <Alert closeable>
          I'm an alert with a close icon
        </Alert>
        <Alert no-icon>
          I'm an alert without icon and close icon
        </Alert>
        <Alert closeable>
          Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.
        </Alert>
      </div>
    </div>
  </div>
</template>
