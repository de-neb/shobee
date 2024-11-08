<template>
  <CartSidePanel ref="cartSidePanel" />
  <MenuSidePanel />
  <v-app>
    <AppBar background="bg-primary" />
    <v-sheet
      width="100%"
      class="mx-auto"
    >
      <v-carousel
        cycle
        hide-delimiter-background
        show-arrows="hover"
        :height="xs ? '' : 500"
      >
        <v-carousel-item
          position="relative"
          v-for="category in homeStore.categories"
          :key="category.id"
        >
          <v-card
            width="100%"
            height="100%"
          >
            <v-img
              cover
              class="border-5"
              :src="miscHelper.getImageSrc(`${category.name}.jpeg`, 'banner')"
            >
              <v-card-title class="d-flex flex-column ga-3 h-100 px-10">
                <v-spacer></v-spacer>

                <h1
                  class="text-white text-h1 text-shadow font-weight-black"
                  :class="{ 'text-h3': xs }"
                > {{ category.name }}</h1>
                <v-btn
                  variant="flat"
                  color="primary"
                  class="  font-weight-black p-10"
                  :size="xs ? 'default' : 'x-large'"
                  :width="xs ? 100 : 250"
                  :to="`/category/${category.id}`"
                >Shop
                  Now</v-btn>
                <v-spacer></v-spacer>
              </v-card-title>

              <template #error>
                <v-img
                  cover
                  class="blur"
                  aspect-ration="1"
                  src="@/assets/banner/placeholder-banner.jpg"
                >
                </v-img>
              </template>
            </v-img>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
    <v-main class="d-flex w-100">
      <router-view></router-view>
    </v-main>
    <AppFooter />
  </v-app>
  <Snackbar />
</template>

<script lang="ts" setup>
import { useHomeStore } from '@/modules/home/config/store';
import { useDisplay } from 'vuetify';
import miscHelper from '@/helpers/miscHelper'
import navigationHelper from '@/helpers/navigationHelper';

const homeStore = useHomeStore()

const { xs } = useDisplay()
</script>

<style>
.bg-shopping {
  background: url('../assets/shopping-cart-bg.jpg');
  background-size: cover;
  height: 100vh;
}

.bg-transparent {
  background-color: transparent !important;
}

.text-outline {
  -webkit-text-fill-color: #eeee;
  -webkit-text-stroke: 2px;
}

.text-shadow {
  text-shadow: 4px 4px #192039;
}

.blur {
  filter: blur(5px)
}
</style>
