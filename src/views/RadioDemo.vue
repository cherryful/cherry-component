<script setup>
import { ref } from 'vue'

import Radio from '@/components/Radio.vue'

const checkValue = ref('durian')
const onChangeVal = ref('')

function onChange(val) {
  onChangeVal.value = `onChange: ${val}`
}
</script>

<template>
  <div class="space-x-5">
    checked: {{ checkValue }} |
    {{ onChangeVal }}
  </div>
  <div class="flex gap-4">
    <Radio v-model="checkValue" type="success" value="apple" @change="onChange">
      <div>
        apple
      </div>
    </Radio>
    <Radio v-model="checkValue" type="info" value="banana" @change="onChange">
      banana
    </Radio>
    <Radio v-model="checkValue" type="warning" value="orange" @change="onChange">
      orange
    </Radio>
    <Radio v-model="checkValue" type="error" value="pear" @change="onChange">
      pear
    </Radio>
    <Radio v-model="checkValue" type="primary" value="graph" @change="onChange">
      graph
    </Radio>
    <Radio v-model="checkValue" type="secondary" value="mongo" @change="onChange">
      mongo
    </Radio>
    <Radio v-model="checkValue" type="accent" value="watermelon" @change="onChange">
      watermelon
    </Radio>
    <Radio v-model="checkValue" disabled value="durian" @change="onChange">
      durian
    </Radio>
  </div>
  <div class="flex gap-4">
    <Radio v-model="checkValue" bordered type="success" value="apple" @change="onChange">
      apple
    </Radio>
    <Radio v-model="checkValue" bordered type="info" value="banana" @change="onChange">
      banana
    </Radio>
    <Radio v-model="checkValue" bordered type="warning" value="orange" @change="onChange">
      orange
    </Radio>
  </div>
  <div class="flex gap-4">
    <Radio v-slot="{ checked }" v-model="checkValue" hidden type="success" value="apple" @change="onChange">
      <div
        class="h-8 w-8 border-2 border-white rounded-full bg-success-500"
        :class=" {
          'ring-2 ring-success-500': checked,
        }
        "
      />
    </Radio>
    <Radio v-slot="{ checked }" v-model="checkValue" hidden type="info" value="banana" @change="onChange">
      <div
        class="h-8 w-8 border-2 border-white rounded-full bg-info-500"
        :class="{
          'ring-2 ring-info-500': checked,
        }"
      />
    </Radio>
    <Radio v-slot="{ checked }" v-model="checkValue" hidden type="warning" value="orange" @change="onChange">
      <div
        class="h-8 w-8 border-2 border-white rounded-full bg-warning-500"
        :class="{
          'ring-2 ring-warning-500': checked,
        }"
      />
    </Radio>
  </div>
</template>
