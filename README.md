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
