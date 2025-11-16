<template>
  <section class="flex min-h-screen items-center justify-center bg-gray-50 py-16">
    <div class="container mx-auto max-w-5xl px-4 flex flex-col items-center">

      <div class="text-center">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bebas-neue leading-tight">
          APAKAH USAHA ANDA SIAP JADI INSPIRASI BAGI SESAMA
          <span class="orange-primary">UMKM?</span>
        </h2>
      </div>

      <div class="relative h-80 w-full my-16 items-center justify-center hidden lg:flex"> <div class="card absolute transform border border-gray-50 border-6 -translate-x-80
                    translate-y-12
                    scale-90 z-10 w-65 h-70 py-14 px-3">
          <img src="/icon/no-img.png" alt="Card 1">
        </div>

        <div class="card absolute transform border border-gray-50 border-6 -translate-x-40
                    translate-y-6
                    scale-95 z-20 w-65 h-70 py-14 px-3">
          <img src="/icon/no-img.png" alt="Card 2">
        </div>

        <div class="card absolute transform border border-gray-50 border-6 scale-100 z-30 w-65 h-70 py-14 px-3"> <img src="/icon/no-img.png" alt="Card 3">
        </div>

        <div class="card absolute transform border border-gray-50 border-6 translate-x-40
                    translate-y-6
                    scale-95 z-20 w-65 h-70 py-14 px-3">
          <img src="/icon/no-img.png" alt="Card 4">
        </div>

        <div class="card absolute transform border border-gray-50 border-6 translate-x-80
                    translate-y-12
                    scale-90 z-10 w-65 h-70 py-14 px-3">
          <img src="/icon/no-img.png" alt="Card 5">
        </div>
      </div>

      <div class="w-full my-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden"> <div class="card w-full h-48 py-6 px-3">
           <img src="/icon/no-img.png" alt="Card 1">
        </div>
        <div class="card w-full h-48 py-6 px-3">
           <img src="/icon/no-img.png" alt="Card 2">
        </div>
        <div class="card w-full h-48 py-6 px-3">
           <img src="/icon/no-img.png" alt="Card 3">
        </div>
        <div class="card w-full h-48 py-6 px-3">
           <img src="/icon/no-img.png" alt="Card 4">
        </div>
        <div class="card w-full h-48 py-6 px-3">
           <img src="/icon/no-img.png" alt="Card 5">
        </div>
        </div>


      <div class="text-center max-w-lg">
        <p class="mt-4 font-poppins text-base sm:text-lg">
          Karena setiap langkah kecil pelaku UMKM membawa perubahan besar untuk Indonesia.
        </p>
      </div>

      <div class="mt-8">
        <button
          class="bg-[#3a6b5a] hover:bg-[#2f5a4a] text-white font-medium py-3 px-8 rounded-full shadow-lg transition-colors text-base sm:text-lg">
          Gabung Sekarang
        </button>
      </div>

      <div class="justify-end">
        <a href="/chatbot" class="fixed bottom-8 right-8 z-50 
                    bg-gray-800 rounded-full 
                    w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center 
                    shadow-xl transition-all duration-300 
                    hover:scale-105 hover:shadow-2xl focus:outline-none" aria-label="Pusat Bantuan">
          <img src="/ai.png" alt="Pusat Bantuan" class="w-full h-full object-contain">
        </a>
      </div>

    </div>
  </section>
</template>

<style scoped>
.card {
  /* position: absolute; --> DIHAPUS DARI SINI */
  border-radius: 0.75rem;
  /* border-width: 4px; */
  background-color: #FF8A00;
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  transform-origin: center center;
}

.placeholder-icon {
  font-size: 5rem;
  color: #D1D5DB;
}
</style>