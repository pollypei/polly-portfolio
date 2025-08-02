---
title: 讓 Claude Desktop 連上網路
seoTitle: MCP - Fetch 讓 Claude Desktop 連上網路
seoDescription: 了解如何使用 Model Context Protocol Fetch 服務讓 Claude 獲取網路資訊。
datePublished: Sat Mar 08 2025 07:44:45 GMT+0000 (Coordinated Universal Time)
cuid: cm7zwfrd4000c09l5de0c614n
slug: claude-mcp-fetch
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1742126876836/bea6fd92-046f-413b-b44c-ee209a39f3b0.png
tags: ["fetch", "claudeai", "mcp"]
date: "2025-03-08"
category: "生產力提昇"
readTime: "1 min read"
excerpt: "分享最新的AI工具使用心得"
---

## 什麼是 MCP Fetch

MCP Fetch 是一個讓 AI 模型能夠從網際網路獲取資訊的工具。它讓原本沒有上網能力的 AI 系統能夠瀏覽網頁，獲取最新資訊，並將這些資訊轉換成易於理解的格式。

## 核心功能

1. **網頁擷取**：從指定的 URL 下載網頁內容
    
2. **內容轉換**：將 HTML 網頁轉換為 Markdown 格式，便於 AI 閱讀
    
3. **分段讀取**：處理大型網頁時，可以分段獲取內容
    
4. **遵守網站規則**：自動檢查網站的 robots.txt 文件，確保遵守網站訪問規則
    

## 使用範例

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741422136685/2cae4f55-ce33-4160-ae44-3e3dbd00cf35.png align="center")

## MCP Fetch 工作流程

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741418152764/ea1e635c-2eaa-4a99-82b6-7c2c39dfa384.png align="center")

## 使用方式

要在 Claude Desktop 中使用這個工具，你需要在設定中添加以下配置：

#### macOS 系統：

設定檔通常位於以下路徑：

```plaintext
~/Library/Application Support/Claude/claude_desktop_config.json
```

#### Windows 系統：

設定檔通常位於以下路徑：

```plaintext
C:\Users\[使用者名稱]\AppData\Roaming\Claude\claude_desktop_config.json
```

### 設定方法

1. **使用 uv（推薦）**：
    

```plaintext
"mcpServers": {
  "fetch": {
    "command": "uvx",
    "args": ["mcp-server-fetch"]
  }
}
```

2. **使用 pip**：
    

```plaintext
"mcpServers": {
  "fetch": {
    "command": "python",
    "args": ["-m", "mcp_server_fetch"]
  }
}
```

設定前先安裝

```plaintext
pip install mcp-server-fetch
python -m mcp_server_fetch
```

### 設定成功會出現以下內容

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741421759637/1bb0ea82-5a81-4a79-a262-b652a7785f2f.png align="center")

## 可能遇到的問題

### 不認識uvx指令

#### 安裝方式

```plaintext
# macOS 和 Linux
curl -LsSf https://astral.sh/uv/install.sh | sh

# Windows
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

### 設定完畢沒有出現MCP工具

1. Claude Desktop 沒有啟動 Developer 模式
    
2. 重啟 Claude Desktop
    

### **沒有安裝 Node.js**：

1. 從官方網站 [nodejs.org](http://nodejs.org) 下載並安裝
    
2. 透過命令列執行 node --version 確認安裝成功
    

## 參考文件

[使用者快速入門 | MCP for Claude Desktop Users](https://modelcontextprotocol.io/quickstart/user)

[Fetch 工具伺服器 | MCP Fetch Server](https://github.com/modelcontextprotocol/servers/tree/main/src/fetch)