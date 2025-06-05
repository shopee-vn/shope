import React from "react";
import { Header } from "../../Component/Header";
import Banner from "../../Component/Banner/Banner";
import ProductList from "../../Component/ProductList/ProductList";
import { Footer } from "../../Component/Footer";

function Home() {
    return (
        <>
            <Header />
            <Banner />
            <ProductList />
            <Footer />
        </>
    );
}

export default Home;
