#!/bin/bash

# AI Creator Platform - 开发环境设置脚本

echo "🚀 AI Creator Platform - 开发环境设置"
echo "======================================"
echo ""

# 检查 Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js 未安装"
    echo "请访问: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js 已安装: $(node --version)"
echo ""

# 检查 npm
if ! command -v npm &> /dev/null; then
    echo "❌ npm 未安装"
    exit 1
fi

echo "✅ npm 已安装: $(npm --version)"
echo ""

# 检查 Expo CLI
if ! command -v expo &> /dev/null; then
    echo "⚠️  Expo CLI 未安装，正在安装..."
    npm install -g expo-cli
fi

echo "✅ Expo CLI 已安装"
echo ""

# 安装依赖
echo "📦 安装项目依赖..."
npm install --legacy-peer-deps

if [ $? -ne 0 ]; then
    echo "❌ 依赖安装失败"
    exit 1
fi

echo "✅ 依赖安装完成"
echo ""

# 创建环境文件
if [ ! -f .env.local ]; then
    echo "🔧 创建 .env.local 文件..."
    cp .env.example .env.local
    echo "✅ 已创建 .env.local，请编辑配置"
fi

echo ""
echo "🎉 设置完成！"
echo ""
echo "现在你可以运行以下命令之一："
echo ""
echo "📱 启动 iOS 开发服务器:"
echo "   npm run ios"
echo ""
echo "🤖 启动 Android 开发服务器:"
echo "   npm run android"
echo ""
echo "🌐 启动 Web 开发服务器:"
echo "   npm run web"
echo ""
echo "🚀 启动通用 Expo 服务器:"
echo "   npm start"
echo ""
