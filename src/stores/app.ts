// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({
        isCartSidePanelOpen: false,
    }),

    actions: {
        toggleCartSidePanel() {
            this.isCartSidePanelOpen = !this.isCartSidePanelOpen;
        },
    },
});
