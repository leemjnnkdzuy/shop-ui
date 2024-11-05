import classNames from "classnames/bind";
import style from "./Phone.module.scss";
import phonebanner from "~/assets/brand/phone/phonebanner";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import phoneicons from "~/assets/brand/phone/phoneicons";
import PhoneSidebarProduct from "~/components/Layout/components/PhoneSidebarProduct";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';

const cx = classNames.bind(style);

function Phone() {

    const banners = [
        phonebanner.banner1,
        phonebanner.banner2,
        phonebanner.banner3,
        phonebanner.banner4,
        phonebanner.banner5,
    ];

    const brands = [
        {
            id: 1,
            name: "Apple",
            image: phoneicons.iphone
        },
        {
            id: 2,
            name: "Samsung",
            image: phoneicons.Samsung
        },
        {
            id: 3,
            name: "Benco",
            image: phoneicons.Benco
        },
        {
            id: 4,
            name: "Xiaomi",
            image: phoneicons.Xiaomi
        },
        {
            id: 5,
            name: "Oppo",
            image: phoneicons.Oppo
        },
        {
            id: 6,
            name: "Vivo",
            image: phoneicons.Vivo
        },
        {
            id: 7,
            name: "Realme",
            image: phoneicons.Realme
        },
        {
            id: 8,
            name: "Tecno",
            image: phoneicons.Tecno
        },
        {
            id: 9,
            name: "ZTE",
            image: phoneicons.ZTE
        },
        {
            id: 10,
            name: "Honor",
            image: phoneicons.Honor
        },
    ];

    const [phoneItems, setPhoneItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPhoneItems = async () => {
            try {
                const response = await request.get('api/phoneItem/getThumnailItems');
                setPhoneItems(response.data);
                setLoading(false);
            } catch (error) {
                await new Promise(resolve => setTimeout(resolve, 3000));
            }
        };

        fetchPhoneItems();
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
                    <PhoneSidebarProduct />
                </div>
                <div className={cx("content")}>
                    {loading ? (
                        <img src={images.loading} alt="loading" />
                    ) : (
                        <ProductBody productList={phoneItems} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Phone;
