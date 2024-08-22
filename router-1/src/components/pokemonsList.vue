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
    <div class="card-body mt-2">
      <ul>
        <li>
            <router-link :to="`/pokemons/${name}`">{{ name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style></style>
