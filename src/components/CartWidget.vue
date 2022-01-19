<script setup>
// imports
import { ref } from "vue";
import CartItem from "./CartItem.vue";

// data
const active = ref(false);
</script>
<template>
  <div class="relative">
    <!-- Icon that always shows -->
    <span class="cursor-pointer" @click="active = true">
      <fa icon="shopping-cart" size="lg" class="text-gray-700" />
      <div class="cart-count absolute">10</div>
    </span>
    <!-- Modal Overlay only shows when cart is clicked on -->
    <AppModalOverlay :active="active" @close="active = false">
      <div>
        <ul class="items-in-cart">
          <CartItem
            :product="{ name: 'Dried Pineapple', price: 5 }"
            :count="5"
            @updateCount=""
            @clear=""
          />
          <CartItem
            :product="{ name: 'Pineapple Gum', price: 3 }"
            :count="5"
            @updateCount=""
            @clear=""
          />
        </ul>
        <div class="flex justify-end text-2xl mb-5">
          Total: <strong>$40</strong>
        </div>
        <div class="flex justify-end">
          <AppButton class="secondary mr-2">Clear Cart</AppButton>
          <AppButton class="primary">Checkout</AppButton>
        </div>
      </div>
      <!-- Uncomment and use condition to show when cart is empty -->
      <!-- <div><em>Cart is Empty</em></div> -->
    </AppModalOverlay>
  </div>
</template>
<style lang="pcss" scoped>
.items-in-cart{
  @apply mb-5;
}
.items-in-cart li{
  @apply flex justify-between p-2;
}
.items-in-cart li:nth-of-type(even){
  @apply bg-gray-300;
}
</style>
