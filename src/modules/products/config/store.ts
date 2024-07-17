// Utilities
import { defineStore } from "pinia";
import service from "./api";
import { DEFAULT_CURRENCY } from "./contants";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        currency: DEFAULT_CURRENCY,
        loading: false,
    }),

    actions: {
        async getProducts(offset: number = 0, limit: number = 100) {
            try {
                this.loading = true;
                const { data } = await service.getProducts(offset, limit);

                this.products = data;

                return data;
            } catch (error) {}
        },
    },
});
