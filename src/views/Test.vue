<script>
export default {
  data() {
    return {
      options: [
        { label: '选项1', value: 'option1' },
        { label: '选项2', value: 'option2' },
        { label: '选项3', value: 'option3' },
        { label: '选项4', value: 'option4' },
      ],
      selectedOption: '',
      keyword: '',
    }
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option => option.label.includes(this.keyword))
    },
  },
}
</script>

<template>
  <div>
    <input v-model="keyword" type="text">
    <select v-model="selectedOption">
      <option v-for="option in filteredOptions" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>
