import classNames from "classnames/bind";
import style from "./SaleItem.module.scss";
import images from "~/assets/images";
import { Link } from "react-router-dom";

const cx = classNames.bind(style);

function SaleItem({ img, name, price, discount, _id }) {
	const formatToVND = (amount) => {
		return amount.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
	};

	const discountAmount = price && discount ? price - discount : 0;

	return (
		<Link to={`/ProductPages/${_id}`} className={cx("wrapper")}>
			<div className={cx("img")}>
				<img src={img ? img : images.loading} alt={name ? name : "Sản Phẩm"} />
			</div>
			<div className={cx("content")}>
				<div className={cx("inner")}>
					<h4 className={cx("name")}>{name ? name : "Sản Phẩm"}</h4>
					<div className={cx("price-item")}>
						<span className={cx("discount")}>
							{discount ? formatToVND(discount) : "Giá"}
						</span>
						<span className={cx("price")}>{price ? formatToVND(price) : "Giảm Từ"}</span>
					</div>
					<span className={cx("sale")}>Giảm {formatToVND(discountAmount)}</span>
				</div>
			</div>
		</Link>
	);
}

export default SaleItem;
