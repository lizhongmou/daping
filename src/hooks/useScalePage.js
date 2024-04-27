// useScalePage.js
import { useState, useEffect } from "react"
import _ from "lodash"

const useScalePage = (option) => {
  const [scaleRatio, setScaleRatio] = useState(1)

  useEffect(() => {
    const resizeFunc = _.throttle(() => {
      const targetX = option.targetX || 1920
      const targetY = option.targetY || 1080
      const targetRatio = option.targetRatio || 16 / 9

      const currentX = window.innerWidth
      const currentY = window.innerHeight

      const currentRatio = currentX / currentY

      let newScaleRatio = 1

      if (currentRatio > targetRatio) {
        newScaleRatio = currentY / targetY
      } else {
        newScaleRatio = currentX / targetX
      }

      setScaleRatio(newScaleRatio)
    }, 100)

    resizeFunc() // 初始调用一次

    window.addEventListener("resize", resizeFunc)

    return () => {
      window.removeEventListener("resize", resizeFunc)
    }
  }, [option])

  return scaleRatio
}

export default useScalePage
