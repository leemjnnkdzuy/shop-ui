import classNames from "classnames/bind";
import style from "./Tablet.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TabletSidebarProduct from "~/components/Layout/components/TabletSidebarProduct";
import tabletbanner from "~/assets/brand/tablet/tabletbanner";
import tableticons from "~/assets/brand/tablet/tableticons";


const cx = classNames.bind(style);

function Tablet() {
    const banners = [
        tabletbanner.banner1,
        tabletbanner.banner2,
        tabletbanner.banner3,
        tabletbanner.banner4,
        tabletbanner.banner5,
        tabletbanner.banner6,
    ];

    const brands = [
        {
            id: 1,
            name: "Apple",
            image: tableticons.apple
        },
        {
            id: 2,
            name: "Coolpad",
            image: tableticons.coolpad
        },
        {
            id: 3,
            name: "Honor",
            image: tableticons.honor
        },
        {
            id: 4,
            name: "Huawei",
            image: tableticons.huawei
        },
        {
            id: 5,
            name: "Lenovo",
            image: tableticons.lenovo
        },
        {
            id: 6,
            name: "Masstel",
            image: tableticons.masstel
        },
        {
            id: 7,
            name: "Samsung",
            image: tableticons.samsung
        },
        {
            id: 8,
            name: "Xiaomi",
            image: tableticons.xiaomi
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

export default Tablet;
