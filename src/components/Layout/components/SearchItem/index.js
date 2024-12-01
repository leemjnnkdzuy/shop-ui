import classNames from "classnames/bind";
import style from "./SearchItem.module.scss";
import { URL } from "~/utils/request";
import images from "~/assets/images";

const cx = classNames.bind(style);

function SearchItem({ data, onClick }) {
	if (!data || !data.Name) {
		return null;
	}

	return (
	<div className={cx("wrapper")} onClick={onClick}>
		<img
			className={cx("avatar")}
			src={`${URL}public/${data.ThumbnailImage}`}
			alt={data.Name}
			onError={(e) => {
				e.target.onerror = null;
				e.target.src = images.noImage;
			}}
		/>
		<div className={cx("info")}>
			<div className={cx("info-tag")}>
				<div className={cx("name")}>{data.Name}</div>
				<div className={cx("price-current")}>
					{new Intl.NumberFormat("vi-VN", {
						style: "currency",
						currency: "VND",
					}).format(data.Discount)}
				</div>
			</div>
			<div className={cx("info-tag-right")}>
				<div className={cx("price-before")}>
					Giảm{" "}
					{new Intl.NumberFormat("vi-VN", {
						style: "currency",
						currency: "VND",
					}).format(data.Price - data.Discount)}
				</div>
				<div className={cx("price-discount")}>
					{new Intl.NumberFormat("vi-VN", {
						style: "currency",
						currency: "VND",
					}).format(data.Price)}
				</div>
			</div>
		</div>
	</div>
);
}

export default SearchItem;
