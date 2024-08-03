<template>
  <v-sheet
    width="100%"
    height="auto"
    class="bg-primary pa-10"
  >
    <v-container>
      <v-row justify="space-between">
        <v-col
          cols="12"
          sm="3"
          align-self="center"
        >
          <div class="text-h6">Stay Connected</div>
          <div>
            <v-icon
              class="mr-3 mt-3"
              v-for="icon in ICONS"
              v-tooltip:top="`I'm not a real link`"
              :key="icon"
              :icon="`mdi-${icon}`"
            ></v-icon>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="auto"
          class="d-flex flex-column ga-1 ml-auto"
        >
          <h5
            v-for="link in links.slice(0, 5)"
            :key="link"
          >{{ link.title }}</h5>

        </v-col>

        <v-col
          cols="12"
          sm="auto"
          class="d-flex flex-column ga-1"
        >
          <h5
            v-for="link in links.slice(5, links.length)"
            :key="link"
          >{{ link.title }}</h5>

        </v-col>
      </v-row>
      <v-divider class="my-4"></v-divider>
      <v-row justify="center">
        <v-col cols="auto"> <span>© Copyright {{ year }}</span></v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<script setup lang="ts">
const LINKS = ['About Us', 'Contact Us', 'Customer Service', 'Terms of Use', 'Terms & Conditions', 'Privacy Policy', 'Payment Policy', 'Shipping Policy', 'Refund Policy', 'Return Policy']
const ICONS = ['facebook', 'twitter', 'instagram', 'youtube']
const links = computed(() => LINKS.map((link: string, i: number) => ({ title: link, value: i })))
const year = (new Date()).getFullYear()
</script>

<style scoped></style>