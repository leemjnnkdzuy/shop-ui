import classNames from "classnames/bind";
import style from "./Acessory.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";
import ProductBody from "~/components/Layout/components/ProductBody";
import { useState, useEffect } from "react";

import AcessorySidebarProduct from "~/components/Layout/components/AcessorySidebarProduct";
import acessorybanner from "~/assets/brand/acessory/acessorybanner";
import acessoryicons from "~/assets/brand/acessory/acessoryicons";

import { default as request } from "~/utils/request";

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
			name: "Củ sạc",
			image: acessoryicons.charger,
		},
		{
			id: 2,
			name: "Dây cáp",
			image: acessoryicons.chargingcable,
		},
		{
			id: 3,
			name: "Earphone",
			image: acessoryicons.earphone,
		},
		{
			id: 4,
			name: "Headphone",
			image: acessoryicons.headphone,
		},
		{
			id: 5,
			name: "Bàn phím",
			image: acessoryicons.keyboard,
		},
		{
			id: 6,
			name: "Chuột",
			image: acessoryicons.mouse,
		},
		{
			id: 7,
			name: "Lót chuột",
			image: acessoryicons.mousepad,
		},
		{
			id: 8,
			name: "Sản phẩm mạng",
			image: acessoryicons.thietbimang,
		},
		{
			id: 9,
			name: "Ốp lưng",
			image: acessoryicons.phonecase,
		},
		{
			id: 10,
			name: "Ổ cứng di động",
			image: acessoryicons.luutru,
		},
		{
			id: 11,
			name: "Sạc dự phòng",
			image: acessoryicons.powerbank,
		},
		{
			id: 12,
			name: "Kính cường lực",
			image: acessoryicons.temperedglass,
		},
	];

	const [phukienItems, setPhukienItems] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState(null);

	const getCategoryEndpoint = (categoryId) => {
		if (categoryId === null) {
			return "phukien/getThumnailItems";
		}
		const endpointMap = {
			1: "chargerItem/getThumnailItems",
			2: "chargingCableItem/getThumnailItems",
			3: "earphoneItem/getThumnailItems",
			4: "headphoneItem/getThumnailItems",
			5: "keyboardItem/getThumnailItems",
			6: "mouseItem/getThumnailItems",
			7: "mousePadItem/getThumnailItems",
			8: "networkProductItem/getThumnailItems",
			9: "phoneCaseItem/getThumnailItems",
			10: "portableDriveItem/getThumnailItems",
			11: "powerBankItem/getThumnailItems",
			12: "temperedGlassItem/getThumnailItems",
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
				setPhukienItems(response.data);
			} catch (error) {
				console.log("Failed to fetch items:", error);
				await new Promise((resolve) => setTimeout(resolve, 3000));
			}
		};

		fetchItems();
	}, [selectedCategory]);

	return (
		<div className={cx("wrapper")}>
			<div className={cx("banner-body")}>
				<BannerProduct ListBanner={banners} />
			</div>
			<div className={cx("brand-choice")}>
				<BrandList
					name={"Loại sản phẩm"}
					brands={brands}
					onBrandClick={handleCategoryClick}
					activeId={selectedCategory}
				/>
			</div>
			<div className={cx("inner")}>
				<div className={cx("sidebar")}>
					<AcessorySidebarProduct />
				</div>
				<div className={cx("content")}>
					<ProductBody productList={phukienItems} />
				</div>
			</div>
		</div>
	);
}

export default Acessory;
