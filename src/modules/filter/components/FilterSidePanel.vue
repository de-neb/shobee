<template>
    <v-navigation-drawer
        permanent
        class="px-3 py-5"
    >
        <v-list
            nav
            v-model:opened="opened"
        >
            <v-list-group value="Category">
                <template v-slot:activator="{ props }">
                    <v-list-item
                        v-bind="props"
                        title="Category"
                    ></v-list-item>
                </template>

                <v-list :selected="currentCategory">
                    <v-list-item
                        v-for="category in homeStore.categories"
                        :key="category.id"
                        :title="category.name"
                        :value="category.id"
                        :to="`/category/${category.id}`"
                        color="secondary"
                        variant="plain"
                    >
                    </v-list-item>
                </v-list>
            </v-list-group>

            <v-divider></v-divider>

            <v-list-group value="Price">
                <template v-slot:activator="{ props }"> <v-list-item
                        v-bind="props"
                        title="Price"
                    ></v-list-item>
                </template>
                <span class="text-subtitle-1">Range : <span class="font-weight-bold">{{
                    helper.readablePriceRange(productStore.priceRange) }}</span></span>

                <v-range-slider
                    strict
                    color="tertiary"
                    v-model="productStore.priceRange"
                    step="10"
                    :min="0"
                    :max="299"
                ></v-range-slider>

            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import router from '@/router'
import helper from '../config/helper';
import { useHomeStore } from '@/modules/home/config/store';
import { useProductStore } from '@/modules/products/config/store';

const homeStore = useHomeStore()
const productStore = useProductStore()

const opened = ref(['Category', 'Price'])
const currentCategory = ref<any[]>([])
const categoryId = computed(() => router.currentRoute.value.params.id as string)

const assignCurrentCategory = (id: string) => {
    currentCategory.value = [parseInt(id)]
}

router.afterEach((to) => {
    const id = to.params.id as string
    assignCurrentCategory(id)
})

onMounted(() => {
    assignCurrentCategory(categoryId.value)
})
</script>

<style scoped></style>