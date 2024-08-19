<script setup>
import ButtonCounter from "./components/ButtonCounter.vue";
import BlogPost from "./components/BlogPost.vue";
</script>

<template>
  <h1>APP</h1>
  <ButtonCounter />
  <ButtonCounter />

  <BlogPost title="Post 1"
  content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste voluptas ut ad 
  pariatur at vitae voluptates, 
  labore consectetur vel similique totam illum vero alias. Magnam expedita amet ipsa. Obcaecati."></BlogPost>
  <BlogPost title="Post 2"></BlogPost>
  <BlogPost title="Post 3"></BlogPost>
  <BlogPost title="Post 4"></BlogPost>
</template>
