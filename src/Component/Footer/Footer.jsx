import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import './Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <div className="grid">
        <div className="grid__row">
          <div className="grid__column-2-4">
            <h3 className="footer__heading">Chăm sóc khách hàng</h3>
            <ul className="footer__category">
              {[
                "Trung tâm trợ giúp",
                "Shopee Blog",
                "Shopee Mall",
                "Hướng dẫn mua hàng",
                "Hướng dẫn bán hàng",
                "Thanh toán",
                "Shopee Xu",
                "Vận chuyển",
                "Trả hàng - Hoàn tiền",
                "Chăm sóc khách hàng",
                "Chính sách bảo hành"
              ].map((text, index) => (
                <li key={index}><a href="#" className="footer__link">{text}</a></li>
              ))}
            </ul>
          </div>

          <div className="grid__column-2-4">
            <h3 className="footer__heading">Về shopee</h3>
            <ul className="footer__category">
              {[
                "Giới thiệu về Shopee VN",
                "Tuyển dụng",
                "Điều khoản Shopee",
                "Chính sách bảo mật",
                "Chính hãng",
                "Kênh người bán",
                "Flash sales",
                "Tiếp thị Liên kết Shopee",
                "Liên hệ Truyền thông"
              ].map((text, index) => (
                <li key={index}><a href="#" className="footer__link">{text}</a></li>
              ))}
            </ul>
          </div>

          <div className="grid__column-2-4">
            <h3 className="footer__heading">Thanh toán</h3>
            <ul className="footer__category">
              <li className="footer__payment-img">
                <img src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008641/payment_qqbejo.jpg" alt="Các hình thức thanh toán" />
              </li>
            </ul>
            <h3 className="footer__heading">Đơn vị vận chuyển</h3>
            <ul className="footer__category">
              <li className="footer__delivery-img">
                <img src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008641/delivery_n49qhi.jpg" alt="Các đơn vị vận chuyển" />
              </li>
            </ul>
          </div>

          <div className="grid__column-2-4">
            <h3 className="footer__heading">Theo dõi chúng tôi trên</h3>
            <ul className="footer__category">
              <li><a href="#" className="footer__link"><FontAwesomeIcon icon={faFacebookSquare} /> Facebook</a></li>
              <li><a href="#" className="footer__link"><FontAwesomeIcon icon={faInstagram} /> Instagram</a></li>
              <li><a href="#" className="footer__link"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>
            </ul>
          </div>

          <div className="grid__column-2-4">
            <h3 className="footer__heading">Tải Shopee ngay</h3>
            <div className="footer__download">
              <div className="footer_qr">
                <a href="#" className="footer__link">
                  <img className="footer__img" src="https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008641/QR-code_xmvhiq.png" alt="QR code" />
                </a>
              </div>
              <div className="footer__app">
                {["https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008640/appstore_z40wob.png", "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008641/googleplay_iymrzs.png", "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008640/appgallery_euqvr8.png"].map((img, index) => (
                  <a key={index} href="#" className="footer__link equal-height">
                    <img className="footer__img" src={`${img}`} alt="App download" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid__row">
          <div className="footer__area">
            <div className="footer__copyright">
              <span>© 2021 Shopee. Tất cả các quyền được bảo lưu</span>
            </div>
            <div className="footer__country">
              <span>Quốc gia & Khu vực:</span>
              {["Singapore", "Indonesia", "Đài Loan", "Thái Lan", "Malaysia", "Việt Nam", "Philippines", "Brazil", "México", "Colombia", "Chile"].map((country, index) => (
                <a key={index} href="#" className="footer__country-link">{country}</a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="footer__infomation">
        <div className="footer__policy">
          {["CHÍNH SÁCH BẢO MẬT", "QUY CHẾ HOẠT ĐỘNG", "CHÍNH SÁCH VẬN CHUYỂN", "CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN"].map((policy, index) => (
            <a key={index} href="#" className="footer__policy-link">{policy}</a>
          ))}
        </div>

        <div className="footer__certify">
          {["https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008640/da-dang-ky-bo-cong-thuong_w5i9uf.jpg", "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008640/da-dang-ky-bo-cong-thuong_w5i9uf.jpg", "https://res.cloudinary.com/dlpgjjkfj/image/upload/v1749008641/finger-print_mmpksg.jpg"].map((img, index) => (
            <a key={index} href="#" className="footer__certify-link">
              <img src={`${img}`} alt="certification" className="footer__certify-img" />
            </a>
          ))}
        </div>

        <div className="footer__contact">
          <h3 className="footer__contact-heading">Công ty TNHH Shopee</h3>
          <p className="footer__contact-text">Địa chỉ: Tầng 4-5-6, Tòa nhà Capital Place, số 29 đường Liễu Giai, Phường Ngọc Khánh, Quận Ba Đình, Thành phố Hà Nội, Việt Nam. Tổng đài hỗ trợ: 19001221 - Email: cskh@hotro.shopee.vn</p>
          <p className="footer__contact-text">Quản lý nội dung và thiết kế Front-end: Mydev68 - Điện thoại liên hệ: </p>
          <p className="footer__contact-text">Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
          <p className="footer__contact-text">© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
