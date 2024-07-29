<template>
    <v-container
        height="100%"
        class="py-8"
    >
        <v-row justify="space-between">
            <v-col cols="2">
                <v-select
                    hide-details
                    variant="outlined"
                    density="comfortable"
                    v-model="filterBy"
                    :items="FILTER_OPTIONS"
                ></v-select>
            </v-col>

            <v-col
                cols="2"
                align-self="center"
            >
                <v-item-group class="d-flex ga-2 w-100 justify-end">
                    <v-item v-slot="{ isSelected, toggle }">
                        <v-icon
                            size="x-large"
                            :icon="isSelected ? 'mdi-list-box' : 'mdi-list-box-outline'"
                            @click="toggle"
                        />
                    </v-item>

                    <v-item v-slot="{ isSelected, toggle }">
                        <v-icon
                            size="x-large"
                            :icon="isSelected ? 'mdi-view-grid' : 'mdi-view-grid-outline'"
                            @click="toggle"
                        />
                    </v-item>
                </v-item-group>
            </v-col>
        </v-row>

        <v-row>
            <v-col
                cols="12"
                sm="3"
                v-for="product in categoryProducts"
                :key="product.id"
            >
                <ProductCard
                    :product="product"
                    :loading="isLoading"
                />
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { FILTER_OPTIONS } from '../config/constants';
import { useProductStore } from '@/modules/products/config/store';
import router from '@/router'
import ProductCard from '@/modules/home/components/ProductCard.vue';

const productStore = useProductStore()

const filterBy = ref(FILTER_OPTIONS[0])

const categoryProducts = ref([])
const isLoading = ref(false)

const initProductsByCategory = async (id: string) => {
    isLoading.value = true
    categoryProducts.value = await productStore.getProductsByCategory(id)
    isLoading.value = false
}

router.afterEach((to) => {
    initProductsByCategory(to.params.id as string)
})

onMounted(() => {
    initProductsByCategory(router.currentRoute.value.params.id as string)
})

</script>

<style lang="scss" scoped></style>