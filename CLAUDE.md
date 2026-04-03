# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Interview Bot - 输入岗位描述 + 简历/项目描述，输出面试问题预测。

## Tech Stack

- React 19
- TypeScript
- Vite 5
- Ant Design 6

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
│   ├── BigList.tsx
│   ├── DebounceTest.tsx
│   ├── PdfReader/
│   ├── Suggestion/
│   └── TransitionTest/
├── hooks/           # 自定义 hooks
│   ├── useDebouncedFn.ts
│   ├── useDebouncedValue.ts
│   └── useTips.ts
├── api/             # API 接口
└── App.tsx          # 主应用组件
```

## Git Workflow

- 主分支: `master`
- 开发分支: `dev`
- 功能分支: `feature/*`

## CI/CD

- `ci-build`: 任意分支 push 后自动构建
- `claude-review`: PR 创建/更新时触发 Claude Code Review（需要安装 GitHub App + 订阅 Claude Pro/Max）

## Note

- 项目使用 ESM (`"type": "module"`)
- 无测试配置，无 lint

## 约束

- 新建组件必须放在src/components目录下，并新建组件文件夹，其中包括index.tsx和style.module.scss
