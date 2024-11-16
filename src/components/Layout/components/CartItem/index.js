import { useState } from "react";
import classNames from "classnames/bind";
import style from "./CartItem.module.scss";
import request from "~/utils/request";
import icons from "~/assets/icons";

const cx = classNames.bind(style);

function CartItem({
	productId,
	img,
	name,
	description,
	quantity,
	price,
	onQuantityChange,
	onDelete,
}) {
	const [currentQuantity, setCurrentQuantity] = useState(quantity);
	const [isQuantityModified, setIsQuantityModified] = useState(false);

	const handleQuantityChange = (value) => {
		const parsedValue = value === "" ? "" : parseInt(value, 10);

		if (parsedValue >= 1) {
			setCurrentQuantity(parsedValue);
			onQuantityChange(parsedValue);
		} else if (value === "") {
			setCurrentQuantity(1);
			onQuantityChange(1);
		} else {
			setCurrentQuantity("");
			onQuantityChange(0);
		}
		setIsQuantityModified(true);
	};

	const handleUpdateQuantity = async () => {
		const token =
			localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
		if (!token) {
			return;
		}
		try {
			await request.put(
				"api/user/cart/update",
				{
					productId,
					quantity: currentQuantity,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			setIsQuantityModified(false);
			onQuantityChange(currentQuantity);
		} catch (error) {}
	};

	const increaseQuantity = () => {
		handleQuantityChange(currentQuantity + 1);
	};

	const decreaseQuantity = () => {
		if (currentQuantity > 1) {
			handleQuantityChange(currentQuantity - 1);
		}
	};

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
					<div className={cx("price")}>
						{(price || 0).toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
					</div>
					<div className={cx("quantity-controls")}>
						<button onClick={increaseQuantity}>+</button>
						<input
							type="number"
							value={currentQuantity}
							onChange={(e) => handleQuantityChange(e.target.value)}
							min="1"
						/>
						<button onClick={decreaseQuantity}>-</button>
					</div>
					<div className={cx("total")}>
						{(price * currentQuantity || 0).toLocaleString("vi-VN", {
							style: "currency",
							currency: "VND",
						})}
					</div>
					<div
						className={cx("delete-btn")}
						onClick={isQuantityModified ? handleUpdateQuantity : onDelete}
					>
						{isQuantityModified ? (
							<img src={icons.check} alt="check icon" />
						) : (
							<img src={icons.x} alt="delete icon" />
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartItem;
