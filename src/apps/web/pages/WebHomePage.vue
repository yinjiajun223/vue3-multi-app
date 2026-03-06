<template>
  <app-section title="Web 首页">
    <base-card title="多入口模板" description="前台入口用于官网、活动页、开放页面等场景。">
      <el-space direction="vertical" alignment="start">
        <el-text>你可以通过以下页面快速测试路由和请求层：</el-text>
        <el-space>
          <el-button type="primary" @click="$router.push('/about')">
            关于页面
          </el-button>
          <el-button plain @click="$router.push('/request-test')">
            请求测试
          </el-button>
        </el-space>
      </el-space>
    </base-card>

    <base-card title="当前架构" description="已接入 router + pinia + axios 封装 + Element Plus 按需加载。">
      <el-space>
        <el-tag type="success">
          web 端
        </el-tag>
        <el-tag>hash 路由</el-tag>
        <el-tag type="warning">
          共享组件
        </el-tag>
      </el-space>
    </base-card>
  </app-section>
</template>
