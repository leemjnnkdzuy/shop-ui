import classNames from "classnames/bind";
import style from "./Watch.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import WatchSidebarProduct from "~/components/Layout/components/WatchSidebarProduct";
import watchbanner from "~/assets/brand/watch/watchbanner";
import watchicons from "~/assets/brand/watch/watchicons";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

const cx = classNames.bind(style);

function Watch() {
    const banners = [
        watchbanner.banner1,
        watchbanner.banner2,
        watchbanner.banner3,
        watchbanner.banner4,
        watchbanner.banner5,
        watchbanner.banner6,
        watchbanner.banner7
    ];

    const brands = [
        {
            id: 1,
            name: "Amazfit",
            image: watchicons.amazfit
        },
        {
            id: 2,
            name: "Apple",
            image: watchicons.apple
        },
        {
            id: 3,
            name: "Garmin",
            image: watchicons.garmin
        },
        {
            id: 4,
            name: "Huawei",
            image: watchicons.huawei
        },
        {
            id: 5,
            name: "Masstel",
            image: watchicons.masstel
        },
        {
            id: 6,
            name: "Oppo",
            image: watchicons.oppo
        },
        {
            id: 7,
            name: "Samsung",
            image: watchicons.samsung
        },
        {
            id: 8,
            name: "Xiaomi",
            image: watchicons.xiaomi
        },
    ];

    const [watchItems, setWatchItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWatchItems = async () => {
            try {
                const response = await request.get('api/watchItem/getThumnailItems');
                setWatchItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchWatchItems();
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
                    <WatchSidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={watchItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Watch;
