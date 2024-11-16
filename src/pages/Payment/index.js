import classNames from "classnames/bind";
import styles from "./Payment.module.scss";

const cx = classNames.bind(styles);

const Payment = () => {
	const listPrice = [
		{ name: "Áo sơ mi trắng", price: 200000 },
		{ name: "Áo sơ mi đen", price: 250000 },
		{ name: "Áo sơ mi xanh", price: 300000 },
	];
	const listFee = [
		{ name: "Phí vận chuyển", price: 0 },
		{ name: "Phí đóng gói", price: 0 },
	];

	const listVoucher = [
		{ name: "Voucher giảm 10%", price: -10000 },
		{ name: "Voucher giảm 20%", price: -20000 },
	];

	const name = "Hồ Văn Thanh";
	const email = "duylelv17@gmail.com";
	const phone = "0123456789";
	const address = "123 Đường 123, Quận 1, TP.HCM";

	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Thanh toán</div>
				</div>

				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Thông tin người đặt hàng</div>
					<div className={cx("inner-tag-content")}>
						{/* Họ và tên */}
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Họ và tên</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input type="text" placeholder={name} />
							</div>
						</div>
						{/* Email */}
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Email</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input type="text" placeholder={email} />
							</div>
						</div>
						{/* Số điện thoại */}
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Số điện thoại</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input type="text" placeholder={phone} />
							</div>
						</div>
						{/* Địa chỉ */}
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Địa chỉ</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input type="text" placeholder={address} />
							</div>
						</div>
					</div>
				</div>
				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Phương thức thanh toán</div>
				</div>
			</div>
			<div className={cx("sidebar")}>
				<div className={cx("sidebar-title")}>Thông tin đơn hàng</div>
				<div className={cx("sidebar-content")}>
					<div className={cx("sidebar-content-item")}>
						<div className={cx("item-title")}>
							<div className={cx("item-title-first")}>Sản phẩm</div>
							<div className={cx("item-title-second")}>Giá</div>
						</div>
						<div className={cx("item-content")}>
							{listPrice.map((item, index) => (
								<div className={cx("item-content-row")} key={index}>
									<div className={cx("item-content-first")}>{item.name}</div>
									<div className={cx("item-content-second")}>
										{item.price.toLocaleString("vi-VN")} ₫
									</div>
								</div>
							))}
						</div>
						<div className={cx("item-title")}>
							<div className={cx("item-title-first")}>Phụ phí</div>
							<div className={cx("item-title-second")}>Giá</div>
						</div>
						<div className={cx("item-content")}>
							{listFee.map((item, index) => (
								<div className={cx("item-content-row")} key={index}>
									<div className={cx("item-content-first")}>{item.name}</div>
									<div className={cx("item-content-second")}>
										{item.price === 0 ? "Miễn phí" : item.price.toLocaleString("vi-VN") + " ₫"}
									</div>
								</div>
							))}
						</div>
						<div className={cx("item-title")}>
							<div className={cx("item-title-first")}>Voucher</div>
							<div className={cx("item-title-second")}>Giảm</div>
						</div>
						<div className={cx("item-content")}>
							{listVoucher.map((item, index) => (
								<div className={cx("item-content-row")} key={index}>
									<div className={cx("item-content-first")}>{item.name}</div>
									<div className={cx("item-content-second")}>
										{item.price.toLocaleString("vi-VN")} ₫
									</div>
								</div>
							))}
						</div>
						<div className={cx("item-title")} />
						<div className={cx("item-content-row")}>
							<div className={cx("item-total-first")}>Cần thanh toán</div>
							<div className={cx("item-total-second")}>
								{(
									listPrice.reduce((acc, cur) => acc + cur.price, 0) +
									listFee.reduce((acc, cur) => acc + cur.price, 0) +
									listVoucher.reduce((acc, cur) => acc + cur.price, 0)
								).toLocaleString("vi-VN")}{" "}
								₫
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Payment;
