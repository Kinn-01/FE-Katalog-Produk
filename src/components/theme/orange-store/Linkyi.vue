<template>
  <div class="bg-slate-100">
    <div class="mx-auto min-h-full max-w-md">
      <div class="min-h-screen bg-white" style="padding-bottom: 4rem;">
        <div class="py-10 items-center text-center">
          <img :src="storeLogo" alt="Store Logo" class="h-h-20 w-20 mx-auto mt-3" />
          <h2 class="text-xl font-bold mt-3">{{ storeName }}</h2>
          <!-- <img src="../../../assets/cake.svg" alt="logo" class="h-20 w-20 mx-auto mt-3"> -->
          <!-- <h2 class="text-xl font-bold mt-3">Cake Shop</h2> -->

          <!-- sosial media -->
          <div class="flex justify-center space-x-2 mt-2">
            <img src="../../../assets/facbook.svg" alt="facebook" class="h-10 w-10">
            <img src="../../../assets/twitter.svg" alt="twitter" class="h-10 w-9">
            <img src="../../../assets/whats.svg" alt="whatsapp" class="h-10 w-9.5">
            <img src="../../../assets/instagram1.svg" alt="instagram" class="h-10 w-10.5">
          </div>
        </div>

        <!-- link olshop-->
        <!-- <div class="px-20">
         <ul class="rounded-lg text-center text-semibold space-y-4 text-white">
        <li class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">Website</li>
        <li class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">Shopee</li>
        <li class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">Tokopedia</li>
        <li class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">Lazada</li>
        <li class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">Bukalapak</li>
        </ul>
        </div> -->
        <div class="px-20">
          <ul class="rounded-lg text-center text-semibold space-y-4 text-white">
            <li v-for="link in storeLinks" :key="link.name" class="bg-gradient-to-r from-pink-200 to-pink-500 py-3 rounded-md font-semibold">
              <a :href="link.link" target="_blank">{{ link.name }}</a>
            </li>
          </ul>
        </div>

      <!-- button dibawah pokoknya -->
      <div class="fixed bottom-0 left-0 right-0 mx-auto max-w-md z-50 bg-pink-300">
        <div class="flex justify-center py-2">
            <ul class="flex space-x-20 font-semibold">
              <router-link
              :to="{ name: 'Produk', params: { slug: $route.params.slug } }"
              exact
              class="nav-link py-2 px-8 bg-white text-pink-900 rounded-md shadow text-semibold"
            >
              Produk
            </router-link>
            <router-link
              :to="{ name: 'Linkyi', params: { slug: $route.params.slug } }"
              exact
              class="nav-link py-2 px-8 bg-white text-pink-900 rounded-md shadow text-semibold"
            >
              Linkyi
            </router-link>
            </ul>
          </div>
      </div>
    </div>
   </div> 
</div>
</template>


<script>
import { useDataStore } from "../../../stores/dataStore";
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  setup() {
    const dataStore = useDataStore();
    const route = useRoute();

    // Computed properties to get storeLogo and storeName
    const storeLogo = computed(() => dataStore.storeLogo);
    const storeName = computed(() => dataStore.storeName);
    const storeLinks = computed(() => dataStore.storeLinks);


    // Fetch store details function
    const fetchData = async () => {
      const slug = route.params.slug;
      if (slug) {
        await dataStore.fetchData(slug);
      }
    };

    // Fetch initial data on component mount
    onMounted(fetchData);

    // Watch for route param changes and fetch data
    watch(() => route.params.slug, fetchData);

    return {
      storeLogo,
      storeName,
      storeLinks,
    };
  },
  beforeRouteUpdate(to, from, next) {
    // Fetch data when route params (slug) change
    const slug = to.params.slug;
    if (slug) {
      this.fetchData();
    }
    next();
  },
};
</script>


<style scoped>
.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.router-link-active {
    background-color: #f55ff5; 
    color: white; 
  }
  
  .nav-link {
    transition: background-color 0.3s, color 0.3s;
  }
  
  .nav-link:hover {
    background-color: #f55ff5; 
    color: white; 
  }
</style>