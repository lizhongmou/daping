import React, { Suspense } from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { Provider } from "react-redux"
import { HashRouter } from "react-router-dom"
import store from "./store/index" //新添加，接收上面定义的store
import "normalize.css"
import "@/assets/css/index.less"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <Suspense fallback={"loading"}>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </Suspense>
)
