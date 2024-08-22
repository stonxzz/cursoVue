<script setup>
import { RouterLink } from "vue-router";

defineProps({
  name: {
    type: String,
    default: "sin nombre",
  },
});
</script>

<template>
  <div class="card mt-4">
      <ul class="list-group">
        <li class="list-group-item">
            <router-link :to="`/pokemons/${name}`">{{ name }}</router-link>
        </li>
      </ul>
  </div>
</template>

<style></style>
