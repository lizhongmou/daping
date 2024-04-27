import React, { memo, useState } from "react"
import { BorderBox11 } from "@jiaminghi/data-view-react"

import { ScreenWrapper } from "./style.js"
import LineCharts from "@/components/LineCharts/index.jsx"

const Screenview = memo(() => {
  // 初始化一个值
  // eslint-disable-next-line no-unused-vars
  const [Daping, useDaping] = useState("大屏自适应")

  return (
    <ScreenWrapper>
      <BorderBox11 title={Daping}>
        <div className="zhengti">
          <div className="first">
            <LineCharts></LineCharts>
          </div>
        </div>
      </BorderBox11>
    </ScreenWrapper>
  )
})

export default Screenview
