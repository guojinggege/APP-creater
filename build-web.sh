#!/bin/bash

# AI Creator Platform - Web 构建脚本

set -e

echo "🚀 开始构建 Web 版本..."
echo "========================="

# 清空旧的构建
echo "🧹 清理旧的构建文件..."
rm -rf dist/

# 构建
echo "📦 开始构建..."
expo export --platform web

# 检查构建结果
if [ ! -d "dist" ]; then
    echo "❌ 构建失败：dist 目录不存在"
    exit 1
fi

echo ""
echo "✅ Web 版本构建完成！"
echo ""
echo "📂 输出目录: dist/"
echo "📊 文件大小:"
du -sh dist/
echo ""
echo "🚀 部署选项:"
echo ""
echo "1️⃣  Vercel:"
echo "   vercel --prod"
echo ""
echo "2️⃣  Netlify:"
echo "   netlify deploy --prod --dir=dist"
echo ""
echo "3️⃣  自托管:"
echo "   scp -r dist/* user@your-server:/var/www/app"
echo ""
