import classNames from "classnames/bind";
import style from "./PC.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";

import LinhKienSidebarProduct from "~/components/Layout/components/LinhKienSidebarProduct";
import linhkienbanner from "~/assets/brand/linhkien/linhkienbanner";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';


const cx = classNames.bind(style);

function PC() {
    const banners = [
        linhkienbanner.banner1,
        linhkienbanner.banner2,
    ];
  
    const [linhkienItems, setLinhkienItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLinhkienItems = async () => {
            try {
                const response = await request.get('api/pc/getThumnailItems');
                setLinhkienItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchLinhkienItems();
    }, []);


    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <BannerProduct ListBanner={banners} />
            </div>
            <div className={cx("inner")}>
                <div className={cx("sidebar")}>
                    <LinhKienSidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={linhkienItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PC;
