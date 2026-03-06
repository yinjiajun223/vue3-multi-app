<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { ref } from 'vue'

import { getMockStats } from '@/apis/modules/demo'
import { useAppStore } from '@/store/app'

const appStore = useAppStore()
const loading = ref(false)
const statsText = ref('点击按钮后加载 mock 统计数据')

async function handleLoadStats() {
  loading.value = true

  try {
    const data = await getMockStats()

    statsText.value = `后台访问量 ${data.visits}，今日新增 ${data.today}`
    appStore.markRequest('admin 请求成功')
  }
  catch {
    ElMessage.error('请求失败，请稍后重试')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <app-section title="Admin 请求测试">
    <base-card title="统一请求层" description="演示管理端与前台复用同一套 axios 封装。">
      <el-space direction="vertical" alignment="start">
        <el-button type="primary" :loading="loading" @click="handleLoadStats">
          发起请求
        </el-button>
        <el-text>{{ statsText }}</el-text>
        <el-text type="info">
          累计请求次数：{{ appStore.requestCount }}
        </el-text>
      </el-space>
    </base-card>
  </app-section>
</template>
