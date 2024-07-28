<template>
    <v-row class="mt-10 mb-5">
        <v-skeleton-loader
            v-if="infiniteLoading || !infiniteProducts.length"
            type="heading"
            width="200"
        ></v-skeleton-loader>
        <h2 v-else>Daily Discover</h2>
    </v-row>

    <v-infinite-scroll
        @load="onLoad"
        width="100%"
        class="overflow-hidden"
    >
        <v-row
            justify="start"
            align="center"
        >
            <template
                v-for="(product, index) in infiniteProducts"
                :key="product.id"
            >
                <v-col
                    md="3"
                    xl="2"
                    alig-self="center"
                >
                    <ProductCard
                        :product="product"
                        :loading="infiniteLoading"
                    />
                </v-col>
            </template>
        </v-row>
    </v-infinite-scroll>
</template>

<script setup lang="ts">
import { useProductStore } from "@/modules/products/config/store";
import ProductCard from "./ProductCard.vue";

const productStore = useProductStore();

const infiniteProducts = ref([])
const offset = ref(10)
const infiniteLoading = ref(false)
const onLoad = async ({ done }) => {
    infiniteLoading.value = true
    const data = await productStore.getProducts({
        offset: offset.value,
        limit: 10
    })
    infiniteProducts.value.push(...data)
    if (data.length <= 0) {
        done('empty')
        infiniteLoading.value = false
        return;
    }
    offset.value += 10
    done('ok')
    infiniteLoading.value = false
}

onMounted(async () => {
    infiniteProducts.value = await productStore.getProducts({
        offset: offset.value,
        limit: 10
    })
});
</script>

<style scoped></style>
