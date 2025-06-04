import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductDetail() {
    const variants = ["Titan - Đen", "Titan - Trắng", "Titan - Sa Mạc"];
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);

    const productImages = [
        "/images/iphone1.jpg",
        "/images/iphone2.jpg",
        "/images/iphone3.jpg",
    ];

    return (
        <div className="grid grid-cols-1 gap-6 p-6 font-medium md:grid-cols-10">
            <div className="md:col-span-4">
                <Swiper className="w-full overflow-hidden rounded-lg">
                    {productImages.map((src, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747925073/image-6_tcyymt.webp"
                                alt={`product-${index}`}
                                className="h-full w-full object-contain"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Thumbnail preview (optional) */}
                <div className="mt-4 flex gap-2">
                    {productImages.map((src, i) => (
                        <img
                            key={i}
                            src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747925074/iphone-5_naq8yo.webp"
                            className="h-[64px] w-[64px] rounded border object-cover"
                            alt={`thumb-${i}`}
                        />
                    ))}
                </div>
            </div>
            {/* Product Info */}
            <div className="p-[16px] md:col-span-6">
                <div className="flex items-center gap-[6px] pb-[12px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="16"
                        fill="none"
                        data-cy="Item_mall_badge_pdp"
                    >
                        <path
                            fill="#D0011B"
                            fill-rule="evenodd"
                            d="M0 2a2 2 0 0 1 2-2h26a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2z"
                            clip-rule="evenodd"
                        />
                        <path
                            fill="#fff"
                            fill-rule="evenodd"
                            d="M11.805 3.001h-.938a.18.18 0 0 0-.14.069l-.576.632q-.06.06-.111.12l-.03.033-.274.3c-.47.478-1.183 1.004-2.23 1.015h-.032c-1.118 0-1.857-.635-2.292-1.086l-.928-1.016A.18.18 0 0 0 4.115 3h-.936A.18.18 0 0 0 3 3.178v9.642a.18.18 0 0 0 .178.178h.937a.18.18 0 0 0 .178-.178V5.007q.336.29.696.55c.59.439 1.415.849 2.488.849h.04a4.2 4.2 0 0 0 2.374-.764H9.9l.071-.056q.12-.087.227-.175l.492-.38v7.789a.18.18 0 0 0 .178.178h.937a.18.18 0 0 0 .178-.178V3.18a.18.18 0 0 0-.178-.18m7.546 3.747h-.936a.18.18 0 0 0-.178.178v.591c-.566-.48-1.341-.81-2.15-.81-1.78 0-3.223 1.41-3.223 3.144s1.443 3.144 3.223 3.144a3.4 3.4 0 0 0 2.15-.794v.618a.18.18 0 0 0 .178.18h.937a.18.18 0 0 0 .178-.178V6.929a.18.18 0 0 0-.18-.18m-3.206 5.09c-1.152 0-2.086-.889-2.086-1.984s.934-1.983 2.086-1.983c1.153 0 2.088.888 2.088 1.983s-.935 1.984-2.088 1.984m7.606.182a.177.177 0 0 0-.129-.214l-.419-.105-.011-.003c-.642-.133-.875-.344-.905-.929V3.18a.18.18 0 0 0-.178-.176h-.865a.177.177 0 0 0-.178.176v7.268c-.058 1.704.916 2.24 1.82 2.44l.431.108a.18.18 0 0 0 .216-.128l.099-.378.008-.031.003-.011zm3.22-.134c.024.04.03.089.02.134l-.108.427-.011.042-.098.378a.18.18 0 0 1-.217.128l-.431-.109c-.904-.2-1.878-.735-1.82-2.439V3.18a.177.177 0 0 1 .178-.176h.865a.177.177 0 0 1 .178.176v7.59c.03.585.264.796.905.929l.012.002.419.106c.045.011.084.04.108.08"
                            clip-rule="evenodd"
                        />
                    </svg>
                    <h1 className="text-[20px] font-medium text-[#000000CC]">
                        Điện thoại Apple iPhone 16 Pro Max 512GB
                    </h1>
                </div>
                <div className="flex items-center justify-between pb-[12px]">
                    <div className="flex items-center gap-[16px] text-[14px] font-medium text-gray-600">
                        <div className="flex gap-[6px] cursor-pointer">
                            <span className="text-[16px] underline ">4.9</span>
                            <span className="text-yellow-500">★★★★★</span>
                        </div>
                        <div className="text-[#767676]">|</div>
                        <div className="flex items-center gap-[6px] cursor-pointer">
                            <span className="text-[16px] underline">328</span>
                            <span>Đánh Giá</span>
                        </div>
                        <div>|</div>
                        <div className="flex items-center gap-[6px]">
                            <span>Đã bán</span>
                            <span className="text-[14px]">1,7k</span>
                        </div>
                    </div>
                    <div className="text-[16px] text-[#0000008A] cursor-pointer">Tố cáo</div>
                </div>
                <div className="flex items-center gap-[4px] bg-[#fafafa] px-[16px] py-[20px] text-[#d0011b]">
                    <span className="text-[20px]">₫</span>
                    <p className="text-[30px]">40.999.000</p>
                </div>

                <div className="flex items-center gap-[22px] text-[14px]">
                    <span className="text-[#757575]">0% TRẢ GÓP</span>
                    <span className="text-[#222222] font-normal">
                        12 tháng x ₫3.416.583 (Lãi suất 0%)
                    </span>
                    <div className="flex items-center gap-[4px] text-[#0055AA] cursor-pointer">
                        <p>Xêm thêm</p>
                        <div className="flex items-center w-[10px] h-[10px]">
                            <FontAwesomeIcon className="w-full h-full" icon={faChevronRight} />
                        </div>
                    </div>
                </div>

                {/* Variant */}
                <div className="mb-4">
                    <p className="mb-2 font-medium">Phân loại</p>
                    <div className="flex flex-wrap gap-2">
                        {variants.map((v) => (
                            <button
                                key={v}
                                onClick={() => setSelectedVariant(v)}
                                className={`rounded border px-4 py-2 ${
                                    selectedVariant === v
                                        ? "border-red-500 text-red-500"
                                        : ""
                                }`}
                            >
                                {v}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity */}
                <div className="mb-4">
                    <p className="mb-2 font-medium">Số lượng</p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() =>
                                setQuantity((q) => Math.max(1, q - 1))
                            }
                            className="rounded border px-3 py-1"
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="rounded border px-3 py-1"
                        >
                            +
                        </button>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-4">
                    <button className="rounded border border-red-500 px-6 py-3 text-red-500 hover:bg-red-100">
                        Thêm Vào Giỏ Hàng
                    </button>
                    <button className="rounded bg-red-500 px-6 py-3 text-white hover:bg-red-600">
                        Mua Ngay
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
