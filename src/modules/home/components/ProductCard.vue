<template>
    <template v-if="loading">
        <v-row v-if="!horizontal">
            <v-skeleton-loader
                class="mb-3 mx-2 rounded"
                type="image@2, text@3"
                width="400"
            ></v-skeleton-loader>
        </v-row>

        <v-row v-else>
            <v-col
                cosl="6"
                md="3"
            >
                <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>
            <v-col
                cols="6"
                md="9"
            >
                <v-skeleton-loader
                    type="heading"
                    width="400"
                ></v-skeleton-loader>
                <v-skeleton-loader
                    type="text@3"
                    width="400"
                ></v-skeleton-loader>
            </v-col>
        </v-row>
    </template>


    <v-hover
        v-else
        v-slot="{ isHovering, props }"
    >
        <!-- vertical -->
        <v-card
            v-if="!horizontal"
            hover
            width="100%"
            height="400"
            class="mx-auto rounded-lg"
            v-bind="props"
            variant="text"
            @click="navigateToProduct(product.id)"
            @mouseover="show = true"
            @mouseleave="show = false"
        >
            <v-img
                cover
                aspect-ratio="1/1"
                width="100%"
                class="transition-image"
                :class="show ? 'rounded-b-0' : 'rounded-lg'"
                :height="show ? '250' : '300'"
                :src="miscHelper.parsePossibleJSON(product.images[0])"
            >

            </v-img>

            <v-card-text class="rounded-lg">
                <h4 class="text-truncate">{{ product.title }}</h4>
                <h6 class="text-subtitle text-grey">{{ product.category.name }}</h6>
                <p class="font-weight-bold">{{ product.currency }} {{ product.price }}</p>
            </v-card-text>


            <v-expand-transition>
                <div v-show="show">
                    <v-card-actions>
                        <v-btn
                            block
                            class="px-5"
                            variant="outlined"
                            color="secondary"
                            @click.stop="addToCart"
                        >Add to
                            Cart</v-btn>
                    </v-card-actions>
                </div>
            </v-expand-transition>
        </v-card>

        <!-- horizontal -->
        <v-card
            v-else
            hover
            height="auto"
            variant="text"
            class="mx-auto d-flex flex-wrap"
            v-bind="props"
            @click="navigateToProduct(product.id)"
        >

            <v-col
                cols="6"
                md="3"
                align-self="center"
                class="pa-0"
            >
                <v-img
                    cover
                    class="rounded"
                    :src="miscHelper.parsePossibleJSON(product.images[0])"
                >
                </v-img>
            </v-col>

            <v-col
                cols="6"
                md="9"
                class="py-0"
            >
                <v-card-text class="d-flex ga-3 flex-column">
                    <h2 class="text-truncate font-weight-regular">{{ product.title }}</h2>
                    <h3 class="text-subtitle text-grey">{{ product.category.name }}</h3>
                    <h3 class="font-weight-bold">{{ product.currency }} {{ product.price }}</h3>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        size="large"
                        class="px-5"
                        variant="outlined"
                        color="secondary"
                        @click.stop="addToCart"
                    >Add to
                        Cart</v-btn>
                </v-card-actions>
            </v-col>

        </v-card>
    </v-hover>
</template>

<script setup lang="ts">
import router from '@/router'
import miscHelper from '@/helpers/miscHelper';
import { useCartStore } from '@/modules/cart/config/store';

const props = defineProps({
    product: Object,
    loading: {
        type: Boolean,
        default: true
    },
    horizontal: {
        type: Boolean,
        default: false
    }
})

const show = ref(false)

const cartStore = useCartStore()

const addToCart = () => {
    cartStore.updateCartInLocalStorage({ ...props.product, quantity: 1 })
}

const navigateToProduct = (id: number) => {
    router.push({ path: `/products/${id}` })
}

</script>

<style scoped>
.transition-image {
    width: 100%;
    transition: height 0.1s ease-in;
}
</style>