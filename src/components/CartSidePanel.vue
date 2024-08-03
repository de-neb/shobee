<template>
    <v-navigation-drawer
        location="right"
        v-model="appStore.isCartSidePanelOpen"
        width="450"
        height="100%"
        order="1"
        temporary
        persistent
        class="cart-drawer"
    >

        <v-container class="h-100">
            <v-row class="flex-column h-100">
                <v-col class="flex-grow-0 d-flex flex-nowrap justify-space-between align-center">

                    <h2>Shopping Cart</h2>
                    <v-btn
                        variant="flat"
                        icon="mdi-close"
                        size="large"
                        @click="appStore.isCartSidePanelOpen = false"
                    ></v-btn>

                </v-col>

                <template v-if="cartStore.cart && cartStore.cart.length">
                    <v-col class="flex-grow-1 overflow-auto">
                        <v-list lines="three">

                            <div
                                v-for="product in cartStore.cart"
                                :key="product.id"
                            >
                                <v-list-item class="px-1">
                                    <v-row
                                        class="flex-nowrap ga-1"
                                        no-gutters
                                    >
                                        <v-col
                                            cols="auto"
                                            align-self="center"
                                        >
                                            <v-img
                                                width="110"
                                                aspect-ration="1/1"
                                                cover
                                                class="rounded"
                                                :src="product.images[0]"
                                            ></v-img>
                                        </v-col>

                                        <v-col cols="7">
                                            <v-row
                                                no-gutters
                                                justify="space-around"
                                                class="flex-column px-2 ga-4"
                                            >
                                                <v-col cols="auto">
                                                    <p class="font-weight-bold">{{
                                                        product.title }}</p>
                                                    <p class="font-weight-medium">{{ product.currency }} {{
                                                        product.price
                                                        }}
                                                    </p>
                                                </v-col>


                                                <v-col cols="7">
                                                    <QuantityInput
                                                        density="compact"
                                                        v-model="product.quantity"
                                                    />
                                                </v-col>

                                            </v-row>
                                        </v-col>

                                        <v-col
                                            cols="auto"
                                            align-self="stretch"
                                        >
                                            <v-btn
                                                variant="text"
                                                color="red"
                                                icon="mdi-delete-outline"
                                                size="small"
                                                rounded="0"
                                                height="100%"
                                                @click="cartStore.removeProduct(product.id)"
                                            ></v-btn>
                                        </v-col>

                                    </v-row>
                                </v-list-item>

                                <v-divider></v-divider>
                            </div>

                        </v-list>
                    </v-col>

                    <v-col class="flex-grow-0 d-flex justify-space-between align-center">
                        <span class="text-subtitle font-weight-medium">Subtotal</span>

                        <span class="text-h4">{{ cartStore.subTotal }}</span>
                    </v-col>

                    <v-divider></v-divider>

                    <v-col class="flex-grow-0 d-flex flex-column ga-2">
                        <v-btn
                            block
                            size="x-large"
                            variant="flat"
                            color="primary"
                        >
                            Continue to Checkout
                        </v-btn>
                        <v-btn
                            block
                            size="x-large"
                            variant="tonal"
                            color="secondary"
                            @click="navigationHelper.to('cart')"
                        >
                            View Cart
                        </v-btn>
                    </v-col>
                </template>

                <v-col v-else>
                    <v-empty-state
                        title="Your cart is empty."
                        image="/src/assets/empty-bag.jpeg"
                    ></v-empty-state>
                </v-col>
            </v-row>
        </v-container>

    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { useCartStore } from '@/modules/cart/config/store';
import navigationHelper from '@/helpers/navigationHelper';

const appStore = useAppStore()
const cartStore = useCartStore()

watch(() => cartStore.cart, () => {
    cartStore.setCartInLocalStorage()
}, { deep: true })

onMounted(() => {
    cartStore.getCartFromLocalStorage()
})
</script>

<style>
.cart-drawer .v-navigation-drawer__content {
    overflow-y: hidden !important;
}

.max-height {
    max-height: 600px !important;
}
</style>
