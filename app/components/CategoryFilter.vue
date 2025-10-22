<template>
  <!-- Ini adalah menu dropdown untuk memfilter berdasarkan kategori. -->
  <div>
    <select
      class="w-full md:w-auto px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      @change="$emit('filter', $event.target.value)"
    >
      <!-- Bagian ini melakukan perulangan untuk semua kategori yang tersedia dan membuat pilihan untuk masing-masing. -->
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
  </div>
</template>

<script setup>
// Bagian ini mendefinisikan jenis data apa yang diharapkan komponen ini untuk diterima dari induknya.
// Dalam hal ini, ia mengharapkan daftar 'kategori'.
defineProps({
  categories: {
    type: Array,
    required: true
  }
})
// Bagian ini mendefinisikan event khusus yang dapat dikirim komponen ini ke induknya.
// Dalam hal ini, ia dapat mengirim event 'filter' ketika sebuah kategori dipilih.
defineEmits(['filter'])
</script>
