import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";


const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Welcome />}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/blog" element={<Blog/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter