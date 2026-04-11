# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interview Bot - 输入岗位描述 + 简历/项目描述，基于 AI 大模型输出面试问题预测。采用多页面路由架构，侧边栏导航切换不同功能模块（面试预测、Debounce 测试、Transition 测试等）。

## Commands

```bash
npm install          # 安装依赖
npm run dev          # 启动开发服务器 (http://localhost:3000)
npm run build        # 构建生产版本
npm run preview      # 预览构建结果
npm run type-check   # TypeScript 类型检查
```

## 技术栈

- React 19
- TypeScript
- Vite 5
- Ant Design 6

## Project Structure

```
src/
├── components/      # React 组件
│   ├── BigList/
│   ├── DebounceTest/
│   ├── PdfReader/
│   ├── Suggestion/
│   ├── Talking/
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

## 规则

### 文件结构

- 通用、业务组件必须放在src/components/，每个组件必须有自己的目录
- Hooks 必须放在 src/hooks/
- API 必须放在 src/api/
- src/ 新增文件，更新 CLAUDE.md Project Structure

### 代码风格

- All .tsx files must export a function component as the default export
- No class components
- 使用 TypeScript，带类型声明
- CSS 使用 SCSS module

### 技术栈

- React 19
- TypeScript
- Vite 5
- Ant Design 6

### 安全约束

- 禁止提交 .env.local
- 禁止直接提交密钥
- API 密钥用环境变量
