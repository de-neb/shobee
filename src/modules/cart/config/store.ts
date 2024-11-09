import { defineStore } from "pinia";
import { CART_STORAGE_KEY, defaultAddress } from "./constants";
import { useSnackbarStore as snackbarStore } from "@/stores/snackbar";
import { Product, ShippingInformation } from "@/shared/types";
import miscHelper from "@/helpers/miscHelper";

export const useCartStore = defineStore("cart", {
    state: () => ({
        cart: <Product[]>[],
        shippingInformation: <ShippingInformation>{
            ...defaultAddress,
            shippingMethod: <number>0,
            paymentMethod: "",
        },
    }),

    getters: {
        subTotal(state): string | undefined {
            const subTotal =
                state.cart.reduce((acc, product) => {
                    const productTotalPrice = product.price * product.quantity!;

                    return acc + productTotalPrice;
                }, 0) + state.shippingInformation.shippingMethod;

            return miscHelper.formatPrice(subTotal);
        },

        cartItemsTotal(state): number {
            return state.cart.reduce(
                (acc, product) => acc + product.quantity!,
                0
            );
        },

        cartCharges(state): any {
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

        updateCartInLocalStorage(data: Product) {
            this.getCartFromLocalStorage();

            if (!this.cart || !this.cart.length) {
                data.quantity = 1;
                this.cart.push(data);
            } else {
                // check if the same product was already added in the cart
                const existingProductIndex = this.cart.findIndex(
                    (product) => product.id === data.id
                );

                if (existingProductIndex > -1) {
                    this.cart[existingProductIndex].quantity! += 1;
                } else {
                    this.cart.push(data);
                }
            }

            this.setCartInLocalStorage();

            snackbarStore().show(`${data.title} added successfully.`);
        },

        updateProductQuantityInCart(data: Product) {
            const existingProductIndex = this.cart.findIndex(
                (product) => product.id === data.id
            );

            if (existingProductIndex > -1) {
                this.cart[existingProductIndex].quantity! += data.quantity!;
            } else {
                this.cart.push(data);
            }

            snackbarStore().show("Cart updated successfully.");

            this.setCartInLocalStorage();
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

        removeMultipleProducts(productIds: string[]) {
            this.cart = this.cart.filter(
                (product) => !productIds.includes(product.id)
            );

            this.setCartInLocalStorage();

            snackbarStore().show("Item(s) removed successfully.");
        },

        clearCart() {
            this.cart = [];
            this.setCartInLocalStorage();
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
