import React, { useState } from "react";
import classNames from "classnames/bind";
import style from "./WasherSidebarProduct.module.scss";

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

const WasherSidebarProduct = ({ onFilter }) => {
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");
	const [typeOptions, setTypeOptions] = useState([]);
	const [weightOptions, setWeightOptions] = useState([]);

	const handleTypeChange = (event) => {
		const value = event.target.value;
		setTypeOptions((prev) =>
			prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
		);
	};

	const handleWeightChange = (event) => {
		const value = event.target.value;
		setWeightOptions((prev) =>
			prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
		);
	};

	const handleFilter = () => {
		onFilter({
			price: {
				min: minPrice ? parseFloat(minPrice) : undefined,
				max: maxPrice ? parseFloat(maxPrice) : undefined,
			},
			type: typeOptions,
			weight: weightOptions,
		});
	};

	return (
		<div className={cx("wrapper")}>
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

					<div className={cx("content-title")}>Loại máy giặt:</div>
					<div className={cx("type-options")}>
						<div className={cx("type-options-content")}>
							<input
								type="checkbox"
								value="Cửa trên"
								checked={typeOptions.includes("Cửa trên")}
								onChange={handleTypeChange}
							/>
							<div className={cx("type-title-options")}>Cửa trên</div>
						</div>
						<div className={cx("type-options-content")}>
							<input
								type="checkbox"
								value="Cửa ngang"
								checked={typeOptions.includes("Cửa ngang")}
								onChange={handleTypeChange}
							/>
							<div className={cx("type-title-options")}>Cửa ngang</div>
						</div>
					</div>

					<div className={cx("content-title")}>Khối lượng giặt:</div>
					<div className={cx("weight-options")}>
						<div className={cx("weight-options-content")}>
							<input
								type="checkbox"
								value="Dưới 7kg"
								checked={weightOptions.includes("Dưới 7kg")}
								onChange={handleWeightChange}
							/>
							<div className={cx("weight-title-options")}>Dưới 7kg</div>
						</div>
						<div className={cx("weight-options-content")}>
							<input
								type="checkbox"
								value="7kg - 10kg"
								checked={weightOptions.includes("7kg - 10kg")}
								onChange={handleWeightChange}
							/>
							<div className={cx("weight-title-options")}>7kg - 10kg</div>
						</div>
						<div className={cx("weight-options-content")}>
							<input
								type="checkbox"
								value="Trên 10kg"
								checked={weightOptions.includes("Trên 10kg")}
								onChange={handleWeightChange}
							/>
							<div className={cx("weight-title-options")}>Trên 10kg</div>
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

export default WasherSidebarProduct;
