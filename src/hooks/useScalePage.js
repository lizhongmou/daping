import React, { useState, useEffect } from "react"

export default function App() {
  const [scaleRatio, setScaleRatio] = useState(1)

  useEffect(() => {
    function handleResize() {
      const targetX = 1920
      const targetY = 1080
      const targetRatio = 16 / 9

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
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <div
      style={{ transform: `scale(${scaleRatio})`, transformOrigin: "top left" }}
    >
      {/* 这里是你的应用内容 */}
    </div>
  )
}
