<script setup>

import { useRoute, useRouter } from "vue-router";
import { useGetData } from "@/composables/getData";

const {getData, loading, data} = useGetData()
const route = useRoute();
const router = useRouter();

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.pokename}`);

const back = ()=>{
  router.push('/pokemons')
}
</script>

<template>
  <p v-if="loading">Cargando informacion...</p>
  <div v-if="data">
    <figure>
      <img :src="data.sprites?.front_default" alt="" />
    </figure>

    <h1>Poke name: {{ $route.params.pokename }}</h1>
  </div>
  <h1 v-else>No existe el pokemon</h1>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
