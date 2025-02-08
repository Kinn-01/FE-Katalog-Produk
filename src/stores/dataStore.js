import { defineStore } from "pinia";
import axios from "axios";

export const useDataStore = defineStore("dataStore", {
  state: () => ({
    storeName: "",
    storeLogo: "",
    storeDescription: "",
    storeLinks: [],
    cakeItems: [],
    displayedCategories: [],
    dropdownCategories: [],
    loading: false,
    error: null,
    selectedCakeItem: {
      title: "",
      price: 0,
      thumbnail: "",
      category: "",
      links: []
    }, // Ensure this is in state
  }),
  actions: {
    async fetchData(slug) {
      this.loading = true;
      this.error = null;
      try {
        if (!slug) {
          throw new Error("Slug is required");
        }
        const response = await axios.get(
          `https://api.linkyi.shop/api/store/${slug}`
        );
        const { store, theme, links, categories } = response.data.data;
        this.storeName = store.name;
        this.storeLogo = store.logo;
        this.storeDescription = store.description;
        // this.storeLinks = links;
        this.storeLinks = links.filter(link => link.type === "link");
        this.themeName = theme.name;
        this.themePath = theme.path;
        this.categories = categories.map((category) => category.name);
        const maxDisplayed = 5;
        this.displayedCategories = this.categories.slice(0, maxDisplayed);
        this.dropdownCategories = this.categories.slice(maxDisplayed);
      } catch (error) {
        console.error("API Fetch Error:", error);
        this.error = error.message || "Failed to fetch store data";
      } finally {
        this.loading = false;
      }
    },
    async fetchProducts(slug) {
      this.loading = true;
      this.error = null;
      try {
        if (!slug) {
          throw new Error("Slug is required");
        }
        const response = await axios.get(
          `https://api.linkyi.shop/api/store/${slug}/products`
        );
        const products = response.data.data.products.data;
        // console.log('di fetch products')
        // console.log(products)
        this.cakeItems = products.map((product) => ({
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          category: product.category,
          description: product.description,
          links: product.links,
        }));
      } catch (error) {
        console.error("API Fetch Error:", error);
        this.error = error.message || "Failed to fetch products";
      } finally {
        this.loading = false;
      }
    },
    async fetchProductDetail(slug, productId) {
      this.loading = true;
      this.error = null;
      if (!slug || !productId) {
        this.error = "Slug or Product ID is undefined";
        console.error(this.error);
        this.loading = false;
        return;
      }
      try {
        const response = await axios.get(
          `https://api.linkyi.shop/api/store/${slug}/products/${productId}`
        );
        const productDetail = response.data.data;
        this.selectedCakeItem = {
          title: productDetail.products.title,
          price: productDetail.products.price,
          thumbnail: productDetail.products.thumbnail,
          category: productDetail.category.name,
          // description: productDetail.products.description || "No description available",
          links: productDetail.links// Provide a default value if links are undefined
        };
      } catch (error) {
        console.error("API Fetch Error:", error);
        this.error = error.message || "Failed to fetch product detail";
      } finally {
        this.loading = false;
      }
    },
  },
});
