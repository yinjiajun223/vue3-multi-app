<template>
  <app-section title="Admin 仪表盘">
    <base-card title="后台入口" description="后台入口常用于管理、配置和审计页面。">
      <el-space direction="vertical" alignment="start">
        <el-text>这里给出最小管理系统导航示例：</el-text>
        <el-space>
          <el-button type="success" @click="$router.push('/users')">
            用户列表
          </el-button>
          <el-button plain @click="$router.push('/request-test')">
            请求测试
          </el-button>
        </el-space>
      </el-space>
    </base-card>

    <base-card title="系统状态" description="可在此扩展统计卡片、告警卡片和待办列表。">
      <el-space>
        <el-tag type="danger">
          admin 端
        </el-tag>
        <el-tag>pinia</el-tag>
        <el-tag type="info">
          axios
        </el-tag>
      </el-space>
    </base-card>
  </app-section>
</template>
