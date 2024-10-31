import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import React, { useState, useEffect } from "react";
import ProductImage from "~/components/Layout/components/ProductImage";
import FooterProduct from "~/components/Layout/components/FooterProduct";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function Product() {


    const footerItems = [
        {
            icon: icons.checkshield,
            title: 'Sản phẩm chất lượng',
            content: 'Đảm bảo tương thích và độ bền cao',
            alt: 'checkshield'
        },
        {
            icon: icons.transferalt,
            title: 'Đổi trả dễ dàng',
            content: 'Theo chính sách đổi trả tại PixelShop',
            alt: 'Truck'
        },
        {
            icon: icons.diamond,
            title: 'Thương hiệu đảm bảo',
            content: 'Nhập khẩu, bảo hành chính hãng',
            alt: 'Diamond'
        },
        {
            icon: icons.truck,
            title: 'Giao hàng tận nơi',
            content: 'Tại 63 tỉnh thành',
            alt: 'Transferalt'
        }
    ];


    const ListPics = [
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
    ];

    const [selectedStorage, setSelectedStorage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [storage, setStorage] = useState([]);
    const [color, setColor] = useState([]);

    useEffect(() => {
        const fetchStorageOptions = async () => {
            const response = ["1TB", "256GB", "128GB", "64GB", "512GB"];
            const sortedStorage = response.sort((a, b) => {
                const parseValue = (str) => str.includes('TB') ? parseInt(str) * 1024 : parseInt(str);
                return parseValue(a) - parseValue(b);
            });
            setStorage(sortedStorage);
        };
        fetchStorageOptions();
    }, []);

    useEffect(() => {
        const fetchColorOptions = async () => {
            const response = ["Blue", "Gold", "Silver", "Black"];
            setColor(response);
        };
        fetchColorOptions();
    }, []);

    const handleSelectStorage = (index) => {
        setSelectedStorage(index);
    };

    const handleSelectColor = (index) => {
        setSelectedColor(index);
    };

    const price = 36000000;
    const comment = 0;
    const model = "ABC_123";
    const NameProduct = "iPhone 13 Pro Max";
    const RateProduct = 4.5;
    const Chip = "A15 Bionic";

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx("img-content")}>
                        <ProductImage ListPic={ListPics} />
                    </div>
                    <div className={cx('description')}>
                        <div className={cx('name-description')}>
                            <div className={cx('title-product-description')}>
                                Tên đầy đủ của sản phẩm
                            </div>
                            <div className={cx('name-product')}>
                                {NameProduct}
                            </div>
                        </div>
                        <div className={cx('description-product')}>
                            <div className={cx('title-description')}>
                                Mô tả chi tiết
                            </div>
                            <div className={cx('information-description')}>
                                <div className={cx('double-description-box')}>
                                    <div className={cx('description-box')}>
                                        <div className={cx('content-description-box')}>
                                            <div className={cx('title-box')}>
                                                Chip
                                            </div>
                                            <div className={cx('content-box')}>
                                                { Chip || "Hiện không có thông tin mục này" }
                                            </div>
                                        </div>  
                                        <div className={cx('icon-description-box')}>
                                            <img src={icons.chip} alt="Chip" />
                                        </div>
                                    </div>
                                    <div className={cx('description-box')}>
                                        <div className={cx('content-description-box')}>
                                            <div className={cx('title-box')}>
                                                Chip
                                            </div>
                                            <div className={cx('content-box')}>
                                                A15 Bionic
                                            </div>
                                        </div>        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('sidebar')}>
                    <div className={cx('name-product')}>
                        {NameProduct}
                    </div>
                    <div className={cx('line-1')}>
                        <div className={cx('model-product')}>
                            {model}
                        </div>
                        <div className={cx('rate-product')}>
                            {Array.from({ length: 5 }, (_, index) => (
                                index < Math.floor(RateProduct) ? 
                                <img key={index} src={icons.star} alt="Star" className={cx('icon-star')} /> : 
                                index < RateProduct ? 
                                <img key={index} src={icons.starhalf} alt="Star Half" className={cx('icon-star')} /> : 
                                <i key={index} className={cx('icon-star')} />
                            ))}
                        </div>
                        <div className={cx('comment-number')}>
                            {comment || "Chưa có "} đánh giá
                        </div>
                    </div>
                    <div className={cx('line-2')}>
                        <div className={cx('storage-product')}>
                            Dung lượng
                        </div>
                        <div className={cx('storage-option')}>
                            {storage.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('storage-select', { selected: selectedStorage === index })}
                                    onClick={() => handleSelectStorage(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('line-3')}>
                        <div className={cx('color-product')}>
                            Màu sắc
                        </div>
                        <div className={cx('color-option')}>
                            {color.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('color-select', { selected: selectedColor === index })}
                                    onClick={() => handleSelectColor(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('line-5')}>
                        <div className={cx('title-gift')}>
                            Chính sách dành cho sản phẩm
                        </div>
                        <div className={cx('gift-content')}>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.creditcard} alt="creditcard" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Trả góp 0% lãi suất trong 12 tháng
                                </div>
                            </div>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.analyse} alt="analyse" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Hàng chính hãng - Bảo hành (tháng): 12
                                </div>
                            </div>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.bolt} alt="bolt" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Giao hàng nhanh chóng miễn phí toàn quốc
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('line-4')}>
                        <div className={cx('price-product')}>
                            <div className={cx('price-current')}>
                                <div className={cx('price-title')}>
                                    Mua ngay với giá
                                </div>
                                <div className={cx('price-value')}>
                                    {price.toLocaleString()}đ
                                </div>
                            </div>
                            <div className={cx('betwen-line')}>
                                <div className={cx('line-betwen')} />
                                <div className={cx('betwen-line-content')}>
                                    Hoặc
                                </div>
                                <div className={cx('line-betwen')} />
                            </div>
                            <div className={cx('price-current')}>
                                <div className={cx('price-title')}>
                                    Trả góp 12 tháng từ
                                </div>
                                <div className={cx('price-value')}>
                                    {Math.floor(price / 12).toLocaleString()}đ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('line-6')}>
                        <div className={cx('double-button')}>
                            <div className={cx('button-cart')}>
                                <div className={cx('button-buy-title')}>
                                    Mua ngay
                                </div>
                                <div className={cx('button-buy-icon')}>
                                    <img src={icons.logincircle} alt="cartadd" />
                                </div>
                            </div>
                            <div className={cx('button-installment')}>
                                <div className={cx('button-buy-title')}>
                                    Mua trả góp
                                </div>
                                <div className={cx('button-buy-icon')}>
                                    <img src={icons.wallet} alt="wallet" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('button-buy')}>
                            <div className={cx('button-buy-title')}>
                                Thêm vào giỏ hàng
                            </div>
                            <div className={cx('button-buy-icon')}>
                                <img src={icons.cartadd} alt="logincircle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-product')}>
                <FooterProduct footerItems={footerItems} />
            </div>
        </div>
    );
}

export default Product;
