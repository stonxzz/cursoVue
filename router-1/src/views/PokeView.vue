<script setup>

    import axios from 'axios';

    const getData = async()=>{
        try {
            const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    getData()
</script>

<template>
    <h1>Poke name: {{ $route.params.pokename }}</h1>
</template>