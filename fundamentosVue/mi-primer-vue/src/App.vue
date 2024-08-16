<script setup>
import{ref, computed} from 'vue'

const nombre = 'vue dinamico'

let counter= ref(0)
const increment = ()=>{
  counter.value++
}

const decrement =()=>{
  counter.value--
}

const reset = ()=>{
  counter.value = 0
}

const classCounter = computed(()=>{
  if(counter.value ===0){
    return 'zero'
  }else if (counter.value > 0){
    return 'positive'
  }else{
    return 'negative'
  }
})

// const changeCounterColor =()=>{
//   let styleColor = ref('')
//   if(counter.value>0){
//     styleColor.value = "color: green"
//   }else{
//     styleColor.value = "color: red"
//   }
//   return styleColor.value
// }


</script>

<template>
<h1>Hola {{ nombre.toUpperCase() }}</h1>
<h2 :class="classCounter">{{ counter }}</h2>
<button @click="increment">Aumentar</button>
<button @click="decrement">Decrementar</button>
<button @click="reset">Reset</button>

</template>

<style>
  h1{
    color: red;
  }

  .positive{
    color: green;
  }

  .negative{
    color: red;
  }

  .zero{
    color: peru;
  }
</style>