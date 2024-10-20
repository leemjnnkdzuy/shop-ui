import classNames from "classnames/bind";
import style from "./Washer.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TabletSidebarProduct from "~/components/Layout/components/TabletSidebarProduct";
import washerbanner from "~/assets/brand/washer/washerbanner";
import washericons from "~/assets/brand/washer/washericons";



const cx = classNames.bind(style);

function Washer() {
    const banners = [
        washerbanner.banner1,
        washerbanner.banner2,
    ];

    const brands = [
        {
            id: 1,
            name: "Casper",
            image: washericons.casper
        },
        {
            id: 2,
            name: "LG",
            image: washericons.lg
        },
        {
            id: 3,
            name: "Samsung",
            image: washericons.samsung
        },
        {
            id: 4,
            name: "Sharp",
            image: washericons.sharp
        },
        {
            id: 5,
            name: "Aqua",
            image: washericons.aqua
        },
        {
            id: 6,
            name: "Toshiba",
            image: washericons.toshiba
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

export default Washer;
