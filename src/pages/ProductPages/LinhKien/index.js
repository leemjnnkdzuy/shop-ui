import classNames from "classnames/bind";
import style from "./LinhKien.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import LinhKienSidebarProduct from "~/components/Layout/components/LinhKienSidebarProduct";
import linhkienbanner from "~/assets/brand/linhkien/linhkienbanner";
import linhkienicons from "~/assets/brand/linhkien/linhkienicons";
import linhkienphanloai from "~/assets/brand/linhkien/linhkienphanloai";
import ProductBody from "~/components/Layout/components/ProductBody";
import { useState, useEffect } from "react";

import { default as request } from '~/utils/request';


const cx = classNames.bind(style);

function LinhKien() {
    const banners = [
        linhkienbanner.banner1,
        linhkienbanner.banner2,
    ];

    const phanloai = [
        {
            id: 1,
            name: "CPU",
            image: linhkienphanloai.cpu
        }, 
        {
            id: 2,
            name: "Mainboard",
            image: linhkienphanloai.main
        },
        {
            id: 3,
            name: "RAM",
            image: linhkienphanloai.ram
        },
        {
            id: 4,
            name: "VGA",
            image: linhkienphanloai.vga
        },
        {
            id: 6,
            name: "Tản nhiệt",
            image: linhkienphanloai.heatsink
        },
        {
            id: 5,
            name: "Ổ cứng",
            image: linhkienphanloai.drive
        },
        {
            id: 7,
            name: "Nguồn",
            image: linhkienphanloai.psu
        },
        {
            id: 8,
            name: "Case",
            image: linhkienphanloai.case
        }
    ];
  
    const [linhkienItems, setLinhkienItems] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const getCategoryEndpoint = (categoryId) => {
        if (categoryId === null) {
            return 'linhkien/getThumnailItems';
        }
        const endpointMap = {
            1: 'cpuItem/getThumnailItems',
            2: 'mainboardItem/getThumnailItems',
            3: 'ramItem/getThumnailItems',
            4: 'vgaItem/getThumnailItems',
            5: 'driveItem/getThumnailItems',
            6: 'heatsinkItem/getThumnailItems',
            7: 'psuItem/getThumnailItems',
            8: 'caseItem/getThumnailItems'
        };
        return endpointMap[categoryId];
    };

    const handleCategoryClick = (category) => {
        if (selectedCategory === category.id) {
            setSelectedCategory(null);
        } else {
            setSelectedCategory(category.id);
        }
    };

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const endpoint = getCategoryEndpoint(selectedCategory);
                const response = await request.get(`api/${endpoint}`);
                setLinhkienItems(response.data);
            } catch (error) {
                console.log('Failed to fetch items:', error);
            }
        };

        fetchItems();
    }, [selectedCategory]);

    const brands = [
        {
            id: 1,
            name: "Asus",
            image: linhkienicons.asus
        },
        {
            id: 2,
            name: "Gigabyte",
            image: linhkienicons.gigabyte
        },
        {
            id: 3,
            name: "MSI",
            image: linhkienicons.msi
        },
        {
            id: 4,
            name: "Adata",
            image: linhkienicons.adata
        },
        {
            id: 5,
            name: "AMD",
            image: linhkienicons.amd
        },
        {
            id: 6,
            name: "ASRock",
            image: linhkienicons.asrock
        },
        {
            id: 7,
            name: "Corsair",
            image: linhkienicons.corsair
        },
        {
            id: 8,
            name: "Cooler Master",
            image: linhkienicons.coolermaster
        },
        {
            id: 9,
            name: "Deepcool",
            image: linhkienicons.deepcool
        },
        {
            id: 10,
            name: "G.Skill",
            image: linhkienicons.gskill
        },
        {
            id: 11,
            name: "Intel",
            image: linhkienicons.intel
        },
        {
            id: 12,
            name: "Kingston",
            image: linhkienicons.kingston
        },
        {
            id: 13,
            name: "Western Digital",
            image: linhkienicons.wd
        },
    ];

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <BannerProduct ListBanner={banners} />
            </div>
            <div className={cx("brand-choice")}>
                <BrandList 
                    name={"Loại Linh Kiện"} 
                    brands={phanloai}
                    onBrandClick={handleCategoryClick}
                    activeId={selectedCategory}
                />
            </div>
            <div className={cx("brand-choice")}>
                <BrandList brands={brands}/>
            </div>
            <div className={cx("inner")}>
                <div className={cx("sidebar")}>
                    <LinhKienSidebarProduct />
                </div>
                <div className={cx("content")}>
                    <ProductBody productList={linhkienItems} />
                </div>
            </div>
        </div>
    );
}

export default LinhKien;
