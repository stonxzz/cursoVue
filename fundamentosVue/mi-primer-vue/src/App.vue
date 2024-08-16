<script setup>
import { ref, computed } from "vue";

const nombre = "vue dinamico";

let counter = ref(0);
const increment = () => {
  counter.value++;
};

const decrement = () => {
  counter.value--;
};

const reset = () => {
  counter.value = 0;
};

const classCounter = computed(() => {
  if (counter.value === 0) {
    return "zero";
  } else if (counter.value > 0) {
    return "positive";
  } else {
    return "negative";
  }
});

const favoriteNumbers = ref([]);

const favorite = () => {
  favoriteNumbers.value.push(counter.value);
};

const verifyNumberExists = computed(() => {
  const compareIfExists = favoriteNumbers.value.find(
    (number) => number === counter.value
  );
  // if(compareIfExists===0) return true
  // return compareIfExists ? true : false;
  return compareIfExists || compareIfExists === 0;
});

// const disableButton = computed((verifyNumberExists)=>{
//   if(verifyNumberExists.value!=0){
//     return 'enabled'
//   }else{
//     return 'disabled'
//   }
// })
</script>

<template>
  <div class="container text-center mt-3">
    <h1>Hola {{ nombre.toUpperCase() }}</h1>
    <h2 :class="classCounter">{{ counter }}</h2>
    <div class="btn-group">
      <button @click="increment" class="btn btn-success">Aumentar</button>
      <button @click="decrement" class="btn btn-danger">Decrementar</button>
      <button @click="reset" class="btn btn-secondary">Reset</button>
      <button @click="favorite" :disabled="verifyNumberExists" class="btn btn-primary">
        Add favorite
      </button>
    </div>

    <ul class="list-group mt-4">
      <p>favoritos:</p>
      <li v-for="(number, index) in favoriteNumbers" :key="index" class="list-group-item">
        <p>{{ number }}</p>
      </li>
    </ul>
  </div>
</template>

<style>
h1 {
  color: red;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: peru;
}
</style>
