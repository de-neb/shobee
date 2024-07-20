<template>
    <template v-if="productStore.loading">
        <v-row class="mt-10 mb-5">
            <v-skeleton-loader type="heading" width="200"></v-skeleton-loader>
        </v-row>
    </template>

    <template v-else>
        <v-row class="mt-10 mb-5">
            <h2>Top Products</h2>
        </v-row>

        <v-row justify="start" align="center">
            <v-col md="3" lg="2" alig-self="center" v-for="product in topProducts" :key="product.id">
                <ProductCard :product="product" :loading="productStore.loading" />
            </v-col>
        </v-row>
    </template>
</template>

<script setup lang="ts">
import { useProductStore } from "@/modules/products/config/store";
import helper from "../config/helper";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore();

const topProducts = ref([])

const getRandomTopProducts = async () => {
    const randomOffset = helper.generateRandomNumber(10, 30)
    topProducts.value = await productStore.getProducts(randomOffset, 8)
}

onMounted(async () => {
    getRandomTopProducts()
});
</script>

<style scoped></style>
