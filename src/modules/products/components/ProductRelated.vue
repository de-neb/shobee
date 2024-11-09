<template>
    <v-container
        v-if="isLoading"
        fluid
    >
        <v-row>
            <v-skeleton-loader
                type="heading"
                width="300"
            ></v-skeleton-loader>
        </v-row>
        <v-row
            justify="space-between"
            class="flex-nowrap"
        >
            <v-skeleton-loader
                v-for="card in 5"
                :key="card"
                class="mx-2"
                type="image@2, text@2"
                width="350"
            ></v-skeleton-loader>
        </v-row>
    </v-container>

    <v-card
        v-else
        variant="flat"
        fluid
    >
        <v-card-title class="text-h5">Related Products</v-card-title>

        <v-card-text>
            <v-data-iterator
                :items="relatedProducts"
                :items-per-page="itemsPerPage"
            >
                <template v-slot:default="{ items }">
                    <v-row>
                        <v-col
                            cols="12"
                            sm="6"
                            md="4"
                            lg="3"
                            alig-self="center"
                            v-for="product in items"
                            :key="product.id"
                        >
                            <ProductCard
                                :product="product.raw"
                                :loading="isLoading"
                            />
                        </v-col>
                    </v-row>
                </template>

                <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
                    <div class="d-flex align-center justify-center pa-4">
                        <v-btn
                            :disabled="page === 1"
                            density="comfortable"
                            icon="mdi-arrow-left"
                            variant="tonal"
                            rounded
                            @click="prevPage"
                        ></v-btn>

                        <div class="mx-2 text-caption">
                            Page {{ page }} of {{ pageCount }}
                        </div>

                        <v-btn
                            :disabled="page >= pageCount"
                            density="comfortable"
                            icon="mdi-arrow-right"
                            variant="tonal"
                            rounded
                            @click="nextPage"
                        ></v-btn>
                    </div>
                </template>
            </v-data-iterator>
        </v-card-text>
    </v-card>
</template>

<script setup lang="ts">
import { useProductStore } from '../config/store'
import { useDisplay } from 'vuetify';
import ProductCard from '@/modules/home/components/ProductCard.vue'

const props = defineProps({
    categoryId: String
})

const productStore = useProductStore()
const { lgAndUp } = useDisplay()

const relatedProducts = ref([])
const isLoading = ref(false)


const itemsPerPage = computed(() => lgAndUp && relatedProducts.value.length > 6 ? 4 : -1)

const initRelatedProducts = async () => {
    isLoading.value = true
    relatedProducts.value = await productStore.filterProducts(props.categoryId!)
    isLoading.value = false
}

onMounted(() => {
    initRelatedProducts()
});

</script>

<style scoped></style>