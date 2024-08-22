<script setup>
import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const { getData, loading, data, error } = useGetData();
const route = useRoute();
const router = useRouter();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`);

const back = () => {
  router.push("/pokemons");
};
</script>

<template>
  <p v-if="loading">Cargando informacion...</p>
  <div class="alert alert-danger mt-3" v-if="error">{{ error }}</div>
  <div v-if="data">
    <figure>
      <img :src="data.sprites?.front_default" alt="" />
    </figure>
    <h1>Poke name: {{ $route.params.pokename }}</h1>
  </div>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
