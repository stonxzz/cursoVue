<script setup>
import axios from "axios";
import { ref } from "vue";

import pokemonsList from "@/components/pokemonsList.vue";

const pokemons = ref([]);

const getData = async () => {
  try {
    const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
    pokemons.value = await data.results;
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>

<template>
  <h1>Pokemons</h1>

  <pokemonsList v-for="element in pokemons" :key="element" :name="element.name" />
</template>
