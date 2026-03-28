# Interview Bot
输入：岗位描述 + 简历/项目描述
输出：面试问题预测

## 技术栈
- React 19
- TypeScript
- Vite 5

## 开发

### 安装依赖
```bash
npm install
```

### 开发服务器
```bash
npm run dev
```
打开浏览器访问 http://localhost:3000

### 构建生产版本
```bash
npm run build
```

### 预览构建结果
```bash
npm run preview
```

### 类型检查
```bash
npm run type-check
```

## CI / Code Review

项目已配置以下 GitHub Actions 工作流：

- `ci-build`：任意分支 `push` 后自动执行 `npm ci`、`npm run type-check`、`npm run build`。
- `claude-review`：PR 创建或更新时自动触发 Claude Code Review 并在 PR 中评论。

### Claude Review 使用前准备

1. 在仓库安装 Claude GitHub App（https://github.com/apps/claude）。
2. 你使用 OpenRouter 时，在仓库 `Settings -> Secrets and variables -> Actions` 中添加：
   - `OPENROUTER_API_KEY`
3. 确保 App 权限包含：
   - `Contents`（Read/Write）
   - `Pull requests`（Read/Write）
   - `Issues`（Read/Write）

> 说明：当前 `claude-review` 工作流已使用 OpenRouter 中转（`ANTHROPIC_BASE_URL=https://openrouter.ai/api`，并将 `OPENROUTER_API_KEY` 作为 `anthropic_api_key` 传入 Action）。