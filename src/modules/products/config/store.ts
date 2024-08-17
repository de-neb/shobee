// Utilities
import { defineStore } from "pinia";
import { DEFAULT_CURRENCY } from "./contants";
import { Product } from "@/shared/types";
import router from "@/router";
import service from "./api";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: <Product[]>[],
        loading: false,
        viewingProduct: <Product>{
            quantity: 1,
        },
        priceRange: <number[]>[],
    }),

    actions: {
        async getProducts(params: any) {
            try {
                this.loading = true;
                const { data } = await service.getProducts(params);

                this.products = data.map((row: Product) => ({
                    ...row,
                    currency: DEFAULT_CURRENCY,
                }));

                return this.products;
            } finally {
                this.loading = false;
            }
        },

        async getProductById(id: number) {
            try {
                this.loading = true;
                const { data } = await service.getProductById(id);
                data.currency = DEFAULT_CURRENCY;

                this.viewingProduct = { quantity: 1, ...data };

                return data;
            } finally {
                this.loading = false;
            }
        },

        async filterProducts(id: string) {
            const params = {
                categoryId: id ?? router.currentRoute.value.params.id,
                price_min: this.priceRange[0],
                price_max: this.priceRange[1],
            };

            const { data } = await service.getProducts(params);

            const products = data.map((row: Product) => ({
                ...row,
                currency: DEFAULT_CURRENCY,
            }));

            return products;
        },
    },
});
