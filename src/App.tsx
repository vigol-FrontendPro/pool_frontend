import {BrowserRouter, Route, Routes} from "react-router-dom"
import "./App.css"
import Pools from "./components/Pools/Pools"
import Home from "./components/Home/Home"
import NoPageFound from "./components/NoPageFound/NoPageFound"
import Layout from "./Layout/Layout"
import Hamams from "./components/Hamams/Hamams"
import Sauna from "./components/Sauna/Sauna"
import Gallery from "./components/Gallery/Gallery";
import Contacts from "./components/Contacts/Contacts";
import ProductsList from "./features/products/ProductsList/ProductsList";
import ProductCard from "./features/products/ProductCard/ProductCard";
import CustomOutlet from "./components/Outlet/CustomOutlet";


const App = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path="/pools" element={<Pools/>}/>
                        <Route path="/hamams" element={<Hamams/>}/>
                        <Route path="/sauny" element={<Sauna/>}/>
                        <Route path="/gallery" element={<Gallery/>}/>
                        <Route path="/contacts" element={<Contacts/>}/>
                        <Route path="/products" element={<ProductsList/>}/>
                        <Route path="/products/:productId" element={<ProductCard/>}/>
                        <Route path="*" element={<NoPageFound/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
