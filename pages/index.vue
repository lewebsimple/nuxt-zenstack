<script setup lang="ts">
useHead({ title: "Home" });
const { isAuthenticated } = useAuth();
</script>

<template>
  <div id="page-home" class="space-y-6">
    <h1 class="font-bold text-4xl">Nuxt / ZenStack</h1>
    <UButton v-if="isAuthenticated" to="/logout">Logout</UButton>
    <UButton v-else to="/login">Login</UButton>
  </div>
</template>
