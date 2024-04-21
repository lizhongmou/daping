import React, { memo } from "react"
import useScalePage from "@/hooks/useScalePage"
import { ScreenWrapper } from "./style.js"

const Screenview = memo(() => {
  const options = {
    targetX: 1920,
    targetY: 1080,
    targetRatio: 16 / 9
  }
  useScalePage(options)
  return (
    <ScreenWrapper>
      1234
      <div className="one">1</div>
      <div className="two">2</div>
      <div className="three">3</div>
      <div className="fire">4</div>
      <div className="four">5</div>
      <div className="six">6</div>
    </ScreenWrapper>
  )
})

export default Screenview
