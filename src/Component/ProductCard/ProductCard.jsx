import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart as farHeart,
    faStar as farStar,
} from "@fortawesome/free-regular-svg-icons";
import {
    faHeart as fasHeart,
    faStar as fasStar,
    faStarHalfAlt,
    faCheck
} from "@fortawesome/free-solid-svg-icons";

import "./ProductCard.scss";

function ProductCard(props) {
    return (
        <Link to={`/product/${props.product.id}`} className="home-product-item">
            <div className="home-product-item__img w-[230px] h-[230px]">
                <img className="w-full h-full object-cover" src={props.product.image} />
            </div>
            <h4 className="home-product-item__name">{props.product.name}</h4>
            <div className="home-product-item__price">
                <span className="home-product-item__price-old">
                    đ{props.product.oldPrice}
                </span>
                <span className="home-product-item__price-current">
                    đ{props.product.price}
                </span>
            </div>
            <div className="home-product-item__action">
                <div className="home-product-item__love home-product-item__love-select">
                    <FontAwesomeIcon
                        icon={farHeart}
                        className="home-product-item__love-no"
                    />
                    <FontAwesomeIcon
                        icon={fasHeart}
                        className="home-product-item__love-yes"
                    />
                </div>
                <div className="home-product-item__rate">
                    <FontAwesomeIcon icon={fasStar} className="rated" />
                    <FontAwesomeIcon icon={fasStar} className="rated" />
                    <FontAwesomeIcon icon={fasStar} className="rated" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="rated" />
                    <FontAwesomeIcon icon={farStar} />
                </div>
                <span className="home-product-item__sold">
                    Đã bán {props.product.sold}
                </span>
            </div>
            <div className="home-product-item__origin">
                <span className="home-product-item__brand">
                    {props.product.brand}
                </span>
                <span className="home-product-item__origin-name">
                    {props.product.location}
                </span>
            </div>
            <div className="home-product-item__favourite">
                <FontAwesomeIcon icon={faCheck} />
                <span>Yêu thích</span>
            </div>
            <div className="home-product-item__sale-off">
                <span className="home-product-item__sale-off-percent">
                    {props.product.discount}
                </span>
                <span className="home-product-item__sale-off-label">Giảm</span>
            </div>
        </Link>
    );
}

export default ProductCard;
