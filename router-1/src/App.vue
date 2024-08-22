<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img
          src="@/assets/logo.svg"
          alt="Logo"
          width="30"
          height="24"
          class="d-inline-block align-text-top"
        />
        PokeApi
      </router-link>
      <div>
        <router-link to="/" class="btn btn-outline-primary me-2">home</router-link>
        <router-link to="/pokemons" class="btn btn-outline-primary">pokemons</router-link>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>

  <footer>Footer</footer>
</template>

<style></style>
