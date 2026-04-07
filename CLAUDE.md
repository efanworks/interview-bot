# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interview Bot - 输入岗位描述 + 简历/项目描述，基于 AI 大模型输出面试问题预测。采用多页面路由架构，侧边栏导航切换不同功能模块（面试预测、Debounce 测试、Transition 测试等）。

## Common Commands

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:3000)
npm run build        # 构建生产版本
npm run preview      # 预览构建结果
npm run type-check   # TypeScript 类型检查
```

## Project Structure

```
src/
├── components/      # React 组件
│   ├── BigList/
│   ├── DebounceTest/
│   ├── PdfReader/
│   ├── Suggestion/
│   └── TransitionTest/
├── hooks/           # 自定义 hooks
│   ├── useDebouncedFn.ts
│   ├── useDebouncedValue.ts
│   ├── useThrottledFn.ts
│   └── useTips.ts
├── pages/           # 页面组件
│   ├── Interview/
│   ├── DebounceTest/
│   └── TransitionTest/
├── api/             # API 接口
│   └── uploadResume.ts
├── utils/           # 工具函数
│   └── deepClone.ts
├── App.tsx          # 应用入口，渲染 AppLayout
├── AppLayout.tsx    # 布局壳（侧边导航 + 内容区）
├── routes.ts        # 集中式路由配置
└── main.tsx         # 应用启动入口
```

## CI/CD

- `ci-build`: 任意分支 push 后自动构建
- `claude-review`: PR 创建/更新时触发 Claude Code Review（需要安装 GitHub App + 订阅 Claude Pro/Max）

## Note

- 项目使用 ESM (`"type": "module"`)
- 无测试配置，无 lint

## 约束

### 文件结构规范

- 通用、业务组件必须放在src/components/，每个组件至少包含 index.tsx + style.module.scss
- Hooks 必须放在 src/hooks/
- API 放在 src/api/
- 每次在 src/ 新增文件，都更新 CLAUDE.md 中的 Project Structure

### 代码风格

- 使用函数组件，不用 class
- 使用 TypeScript，带类型声明
- CSS 使用 SCSS module

### 技术栈

- React 19
- TypeScript
- Vite 5
- Ant Design 6

### Git 规范

- 主分支: `master`
- 功能分支: `feature/*`，比如 feature/add-auth-check
- commit message 包括功能陈述句 + 空行 + 具体修改点，示例：

```
新增用户权限校验功能

1.新增Auth组件
2.新增AuthCheck API
...
```

### 安全约束

- 禁止提交 .env.local
- 禁止直接提交密钥
- API 密钥用环境变量
