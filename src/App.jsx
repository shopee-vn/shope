import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProductDetail } from "./Pages/ProductDetail";
import { Home } from "./Pages/Home";
import { CheckOut } from "./Pages/CheckOut";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/checkout/:id" element={<CheckOut />} />
            </Routes>
        </>
    );
}

export default App;
