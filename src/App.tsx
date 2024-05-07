import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Pools from "./components/Pools/Pools"
import Home from "./components/Home/Home"
import NoSuchPage from "./components/NoSuchPage/NoSuchPage"
import Layout from "./components/Layout/Layout"
import Hamams from "./components/Hamams/Hamams"
import Sauny from "./components/Sauny/Sauny"


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="pools" element={<Pools />} />
            <Route path="hamams" element={<Hamams />} />
            <Route path="sauny" element={<Sauny />} />
            
            <Route path="*" element={<NoSuchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
