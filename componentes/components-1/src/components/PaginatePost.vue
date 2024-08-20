<script setup>
const emit = defineEmits(['next', 'previus'])
</script>

<template>
  <div class="btn-group" role="group" aria-label="Basic example">
    <button @click="emit('previus')" type="button" class="btn btn-outline-primary">Previus</button>
    <button @click="emit('next')" type="button" class="btn btn-outline-primary">Next</button>
  </div>
</template>
