<template>
    <!-- All -->
    <div class="bg-white relative isolate">
      <!-- Header -->
      <div class=" lg:px-10">
         <!-- navbar -->
      <header class="absolute inset-x-0 top-0 z-50 fixed-top">
        <nav class="flex items-center justify-between p-8 lg:px-8"
          aria-label="Global"
          :class="{ 'navbar-scroll': isScrolled }">
          <!-- logo -->
          <div class="flex lg:flex-1">
            <a href="#" class="-m-1.5 p-1.5 ml-4">
              <span class="sr-only">Logo Linkyi Shop</span>
              <img class="h-10 w-auto lg:px-5" src="@/assets/linkyishop.svg" alt="" />
            </a>
          </div>
          <div class="flex lg:hidden">
            <button
              type="button"
              class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              @click="mobileMenuOpen = true"
            >
              <span class="sr-only">Open main menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="hidden lg:flex lg:gap-x-12 lg:ml-80 ">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              class="text-sm font-semibold leading-6 text-gray-900"
              >{{ item.name }}</a
            >
          </div>
          <div class="hidden lg:flex lg:flex-1 lg:justify-end mr-9">
            <button href="#" class="flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-500 hover:to-gray-800 shadow-sm px-5 py-2.5 text-sm font-semibold text-white">
              <span class="mr-1">Hubungi Kami</span>
               <!-- <img src="@/assets/" alt="" class="h-2.5 w-2">  -->
            </button>
          </div>
        </nav>
  
        <Dialog
          class="lg:hidden"
          @close="mobileMenuOpen = false"
          :open="mobileMenuOpen"
        >
          <div class="fixed inset-0 z-50" />
          <DialogPanel
            class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
          >
            <div class="flex items-center justify-between">
              <a href="#" class="-m-1.5 p-1.5 ml-4">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="@/assets/linkyishop.svg" alt="" />
              </a>
              <button
                type="button"
                class="-m-2.5 rounded-md p-2.5 text-gray-700"
                @click="mobileMenuOpen = false"
              >
                <span class="sr-only">Close menu</span>
                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div class="mt-6 flow-root">
              <div class="-my-6 divide-y divide-gray-500/10">
                <div class="space-y-2 py-6">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</a
                  >
                </div>
                <div class="py-6">
                  <button href="#" class="rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-500 hover:to-gray-800 shadow-sm px-3.5 py-2.5 text-sm font-semibold text-white">Hubungi Kami
                    <img src="@/assets/Intersect.svg" alt="">
  
                  </button>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
  
      <!-- hero -->
      <div class="relative isolate lg:px-10"
          aria-label="Global">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80] to-[#8386ef] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="
              clip-path: polygon(
                74.1% 44.1%,
                100% 61.6%,
                97.5% 26.9%,
                85.5% 0.1%,
                80.7% 2%,
                72.5% 32.5%,
                60.2% 62.4%,
                52.4% 68.1%,
                47.5% 58.3%,
                45.2% 34.5%,
                27.5% 76.7%,
                0.1% 64.9%,
                17.9% 100%,
                27.6% 76.8%,
                76.1% 97.7%,
                74.1% 44.1%
              );
            "
          />
        </div>
        <!-- content -->
        <div class="relative isolate">
        <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#7999f8] to-[#a4bef8] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%);"></div>
        </div>
  
        <!-- content -->
          <div class="mx-auto max-w-6xl py-20 sm:py-24 lg:py-40 flex justify-between items-center">
          <div class="lg:w-1/2">
            <h1 class="text-5xl font-bold tracking-tight text-left text-gray-900 sm:text-5xl">
              Mulailah Katalog <br> Produkmu Secara Gratis </br>
            </h1>
            <p class="mt-6 text-lg text-gray-600 text-left">
              Wujudkan bisnis impian Anda bersama linkyiShop <br> Katalog Produk dengan fitur terjangkau dan mudah digunakan.</br>
              <br>Jangan Lewatkan!</br>
            </p>
            <div class="mt-10 flex items-center gap-x-6">
              <button href="#" class="flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-500 hover:to-gray-800 shadow-sm px-5 py-2.5 text-sm font-semibold text-white">
              <span class="mr-1">Register Sekarang</span>
               <img src="@/assets/Intersect.svg" alt="" class="h-2.5 w-2"> 
            </button>
            </div>
          </div>
          <!-- gambar -->
          <div class="lg:w-2/5 lg:self-right">
            <img src="@/assets/hero.svg" alt="Your Image Description" class="w-full h-auto object-cover">
          </div>
          </div>
        </div>  
      </div>
  
      <!-- About -->
        <div class="p-8 lg:px-8">
          <div class="border-solid border border-sky-200 rounded-md text-center shadow-md p-8 ">
          <h3 class="text-5xl font-bold tracking-tight text-gray-900 py-10">
             Kenali Kami <span class="text-sky-500">Lebih Dekat</span> Yuk!
           </h3>
          <div class="mx-auto max-w-6xl flex justify-between items-center">
             <!-- gambar -->
          <div class="hidden lg:block lg:w-1/2 lg:max-w-2xl pr-6">
            <img src="@/assets/hero.svg" alt="Your Image Description" class="w-full h-auto object-cover">
      </div>
  
      <!-- Text -->
      <div class="lg:w-1/2 lg:max-w-2xl pl-10">
          <p class="text-justify text-gray-600 max-w-md pl-4">
          LinkyiShop merupakan platform yang dirancang untuk membantu, mengelola, dan mengembangkan katalog produk bisnis Anda dengan lebih mudah dan efisien. Anda dapat menggunakan aplikasi ini untuk menyusun dan mengatur produk-produk yang ingin dipromosikan, serta menghasilkan tautan bio yang mudah diingat dan dibagikan kepada pengikut Anda. Hal ini dapat mengoptimalkan kinerja pemasaran dan meningkatkan pendapatan. Katalog Produk dengan fitur terjangkau dan mudah digunakan. Jangan Lewatkan!
          </p>
          <div class="mt-10 flex pl-4">
            <button href="#" class="flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-500 hover:to-gray-800 shadow-sm px-5 py-2.5 text-sm font-semibold text-white">
              <span class="mr-1">Buat Katalog Sekarang</span>
               <img src="@/assets/Intersect.svg" alt="" class="h-2.5 w-2.5"> 
            </button>
          </div>
      </div>
      </div>
      </div>
        </div>
      
  
        <!-- Traffic -->
        <div class="p-8 lg:px-8">
          <div class="max-w-6xl mx-auto">
            <div class="text-center">
              <h3 class="text-4xl font-bold tracking-tight text-gray-900 py-10">
               Mau <span class="text-sky-500">traffic online</span> yang lebih <span class="text-sky-500"> ngebut</span>? <p>kami bisa bantu</p>
              </h3>
            </div>

    <div class="mt-12">
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100">
                <img src="@/assets/website.svg" alt="Website Katalog Gratis" class="w-32 h-40 object-cover rounded-t-lg mx-auto ">
                <div class="p-6">
                  <h3 class="text-lg text-center font-bold text-sky-500">Website Katalog Gratis</h3>
                  <p class="mt-4 text-base text-gray-600 text-justify">
                    Nikmati kemudahan dalam membuat dan mengelola situs web katalog produk tanpa biaya. Dengan memamerkan produk Anda secara profesional dan menarik perhatian lebih banyak pelanggan.
                  </p>
                </div>
              </div>

        <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100">
          <img src="@/assets/profil.svg" alt="Link Bio Profil" class="w-32 h-32 object-cover rounded-t-lg mx-auto">
          <div class="p-6">
            <h3 class="text-lg text-center font-bold text-sky-500">Link Bio Profil</h3>
            <p class="mt-4 text-base text-gray-600 text-justify">
              Hasilkan tautan bio yang menghubungkan semua akun media sosial Anda dalam satu tautan yang mudah diingat dan diakses. linkyiShop memudahkan Anda mempromosikan produk secara terorganisir dan efisien, sehingga pengikut dapat dengan mudah menemukan dan membeli produk Anda.
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100">
          <img src="@/assets/umkm.svg" alt="Dukungan UMKM" class="w-32 h-32 object-cover rounded-t-lg mx-auto mt-4">
          <div class="p-6">
            <h3 class="text-lg text-center font-bold text-sky-500">Dukungan UMKM</h3>
            <p class="mt-4 text-base text-gray-600 text-justify">
              Berdedikasi untuk mendukung pelaku UMKM dalam memperluas jangkauan pasar dan meningkatkan profesionalisme bisnis Anda. Dengan fitur-fitur yang mudah digunakan dan dirancang khusus sesuai kebutuhan UMKM.
            </p>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>

  
        <!-- Daftar Sekarang -->
        <div class="py-10">
          <div class="text-center">
            <h3 class="text-3xl font-bold tracking-tight text-gray-900 py-10">
            Daftar <span class="text-sky-500">sekarang</span> dan <span class="text-sky-500"> dapatkan katalog produk</span><p>impian Anda!</p>
           </h3>
          </div>
  
      <div class="mx-auto max-w-6xl flex justify-between items-center">
      <!-- Text -->
      <div class="lg:w-1/2 lg:max-w-2xl pl-10">
        <div v-for="(item, index) in accordionItems" :key="index" class="relative mb-3 flex items-start">
          <!-- Menambahkan logo atau nomor di sini -->
          <div class="flex-shrink-0 mr-4">
            <div class="w-10 h-10 flex items-center justify-center  bg-gradient-to-r from-blue-400 to-blue-600  text-white rounded-full">
              <span class="text-lg font-semibold">{{ index + 1 }}</span>
            </div>
          </div>
          <div class="flex-grow"> <!-- Menambahkan kelas flex-grow untuk membuat judul dan konten sejajar -->
            <h6 class="mb-0">
              <button
                class="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-100 text-slate-700 rounded-t-1 group text-dark-500"
                @click="toggleAccordion(index)"
              >
                <span class="text-xl">{{ item.title }}</span>
                <i :class="['absolute right-0 pt-1 text-xs fa', item.isOpen ? 'fa-minus' : 'fa-plus']"></i>
              </button>
            </h6>
            <div
              v-show="item.isOpen"
              class="overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
      </div>
          <!-- gambar -->
           <div class="hidden lg:block lg:w-1/2 lg:max-w-2xl pr-6">
               <img src="@/assets/daftar.svg" alt="Your Image Description" class="w-full h-auto object-cover">
          </div>
        </div>
        </div>
  
      <!-- Testimonial -->
      <div class="p-8 lg:px-8">
        <div class="max-w-6xl mx-auto ">
          <div class="text-center">
            <h3 class="text-4xl font-bold tracking-tight text-gray-900 py-10 ">
            <span class="text-sky-500">Testimonials: </span> 
            <br> Apa <span class="text-sky-500"> Kata Mereka</span> Tentang <span class="text-sky-500"> Kami</span> </br>
           </h3>
          </div>
  
        <div class="mt-9">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100 p-4 w-65 h-80">
          <div class="flex flex-col items-center">
            <img src="@/assets/malik.svg" alt="Website Katalog Gratis" class="h-20 w-20 object-cover rounded-full mt-4">
            <div class="mt-4 text-center">
              <h4 class="text-lg font-medium text-gray-900">Malik Akbar</h4>
              <p class="text-gray-600">@malik___</p>
            </div>
            <p class="mt-4 text-sm text-gray-600 text-justify px-8">
              "Terima kasih atas layananya, kami sangat senang dan puas dengan aplikasinya dan segala arahan dan bantuannya dalam mengoperasikan aplikasi linkyi shop ini."
            </p>
          </div>
        </div>
  
        <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100 p-4 w-65 h-80">
          <div class="flex flex-col items-center">
            <img src="@/assets/andrew.svg" alt="Link Bio Profil" class="h-20 w-20 object-cover rounded-full mt-4">
            <div class="mt-4 text-center">
              <h4 class="text-lg font-medium text-gray-900">Andrew Azizi</h4>
              <p class="text-gray-600">@anaziz</p>
            </div>
            <p class="mt-4 text-sm text-gray-600 text-justify px-8">
              "Tertarik dengan kemudahan linkyiShop, saya cepat membuat katalog produk dan tautan bio untuk semua akun media sosial saya. Fitur-fitur mereka sangat membantu promosi bisnis online saya."
            </p>
          </div>
        </div>
  
        <div class="bg-white rounded-lg shadow-md border-solid border-2 border-sky-100 p-4 w-65 h-80">
          <div class="flex flex-col items-center">
            <img src="@/assets/dea.svg" alt="Dukungan UMKM" class="h-20 w-20 object-cover rounded-full mt-4">
            <div class="mt-4 text-center">
              <h4 class="text-lg font-medium text-gray-900">Dea Nurfadhilah</h4>
              <p class="text-gray-600">@fad__hillah</p>
            </div>
            <p class="mt-4 text-sm text-gray-600 text-justify px-8">
              "linkyiShop memudahkan bisnis online saya. Dulu saya kesulitan mengelola produk di media sosial, kini semuanya lebih teratur. Saya sangat merekomendasikannya."
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
      </div>
  
    <!-- install -->
      <div class="p-8 lg:px-8">
        <div class="bg-gradient-to-r from-blue-400 to-blue-500 text-center py-8 rounded-lg shadow-md">
          <h2 class="text-white text-3xl text-bold mb-8">Download aplikasi LinkyiShop Sekarang!</h2>
          <div class="flex justify-center space-x-4">
            <a href="https://play.google.com/store/apps">
              <img src="@/assets/googleplay.svg" alt="google play" class="h-12">
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src="@/assets/appstore.svg" alt="app store" class="h-12">
            </a>
          </div>
        </div>
      </div>
      
    <!-- bekerja sama -->
    <div class="bg-white py-24 sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="text-center">
        <h3 class="text-3xl font-bold tracking-tight text-gray-900 py-10">
          Tertarik <span class="text-sky-500">bekerja</span> sama dengan<span class="text-sky-500"> kami</span>?
        </h3>
      </div>
      <div class="mt-5 flex justify-center">
        <button href="#" class="flex items-center rounded-md bg-gradient-to-r from-blue-400 to-blue-600 hover:from-indigo-500 hover:to-gray-800 shadow-sm px-5 py-2.5 text-sm font-semibold text-white">
              <span class="mr-1">Hubungi Kami</span>
               <img src="@/assets/Intersect.svg" alt="" class="h-2.5 w-2"> 
        </button>
      </div>
      <div class="mx-auto mt-10 grid max-w-3xl grid-cols-4 justify-center items-center sm:max-w-xl sm:grid-cols-4 sm:gap-6 lg:max-w-5xl lg:grid-cols-4 lg:gap-8">
        <img class="max-h-38 w-full object-contain mb-8" src="@/assets/bangkit.svg" alt="Bangkit" /> 
        <img class="max-h-38 w-full object-contain mb-8" src="@/assets/goto.svg" alt="goto" /> 
        <img class="max-h-38 w-full object-contain mb-8" src="@/assets/google.svg" alt="Google" /> 
        <img class="max-h-38 w-full object-contain mb-8" src="@/assets/traveloka.svg" alt="Traveloka" /> 
      </div>
    </div>
    </div>
   </div>
     
    <!-- footer -->
    <footer class="border-sky-500 bg-sky-600">
      <div class="bg-gradient-to-r from-blue-200 to-blue-300 text-center py-5 shadow-md lg:px-20">
        <!-- content and logo linkyishop-->
        <div class="mt-9">
          <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            <!-- satu -->
            <div class="flex flex-col py-2">
              <img src="@/assets/linkyishop.svg" alt="Linkyi Shop" class="h-25 w-20 ">
              <p class="text-left text-gray-500 py-5">Jadikan bisnis online Anda lebih mudah dengan LinkyiShop</p>
            </div>
            <!-- dua -->
            <div class="flex flex-col py-2">
              <ul class="list-none text-left text-gray-500">
                <li class="text-bold text-blue-800">Support</li>
                <li>Getting Started</li>
                <li>FAQ</li>
                <li>Help Articles</li>
                <li>Report an issue</li>
              </ul>
            </div>
            <!-- tiga -->
            <div class="flex flex-col py-2">
              <ul class="list-none text-left text-gray-500">
                <li class="text-blue-800 text-bold">Services</li>
                <li>Booking appointments</li>
                <li>Online consultations</li>
                <li>Prescriptions</li>
                <li>Medicine Refills</li>
              </ul>
            </div>
            <!-- tiga -->
            <div class="flex flex-col py-2">
              <ul class="list-none text-left text-gray-500">
                <li class="text-semibold text-blue-800">Services</li>
                <li>Booking appointments</li>
                <li>Online consultations</li>
                <li>Prescriptions</li>
                <li>Medicine Refills</li>
              </ul>
            </div>
          </div>
        </div>
  
        <hr class="my-6 border-blue-500">
        <!-- logo -->
        <div class="flex justify-between items-center space-x-4 mt-8">
          <div class="flex space-x-4 ">
            <a href="https://play.google.com/store/apps">
              <img src="@/assets/facebook.svg" alt="google play">
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src="@/assets/instagram.svg" alt="app store" >
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src="@/assets/linkedin.svg" alt="app store" >
            </a>
            <a href="https://www.apple.com/app-store/">
              <img src="@/assets/youtube.svg" alt="app store" >
            </a>
          </div>
  
        <div class="text-gray-500 mr-auto">
          <CLink href="https://coreui.io">LinkyiShop 2024 </CLink>
          <span>&copy; Seluruh hak cipta</span>
        </div>
        </div>
      </div>
    </footer>
  
    </div>
  </template>
  
  <script setup>
// import { ref } from "vue";
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const navigation = [
  { name: "Beranda", href: "#" },
  { name: "Tentang", href: "#" },
  { name: "Manfaat", href: "#" },
  { name: "Daftar Sekarang", href: "#" },
  { name: "Testimonial", href: "#" },
];

const mobileMenuOpen = ref(false);

import { ref, onMounted, onUnmounted } from "vue";

const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
// Data accordion
const accordionItems = ref([
  {
    title: "Daftar",
    content:
      "Daftar dan isi informasi yang diperlukan, termasuk alamat email, kata sandi, dan nama Anda",
    isOpen: false,
  },
  {
    title: "lengkapi profile",
    content:
      "Isi detail profil Anda, seperti Foto profil, bio, dan informasi lainnya.",
    isOpen: false,
  },
  {
    title: "Upload produk  Generate bio Link",
    content:
      "Tambahkan produk baru. Dan isi informasi produk yang diperlukan, seperti nama produk, deskripsi, dan link produk.  Setelah produk di unggah, Anda dapat membuat tautan bio dan dapat dibagikan kepada orang lain",
    isOpen: false,
  },
]);

// Metode untuk toggle accordion
// const toggleAccordion = (index) => {
//   accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
// };

const toggleAccordion = (index) => {
  console.log("Toggling accordion item:", index);
  console.log("Before toggle:", accordionItems.value[index]);
  accordionItems.value[index].isOpen = !accordionItems.value[index].isOpen;
  console.log("After toggle:", accordionItems.value[index]);
};
</script>
  
  <style>
.fixed-top {
  top: 0;
  width: 100%;
  z-index: 1030;
}

.text-xl {
  font-size: 1.25rem;
}

.navbar-scroll {
  background-color: rgba(133, 177, 253, 0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>