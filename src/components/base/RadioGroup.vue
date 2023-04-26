<!-- <script setup lang="ts">
const props = defineProps<{
  label?: string
  options?: string[] | Array<{ label: string; content: string; value: unknown }>
}>()

const emit = defineEmits<{
  (evt: 'update:value', val: unknown): void
  (evt: 'change', val: unknown): void
}>()
</script>

<template>
  <div v-for="option in props.options" :key="option" v-slot="{ checked, active }" class="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
    <input type="radio" name="project-type" value="Existing Customers" class="sr-only" aria-labelledby="project-type-1-label" aria-describedby="project-type-1-description-0 project-type-1-description-1">
    <span class="flex flex-1">
      <span class="flex flex-col">
        <span class="block text-sm font-medium text-gray-900">{{ option.title }}</span>
        <span class="mt-1 flex items-center text-sm text-gray-500">{{ option.content }}</span>
      </span>
    </span>
    //-- Not Checked: "invisible"
    //--     :class="{ 'h-5 w-5 text-indigo-600': checked, 'invisible': !checked }"
    <svg

      :class="{
        'bg-primary-500 text-white ': checked,
        'text-gray-900 hover:bg-primary-500 hover:text-white': !checked,
      }"
      viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"
    >
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
    </svg>

       // Active: "border", Not Active: "border-2"
       // Checked: "border-indigo-600", Not Checked: "border-transparent"

    <span class="pointer-events-none absolute -inset-px rounded-lg border-2" aria-hidden="true" />
  </div>
</template> -->

<script setup lang="ts">
const props = defineProps<{
  label?: string
  checked?: boolean
  options?: string[] | Array<{ label: string; value: unknown }>
}>()

const emit = defineEmits<{
  (evt: 'update:value', val: unknown): void
  (evt: 'change', val: unknown): void
}>()
</script>

<template>
  <div>
    <label class="text-base font-semibold text-gray-900">Notifications</label>
    <p class="text-sm text-gray-500">
      How do you prefer to receive notifications?
    </p>
    <fieldset class="mt-4">
      <legend class="sr-only">
        Notification method
      </legend>
      <div class="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
        <div v-for="(notificationMethod, index) in props.options" :key="index" class="flex flex-col items-start p-2 border border-gray-300 rounded-md">
          <div class="flex items-center justify-between w-full">
            <span class="block text-sm font-medium text-gray-900">option.title</span>
            <span class="flex items-center">
              <input :id="notificationMethod.id" name="notification-method" type="radio" :checked="notificationMethod.id === 'email'" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600">
              <!-- <label :for="notificationMethod.id" class="ml-3 block text-sm font-medium leading-6 text-gray-900">{{ notificationMethod.title }}</label> -->
              <!--     checked ? themes[type].text : 'text-gray-200', -->
              <svg
                v-if="icon"
                fill="currentColor" viewBox="0 0 12 12"
              >
                <path v-if="checked" d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                <path v-else d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </div>

          <div class="mt-1  text-sm text-gray-500">
            option.content
          </div>
        </div>
      </div>
    </fieldset>
  </div>
</template>
