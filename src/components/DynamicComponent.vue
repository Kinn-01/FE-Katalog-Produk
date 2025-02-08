<template>
  <div>
    <component
      :is="currentComponent"
      v-if="currentComponent !== null && selectedCakeItem !== null"
      :cakeItem="selectedCakeItem"
      @close="currentComponent = null"
    />
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
import { ref, watch, onMounted, markRaw } from "vue";
import { useDataStore } from "../stores/dataStore";
import { useRoute } from "vue-router";

export default {
  name: "DynamicComponent",
  props: ["slug"],
  setup(props) {
    const dataStore = useDataStore();
    const currentComponent = ref(null);
    const route = useRoute();
    const selectedCakeItem = ref(null);

    const loadComponent = async () => {
      let currentSlug = props.slug || route.params.slug;
      if (!currentSlug) {
        console.error("Slug is required.");
        return;
      }
      try {
        await dataStore.fetchData(currentSlug);
        await dataStore.fetchProducts(currentSlug);

        const productId = dataStore.cakeItems.length > 0 ? dataStore.cakeItems[0].id : null;
        if (productId) {
        await dataStore.fetchProductDetail(currentSlug, productId);
        selectedCakeItem.value = dataStore.selectedCakeItem;
        const productDetail = dataStore.selectedCakeItem; // Assign productDetail here
        // console.log(productDetail); // Debugging line to check the structure
      } else {
        console.error("No products found to fetch details for.");
      }

      const themePath = dataStore.themePath;
      const routeName = route.name;
      currentComponent.value = markRaw(await getComponentByTheme(themePath, routeName));
    } catch (error) {
      console.error("Error loading component:", error);
      currentComponent.value = null;
    }
  };

    const themeMap = {
      "blue-store": {
        Produk: () => import(`../components/theme/blue-store/produk.vue`),
        Linkyi: () => import(`../components/theme/blue-store/Linkyi.vue`),
      },
      "orange-store": {
        Produk: () => import(`../components/theme/orange-store/orangeproduk.vue`),
        Linkyi: () => import(`../components/theme/orange-store/Linkyi.vue`),
      },
    };

    async function getComponentByTheme(themePath, routeName) {
      const theme = themeMap[themePath];
      if (theme && theme[routeName]) {
        const componentModule = await theme[routeName]();
        return componentModule.default || componentModule;
      } else {
        console.error(`Component not found for themePath: ${themePath} and routeName: ${routeName}`);
        return null;
      }
    }

    onMounted(() => {
      loadComponent();
    });

    watch(() => props.slug, (newSlug, oldSlug) => {
      if (newSlug !== oldSlug) {
        loadComponent();
      }
    });

    return {
      currentComponent,
      selectedCakeItem,
    };
  },
};
</script>
