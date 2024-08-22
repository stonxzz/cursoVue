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
  <div v-if="data">
    <pokemonsList v-for="element in data.results" :key="element" :name="element.name" />
    <button :disabled="!data.previous" class="btn btn-success mt-2 me-2" @click="getData(data.previous)">
      Previous
    </button>
    <button :disabled="!data.next" class="btn btn-primary mt-2" @click="getData(data.next)">Next</button>
  </div>
</template>
