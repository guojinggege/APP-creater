# 📦 部署指南

## 目录
1. [iOS 部署](#ios-部署)
2. [Android 部署](#android-部署)
3. [Web 部署](#web-部署)
4. [EAS 构建](#eas-构建)

## iOS 部署

### 前置条件
- macOS
- Xcode 14+
- Apple Developer Account

### 步骤 1: 准备证书和配置文件

```bash
# 配置 EAS CLI
eas configure

# 创建新的 provisioning profile
eas credentials
```

### 步骤 2: 构建

```bash
# 为 App Store 构建
eas build --platform ios --auto-submit

# 或者创建 adhoc 版本用于测试
eas build --platform ios --profile preview
```

### 步骤 3: 上传到 App Store

```bash
# 自动提交到 App Store
eas submit --platform ios --latest
```

## Android 部署

### 前置条件
- Android Studio
- Google Play Developer Account
- Keystore 文件

### 步骤 1: 创建 Keystore

```bash
# 如果没有 keystore，创建新的
keytool -genkey -v -keystore ai-creator-platform.keystore \
  -keyalg RSA -keysize 2048 -validity 10000 \
  -alias ai-creator-platform
```

### 步骤 2: 配置 EAS

编辑 `eas.json`：

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "production": {
      "android": {
        "buildType": "apk"
      }
    }
  }
}
```

### 步骤 3: 构建

```bash
# 为 Google Play 构建
eas build --platform android --auto-submit

# 或者创建 APK 用于侧载测试
eas build --platform android --profile preview
```

### 步骤 4: 上传到 Google Play

```bash
# 自动提交到 Google Play
eas submit --platform android --latest
```

## Web 部署

### 使用 Vercel

#### 1. 推送到 GitHub

```bash
git remote add origin https://github.com/YOUR_USERNAME/ai-mobile-app.git
git branch -M main
git push -u origin main
```

#### 2. 在 Vercel 中导入项目

1. 访问 [vercel.com](https://vercel.com)
2. 点击 "New Project"
3. 导入 GitHub 仓库
4. 配置项目设置：

**构建设置**：
- 框架：Other
- 构建命令：`npm run build:web --legacy-peer-deps`
- 输出目录：`dist`

**环境变量**：
```
REACT_APP_API_URL=your_api_url
EXPO_PUBLIC_API_URL=your_api_url
```

#### 3. 部署

```bash
vercel --prod
```

#### 4. 自定义域名

1. 在 Vercel 项目设置中进入 "Domains"
2. 添加你的自定义域名
3. 按照说明配置 DNS

### 使用 Netlify

```bash
# 安装 Netlify CLI
npm install -g netlify-cli

# 构建
npm run build:web

# 部署
netlify deploy --prod --dir=dist
```

### 使用自托管服务器

```bash
# 构建
npm run build:web

# 将 dist/ 文件夹上传到你的服务器
scp -r dist/* user@your-server:/var/www/aicreator

# 配置 Nginx（如果使用 Nginx）
# 在 /etc/nginx/sites-available/default 中添加：
# location / {
#   try_files $uri $uri/ /index.html;
# }
```

## EAS 构建

### 初始化 EAS

```bash
eas init
```

这会创建 `eas.json` 文件。

### eas.json 配置示例

```json
{
  "cli": {
    "version": ">= 5.0.0"
  },
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {
      "ios": {
        "ascAppId": "YOUR_APP_ID"
      },
      "android": {
        "serviceAccountKeyPath": "./android-api-key.json"
      }
    }
  }
}
```

### 常用命令

```bash
# 查看构建队列
eas builds

# 查看特定构建的详情
eas builds --platform ios --limit 1

# 查看构建日志
eas logs

# 取消构建
eas builds:cancel BUILD_ID

# 查看提交历史
eas submissions

# 重新提交
eas submit --platform ios --latest
```

## CI/CD 配置

### GitHub Actions

项目已包含自动部署工作流。每当你推送到 `main` 分支时，自动：

1. 安装依赖
2. 构建 Web 版本
3. 部署到 Vercel

**所需的 GitHub Secrets**：
- `VERCEL_TOKEN`: Vercel API token
- `VERCEL_ORG_ID`: Vercel 组织 ID
- `VERCEL_PROJECT_ID`: Vercel 项目 ID

### 设置 GitHub Secrets

1. 进入 GitHub 仓库设置
2. 点击 "Secrets and variables" > "Actions"
3. 添加每个 secret

## 版本管理

### 更新版本号

编辑 `app.json`：

```json
{
  "expo": {
    "version": "1.1.0",
    "ios": {
      "buildNumber": "2"
    },
    "android": {
      "versionCode": 2
    }
  }
}
```

## 故障排除

### iOS 构建失败

```bash
# 清除 EAS 缓存
eas build --platform ios --clear-cache

# 检查证书
eas credentials
```

### Android 构建失败

```bash
# 清除 gradle 缓存
cd android && ./gradlew clean

# 重新构建
eas build --platform android --clear-cache
```

### Web 构建失败

```bash
# 清除 node_modules
rm -rf node_modules
npm install --legacy-peer-deps

# 尝试构建
npm run build:web

# 检查构建输出
ls -la dist/
```

## 监控和分析

### 性能监控

```bash
# 安装 Sentry SDK
npm install @sentry/expo @sentry/tracing

# 在 app.json 中配置
{
  "plugins": [
    ["@sentry/expo"]
  ]
}
```

### 用户分析

```bash
# 安装 Segment SDK
npm install @segment/analytics-react-native

# 在 App.tsx 中初始化
```

## 联系和支持

- 📧 部署问题: deploy@aicreator.platform
- 🐛 Bug 报告: GitHub Issues
- 💬 讨论: GitHub Discussions
