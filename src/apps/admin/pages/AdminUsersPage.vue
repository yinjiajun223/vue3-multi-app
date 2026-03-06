<script setup lang="ts">
import type { UserItem } from '@/apis/modules/demo'

import { ElMessage } from 'element-plus'
import { ref } from 'vue'
import { getMockUsers } from '@/apis/modules/demo'

const loading = ref(false)
const userList = ref<UserItem[]>([])

async function handleLoadUsers() {
  loading.value = true

  try {
    const data = await getMockUsers()
    userList.value = data.list
  }
  catch {
    ElMessage.error('加载用户失败，请稍后重试')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <app-section title="Admin 用户列表">
    <base-card title="用户数据" description="示例接口：/public/mock/users.json。">
      <el-space direction="vertical" alignment="start" style="width: 100%">
        <el-button type="primary" :loading="loading" @click="handleLoadUsers">
          加载用户
        </el-button>
        <el-table :data="userList" style="width: 100%">
          <el-table-column prop="id" label="ID" width="80" />
          <el-table-column prop="name" label="姓名" />
          <el-table-column prop="role" label="角色" width="140" />
        </el-table>
      </el-space>
    </base-card>
  </app-section>
</template>
