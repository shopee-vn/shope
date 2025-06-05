import React, { useState } from "react";
import { Button, Modal } from 'antd';
import { Header } from "../../Component/Header";
import { Footer } from "../../Component/Footer";
import { useLocation } from "react-router-dom";

function CheckOut() {
    const location = useLocation();
    const { finalPrice, version } = location.state || {};
    const [quantity, setQuantity] = useState(1);
    const unitPrice = 40999000;
    const totalPrice = unitPrice * quantity;

      const [isModalOpen, setIsModalOpen] = useState(false);

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
                    {/* Cart Header */}
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

                    {/* Cart Item */}
                    <div className="border-b bg-white">
                        {/* Shop name */}
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

                        {/* Product row */}
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
                                        Điện thoại Apple iPhone 16 Pro Max 512GB
                                    </p>
                                    <p className="text-gray-500">
                                        Phân loại hàng: Titan - Đen
                                    </p>
                                </div>
                            </div>
                            <div className="text-center">
                                ₫{unitPrice.toLocaleString()}
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    onClick={() =>
                                        setQuantity((q) => Math.max(1, q - 1))
                                    }
                                    className="border px-[12px] py-[4px]"
                                >
                                    -
                                </button>
                                <span className="border-b border-t px-[12px] py-[4px]">
                                    {quantity}
                                </span>
                                <button
                                    onClick={() => setQuantity((q) => q + 1)}
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
                    <div className="border-t bg-white p-4">
                        <div className="flex justify-end">
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
                                <div>
                                          <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Basic Modal"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
                                </div>
                            </div>
                            <div></div>
                        </div>
                        <div></div>
                        <div className="flex flex-col justify-between ">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    className="h-[16px] w-[16px] accent-[#ee4d2d]"
                                />
                                <span>Chọn Tất Cả</span>
                                <span className="cursor-pointer text-[#ee4d2d]">
                                    Xóa
                                </span>
                                <span className="text-gray-500">
                                    Lưu vào mục Đã thích
                                </span>
                            </div>

                            <div className="mt-4 flex items-center gap-4 md:mt-0">
                                <div>
                                    Tổng cộng (1 sản phẩm):{" "}
                                    <span className="text-xl font-bold text-red-500">
                                        ₫{totalPrice.toLocaleString()}
                                    </span>
                                </div>
                                <button className="rounded bg-red-500 px-6 py-2 font-semibold text-white hover:bg-red-600">
                                    Mua Hàng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CheckOut;
