import classNames from "classnames/bind";
import style from "./LinhKien.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import LinhKienSidebarProduct from "~/components/Layout/components/LinhKienSidebarProduct";
import linhkienbanner from "~/assets/brand/linhkien/linhkienbanner";
import linhkienicons from "~/assets/brand/linhkien/linhkienicons";
import linhkienphanloai from "~/assets/brand/linhkien/linhkienphanloai";
import ProductBody from "~/components/Layout/components/ProductBody";
import products from "~/assets/product";


const cx = classNames.bind(style);

function LinhKien() {
    const banners = [
        linhkienbanner.banner1,
        linhkienbanner.banner2,
    ];

    const phanloai = [
        {
            id: 1,
            name: "CPU",
            image: linhkienphanloai.cpu
        }, 
        {
            id: 2,
            name: "Mainboard",
            image: linhkienphanloai.main
        },
        {
            id: 3,
            name: "RAM",
            image: linhkienphanloai.ram
        },
        {
            id: 4,
            name: "VGA",
            image: linhkienphanloai.vga
        },
        {
            id: 6,
            name: "Tản nhiệt",
            image: linhkienphanloai.heatsink
        },
        {
            id: 5,
            name: "Ổ cứng",
            image: linhkienphanloai.drive
        },
        {
            id: 7,
            name: "Nguồn",
            image: linhkienphanloai.psu
        },
        {
            id: 8,
            name: "Case",
            image: linhkienphanloai.case
        }
    ];

    const productsList = [
        {
            id: 1,
            img: products.laptop,
            name: "Sản phẩm 1",
            price: 90000,
            discount: 100000,
        },
        {
            id: 2,
            img: products.laptop,
            name: "Sản phẩm 2",
            price: 180000,
            discount: 200000,
        },
        {
            id: 3,
            img: products.laptop,
            name: "Sản phẩm 3",
            price: 270000,
            discount: 300000,
        },
        {
            id: 4,
            img: products.laptop,
            name: "Sản phẩm 4",
            price: 120000,
            discount: 150000,
        },
        {
            id: 5,
            img: products.laptop,
            name: "Sản phẩm 5",
            price: 240000,
            discount: 250000,
        },
        {
            id: 6,
            img: products.laptop,
            name: "Sản phẩm 6",
            price: 320000,
            discount: 350000,
        },
        {
            id: 7,
            img: products.laptop,
            name: "Sản phẩm 7",
            price: 380000,
            discount: 400000,
        },
        {
            id: 8,
            img: products.laptop,
            name: "Sản phẩm 8",
            price: 430000,
            discount: 450000,
        },
        {
            id: 9,
            img: products.laptop,
            name: "Sản phẩm 9",
            price: 480000,
            discount: 500000,
        },
        {
            id: 10,
            img: products.laptop,
            name: "Sản phẩm 10",
            price: 500000,
            discount: 550000,
        },
        {
            id: 11,
            img: products.laptop,
            name: "Sản phẩm 11",
            price: 590000,
            discount: 600000,
        },
        {
            id: 12,
            img: products.laptop,
            name: "Sản phẩm 12",
            price: 620000,
            discount: 650000,
        },
        {
            id: 13,
            img: products.laptop,
            name: "Sản phẩm 13",
            price: 680000,
            discount: 700000,
        },
        {
            id: 14,
            img: products.laptop,
            name: "Sản phẩm 14",
            price: 720000,
            discount: 750000,
        },
        {
            id: 15,
            img: products.laptop,
            name: "Sản phẩm 15",
            price: 780000,
            discount: 800000,
        },
        {
            id: 16,
            img: products.laptop,
            name: "Sản phẩm 16",
            price: 820000,
            discount: 850000,
        },
        {
            id: 17,
            img: products.laptop,
            name: "Sản phẩm 17",
            price: 880000,
            discount: 900000,
        },
        {
            id: 18,
            img: products.laptop,
            name: "Sản phẩm 18",
            price: 920000,
            discount: 950000,
        },
        {
            id: 19,
            img: products.laptop,
            name: "Sản phẩm 19",
            price: 990000,
            discount: 1000000,
        },
        {
            id: 20,
            img: products.laptop,
            name: "Sản phẩm 20",
            price: 1020000,
            discount: 1050000,
        },
        {
            id: 21,
            img: products.laptop,
            name: "Sản phẩm 21",
            price: 1080000,
            discount: 1100000,
        },
        // 40 sản phẩm mới
        {
            id: 22,
            img: products.laptop,
            name: "Sản phẩm 22",
            price: 1140000,
            discount: 1150000,
        },
        {
            id: 23,
            img: products.laptop,
            name: "Sản phẩm 23",
            price: 1200000,
            discount: 1250000,
        },
        {
            id: 24,
            img: products.laptop,
            name: "Sản phẩm 24",
            price: 1260000,
            discount: 1300000,
        },
        {
            id: 25,
            img: products.laptop,
            name: "Sản phẩm 25",
            price: 1320000,
            discount: 1350000,
        },
        {
            id: 26,
            img: products.laptop,
            name: "Sản phẩm 26",
            price: 1380000,
            discount: 1400000,
        },
        {
            id: 27,
            img: products.laptop,
            name: "Sản phẩm 27",
            price: 1440000,
            discount: 1500000,
        },
        {
            id: 28,
            img: products.laptop,
            name: "Sản phẩm 28",
            price: 1500000,
            discount: 1550000,
        },
        {
            id: 29,
            img: products.laptop,
            name: "Sản phẩm 29",
            price: 1560000,
            discount: 1600000,
        },
        {
            id: 30,
            img: products.laptop,
            name: "Sản phẩm 30",
            price: 1620000,
            discount: 1650000,
        },
        {
            id: 31,
            img: products.laptop,
            name: "Sản phẩm 31",
            price: 1680000,
            discount: 1700000,
        },
        {
            id: 32,
            img: products.laptop,
            name: "Sản phẩm 32",
            price: 1740000,
            discount: 1800000,
        },
        {
            id: 33,
            img: products.laptop,
            name: "Sản phẩm 33",
            price: 1800000,
            discount: 1850000,
        },
        {
            id: 34,
            img: products.laptop,
            name: "Sản phẩm 34",
            price: 1860000,
            discount: 1900000,
        },
        {
            id: 35,
            img: products.laptop,
            name: "Sản phẩm 35",
            price: 1920000,
            discount: 1950000,
        },
        {
            id: 36,
            img: products.laptop,
            name: "Sản phẩm 36",
            price: 1980000,
            discount: 2000000,
        },
        {
            id: 37,
            img: products.laptop,
            name: "Sản phẩm 37",
            price: 2040000,
            discount: 2100000,
        },
        {
            id: 38,
            img: products.laptop,
            name: "Sản phẩm 38",
            price: 2100000,
            discount: 2150000,
        },
        {
            id: 39,
            img: products.laptop,
            name: "Sản phẩm 39",
            price: 2160000,
            discount: 2200000,
        },
        {
            id: 40,
            img: products.laptop,
            name: "Sản phẩm 40",
            price: 2220000,
            discount: 2250000,
        },
        {
            id: 41,
            img: products.laptop,
            name: "Sản phẩm 41",
            price: 2280000,
            discount: 2300000,
        },
        {
            id: 42,
            img: products.laptop,
            name: "Sản phẩm 42",
            price: 2340000,
            discount: 2400000,
        },
        {
            id: 43,
            img: products.laptop,
            name: "Sản phẩm 43",
            price: 2400000,
            discount: 2450000,
        },
        {
            id: 44,
            img: products.laptop,
            name: "Sản phẩm 44",
            price: 2460000,
            discount: 2500000,
        },
        {
            id: 45,
            img: products.laptop,
            name: "Sản phẩm 45",
            price: 2520000,
            discount: 2550000,
        },
        {
            id: 46,
            img: products.laptop,
            name: "Sản phẩm 46",
            price: 2580000,
            discount: 2600000,
        },
        {
            id: 47,
            img: products.laptop,
            name: "Sản phẩm 47",
            price: 2640000,
            discount: 2700000,
        },
        {
            id: 48,
            img: products.laptop,
            name: "Sản phẩm 48",
            price: 2700000,
            discount: 2750000,
        },
        {
            id: 49,
            img: products.laptop,
            name: "Sản phẩm 49",
            price: 2760000,
            discount: 2800000,
        },
        {
            id: 50,
            img: products.laptop,
            name: "Sản phẩm 50",
            price: 2820000,
            discount: 2850000,
        },
    ];    

    const brands = [
        {
            id: 1,
            name: "Asus",
            image: linhkienicons.asus
        },
        {
            id: 2,
            name: "Gigabyte",
            image: linhkienicons.gigabyte
        },
        {
            id: 3,
            name: "MSI",
            image: linhkienicons.msi
        },
        {
            id: 4,
            name: "Adata",
            image: linhkienicons.adata
        },
        {
            id: 5,
            name: "AMD",
            image: linhkienicons.amd
        },
        {
            id: 6,
            name: "ASRock",
            image: linhkienicons.asrock
        },
        {
            id: 7,
            name: "Corsair",
            image: linhkienicons.corsair
        },
        {
            id: 8,
            name: "Cooler Master",
            image: linhkienicons.coolermaster
        },
        {
            id: 9,
            name: "Deepcool",
            image: linhkienicons.deepcool
        },
        {
            id: 10,
            name: "G.Skill",
            image: linhkienicons.gskill
        },
        {
            id: 11,
            name: "Intel",
            image: linhkienicons.intel
        },
        {
            id: 12,
            name: "Kingston",
            image: linhkienicons.kingston
        },
        {
            id: 13,
            name: "Western Digital",
            image: linhkienicons.wd
        },
    ];

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <BannerProduct ListBanner={banners} />
            </div>
            <div className={cx("brand-choice")}>
                <BrandList name={"Loại Linh Kiện"} brands={phanloai}/>
            </div>
            <div className={cx("brand-choice")}>
                <BrandList brands={brands}/>
            </div>
            <div className={cx("inner")}>
                <div className={cx("sidebar")}>
                    <LinhKienSidebarProduct />
                </div>
                <div className={cx("content")}>
                    <ProductBody productList={productsList} />
                </div>
            </div>
        </div>
    );
}

export default LinhKien;
