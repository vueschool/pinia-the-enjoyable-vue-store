<script setup>
defineProps({
  product: { type: Object, required: true },
  count: { type: Number, required: true },
});

defineEmits(["updateCount", "clear"]);
</script>
<template>
  <li>
    <span>{{ product.name }}</span>
    <span class="whitespace-nowrap">
      <AppCountInput
        :model-value="count"
        @update:modelValue="$emit('updateCount', $event)"
      />
      <span class="inline-block w-12 text-right"
        >${{ count * product.price }}</span
      >
      <span class="ml-4" @click="$emit('clear')">
        <fa icon="trash-alt" />
      </span>
    </span>
  </li>
</template>
