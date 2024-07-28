// Utilities
import { defineStore } from "pinia";
import service from "./api";
import { DEFAULT_CURRENCY } from "./contants";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        loading: false,
        viewingProduct: {},
    }),

    actions: {
        async getProducts(params: any) {
            try {
                this.loading = true;
                const {
                    data: { data },
                } = await service.getProducts(params);

                this.products = data.map((row) => ({
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
                const {
                    data: {
                        data: [data],
                    },
                } = await service.getProductById(id);
                data.currency = DEFAULT_CURRENCY;

                this.viewingProduct = data;

                return data;
            } finally {
                this.loading = false;
            }
        },

        async getProductsByCategory(categoryId: string | number) {
            const {
                data: { data },
            } = await service.getProducts({
                categoryId,
            });

            const relatedProducts = data.map((row) => ({
                ...row,
                currency: DEFAULT_CURRENCY,
            }));

            return relatedProducts;
        },
    },
});
