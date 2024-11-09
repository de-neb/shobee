<template>
    <v-breadcrumbs
        active-color="primary"
        :items="breadCrumb"
    >
        <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
        </template>
        <template v-slot:item="{ item }">
            <v-breadcrumbs-item
                exact
                class=" font-weight-bold"
                :disabled="item.disabled"
                :to="item.to"
            >
                {{ item.text }}
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</template>

<script setup lang="ts">
import { useProductStore } from '@/modules/products/config/store';
import router from '@/router'

const productStore = useProductStore()

const breadCrumb = computed(() => {
    const metaBreadCrumb: any = router.currentRoute.value.meta.breadCrumb

    if (router.currentRoute.value.name === 'Product') {
        metaBreadCrumb[1].text = productStore.viewingProduct.title
    }

    return metaBreadCrumb
})

</script>
