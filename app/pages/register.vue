<template>
    <div class="flex flex-col lg:flex-row min-h-screen bg-white lg:h-screen lg:overflow-hidden">

        <div class="w-full lg:w-5/11 flex flex-col justify-center sm:p-12 lg:p-16 xl:p-24 order-last lg:order-first">
            <div class="w-full max-w-md mx-auto lg:px-11 py-14">
                <h1 class="lg:text-5xl color-text mb-2 text-center font-bebas-neue">
                    SELAMAT DATANG
                </h1>
                <p class="text-gray-500 font-poppins mb-8 text-center">
                    Silahkan daftarkan diri anda
                </p>

                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="nama">
                            Nama
                        </label>
                        <input type="text" id="nama" placeholder="Masukkan nama anda"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="telepon">
                            Nomor Telepon
                        </label>
                        <input type="tel" id="telepon" placeholder="Masukkan nomor telepon anda"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="email">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Masukkan email anda"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-6">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="password">
                            Password
                        </label>
                        <input type="password" id="password" placeholder="Masukkan password anda"
                            class="w-full font-poppins text-sm px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <button type="submit"
                        class="w-full bg-[#3a6b5a] text-white py-3 rounded-lg font-semibold hover:bg-[#2f5a4a] transition duration-300 shadow-md">
                        Masuk
                    </button>
                </form>

                <p class="font-poppins text-center text-xs text-gray-500 mt-8">
                    Apakah anda tidak mempunyai akun?
                    <a href="/login" class="font-semibold text-[#3a6b5a] hover:underline">
                        Masuk Sekarang
                    </a>
                </p>
            </div>
        </div>

        <div
            class="w-full lg:w-6/11 bg-[url('/icon/login_banner.png')] bg-cover bg-no-repeat text-white flex flex-col justify-end sm:p-12 lg:px-10 order-first lg:order-last">
            <div class="w-full mx-auto lg:px-3">
                <span
                    class="text-white font-poppins bg-[#474747] bg-transparent-50 rounded-md box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2 mb-3 focus:outline-none">
                    Sudah dipercaya oleh 1000 pelaku UMKM
                </span>

                <h2 class="lg:text-6xl font-bebas-neue mb-4 mt-4 leading-tight">
                    BERGABUNG DENGAN <br> NAVVRO
                </h2>

                <p class="text-md font-poppins text-gray-200 mb-8">
                    Jadilah bagian dari komunitas UMKM yang tumbuh <br> bersama. Jual produkmu, didukung sesama, dan
                    <br> bangun usaha dengan lebih cerdas.
                </p>

                <!-- <div class="mt-8">
                    <img 
            src="/icon/login_banner.png" 
            alt="Ilustrasi UMKM" 
            class="w-full h-auto rounded-lg object-cover"
          >
        </div> -->
            </div>
        </div>

    </div>
</template>

<script setup>
const router = useRouter();

function handleSubmit() {
    // Logika pendaftaran Anda (validasi, API call, dll.)
    console.log("Formulir dikirim!");

    // Contoh redirect setelah berhasil
    // router.push('/'); 
}

// Menetapkan judul halaman (Opsional, baik untuk SEO)
useHead({
    title: 'Selamat Datang - Daftar NAVVRO'
})
</script>