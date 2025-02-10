import classNames from "classnames/bind";
import style from "./Fridge.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import FridgeSidebarProduct from "~/components/Layout/components/FridgeSidebarProduct";
import fridgebanner from "~/assets/brand/fridge/fridgebanner";
import fridgeicons from "~/assets/brand/fridge/fridgeicons";
import ProductBody from "~/components/Layout/components/ProductBody";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from "~/utils/request";

const cx = classNames.bind(style);

function Fridge() {
	const banners = [
		fridgebanner.banner1,
		fridgebanner.banner2,
		fridgebanner.banner3,
		fridgebanner.banner4,
	];

	const brands = [
		{
			id: 1,
			name: "Casper",
			image: fridgeicons.casper,
		},
		{
			id: 2,
			name: "LG",
			image: fridgeicons.lg,
		},
		{
			id: 3,
			name: "Samsung",
			image: fridgeicons.samsung,
		},
		{
			id: 4,
			name: "Hisense",
			image: fridgeicons.hisense,
		},
		{
			id: 5,
			name: "Sharp",
			image: fridgeicons.sharp,
		},
		{
			id: 6,
			name: "Toshiba",
			image: fridgeicons.toshiba,
		},
	];

	const [fridgeItems, setFridgeItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchFridgeItems = async () => {
			try {
				const response = await request.get("api/fridgeItem/getThumnailItems");
				setFridgeItems(response.data);
				setLoading(false);
			} catch (error) {
				await new Promise((resolve) => setTimeout(resolve, 3000));
			}
		};

		fetchFridgeItems();
	}, []);

	return (
		<div className={cx("wrapper")}>
			<div className={cx("banner-body")}>
				<BannerProduct ListBanner={banners} />
			</div>
			<div className={cx("brand-choice")}>
				<BrandList brands={brands} />
			</div>
			<div className={cx("inner")}>
				<div className={cx("sidebar")}>
					<FridgeSidebarProduct />
				</div>
				<div className={cx("content")}>
					{loading ? (
						<img src={images.loading} alt="loading" />
					) : (
						<ProductBody productList={fridgeItems} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Fridge;
