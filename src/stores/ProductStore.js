import { defineStore } from "pinia";
import products from "@/data/products.json";
export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      products,
    };
  },
  // actions
  // getters
});
