import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Footer from "./component/Footer/Footer";


const App = () => {

    let [cart ,setCart] = useState([])
    return (
        <BrowserRouter>
            <Navbar cart={cart} setCart={setCart}/>
            <Routes>
                <Route path='/' element={<Home cart={cart} setCart={setCart}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App