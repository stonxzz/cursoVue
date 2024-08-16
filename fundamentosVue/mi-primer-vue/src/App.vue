<script setup>
import{ref} from 'vue'

const nombre = 'vue dinamico'

let counter= ref(0)
const increment = ()=>{
  counter.value++
}
</script>

<template>
<h1>Hola {{ nombre.toUpperCase() }}</h1>
<h2>{{ counter }}</h2>
<button @click="increment">Aumentar</button>

</template>

<style>
  h1{
    color: red;
  }
</style>