<script setup lang="ts">
const isRedirecting = ref(false);

async function onLogout() {
  const { logout } = useAuth();
  await logout();
  isRedirecting.value = true;
  await useRouter().replace("/");
}
</script>

<template>
  <UButton v-if="isRedirecting" color="gray" variant="ghost" block loading disabled>Redirecting...</UButton>
  <UButton v-else block @click="onLogout">Logout</UButton>
</template>
