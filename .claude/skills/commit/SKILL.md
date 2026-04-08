---
name: commit
description: Automatically generate commit messages based on code changes, and commit your changes.
disable-model-invocation: true
---

## Generate git commit message

1. 检查 stage 区是否为空，如果为空，则提示当前无代码变更，并结束工作流
2. Use cl-descriptions.md in this skill directory for the commit message rules.
3. 展示 commit message 并向用户提供以下选择：

- 确认（直接提交）
- 继续修改（根据用户提出的修改意见）
- 用户自行修改，提供编辑能力
- 取消

4. 确认后执行 commit
