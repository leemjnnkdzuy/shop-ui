import React, { useState, useEffect } from "react";
import classNames from "classnames/bind";
import styles from "./Payment.module.scss";
import { useNavigate } from "react-router-dom";
import logopayment from "~/assets/logopayment";
import request, { URL } from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";
import images from "~/assets/images";

const cx = classNames.bind(styles);

const Payment = () => {
	const navigate = useNavigate();
	const handleNavigate = (path) => {
		navigate(path);
	};

	const listFee = [
		{ name: "Phí vận chuyển", price: 0 },
		{ name: "Phí đóng gói", price: 0 },
	];

	const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	const [cartItems, setCartItems] = useState([]);
	const [userData, setUserData] = useState({
		fullname: "",
		email: "",
		phonemumber: "",
		address: "",
	});

	const [formInput, setFormInput] = useState({
		fullname: "",
		email: "",
		phonemumber: "",
		address: "",
	});

	const [selectedVoucher] = useState(null);
	const [voucherInput, setVoucherInput] = useState("");
	const [voucherError, setVoucherError] = useState("");
	const [appliedVouchers, setAppliedVouchers] = useState([]);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [showPopup, setShowPopup] = useState(false);
	const [showPopupWarning, setShowPopupWarning] = useState(false);
	const [isProcessing, setIsProcessing] = useState(false);

	const Loading = () => {
		return (
			<div className={cx("loading")}>
				<img src={images.loading} alt="loading" />
			</div>
		);
	};

	useEffect(() => {
		const fetchUserData = async () => {
			const token =
				localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
			if (!token) return;

			try {
				const response = await request.get("api/user/get-user-data", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				setUserData(response.data);
			} catch (error) {
				console.error("Error fetching user data:", error);
			}
		};

		fetchUserData();
	}, []);

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormInput((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	useEffect(() => {
		const fetchCartItems = async () => {
			const token =
				localStorage.getItem("userToken") || sessionStorage.getItem("userToken");

			if (!token) {
				navigate("/login");
				return;
			}

			try {
				const response = await request.get("api/user/cart", {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});

				const transformedItems = response.data.map((item) => ({
					...item,
					img: `${URL}public/${item.img}`,
					id: item.productId,
				}));

				setCartItems(transformedItems);
			} catch (error) {
				navigate("/login");
			} finally {
				setIsLoading(false);
			}
		};

		fetchCartItems();
	}, [navigate]);

	const handleVoucherValidation = async () => {
		if (!voucherInput.trim()) {
			setVoucherError("Vui lòng nhập mã giảm giá");
			return;
		}

		const token =
			localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
		if (!token) {
			setVoucherError("Vui lòng đăng nhập để sử dụng mã giảm giá");
			return;
		}

		try {
			const response = await request.post(
				"api/vouchers/validate",
				{
					code: voucherInput.toUpperCase().trim(),
					orderTotal: totalAmount,
					appliedVouchers: appliedVouchers.map((v) => v.code),
				},
				{
					headers: { Authorization: `Bearer ${token}` },
				}
			);

			if (response.data) {
				if (appliedVouchers.length >= 3) {
					setVoucherError("Không thể áp dụng quá 3 mã giảm giá");
					return;
				}

				if (appliedVouchers.some((v) => v.code === response.data.code)) {
					setVoucherError("Mã giảm giá này đã được áp dụng");
					return;
				}

				const newVoucher = response.data;
				const existingVoucherTypes = appliedVouchers.map((v) => v.type);

				if (newVoucher.type === "PERCENTAGE") {
					if (existingVoucherTypes.filter((t) => t === "PERCENTAGE").length >= 1) {
						setVoucherError("Chỉ được áp dụng một mã giảm giá phần trăm");
						return;
					}
				}

				setAppliedVouchers([...appliedVouchers, response.data]);
				setVoucherError("");
				setVoucherInput("");
			}
		} catch (err) {
			console.error("Voucher validation error:", err);
			setVoucherError(
				err.response?.data?.error || "Lỗi khi áp dụng mã giảm giá. Vui lòng thử lại."
			);
		}
	};

	const removeVoucher = (voucherCode) => {
		setAppliedVouchers(appliedVouchers.filter((v) => v.code !== voucherCode));
	};

	const totalAmount = cartItems.reduce(
		(total, item) => total + item.price * item.quantity,
		0
	);

	const totalFees = listFee.reduce((total, fee) => total + fee.price, 0);

	const calculateFinalTotal = () => {
		let total = totalAmount + totalFees;
		let percentageDiscount = 0;
		let fixedDiscount = 0;

		const sortedVouchers = [...appliedVouchers].sort((a, b) =>
			a.type === "FIXED" ? -1 : 1
		);

		for (const voucher of sortedVouchers) {
			if (voucher.type === "PERCENTAGE") {
				percentageDiscount += (total * voucher.value) / 100;
			} else if (voucher.type === "FIXED") {
				fixedDiscount += voucher.value;
			}
		}

		total -= fixedDiscount;
		total -= percentageDiscount;
		return Math.max(0, total);
	};

	const handlePayment = async () => {
		if (!selectedPaymentMethod) {
			setShowPopupWarning(true);
			return;
		}

		setIsProcessing(true);

		const paymentData = {
			orderItems: cartItems.map((item) => ({
				productId: item.id,
				name: item.name,
				price: item.price,
				quantity: item.quantity,
				img: item.img,
			})),
			shippingInfo: {
				fullname: formInput.fullname || userData.fullname,
				email: formInput.email || userData.email,
				phonemumber: formInput.phonemumber || userData.phonemumber,
				address: formInput.address || userData.address,
			},
			paymentMethod: selectedPaymentMethod,
			appliedVouchers: appliedVouchers,
			totalAmount: totalAmount,
			discountedAmount: totalAmount - calculateFinalTotal(),
			finalAmount: calculateFinalTotal(),
		};

		try {
			if (selectedPaymentMethod === "cash") {
				const response = await request.post("api/payment/cash", paymentData, {
					headers: {
						Authorization: `Bearer ${
							localStorage.getItem("userToken") || sessionStorage.getItem("userToken")
						}`,
					},
				});

				if (response.data.success) {
					setSuccessMessage(response.data.message);
					setShowPopup(true);
				}
			}
		} catch (error) {
			console.error("Payment error:", error);
			setErrorMessage(
				error.response?.data?.message || "Có lỗi xảy ra khi thanh toán"
			);
			setShowPopup(true);
		} finally {
			setIsProcessing(false);
		}
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Thông tin sản phẩm</div>
					<div className={cx("inner-tag-content")}>
						{isLoading ? (
							<Loading />
						) : cartItems.length > 0 ? (
							cartItems.map((item, index) => (
								<div key={index} className={cx("product-item")}>
									<div className={cx("product-thumbnail")}>
										<img src={item.img} alt={item.name} />
									</div>
									<div className={cx("product-details")}>
										<div className={cx("product-name")}>{item.name}</div>
										<div className={cx("product-quantity")}>Số lượng: {item.quantity}</div>
										<div className={cx("product-price")}>
											Đơn giá: {item.price.toLocaleString("vi-VN")} ₫
										</div>
									</div>
								</div>
							))
						) : (
							<div>Không có sản phẩm trong giỏ hàng</div>
						)}
					</div>
				</div>

				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Thông tin người đặt hàng</div>
					<div className={cx("inner-tag-content")}>
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Họ và tên</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input
									type="text"
									name="fullname"
									value={formInput.fullname}
									onChange={handleInputChange}
									placeholder={userData.fullname}
								/>
							</div>
						</div>
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Email</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input
									type="text"
									name="email"
									value={formInput.email}
									onChange={handleInputChange}
									placeholder={userData.email}
								/>
							</div>
						</div>
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Số điện thoại</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input
									type="text"
									name="phonemumber"
									value={formInput.phonemumber}
									onChange={handleInputChange}
									placeholder={userData.phonemumber}
								/>
							</div>
						</div>
						<div className={cx("inner-tag-content-item")}>
							<div className={cx("inner-tag-content-item-title")}>Địa chỉ</div>
							<div className={cx("inner-tag-content-item-input")}>
								<input
									type="text"
									name="address"
									value={formInput.address}
									onChange={handleInputChange}
									placeholder={userData.address}
								/>
							</div>
						</div>
					</div>
				</div>
				<div className={cx("inner-tag")}>
					<div className={cx("inner-tag-title")}>Phương thức thanh toán</div>
					<div className={cx("inner-tag-content-item-payment")}>
						<div
							className={cx("inner-tag-content-item-payment-tag", {
								selected: selectedPaymentMethod === "cash",
							})}
						>
							<input
								type="radio"
								id="cash"
								name="payment"
								value="cash"
								onChange={(e) => setSelectedPaymentMethod(e.target.value)}
								checked={selectedPaymentMethod === "cash"}
							/>
							<img src={logopayment.money} alt="cash" />
							<div className={cx("inner-tag-content-item-payment-title")}>
								Thanh toán khi nhận hàng
							</div>
						</div>
						<div
							className={cx("inner-tag-content-item-payment-tag", {
								selected: selectedPaymentMethod === "momo",
							})}
						>
							<input
								type="radio"
								id="momo"
								name="payment"
								value="momo"
								onChange={(e) => setSelectedPaymentMethod(e.target.value)}
								checked={selectedPaymentMethod === "momo"}
							/>
							<img src={logopayment.momo} alt="cash" />
							<div className={cx("inner-tag-content-item-payment-title")}>
								Thanh toán thông qua Momo
							</div>
						</div>
						<div
							className={cx("inner-tag-content-item-payment-tag", {
								selected: selectedPaymentMethod === "vnpay",
							})}
						>
							<input
								type="radio"
								id="vnpay"
								name="payment"
								value="vnpay"
								onChange={(e) => setSelectedPaymentMethod(e.target.value)}
								checked={selectedPaymentMethod === "vnpay"}
							/>
							<img src={logopayment.vnpay} alt="cash" />
							<div className={cx("inner-tag-content-item-payment-title")}>
								Thanh toán thông qua VNPay
							</div>
						</div>
					</div>
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
							{cartItems.map((item, index) => (
								<div className={cx("item-content-row")} key={index}>
									<div className={cx("item-content-first")}>{item.name}</div>
									<div className={cx("item-content-second")}>
										{(item.price * item.quantity).toLocaleString("vi-VN")} ₫
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
						<div className={cx("voucher-section")}>
							<div className={cx("voucher-input-wrapper")}>
								<input
									type="text"
									value={voucherInput}
									onChange={(e) => setVoucherInput(e.target.value.toUpperCase())}
									placeholder="Nhập mã giảm giá"
									className={cx("voucher-input")}
								/>
								<button onClick={handleVoucherValidation} className={cx("apply-voucher-btn")}>
									Áp dụng
								</button>
							</div>
							{voucherError && <div className={cx("voucher-error")}>{voucherError}</div>}
							{selectedVoucher && (
								<div className={cx("applied-voucher")}>
									Giảm giá:{" "}
									{selectedVoucher.type === "PERCENTAGE"
										? `${selectedVoucher.value}%`
										: `${selectedVoucher.value.toLocaleString("vi-VN")}₫`}
								</div>
							)}
						</div>
						<div className={cx("item-content")}>
							{appliedVouchers.map((voucher, index) => (
								<div className={cx("item-content-row")} key={index}>
									<div className={cx("item-content-first")}>
										{voucher.type === "PERCENTAGE"
											? `Voucher giảm ${voucher.value}%`
											: `Voucher giảm ${voucher.value.toLocaleString("vi-VN")}₫`}
										<button
											onClick={() => removeVoucher(voucher.code)}
											className={cx("remove-voucher")}
										>
											×
										</button>
									</div>
									<div className={cx("item-content-second")}>
										{voucher.type === "PERCENTAGE"
											? `-${((totalAmount * voucher.value) / 100).toLocaleString("vi-VN")}₫`
											: `-${voucher.value.toLocaleString("vi-VN")}₫`}
									</div>
								</div>
							))}
						</div>
						<div className={cx("item-title")} />
						<div className={cx("item-content-row")}>
							<div className={cx("item-total-first")}>Cần thanh toán</div>
							<div className={cx("item-total-second")}>
								{calculateFinalTotal().toLocaleString("vi-VN")} ₫
							</div>
						</div>
						<div className={cx("item-content-row")}>
							<button
								className={cx("item-button")}
								onClick={handlePayment}
								disabled={isProcessing}
							>
								{isProcessing ? "Đang xử lý..." : "Thanh toán"}
							</button>
						</div>
						<div className={cx("item-content-column")}>
							<div className={cx("item-content-description")}>
								Sao khi xác nhận đơn hàng, chúng tôi sẽ liên hệ với bạn để xác nhận thông tin
								qua email: <p>pixelshop.company@gmail.com</p>.
							</div>
							<div className={cx("item-content-description")}>
								Bạn có thể đọc trước các chính sách của chúng tôi tại đây:
							</div>
							<div
								onClick={() => handleNavigate("/OrderPages/Quy_Che_Hoat_Dong")}
								className={cx("item-content-description-link")}
							>
								Quy chế hoạt động
							</div>
							<div
								onClick={() =>
									handleNavigate("/Policy/Chinh_Sach_Thu_Thap_Va_Xu_Ly_Du_Lieu_Ca_Nhan")
								}
								className={cx("item-content-description-link")}
							>
								Chính sách thu thập và xử lý dữ liệu cá nhân
							</div>
						</div>
					</div>
				</div>
			</div>
			{isProcessing && <Loading />}
			{showPopup && (successMessage || errorMessage) && (
				<Popup>
					<div className={cx("header")}>
						<h2>Thông báo</h2>
						<button
							onClick={() => {
								setShowPopup(false);
								if (successMessage) {
									navigate("/");
								}
							}}
							className={cx("close-btn")}
						>
							&times;
						</button>
					</div>
					<div className={cx("content")}>
						<p>{successMessage || errorMessage}</p>
					</div>
				</Popup>
			)}
			{showPopupWarning && (
				<Popup>
					<div className={cx("header")}>
						<h2>Cảnh báo</h2>
						<button onClick={() => setShowPopupWarning(false)} className={cx("close-btn")}>
							&times;
						</button>
					</div>
					<div className={cx("content")}>
						<p>Vui lòng chọn phương thức thanh toán</p>
					</div>
				</Popup>
			)}
		</div>
	);
};

export default Payment;
