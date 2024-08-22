<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

const poke = ref({});
const route = useRoute();
const router = useRouter();

const back = () => {
  router.push("/pokemons");
};

const getData = async () => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`
    );
    poke.value = data;
  } catch (error) {
    console.log(error);
  }
};

getData();
</script>

<template>
  <figure>
    <img :src="poke.sprites.front_default" alt="" />
  </figure>

  <h1>Poke name: {{ $route.params.pokename }}</h1>
  <button @click="back">Volver</button>
</template>
