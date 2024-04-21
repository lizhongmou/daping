// 安装 pnpm add @craco/craco 才能使用这个文件
// 相当于 vite.config.js

const path = require("path")
const CracoLessPlugin = require("craco-less")

const resolve = (pathname) => path.resolve(__dirname, pathname)

module.exports = {
  // less
  plugins: [
    {
      plugin: CracoLessPlugin
    }
  ],
  // webpack
  webpack: {
    alias: {
      // 配置别名
      "@": resolve("src"),
      components: resolve("src/components"),
      utils: resolve("src/utils")
    }
  }
}
