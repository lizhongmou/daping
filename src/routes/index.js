import React from "react"
import { Navigate } from "react-router-dom"

const Screenview = React.lazy(() => import("@/views/Screenview/index")) // 引用路由所在的文件路径

const routes = [
  {
    path: "/",
    element: <Navigate to="/Screenview" /> // 定义跟目录
  },
  {
    path: "/Screenview", // 定义路由
    element: <Screenview />
  }
]
export default routes
