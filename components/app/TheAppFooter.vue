<script setup lang="ts">
const { $trpc } = useNuxtApp();
const { data: version } = await $trpc.info.version.useQuery();
</script>

<template>
  <footer class="py-1 bg-gray-100 text-gray-500">
    <div class="container flex items-center">
      <div class="ml-auto text-sm">
        {{ version }}
      </div>
    </div>
  </footer>
</template>
