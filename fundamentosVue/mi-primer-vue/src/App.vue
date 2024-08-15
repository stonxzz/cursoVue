<script setup>
const name = 'Vue dinamico'
// const styleColor = "color:blue"
// const arrayColores = ['blue', 'red', 'peru']
// const activo=true;
const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
  },
];
</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  <ul>
    <li v-for="(fruta) in arrayFrutas":key="fruta.name">
      {{ fruta.name }} - {{ fruta.price }} - {{ fruta.description }} 
    </li>
  </ul>
  <!-- <h2>{{ arrayColores }}</h2> -->
  <!-- //: estos dos puntos es la abreviacion del vbind
  <h2 :style="`color: ${arrayColores[2]}`">`Soy peru</h2>
  <h2 v-if="activo ===  true">
    <span>Icono</span>
    Estoy activo
  </h2>
  <p v-else-if="activo === false">Estoy inactivo</p>
  <p v-else>Estoy indeciso</p>

  <h2 v-show="activo">Estoy activo v-show</h2> -->

</template>

<style>
  h1{
    color: red
  }
</style>