import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Modal } from "antd";
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { useLocation } from "react-router-dom";
import products from "../../Component/data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDollarSign,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import ProductList from "../../Component/ProductList/ProductList";

const voucherSale = {
    superdeala: 60,
    superdealb: 70,
    superdeald: 75,
    superdeale: 80,
    superdealf: 85,
    superdealg: 90,
    superdealh: 95,
    superdeali: 98,

    discounta: 60,
    discountb: 70,
    discountd: 75,
    discounte: 80,
    discountf: 85,
    discountg: 90,
    discounth: 95,
    discounti: 98,

    bigsalea: 60,
    bigsaleb: 70,
    bigsaled: 75,
    bigsalee: 80,
    bigsalef: 85,
    bigsaleg: 90,
    bigsaleh: 95,
    bigsalei: 98,

    flashsalea: 60,
    flashsaleb: 70,
    flashsaled: 75,
    flashsalee: 80,
    flashsalef: 85,
    flashsaleg: 90,
    flashsaleh: 95,
    flashsalei: 95,

    vouchera: 60,
    voucherb: 70,
    voucherd: 75,
    vouchere: 80,
    voucherf: 85,
    voucherg: 90,
    voucherh: 95,
    voucheri: 98,

    savea: 60,
    saveb: 70,
    saved: 75,
    savee: 80,
    savef: 85,
    saveg: 90,
    saveh: 95,
    saveih: 98,
};
const voucherData = [
    {
        priceSale: 80,
        dateRandom: 4,
        divideRandom: 99,
        useRandom: 900,
        mutiRandom: 2,
    },
    {
        priceSale: 40,
        dateRandom: 6,
        divideRandom: 96,
        useRandom: 600,
        mutiRandom: 3,
    },
    {
        priceSale: 60,
        dateRandom: 2,
        divideRandom: 98,
        useRandom: 800,
        mutiRandom: 1,
    },
];

function CheckOut() {
    const location = useLocation();
    const { id } = useParams();
    const { finalPrice, version } = location.state || {};
    const product = products.find((item) => item.id === Number(id));

    const [quantity, setQuantity] = useState(1);
    const [voucherCode, setVoucherCode] = useState("");
    const [discountPercent, setDiscountPercent] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    if (!product) {
        return <div>Không tìm thấy sản phẩm</div>;
    }

    const totalPrice = finalPrice * quantity;
    const discountAmount = totalPrice * (discountPercent / 100);
    const finalTotal = totalPrice - discountAmount;

    const handleApplyVoucher = () => {
        const code = voucherCode.trim().toLowerCase();
        if (voucherSale[code]) {
            setDiscountPercent(voucherSale[code]);
            setVoucherCode("");
            handleOk();
        } else {
            setDiscountPercent(0);
        }
    };

    const handleQuantityChange = (delta) => {
        setQuantity((q) => Math.max(1, q + delta));
    };

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Header />
            <div className="bg-[#fafafa]">
                <div className="grid py-[24px] text-[14px] font-normal">
                    <div className="grid grid-cols-6 border-b px-[16px] py-[12px]">
                        <div className="col-span-2 flex items-center gap-[8px]">
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    className="h-[16px] w-[16px] accent-[#ee4d2d]"
                                />
                            </div>
                            <div>Sản Phẩm</div>
                        </div>
                        <div className="text-center text-[#888888]">
                            Đơn Giá
                        </div>
                        <div className="text-center text-[#888888]">
                            Số Lượng
                        </div>
                        <div className="text-center text-[#888888]">
                            Số Tiền
                        </div>
                        <div className="text-center text-[#888888]">
                            Thao Tác
                        </div>
                    </div>
                    <div className="border-b bg-white">
                        <div className="flex items-center gap-[12px] px-[16px] py-[12px]">
                            <input
                                type="checkbox"
                                checked
                                className="h-[16px] w-[16px] accent-[#ee4d2d]"
                            />
                            <div className="rounded bg-red-600 px-[1px] px-[2px] text-white">
                                Mall
                            </div>
                            <span className="text-[#000000DE]">
                                Apple Flagship Store
                            </span>
                        </div>
                        <div className="grid grid-cols-6 items-center border-b border-t px-[16px] py-[12px]">
                            <div className="col-span-2 flex gap-[12px]">
                                <div className="flex items-center gap-[12px]">
                                    <div>
                                        <input
                                            type="checkbox"
                                            checked
                                            className="h-[16px] w-[16px] accent-[#ee4d2d]"
                                        />
                                    </div>
                                    <img
                                        src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747925074/iphone-5_naq8yo.webp"
                                        alt="product"
                                        className="h-[80px] w-[80px] object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <p className="font-medium">
                                        {product.name}
                                    </p>
                                    <p className="text-gray-500">
                                        Phân loại hàng: Titan - {product.color}
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                ₫{finalPrice.toLocaleString()}
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() => handleQuantityChange(-1)}
                                    className="border px-[12px] py-[4px]"
                                >
                                    -
                                </button>
                                <span className="border-b border-t px-[12px] py-[4px]">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => handleQuantityChange(1)}
                                    className="border px-[12px] py-[4px]"
                                >
                                    +
                                </button>
                            </div>
                            <div className="text-center text-[#ee4d2d]">
                                ₫{totalPrice.toLocaleString()}
                            </div>
                            <div className="cursor-pointer text-center text-blue-500 hover:underline">
                                Xóa
                            </div>
                        </div>

                        {/* Promotion info */}
                        <div className="flex items-center gap-[12px] px-[40px] py-[20px] text-[#000000CC]">
                            <img
                                className="h-[20px] w-[20px]"
                                src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749117375/shipee_fy01o4.webp"
                                alt=""
                            />
                            <p>
                                Giảm ₫700.000 phí vận chuyển đơn tối thiểu ₫0;
                                Giảm ₫1.000.000 phí vận chuyển đơn tối thiểu
                                ₫500.000
                            </p>
                            <span className="ml-1 cursor-pointer text-blue-500">
                                Tìm hiểu thêm
                            </span>
                        </div>
                    </div>

                    {/* Bottom Action Bar */}
                    <div className="bg-white p-4">
                        <div className="flex items-center justify-end gap-[64px] border-b border-dashed pb-[10px]">
                            <div className="flex items-center gap-[8px]">
                                <div>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            fill="#EE4D2D"
                                            fill-rule="evenodd"
                                            d="M6.836 6.8V5h.99v1.8zm0 2.8V7.8h.99v1.8zm0 2.799v-1.8h.99v1.8zm0 2.801v-1.8h.99v1.8z"
                                            clip-rule="evenodd"
                                        />
                                        <path
                                            fill="#EE4D2D"
                                            fill-rule="evenodd"
                                            d="M18 5.5v3.375h-1.2c-.663 0-1.2.504-1.2 1.125s.537 1.125 1.2 1.125H18V14.5c0 .828-.716 1.5-1.6 1.5H3.6c-.884 0-1.6-.672-1.6-1.5v-3.375h.8c.663 0 1.2-.504 1.2-1.125s-.537-1.125-1.2-1.125H2V5.5C2 4.672 2.716 4 3.6 4h12.8c.884 0 1.6.672 1.6 1.5m-14.8 0c0-.207.18-.375.4-.375h12.8c.22 0 .4.168.4.375v2.25c-1.325 0-2.4 1.007-2.4 2.25s1.075 2.25 2.4 2.25v2.25c0 .207-.18.375-.4.375H3.6c-.22 0-.4-.168-.4-.375v-2.281c1.135-.179 2-1.104 2-2.219s-.865-2.04-2-2.219z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="text-[16px]">
                                    Shopee Voucher
                                </div>
                            </div>
                            <div>
                                <Button
                                    className="border-none outline-none"
                                    onClick={showModal}
                                >
                                    {discountAmount && discountAmount > 0 ? (
                                        <div className="flex items-center gap-[4px]">
                                            <div className="text-[14px] text-[#EE4D2D]">- {discountAmount}</div>
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="20"
                                                    height="20"
                                                    fill="none"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fill="#EE4D2D"
                                                        fill-rule="evenodd"
                                                        d="M6.836 6.8V5h.99v1.8zm0 2.8V7.8h.99v1.8zm0 2.799v-1.8h.99v1.8zm0 2.801v-1.8h.99v1.8z"
                                                        clip-rule="evenodd"
                                                    />
                                                    <path
                                                        fill="#EE4D2D"
                                                        fill-rule="evenodd"
                                                        d="M18 5.5v3.375h-1.2c-.663 0-1.2.504-1.2 1.125s.537 1.125 1.2 1.125H18V14.5c0 .828-.716 1.5-1.6 1.5H3.6c-.884 0-1.6-.672-1.6-1.5v-3.375h.8c.663 0 1.2-.504 1.2-1.125s-.537-1.125-1.2-1.125H2V5.5C2 4.672 2.716 4 3.6 4h12.8c.884 0 1.6.672 1.6 1.5m-14.8 0c0-.207.18-.375.4-.375h12.8c.22 0 .4.168.4.375v2.25c-1.325 0-2.4 1.007-2.4 2.25s1.075 2.25 2.4 2.25v2.25c0 .207-.18.375-.4.375H3.6c-.22 0-.4-.168-.4-.375v-2.281c1.135-.179 2-1.104 2-2.219s-.865-2.04-2-2.219z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-[#0055AA]">
                                            Chọn hoặc nhập mã
                                        </div>
                                    )}
                                </Button>
                                <Modal
                                    title="Chọn Shopee Voucher"
                                    closable={{
                                        "aria-label": "Custom Close Button",
                                    }}
                                    open={isModalOpen}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className="custom-modal"
                                    styles={{ body: { padding: 0 } }}
                                >
                                    <div className="bg-white">
                                        <div className="flex items-center gap-[12px] bg-[#f8f8f8] p-[16px]">
                                            <div className="text-[14px]">
                                                Mã Voucher
                                            </div>
                                            <input
                                                value={voucherCode}
                                                onChange={(e) =>
                                                    setVoucherCode(
                                                        e.target.value,
                                                    )
                                                }
                                                type="text"
                                                placeholder="Mã Shopee Voucher"
                                                className="flex-1 text-[14px] rounded border border-gray-300 px-[8px] py-[8px] text-[12px] outline-none"
                                            />
                                            <button
                                                onClick={handleApplyVoucher}
                                                className="rounded bg-red-500 px-[18px] py-[8px] text-[12px] text-white"
                                            >
                                                ÁP DỤNG
                                            </button>
                                        </div>
                                        {voucherData.map((item, index) => (
                                            <div
                                                key={index}
                                                className="relative mb-[12px] flex overflow-hidden rounded-md border"
                                            >
                                                <div className="flex flex-col items-center justify-center bg-pink-200 p-[32px]">
                                                    <div className="flex h-[64px] w-[64px] items-center justify-center">
                                                        <img
                                                            className="h-full w-full rounded-full"
                                                            src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1748528907/icon-viettel_v7dsbm.jpg"
                                                            alt="icon"
                                                        />
                                                    </div>
                                                    <div className="mt-[-4px] rounded-[2px] bg-[#EF4444] px-[8px] text-[10px] text-white">
                                                        Mall
                                                    </div>
                                                </div>
                                                <div className="flex flex-1 flex-col justify-center pb-[8px] pl-[8px] pt-[8px] text-[14px]">
                                                    <p className="text-[15px] font-medium text-gray-800">
                                                        Giảm ₫{item.priceSale}k
                                                    </p>
                                                    <p className="mt-[0.5px] text-[14px] text-gray-500">
                                                        Đơn tối thiểu ₫
                                                        {item.useRandom}
                                                    </p>
                                                    <div className="mt-[4px] inline-block w-[50%] rounded border border-red-500 px-[4px] py-[0.5px] text-[12px] text-red-500">
                                                        Sản phẩm nhất định
                                                    </div>
                                                    <div className="mt-[4px] text-[12px] text-gray-400">
                                                        Đã dùng{" "}
                                                        {item.divideRandom}%,
                                                        Sắp hết hạn: Còn{" "}
                                                        {item.dateRandom} ngày
                                                    </div>
                                                </div>
                                                <div className="flex items-center px-[12px]">
                                                    <button className="rounded bg-orange-500 px-[12px] py-[4px] text-[14px] text-white">
                                                        Lưu
                                                    </button>
                                                </div>
                                                <div className="absolute right-0 top-0 rounded-bl bg-red-500 px-[8px] py-[0.5px] text-[12px] text-white">
                                                    x{item.mutiRandom}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Modal>
                            </div>
                        </div>
                        <div className="flex items-center justify-end gap-[16%] border-b border-dashed px-[10px] py-[10px]">
                            <div className="flex items-center gap-[16px]">
                                <div className="flex items-center gap-[8px] opacity-25">
                                    <FontAwesomeIcon icon={faDollarSign} />
                                    <p>Shopee Xu</p>
                                </div>
                                <div className="flex items-center gap-[4px] opacity-50">
                                    <div>Bạn chưa có Shopee Xu</div>
                                    <FontAwesomeIcon icon={faCircleQuestion} />
                                </div>
                            </div>
                            <div className="text-[16px] opacity-25">-đ0</div>
                        </div>
                        <div className="flex justify-between px-[10px] py-[10px]">
                            <div className="flex items-center gap-[18px] text-[16px]">
                                <input
                                    type="checkbox"
                                    className="h-[16px] w-[16px] accent-[#ee4d2d]"
                                />
                                <span className="cursor-pointer">
                                    Chọn Tất Cả
                                </span>
                                <span className="cursor-pointer">Xóa</span>
                                <span className="cursor-pointer text-[#ee4d2d]">
                                    Lưu vào mục Đã thích
                                </span>
                            </div>
                            <div className="mt-4 flex items-center gap-[16px] md:mt-0">
                                <div className="flex flex-col items-end">
                                    <div className="flex items-center gap-[4px] text-[16px]">
                                        <div>Tổng cộng (1 sản phẩm):</div>
                                        <div className="flex items-center text-[24px] font-semibold text-[#ee4d2d]">
                                            <div className="text-[16px]">₫</div>
                                            <div>
                                                {finalTotal.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-[8px]">
                                        <span>Tiết kiệm</span>
                                        <div className="flex items-center text-[#ee4d2d]">
                                            <div className="text-[12px]">₫</div>
                                            <div>
                                                {discountAmount.toLocaleString()}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="rounded bg-[#ee4d2d] px-[64px] py-[12px] font-semibold text-white hover:bg-red-600">
                                    Mua Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ProductList/>
            <Footer />
        </>
    );
}

export default CheckOut;
