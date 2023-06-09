<script setup lang="ts">
import { computed, reactive } from 'vue'
import { vOnClickOutside } from '@vueuse/components'

interface Option {
  label: string
  value: string | number
  [key: string]: unknown
}

const props = withDefaults(defineProps<{
  label?: string
  modelValue: string | number | null
  placeholder?: string
  disabled?: boolean
  clearable?: boolean
  filterable?: boolean
  options?: Array<Option>
  display?: string
  errorMessage?: string
}>(), {
  label: '',
  display: 'label',
  placeholder: 'Please select',
  disabled: false,
  clearable: false,
  filterable: false,
  options: () => [],
  errorMessage: '',
})

const emit = defineEmits<{
  (evt: 'update:modelValue', val: string | number | null): void
  (evt: 'change', val: string | number | null): void
}>()

const selected = computed({
  get: () => props.modelValue,
  set: (val) => {
    emit('update:modelValue', val)
    emit('change', val)
  },
})

const selectedLabel = computed(() => {
  return props.options?.find(opt => opt.value === selected.value)?.[props.display] || props.placeholder
})

const flux = reactive({
  show: false,
  onSelect(value: string | number | null) {
    flux.show = false
    selected.value = value
  },
  display(item: Option) {
    return item[props.display || 'label']
  },
  clear() {
    selected.value = null
    flux.show = false
  },
  toggleMenu() {
    if (props.disabled)
      return
    flux.show = !flux.show
  },
})
</script>

<template>
  <div>
    <label id="listbox-label" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <div
      v-on-click-outside="() => flux.show = false"
      class="relative my-1"
    >
      <button
        type="button"
        class="group relative w-full rounded-md bg-white py-1.5 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset sm:text-sm sm:leading-6 focus:outline-none focus:ring-2"
        aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label"
        :class="{
          'ring-red-500 text-red-500 focus:ring-red-500': errorMessage,
          'ring-gray-300 text-gray-900 focus:ring-indigo-600': !errorMessage,
          'opacity-40 cursor-not-allowed': disabled,
          'cursor-default': !disabled,
        }"
        @click="flux.toggleMenu"
      >
        <span v-if="!selected" class="block min-h-6 text-gray-400">
          {{ placeholder }}
        </span>
        <span v-else class="block truncate">
          {{ selectedLabel }}
        </span>
        <span class="absolute inset-y-0 right-0 flex items-center pr-2 text-gray-500">
          <template v-if="clearable && selected">
            <div
              class="i-mi:select group-hover:i-mi:circle-error h-5 w-5 group-hover:h-5 group-hover:w-5 hover:cursor-pointer"
              @click.stop="flux.clear"
            />
          </template>
          <template v-else>
            <div class="i-mi:select h-5 w-5" />
          </template>
        </span>
      </button>
      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ul
          v-if="flux.show"
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm focus:outline-none" tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3"
        >
          <li
            v-for="option of options"
            id="listbox-option-0"
            :key="option.value"
            role="option"
            class="text relative cursor-default select-none py-2 pl-3 pr-9"
            :class="{
              'bg-primary-500 text-white ': modelValue === option.value,
              'text-gray-900 hover:bg-primary-500 hover:text-white': modelValue !== option.value,
            }"
            @click="flux.onSelect(option.value)"
          >
            <template v-if="modelValue === option.value">
              <span class="block truncate font-normal">
                {{ flux.display(option) }}
              </span>
              <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                </svg>
              </span>
            </template>
            <template v-else>
              {{ flux.display(option) }}
            </template>
          </li>
        </ul>
      </transition>
    </div>
    <div v-if="errorMessage" class="text-xs text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>
