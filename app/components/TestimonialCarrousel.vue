<template>
    <section class="w-90% max-w-6xl py-8 px-10 sm:px-6 bg-[#DBF0DF] xl:mx-auto mx-4 mb-10 rounded-2xl shadow-sm ">
        <div class="flex gap-3 items-center mb-6 text-[#473C3E]">
            <span class=" font-bebas-neue italic tracking-widetext-xl sm:text-4xl">
                4.5/<span class="text-xl">5</span>
            </span>
            <span class="font-poppins text-sm">
                Menumbuhkan <span class="font-bold">Ekonomi</span> <br /> Menguatkan Bangsa <br /> Bersama<span class="font-bold"> UMKM</span>
            </span>
        </div>
        <div class="relative flex items-center">
            <div ref="categoriesContainer" class="flex items-center space-x-8 pb-4 overflow-x-hidden scroll-smooth">
                <div v-for="category in categories" :key="category.name" class="flex-shrink-0">
                    <div :class="[
                        'bg-[#F6F8ED]',
                        'w-35 h-35 sm:w-61 sm:h-65',
                        'rounded-xl flex flex-col justify-center overflow-y-hidden',
                        'p-4 cursor-pointer',
                        'hover:shadow-md hover:translate-y-5 hover:bg-white hover:text-[#473C3E]',
                        'transition-all duration-400']">
                        <img src="/images/Vector.png" alt="kutip" class="w-3 h-3 mb-3 lg:mb-7 ">
                        <p class="text-xs mb-5 lg:mb-10 italic mb-4">{{ category.message }}</p>
                        <p class="text-xs font-poppins text-gray-700 w-full">
                            {{ category.name }}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
<script setup lang="ts">
import { ref, nextTick, onMounted, onUnmounted } from 'vue'; // 1. Impor onMounted & onUnmounted

// Definisikan tipe data untuk kategori
interface Category {
    name: string;
    message: string;
}

// Data Kategori
const baseCategories: Category[] = [
    { name: 'Nurfakiyah Ramadhani', message:'Seriusan ini produk UMKM? Keren parah sih tampilannya, harga juga masih masuk akal banget 😭🔥 bangga banget asli!', },
    { name: 'Caesar Vior', message: 'Gue beli kopi lokal di sini, rasanya juara sih. Udah gak mau beli yang instan lagi 😎☕', },
    { name: 'Jovita Maharani', message:'Akhirnya ada tempat belanja yang isinya produk asli Indonesia semua 😭 seneng banget bisa support usaha kecil kayak gini!', },
    { name: 'Sultan Alfayyad', message:'Desain web-nya lucu dan gampang banget dipake! Nih baru marketplace yang niat bantu UMKM, bukan cuma jualan doang 💪🧡', },
    { name: 'Arya Kavi', message:'Produk lokal makin maju aja. Dulu susah nyari ', },
];
const categories = ref<Category[]>([...baseCategories, ...baseCategories, ...baseCategories]);

// Definisikan ref untuk kontainer DOM
const categoriesContainer = ref<HTMLElement | null>(null);

// --- Logika Autoplay ---

// 2. Buat ref untuk menyimpan ID interval timer
// Kita gunakan 'any' untuk kesederhanaan, bisa juga NodeJS.Timeout
let fistScrol = true;
const autoplayInterval = ref<any>(null);
let autoplayDelay = 0; // 10 detik

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
    const scrollDistance = fistScrol ? itemWidth / 2 : itemWidth + 32;
    if (fistScrol) {
        fistScrol = false;
        autoplayDelay = 7000
    }
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