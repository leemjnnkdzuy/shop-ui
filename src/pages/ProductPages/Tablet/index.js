import classNames from "classnames/bind";
import style from "./Tablet.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TabletSidebarProduct from "~/components/Layout/components/TabletSidebarProduct";
import tabletbanner from "~/assets/brand/tablet/tabletbanner";
import tableticons from "~/assets/brand/tablet/tableticons";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

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
            name: "Honor",
            image: tableticons.honor
        },
        {
            id: 3,
            name: "Huawei",
            image: tableticons.huawei
        },
        {
            id: 4,
            name: "Lenovo",
            image: tableticons.lenovo
        },
        {
            id: 5,
            name: "Samsung",
            image: tableticons.samsung
        },
        {
            id: 6,
            name: "Xiaomi",
            image: tableticons.xiaomi
        },
    ];

    const [tabletItems, setTabletItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTabletItems = async () => {
            try {
                const response = await request.get('api/tabletItem/getThumnailItems');
                setTabletItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchTabletItems();
    }, []);

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
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={tabletItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Tablet;
