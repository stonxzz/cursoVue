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
    poke.value = null;
  }
};

getData();
</script>

<template>
  <div v-if="poke">
    <figure>
      <img :src="poke.sprites?.front_default" alt="" />
    </figure>

    <h1>Poke name: {{ $route.params.pokename }}</h1>
  </div>
  <h1 v-else>No existe el pokemon</h1>
  <button @click="back" class="btn btn-outline-primary">Volver</button>
</template>
