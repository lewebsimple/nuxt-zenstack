<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <div class="self-stretch sm:self-center px-4 space-y-6">
    <NuxtLink to="/">
      <SvgLogoNuxt class="mx-auto h-12 w-auto" />
    </NuxtLink>
    <UCard class="w-full sm:w-96">
      <template #header>
        <div class="flex justify-center items-center gap-2">
          <h2 class="text-center font-bold text-xl">{{ title }}</h2>
        </div>
      </template>
      <slot />
    </UCard>
  </div>
</template>
