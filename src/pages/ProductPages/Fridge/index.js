import classNames from "classnames/bind";
import style from "./Fridge.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TabletSidebarProduct from "~/components/Layout/components/TabletSidebarProduct";
import fridgebanner from "~/assets/brand/fridge/fridgebanner";
import fridgeicons from "~/assets/brand/fridge/fridgeicons";



const cx = classNames.bind(style);

function Fridge() {
    const banners = [
        fridgebanner.banner1,
        fridgebanner.banner2,
        fridgebanner.banner3,
        fridgebanner.banner4,
    ];

    const brands = [
        {
            id: 1,
            name: "Casper",
            image: fridgeicons.casper
        },
        {
            id: 2,
            name: "LG",
            image: fridgeicons.lg
        },
        {
            id: 3,
            name: "Samsung",
            image: fridgeicons.samsung
        },
        {
            id: 4,
            name: "Hisense",
            image: fridgeicons.hisense
        },
        {
            id: 5,
            name: "Sharp",
            image: fridgeicons.sharp
        },
        {
            id: 6,
            name: "Toshiba",
            image: fridgeicons.toshiba
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
                    <TabletSidebarProduct />
                </div>
                <div className={cx("content")}>
                    <p>Phone</p>
                </div>
            </div>
        </div>
    );
}

export default Fridge;
