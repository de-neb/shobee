import { defineStore } from "pinia";
import { CART_STORAGE_KEY } from "./constants";
import { useSnackbarStore as snackbarStore } from "@/stores/snackbar";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: <any[]>[],
    }),

    actions: {
        setCartInLocalStorage(data: any) {
            this.getCartFromLocalStorage();
            if (!this.cart) {
                data.quantity = 1;
                localStorage.setItem(CART_STORAGE_KEY, JSON.stringify([data]));
            } else {
                // check if the same product was already added in the cart
                const existingProductIndex = this.cart.findIndex(
                    (product) => product.id === data.id
                );

                if (existingProductIndex > -1) {
                    this.cart[existingProductIndex].quantity += 1;
                } else {
                    this.cart.push(data);
                }

                localStorage.setItem(
                    CART_STORAGE_KEY,
                    JSON.stringify(this.cart)
                );
            }

            snackbarStore().show(`${data.title} added successfully.`);
        },

        getCartFromLocalStorage() {
            this.cart = JSON.parse(
                localStorage.getItem(CART_STORAGE_KEY) as string
            );

            console.log("get", this.cart);
        },
    },
});
