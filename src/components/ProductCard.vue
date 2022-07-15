<script setup>
// imports
import { ref } from "vue";
import AppCountInput from "./AppCountInput.vue";

// props
const props = defineProps({
  product: Object,
});

// emits
defineEmits(["addToCart"])

// data
const count = ref(0);
const imgRoot =
  'https://raw.githubusercontent.com/vueschool/pinia-the-enjoyable-vue-store/main/public/images/';
</script>
<template>
  <li class="card">
    <img :src="`${imgRoot}/${product.image}`" class="mb-3" width="300" />
    <div>
      {{ product.name }} - <span class="text-green-500">${{product.price}}</span>
      <div class="text-center m-4">
        <AppCountInput v-model="count" />
      </div>
      <AppButton
        class="primary" @click="$emit('addToCart', count), (count = 0)">Add to Cart</AppButton>
    </div>
  </li>
</template>
