---
title: 讓 Claude Desktop 生成圖片
seoTitle: 讓 Claude Desktop 生成提示詞使用 MCP - 自行開發文生圖 Server 叫用 Replicate API 生成圖片
seoDescription: 透過自建的 MCP 中介伺服器，Claude 不僅能產生精確的圖像描述提示詞，還能直接呼叫外部 API 並生成圖片。
datePublished: Tue Mar 11 2025 10:30:22 GMT+0000 (Coordinated Universal Time)
cuid: cm84coapv000109jy3gvt7act
slug: claude-mcp-gen-image
cover: https://cdn.hashnode.com/res/hashnode/image/upload/v1742126825362/89be4b03-340c-4662-a936-b0d4bc1fff28.png
tags: ["replicate-api", "claudeai", "mcp"]
date: "2025-03-11"
category: "生產力提昇"
readTime: "4 min read"
excerpt: "分享最新的AI工具使用心得"
---

## 簡介

Model Context Protocol (MCP) 是一種允許語言模型（如 Claude）與外部工具和資源互動的通訊協定。本指南將說明如何建立一個簡單的圖片生成伺服器，透過 Replicate API 實現圖像生成功能。

這個方案結合了 Claude Desktop 的強大語言能力與 Replicate 平台的多樣化圖像模型，讓您能夠直接在 Claude 環境中完成從提示詞生成到圖片創作的完整流程。透過自建的 MCP 中介伺服器，Claude 不僅能產生精確的圖像描述提示詞，還能直接呼叫外部 API 並生成圖片。

## 主要內容概覽：

1. **整合 Claude 與圖像生成技術**：利用 Claude 的文字處理能力產生精確的圖像描述提示詞
    
2. **自建 MCP 伺服器**：設計專屬中介伺服器，連接 Claude Desktop 與 Replicate API
    
3. **Replicate API 應用**：使用 Replicate 平台提供的多種圖像生成模型
    

## 使用範例

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741688436060/5974c101-a406-4e8d-b1c6-525d272518a9.png align="center")

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741668577485/fd7bf8e2-0ccf-42f2-916f-36075d85bcab.png align="center")

## 工作流程圖

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741669430930/eb5ec073-3c1a-4fac-a760-502c95cfd31b.png align="center")

## 為什麼要使用 Replicate API

在當今快速發展的 AI 領域中，各種生成式 AI 模型如雨後春筍般出現，要一一註冊使用各家平台不僅繁瑣，還需要分別儲值和管理多個帳號。Replicate 正是為解決這個問題而誕生的整合平台，讓你能夠通過單一入口點存取多種頂尖 AI 模型，特別是在生成圖像方面有豐富的選擇。

### 註冊及獲取 API 金鑰的簡易步驟

1. **註冊帳號**：前往 [Replicate](https://replicate.com/pricing) 官網創建帳號
    
2. **獲取 API 金鑰**：登入後前往個人設定頁面獲取 API 金鑰
    
3. **儲值帳戶**：根據需求添加信用卡並儲值
    
4. **開始使用**：通過網頁界面或 API 開始使用各種模型
    

### 列舉幾個模型的價格

| **模型** | **美元價格/一張圖** | **新台幣價格/一張圖** |
| --- | --- | --- |
| black-forest-labs/flux-schnell | 0.003 | 0.1 |
| recraft-ai/recraft-20b | 0.022 | 0.7 |
| black-forest-labs/flux-dev | 0.025 | 0.8 |
| google/imagen-3-fast | 0.025 | 0.8 |
| stability-ai/stable-diffusion-3 | 0.035 | 1.11 |
| black-forest-labs/flux-1.1-pro | 0.04 | 1.27 |
| ideogram-ai/ideogram-v2a | 0.04 | 1.27 |
| recraft-ai/recraft-v3 | 0.04 | 1.27 |
| stability-ai/stable-diffusion-3.5-large-turbo | 0.04 | 1.27 |

## 自行開發文生圖 Server 系統需求

* Python 3.10 或更高版本
    
* Python MCP SDK 1.2.0 或更高版本
    

## 環境設定

### 步驟 1：安裝 uv 工具

#### Windows

```powershell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

#### MacOS/Linux

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

請重新啟動終端機以確保 uv 命令可被識別。

### 步驟 2：建立專案結構

#### Windows

```powershell
# 建立新專案目錄
uv init genimage
cd genimage

# 建立虛擬環境並啟用
uv venv
.venv\Scripts\activate

# 安裝依賴套件
uv add mcp[cli] replicate Pillow requests

# 建立.env
new-item .env
# 在檔案中添加您的API金鑰
REPLICATE_API_TOKEN=your_api_key_here

# 建立.gitignore檔案
new-item .gitignore
# 在.gitignore檔案中添加.env，避免金鑰誤上傳 GitHub
Set-Content -Path .gitignore -Value ".env"

# 建立伺服器檔案
new-item genimage.py
```

#### MacOS/Linux

```bash
# 建立新專案目錄
uv init genimage
cd genimage

# 建立虛擬環境並啟用
uv venv
source .venv/bin/activate

# 安裝依賴套件
uv add "mcp[cli]" replicate Pillow requests

# 建立.env
touch .env
# 在檔案中添加您的API金鑰
REPLICATE_API_TOKEN=your_api_key_here

# 建立.gitignore檔案
touch  .gitignore
# 在.gitignore檔案中添加.env，避免金鑰誤上傳 GitHub
echo ".env" > .gitignore

# 建立伺服器檔案
touch genimage.py
```

## 建立你的伺服器

### 步驟 1：導入套件並設定實例

```python
import replicate  # 導入 Replicate API 客戶端
import os  # 導入操作系統相關功能模組
import datetime  # 導入日期時間處理模組
import requests  # 導入 HTTP 請求模組
from typing import List  # 導入型別提示中的列表類型
from mcp.server.fastmcp import FastMCP  # 導入 FastMCP 伺服器框架
from dotenv import load_dotenv  # 導入環境變數載入工具

# 載入環境變數並初始化 FastMCP 伺服器
load_dotenv()  # 從 .env 檔案載入環境變數
mcp = FastMCP("genimage")  # 建立一個名為 "genimage" 的 FastMCP 伺服器實例

# 常數
MODEL_ID = "black-forest-labs/flux-schnell"  # 設定使用的 AI 模型 ID
DOWNLOAD_PATH = os.path.expanduser("~/Downloads")  # 設定下載路徑為使用者的下載資料夾
```

### 步驟 2：實現工具執行功能

```python
@mcp.tool()  # 將函數註冊為 MCP 工具
def generate_image(
    prompt: str,  # 圖像生成提示詞
    filename: str = None,  # 可選的檔案名稱
    seed: int = None,  # 可選的隨機種子
    go_fast: bool = False,  # 是否使用快速模式
    megapixels: str = "1",  # 輸出圖像的百萬像素數
    num_outputs: int = 1,  # 要生成的圖像數量
    aspect_ratio: str = "1:1",  # 圖像寬高比
    output_format: str = "webp",  # 輸出格式，預設為 webp
    output_quality: int = 100,  # 輸出圖像品質
    num_inference_steps: int = 4,  # 推理步驟數
    disable_safety_checker: bool = False  # 是否停用安全檢查
) -> List[str]:  # 函數返回字串列表
    """生成最高品質的圖像並保存到下載資料夾。"""
    # 檢查 API token 和提示詞
    api_token = os.environ.get("REPLICATE_API_TOKEN")  # 從環境變數獲取 API 令牌
    if not api_token:  # 如果沒有設定 API 令牌
        return ["錯誤: 未設置 REPLICATE_API_TOKEN 環境變數"]  # 返回錯誤訊息
    
    if not prompt or not prompt.strip():  # 如果提示詞為空或只包含空白
        return ["錯誤: 提示詞不能為空"]  # 返回錯誤訊息
    
    # 設定檔案名稱
    timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")  # 生成時間戳記
    
    # 確保檔名具有正確的副檔名
    if not filename:  # 如果沒有提供檔名
        # 沒有提供檔名時使用預設檔名加時間戳記
        filename = f"generated_image_{timestamp}.{output_format}"  # 使用預設檔名格式
    else:  # 如果提供了檔名
        # 清理檔名，確保它是有效的且沒有副檔名
        base_filename = os.path.splitext(filename)[0]  # 獲取不含副檔名的檔名
        # 添加時間戳記和正確的副檔名
        filename = f"{base_filename}_{timestamp}.{output_format}"  # 組合最終檔名
    
    try:  # 嘗試執行以下代碼
        # 準備模型輸入參數
        input_data = {  # 建立輸入參數字典
            "prompt": prompt,  # 提示詞
            "go_fast": go_fast,  # 快速模式設定
            "megapixels": megapixels,  # 百萬像素設定
            "num_outputs": num_outputs,  # 輸出數量
            "aspect_ratio": aspect_ratio,  # 寬高比
            "output_format": output_format,  # 輸出格式
            "output_quality": output_quality,  # 輸出品質
            "num_inference_steps": num_inference_steps,  # 推理步驟數
            "disable_safety_checker": disable_safety_checker  # 安全檢查設定
        }
        
        if seed is not None:  # 如果提供了隨機種子
            input_data["seed"] = seed  # 將種子添加到輸入參數中
        
        # 呼叫 Replicate API
        output = replicate.Client(api_token=api_token).run(MODEL_ID, input=input_data)  # 執行模型並獲取輸出
        
        if not output or not isinstance(output, list):  # 如果輸出為空或不是列表
            return ["錯誤: 模型未返回有效的圖片 URL"]  # 返回錯誤訊息
        
        # 保存所有生成的圖片
        os.makedirs(DOWNLOAD_PATH, exist_ok=True)  # 確保下載資料夾存在
        saved_paths = []  # 初始化保存路徑列表
        image_urls = []  # 初始化圖片 URL 列表
        
        for idx, image_url in enumerate(output):  # 遍歷所有輸出的圖片 URL
            # 處理檔名
            current_filename = filename  # 預設使用之前定義的檔名
            if num_outputs > 1:  # 如果產生多張圖片
                name, ext = os.path.splitext(filename)  # 分離檔名和副檔名
                current_filename = f"{name}_{idx+1}{ext}"  # 為每張圖片添加序號
            
            file_path = os.path.join(DOWNLOAD_PATH, current_filename)  # 組合完整檔案路徑
            
            # 下載並保存圖片
            response = requests.get(image_url, timeout=60)  # 下載圖片，設定超時為 60 秒
            response.raise_for_status()  # 檢查下載是否成功
            
            with open(file_path, 'wb') as f:  # 以二進制寫入模式開啟檔案
                f.write(response.content)  # 寫入圖片內容
            
            saved_paths.append(file_path)  # 將保存路徑添加到列表
            image_urls.append(image_url)  # 將圖片 URL 添加到列表
        
        # 返回成功資訊，包含完整路徑和圖片 URL
        result_message = f"已保存 {len(saved_paths)} 張高品質圖片至: {saved_paths[0]}"  # 格式化成功訊息
        return [result_message] + image_urls  # 返回成功訊息和圖片 URL 列表
    
    except Exception as e:  # 捕獲任何異常
        return [f"發生錯誤: {e}"]  # 返回錯誤訊息
```

### 步驟 3：運行伺服器

```python
if __name__ == "__main__":  # 如果直接執行此檔案
    mcp.run(transport='stdio')  # 使用標準輸入輸出作為傳輸方式啟動 MCP 伺服器
```

運行 `uv run genimage.py` 以確認一切正常運作。

## **使用方式**

要在 Claude Desktop 中使用這個工具，你需要在設定中添加以下配置：

#### Windows

設定檔通常位於以下路徑：

```plaintext
C:\Users\[使用者名稱]\AppData\Roaming\Claude\claude_desktop_config.json
```

#### MacOS/Linux

設定檔通常位於以下路徑：

```plaintext
~/Library/Application Support/Claude/claude_desktop_config.json
```

### 設定方法

#### Windows

```json
{
    "mcpServers": {
        "weather": {
            "command": "uv",
            "args": [
                "--directory",
                "C:\\[專案路徑]\\genimage",
                "run",
                "genimage.py"
            ]
        }
    }
}
```

#### MacOS/Linux

```json
{
    "mcpServers": {
        "weather": {
            "command": "uv",
            "args": [
                "--directory",
                "/[專案路徑]/genimage",
                "run",
                "genimage.py"
            ]
        }
    }
}
```

重啟 Claude Desktop

### 設定成功會出現以下內容

![](https://cdn.hashnode.com/res/hashnode/image/upload/v1741673456317/4acc2b26-ec06-4fdd-9066-635936195565.png align="center")

## 故障排除

### 從 Claude for Desktop 獲取日誌

`mcp.log` 包含關於 MCP 連接和連接失敗的一般日誌

`mcp-server-SERVERNAME.log` 包含來自命名伺服器的錯誤（stderr）日誌

#### Windows

通常位於以下路徑：

```plaintext
C:\Users\[使用者名稱]\AppData\Roaming\Claude\logs\
```

#### MacOS/Linux

通常位於以下路徑：

```plaintext
~/Library/Logs/Claude
```

## 參考文件

[Model Context Protocol 伺服器端快速設定與實作指南](https://modelcontextprotocol.io/quickstart/server)

[Replicate Flux Schnell 模型 API 開發者文件](https://replicate.com/black-forest-labs/flux-schnell/api/learn-more)