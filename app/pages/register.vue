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
                        <input type="text" id="nama" placeholder="Masukkan nama anda" v-model="nama"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="telepon">
                            Nomor Telepon
                        </label>
                        <input type="tel" id="telepon" placeholder="Masukkan nomor telepon anda" v-model="telepon"
                            class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white">
                    </div>

                    <div class="mb-4">
                        <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="email">
                            Email
                        </label>
                        <input type="email" id="email" placeholder="Masukkan email anda" v-model="email"
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
                        Daftar
                    </button>
                </form>

                <p class="font-poppins text-center text-xs text-gray-500 mt-8">
                    Sudah mempunyai akun?
                    <a href="/login" class="font-semibold text-[#3a6b5a] hover:underline">
                        Masuk Sekarang
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
import { ref } from 'vue';
const router = useRouter();

// --- STATE ---
const nama = ref('');
const telepon = ref('');
const email = ref('');
const password = ref('');
const errorMsg = ref('');

// --- "DATABASE" PENGGUNA ---
// Kita gunakan `useState` agar data ini bisa diakses juga oleh halaman Login
const usersDB = useState('usersDB', () => [
    // Data dummy awal
    { id: 1, email: 'admin@navvro.com', password: 'password123', nama: 'Admin Navvro' },
    { id: 2, email: 'user@gmail.com', password: '123', nama: 'User Biasa' }
]);

// --- FUNGSI REGISTER ---
function handleSubmit() {
    errorMsg.value = '';

    // 1. Validasi Sederhana
    if (!nama.value || !telepon.value || !email.value || !password.value) {
        errorMsg.value = 'Semua field wajib diisi.';
        return;
    }

    // 2. Cek apakah email sudah ada
    const emailExists = usersDB.value.find(u => u.email === email.value);
    if (emailExists) {
        errorMsg.value = 'Email ini sudah terdaftar. Silakan login.';
        return;
    }

    // 3. Tambahkan pengguna baru ke "database"
    const newUser = {
        id: usersDB.value.length + 1,
        nama: nama.value,
        telepon: telepon.value,
        email: email.value,
        password: password.value // Di aplikasi nyata, password HARUS di-hash
    };
    usersDB.value.push(newUser);

    console.log("Registrasi berhasil!", newUser);
    console.log("Database users sekarang:", usersDB.value);

    // 4. Arahkan ke halaman login
    alert('Registrasi Berhasil! Silakan masuk dengan akun baru Anda.');
    router.push('/login');
}

useHead({
    title: 'Selamat Datang - Daftar NAVVRO'
})
</script>