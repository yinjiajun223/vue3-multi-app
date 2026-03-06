<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<template>
  <section>
    <h2>{{ title }}</h2>
    <slot />
  </section>
</template>

<style scoped>
section {
  margin-top: 16px;
}

h2 {
  margin: 0 0 12px;
}
</style>
