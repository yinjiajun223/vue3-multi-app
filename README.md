# vue3-multi-app

Vue 3 + Vite 多入口模板（前台 `web` + 后台 `admin`）。

## 架构选型说明（中英文）

- 中文：[docs/architecture-choice.zh-CN.md](docs/architecture-choice.zh-CN.md)
- English: [docs/architecture-choice.en.md](docs/architecture-choice.en.md)

## 访问地址

- 前台：`http://localhost:5173/`
- 后台：`http://localhost:5173/admin.html`

## 目录结构

```text
vue3-multi-app
├─ src
│  ├─ apps
│  │  ├─ web
│  │  │  ├─ App.vue
│  │  │  ├─ main.ts
│  │  │  ├─ router/
│  │  │  └─ store/
│  │  └─ admin
│  │     ├─ App.vue
│  │     ├─ main.ts
│  │     ├─ router/
│  │     └─ store/
│  ├─ components/
│  ├─ composables/
│  ├─ apis/
│  ├─ assets/
│  └─ utils/
├─ index.html
├─ admin.html
├─ vite.config.ts
├─ package.json
└─ tsconfig.json
```

## 开发

```bash
npm install
npm run dev
```

## 工程规范

- `npm run lint`：ESLint 校验
- `npm run lint:fix`：自动修复 ESLint 问题
- `npm run format`：按 ESLint 规则统一格式化（antfu 风格）
- `npm run format:check`：检查代码规范

已接入：

- ESLint（`@antfu/eslint-config`，Vue 3 + TypeScript）
- Commitlint（`commitlint.config.cjs`）
- Husky（`.husky/pre-commit` + `.husky/commit-msg`）
- lint-staged（`package.json`）
- VS Code 工作区规范（`.vscode/settings.json`）

提交时自动执行：

- `pre-commit`：`lint-staged`
- `commit-msg`：`commitlint`

VS Code 推荐扩展：

- `dbaeumer.vscode-eslint`
- `vue.volar`

## 构建

```bash
npm run build
```

`vite.config.ts` 已配置多入口打包：

- `web` -> `index.html`
- `admin` -> `admin.html`

## History 路由部署说明（重要）

项目路由使用 `createWebHistory`，生产环境需要服务端回退规则，否则刷新页面可能 404。

Nginx 示例：

```nginx
location / {
  try_files $uri $uri/ /index.html;
}

location /admin.html {
  try_files $uri $uri/ /admin.html;
}

location /admin.html/ {
  try_files $uri $uri/ /admin.html;
}
```

## Element Plus 与最小示例

- 已按 Element Plus 官方推荐接入按需加载：
  - `unplugin-auto-import`
  - `unplugin-vue-components`
  - `ElementPlusResolver`
- `src/components` 下组件已全局自动注册，可在任意页面直接使用
- 自动类型声明文件：
  - `src/auto-imports.d.ts`
  - `src/components.d.ts`
- 示例页面：
  - `src/apps/web/pages/WebHomePage.vue`
  - `src/apps/admin/pages/AdminDashboardPage.vue`
- 通用组件：
  - `src/components/BaseCard.vue`
  - `src/components/AppSection.vue`

## 路由与页面示例

- Web 端路由：`src/apps/web/router/index.ts`
  - `/` 首页
  - `/about` 关于页
  - `/request-test` 请求测试页
  - `/login` 登录示例页
- Admin 端路由：`src/apps/admin/router/index.ts`
  - `/` 仪表盘
  - `/users` 用户列表
  - `/request-test` 请求测试页
  - `/login` 登录示例页

## Axios 封装与接口层

- 请求实例与拦截器：`src/apis/axios.ts`
  - 自动携带 token
  - 统一处理业务码（0/200 视为成功）并直接返回 `data`
  - 401 自动清理 token 并跳转登录页
- 类型定义：`src/apis/common/index.type.ts`
- 业务接口示例：`src/apis/modules/demo.ts`
- 本地 mock 数据：
  - `public/mock/users.json`
  - `public/mock/stats.json`

## 其他基础设施

- 状态管理（Pinia）：`src/store/app.ts`
- token 工具：`src/utils/token.ts`
- `@` 别名已配置：`@ -> src`

## 环境变量

- `VITE_API_BASE_URL`：接口基础地址
- `VITE_WEB_LOGIN_PATH`：前台未授权跳转地址（默认 `/login`）
- `VITE_ADMIN_LOGIN_PATH`：后台未授权跳转地址（默认 `/admin.html/login`）
