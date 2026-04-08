---
name: commit-to-pr
description: 根据代码变更自动编写 commit message、提交变更、Push、创建 PR
disable-model-invocation: true
---

## Commit and Push

1. 检查 stage 区是否为空，为空则提示当前无变更
2. Use cl-descriptions.md in this skill directory for the commit message rules.
3. Push current branch to origin

## Create PR

Create PR, fill title and body based on commit message
