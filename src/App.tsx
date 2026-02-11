import { Route, Routes } from "react-router"
import { SvgLineAnimation } from "./Pages/SvgLineAnimation"
import { Home } from "./Pages/Home"
import { StaggerTextPage } from "./Pages/StaggerTextZoop"


function App() {
 

  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/svg-line-animation" element={<SvgLineAnimation></SvgLineAnimation>}></Route>
      <Route path="/Stagger-Text-Animation" element={<StaggerTextPage></StaggerTextPage>}></Route>
  </Routes>
  )
}

export default App
