import React, { useRef, useEffect, useState } from "react"
import * as echarts from "echarts"

const LineCharts = () => {
  const chartRef = useRef(null)
  const [myChart, setMyChart] = useState(null)

  useEffect(() => {
    if (!myChart) {
      const chartInstance = echarts.init(chartRef.current, null, {
        renderer: "svg"
      })
      setMyChart(chartInstance)
    }

    return () => {
      if (myChart) {
        myChart.dispose()
      }
    }
  }, [myChart])

  useEffect(() => {
    if (myChart) {
      const option = {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line"
          }
        ]
      }

      myChart.setOption(option)
    }
  }, [myChart])

  return <div ref={chartRef} style={{ width: "100%", height: "100%" }} />
}

export default LineCharts
