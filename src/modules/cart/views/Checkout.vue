<template>
    <v-container class="h-100">

        <v-row>
            <BreadCrumb />
        </v-row>

        <v-row justify="space-between">
            <v-col
                cols="12"
                md="7"
            >
                <v-expansion-panels
                    multiple
                    elevation="0"
                    v-model="expanded"
                >
                    <v-expansion-panel
                        title="Address"
                        value="address"
                    >
                        <v-expansion-panel-text>
                            <v-form ref="addressForm">
                                <v-row>
                                    <v-col
                                        v-for="field in ADDRESS_FIELDS"
                                        :key="field.key"
                                        :cols="field.colWidth"
                                    >
                                        <v-autocomplete
                                            variant="outlined"
                                            v-if="field.type === 'dropdown'"
                                            v-model="cartStore.shippingInformation[field.key]"
                                            :items="countries"
                                            :label="field.label"
                                            :rules="field.rules"
                                        ></v-autocomplete>

                                        <v-text-field
                                            variant="outlined"
                                            v-else
                                            v-model="cartStore.shippingInformation[field.key]"
                                            :label="field.label"
                                            :rules="field.rules"
                                            @keypress="field.type === 'number' ? rules.isNumber($event) : null"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-col cols="auto">
                                        <v-btn
                                            variant="flat"
                                            color="primary"
                                            size="large"
                                            @click="onProceed"
                                        >Proceed</v-btn>
                                    </v-col>
                                </v-row>
                            </v-form>
                        </v-expansion-panel-text>
                    </v-expansion-panel>

                    <v-expand-transition>
                        <v-expansion-panel
                            title="Shipping Method"
                            value="shipping"
                            v-show="showShipping"
                        >
                            <v-expansion-panel-text>
                                <v-radio-group
                                    inline
                                    v-model="cartStore.shippingInformation.shippingMethod"
                                >
                                    <v-card
                                        class="ma-2"
                                        width="200"
                                        variant="outlined"
                                        v-for="shipping in SHIPPING_OPTIONS"
                                        :key="shipping.type"
                                    >
                                        <v-card-title class="d-flex flex-nowrap justify-space-between">
                                            <v-icon
                                                icon="mdi-truck-delivery"
                                                size="80"
                                            ></v-icon>
                                            <v-spacer></v-spacer>
                                            <v-radio
                                                :value="shipping.value"
                                                class="align-self-start"
                                            ></v-radio>
                                        </v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-card-text class="font-weight-bold">
                                            <h2>{{ miscHelper.formatPrice(shipping.value) }}</h2>
                                            <p> {{ shipping.type }}</p>
                                        </v-card-text>
                                    </v-card>
                                </v-radio-group>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expand-transition>

                    <v-expand-transition>
                        <v-expansion-panel
                            title="Payment Method"
                            value="payment"
                            v-show="showShipping && cartStore.shippingInformation.shippingMethod > -1"
                        >
                            <v-expansion-panel-text>
                                <v-radio-group
                                    inline
                                    v-model="cartStore.shippingInformation.paymentMethod"
                                >
                                    <v-card
                                        v-for="payment in PAYMENT_OPTIONS"
                                        :key="payment"
                                        class="ma-2"
                                        width="200"
                                        variant="outlined"
                                    >
                                        <v-card-title class="d-flex flex-nowrap justify-space-between">
                                            <v-img
                                                width="40"
                                                aspect-ratio="1/1"
                                                :src="miscHelper.getImageSrc(filter.toSnakeCase(payment) + '.png')"
                                            />
                                            <v-spacer></v-spacer>
                                            <v-radio
                                                :value="payment"
                                                class="align-self-start"
                                            ></v-radio>
                                        </v-card-title>
                                        <v-spacer></v-spacer>
                                        <v-card-text class="font-weight-bold">
                                            {{ payment }}
                                        </v-card-text>
                                    </v-card>

                                </v-radio-group>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expand-transition>
                </v-expansion-panels>
            </v-col>

            <v-col
                cols="12"
                md="4"
            >
                <v-card
                    variant="flat"
                    class="h-100 position-sticky"
                >
                    <v-card-title class="text-h5">Cart Summary</v-card-title>

                    <v-card-text class="cart-summary-items">
                        <v-list>
                            <v-list-item
                                v-for="product in cartStore.cart"
                                :key="product.id"
                                class="pa-0 pb-4"
                            >
                                <v-row
                                    no-gutters
                                    class="ga-2"
                                >
                                    <v-col cols="3">
                                        <v-img
                                            class="rounded"
                                            :src="product.images[0]"
                                        ></v-img>
                                    </v-col>

                                    <v-col cols="8">
                                        <p class="text-break">{{ product.title }}</p>
                                        <h3>{{ miscHelper.formatPrice(product.price) }} x {{ product.quantity }}</h3>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-text class="d-flex flex-column justify-space-between">
                        <div
                            class="d-flex justify-space-between align-center my-3"
                            v-for="[charge, chargeAmount] in Object.entries(cartStore.cartCharges)"
                        >
                            <p
                                class="font-weight-medium"
                                :class="{ 'font-weight-bold text-h5': charge === 'Grand Total' }"
                            >{{
                                charge }}</p>
                            <p :class="{ 'font-weight-bold text-h6': charge === 'Grand Total' }">{{ chargeAmount }}</p>
                        </div>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            block
                            color="primary"
                            variant="flat"
                            height="50"
                            v-if="cartStore.shippingInformation.paymentMethod"
                            :to="{ name: 'Success' }"
                            @click="cartStore.clearCart"
                        >Place Order</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ADDRESS_FIELDS, PAYMENT_OPTIONS, SHIPPING_OPTIONS } from '../config/constants'
import rules from '@/shared/rules'
import miscHelper from '@/helpers/miscHelper'
import filter from '@/shared/filter'
import { useCartStore } from '../config/store'
import { useAppStore } from '@/stores/app.js'

const cartStore = useCartStore()
const appStore = useAppStore()

const expanded = ref(['address'])
const countries = ref<string[]>([])
const showShipping = ref(false)

const addressForm = ref()
const onProceed = async () => {
    const { valid } = await addressForm.value.validate()

    if (!valid) {
        return
    }

    showShipping.value = true
}

onMounted(async () => {
    countries.value = await cartStore.getCountries()
    appStore.isCartSidePanelOpen = false
})

onUnmounted(() => {
    showShipping.value = false
    cartStore.shippingInformation.shippingMethod = null
})
</script>

<style scoped>
.cart-summary-items {
    max-height: 400px;
    overflow-y: auto;
}
</style>