import classNames from "classnames/bind";
import style from "./TV.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TabletSidebarProduct from "~/components/Layout/components/TabletSidebarProduct";
import TVbanner from "~/assets/brand/TV/TVbanner";
import TVicons from "~/assets/brand/TV/TVicons";



const cx = classNames.bind(style);

function TV() {
    const banners = [
        TVbanner.banner1,
        TVbanner.banner2,
        TVbanner.banner3,
        TVbanner.banner4,
        TVbanner.banner5,
        TVbanner.banner6,
    ];

    const brands = [
        {
            id: 1,
            name: "Casper",
            image: TVicons.casper
        },
        {
            id: 2,
            name: "LG",
            image: TVicons.lg
        },
        {
            id: 3,
            name: "Samsung",
            image: TVicons.samsung
        },
        {
            id: 4,
            name: "TCL",
            image: TVicons.tcl
        },
        {
            id: 5,
            name: "Xiaomi",
            image: TVicons.xiaomi
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
                    <TabletSidebarProduct />
                </div>
                <div className={cx("content")}>
                    <p>Phone</p>
                </div>
            </div>
        </div>
    );
}

export default TV;
