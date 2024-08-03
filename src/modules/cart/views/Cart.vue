<template>
    <v-container class="h-100">
        <v-row>
            <BreadCrumb />
        </v-row>

        <v-row>
            <v-col
                cols="12"
                sm="8"
            >
                <v-list
                    density="compact"
                    select-strategy="classic"
                    theme="secondary"
                    v-model:selected="productIds"
                >
                    <v-row
                        justify="space-between"
                        align="center"
                        class="mx-2 flex-nowrap"
                    >
                        <v-col cols="auto">
                            <v-checkbox
                                hide-details
                                @update:modelValue="handleSelectAll"
                            >
                                <template #label>
                                    <span> {{ productIds.length }} items
                                        selected</span>
                                </template>
                            </v-checkbox>
                        </v-col>

                        <v-col
                            cols="auto"
                            v-if="productIds.length > 0"
                        >
                            <v-btn
                                variant="text"
                                color="red"
                                icon="mdi-delete-outline"
                                v-tooltip="'Remove'"
                                @click="handleRemove"
                            ></v-btn>
                        </v-col>
                    </v-row>


                    <v-divider></v-divider>

                    <div
                        v-for="product in cartStore.cart"
                        :key="product.id"
                    >

                        <v-list-item
                            :value="product.id"
                            color="primary"
                        >
                            <template v-slot:prepend="{ isActive }">
                                <v-checkbox-btn :model-value="isActive"></v-checkbox-btn>
                            </template>

                            <v-row>
                                <v-col cols="auto">
                                    <v-img
                                        width="110"
                                        aspect-ration="1/1"
                                        cover
                                        class="rounded"
                                        :src="product.images[0]"
                                    ></v-img>
                                </v-col>

                                <v-col>
                                    <v-list-item-title class="font-weight-medium">{{ product.title
                                        }}</v-list-item-title>

                                    <QuantityInput
                                        v-model="product.quantity"
                                        width="130"
                                        density="compact"
                                    />
                                </v-col>

                                <v-col cols="auto">
                                    <p class="text-h6">{{ miscHelper.formatPrice(product.price) }}</p>
                                </v-col>
                            </v-row>
                        </v-list-item>
                        <v-divider></v-divider>
                    </div>
                </v-list>
            </v-col>

            <v-col
                cols="12"
                sm="4"
            >

                <v-card variant="flat">
                    <v-card-title class="text-h5">Cart Summary</v-card-title>

                    <v-card-text class="d-flex flex-column justify-space-between">
                        <div
                            class="d-flex justify-space-between align-center my-3"
                            v-for="[charge, chargeAmount] in Object.entries(cartStore.cartCharges)"
                        >
                            <p
                                class="font-weight-medium"
                                :class="{ 'font-weight-bold text-h5': charge === 'Grand Total' }"
                            >{{
                                charge }}</p>
                            <p :class="{ 'font-weight-bold text-h6': charge === 'Grand Total' }">{{ chargeAmount }}</p>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="primary"
                            variant="flat"
                            height="50"
                        >Proceed to Checkout</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import miscHelper from '@/helpers/miscHelper';
import { useCartStore } from '../config/store';

const cartStore = useCartStore()

const productIds = ref<number[]>([])

const handleSelectAll = (value: boolean) => {
    if (value) {
        productIds.value = cartStore.cart.map(product => product.id)
    } else {
        productIds.value = []
    }
}

const handleRemove = () => {
    cartStore.removeMultipleProducts(productIds.value)
    productIds.value = []
}
</script>

<style scoped></style>