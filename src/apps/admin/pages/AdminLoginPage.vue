<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

import { setToken } from '@/utils/token'

const token = ref('admin-demo-token')

function handleLogin() {
  setToken(token.value)
  ElMessage.success('已写入本地 token')
}
</script>

<template>
  <app-section title="Admin 登录页（示例）">
    <base-card title="模拟登录" description="仅用于演示 token 存取与 401 跳转承接页。">
      <el-space>
        <el-input v-model="token" style="width: 280px" />
        <el-button type="primary" @click="handleLogin">
          保存 Token
        </el-button>
      </el-space>
    </base-card>
  </app-section>
</template>
