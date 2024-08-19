<script setup>

defineProps(['title', 'content'])
</script>

<template>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p>{{content}}</p>
        </div>
    </div>
</template>