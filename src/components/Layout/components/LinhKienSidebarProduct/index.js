import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./LinhKienSidebarProduct.module.scss";

const cx = classNames.bind(style);

const priceRanges = [
	{ value: "", label: "Chọn mức giá" },
	{ value: "0", label: "0 VNĐ" },
	{ value: "500000", label: "500,000 VNĐ" },
	{ value: "1000000", label: "1,000,000 VNĐ" },
	{ value: "3000000", label: "3,000,000 VNĐ" },
	{ value: "5000000", label: "5,000,000 VNĐ" },
	{ value: "7000000", label: "7,000,000 VNĐ" },
	{ value: "9000000", label: "9,000,000 VNĐ" },
	{ value: "10000000", label: "10,000,000 VNĐ" },
	{ value: "12500000", label: "12,500,000 VNĐ" },
	{ value: "15000000", label: "15,000,000 VNĐ" },
	{ value: "17500000", label: "17,500,000 VNĐ" },
	{ value: "20000000", label: "20,000,000 VNĐ" },
	{ value: "25000000", label: "25,000,000 VNĐ" },
	{ value: "30000000", label: "30,000,000 VNĐ" },
	{ value: "1000000000", label: "Trên 30,000,000 VNĐ" },
];

const LinhKienSidebarProduct = ({ onFilter }) => {
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const handleFilter = () => {
		onFilter({
			price: {
				min: minPrice ? parseFloat(minPrice) : undefined,
				max: maxPrice ? parseFloat(maxPrice) : undefined,
			},
		});
	};

	return (
		<div className="wrapper">
			<div className={cx("inner")}>
				<div className={cx("header")}>
					<div className={cx("header-icon")}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="35"
							height="35"
							viewBox="0 0 24 24"
							fill="rgba(0, 0, 0, 1)"
						>
							<path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z" />
						</svg>
					</div>
					<div className={cx("header-title")}>Bộ lọc sản phẩm</div>
				</div>

				<div className={cx("content")}>
					<div className={cx("content-title")}>Mức giá:</div>
					<div className={cx("price-options")}>
						<div className={cx("price-options-content")}>
							<div className={cx("title-options")}>Từ:</div>
							<select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
								{priceRanges.map((range) => (
									<option key={range.value} value={range.value}>
										{range.label}
									</option>
								))}
							</select>
							<div className={cx("title-options")}>Đến:</div>
							<select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
								{priceRanges.map((range) => (
									<option key={range.value} value={range.value}>
										{range.label}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>
				<button className={cx("button-apply")} onClick={handleFilter}>
					Tìm Kiếm
				</button>
			</div>
		</div>
	);
};

export default LinhKienSidebarProduct;
