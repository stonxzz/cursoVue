<script setup>

const name = 'Vue dinamico'

//Metodo - methods
const handleClick = (message)=>{
  console.log(message)
}

</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  <button v-on:click="handleClick('Texto1')">Activame 1</button>
  <button @click="handleClick('texto2')">Activame 2</button>

</template>

<style>
  h1{
    color: red
  }
</style>