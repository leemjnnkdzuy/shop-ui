import classNames from "classnames/bind";
import style from "./BoughtItem.module.scss";

const cx = classNames.bind(style);

function BoughtItem({ img, name, description, quantity, price, date }) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("container")}>
				<div className={cx("content")}>
					<div className={cx("product")}>
						<div className={cx("image")}>
							<img src={img} alt="product" />
						</div>
						<div className={cx("info")}>
							<div className={cx("name")}>{name}</div>
							<div className={cx("description")}>{description}</div>
						</div>
					</div>
					<div className={cx("quantity")}>{quantity}</div>
					<div className={cx("price")}>
						{(price || 0).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
					</div>
					<div className={cx("date")}>{date}</div>
				</div>
			</div>
		</div>
	);
}

export default BoughtItem;
