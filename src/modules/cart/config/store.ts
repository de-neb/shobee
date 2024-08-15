import { defineStore } from "pinia";
import { CART_STORAGE_KEY, defaultAddress } from "./constants";
import { useSnackbarStore as snackbarStore } from "@/stores/snackbar";
import miscHelper from "@/helpers/miscHelper";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: <any[]>[],
        shippingInformation: {
            ...defaultAddress,
            shippingMethod: <number | null>null,
            paymentMethod: "",
        },
    }),

    getters: {
        subTotal(state) {
            const subTotal =
                state.cart.reduce((acc, product) => {
                    const productTotalPrice =
                        parseFloat(product.price) * parseInt(product.quantity);

                    return acc + productTotalPrice;
                }, 0) + state.shippingInformation.shippingMethod;

            return miscHelper.formatPrice(subTotal);
        },

        cartItemsTotal(state) {
            return state.cart.reduce(
                (acc, product) => acc + product.quantity,
                0
            );
        },

        cartCharges(state) {
            const data = {
                Subtotal: this.subTotal,
                "Delivery Charges": state.shippingInformation.shippingMethod,
                "Grand Total": this.subTotal,
            };

            return data;
        },
    },

    actions: {
        setCartInLocalStorage() {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
        },

        updateCartInLocalStorage(data: any) {
            this.getCartFromLocalStorage();

            if (!this.cart || !this.cart.length) {
                data.quantity = 1;

                this.cart.push(data);

                this.setCartInLocalStorage();
            } else {
                // check if the same product was already added in the cart
                const existingProductIndex = this.cart.findIndex(
                    (product) => product.id === data.id
                );

                if (existingProductIndex > -1) {
                    this.cart[existingProductIndex].quantity += 1;
                } else {
                    data.quantity = 1;
                    this.cart.push(data);
                }

                this.setCartInLocalStorage();
            }

            snackbarStore().show(`${data.title} added successfully.`);
        },

        getCartFromLocalStorage() {
            this.cart = JSON.parse(
                localStorage.getItem(CART_STORAGE_KEY) as string
            );
        },

        removeProduct(id: string) {
            this.cart = this.cart.filter((product) => product.id !== id);

            this.setCartInLocalStorage();

            snackbarStore().show("Item removed successfully.");
        },

        removeMultipleProducts(productIds: number[]) {
            this.cart = this.cart.filter(
                (product) => !productIds.includes(product.id)
            );

            this.setCartInLocalStorage();

            snackbarStore().show("Item(s) removed successfully.");
        },

        async getCountries() {
            try {
                const response = await fetch(
                    "https://restcountries.com/v3.1/all"
                );

                const data = await response.json();

                return data.map((country: any) => country.name.common);
            } catch (error) {
                snackbarStore().show("Failed to fetch countries", "error");
            }
        },
    },
});
