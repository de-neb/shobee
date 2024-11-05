<template>
    <v-container class="pb-8 h-100">
        <v-row
            v-if="!categoryProducts.length && !isLoading"
            align="center"
            class="h-100"
        >
            <v-empty-state
                class="mx-auto"
                title="Oops! We Couldn't Find What You're Looking For"
                text="We’ve searched high and low, but it looks like we don’t have the product you’re looking for right now."
            >
                <template v-slot:media>
                    <v-img
                        width="300"
                        height="300"
                        class="mx-auto mb-10"
                        src="/src/assets/product_not_found.png"
                    ></v-img>
                </template>

            </v-empty-state>
        </v-row>

        <template v-else>
            <v-row justify="space-between">
                <v-col
                    cols="6"
                    sm="6"
                    md="4"
                >
                    <v-select
                        hide-details
                        variant="outlined"
                        density="comfortable"
                        v-model="filterBy"
                        :items="FILTER_OPTIONS"
                        @update:modelValue="handleFilter"
                    ></v-select>
                </v-col>

                <v-col
                    cols="4"
                    sm="4"
                    align-self="center"
                >
                    <v-item-group
                        v-model="isGridView"
                        class="d-flex ga-2 w-100 justify-end"
                    >
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
                    v-for="product in categoryProducts"
                    :key="product.id"
                    :sm="isGridView ? 6 : 12"
                    :md="isGridView ? 4 : 12"
                    :lg="isGridView ? 3 : 12"
                >
                    <ProductCard
                        :horizontal="!isGridView"
                        :product="product"
                        :loading="isLoading"
                    />
                </v-col>
            </v-row>
        </template>

    </v-container>
</template>

<script setup lang="ts">
import { FILTER_OPTIONS } from '../config/constants';
import { useProductStore } from '@/modules/products/config/store';
import { useDisplay } from 'vuetify';
import helper from '../config/helper';
import router from '@/router'
import ProductCard from '@/modules/home/components/ProductCard.vue';
import { Product } from '@/shared/types';

const productStore = useProductStore()

const { xs, mdAndDown } = useDisplay()

const filterBy = ref(FILTER_OPTIONS[0])

const categoryProducts = ref<Product[]>([])
const isLoading = ref(false)
const isGridView = ref(1)

const initProductsByCategory = async (id: string) => {
    isLoading.value = true
    categoryProducts.value = await productStore.filterProducts(id)
    isLoading.value = false
}

const handleOnMounted = async () => {
    isLoading.value = true

    const query = router.currentRoute.value.query
    if (router.currentRoute.value.name === 'Search' && Object.hasOwn(query, 'title')) {
        categoryProducts.value = await productStore.getProducts({ title: query.title })
    } else {
        initProductsByCategory(router.currentRoute.value.params.id as string)
    }

    isLoading.value = false
}

const handleFilter = (value: string) => {
    isLoading.value = true
    const [{ sortBy, sortByProp, type }] = FILTER_OPTIONS.filter((el: any) => el.value === value)

    categoryProducts.value = helper.sortItems(categoryProducts.value, sortBy, sortByProp, type)
    isLoading.value = false
}

router.afterEach((to) => {
    handleOnMounted()
})

watch(() => productStore.priceRange, async () => {
    isLoading.value = true

    const title = router.currentRoute.value.query?.title as any
    categoryProducts.value = await productStore.filterProducts(router.currentRoute.value.params.id as string, title)

    isLoading.value = false
})

onMounted(() => {
    handleOnMounted()
})

</script>

<style lang="scss" scoped></style>