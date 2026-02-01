import { Route, Routes } from "react-router"
import { SvgLineAnimation } from "./Pages/SvgLineAnimation"
import { Home } from "./Pages/Home"


function App() {
 

  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/svg-line-animation" element={<SvgLineAnimation></SvgLineAnimation>}></Route>
  </Routes>
  )
}

export default App
