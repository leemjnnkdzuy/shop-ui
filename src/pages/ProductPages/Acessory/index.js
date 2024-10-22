import classNames from "classnames/bind";
import style from "./Acessory.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";
import ProductBody from "~/components/Layout/components/ProductBody";

import AcessorySidebarProduct from "~/components/Layout/components/AcessorySidebarProduct";
import acessorybanner from "~/assets/brand/acessory/acessorybanner";
import acessoryicons from "~/assets/brand/acessory/acessoryicons";
import products from "~/assets/product";


const cx = classNames.bind(style);

function Acessory() {
    const banners = [
        acessorybanner.banner1,
        acessorybanner.banner2,
        acessorybanner.banner3,
        acessorybanner.banner4,
        acessorybanner.banner5,
        acessorybanner.banner6,
    ];

    const brands = [
        {
            id: 1,
            name: "Âm thanh và hình ảnh",
            image: acessoryicons.amthanhvahinhanh
        },
        {
            id: 2,
            name: "Gear",
            image: acessoryicons.gear
        },
        {
            id: 3,
            name: "Lưu trữ",
            image: acessoryicons.luutru
        },
        {
            id: 4,
            name: "Phụ kiện điện thoại",
            image: acessoryicons.phukiendienthoai
        },
        {
            id: 5,
            name: "Phụ kiện laptop",
            image: acessoryicons.phukienlaptop
        },
        {
            id: 6,
            name: "Thiết bị mạng",
            image: acessoryicons.thietbimang
        }
    ];

    const productsList = [
        {
            id: 1,
            img: products.laptop,
            name: "Sản phẩm 1",
            price: 100000,
            discount: 90000,
        },
        {
            id: 2,
            img: products.laptop,
            name: "Sản phẩm 2",
            price: 200000,
            discount: 180000,
        },
        {
            id: 3,
            img: products.laptop,
            name: "Sản phẩm 3",
            price: 300000,
            discount: 270000,
        },
        {
            id: 4,
            img: products.laptop,
            name: "Sản phẩm 4",
            price: 150000,
            discount: 120000,
        },
        {
            id: 5,
            img: products.laptop,
            name: "Sản phẩm 5",
            price: 250000,
            discount: 240000,
        },
        {
            id: 6,
            img: products.laptop,
            name: "Sản phẩm 6",
            price: 350000,
            discount: 320000,
        },
        {
            id: 7,
            img: products.laptop,
            name: "Sản phẩm 7",
            price: 400000,
            discount: 380000,
        },
        {
            id: 8,
            img: products.laptop,
            name: "Sản phẩm 8",
            price: 450000,
            discount: 430000,
        },
        {
            id: 9,
            img: products.laptop,
            name: "Sản phẩm 9",
            price: 500000,
            discount: 480000,
        },
        {
            id: 10,
            img: products.laptop,
            name: "Sản phẩm 10",
            price: 550000,
            discount: 500000,
        },
        {
            id: 11,
            img: products.laptop,
            name: "Sản phẩm 11",
            price: 600000,
            discount: 590000,
        },
        {
            id: 12,
            img: products.laptop,
            name: "Sản phẩm 12",
            price: 650000,
            discount: 620000,
        },
        {
            id: 13,
            img: products.laptop,
            name: "Sản phẩm 13",
            price: 700000,
            discount: 680000,
        },
        {
            id: 14,
            img: products.laptop,
            name: "Sản phẩm 14",
            price: 750000,
            discount: 720000,
        },
        {
            id: 15,
            img: products.laptop,
            name: "Sản phẩm 15",
            price: 800000,
            discount: 780000,
        },
        {
            id: 16,
            img: products.laptop,
            name: "Sản phẩm 16",
            price: 850000,
            discount: 820000,
        },
        {
            id: 17,
            img: products.laptop,
            name: "Sản phẩm 17",
            price: 900000,
            discount: 880000,
        },
        {
            id: 18,
            img: products.laptop,
            name: "Sản phẩm 18",
            price: 950000,
            discount: 920000,
        },
        {
            id: 19,
            img: products.laptop,
            name: "Sản phẩm 19",
            price: 1000000,
            discount: 990000,
        },
        {
            id: 20,
            img: products.laptop,
            name: "Sản phẩm 20",
            price: 1050000,
            discount: 1020000,
        },
        {
            id: 21,
            img: products.laptop,
            name: "Sản phẩm 21",
            price: 1100000,
            discount: 1080000,
        },
    ]; 

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <BannerProduct ListBanner={banners} />
            </div>
            <div className={cx("brand-choice")}>
                <BrandList brands={brands}/>
            </div>
            <div className={cx("inner")}>
                <div className={cx("sidebar")}>
                    <AcessorySidebarProduct />
                </div>
                <div className={cx("content")}>
                    <ProductBody productList={productsList} />
                </div>
            </div>
        </div>
    );
}

export default Acessory;
