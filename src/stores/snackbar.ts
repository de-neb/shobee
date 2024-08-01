import { defineStore } from "pinia";

export const useSnackbarStore = defineStore("snackbar", {
    state: () => ({
        messages: <string[]>[],
        duration: 2000,
        color: "success",
    }),

    actions: {
        show(
            message: string,
            color: string = "success",
            duration: number = 2000
        ) {
            this.messages.push(message);
            this.color = color;
            this.duration = duration;
        },
    },
});
