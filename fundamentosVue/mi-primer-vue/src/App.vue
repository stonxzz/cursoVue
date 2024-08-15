<script setup>
const name = 'Vue dinamico'
const styleColor = "color:blue"
const arrayColores = ['blue', 'red', 'peru']
const activo=true;
</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  <h2>{{ arrayColores }}</h2>
  <!-- //: estos dos puntos es la abreviacion del vbind -->
  <h2 :style="`color: ${arrayColores[2]}`">`Soy peru</h2>
  <h2 v-if="activo ===  true">
    <span>Icono</span>
    Estoy activo
  </h2>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p>

  <h2 v-show="activo">Estoy activo v-show</h2>
</template>

<style>
  h1{
    color: red
  }
</style>