import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import { format, addDays } from "date-fns";
import { vi } from "date-fns/locale";

import "swiper/css/thumbs";
import "swiper/css";

import products from "../../Component/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ProductList from "../../Component/ProductList/ProductList";
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";

function ProductDetail() {
    const navigate = useNavigate();
    const today = new Date();
    const startDate = addDays(today, 2);
    const endDate = addDays(today, 6);
    const formatDate = (date) => format(date, "d 'Th'MM", { locale: vi });
    const { id } = useParams();
    const product = products.find((item) => item.id === Number(id));

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const typesPhone = ["Titan - Đen", "Titan - Trắng", "Titan - Sa Mạc"];
    const versionPhone = ["512", "256", "128"];

    const originalPrice = Number(product.price.replace(/\./g, ""));
    const [selectedVersion, setSelectedVersion] = useState("512");
    const [finalPrice, setFinalPrice] = useState(originalPrice);

    const [quantity, setQuantity] = useState(1);
    const [selectedTypes, setSelectedTypes] = useState(typesPhone[0]);

    const imgSocial = [
        "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749092234/remove-4_kdbbjg.png",
        "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749092481/remove-5_uzsdnq.png",
        "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749092234/remove-2_h1qn6y.png",
        "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749092234/remove-1_awz4xe.png",
    ];

    useEffect(() => {
        if (selectedVersion === "512") {
            setFinalPrice(originalPrice);
        } else if (selectedVersion === "256") {
            setFinalPrice(Math.round(originalPrice * 0.95));
        } else if (selectedVersion === "128") {
            setFinalPrice(Math.round(originalPrice * 0.9));
        }
    }, [selectedVersion, originalPrice]);

    function formatCurrency(number) {
        return number.toLocaleString("vi-VN"); // Format thành "40.999.000"
    }

    const handleBuyNow = () => {
        navigate(`/checkout/${product.id}`, {
            state: {
                version: selectedVersion,
                finalPrice: finalPrice,
            },
        });
    };

    return (
        <>
            <Header />
            <div className="grid grid-cols-1 gap-6 p-6 font-medium font-normal md:grid-cols-10">
                <div className="md:col-span-4">
                    <div>
                        <Swiper
                            modules={[Thumbs]}
                            navigation
                            thumbs={{ swiper: thumbsSwiper }}
                            className="w-full cursor-pointer overflow-hidden rounded-lg"
                        >
                            {product.imageList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.image}
                                        alt={`product-${index}`}
                                        className="h-full w-full object-contain"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={1}
                            slidesPerView={6}
                        >
                            {product.imageList.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <img
                                        src={item.image}
                                        alt={`thumb-${index}`}
                                        className="h-[64px] w-[64px] rounded border object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="flex items-center justify-around py-[32px] text-[16px] ">
                        <div className="flex items-center gap-[6px]">
                            <div>Chia sẻ : </div>
                            <div className="flex cursor-pointer items-center gap-[4px]">
                                {imgSocial.map((item, index) => (
                                    <img
                                        key={index}
                                        src={item}
                                        alt=""
                                        className="h-[24px] w-[24px] rounded-full"
                                    />
                                ))}
                            </div>
                        </div>
                        <div>|</div>
                        <div className="flex items-center gap-[8px]">
                            <div className="cursor-pointer">
                                <svg width="24" height="20" class="vgMiJB">
                                    <path
                                        d="M19.469 1.262c-5.284-1.53-7.47 4.142-7.47 4.142S9.815-.269 4.532 1.262C-1.937 3.138.44 13.832 12 19.333c11.559-5.501 13.938-16.195 7.469-18.07z"
                                        stroke="#FF424F"
                                        stroke-width="1.5"
                                        fill="none"
                                        fill-rule="evenodd"
                                        stroke-linejoin="round"
                                    ></path>
                                </svg>
                            </div>
                            <div>Đã thích (1,7k)</div>
                        </div>
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
                            {product.name}
                        </h1>
                    </div>
                    <div className="flex items-center justify-between pb-[12px]">
                        <div className="flex items-center gap-[16px] text-[14px] font-medium text-gray-600">
                            <div className="flex cursor-pointer gap-[6px]">
                                <span className="text-[16px] underline ">
                                    {product.rating}
                                </span>
                                <span className="text-yellow-500">★★★★★</span>
                            </div>
                            <div className="text-[#767676]">|</div>
                            <div className="flex cursor-pointer items-center gap-[6px]">
                                <span className="text-[16px] underline">
                                    328
                                </span>
                                <span>Đánh Giá</span>
                            </div>
                            <div>|</div>
                            <div className="flex items-center gap-[6px]">
                                <span>Đã bán</span>
                                <span className="text-[14px]">
                                    {product.sold}k
                                </span>
                            </div>
                        </div>
                        <div className="cursor-pointer text-[16px] text-[#0000008A]">
                            Tố cáo
                        </div>
                    </div>
                    <div className="flex items-center gap-[4px] bg-[#fafafa] px-[16px] py-[20px] text-[#d0011b]">
                        <span className="text-[20px]">₫</span>
                        <p className="text-[30px]">
                            ₫{formatCurrency(finalPrice)}
                        </p>
                    </div>

                    <div className="flex items-center gap-[22px] pb-[24px] text-[14px]">
                        <span className="text-[#757575]">0% TRẢ GÓP</span>
                        <span className="font-normal text-[#222222]">
                            12 tháng x ₫{product.spayLater} (Lãi suất 0%)
                        </span>
                        <div className="flex cursor-pointer items-center gap-[4px] text-[#0055AA]">
                            <p>Xêm thêm</p>
                            <div className="flex h-[10px] w-[10px] items-center">
                                <FontAwesomeIcon
                                    className="h-full w-full"
                                    icon={faChevronRight}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-[28px] text-[14px]">
                        <span className="text-[#757575]">Vận Chuyển</span>
                        <div className="flex cursor-pointer gap-[6px]">
                            <div className="flex h-[20px] w-[20px] items-start">
                                <svg
                                    className="h-full w-full"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fill="#26AA99"
                                        fill-rule="evenodd"
                                        d="M1.167 3.333a.5.5 0 0 0-.5.5V11.5a.5.5 0 0 0 .5.5h1.626A1.708 1.708 0 0 0 6.2 12h4.375a1.708 1.708 0 0 0 3.407 0h1.149a.5.5 0 0 0 .468-.675l-2.145-5.723a.5.5 0 0 0-.468-.324h-2.82V3.833a.5.5 0 0 0-.5-.5zM13.746 11h.663l-1.77-4.722h-2.472V11h.645a1.707 1.707 0 0 1 2.934 0m-9.25-.833c-.623 0-1.169.334-1.467.833H1.667V4.333h7.5V11H5.964a1.71 1.71 0 0 0-1.467-.833m0 1a.708.708 0 1 0 0 1.415.708.708 0 0 0 0-1.415m7.075.707a.708.708 0 1 1 1.416.001.708.708 0 0 1-1.416 0"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="font-normal">
                                <div className="flex items-center gap-[4px]">
                                    <p>
                                        Nhận từ {formatDate(startDate)} -{" "}
                                        {formatDate(endDate)}
                                    </p>
                                    <FontAwesomeIcon
                                        className="h-[10px] w-[10px]"
                                        icon={faChevronRight}
                                    />
                                </div>
                                <p className="py-[2px]">Miễn phí vận chuyển</p>
                                <p className="text-[12px] text-[#0000008A]">
                                    Tặng voucher đ15.000 nếu đơn giao sau thời
                                    gian trên.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-[28px] pb-[24px] pt-[24px] text-[14px]">
                        <div className="font-normal text-[#757575]">
                            <p className="">An Tâm Mua</p>
                            <p className="">Sắm Cùng</p>
                            <p className="">Shopee</p>
                        </div>
                        <div className="flex cursor-pointer items-center gap-[8px] text-[#222222]">
                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path fill="#fff" d="M0 0h20v20H0z" />
                                    <mask id="a" fill="#fff">
                                        <path d="M9.66 2.685a.75.75 0 0 1 .678 0c.854.433 3.3 1.477 7.01 1.478.332 0 .613.25.627.581.069 1.565.101 5.904-1.386 8.903-.012.02-.794 1.418-1.947 2.308-.011.008-1.655 1.251-4.641 2.544H10c-2.956-1.278-4.596-2.509-4.641-2.543l-.003-.002c-1.148-.888-1.927-2.276-1.945-2.308-1.486-2.998-1.454-7.337-1.387-8.902a.62.62 0 0 1 .628-.581C6.36 4.162 8.804 3.119 9.66 2.685" />
                                    </mask>
                                    <path
                                        fill="#d0011b"
                                        d="m16.59 13.647 1.09.609.016-.027.013-.027zm-1.948 2.308.755.996.009-.007zm-11.23-2.309-1.12.556.013.027.015.027zM10 18.5l-.497-1.147zm-4.642-2.543.753-.998zm-.003-.002.764-.99zM17.348 4.163v1.25zM10 18.5l-.497 1.147zm.338-15.815L9.773 3.8c.987.5 3.625 1.612 7.575 1.613v-2.5c-3.472-.001-5.724-.978-6.445-1.343zm7.637 2.06-1.248.054c.032.746.056 2.157-.105 3.732-.163 1.592-.506 3.255-1.153 4.56l1.12.556 1.12.555c.84-1.694 1.224-3.698 1.4-5.417.177-1.736.15-3.276.115-4.095zm-1.386 8.902-1.091-.61c.01-.018-.16.288-.46.696-.308.417-.712.887-1.16 1.233l.764.99.764.988c1.37-1.058 2.255-2.654 2.275-2.688zm-1.947 2.308-.755-.996c.05-.037-1.508 1.149-4.383 2.393l.497 1.147.496 1.147c3.099-1.34 4.829-2.64 4.9-2.695zM10 18.5l.496-1.148c-2.844-1.23-4.399-2.405-4.384-2.394l-.753.998-.753.998c.105.079 1.83 1.366 4.897 2.693zm-4.644-2.546.764-.99c-.446-.344-.848-.812-1.154-1.227-.3-.406-.47-.714-.463-.7l-1.092.61-1.09.61c.024.044.906 1.63 2.27 2.685zM3.41 13.646l1.12-.555c-.647-1.305-.99-2.968-1.153-4.56a27 27 0 0 1-.105-3.732l-1.249-.055L.776 4.69C.74 5.51.714 7.05.89 8.785c.176 1.719.56 3.724 1.4 5.417zm-.76-9.483.001 1.25C6.6 5.412 9.236 4.301 10.225 3.8L9.66 2.685 9.095 1.57c-.723.366-2.974 1.342-6.443 1.343zm-.627.581 1.25.055a.633.633 0 0 1-.622.614v-2.5c-.948 0-1.83.725-1.876 1.777zM10.001 18.5l-.497-1.147A1.25 1.25 0 0 0 8.75 18.5zh1.25c0 .51-.306.954-.753 1.147zm-4.642-2.543.753-.998.003.003.007.005-.002-.002-.764.99-.765.988.003.003.007.005.005.004zM17.348 4.163v1.25a.633.633 0 0 1-.621-.614l1.248-.055 1.25-.054c-.047-1.052-.93-1.777-1.877-1.777zM10 18.499H8.75c0-.935.955-1.489 1.746-1.146zl-.497 1.147c.792.343 1.747-.211 1.747-1.148zm.338-15.814.565-1.115a2 2 0 0 0-1.808 0l.565 1.115.565 1.115a.5.5 0 0 1-.452 0z"
                                        mask="url(#a)"
                                    />
                                    <path
                                        stroke="#d0011b"
                                        stroke-linecap="round"
                                        stroke-width="1.25"
                                        d="m6.34 10.118 2.224 2.211a.625.625 0 0 0 .881 0L13.67 8.13"
                                    />
                                </svg>
                            </div>
                            <div className="pr-[4px]">
                                Xử lý đơn hàng bởi shopee
                            </div>
                            <div>Trả hàng miễn phí 15 ngày</div>
                        </div>
                    </div>

                    {/* Variant */}
                    <div className="flex items-center gap-[28px]">
                        <p className="text-[14px] text-[#757575]">Phân Loại</p>
                        <div className="pl-[20px]">
                            <div className="flex flex-wrap gap-[8px]">
                                {product.color.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setSelectedTypes(item)}
                                        className={`flex items-center gap-[4px] rounded border px-[12px] py-[6px] text-[14px] ${
                                            selectedTypes === item
                                                ? "border-red-500 text-red-500"
                                                : ""
                                        }`}
                                    >
                                        <div className="h-[24px] w-[24px]">
                                            <img
                                                className="h-full w-full"
                                                src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747925074/iphone-5_naq8yo.webp"
                                                alt=""
                                            />
                                        </div>
                                        <p>{item}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-[28px] pt-[24px]">
                        <p className="text-[14px] text-[#757575]">Dung Lượng</p>
                        <div className="pl-[2px]">
                            <div className="flex flex-wrap gap-[8px]">
                                {versionPhone.map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => setSelectedVersion(item)}
                                        className={`flex items-center gap-[4px] rounded border px-[12px] py-[6px] text-[14px] ${
                                            selectedVersion === item
                                                ? "border-red-500 text-red-500"
                                                : ""
                                        }`}
                                    >
                                        {item} GB
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-[28px] pt-[24px]">
                        <p className="text-[14px] text-[#757575]">Số Lượng</p>
                        <div className="flex cursor-pointer items-center pl-[20px]">
                            <button
                                onClick={() =>
                                    setQuantity((q) => Math.max(1, q - 1))
                                }
                                className="rounded border px-[20px] py-[4px] text-[16px]"
                            >
                                -
                            </button>
                            <span className="rounded border-b border-t px-[24px] py-[4px] text-[16px]">
                                {quantity}
                            </span>
                            <button
                                onClick={() => setQuantity((q) => q + 1)}
                                className="rounded border px-[20px] py-[4px] text-[16px]"
                            >
                                +
                            </button>
                            <div className="pl-[16px] text-[14px] text-[#757575] ">
                                {product.quantity} sản phẩm có sẵn
                            </div>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-[12px] pt-[24px] text-[14px]">
                        <button className="flex items-center gap-[4px] rounded border border-red-500 bg-[#FDF3F4] px-[22px] py-[12px] text-[#D0011B] hover:bg-red-100">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-[20px] w-[20px]"
                                    fill="#d0011b"
                                    stroke="#d0011b"
                                >
                                    <path
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        d="M.5.5h2.2L5.2 11h7.2l2.1-7.5H3.7"
                                    />
                                    <circle
                                        cx="6"
                                        cy="13.5"
                                        r="1"
                                        stroke="none"
                                    />
                                    <circle
                                        cx="11.5"
                                        cy="13.5"
                                        r="1"
                                        stroke="none"
                                    />
                                    <path
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-miterlimit="10"
                                        d="M7.5 7h3M9 8.5v-3"
                                    />
                                </svg>
                            </div>
                            <div>Thêm Vào Giỏ Hàng</div>
                        </button>
                        <button onClick={handleBuyNow} className="rounded bg-[#D0011B] px-[64px] py-[12px] text-white hover:bg-red-600">
                            Mua Ngay
                        </button>
                    </div>
                </div>

                <div className="md:col-span-10">
                    <div className="flex gap-[32px] border-b border-t p-[20px] text-[14px]">
                        <div className="flex items-center gap-[16px]">
                            <div className="flex h-[78px] w-[78px] flex-col items-center rounded-full">
                                <img
                                    src={product.authorImage}
                                    alt="Apple Logo"
                                    className="h-full w-full rounded-full"
                                />
                                <div className="mt-[-12px] h-[14px] w-[64px]">
                                    <img
                                        className="h-full w-full"
                                        src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749095809/shopee-mall_o9lg32.png"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="text-nowrap text-[16px] font-semibold text-[#000000DE]">
                                    {product.author}
                                </div>
                                <div className="py-[4px] text-[14px] text-gray-500">
                                    Online 1 Giờ Trước
                                </div>
                                <div className="flex gap-[8px]">
                                    <button className="flex items-center rounded border border-[#D0011B] bg-[#FDF3F4] px-[12px] py-[4px] text-[14px] text-[#D0011B] hover:bg-red-100">
                                        Chat Ngay
                                    </button>
                                    <button className="flex items-center rounded border border-gray-500 px-[12px] py-[4px] text-[14px] text-gray-500 hover:bg-red-100">
                                        Xem Shop
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-1 items-center justify-between font-normal">
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">Đánh Giá</p>
                                <p className="text-red-600">119,6k</p>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">
                                    Tỉ Lệ Phản Hồi
                                </p>
                                <p className="text-red-600">100%</p>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">Tham Gia</p>
                                <p className="text-red-600">7 năm trước</p>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">Sản Phẩm</p>
                                <p className="text-red-600">548</p>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">
                                    Thời Gian Phản Hồi
                                </p>
                                <p className="text-red-600">trong vài phút</p>
                            </div>
                            <div className="flex flex-col gap-[12px]">
                                <p className="text-[#00000066]">
                                    Người Theo Dõi
                                </p>
                                <p className="text-red-600">746,4k</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-[24px] md:col-span-10">
                    <div className="bg-[#FAFAFA] p-[14px] text-[18px] text-[#000000DE]">
                        CHI TIẾT SẢN PHẨM
                    </div>
                    <div className="px-[16px] py-[20px] text-[14px]">
                        {product.description}
                    </div>
                </div>
            </div>
            <ProductList />
            <Footer />
        </>
    );
}

export default ProductDetail;
