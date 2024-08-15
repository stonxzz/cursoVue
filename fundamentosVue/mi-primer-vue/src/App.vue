<script setup>
const activo = true
const name = 'Vue dinamico'
// const styleColor = "color:blue"
// const arrayColores = ['blue', 'red', 'peru']
// const activo=true;
// const objetoFruta = 
//   {
//     name: "Manzana",
//     price: "$1.00",
//     description: "Una manzana",
//     id: 1
//   }

const arrayFrutas = [
  {
    name: "Manzana",
    price: "$1.00",
    description: "Una manzana",
    stock: 0,
  },
  {
    name: "Pera",
    price: "$2.00",
    description: "Una pera",
    stock: 10,
  },
  {
    name: "Naranja",
    price: "$3.00",
    description: "Una naranja",
    stock: 20,
  },
];

</script>

<template>
  <h1>Hola {{name.toUpperCase()}}</h1>
  
  <ul>
    <!-- recorrer objetos -->
    <!-- <li v-for="(value, propiedad, index) in objetoFruta" :key="value">
        {{ index }} - {{ propiedad }} : {{value}} 
     </li> -->
     <template v-for="(item) in arrayFrutas" :key="item.name">
    <li v-if="item.stock>0">
      {{ item.name }} - {{ item.price }}
    </li>
     </template>
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