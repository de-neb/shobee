<template>
    <v-app-bar
        border
        scroll-threshold="50"
        class="border-md border-primary position-sticky"
        :extended="!isCategoryPage && !xs"
        :extension-height="50"
    >
        <v-btn
            v-if="xs"
            icon="mdi-menu"
            variant="text"
            color="primary"
            @click="appStore.isMenuSidePanelOpen = !appStore.isMenuSidePanelOpen"
        ></v-btn>

        <v-img
            contain
            max-width="180"
            class="cursor-pointer"
            src="../assets/logo.png"
            @click="navigationHelper.to('home')"
        >
        </v-img>

        <v-form
            v-if="!xs"
            @submit.prevent="onSearch"
            class="w-auto"
        >
            <v-text-field
                hide-details
                class="rounded-lg ml-5 border border-primary"
                density="compact"
                variant="outlined"
                prepend-inner-icon="mdi-magnify"
                placeholder="Search a product"
                width="300"
                v-model="searchItem"
                @click:prependInner="onSearch"
            ></v-text-field>
        </v-form>

        <v-spacer></v-spacer>

        <div class=" d-flex align-center">

            <p class="font-weight-bold mx-2">${{ cartStore.subTotal }}</p>

            <v-btn
                class="text-none"
                stacked
                @click="appStore.toggleCartSidePanel"
            >
                <v-badge
                    color="primary"
                    :content="cartStore.cartItemsTotal"
                >
                    <v-icon>mdi-cart-outline</v-icon>
                </v-badge>
            </v-btn>
        </div>


        <template
            v-if="!isCategoryPage && !xs"
            #extension
        >
            <div class="d-flex align-start justify-start flex-column ga-3 w-100">
                <v-form
                    @submit.prevent="onSearch"
                    class="w-100 ga-2 d-flex justify-space-between"
                    v-if="xs"
                >
                    <v-text-field
                        hide-details
                        class="rounded-lg  border border-primary"
                        density="compact"
                        variant="outlined"
                        prepend-inner-icon="mdi-magnify"
                        placeholder="Search a product"
                        v-model="searchItem"
                        @click:prependInner="onSearch"
                    >
                    </v-text-field>
                </v-form>

                <v-sheet
                    width="100%"
                    class="d-flex flex-wrap flex-row justify-space-around justify-sm-center align-stretch"
                >

                    <v-menu open-on-hover>
                        <template #activator="{ props }">
                            <v-btn
                                height="100%"
                                value="one"
                                class="pa-3"
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
                        class="pa-3"
                        @click="navigationHelper.to('Home', { hash: '#topProducts' })"
                    >
                        Top Products </v-btn>

                    <v-btn
                        height="100%"
                        value="two"
                        tag="a"
                        class="pa-3"
                        @click="navigationHelper.to('Home', { hash: '#dailyDiscover' })"
                    >
                        Daily Discover
                    </v-btn>
                </v-sheet>
            </div>
        </template>
    </v-app-bar>
</template>

<script lang="ts" setup>
import { watch, onMounted } from 'vue'
import { useHomeStore } from '@/modules/home/config/store';
import { useCartStore } from '@/modules/cart/config/store';
import { useAppStore } from '@/stores/app';
import { useDisplay } from 'vuetify';
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
const displayStore = useDisplay()

const { xs } = displayStore

const isCategoryPage = computed(() => navigationHelper.getCurrentRouteName() === 'Category')

const showExtensionMenu = ref(true)

const searchItem = ref("")
const onSearch = async () => {
    if (searchItem.value && searchItem.value.length < 4) {
        return
    }

    navigationHelper.to('search', { query: { title: searchItem.value } })
}

watch(xs, () => {
    showExtensionMenu.value = !xs.value
})

onMounted(() => {
    homeStore.loadAllCategories()
})

</script>

<style scoped>
.bg-transparent {
    background-color: rgba(184, 229, 250, 0.0) !important;
}
</style>