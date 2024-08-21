<script setup>
defineProps({
  name: {
    type: String,
    default: "sin nombre",
  },
});
</script>

<template>
  <div class="card mt-4">
    <div class="card-body mt-2">
      <h1 >Nombre del pokemon: {{ name }}</h1>
    </div>
  </div>
</template>

<style></style>
