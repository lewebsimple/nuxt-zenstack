<script setup lang="ts">
definePageMeta({ layout: "blank", middleware: "is-authenticated" });
useHead({ title: "Logout" });
</script>

<template>
  <TheAuthPage id="page-logout" title="Confirm logout">
    <TheLogoutForm />
  </TheAuthPage>
</template>
