<template>
    <v-breadcrumbs
        active-color="primary"
        :items="breadCrumbs"
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
import router from '@/router'

const breadCrumbs = computed(() => {
    const currentRoute = router.currentRoute.value
    console.log('current', currentRoute)

    if (typeof currentRoute.meta.breadCrumb === 'function') {
        return currentRoute.meta.breadCrumb(currentRoute.meta.productName)
    }
    return currentRoute.meta.breadCrumb
})

</script>
