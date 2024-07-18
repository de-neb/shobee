<template>
    <v-sheet v-if="Object.keys(productStore.viewingProduct).length">
        <v-card class="bg-tertiary" width="1000" min-height="500">
            <v-row>
                <v-col cols="4">
                    <v-img cover height="500" :src="helper.getImageUrl(productStore.viewingProduct.images)"></v-img>
                </v-col>
                <v-col cols="8">
                    <v-card-text class="d-flex flex-column ga-3">
                        <h4 class="text-grey">{{ productStore.viewingProduct.category.name }}</h4>
                        <h1 class="text-h3 font-weight-black">{{ productStore.viewingProduct.title }}</h1>
                        <h2>{{ productStore.viewingProduct.currency }}{{ productStore.viewingProduct.price }}</h2>
                        <p class="text-h6 font-weight-regular">{{ productStore.viewingProduct.description }}</p>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn variant="outlined" size="large" color="">Add to cart</v-btn>
                    </v-card-actions>
                </v-col>
            </v-row>
        </v-card>
    </v-sheet>
</template>

<script setup lang="ts">
import { useProductStore } from '../config/store';
import helper from '@/modules/home/config/helper'
import router from '@/router'

const productStore = useProductStore()


const initProduct = () => {
    const id = router.currentRoute.value.params.id
    productStore.getProductById(id)
}

onMounted(() => {
    initProduct()
    console.log('router', router)
})

</script>

<style scoped></style>