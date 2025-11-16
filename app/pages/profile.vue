<template>
    <ListProductHeader />

    <div class="bg-gray-50 min-h-screen">
        <div class="container max-w-6xl mx-auto px-4 py-12">
            
            <h1 class="font-bebas-neue text-4xl text-gray-800 mb-8">
                Akun Saya
            </h1>

            <div class="flex flex-col md:flex-row gap-8">

                <aside class="md:w-1/4">
                    <div class="bg-white p-4 rounded-lg shadow-sm">
                        <div class="mb-4 pb-4 border-b border-gray-200">
                             <h2 class="font-semibold text-lg text-gray-800">{{ user.nama }}</h2>
                             <p class="text-sm text-gray-500">{{ user.email }}</p>
                        </div>
                        
                        <nav class="space-y-2">
                            <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-white bg-[#3a6b5a]">
                                <Icon name="heroicons:user-circle" class="w-5 h-5" />
                                <span>Profil Saya</span>
                            </a>
                            <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                <Icon name="heroicons:shopping-bag" class="w-5 h-5" />
                                <span>Pesanan Saya</span>
                            </a>
                            <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-md font-medium text-gray-600 hover:bg-gray-100">
                                <Icon name="heroicons:lock-closed" class="w-5 h-5" />
                                <span>Ganti Password</span>
                            </a>
                            <button @click="handleLogout" class="w-full flex items-center gap-3 px-3 py-2 rounded-md font-medium text-red-600 hover:bg-red-50">
                                <Icon name="heroicons:arrow-left-on-rectangle" class="w-5 h-5" />
                                <span>Logout</span>
                            </button>
                        </nav>
                    </div>
                </aside>

                <main class="md:w-3/4">
                    <div class="bg-white p-6 sm:p-8 rounded-lg shadow-sm">
                        <h2 class="text-2xl font-semibold text-gray-800 mb-6">Informasi Profil</h2>
                        
                        <form @submit.prevent="updateProfile">
                            <div class="space-y-4">
                                <div>
                                    <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="nama">
                                        Nama
                                    </label>
                                    <input type="text" id="nama" v-model="profileForm.nama" :disabled="!isEditing"
                                        class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white disabled:bg-gray-200 disabled:text-gray-500">
                                </div>

                                <div>
                                    <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="email">
                                        Email
                                    </label>
                                    <input type="email" id="email" v-model="profileForm.email" :disabled="!isEditing"
                                        class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white disabled:bg-gray-200 disabled:text-gray-500">
                                </div>

                                <div>
                                    <label class="font-poppins block text-sm font-medium text-gray-600 mb-1" for="telepon">
                                        Nomor Telepon
                                    </label>
                                    <input type="tel" id="telepon" v-model="profileForm.telepon" :disabled="!isEditing"
                                        class="w-full font-poppins text-sm bg-gray-100 rounded-lg border-transparent focus:outline-none focus:ring-2 focus:ring-[#3a6b5a] focus:bg-white disabled:bg-gray-200 disabled:text-gray-500">
                                </div>
                            </div>
                            
                            <div class="mt-8 flex gap-4">
                                <button v_if="!isEditing" @click="isEditing = true" type="button"
                                    class="bg-[#3a6b5a] text-white py-2 px-6 rounded-lg font-semibold hover:bg-[#2f5a4a] transition duration-300 shadow-sm">
                                    Edit Profil
                                </button>
                                
                                <button v-if="isEditing" type="submit"
                                    class="bg-green-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-300 shadow-sm">
                                    Simpan Perubahan
                                </button>
                                <button v-if="isEditing" @click="isEditing = false" type="button"
                                    class="bg-gray-200 text-gray-700 py-2 px-6 rounded-lg font-semibold hover:bg-gray-300 transition duration-300">
                                    Batal
                                </button>
                            </div>
                        </form>

                    </div>
                </main>

            </div>
        </div>
    </div>
    
    <TheFooter />
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
// Impor header dan footer Anda
import ListProductHeader from '~/components/SecondHeader.vue';
import TheFooter from '~/components/TheFooter.vue';

const router = useRouter();

// Ambil state global
const isLoggedIn = useState('isLoggedIn');
const currentUser = useState('currentUser');
const usersDB = useState('usersDB'); // "Database"

// State lokal untuk form
const isEditing = ref(false);
const profileForm = reactive({
    nama: '',
    email: '',
    telepon: ''
});

// Computed property untuk keamanan (jika currentUser null)
const user = computed(() => currentUser.value || { nama: 'Tamu', email: 'Tidak login' });

// --- PERLINDUNGAN HALAMAN (ROUTE GUARD) ---
onMounted(() => {
    if (!isLoggedIn.value || !currentUser.value) {
        alert('Anda harus login untuk mengakses halaman ini.');
        router.push('/login');
    } else {
        // Isi form dengan data user yang sedang login
        profileForm.nama = currentUser.value.nama;
        profileForm.email = currentUser.value.email;
        profileForm.telepon = currentUser.value.telepon;
    }
});

// --- FUNGSI LOGOUT ---
function handleLogout() {
    if (confirm('Apakah Anda yakin ingin logout?')) {
        isLoggedIn.value = false;
        currentUser.value = null;
        router.push('/login');
    }
}

// --- FUNGSI UPDATE PROFIL ---
function updateProfile() {
    // 1. Validasi (opsional)
    if (!profileForm.nama || !profileForm.email || !profileForm.telepon) {
        alert('Semua data harus diisi!');
        return;
    }

    // 2. Update "database" global (usersDB)
    const userInDB = usersDB.value.find(u => u.id === currentUser.value.id);
    if (userInDB) {
        userInDB.nama = profileForm.nama;
        userInDB.email = profileForm.email;
        userInDB.telepon = profileForm.telepon;
    }

    // 3. Update state global (currentUser)
    currentUser.value = {
        ...currentUser.value,
        nama: profileForm.nama,
        email: profileForm.email,
        telepon: profileForm.telepon
    };

    // 4. Selesai
    isEditing.value = false;
    alert('Profil berhasil diperbarui!');
    console.log("Database users terupdate:", usersDB.value);
}

useHead({
    title: 'Profil Saya'
});
</script>