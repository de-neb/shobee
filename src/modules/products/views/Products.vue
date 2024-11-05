<template>
    <!-- skeleton loader-->
    <v-container
        v-if="productStore.loading"
        fluid
    >
        <v-sheet height="auto">
            <v-row justify="center">
                <v-skeleton-loader
                    type="heading"
                    width="500"
                ></v-skeleton-loader>
            </v-row>

            <v-row justify="center">
                <v-col
                    cols="3"
                    md="1"
                >
                    <v-skeleton-loader
                        type="image"
                        width="100%"
                        v-for="(item, i) in 3"
                        :key="i"
                    ></v-skeleton-loader>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
                    <v-skeleton-loader type="image@4"></v-skeleton-loader>
                </v-col>
                <v-col
                    cols="12"
                    md="4"
                >
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
                        width="500"
                    ></v-skeleton-loader>
                </v-col>
            </v-row>
        </v-sheet>
    </v-container>

    <v-container
        v-else
        class="d-flex flex-column"
        fluid
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
                md="4"
                lg="5"
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
                md="5"
                lg="4"
                class="flex-grow-1"
            >
                <h3 class="text-grey">{{ productStore.viewingProduct.category?.name }}</h3>
                <h1 class="text-h4 font-weight-black">{{ productStore.viewingProduct.title }}</h1>
                <h2>{{ productStore.viewingProduct.currency }}{{ productStore.viewingProduct.price }}
                </h2>
                <p class="text-body-1 font-weight-regular text-grey">{{
                    productStore.viewingProduct.description }}
                </p>

                <v-row
                    no-gutters
                    justify="space-between"
                    class="my-4"
                >

                    <v-col cols="auto">
                        <QuantityInput v-model="productStore.viewingProduct.quantity" />
                    </v-col>

                    <v-col cols="8">
                        <v-btn
                            block
                            variant="outlined"
                            color="secondary"
                            height="48"
                            @click="addToCart"
                        > Add to Cart</v-btn>
                    </v-col>
                </v-row>


                <v-btn
                    block
                    variant="flat"
                    color="primary"
                    size="x-large"
                    class="font-weight-bold"
                    @click="buyNow"
                >Buy
                    Now</v-btn>
            </v-col>

        </v-row>


        <!-- related products -->
        <v-row
            justify="center"
            class="mt-15"
        >
            <v-col
                cols="12"
                sm="10"
            >
                <ProductRelated :category-id="categoryId" />
            </v-col>
        </v-row>
    </v-container>

</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';
import { useProductStore } from '../config/store';
import { useCartStore } from '@/modules/cart/config/store';
import router from '@/router'
import ProductRelated from '../components/ProductRelated.vue'

const productStore = useProductStore()
const cartStore = useCartStore()
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

const addToCart = () => {
    cartStore.updateProductQuantityInCart({ ...productStore.viewingProduct })
    productStore.viewingProduct.quantity = 1
}

const buyNow = () => {
    addToCart()
    router.push({ name: 'Checkout' })
}

router.beforeEach(async (to, from) => {
    if (to.name === 'Product') {
        const id = to.params.id
        await productStore.getProductById(id)
        to.meta.productName = productStore.viewingProduct.title
    }
})

onMounted(async () => {
    await initProduct()
    previewImage.value = productStore.viewingProduct.images[0]
})

</script>

<style scoped></style>