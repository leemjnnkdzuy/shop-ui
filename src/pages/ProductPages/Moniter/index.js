import classNames from "classnames/bind";
import style from "./Moniter.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";
import BrandList from "~/components/Layout/components/BrandList";

import ProductBody from "~/components/Layout/components/ProductBody";
import moniterbanner from "~/assets/brand/moniter/moniterbanner";
import monitericons from "~/assets/brand/moniter/monitericons";
import MoniterSidebarProduct from "~/components/Layout/components/MoniterSidebarProduct";
import images from "~/assets/images";
import { useState, useEffect } from "react";

import { default as request } from "~/utils/request";

const cx = classNames.bind(style);

function Moniter() {
	const banners = [
		moniterbanner.banner1,
		moniterbanner.banner2,
		moniterbanner.banner3,
		moniterbanner.banner4,
		moniterbanner.banner5,
		moniterbanner.banner6,
	];

	const brands = [
		{
			id: 1,
			name: "Acer",
			image: monitericons.acer,
		},
		{
			id: 2,
			name: "Asus",
			image: monitericons.asus,
		},
		{
			id: 3,
			name: "AOC",
			image: monitericons.aoc,
		},
		{
			id: 4,
			name: "Apple",
			image: monitericons.apple,
		},
		{
			id: 5,
			name: "MSI",
			image: monitericons.msi,
		},
		{
			id: 6,
			name: "LG",
			image: monitericons.lg,
		},
		{
			id: 7,
			name: "Samsung",
			image: monitericons.samsung,
		},
		{
			id: 8,
			name: "Dell",
			image: monitericons.dell,
		},
		{
			id: 9,
			name: "Xiaomi",
			image: monitericons.xiaomi,
		},
		{
			id: 10,
			name: "GiGabyte",
			image: monitericons.gigabyte,
		},
		{
			id: 11,
			name: "ViewSonic",
			image: monitericons.viewsonic,
		},
	];

	const [monitorItems, setMonitorItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchMonitorItems = async () => {
			try {
				const response = await request.get("api/monitorItem/getThumnailItems");
				setMonitorItems(response.data);
				setLoading(false);
			} catch (error) {
				await new Promise((resolve) => setTimeout(resolve, 3000));
			}
		};

		fetchMonitorItems();
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
					<MoniterSidebarProduct onFilter={(filter) => console.log(filter)} />
				</div>
				<div className={cx("content")}>
					{loading ? (
						<img src={images.loading} alt="loading" />
					) : (
						<ProductBody productList={monitorItems} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Moniter;
