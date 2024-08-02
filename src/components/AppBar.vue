<template>
    <v-app-bar
        border
        extended
        extension-height="50"
        scroll-threshold="50"
        class="bg-secondary border-white"
    >

        <v-img
            max-width="180"
            class="mx-10 cursor-pointer"
            contain
            src="../assets/logo.png"
            @click="navigationHelper.to('home')"
        >
        </v-img>

        <v-text-field
            class="bg-white rounded-lg ml-5"
            density="comfortable"
            variant="flat"
            hide-details
            prepend-inner-icon="mdi-magnify"
            placeholder="Search a product"
            max-width="350"
        ></v-text-field>

        <v-spacer></v-spacer>

        <div class="mx-10 d-flex align-center">

            <p>{{ cartStore.subTotal }}</p>

            <v-btn
                class="text-none"
                stacked
                @click="appStore.toggleCartSidePanel"
            >
                <v-badge
                    color="info"
                    :content="cartStore.cartItemsTotal"
                >
                    <v-icon>mdi-cart</v-icon>
                </v-badge>
            </v-btn>
        </div>

        <template #extension>
            <v-sheet
                border="primary md"
                width="100%"
                height="100%"
                class="px-10"
            >
                <v-menu open-on-hover>
                    <template #activator="{ props }">
                        <v-btn
                            height="100%"
                            value="one"
                            v-bind="props"
                        >Categories <v-icon icon="mdi-chevron-down"></v-icon></v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                            class="px-3"
                            v-for="category in homeStore.categories"
                            :key="category.id"
                            :value="category.id"
                            :to="`/category/${category.id}`"
                        >
                            <v-list-item-title class="text-capitalize">
                                {{ category.name }}
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-btn
                    height="100%"
                    value="two"
                    tag="a"
                    href="#topProducts"
                >
                    Top Products </v-btn>

                <v-btn
                    height="100%"
                    value="two"
                    tag="a"
                    href="#dailyDiscover"
                >
                    Daily Discover
                </v-btn>
            </v-sheet>
        </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'
import { useHomeStore } from '@/modules/home/config/store';
import { useCartStore } from '@/modules/cart/config/store';
import { useAppStore } from '@/stores/app';
import navigationHelper from '@/helpers/navigationHelper';

defineProps({
    background: {
        type: String,
        default: 'bg-transparent'
    }
})

const homeStore = useHomeStore()
const cartStore = useCartStore()
const appStore = useAppStore()

onMounted(() => {
    homeStore.loadAllCategories()
})

</script>

<style scoped>
.bg-transparent {
    background-color: rgba(184, 229, 250, 0.0) !important;
}
</style>