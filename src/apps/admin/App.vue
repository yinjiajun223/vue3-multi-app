<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activePath = computed(() => route.path)
</script>

<template>
  <main class="page">
    <el-page-header content="Admin 应用" />
    <el-menu :default-active="activePath" class="menu" mode="horizontal" router>
      <el-menu-item index="/">
        仪表盘
      </el-menu-item>
      <el-menu-item index="/users">
        用户列表
      </el-menu-item>
      <el-menu-item index="/request-test">
        请求测试
      </el-menu-item>
    </el-menu>
    <router-view />
  </main>
</template>

<style scoped>
.page {
  font-family: Arial, sans-serif;
  padding: 24px;
}

.menu {
  margin: 16px 0;
}
</style>
