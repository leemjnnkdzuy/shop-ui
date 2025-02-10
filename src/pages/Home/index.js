import Banner from "~/components/Layout/components/Banner";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import background from "~/assets/background";
import { useEffect, useState } from "react";

import { default as request } from "~/utils/request";

const cx = classNames.bind(style);

function Home() {
	const [saleItems, setSaleItems] = useState([]);

	useEffect(() => {
		const fetchSaleItems = async () => {
			while (true) {
				try {
					const response = await request.get("api/homeItem");
					setSaleItems(response.data);
					break;
				} catch (err) {
					await new Promise((resolve) => setTimeout(resolve, 3000));
				}
			}
		};

		fetchSaleItems();
	}, []);

	return (
		<div className={cx("wrapper")}>
			<div>
				<img className={cx("background")} src={background.background10} alt="logo" />
			</div>
			<div className={cx("container")}>
				<Banner saleItems={saleItems} />
			</div>
		</div>
	);
}

export default Home;
