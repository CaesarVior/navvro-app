<template>
  <div>
    <select
      class="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @change="$emit('filter', $event.target.value)"
    >
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup>
defineProps({
  categories: {
    type: Array,
    required: true
  }
})
defineEmits(['filter'])
</script>
