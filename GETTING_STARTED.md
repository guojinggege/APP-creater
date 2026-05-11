# 🎯 快速开始指南

## 5 分钟快速开始

### 1. 克隆项目
```bash
cd /Users/guojing/Downloads/ai-mobile-app
```

### 2. 安装依赖
```bash
npm install --legacy-peer-deps
# 或使用 yarn
yarn install --legacy-peer-deps
```

### 3. 启动开发服务器
```bash
npm start
# 或
expo start
```

### 4. 选择运行平台

**iOS (需要 macOS)**
```bash
npm run ios
# 或在 Expo 菜单中按 'i'
```

**Android (需要 Android Studio/模拟器)**
```bash
npm run android
# 或在 Expo 菜单中按 'a'
```

**Web**
```bash
npm run web
# 或在 Expo 菜单中按 'w'
```

**移动设备预览 (推荐)**
1. 下载 Expo Go 应用 (iOS App Store 或 Google Play)
2. 用手机扫描终端显示的 QR 码
3. 应用会在 Expo Go 中加载

---

## 开发工作流

### 文件结构速览

```
ai-mobile-app/
├── src/app/              # 页面和路由
├── src/components/       # UI 组件
├── src/store/            # 状态管理
├── src/utils/            # 工具函数
├── src/types/            # TypeScript 类型
├── app.json              # Expo 配置
├── package.json          # 依赖管理
├── tsconfig.json         # TypeScript 配置
└── tailwind.config.js    # Tailwind CSS 配置
```

### 添加新页面

在 `src/app/` 中创建新的 `.tsx` 文件，Expo Router 会自动路由：

```tsx
// src/app/explore.tsx
import { View, Text } from 'react-native';

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>探索页面</Text>
    </View>
  );
}
```

新页面会自动成为路由：`/explore`

### 添加新组件

在 `src/components/` 中创建新组件：

```tsx
// src/components/Badge.tsx
import { View, Text, StyleSheet } from 'react-native';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'secondary';
}

export const Badge: React.FC<BadgeProps> = ({ label, variant = 'primary' }) => {
  return (
    <View style={[styles.badge, styles[variant]]}>
      <Text style={styles.text}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  primary: {
    backgroundColor: '#ff006e',
  },
  secondary: {
    backgroundColor: '#1a1a1a',
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontWeight: '600',
  },
});
```

然后在 `src/components/index.ts` 中导出：

```ts
export { Badge } from './Badge';
```

### 添加新的 Store

在 `src/store/` 中创建新的 Zustand store：

```ts
// src/store/settingsStore.ts
import { create } from 'zustand';

interface SettingsStore {
  theme: 'dark' | 'light';
  notifications: boolean;
  setTheme: (theme: 'dark' | 'light') => void;
  toggleNotifications: () => void;
}

export const useSettingsStore = create<SettingsStore>((set) => ({
  theme: 'dark',
  notifications: true,
  
  setTheme: (theme) => set({ theme }),
  
  toggleNotifications: () =>
    set((state) => ({ notifications: !state.notifications })),
}));
```

### 使用 Store

```tsx
import { useSettingsStore } from '@/store/settingsStore';

export default function SettingsScreen() {
  const { theme, toggleNotifications } = useSettingsStore();
  
  return (
    <View>
      {/* 使用 store 中的状态 */}
      <Text>当前主题: {theme}</Text>
      <Button title="切换通知" onPress={toggleNotifications} />
    </View>
  );
}
```

---

## 常见任务

### 🔐 集成真实 API

1. 更新 `.env.local`：
```
REACT_APP_API_URL=https://your-api.com
```

2. 在 `src/utils/` 中创建 API 客户端：
```ts
// src/utils/api.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// 添加认证拦截器
apiClient.interceptors.request.use((config) => {
  const token = getStoredToken(); // 从你的 store 获取
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

3. 在 Store 中使用：
```ts
import { apiClient } from '@/utils/api';

export const useContentStore = create<ContentStore>((set) => ({
  // ...
  fetchContents: async () => {
    const { data } = await apiClient.get('/contents');
    set({ contents: data });
  },
}));
```

### 💾 本地存储

使用 `AsyncStorage` 进行持久化：

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';

// 保存
await AsyncStorage.setItem('key', JSON.stringify(value));

// 读取
const value = await AsyncStorage.getItem('key');

// 删除
await AsyncStorage.removeItem('key');
```

### 🎨 自定义主题

编辑 `tailwind.config.js`：

```js
theme: {
  extend: {
    colors: {
      'brand-pink': '#ff006e',
      'brand-cyan': '#00d4ff',
    },
  },
}
```

然后在组件中使用：

```tsx
<View className="bg-brand-pink" />
```

### 📱 响应式设计

使用 Tailwind 的响应式类：

```tsx
<View className="px-4 sm:px-6 lg:px-8">
  <Text className="text-lg sm:text-xl lg:text-2xl">
    响应式文本
  </Text>
</View>
```

### 🔄 状态调试

使用 React DevTools：

```bash
# 安装
npm install react-devtools

# 运行
react-devtools
```

### 📊 性能分析

启用 Performance Monitor：

```tsx
// App.tsx
import { PerformanceMonitor } from 'react-native-performance-monitor';

export default function App() {
  return (
    <>
      <PerformanceMonitor />
      {/* 你的应用 */}
    </>
  );
}
```

---

## 调试技巧

### 查看日志

```bash
# 查看 Expo 日志
npm start -- --clear

# 或在运行中按 'j' 打开日志
```

### 使用 debugger

```tsx
// 在代码中添加
debugger;

// 然后在 Chrome 中打开
// chrome://inspect
```

### React DevTools

```tsx
// 在 App.tsx 中
import { useShakeHandler } from 'react-native';

// Shake 设备触发 DevTools 菜单
```

### 网络调试

```tsx
// 查看网络请求
console.log('API 请求:', apiClient.defaults);

// 或使用 Charles/Fiddler 进行中间人检查
```

---

## 测试

### 单元测试

```bash
npm install --save-dev jest @testing-library/react-native
```

```tsx
// __tests__/Button.test.tsx
import { render } from '@testing-library/react-native';
import { Button } from '@/components';

test('Button renders correctly', () => {
  const { getByText } = render(
    <Button title="测试" onPress={() => {}} />
  );
  expect(getByText('测试')).toBeTruthy();
});
```

### E2E 测试

```bash
npm install --save-dev detox detox-cli
```

---

## 常见问题

### Q: 如何修改应用图标？
A: 替换 `assets/icon.png` (1024x1024) 和 `assets/adaptive-icon.png`

### Q: 如何修改应用名称？
A: 在 `app.json` 中修改 `"name"` 字段

### Q: 如何修改颜色方案？
A: 编辑 `tailwind.config.js` 中的颜色配置

### Q: 如何离线开发？
A: 运行 `npm run ios` 或 `npm run android` 在模拟器中本地开发

### Q: 如何增加字体？
A: 将字体文件放在 `assets/fonts/`，在 `app.json` 中配置

### Q: 如何处理权限？
A: 使用 `expo-permissions` 或 `react-native-permissions`

---

## 下一步

- 📖 阅读 [ARCHITECTURE.md](./ARCHITECTURE.md) 了解项目架构
- 🚀 阅读 [DEPLOYMENT.md](./DEPLOYMENT.md) 了解部署流程
- 📚 查看 [README.md](./README.md) 获取完整文档
- 💬 加入社区讨论
- 🐛 报告 Bug 和功能建议

---

**祝你开发愉快！🎉**
