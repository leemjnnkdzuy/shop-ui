import classNames from "classnames/bind";
import style from "./BrandList.module.scss";

const cx = classNames.bind(style);

function BrandList({ name, brands, onBrandClick, activeId }) {
	const handleClick = (brand) => {
		if (onBrandClick) {
			onBrandClick(brand);
		}
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("brand-title")}>{name || "Thương hiệu"}</div>
			<div className={cx("brand-list")}>
				{brands.map((brand) => (
					<div
						key={brand.id}
						onClick={() => handleClick(brand)}
						className={cx("brand-item", { active: brand.id === activeId })}
					>
						<img src={brand.image} alt={brand.name} className={cx("brand-image")} />
						<p className={cx("brand-name")}>{brand.name}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default BrandList;
