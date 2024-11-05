import classNames from "classnames/bind";
import style from "./Washer.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import WasherSidebarProduct from "~/components/Layout/components/WasherSidebarProduct";
import washerbanner from "~/assets/brand/washer/washerbanner";
import washericons from "~/assets/brand/washer/washericons";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

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

    const [washerItems, setWasherItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWasherItems = async () => {
            try {
                const response = await request.get('api/washerItem/getThumnailItems');
                setWasherItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchWasherItems();
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
                    <WasherSidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={washerItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Washer;
