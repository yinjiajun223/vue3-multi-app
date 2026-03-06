<script setup lang="ts">
defineProps<{
  title: string
  description?: string
}>()
</script>

<template>
  <el-card>
    <template #header>
      <strong>{{ title }}</strong>
    </template>
    <p>{{ description }}</p>
    <slot />
  </el-card>
</template>
