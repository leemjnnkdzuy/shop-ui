import classNames from "classnames/bind";
import style from "./Acessory.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import AcessorySidebarProduct from "~/components/Layout/components/AcessorySidebarProduct";
import acessorybanner from "~/assets/brand/acessory/acessorybanner";
import acessoryicons from "~/assets/brand/acessory/acessoryicons";



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
                    <p>Phone</p>
                </div>
            </div>
        </div>
    );
}

export default Acessory;
