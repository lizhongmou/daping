import { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/routes/index"
// import useScalePage from "@/hooks/useScalePage"
import useScalePage from "@/hooks/useScalePage"
import useScaleStyle from "@/hooks/useScaleStyle"

const App = memo(() => {
  // 使用大屏适配的 Hook
  const scaleRatio = useScalePage({
    targetX: 1920,
    targetY: 1080,
    targetRatio: 16 / 9
  })

  // 使用生成缩放样式的 Hook
  const scaleStyle = useScaleStyle(scaleRatio)
  console.log(window.screen.width, window.screen.height)
  // scaleStyle 这个值必须在这里传递
  return <div style={scaleStyle}>{useRoutes(routes)}</div>
})
export default App
