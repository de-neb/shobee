<template>
    <v-text-field
        hide-details
        hide-spin-buttons
        readonly
        type="number"
        min="1"
        max="99"
        variant="outlined"
        v-model="quantity"
        class="quantity-field"
        :width="width"
        :density="density"
    >
        <template #prepend-inner>
            <v-btn
                icon="mdi-minus"
                variant="text"
                :size="iconSize"
                @click.stop="onPrependClick"
            />
        </template>

        <template #append-inner>
            <v-btn
                icon="mdi-plus"
                variant="text"
                :size="iconSize"
                @click.stop="onAppendClick"
            />
        </template>
    </v-text-field>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
    modelValue: Number,
    iconSize: {
        type: String,
        default: 'x-small'
    },
    width: {
        type: String,
        default: 'auto'
    },
    density: {
        type: String,
        default: 'comfortable'
    }
})

const quantity = ref(1)

const onAppendClick = () => {
    if (quantity.value >= 99) {
        return
    }
    quantity.value++
}

const onPrependClick = () => {
    if (quantity.value <= 1) {
        return
    }
    quantity.value--
}

watch(quantity, (value: number) => {
    emit('update:modelValue', value)
})

watch(() => props.modelValue, (value: number) => {
    quantity.value = value
})

onMounted(() => {
    quantity.value = props.modelValue!
})
</script>

<style>
.v-field__prepend-inner,
.v-field__append-inner {
    align-items: center !important;
    padding-top: 0 !important;
}
</style>