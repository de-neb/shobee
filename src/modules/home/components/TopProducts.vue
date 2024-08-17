<template>
    <template v-if="isLoading">
        <v-row class="mt-5 mb-5">
            <v-skeleton-loader
                type="heading"
                width="200"
            ></v-skeleton-loader>
        </v-row>
        <v-row justify="space-between">
            <v-skeleton-loader
                v-for="skeleton in 5"
                :key="skeleton"
                class="mb-3 mx-2 rounded"
                type="image@2, text@3"
                width="400"
            ></v-skeleton-loader>
        </v-row>
    </template>

    <template v-else>
        <v-row class="mt-5 mb-5">
            <h2>Top Products</h2>
        </v-row>

        <v-row
            justify="start"
            align="center"
        >
            <v-col
                lg="3"
                alig-self="center"
                v-for="product in topProducts"
                :key="product.id"
            >
                <ProductCard
                    :product="product"
                    :loading="productStore.loading || isLoading"
                />
            </v-col>
        </v-row>
    </template>
</template>

<script setup lang="ts">
import { useProductStore } from "@/modules/products/config/store";
import helper from "../config/helper";
import ProductCard from "./ProductCard.vue";
import { Product } from "@/shared/types";

const productStore = useProductStore();

const topProducts = ref<Product[]>([])
const isLoading = ref(true)

const getRandomTopProducts = async () => {
    const randomOffset = helper.generateRandomNumber(10, 20)
    topProducts.value = await productStore.getProducts({
        offset: randomOffset,
        limit: 8
    })
    isLoading.value = false
}

onMounted(async () => {
    getRandomTopProducts()
});
</script>

<style scoped></style>
