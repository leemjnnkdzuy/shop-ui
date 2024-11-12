import classNames from "classnames/bind";
import styles from "./Product.module.scss";
import { URL, default as request } from "~/utils/request";
import { useNavigate, useLocation } from "react-router-dom";

import React, { useState, useEffect } from "react";
import ProductImage from "~/components/Layout/components/ProductImage";
import FooterProduct from "~/components/Layout/components/FooterProduct";
import icons from "~/assets/icons";
import PhoneDescription from "~/components/Layout/components/PhoneDescription";

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

	const imagePrefix = `${URL}public/`; 

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await request.get(`api/getItem/${productId}`);
				if (response && response.data) {
					if (Object.keys(response.data).length === 0) {
						navigate("/Error");
					} else {
						setItems(response.data);
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
			let storageArray = Array.isArray(Items.Storage) ? Items.Storage : [Items.Storage];
			const parseValue = (str) => {
				if (str.includes('TB')) return parseFloat(str) * 1024;
				if (str.includes('GB')) return parseFloat(str);
				return 0;
			};
			const sortedStorage = [...storageArray].sort((a, b) => parseValue(a) - parseValue(b));
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
							ListPic={(Items?.ListPicture || []).map(pic => imagePrefix + pic)} 
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
							{Items && (
								<PhoneDescription
									items={Items}
									selectedStorage={selectedStorage}
									showFullDescription={showFullDescription}
									onToggleDescription={toggleDescription}
								/>
							)}
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
									{Items?.Price ? Items.Price.toLocaleString() : "N/A"}đ
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
									{Items?.Price ? Math.floor(Items.Price / 12).toLocaleString() : "N/A"}đ
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
						<div className={cx("button-buy")}>
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
		</div>
	);
}

export default Product;
