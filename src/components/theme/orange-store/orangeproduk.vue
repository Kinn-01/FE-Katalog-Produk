<template>
  <div class="bg-slate-100 h-screen overflow-hidden">
    <div class="mx-auto max-w-md h-full flex flex-col">

      <!-- Navbar Pencarian -->
      <div class="bg-blue-100 py-4 sticky top-0 z-50">
        <div class="flex items-center justify-center">
          <div
            class="relative flex items-center bg-white rounded-full shadow-md mx-4 max-w-2xl w-full p-2"
          >
            <img
              src="../../../assets/seaarch.png"
              alt="Search Icon"
              class="h-6 w-6 ml-3"
            />
            <input
              class="placeholder:italic placeholder:text-slate-300 block bg-transparent w-full border-none rounded-full pl-3 pr-3 focus:outline-none focus:ring-0 sm:text-sm"
              placeholder="Temukan Produk yang Anda Inginkan"
              type="text"
              v-model="searchQuery"
              @input="filterItems"
            />
          </div>
        </div>
      </div>

      <!-- Info Toko dan Kategori (Tetap di atas) -->
      <div class="bg-white">
        <!-- Informasi Toko -->
        <div class="bg-blue-100 p-6">
          <div class="flex items-center mb-4">
            <img :src="storeLogo" alt="Store Logo" class="h-20 w-30 mr-4 rounded-full" />
            <div>
              <h2 class="text-xl font-bold text-left">{{ storeName }}</h2>
              <p class="text-sm text-justify text-gray-500">
                {{ storeDescription }}
              </p>
            </div>
          </div>
        </div>

        <!-- Kategori -->
        <div class="grid justify-items-stretch">
          <ul class="flex space-x-2 px-7 py-2">
            <!-- All Category -->
            <li
              :class="{
                'bg-blue-200 text-blue-900': selectedCategory === 'All Category',
                'bg-white text-slate-600': selectedCategory !== 'All Category',
              }"
              class="py-1 px-3 rounded-lg shadow cursor-pointer"
              @click="selectCategory('All Category')"
            >
              All Category
            </li>

            <!-- Maksimal 3 kategori -->
            <li
              v-for="category in displayedCategories.slice(0, 3)" 
              :key="category"
              :class="{
                'bg-blue-200 text-blue-900': selectedCategory === category,
                'bg-white text-slate-600': selectedCategory !== category,
              }"
              class="py-1 px-3 rounded-lg shadow cursor-pointer"
              @click="selectCategory(category)"
            >
              {{ category }}
            </li>

            <!-- Dropdown Container -->
            <li
              class="relative py-1 px-3 bg-white text-slate-600 rounded-lg shadow cursor-pointer"
              @click="toggleDropdown"
            >
              ▼
              <ul
                v-if="isDropdownVisible"
                class="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-lg w-48 z-50"
              >
                <li
                  v-for="category in displayedCategories.slice(3)" 
                  :key="category"
                  class="py-1 px-3 hover:bg-slate-100 cursor-pointer"
                  @click="selectCategory(category)"
                >
                  {{ category }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <!-- Kontainer Produk yang Bisa Discroll -->
      <div class="flex-1 overflow-y-auto bg-white pb-20">
        <div class="grid grid-cols-2 gap-4 p-4">
          <div
            class="bg-white rounded-lg shadow-xl overflow-hidden cursor-pointer"
            v-for="item in filteredItems"
            :key="item.id"
            @click="showPopup(item)"
          >
            <img
              :src="item.thumbnail"
              :alt="item.title"
              class="w-full h-32 object-cover"
            />
            <div class="p-4">
              <h3 class="text-lg font-bold">{{ item.title }}</h3>
              <p class="text-gray-600 mt-2">{{ item.category }}</p>
              <p class="text-gray-800 mt-2">{{ item.price }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Cake Detail Popup -->
      <CakeDetailPopup
        v-if="isPopupVisible"
        :cakeItem="selectedCakeItem"
        @close="closePopupDetail"
      />

      <!-- Navbar Bottom -->
      <div class="fixed bottom-0 left-0 right-0 mx-auto max-w-md z-50 bg-blue-300">
        <div class="flex justify-center py-2">
          <ul class="flex space-x-20 font-semibold">
            <router-link
              :to="{ name: 'Produk', params: { slug: $route.params.slug } }"
              exact
              class="nav-link py-2 px-8 bg-white text-blue-900 rounded-md shadow text-semibold"
            >
              Produk
            </router-link>
            <router-link
              :to="{ name: 'Linkyi', params: { slug: $route.params.slug } }"
              exact
              class="nav-link py-2 px-8 bg-white text-blue-900 rounded-md shadow text-semibold"
            >
              Linkyi
            </router-link>
          </ul>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
import { useDataStore } from "../../../stores/dataStore";
import CakeDetailPopup from "./CakeDetailPopup.vue";
import { useRoute } from "vue-router";

export default {
  components: {
    CakeDetailPopup,
  },
  props: ["slug"],

  data() {
    return {
      searchQuery: "",
      selectedCategory: "All Category",
      isDropdownVisible: false,
      isPopupVisible: false,
      selectedCakeItem: null,
      loading: false,
      error: null,
      store: null, // Properti untuk menyimpan instance store
    };
  },
  computed: {
    cakeItems() {
      return this.store ? this.store.cakeItems : [];
    },
    storeLogo() {
      return this.store ? this.store.storeLogo : "";
    },
    storeDescription() {
      return this.store ? this.store.storeDescription : "";
    },
    displayedCategories() {
      return this.store ? this.store.displayedCategories : [];
    },
    dropdownCategories() {
      return this.store ? this.store.dropdownCategories : [];
    },
    storeName() {
      return this.store ? this.store.storeName : "";
    },
    filteredItems() {
    return this.cakeItems.filter(item => {
      const matchesSearchQuery = item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      const matchesCategory = this.selectedCategory === "All Category" || item.category === this.selectedCategory;
      return matchesSearchQuery && matchesCategory;
      });
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownVisible = !this.isDropdownVisible;
    },
    selectCategory(category) {
      this.selectedCategory = category;
      this.isDropdownVisible = false;
      this.filterItems();
    },
    filterItems() {
      // The filtering is handled in the computed property 'filteredItems'
        this.filteredItems = this.cakeItems.filter(item => {
        const matchesSearchQuery = item.title.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesCategory = this.selectedCategory === "All Category" || item.category === this.selectedCategory;
        return matchesSearchQuery && matchesCategory;
      });
    },
    async showPopup(item) {
      this.selectedCakeItem = await this.productDetail(item.id);
      console.log(this.selectedCakeItem);
      this.isPopupVisible = true;
    },
    closePopupDetail() {
      this.isPopupVisible = false;
      this.selectedCakeItem = null;
    },
    isActive(path) {
      return useRoute().path === path;
    },
    async fetchDataAndProducts() {
      this.loading = true;
      this.error = null;
      try {
        if (!this.slug) {
          throw new Error("Slug is required");
        }
        await this.store.fetchData(this.slug);
        await this.store.fetchProducts(this.slug);
      } catch (error) {
        console.error("Error fetching data and products:", error);
        this.error = "Failed to fetch data and products";
      } finally {
        this.loading = false;
      }
    },
  },
  created() {
    this.store = useDataStore();
    if (this.slug) {
      this.fetchDataAndProducts();
    }
  },
  watch: {
    slug(newSlug, oldSlug) {
      if (newSlug) {
        this.fetchDataAndProducts();
      }
    },
    selectedCategory() {
      this.filterItems();
    },
  },
  setup() {
    const store = useDataStore();
    const route = useRoute();

    const productDetail = async (item_id) => {
      const slug = route.params.slug;
      if (slug) {
        await store.fetchProductDetail(slug, item_id);
        return store.selectedCakeItem;
      }
    };

    return {
      store,
      productDetail,
    };
  },
};
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 50;
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
}

.router-link-active {
  background-color: #3b82f6;
  color: white;
}

.nav-link {
  transition: background-color 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: #3b82f6;
  color: white;
}
</style>
