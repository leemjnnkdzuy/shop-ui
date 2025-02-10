import classNames from "classnames/bind";
import style from "./DustCollector.module.scss";
import BannerProduct from "~/components/Layout/components/BannerProduct";

import ProductBody from "~/components/Layout/components/ProductBody";
import DustCollectorSidebarProduct from "~/components/Layout/components/DustCollectorSidebarProduct";
import dustCollectorbanner from "~/assets/brand/dustCollector/dustCollectorbanner";

import { useState, useEffect } from "react";

import { default as request } from "~/utils/request";

const cx = classNames.bind(style);

function DustCollector() {
	const banners = [dustCollectorbanner.banner1, dustCollectorbanner.banner2];

	const [dustCollectorItems, setDustCollectorItems] = useState([]);

	useEffect(() => {
		const fetchDustCollectorItems = async () => {
			try {
				const response = await request.get("api/dustCollectorItem/getThumbnailItems");
				setDustCollectorItems(response.data);
			} catch (error) {
				await new Promise((resolve) => setTimeout(resolve, 3000));
			}
		};

		fetchDustCollectorItems();
	}, []);

	return (
		<div className={cx("wrapper")}>
			<div className={cx("banner-body")}>
				<BannerProduct ListBanner={banners} />
			</div>
			<div className={cx("inner")}>
				<div className={cx("sidebar")}>
					<DustCollectorSidebarProduct onFilter={(filter) => console.log(filter)} />
				</div>
				<div className={cx("content")}>
					<ProductBody productList={dustCollectorItems} />
				</div>
			</div>
		</div>
	);
}

export default DustCollector;
