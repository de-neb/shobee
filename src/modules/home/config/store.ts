import { defineStore } from "pinia";
import { Category } from "@/shared/types";
import service from "./api";

export const useHomeStore = defineStore("home", {
    state: () => ({
        categories: <Category[]>[],
    }),

    actions: {
        async loadAllCategories(limit: number = 5) {
            try {
                const { data } = await service.getAllCategories(limit);
                this.categories = data;
            } catch (error) {}
        },
    },
});
