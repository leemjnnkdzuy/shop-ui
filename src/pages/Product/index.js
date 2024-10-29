import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
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
            content: 'Theo chính sách đổi trả tại FPT Shop',
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
    const comment = 199;
    const model = "ABC_123";
    const NameProduct = "iPhone 13 Pro Max";
    const RateProduct = 4.5;

    const navigate = useNavigate();  
    const handleNavigate = (path) => { navigate(path); };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx("img-content")}>
                        <ProductImage ListPic={ListPics} />
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
                            {comment} đánh giá
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
                        <div className={cx('button-buy')}>
                            <button onClick={() => handleNavigate('/cart')}>Mua ngay</button>
                        </div>
                        <div className={cx('button-cart')}>
                            <button onClick={() => handleNavigate('/cart')}>Thêm vào giỏ hàng</button>
                        </div>
                        <div className={cx('button-installment')}>
                            <button onClick={() => handleNavigate('/cart')}>Mua trả góp</button>
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
