<script setup>
const placeHolder = defineProps({
  placeholder: String
})
defineEmits(['search'])
</script>

<template>
  <div class="flex w-full justify-center px-4">
    <input type="text" :placeholder="placeHolder.placeholder"
      class="w-full max-w-xl px-4 py-2 border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 plaholder-white text-white bg-primary"
      @input="$emit('search', $event.target.value)">
  </div>
</template>
