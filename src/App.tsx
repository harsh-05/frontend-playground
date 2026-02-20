import { Route, Routes } from "react-router"
import { SvgLineAnimation } from "./Pages/SvgLineAnimation"
import { Home } from "./Pages/Home"
import { StaggerTextPage } from "./Pages/StaggerTextZoop"
import { RevealTextPage } from "./Pages/RevealTextAnimation"


function App() {
 

  return (
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path="/svg-line-animation" element={<SvgLineAnimation></SvgLineAnimation>}></Route>
      <Route path="/Stagger-Text-Animation" element={<StaggerTextPage></StaggerTextPage>}></Route>
      <Route path= '/Reveal-text-animation' element={<RevealTextPage></RevealTextPage>}></Route>
  </Routes>
  )
}

export default App
