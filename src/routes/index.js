import React from "react"
import { Navigate } from "react-router-dom"

const Home = React.lazy(() => import("@/views/home/index")) // 引用路由所在的文件路径

const routes = [
  {
    path: "/",
    element: <Navigate to="/home" /> // 定义跟目录
  },
  {
    path: "/home", // 定义路由
    element: <Home />
  }
]
export default routes
