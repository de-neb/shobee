<template>
    <v-row justify="center" align="center" class="ga-1">
        <v-col cols="12">
            <h2>Top Products</h2>
        </v-col>
        <v-col cols="auto" v-for="product in productStore.products" :key="product.id">
            <v-card width="250" height="auto" elevation="2">
                <v-img contain class="my-3" :src="getImageUrl(product.images)"></v-img>

                <v-card-text>
                    <h4 class="text-truncate">{{ product.title }}</h4>
                    <v-rating readonly active-color="blue" color="orange-lighten-1" density="compact"></v-rating>
                    <p class="font-weight-bold">{{ productStore.currency }} {{ product.price }}</p>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup lang="ts">
import { useProductStore } from "@/modules/products/config/store";

const productStore = useProductStore();

const topProducts = ref([])

const getRandomTopProducts = async () => {
    const randomOffset = Math.floor((Math.random() * 10) + 1)
    topProducts.value = await productStore.getProducts(randomOffset, 8)
}

const getImageUrl = (images: string[]) => {
    const extracted = JSON.parse(images)
    return extracted[0]
}

onMounted(async () => {
    getRandomTopProducts()
});
</script>

<style scoped></style>
