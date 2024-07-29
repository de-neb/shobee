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
                <h6>Price : insert price here</h6>

                <v-range-slider
                    :min="0"
                    max="1000"
                    color="tertiary"
                ></v-range-slider>

            </v-list-group>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup lang="ts">
import router from '@/router'
import { useHomeStore } from '@/modules/home/config/store';

const homeStore = useHomeStore()

const opened = ref(['Category', 'Price'])
const currentCategory = ref<any[]>([])
const categoryId = computed(() => router.currentRoute.value.params.id as string)

const assignCurrentCategory = (id: string | number) => {
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