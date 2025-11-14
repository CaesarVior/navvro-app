<template>
    <div class="relative min-h-screen w-full overflow-hidden text-white">

        <div class="absolute top-0 left-0 right-0 h-[600px] z-0 bg-[url('/icon/about_banner.png')] bg-cover bg-center">
        </div>
        <div class="absolute inset-0 z-1"></div>


        <div class="relative z-10">

            <main class="container mx-auto lg:pt-24 justify-center" >
                <div class="flex flex-col lg:flex-row items-center">

                    <div class="w-full lg:w-1/2 text-center lg:text-left">
                        <h2 class="font-bebas-neue text-primary text-5xl">Mendorong Pertumbuhan <br>UMKM
                            Indonesia</h2>
                        <br>
                        <p class="text-primary font-poppins">
                            Setiap produk lokal punya cerita dan semangat yang <br> layak dikenal masyarakat.
                        </p>

                        <button
                            class="mt-8 bg-[#3a6b5a] hover:bg-[#2f5a4a] text-white font-medium py-3 px-6 rounded-full flex items-center gap-2 mx-auto lg:mx-0 shadow-lg transition-colors">
                            <Icon name="heroicons:shopping-bag" class="w-5 h-5" />
                            <span>Lihat Etalase Kami</span>
                        </button>
                    </div>

                    <div class="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center lg:justify-end ">
                        <img src="/images/img-about.png" alt="Mangkok Makanan UMKM"
                            class="w-120 max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
                    </div>

                </div>
            </main>

        </div>
    </div>
</template>

<script setup>
useHead({
    title: 'NAVVR0 - Mendorong Pertumbuhan UMKM Indonesia'
})
</script>
