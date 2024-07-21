<template>
    <!-- skeleton loader-->
    <v-container v-if="productStore.loading">
        <v-sheet height="700">
            <v-row justify="center">
                <v-skeleton-loader
                    type="heading"
                    width="500"
                ></v-skeleton-loader>
            </v-row>

            <v-row justify="center">
                <v-col
                    cols="1"
                    class="d-flex flex-column ga-3"
                >
                    <v-skeleton-loader
                        type="image"
                        width="100%"
                        v-for="(item, i) in 3"
                        :key="i"
                    ></v-skeleton-loader>
                </v-col>
                <v-col cols="4">
                    <v-skeleton-loader
                        type="image"
                        height="100%"
                    ></v-skeleton-loader>
                </v-col>
                <v-col cols="4">
                    <v-skeleton-loader
                        type="heading"
                        width="100"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="heading"
                        width="500"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="subtitle"
                        width="100"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="text@10"
                        width="500"
                    ></v-skeleton-loader>
                    <v-skeleton-loader
                        type="button"
                        width="100%"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>

    <v-container v-else>
        <!-- bread crumbs -->
        <v-row justify="center">
            <v-breadcrumbs :items="breadCrumbItems">
                <template v-slot:divider>
                    <v-icon icon="mdi-chevron-right"></v-icon>
                </template>
            </v-breadcrumbs>
        </v-row>

        <!-- product preview -->
        <v-row justify="center">
            <v-sheet
                class="pa-10"
                width="100%"
                min-height="700"
                v-if="Object.keys(productStore.viewingProduct).length"
            >
                <v-card variant="flat">
                    <v-row justify="center">
                        <v-col cols="auto d-flex ga-2 flex-column">
                            <v-card
                                hover
                                height="100"
                                width="100"
                                v-for="(image, i) in productStore.viewingProduct.images"
                                :key="i"
                                :class="{ 'border-lg border-secondary border-opacity-100': activePreviewImageIndex === i }"
                            >
                                <v-img
                                    v-if="image"
                                    cover
                                    aspect-ratio="1/1"
                                    height="500"
                                    :src="image"
                                    @click="activePreviewImageIndex = i"
                                ></v-img>
                                <v-img
                                    v-else
                                    contain
                                    height="500"
                                    min-width="500"
                                    src="/src/assets/placeholder.jpeg"
                                ></v-img>
                            </v-card>
                        </v-col>

                        <v-col cols="4">
                            <v-carousel
                                continuous
                                cycle
                                hide-delimiters
                                direction="vertical"
                                height="100%"
                                width="100%"
                                v-model="activePreviewImageIndex"
                                :show-arrows="false"
                                @update:modelValue="onCarouselSlide"
                            >
                                <v-carousel-item
                                    v-for="(image, i) in productStore.viewingProduct.images"
                                    :key="i"
                                >
                                    <v-img
                                        v-if="image"
                                        cover
                                        height="100%"
                                        class="rounded-lg"
                                        :src="image"
                                        @click="previewImage = image"
                                    ></v-img>
                                    <v-img
                                        v-else
                                        contain
                                        min-width="500"
                                        src="/src/assets/placeholder.jpeg"
                                    ></v-img>
                                </v-carousel-item>
                            </v-carousel>
                        </v-col>

                        <v-col cols="4">
                            <v-card-text class="d-flex flex-column ga-3">
                                <h3 class="text-grey">{{ productStore.viewingProduct.category.name }}</h3>
                                <h1 class="text-h3 font-weight-black">{{ productStore.viewingProduct.title }}</h1>
                                <h2>{{ productStore.viewingProduct.currency }}{{ productStore.viewingProduct.price }}
                                </h2>
                                <p class="text-h6 font-weight-regular text-grey">{{
                                    productStore.viewingProduct.description }}
                                </p>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn
                                    block
                                    variant="flat"
                                    color="secondary"
                                    size="x-large"
                                    class="font-weight-bold"
                                >Add to
                                    cart</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-row>

        <!-- related products -->
        <v-row justify="center">
            <ProductRelated :category-id="categoryId" />
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { useProductStore } from '../config/store';
import { BREADCRUMB_ITEMS } from '../config/contants';
import helper from '@/modules/home/config/helper'
import router from '@/router'
import ProductRelated from '../components/ProductRelated.vue'

const productStore = useProductStore()

const previewImage = ref('')
const activePreviewImageIndex = ref(0)

const categoryId = computed(() => productStore.viewingProduct?.category?.id)

const breadCrumbItems = computed(() => [...BREADCRUMB_ITEMS, {
    title: productStore.viewingProduct.title,
    disabled: false,
    href: `/products/${productStore.viewingProduct.id}`
}])

const initProduct = async () => {
    const id = router.currentRoute.value.params.id
    await productStore.getProductById(id)
}

const onCarouselSlide = (index: number) => {
    activePreviewImageIndex.value = index
}

onMounted(async () => {
    await initProduct()
    previewImage.value = productStore.viewingProduct.images[0]
})

</script>

<style scoped></style>