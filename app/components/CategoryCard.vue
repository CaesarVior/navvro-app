<template>
  <section class="w-90% max-w-6xl py-8 px-10 sm:px-6 bg-gray-100 xl:mx-auto mx-4 mb-10 rounded-2xl shadow-sm ">
    <div class="flex justify-between items-center mb-6">
      <a class=" font-bebas-neue text-gray-800 tracking-widetext-xl sm:text-2xl">
        NAVRO
      </a>
      <NuxtLink to="/product"
        class="flex items-center justify-between bg-[#3a6b5a] text-white text-sm font-semibold font-poppins pl-4 pr-2 py-1.5 sm:py-2 rounded-full shadow-sm hover:bg-lime-700 transition-colors">
        <span>Lihat Semua</span>
        <span class="ml-2 flex items-center justify-center bg-white w-6 h-6 rounded-full">
          <svg class="w-4 h-4 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
      </NuxtLink>
    </div>
    <div class="relative flex items-center">
      <div ref="categoriesContainer" class="flex items-center space-x-8 pb-4 overflow-x-hidden scroll-smooth">
        <div v-for="category in categories" :key="category.name" class="flex-shrink-0">
          <div :class="[
            'bg-white',
            'w-28 h-28 sm:w-32 sm:h-32',
            'rounded-xl flex flex-col items-center justify-center',
            'p-3 text-center cursor-pointer',
            'hover:shadow-md hover:scale-[1.05] hover:bg-orange-100',
            'transition-all duration-400']">
            <span class="text-4xl sm:text-5xl mb-2">{{ category.icon }}</span>
            <p class="text-xs sm:text-sm font-poppins text-gray-700 leading-tight">
              {{ category.name }}
            </p>
          </div>
  
        </div>
      </div>
      <button @click="scrollCategories()" aria-label="Lihat lebih banyak"
        class="absolute right-0 z-10 bg-[#3a6b5a] w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-md hover:bg-lime-700 transition-colors -mr-5">
        <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
        </svg>
      </button>

    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'; // 1. Impor onMounted & onUnmounted

// Definisikan tipe data untuk kategori
interface Category {
  name: string;
  icon: string;
  bgColor: string;
}

// Data Kategori
const baseCategories: Category[] = [
  { name: 'Fashion & Aksesoris', icon: '👕', bgColor: 'bg-gray-50' },
  { name: 'Makanan', icon: '🍜', bgColor: 'bg-gray-50' },
  { name: 'Minuman', icon: '🍹', bgColor: 'bg-gray-50' },
  { name: 'Jasa', icon: '🤝', bgColor: 'bg-gray-50' },
  { name: 'Pertanian & Perkebunan', icon: '🌾', bgColor: 'bg-gray-50' },
  { name: 'ATK', icon: '📚', bgColor: 'bg-gray-50' },
  { name: 'Kosmetik', icon: '💄', bgColor: 'bg-gray-50' },
];
const categories = ref<Category[]>([...baseCategories, ...baseCategories, ...baseCategories]);

// Definisikan ref untuk kontainer DOM
const categoriesContainer = ref<HTMLElement | null>(null);

// --- Logika Autoplay ---

// 2. Buat ref untuk menyimpan ID interval timer
// Kita gunakan 'any' untuk kesederhanaan, bisa juga NodeJS.Timeout
const autoplayInterval = ref<any>(null);
const autoplayDelay = 3000; // 10 detik

// 3. Buat fungsi untuk MENGHENTIKAN timer
const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

// 4. Buat fungsi untuk MEMULAI timer
const startAutoplay = () => {
  stopAutoplay(); // Hentikan dulu jika ada yang berjalan (mencegah duplikat)
  autoplayInterval.value = setInterval(() => {
    scrollCategories(); // Panggil fungsi scroll utama
  }, autoplayDelay);
};

// 5. Gunakan lifecycle hooks
onMounted(() => {
  startAutoplay(); // Mulai autoplay saat komponen siap
});

onUnmounted(() => {
  stopAutoplay(); // Hentikan autoplay saat komponen dihancurkan (penting!)
});

// --- Fungsi Scroll Utama ---

const scrollCategories = async () => {
  // 6. RESET TIMER!
  // Hentikan timer yang sedang berjalan setiap kali fungsi ini dipanggil
  // (baik oleh klik manual ATAU oleh timer sebelumnya)
  stopAutoplay();

  if (!categoriesContainer.value) return;

  // A. Hitung Lebar Satu Item
  const firstItem = categoriesContainer.value.querySelector('.flex-shrink-0') as HTMLElement;
  if (!firstItem) return;

  // Asumsi '32' adalah jarak/gap antar item (misal: gap-8 di Tailwind -> 2rem -> 32px)
  const itemWidth = firstItem.getBoundingClientRect().width;
  const scrollDistance = itemWidth + 32;

  // B. Lakukan Scroll ke Kanan (SMOOTH)
  categoriesContainer.value.scrollTo({
    left: categoriesContainer.value.scrollLeft + scrollDistance,
    behavior: 'smooth'
  });

  // C. Manipulasi Array
  // Tunggu animasi scroll selesai (sekitar 300ms)
  await new Promise(resolve => setTimeout(resolve, 300));

  // Pindahkan item pertama ke belakang array.
  const first = categories.value.shift();
  if (first) {
    categories.value.push(first);
  }

  // D. Reset Posisi Scroll (AUTO)
  await nextTick();

  // Jeda singkat (seperti di kode Anda)
  await new Promise(resolve => setTimeout(resolve, 50));

  // 7. PENTING: Aktifkan kembali kode reset scroll Anda!
  // Tanpa ini, karosel Anda akan 'habis' dan berhenti di ujung.
  // categoriesContainer.value.scrollTo({
  //     left: categoriesContainer.value.scrollLeft - scrollDistance,
  //     behavior: 'auto' // Geser instan (tidak terlihat oleh mata)
  // });

  // 8. MULAI ULANG TIMER!
  // Setelah semua logika scroll selesai, mulai hitung mundur 10 detik lagi.
  startAutoplay();
};
</script>
<style>
/* 7. Opsional: Style untuk menyembunyikan scrollbar
  Ini menggunakan class `scrollbar-hide` yang kita tambahkan di atas.
*/
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* For IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>