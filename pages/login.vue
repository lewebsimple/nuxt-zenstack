<script setup lang="ts">
definePageMeta({ layout: "blank", middleware: "not-authenticated" });
useHead({ title: "Login" });
</script>

<template>
  <TheAuthPage id="page-login" title="Please login">
    <TheLoginForm />
  </TheAuthPage>
</template>
