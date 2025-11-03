<template>
  <section class="flex min-h-screen items-center justify-center bg-gray-50 py-16">
    <div class="container mx-auto max-w-5xl px-4">
      <div class="grid grid-cols-1 items-center gap-12 md:grid-cols-2">

        <div class="card-stack relative h-96 w-full max-w-md justify-self-center">
          <div ref="card1" class="card">
            <img src="/images/foto-1.jpg" alt="Foto UMKM 1" />
          </div>
          <div ref="card2" class="card">
            <img src="/images/foto-2.jpg" alt="Foto UMKM 2" />
          </div>
          <div ref="card3" class="card">
            <img src="/icon/no-img.png" alt="No Image Placeholder" />
          </div>
        </div>

        <div class="text-center md:text-left">
          <h2 class="text-3xl font-semibold leading-tight text-gray-800 md:text-4xl">
            APAKAH USAHA ANDA SIAP JADI INSPIRASI BAGI SESAMA
            <span class="text-orange-500">UMKM?</span>
          </h2>
          <p class="mt-4 text-lg text-gray-600">
            Karena setiap langkah kecil pelaku UMKM membawa perubahan besar untuk Indonesia.
          </p>
          
          <!-- <button class="mt-8 inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-green-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            <Icon name="mdi:store-outline" size="1.25em" />
            Gabung Sekarang
          </button> -->
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

const card1 = ref(null)
const card2 = ref(null)
const card3 = ref(null)

const posTop = { x: 0, y: 50, rotate: 0, scale: 1, zIndex: 30 } 
const posMid = { x: 30, y: 0, rotate: 0, scale: 0.95, zIndex: 20 } 
const posBot = { x: 60, y: -50, rotate: 0, scale: 0.9, zIndex: 10 }

// --- MULAI DEBUG ---
onMounted(() => {
  // Debug log bisa Anda hapus atau biarkan
  console.log("===== DEBUG ANIMASI DIMULAI =====");

  if (!card1.value || !card2.value || !card3.value) {
    console.error("GAGAL: Ref elemen null!");
    return
  }
  
  console.log("Elemen Ref ditemukan.");

  const cards = [card1.value, card2.value, card3.value]

  // --- INI BAGIAN YANG HARUS DIPERBAIKI ---
  // Kita ingin Card 3 di depan, Card 2 di tengah, Card 1 di belakang
  
  gsap.set(cards[2], posTop) // cards[2] adalah card3 -> Set ke posTop (Depan)
  gsap.set(cards[1], posMid) // cards[1] adalah card2 -> Set ke posMid (Tengah)
  gsap.set(cards[0], posBot) // cards[0] adalah card1 -> Set ke posBot (Belakang)

  console.log("Posisi awal (gsap.set) berhasil diatur.");
  
  // Logika timeline ini sudah benar untuk "tarik dari belakang"
  const tl = gsap.timeline({
    repeat: -1,
    repeatDelay: 2.2,
    defaults: { duration: 0.8, ease: 'power2.inOut' },
  })

  // Siklus 1: Card 2 (dari tengah) maju ke depan
  tl.to(cards[1], posTop)    // Card 2 (Tengah) -> Maju ke Depan
    .to(cards[0], posMid, "<")    // Card 1 (Belakang) -> Maju ke Tengah
    .to(cards[2], posBot, "<")    // Card 3 (Depan) -> Mundur ke Belakang
  
    .call(() => {
      cards.unshift(cards.pop()) 
    })
    
  console.log("SUKSES: Timeline GSAP berhasil dibuat.");
})
// --- SELESAI DEBUG ---
</script>

<style scoped>
.card-stack {
  position: relative; 
}

.card {
  position: absolute;
  width: 80%;
  height: 100%;
  border-radius: 0.75rem;
  border-width: 6px;
  border-color: #F97316;
  background-color: #F3F4F6;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  
  overflow: hidden;
  transform-origin: center center; 
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>