<template>
    <div class="flex flex-col lg:flex-row min-h-screen bg-white lg:h-screen lg:overflow-hidden">

        <div class="w-full lg:w-5/11 flex flex-col justify-center sm:p-12 lg:p-16 xl:p-24 order-last lg:order-first">
            <div class="w-full max-w-md mx-auto lg:px-11 py-14">
                <h1 class="lg:text-5xl color-text mb-2 text-center font-bebas-neue">
                    SELAMAT DATANG
                </h1>
                <p class="text-gray-500 font-poppins mb-8 text-center">
                    Silahkan masuk ke akun anda
                </p>
                <form @submit.prevent="handleSubmit">
                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="email">
                            Email
                        </label>
                        <input type="text" id="email" placeholder="Masukkan email anda" v-model="email"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-6">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="password">
                            Password
                        </label>
                        <input type="password" id="password" placeholder="Masukkan password anda" v-model="password"
                            class="w-full font-poppins text-sm px-4 py-3 bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div v-if="errorMsg" class="mb-4">
                        <p class="text-red-500 text-sm text-center">{{ errorMsg }}</p>
                    </div>

                    <button type="submit"
                        class="w-full bg-[#3a6b5a] text-white py-3 rounded-lg font-semibold hover:bg-[#2f5a4a] transition duration-300 shadow-md">
                        Masuk
                    </button>
                </form>
                <p class="font-poppins text-center text-xs text-gray-500 mt-8">
                    Belum mempunyai akun?
                    <a href="/register" class="font-semibold text-[#3a6b5a] hover:underline">
                        Daftar Sekarang
                    </a>
                </p>
            </div>
        </div>

        <div class="
        w-full lg:w-6/11 
        bg-[url('/icon/login_banner.png')] 
        bg-cover bg-no-repeat text-white 
        flex-col justify-end 
        order-first lg:order-last
        
        hidden lg:flex 
        
        lg:p-12 lg:px-10
    ">

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
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue'
const router = useRouter();

// State untuk status login (global)
const isLoggedIn = useState('isLoggedIn', () => false)
// [DIBAH] State untuk menyimpan data user yang login (dibutuhkan oleh /profile)
const currentUser = useState('currentUser', () => null)

// State untuk form
const email = ref('');
const password = ref('');
const errorMsg = ref('');

// --- [INI PERBAIKANNYA] ---
// Anda HARUS menyediakan data default yang sama seperti di halaman register.
// Nuxt hanya akan menjalankan fungsi ini () => [...] satu kali saat state pertama kali dibuat.
const usersDB = useState('usersDB', () => [
    { id: 1, email: 'admin@navvro.com', password: 'password123', nama: 'Admin Navvro', telepon: '0812345678' },
    { id: 2, email: 'user@gmail.com', password: '123', nama: 'User Biasa', telepon: '0876543210' }
]);
// --- [SELESAI PERBAIKAN] ---

function handleSubmit() {
    errorMsg.value = '';

    // Sekarang usersDB.value dijamin berisi array
    const user = usersDB.value.find(u =>
        u.email === email.value && u.password === password.value
    );

    if (user) {
        console.log("Login berhasil!", user);

        // Set status login global menjadi true
        isLoggedIn.value = true;

        // [DIBAH] Simpan data user ke state global
        currentUser.value = {
            id: user.id,
            nama: user.nama,
            telepon: user.telepon,
            email: user.email
        };

        alert('Login Berhasil! Mengalihkan ke halaman utama...');
        router.push('/');
    } else {
        console.log("Email atau password salah!");
        errorMsg.value = 'Email atau password salah. Silakan coba lagi.';
    }
}

useHead({
    title: 'Selamat Datang - Login NAVVRO'
})
</script>