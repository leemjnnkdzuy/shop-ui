import classNames from "classnames/bind";
import style from "./Laptop.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import laptopicons from "~/assets/brand/laptop/laptopicons";
import laptopbanner from "~/assets/brand/laptop/laptopbanner";
import LaptopSidebarProduct from "~/components/Layout/components/PhoneSidebarProduct";

const cx = classNames.bind(style);

function Laptop() {
    const banners = [
        laptopbanner.banner1,
        laptopbanner.banner2,
        laptopbanner.banner3,
        laptopbanner.banner4,
        laptopbanner.banner5,
        laptopbanner.banner6,
        laptopbanner.banner7,
        laptopbanner.banner8,
    ];

    const brands = [
        {
            id: 1,
            name: "APPLE",
            image: laptopicons.apple
        },
        {
            id: 2,
            name: "ACER",
            image: laptopicons.acer
        },
        {
            id: 3,
            name: "ASUS",
            image: laptopicons.asus
        },
        {
            id: 4,
            name: "DELL",
            image: laptopicons.dell
        },
        {
            id: 5,
            name: "GIAGBYTE",
            image: laptopicons.gigabyte
        },
        {
            id: 6,
            name: "HP",
            image: laptopicons.hp
        },
        {
            id: 7,
            name: "LENOVO",
            image: laptopicons.lenovo
        },
        {
            id: 8,
            name: "MSI",
            image: laptopicons.msi
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
                    <LaptopSidebarProduct />
                </div>
                <div className={cx("content")}>
                    <p>Laptop</p>
                </div>
            </div>
        </div>
    );
}

export default Laptop;
