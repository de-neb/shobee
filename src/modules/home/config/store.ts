import { defineStore } from "pinia";
import { Category } from "./types";
import service from "./api";

export const useHomeStore = defineStore("home", {
    state: () => ({
        categories: <Category[]>[],
    }),

    actions: {
        async loadAllCategories(limit: number | undefined) {
            try {
                const { data } = await service.getAllCategories(limit);
                this.categories = data;
                console.log(this.categories);
            } catch (error) {}
        },
    },
});
