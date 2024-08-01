<template>
    <!-- skeleton loader-->
    <v-container
        v-if="productStore.loading"
        class="pt-15"
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
        class="pt-10 d-flex flex-column"
    >
        <!-- bread crumbs -->
        <v-row justify="center">
            <BreadCrumb />
        </v-row>

        <!-- product preview -->
        <v-row justify="center">

            <v-col
                cols="12"
                sm="auto"
                :class="{ 'd-flex ga-2 justify-space-between': smAndDown }"
            >
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
                cols="12"
                sm="4"
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
                            cover
                            width="100%"
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

            <v-col
                cols="12"
                sm="5"
                lg="4"
            >
                <v-row
                    justify="space-between"
                    class="flex-column h-100"
                >
                    <v-col>
                        <h3 class="text-grey">{{ productStore.viewingProduct.category?.name }}</h3>
                        <h1 class="text-h4 font-weight-black">{{ productStore.viewingProduct.title }}</h1>
                        <h2>{{ productStore.viewingProduct.currency }}{{ productStore.viewingProduct.price }}
                        </h2>
                        <p class="text-body-1 font-weight-regular text-grey">{{
                            productStore.viewingProduct.description }}
                        </p>
                    </v-col>


                    <v-col>
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
                                            size="small"
                                            variant="flat"
                                            @click="onPrependClick"
                                        />
                                    </template>

                                    <template #append-inner>
                                        <v-btn
                                            icon="mdi-plus"
                                            size="small"
                                            variant="flat"
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

                            <v-col>
                                <v-btn
                                    block
                                    variant="flat"
                                    color="primary"
                                    size="x-large"
                                    class="font-weight-bold"
                                >Buy
                                    Now</v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>

        </v-row>


        <!-- related products -->
        <v-row
            justify="center"
            class="mt-15"
        >
            <v-col
                cols="12"
                sm="9"
            >
                <ProductRelated :category-id="categoryId" />
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useProductStore } from '../config/store';
import router from '@/router'
import ProductRelated from '../components/ProductRelated.vue'

const productStore = useProductStore()
const { smAndDown } = useDisplay()

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