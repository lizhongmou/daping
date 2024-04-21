import { memo } from "react"
import { useRoutes } from "react-router-dom"
import routes from "@/routes/index"
// eslint-disable-next-line react/display-name
const App = memo(() => {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <div>{useRoutes(routes)}</div>
})
export default App
