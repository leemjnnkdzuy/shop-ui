import classNames from "classnames/bind";
import style from "./DustCollector.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import ProductBody from "~/components/Layout/components/ProductBody";
import products from "~/assets/product";
import DustCollectorSidebarProduct from "~/components/Layout/components/DustCollectorSidebarProduct";
import dustCollectorbanner from "~/assets/brand/dustCollector/dustCollectorbanner";
import dustCollectoricons from "~/assets/brand/dustCollector/dustCollectoricons";

import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

const cx = classNames.bind(style);

function DustCollector() {
    const banners = [
        dustCollectorbanner.banner1,
        dustCollectorbanner.banner2,
    ];

    const [dustCollectorItems, setDustCollectorItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDustCollectorItems = async () => {
            try {
                const response = await request.get('api/dustCollectorItem/getThumnailItems');
                setDustCollectorItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchDustCollectorItems();
    }, []);

    const brands = [
        {
            id: 1,
            name: "Robot hút bụi lau nhà", 
            image: dustCollectoricons.robothutbuilaunha
        },
        {
            id: 2,
            name: "Robot lau kính",
            image: dustCollectoricons.robotlaukinh
        },
        {
            id: 3,
            name: "Phụ kiện máy hút bụi",
            image: dustCollectoricons.phukien
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
                    <DustCollectorSidebarProduct onFilter={(filter) => console.log(filter)} />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={dustCollectorItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default DustCollector;
