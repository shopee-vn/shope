import { useState } from "react";
import "./App.css";
import { Header } from "./Component/Header";
import { ProductCard } from "./Component/ProductCard";
import { Pagination } from "./Component/Pagination";
import { Footer } from "./Component/Footer";
import Banner from "./Component/Banner/Banner";
import ProductList from "./Component/ProductList/ProductList";
import { ProductDetail } from "./Pages/ProductDetail";

function App() {
    return (
        <>
            <Header />
            {/* <Banner />
            <ProductList /> */}
            <ProductDetail/>
            <Footer />
        </>
    );
}

export default App;
