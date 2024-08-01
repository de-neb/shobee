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

                <v-col class="flex-grow-1 overflow-auto">
                    <v-list lines="three">

                        <v-list-item
                            v-for="product in cartStore.cart"
                            :key="product.id"
                        >
                            <v-row class="text-nowrap">
                                <v-col cols="auto">
                                    <v-img
                                        width="100"
                                        height="100"
                                        class="rounded"
                                        :src="product.images[0]"
                                    ></v-img>
                                </v-col>

                                <v-col cols="7">
                                    <p class="font-weight-bold text-wrap">{{ product.title }}</p>


                                </v-col>

                            </v-row>
                        </v-list-item>

                        <v-divider></v-divider>

                    </v-list>
                </v-col>

                <v-col class="flex-grow-0 d-flex justify-space-between align-center">
                    <span class="text-caption">Subtotal:</span>

                    <span class="text-h3">PRICE</span>
                </v-col>

                <v-divider></v-divider>

                <v-col class="flex-grow-0">
                    <v-btn
                        block
                        size="x-large"
                        variant="flat"
                        color="primary"
                    >
                        View Cart
                    </v-btn>
                </v-col>


            </v-row>
        </v-container>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app';
import { useCartStore } from '@/modules/cart/config/store';

const appStore = useAppStore()
const cartStore = useCartStore()

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
