import classNames from "classnames/bind";
import style from "./Acessory.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";
import ProductBody from "~/components/Layout/components/ProductBody";
import { useState, useEffect } from "react";

import AcessorySidebarProduct from "~/components/Layout/components/AcessorySidebarProduct";
import acessorybanner from "~/assets/brand/acessory/acessorybanner";
import acessoryicons from "~/assets/brand/acessory/acessoryicons";
import images from "~/assets/images";

import { default as request } from '~/utils/request';

const cx = classNames.bind(style);

function Acessory() {
    const banners = [
        acessorybanner.banner1,
        acessorybanner.banner2,
        acessorybanner.banner3,
        acessorybanner.banner4,
        acessorybanner.banner5,
        acessorybanner.banner6,
    ];

    const brands = [
        {
            id: 1,
            name: "Âm thanh và hình ảnh",
            image: acessoryicons.amthanhvahinhanh
        },
        {
            id: 2,
            name: "Gear",
            image: acessoryicons.gear
        },
        {
            id: 3,
            name: "Lưu trữ",
            image: acessoryicons.luutru
        },
        {
            id: 4,
            name: "Phụ kiện điện thoại",
            image: acessoryicons.phukiendienthoai
        },
        {
            id: 5,
            name: "Phụ kiện laptop",
            image: acessoryicons.phukienlaptop
        },
        {
            id: 6,
            name: "Thiết bị mạng",
            image: acessoryicons.thietbimang
        }
    ];

    const [phukienItems, setPhukienItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhukienItems = async () => {
            try {
                const response = await request.get('api/phukien/getThumnailItems');
                setPhukienItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchPhukienItems();
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
                    <AcessorySidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={phukienItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Acessory;
