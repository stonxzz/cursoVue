<script setup>
import pokemonsList from "@/components/pokemonsList.vue";
import { useGetData } from "@/composables/getData";

const { data, getData, loading, error } = useGetData();

getData("https://pokeapi.co/api/v2/pokemon");
</script>

<template>
  <h1>Pokemons</h1>
  <p v-if="loading">Cargando información</p>
  <div class="alert alert-danger mt-3" v-if="error">{{ error }}</div>
  <pokemonsList
    v-if="data"
    v-for="element in data.results"
    :key="element"
    :name="element.name"
  />
</template>
