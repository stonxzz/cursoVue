<script setup>
import { ref } from "vue";

import ButtonCounter from "./components/ButtonCounter.vue";
import PaginatePost from "./components/PaginatePost.vue";
import BlogPost from "./components/BlogPost.vue";


const posts = ref([]);
const postXpage = 10
const inicio = ref(0)
const fin = ref(postXpage)

const favorito = ref("");
const cambiarFavorito = (title) => {
  favorito.value = title;
};

const next = ()=>{
  inicio.value += postXpage
  fin.value += postXpage
}

const previus = ()=>{
  inicio.value += -postXpage
  fin.value += -postXpage
}

fetch("https://jsonplaceholder.typicode.com/posts")
.then((res) => res.json())
.then((data) => {
  posts.value = data})
</script>

<template>
  <div class="container">
    <h1>APP</h1>
    <h2>
      Mi post favorito:
      <span v-if="!favorito"><h2>No hay un post favorito</h2></span>
      <span v-else></span>
      <h2>{{ favorito }}</h2>
    </h2>

  

    <PaginatePost class="mb-2"
    @next="next"
    @previus="previus"/>

    <BlogPost
      v-for="post in posts.slice(inicio, fin)"
      :key="post.id"
      :title="post.title"
      :id="post.id"
      :body="post.body"
      @cambiarFavoritoNombre="cambiarFavorito"
      class="mb-2"
    ></BlogPost>
  </div>
</template>
