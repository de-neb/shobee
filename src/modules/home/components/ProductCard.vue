<template>
    <template v-if="loading">
        <v-skeleton-loader
            v-if="!horizontal"
            type="card, text@3"
            :elevation="2"
        ></v-skeleton-loader>

        <v-row v-else>
            <v-col cosl="3">
                <v-skeleton-loader type="image"></v-skeleton-loader>
            </v-col>
            <v-col cols="9">
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
            min-height="350"
            elevation="2"
            class="mx-auto"
            v-bind="props"
            @click="navigateToProduct(product.id)"
        >
            <v-img
                contain
                aspect-ratio="1/1"
                width="100%"
                height="auto"
                min-height="200"
                :src="miscHelper.parsePossibleJSON(product.images[0])"
            >
                <v-card-title class="text-right px-2">
                    <v-btn
                        v-if="isHovering"
                        v-tooltip:start="'Add to cart'"
                        icon="mdi-cart-plus"
                        color="primary"
                        size="small"
                        :class="{ 'on-hover': isHovering }"
                    ></v-btn>
                </v-card-title>
            </v-img>

            <v-card-text>
                <h4 class="text-truncate">{{ product.title }}</h4>
                <h6 class="text-subtitle text-grey">{{ product.category.name }}</h6>
                <p class="font-weight-bold">{{ product.currency }} {{ product.price }}</p>
            </v-card-text>
        </v-card>

        <!-- horizontal -->
        <v-card
            v-else
            hover
            height="250"
            elevation="2"
            class="mx-auto d-flex"
            v-bind="props"
            @click="navigateToProduct(product.id)"
        >

            <v-col
                cols="3"
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
                cols="9"
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
                        class="bg-primary px-5"
                        variant="tonal"
                    >Add to Cart</v-btn>
                </v-card-actions>
            </v-col>

        </v-card>
    </v-hover>
</template>

<script setup lang="ts">
import router from '@/router'
import miscHelper from '@/helpers/miscHelper';

defineProps({
    product: Object,
    loading: Boolean,
    horizontal: {
        type: Boolean,
        default: false
    }
})

const navigateToProduct = (id: number) => {
    router.push({ path: `/products/${id}` })
}

</script>

<style scoped></style>