<template>
  <aside class="bg-gray-50 p-6 rounded-lg shadow-sm">

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">LOKASI</h3>
      <div class="space-y-2">
        <div>
          <input type="checkbox" id="loc1" class="rounded text-orange-500">
          <label for="loc1" class="ml-2 text-sm text-gray-600">Terdekat Dari Lokasi Anda</label>
        </div>
        <div>
          <input type="checkbox" id="loc2" class="rounded text-orange-500">
          <label for="loc2" class="ml-2 text-sm text-gray-600">Lorem Ipsum Dolor Amet</label>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">KATEGORI</h3>
      <div class="space-y-2">
        <div>
          <input type="checkbox" id="cat1" class="rounded text-orange-500">
          <label for="cat1" class="ml-2 text-sm text-gray-600">Makanan</label>
        </div>
        <div>
          <input type="checkbox" id="cat2" class="rounded text-orange-500">
          <label for="cat2" class="ml-2 text-sm text-gray-600">Minuman</label>
        </div>
        <div>
          <input type="checkbox" id="cat3" class="rounded text-orange-500">
          <label for="cat3" class="ml-2 text-sm text-gray-600">Jasa</label>
        </div>
        <div>
          <input type="checkbox" id="cat4" class="rounded text-orange-500">
          <label for="cat4" class="ml-2 text-sm text-gray-600">Pertanian & Perkebunan</label>
        </div>
        <div>
          <input type="checkbox" id="cat5" class="rounded text-orange-500">
          <label for="cat5" class="ml-2 text-sm text-gray-600">Alat Tulis</label>
        </div>
        <div>
          <input type="checkbox" id="cat6" class="rounded text-orange-500">
          <label for="cat6" class="ml-2 text-sm text-gray-600">Fashion & Aksesoris</label>
        </div>
        <div>
          <input type="checkbox" id="cat7" class="rounded text-orange-500">
          <label for="cat7" class="ml-2 text-sm text-gray-600">Kosmetik</label>
        </div>
      </div>
    </div>

    <div class="mb-6">
      <h3 class="font-semibold text-gray-800 mb-3">METODE PEMBAYARAN</h3>
      <div class="space-y-2">
        <div>
          <input type="checkbox" id="pay1" class="rounded text-orange-500">
          <label for="pay1" class="ml-2 text-sm text-gray-600">QRIS</label>
        </div>
        <div>
          <input type="checkbox" id="pay2" class="rounded text-orange-500">
          <label for="pay2" class="ml-2 text-sm text-gray-600">Transfer</label>
        </div>
        <div>
          <input type="checkbox" id="pay3" class="rounded text-orange-500">
          <label for="pay3" class="ml-2 text-sm text-gray-600">COD (Bayar Saat Barang Tiba)</label>
        </div>
      </div>
    </div>

    <button class="w-full bg-red-900 text-white py-2 rounded-lg font-medium hover:bg-red-800 transition-colors">
      Hapus Semua
    </button>
  </aside>
</template>

<script setup>
// Nanti di sini Anda bisa menambahkan 'emit' 
// untuk mengirim data filter yang dicentang ke halaman induk
</script>