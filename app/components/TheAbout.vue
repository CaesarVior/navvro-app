<template>
    <div class="primary-collor">
        <main class="container mx-auto px-6 mt-16">
            <section class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div class="prose max-w-none">
                    <h2 class="font-bebas-neue text-primary" style="font-size: 35px;">Mendorong Pertumbuhan <br>UMKM
                        Indonesia</h2>
                    <br>
                    <p class="text-primary">
                        Setiap produk lokal punya cerita dan <br>semangat yang layak dikenal masyarakat. 
                    </p>
                    <br>
                    <div>
                        <template>
                            <NuxtLink to="/etalase">
                                <button ref="myButton" type="button"
                                    class="green-primary text-white hover:bg-green-800 font-medium rounded-full text-sm px-2 py-1 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    <img src="/icon/store.png" alt="" class="w-6">
                                    <span class="ps-2 text-center align-center ">Lihat Etalase Kami</span>
                                </button>
                            </NuxtLink>

                        </template>
                    </div>
                </div>

                <div class="flex justify-end">
                    <img src="/images/img-about.png" alt="About image" class="w-120" />
                </div>
            </section>
        </main>
    </div>
</template>