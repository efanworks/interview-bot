---
name: predict-question
description: 根据岗位描述（JD）和项目经历，生成面试官最可能询问的两个问题
disable-model-invocation: true
---

Always Respond in Simplified Chinese.

1. **读取项目根目录文件 `indicate.json`**
2. **解析 JSON，提取字段：**
    - `jd`: 岗位信息（JD）
    - `project`: 候选人项目经历
3. **基于`jd`和`project`，生成最有可能的面试问题** 如果你是面试官，根据岗位信息和项目经历，生成你最有想问的两个面试题
4. **每个问题附带“优秀回答思路”**