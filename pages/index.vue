<script setup lang="ts">
useHead({ title: "Home" });
const { $trpc } = useNuxtApp();
const { data: posts } = await $trpc.crud.post.findMany.useQuery({});
</script>

<template>
  <div id="page-home">
    <h1>Nuxt / ZenStack</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>
