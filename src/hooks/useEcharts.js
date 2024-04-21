import { useEffect, useRef } from "react"
import * as echarts from "echarts"

// 初始化 ECharts 实例
const initEchartsInstance = (divElement) => {
  if (!divElement) return null

  const instance = echarts.init(divElement, null, { renderer: "svg" })

  // 在组件卸载时销毁实例
  return () => {
    instance.dispose()
  }
}

// 自定义 hooks
export default function useEchart() {
  const divRef = useRef(null)
  const echartInstanceRef = useRef(null)

  useEffect(() => {
    const divElement = divRef.current
    const cleanup = initEchartsInstance(divElement)
    echartInstanceRef.current = cleanup

    return () => {
      if (cleanup) cleanup()
    }
  }, []) // 确保只初始化一次

  // 设置图表选项
  function setOption(option) {
    const instance = echartInstanceRef.current
    if (instance) {
      instance.setOption(option)
    }
  }

  // 调整图表大小
  function resizeEchart() {
    const instance = echartInstanceRef.current
    if (instance) {
      instance.resize()
    }
  }

  // 返回 hooks 的公共接口和 DOM 引用
  return {
    setOption,
    resizeEchart,
    divRef
  }
}
