<template>
    <!-- skeleton loader-->
    <v-container
        v-if="productStore.loading"
        class="h-100 pt-15"
    >
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

    <v-container
        v-else
        class="h-100 pt-10 d-flex flex-column"
    >
        <!-- bread crumbs -->
        <v-row justify="center">
            <BreadCrumb />
        </v-row>

        <!-- product preview -->
        <v-row justify="center">
            <v-sheet
                width="100%"
                min-height="500"
                v-if="Object.keys(productStore.viewingProduct).length"
            >
                <v-card variant="flat">
                    <v-row justify="center">
                        <v-col cols="auto">
                            <v-card
                                hover
                                height="100"
                                width="100"
                                class="mb-3"
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

                        <v-col
                            cols="5"
                            lg="4"
                        >
                            <v-carousel
                                continuous
                                cycle
                                hide-delimiters
                                direction="vertical"
                                height="auto"
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
                                        contain
                                        height="500"
                                        width="100%"
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

                        <v-col
                            cols="5"
                            lg="4"
                            class="d-flex flex-column justify-space-between"
                        >
                            <v-card-text class="d-flex flex-column ga-2">
                                <h3 class="text-grey">{{ productStore.viewingProduct.category?.name }}</h3>
                                <h1 class="text-h4 font-weight-black">{{ productStore.viewingProduct.title }}</h1>
                                <h2>{{ productStore.viewingProduct.currency }}{{ productStore.viewingProduct.price }}
                                </h2>
                                <p class="text-body-1 font-weight-regular text-grey">{{
                                    productStore.viewingProduct.description }}
                                </p>
                            </v-card-text>

                            <v-card-actions>
                                <v-container>
                                    <v-row>
                                        <v-col cols="4">
                                            <v-text-field
                                                v-model="productStore.viewingProduct.order"
                                                hide-details
                                                hide-spin-buttons
                                                type="number"
                                                min="0"
                                                variant="outlined"
                                                density="comfortable"
                                            >
                                                <template #prepend-inner>
                                                    <v-btn
                                                        icon="mdi-minus"
                                                        size="x-small"
                                                        @click="onPrependClick"
                                                    />
                                                </template>

                                                <template #append-inner>
                                                    <v-btn
                                                        icon="mdi-plus"
                                                        size="x-small"
                                                        @click="onAppendClick"
                                                    />
                                                </template>
                                            </v-text-field>
                                        </v-col>
                                        <v-col cols="8">
                                            <v-btn
                                                block
                                                variant="outlined"
                                                color="success"
                                                height="48"
                                            > Add to Cart</v-btn>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-btn
                                            block
                                            variant="flat"
                                            color="primary"
                                            size="x-large"
                                            class="font-weight-bold"
                                        >Buy
                                            Now</v-btn>
                                    </v-row>
                                </v-container>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-sheet>
        </v-row>

        <!-- related products -->
        <v-row justify="center">
            <v-col cols="10">
                <ProductRelated :category-id="categoryId" />
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { useProductStore } from '../config/store';
import router from '@/router'
import ProductRelated from '../components/ProductRelated.vue'

const productStore = useProductStore()

const previewImage = ref('')
const activePreviewImageIndex = ref(0)

const categoryId = computed(() => productStore.viewingProduct?.category?.id)


const initProduct = async () => {
    const id = router.currentRoute.value.params.id
    await productStore.getProductById(id)
}

const onCarouselSlide = (index: number) => {
    activePreviewImageIndex.value = index
}

router.beforeEach(async (to, from) => {
    if (to.name === 'Product') {
        const id = to.params.id
        await productStore.getProductById(id)
        to.meta.productName = productStore.viewingProduct.title
    }
})

const onAppendClick = () => {
    productStore.viewingProduct.order++
}

const onPrependClick = (e) => {
    if (productStore.viewingProduct.order > 1) {
        productStore.viewingProduct.order--
    }
}

onMounted(async () => {
    await initProduct()
    previewImage.value = productStore.viewingProduct.images[0]
})

</script>

<style scoped></style>