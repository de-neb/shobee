// Utilities
import { defineStore } from "pinia";
import service from "./api";

export const useAppStore = defineStore("app", {
    state: () => ({
        products: [],
    }),

    actions: {
        async getProducts(offset: number = 0, limit: number = 10) {
            try {
                const {
                    data: { data },
                } = await service.getProducts(offset, limit);

                this.products = data;
            } catch (error) {}
        },
    },
});
