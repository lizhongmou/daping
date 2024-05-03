// useScaleStyle.js
import { useMemo } from "react"

const useScaleStyle = (scaleRatio) => {
  const style = useMemo(() => {
    return {
      transform: `scale(${scaleRatio})`,
      transformOrigin: "top left"
    }
  }, [scaleRatio])

  return style
}

export default useScaleStyle
