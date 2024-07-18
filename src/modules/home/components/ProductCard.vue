<template>
    <v-skeleton-loader v-if="loading" :elevation="2" type="card, text@3"></v-skeleton-loader>
    <v-hover v-else v-slot="{ isHovering, props }">
        <v-card hover width="250" min-height="350" elevation="2" class="mx-auto" v-bind="props">
            <v-img contain :src="helper.getImageUrl(product.images)">
                <v-card-title class="text-right px-2">
                    <v-btn v-if="isHovering" v-tooltip:start="'Add to cart'" icon="mdi-cart-plus" color="primary"
                        size="small" :class="{ 'on-hover': isHovering }"></v-btn>
                </v-card-title>
            </v-img>

            <v-card-text>
                <h4 class="text-truncate">{{ product.title }}</h4>
                <h6 class="text-subtitle text-grey">{{ product.category.name }}</h6>
                <p class="font-weight-bold">{{ product.currency }} {{ product.price }}</p>
            </v-card-text>
        </v-card>
    </v-hover>
</template>

<script setup lang="ts">
import helper from '../config/helper';

defineProps({
    product: Object,
    loading: Boolean
})

</script>

<style scoped></style>