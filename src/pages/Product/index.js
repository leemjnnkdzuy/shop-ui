import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { URL, default as request } from "~/utils/request";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ProductImage from "~/components/Layout/components/ProductImage";
import FooterProduct from "~/components/Layout/components/FooterProduct";
import icons from "~/assets/icons";

//import DescriptionItem
import DescriptionPhone from "~/components/Layout/components/DescriptionWasher";
import DescriptionCase from "~/components/Layout/components/DescriptionCase";
import DescriptionCharger from "~/components/Layout/components/DescriptionCharger";
import DescriptionChargingCable from "~/components/Layout/components/DescriptionChargingCable";
import DescriptionCpu from "~/components/Layout/components/DescriptionCpu";
import DescriptionDrive from "~/components/Layout/components/DescriptionDrive";
import DescriptionDustCollector from "~/components/Layout/components/DescriptionDustCollector";
import DescriptionEarphone from "~/components/Layout/components/DescriptionEarphone";
import DescriptionFridge from "~/components/Layout/components/DescriptionFridge";
import DescriptionHeadphone from "~/components/Layout/components/DescriptionHeadphone";
import DescriptionHeatsink from "~/components/Layout/components/DescriptionHeatsink";
import DescriptionKeyboard from "~/components/Layout/components/DescriptionKeyboard";
import DescriptionLaptop from "~/components/Layout/components/DescriptionLaptop";
import DescriptionMainboard from "~/components/Layout/components/DescriptionMainboard";
import DescriptionMonitor from "~/components/Layout/components/DescriptionMonitor";
import DescriptionMouse from "~/components/Layout/components/DescriptionMouse";
import DescriptionMousePad from "~/components/Layout/components/DescriptionMousePad";
import DescriptionNetworkProduct from "~/components/Layout/components/DescriptionNetworkProduct";
import DescriptionPc from "~/components/Layout/components/DescriptionPc";
import DescriptionPhoneCase from "~/components/Layout/components/DescriptionPhoneCase";
import DescriptionPortableDrive from "~/components/Layout/components/DescriptionPortableDrive";
import DescriptionPowerBank from "~/components/Layout/components/DescriptionPowerBank";
import DescriptionPsu from "~/components/Layout/components/DescriptionPsu";
import DescriptionRam from "~/components/Layout/components/DescriptionRam";
import DescriptionTablet from "~/components/Layout/components/DescriptionTablet";
import DescriptionTemperedGlass from "~/components/Layout/components/DescriptionTemperedGlass";
import DescriptionTV from "~/components/Layout/components/DescriptionTV";
import DescriptionVga from "~/components/Layout/components/DescriptionVga";
import DescriptionWasher from "~/components/Layout/components/DescriptionWasher";
import DescriptionWatch from "~/components/Layout/components/DescriptionWatch";

const cx = classNames.bind(styles);

function Product() {
	const location = useLocation();
	const productId = location.pathname.split("/").pop();
	const navigate = useNavigate();
	const [Items, setItems] = useState(null);
	const [showFullDescription, setShowFullDescription] = useState(false);
	const [selectedStorage, setSelectedStorage] = useState(0);
	const [selectedColor, setSelectedColor] = useState(0);
	const [storage, setStorage] = useState([]);
	const [color, setColor] = useState([]);
	const [showNotification, setShowNotification] = useState(false);
	const [notificationMessage, setNotificationMessage] = useState("");
	const [notificationType, setNotificationType] = useState("success");
	const [modelType, setModelType] = useState(null);

	const imagePrefix = `${URL}public/`;

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await request.get(`api/getItem/${productId}`);
				if (response && response.data) {
					if (Object.keys(response.data).length === 0) {
						navigate("/Error");
					} else {
						setModelType(response.data[0]?.modelName || null);
						setItems(response.data[1]?.data || null);
					}
				} else {
					navigate("/Error");
				}
			} catch (error) {
				navigate("/Error");
			}
		};

		fetchItems();
	}, [productId, navigate]);

	useEffect(() => {
		if (Items?.Storage) {
			let storageArray = Array.isArray(Items.Storage)
				? Items.Storage
				: [Items.Storage];
			const parseValue = (str) => {
				if (str.includes("TB")) return parseFloat(str) * 1024;
				if (str.includes("GB")) return parseFloat(str);
				return 0;
			};
			const sortedStorage = [...storageArray].sort(
				(a, b) => parseValue(a) - parseValue(b)
			);
			setStorage(sortedStorage);
		}
		if (Items?.Color) {
			let colorArray = Array.isArray(Items.Color) ? Items.Color : [Items.Color];
			setColor(colorArray);
		}
	}, [Items]);

	const handleSelectStorage = (index) => {
		setSelectedStorage(index);
	};

	const handleSelectColor = (index) => {
		setSelectedColor(index);
	};

	const toggleDescription = () => {
		setShowFullDescription(!showFullDescription);
	};

	const handleAddToCart = async () => {
		const token =
			localStorage.getItem("userToken") || sessionStorage.getItem("userToken");

		if (!token) {
			setNotificationMessage("Vui lòng đăng nhập để thêm vào giỏ hàng");
			setNotificationType("error");
			setShowNotification(true);
			setTimeout(() => setShowNotification(false), 2000);
			return;
		}

		try {
			const productData = {
				productId: productId,
				name: Items.Name,
				price: Items.Price,
				quantity: 1,
				img: Items.ListPicture[0],
				description: Items.Description,
			};

			await request.post("api/user/cart/add", productData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});

			setNotificationMessage("Đã thêm sản phẩm vào giỏ hàng");
			setNotificationType("success");
			setShowNotification(true);
			setTimeout(() => setShowNotification(false), 2000);
		} catch (error) {
			if (error.response && error.response.status === 400) {
				setNotificationMessage(error.response.data.error);
			} else {
				setNotificationMessage("Có lỗi xảy ra khi thêm vào giỏ hàng");
			}
			setNotificationType("error");
			setShowNotification(true);
			setTimeout(() => setShowNotification(false), 2000);
		}
	};

	const renderDescription = () => {
		if (!Items) return null;

		switch (modelType) {
			case "phoneItem":
				return (
					<DescriptionPhone
						items={Items}
						selectedStorage={selectedStorage}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "caseItem":
				return (
					<DescriptionCase
						items={Items}
						selectedColor={selectedColor}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "chargerItem":
				return (
					<DescriptionCharger
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "chargingCableItem":
				return (
					<DescriptionChargingCable
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "cpuItem":
				return (
					<DescriptionCpu
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "driveItem":
				return (
					<DescriptionDrive
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "dustCollectorItem":
				return (
					<DescriptionDustCollector
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "earphoneItem":
				return (
					<DescriptionEarphone
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "fridgeItem":
				return (
					<DescriptionFridge
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "headphoneItem":
				return (
					<DescriptionHeadphone
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "heatsinkItem":
				return (
					<DescriptionHeatsink
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "keyboardItem":
				return (
					<DescriptionKeyboard
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "laptopItem":
				return (
					<DescriptionLaptop
						items={Items}
						selectedStorage={selectedStorage}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "mainboardItem":
				return (
					<DescriptionMainboard
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "monitorItem":
				return (
					<DescriptionMonitor
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "mouseItem":
				return (
					<DescriptionMouse
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "mousePadItem":
				return (
					<DescriptionMousePad
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);

			case "networkProductItem":
				return (
					<DescriptionNetworkProduct
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "pcItem":
				return (
					<DescriptionPc
						items={Items}
						selectedStorage={selectedStorage}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "phoneCaseItem":
				return (
					<DescriptionPhoneCase
						items={Items}
						selectedColor={selectedColor}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "portableDriveItem":
				return (
					<DescriptionPortableDrive
						items={Items}
						selectedStorage={selectedStorage}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "powerBankItem":
				return (
					<DescriptionPowerBank
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "psuItem":
				return (
					<DescriptionPsu
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "ramItem":
				return (
					<DescriptionRam
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>	
				);
			case "tabletItem":
				return (
					<DescriptionTablet
						items={Items}
						selectedStorage={selectedStorage}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "temperedGlassItem":
				return (
					<DescriptionTemperedGlass
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "tvItem":
				return (
					<DescriptionTV
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "vgaItem":
				return (
					<DescriptionVga
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "washerItem":
				return (
					<DescriptionWasher
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			case "watchItem":
				return (
					<DescriptionWatch
						items={Items}
						showFullDescription={showFullDescription}
						onToggleDescription={toggleDescription}
					/>
				);
			
			default:
				return null;
		}
	};

	const footerItems = [
		{
			icon: icons.checkshield,
			title: "Sản phẩm chất lượng",
			content: "Đảm bảo tương thích và độ bền cao",
			alt: "checkshield",
		},
		{
			icon: icons.transferalt,
			title: "Đổi trả dễ dàng",
			content: "Theo chính sách đổi trả tại PixelShop",
			alt: "Truck",
		},
		{
			icon: icons.diamond,
			title: "Thương hiệu đảm bảo",
			content: "Nhập khẩu, bảo hành chính hãng",
			alt: "Diamond",
		},
		{
			icon: icons.truck,
			title: "Giao hàng tận nơi",
			content: "Tại 63 tỉnh thành",
			alt: "Transferalt",
		},
	];

	return (
		<div className={cx("wrapper")}>
			<div className={cx("container")}>
				<div className={cx("content")}>
					<div className={cx("img-content")}>
						<ProductImage
							ListPic={(Items?.ListPicture || []).map((pic) => imagePrefix + pic)}
						/>
					</div>
					<div className={cx("name-description")}>
						<div className={cx("title-product-description")}>Tên đầy đủ của sản phẩm</div>
						<div className={cx("name-product")}>{Items?.Name}</div>
					</div>
					<div className={cx("description-temp")}>
						<div
							className={cx("description", { expanded: showFullDescription })}
							onClick={toggleDescription}
						>
							{Items && renderDescription()}
						</div>
						<div
							className={cx("button-information")}
							onClick={() => setShowFullDescription(!showFullDescription)}
						>
							<div className={cx("button-information-title")}>
								{showFullDescription ? "Thu gọn" : "Xem thêm"}
							</div>
						</div>
					</div>
				</div>
				<div className={cx("sidebar")}>
					<div className={cx("name-product")}>{Items?.Name}</div>
					<div className={cx("line-1")}>
						<div className={cx("model-product")}>{Items?.Model}</div>
						<div className={cx("rate-product")}>
							{Items &&
								Array.from({ length: 5 }, (_, index) =>
									index < Math.floor(Items.RateProduct) ? (
										<img key={index} src={icons.star} alt="Star" className={cx("icon-star")} />
									) : index < Items.RateProduct ? (
										<img
											key={index}
											src={icons.starhalf}
											alt="Star Half"
											className={cx("icon-star")}
										/>
									) : (
										<i key={index} className={cx("icon-star")} />
									)
								)}
						</div>
						<div className={cx("comment-number")}>
							{Items?.Comment || "Chưa có "} đánh giá
						</div>
					</div>
					{Items?.Storage && storage.length > 1 && (
						<div className={cx("line-2")}>
							<div className={cx("storage-product")}>Dung lượng</div>
							<div className={cx("storage-option")}>
								{storage.map((item, index) => (
									<div
										key={index}
										className={cx("storage-select", { selected: selectedStorage === index })}
										onClick={() => handleSelectStorage(index)}
									>
										{item}
									</div>
								))}
							</div>
						</div>
					)}
					{Items?.Color && color.length > 1 && (
						<div className={cx("line-3")}>
							<div className={cx("color-product")}>Màu sắc</div>
							<div className={cx("color-option")}>
								{color.map((item, index) => (
									<div
										key={index}
										className={cx("color-select", { selected: selectedColor === index })}
										onClick={() => handleSelectColor(index)}
									>
										{item}
									</div>
								))}
							</div>
						</div>
					)}
					<div className={cx("line-5")}>
						<div className={cx("title-gift")}>Chính sách dành cho sản phẩm</div>
						<div className={cx("gift-content")}>
							<div className={cx("content-gift")}>
								<div className={cx("gift-img-content")}>
									<img src={icons.creditcard} alt="creditcard" />
								</div>
								<div className={cx("gift-text-content")}>
									Trả góp 0% lãi suất trong 12 tháng
								</div>
							</div>
							<div className={cx("content-gift")}>
								<div className={cx("gift-img-content")}>
									<img src={icons.analyse} alt="analyse" />
								</div>
								<div className={cx("gift-text-content")}>
									Hàng chính hãng - Bảo hành (tháng): 12
								</div>
							</div>
							<div className={cx("content-gift")}>
								<div className={cx("gift-img-content")}>
									<img src={icons.bolt} alt="bolt" />
								</div>
								<div className={cx("gift-text-content")}>
									Giao hàng nhanh chóng miễn phí toàn quốc
								</div>
							</div>
						</div>
					</div>
					<div className={cx("line-4")}>
						<div className={cx("price-product")}>
							<div className={cx("price-current")}>
								<div className={cx("price-title")}>Mua ngay với giá</div>
								<div className={cx("price-value")}>
									{Items?.Discount ? Items.Discount.toLocaleString() : "N/A"}đ
								</div>
							</div>
							<div className={cx("betwen-line")}>
								<div className={cx("line-betwen")} />
								<div className={cx("betwen-line-content")}>Hoặc</div>
								<div className={cx("line-betwen")} />
							</div>
							<div className={cx("price-current")}>
								<div className={cx("price-title")}>Trả góp 12 tháng từ</div>
								<div className={cx("price-value")}>
									{Items?.Discount ? Math.floor(Items.Discount / 12).toLocaleString() : "N/A"}đ
								</div>
							</div>
						</div>
					</div>
					<div className={cx("line-6")}>
						<div className={cx("double-button")}>
							<div className={cx("button-cart")}>
								<div className={cx("button-buy-title")}>Mua ngay</div>
								<div className={cx("button-buy-icon")}>
									<img src={icons.logincircle} alt="cartadd" />
								</div>
							</div>
							<div className={cx("button-installment")}>
								<div className={cx("button-buy-title")}>Mua trả góp</div>
								<div className={cx("button-buy-icon")}>
									<img src={icons.wallet} alt="wallet" />
								</div>
							</div>
						</div>
						<div className={cx("button-buy")} onClick={handleAddToCart}>
							<div className={cx("button-buy-title")}>Thêm vào giỏ hàng</div>
							<div className={cx("button-buy-icon")}>
								<img src={icons.cartadd} alt="logincircle" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={cx("footer-product")}>
				<FooterProduct footerItems={footerItems} />
			</div>
			{showNotification && (
				<div className={cx("notification", notificationType)}>
					{notificationMessage}
				</div>
			)}
		</div>
	);
}

export default Product;
