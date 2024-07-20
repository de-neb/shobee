<template>
  <v-layout>
    <AppBar background="bg-primary" />
    <v-sheet width="95%" class="mx-auto pt-15">
      <div class="pt-15 mt-5">
      </div>
      <v-carousel height="500" class="rounded-xl" show-arrows="hover" cycle hide-delimiter-background>
        <v-carousel-item position="relative" v-for="category in categories" :key="category.id">
          <v-card width="100%">
            <v-img cover class="border-5" :src="miscHelper.getImageSrc(`${category.title}.jpeg`, 'banner')">
              <v-card-title class="mt-15 pt-15 ml-15">
                <h1 class="text-white text-shadow text-h1 font-weight-black"> {{ category.title }}</h1>
                <v-btn size="x-large" width="250" variant="flat" color="primary"
                  class="mt-10 text-h4 font-weight-black p-10">Shop
                  Now</v-btn>
              </v-card-title>
            </v-img>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
  </v-layout>
  <v-main class="d-flex h-100 w-100" v-scroll="app.onScroll">
    <router-view></router-view>
  </v-main>
  <Snackbar />
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/app';
import miscHelper from '@/helpers/miscHelper'
import { categories } from '@/categories';

const app = useAppStore()
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
</style>
