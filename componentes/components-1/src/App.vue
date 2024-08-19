<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
</script>

<template>
  <h1>APP</h1>
  <ButtonCounter />
  <ButtonCounter />

  <BlogPost title="Post 1" :id="1" body="descripcion 1"></BlogPost>
  <BlogPost title="Post 2" :id="2" body="descripcion 2"></BlogPost>
  <BlogPost title="Post 3" :id="3" body="descripcion 3"></BlogPost>
  <BlogPost title="Post 4" :id="4"></BlogPost>
</template>
