import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
function Banner() {
    const banner = [
        {
            url: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025137/banner-3_mmmlpw.jpg",
        },
        {
            url: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025137/banner-4_w653eh.jpg",
        },
        {
            url: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025137/banner-1_do18hk.jpg",
        },
        {
            url: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025137/banner-2_gueuyo.jpg",
        },
        {
            url: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025138/banner-5_lhitxj.jpg",
        },
    ];

    const icon = [
        {
            name: "Mã Giảm Giá",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747907112/icon-2_okhdfx.png",
        },
        {
            name: "Khách Hàng Thân Thiết",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747907112/icon-3_xrqwhe.png",
        },
        {
            name: "Hàng Chọn Giá Hời",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747907112/icon-4_euolt4.png",
        },
        {
            name: "Shopee Food",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1747907112/icon-1_t3afao.png",
        },
        {
            name: "Deal Hot Giờ Vàng",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749026340/icon-5_pwrjem.png",
        },
        {
            name: "Săn Ngay 100.000 Xu",
            icon: "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749026340/icon-6_flek2r.png",
        },
    ];

    return (
        <div className="grid">
            <div className="grid grid-cols-1 gap-4 pt-[32px] pb-[24px] md:grid-cols-3">
                <div className="md:col-span-2">
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        modules={[Autoplay, Pagination]}
                        className="h-full"
                    >
                        {banner.map((item, index) => (
                            <SwiperSlide className="h-full" key={index}>
                                <img className="h-full" src={item.url} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="flex flex-col gap-4">
                    <img
                        src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025138/banner-small-1_pvizsx.png"
                        alt="Hoa hồng"
                        className="h-auto w-full shadow"
                    />
                    <img
                        src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749025138/banner-small-2_ddwy12.jpg"
                        alt="Xử lý đơn hàng"
                        className="h-auto w-full shadow"
                    />
                </div>
            </div>

            <div className="flex justify-around pb-[24px]">
                {icon.map((item, index) => (
                    <div  className="flex flex-col items-center gap-[8px] cursor-pointer" key={index}>
                        <div className="w-[46px] h-[46px]">
                            <img className="w-full h-full" src={item.icon} alt={item.name} />
                        </div>
                      <p className="text-[13px] text-[#000000]">{item.name}</p>
                    </div>
                ))}
            </div>
            <div className="py-[24px] bg-[#F45290]">
              <div className="cursor-pointer">
                <img src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749027652/banner-11_ywzrw3.png" alt=""/>
              </div>
            </div>
        </div>
    );
}

export default Banner;
