// Utilities
import { defineStore } from "pinia";

export const useAppStore = defineStore("app", {
    state: () => ({
        isCartSidePanelOpen: false,
        isMenuSidePanelOpen: false,
        isFilterSidePanelOpen: true,
    }),

    actions: {
        toggleCartSidePanel() {
            this.isCartSidePanelOpen = !this.isCartSidePanelOpen;
        },

        toggleMenuSidePanel() {
            this.isMenuSidePanelOpen = !this.isMenuSidePanelOpen;
        },

        toggleFilterSidePanel() {
            this.isFilterSidePanelOpen = !this.isFilterSidePanelOpen;
        },
    },
});
