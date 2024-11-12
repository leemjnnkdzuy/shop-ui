import classNames from "classnames/bind";
import style from "./TV.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import TVSidebarProduct from "~/components/Layout/components/TVSidebarProduct";
import TVbanner from "~/assets/brand/TV/TVbanner";
import TVicons from "~/assets/brand/TV/TVicons";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

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
            name: "LG",
            image: TVicons.lg
        },
        {
            id: 2,
            name: "Samsung",
            image: TVicons.samsung
        },
        {
            id: 3,
            name: "TCL",
            image: TVicons.tcl
        },
        {
            id: 4,
            name: "Xiaomi",
            image: TVicons.xiaomi
        },
    ];

    const [tvItems, setTvItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTvItems = async () => {
            try {
                const response = await request.get('api/tvItem/getThumnailItems');
                setTvItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchTvItems();
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
                    <TVSidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={tvItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default TV;
