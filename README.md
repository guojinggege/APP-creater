# AI Creator Platform - 高端创作者社区

一个基于 React Native + Expo 构建的高端 AI 泛娱乐创作者社区平台，支持 iOS、Android 和 Web 跨平台部署。

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![React Native](https://img.shields.io/badge/react--native-0.74-green.svg)
![Expo](https://img.shields.io/badge/expo-51-blue.svg)
![TypeScript](https://img.shields.io/badge/typescript-5.3-blue.svg)

## 📱 平台特性

### 产品定位
- 高端 AI 泛娱乐创作者社区平台
- 深色高级 UI，神秘感与夜店感并存
- 类似 OnlyFans/Fansly 的沉浸式布局
- 强调付费订阅与创作者生态

### 主要功能
- ✨ 多频道内容（素人、留学生、网红、AI数字人等）
- 🎬 短视频与图片内容支持
- 💬 实时私信与社区互动
- 👥 创作者订阅系统
- 💰 钱包与打赏系统
- 🤖 AI 聊天功能
- 📊 用户等级与粉丝系统
- 🔔 实时通知中心

### 内容频道
1. 素人原创
2. 留学生
3. 网红博主
4. AI数字人
5. Cosplay
6. 情感陪伴
7. 高端写真
8. 热门推荐
9. 最新发布
10. VIP专区

## 🚀 快速开始

### 前置条件
- Node.js >= 16.x
- npm 或 yarn
- Expo CLI: `npm install -g expo-cli`
- 用于 iOS 开发的 Xcode (macOS)
- 用于 Android 开发的 Android Studio

### 安装步骤

1. **克隆项目**
```bash
cd /Users/guojing/Downloads/ai-mobile-app
```

2. **安装依赖**
```bash
npm install
# 或
yarn install
```

3. **创建环境变量文件**
```bash
cp .env.example .env.local
# 编辑 .env.local 并填入您的配置
```

4. **启动开发服务器**
```bash
npm start
```

### 运行应用

**iOS**
```bash
npm run ios
```

**Android**
```bash
npm run android
```

**Web**
```bash
npm run web
```

## 🛠 技术栈

### 核心框架
- **React Native** - 跨平台移动应用框架
- **Expo** - React Native 开发工具链
- **Expo Router** - 文件系统路由

### UI 与样式
- **NativeWind** - Tailwind CSS for React Native
- **Tailwind CSS** - 工具优先的 CSS 框架
- **Lucide React Native** - 美观的图标库

### 状态管理
- **Zustand** - 轻量级状态管理库
- **React Query** - 服务器状态管理

### 开发工具
- **TypeScript** - 类型安全的 JavaScript
- **Babel** - JavaScript 编译器
- **EAS Build** - Expo 云构建服务

## 📁 项目结构

```
ai-mobile-app/
├── src/
│   ├── app/                    # Expo Router 页面
│   │   ├── (tabs)/            # 底部导航页面
│   │   │   ├── index.tsx      # 首页
│   │   │   ├── discover.tsx   # 发现页
│   │   │   ├── chat.tsx       # 聊天页
│   │   │   ├── creator.tsx    # 创作者页
│   │   │   ├── profile.tsx    # 个人资料页
│   │   │   └── _layout.tsx    # 底部导航布局
│   │   ├── auth/              # 认证页面
│   │   │   ├── index.tsx      # 登录页
│   │   │   ├── forgot-password.tsx
│   │   │   └── _layout.tsx
│   │   └── _layout.tsx        # 根布局
│   ├── components/            # 可复用 UI 组件
│   │   ├── Button.tsx         # 按钮组件
│   │   ├── Card.tsx           # 卡片组件
│   │   ├── Avatar.tsx         # 头像组件
│   │   ├── Loader.tsx         # 加载器
│   │   └── index.ts           # 组件导出
│   ├── store/                 # Zustand 状态管理
│   │   ├── authStore.ts       # 认证状态
│   │   ├── contentStore.ts    # 内容状态
│   │   └── notificationStore.ts # 通知状态
│   ├── hooks/                 # 自定义 Hooks
│   ├── utils/                 # 工具函数
│   │   └── format.ts          # 格式化工具
│   └── types/                 # TypeScript 类型
│       └── index.ts           # 类型定义
├── assets/                    # 静态资源
├── App.tsx                    # 应用入口
├── app.json                   # Expo 配置
├── package.json               # 项目依赖
├── tsconfig.json              # TypeScript 配置
├── babel.config.js            # Babel 配置
├── tailwind.config.js         # Tailwind 配置
└── README.md                  # 项目文档
```

## 🎨 UI 设计理念

### 色彩方案
- **主色**: #ff006e（粉红）- 品牌标识色
- **辅助色**: #00d4ff（青蓝）- 强调色
- **背景**: #0a0a0a（纯黑）- 深色主题
- **文字**: #ffffff（白）- 主文本
- **辅文**: #b0b0b0（灰）- 副文本

### 设计特点
- 🌙 全黑深色主题，保护眼睛
- ✨ 磨砂玻璃效果，高级感十足
- 🎯 卡片式布局，内容清晰
- 💫 流畅动效，提升体验
- 🔮 神秘感与科技感结合
- 💎 强调 VIP 与高端会员

## 📱 页面导航

### 认证流程
```
Login/Signup → Forgot Password → Home
```

### 主应用导航（底部 Tab）
1. **首页 (Home)** - Feed流、Banner、热门推荐
2. **发现 (Discover)** - 搜索、分类、热门创作者
3. **聊天 (Chat)** - 私信、官方消息
4. **创作者 (Creator)** - 精选推荐、热门创作者、分类
5. **个人资料 (Profile)** - 用户信息、钱包、设置

## 🔐 认证与安全

### 支持的认证方式
- 邮箱/密码登录
- 忘记密码恢复
- 第三方登录（计划中）

### 安全措施
- 所有敏感操作使用 HTTPS
- 密码加密存储
- 令牌过期机制
- 环境变量管理敏感信息

## 💰 支付与钱包

### 支持的支付方式
- 信用卡
- PayPal
- 支付宝（中国）
- 微信支付（中国）

### 钱包功能
- 余额查询
- 充值
- 提现
- 交易历史

## 📊 API 集成

### 计划的后端服务
```
GET    /api/contents          # 获取内容列表
GET    /api/creators          # 获取创作者
GET    /api/notifications     # 获取通知
POST   /api/auth/login        # 登录
POST   /api/auth/signup       # 注册
POST   /api/subscriptions     # 创建订阅
```

## 🚢 部署指南

### 准备工作
1. 创建 Expo 账户：https://expo.dev
2. 创建 GitHub 仓库
3. 创建 Vercel 账户：https://vercel.com

### iOS 部署

**构建**
```bash
eas build --platform ios
```

**App Store 提交**
```bash
eas submit --platform ios
```

### Android 部署

**构建**
```bash
eas build --platform android
```

**Google Play 提交**
```bash
eas submit --platform android
```

### Web 部署（Vercel）

1. **导出 Web 版本**
```bash
expo export --platform web
```

2. **推送到 GitHub**
```bash
git add .
git commit -m "Deploy to Vercel"
git push origin main
```

3. **在 Vercel 中导入项目**
   - 访问 https://vercel.com/new
   - 导入 GitHub 仓库
   - 设置构建命令：`expo export --platform web`
   - 输出目录：`dist`

4. **部署**
```bash
vercel --prod
```

## 📲 手机预览

### Expo Go 预览
1. 下载 Expo Go 应用
2. 运行 `npm start`
3. 使用手机扫描 QR 码

### EAS 预览
```bash
eas build --platform ios --profile preview
eas build --platform android --profile preview
```

## 🔄 常见问题

### Q: 如何修改 API 端点？
A: 编辑 `.env.local` 文件，修改 `REACT_APP_API_URL`

### Q: 如何添加新页面？
A: 在 `src/app/` 中创建新的 `.tsx` 文件，Expo Router 会自动路由

### Q: 如何自定义主题色？
A: 编辑 `tailwind.config.js` 中的 `theme.extend.colors`

### Q: 如何集成真实 API？
A: 在 `src/store/` 中替换 mock 数据，使用 React Query 进行请求

## 📚 学习资源

- [Expo 文档](https://docs.expo.dev)
- [React Native 文档](https://reactnative.dev)
- [Expo Router 文档](https://docs.expo.dev/routing/introduction)
- [NativeWind 文档](https://www.nativewind.dev)
- [Zustand 文档](https://github.com/pmndrs/zustand)
- [React Query 文档](https://tanstack.com/query/latest)

## 🤝 贡献指南

欢迎贡献！请遵循以下步骤：

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详见 [LICENSE](LICENSE) 文件。

## 📞 支持与反馈

- 📧 邮件: support@aicreator.platform
- 💬 Discord: [加入服务器]
- 🐛 Bug 报告: [GitHub Issues]
- 💡 功能建议: [GitHub Discussions]

## 🙏 致谢

感谢所有贡献者和支持者的帮助！

---

**最后更新**: 2026年5月11日
**版本**: 1.0.0
**状态**: 🚀 生产就绪
