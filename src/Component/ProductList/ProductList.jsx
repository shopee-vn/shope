import React from "react";
import products from "../data";

import { Pagination } from "../Pagination";
import { ProductCard } from "../ProductCard";

function ProductList() {
    return (
        <div className="grid">
            <div className="text-center py-[16px] text-[16px] text-[#ee4d2d]">GỢI Ý HÔM NAY</div>
            <div className="h-[4px] w-full bg-[#ee4d2d] mb-[8px]"></div>
            <div className="grid__row">
                {products.map((item) => (
                    <div key={item.id} className="grid__column-2-4">
                        <ProductCard product={item} />
                    </div>
                ))}
            </div>
            <Pagination />
        </div>
    );
}

export default ProductList;
