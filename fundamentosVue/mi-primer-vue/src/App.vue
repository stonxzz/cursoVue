<script setup>
const name = 'Vue dinamico'
const styleColor = "color:blue"
</script>

<template>
  <h1>Hola {{name}}</h1>
  <h2 :style="styleColor">Soy azul</h2>//: estos dos puntos es la abreviacion del vbind
</template>

<style>
  h1{
    color: red
  }
</style>