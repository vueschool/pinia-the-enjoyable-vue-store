<script>
// imports
import { useAuthUserStore } from "@/stores/AuthUserStore";
import { mapState, mapActions } from "pinia";
import CartWidget from "./CartWidget.vue";
export default {
  components: { CartWidget },
  computed: {
    ...mapState(useAuthUserStore, {
      user: "username",
    }),
  },
  methods: {
    ...mapActions(useAuthUserStore, {
      toTwitter: "visitTwitterProfile",
    }),
  },
};
</script>

<template>
  <header
    class="flex justify-between p-6 mb-10 items-center"
    style="background-image: url('/images/double-bubble-outline.png')"
  >
    <h1 class="text-4xl text-gray-700 font-bold">The Pineapple Stand</h1>
    <div>
      <span class="mr-5" @click="toTwitter">{{ user }}</span>
      <CartWidget class="inline-block" />
    </div>
  </header>
</template>
