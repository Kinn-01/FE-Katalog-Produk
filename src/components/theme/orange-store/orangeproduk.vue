<template>
  <div class="bg-slate-100">
    <div class="mx-auto min-h-full max-w-md">
      <div class="min-h-screen bg-white pb-16">
        <!-- navbar -->
        <div class="bg-pink-100 mx-0 my-0 py-4 sticky top-0 z-50">
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
              <img
                src="../../../assets/linkyi.svg"
                alt="Bag Icon"
                class="h-6 w-6 mr-3"
              />
            </div>
          </div>
        </div>
        <!-- end navbar -->

        <!-- content section -->
        <div class="bg-pink-100 p-6 mt-0">
          <div class="flex items-center mb-4">
            <img :src="storeLogo" alt="Store Logo" class="h-20 w-30 mr-4" />
            <div>
              <h2 class="text-xl font-bold text-left">{{ storeName }}</h2>
              <p class="text-sm text-justify text-gray-500">
                {{ storeDescription }}
              </p>
            </div>
          </div>
        </div>
        <!-- end content section -->

        <!-- category section -->
        <div class="grid justify-items-stretch mt-4">
          <ul class="flex space-x-2 px-7 py-2">
            <li
              v-for="category in displayedCategories"
              :key="category"
              :class="{
                'bg-pink-200 text-pink-900': selectedCategory === category,
                'bg-white text-slate-600': selectedCategory !== category,
              }"
              class="py-1 px-3 rounded-lg shadow cursor-pointer"
              @click="selectCategory(category)"
            >
              {{ category }}
            </li>
            <li
              class="relative py-1 px-3 bg-white text-slate-600 rounded-lg shadow cursor-pointer"
              @click="toggleDropdown"
            >
              ▼
              <ul
                v-if="isDropdownVisible"
                class="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-lg w-max dropdown-menu"
              >
                <li
                  v-for="category in dropdownCategories"
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

        <!-- Cake Menu -->
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
        <!-- end Cake Menu -->

        <!-- CakeDetailPopup -->
        <CakeDetailPopup
          v-if="isPopupVisible"
          :cakeItem="selectedCakeItem"
          @close="closePopupDetail"
        />
        <!-- end CakeDetailPopup -->

        <!-- Navbar button -->
        <div
          class="fixed bottom-0 left-0 right-0 mx-auto max-w-md z-50 bg-pink-300"
        >
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
        <!-- end Navbar button -->
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
      selectedCategory: "All Cake",
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
        const matchesCategory = this.selectedCategory === "All Cake" || item.category === this.selectedCategory;
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
