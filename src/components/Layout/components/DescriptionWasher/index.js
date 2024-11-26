import classNames from "classnames/bind";
import styles from "./DescriptionWasher.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionWasher({ items, showFullDescription }) {
	if (!items) {
		return <div>Loading...</div>;
	}

	const specifications = {
		general: {
			name: { value: items.Name },
			brand: { value: items.Brand },
			model: { value: items.Model },
			color: { value: items.Color.join(", ") },
			price: { value: items.Price, unit: "VND" },
			discount: { value: items.Discount, unit: "%" },
			rateProduct: { value: items.RateProduct, unit: "stars" },
			comment: { value: items.Comment },
		},
		technical: {
			capacity: { value: items.Capacity, unit: "kg" },
			type: { value: items.Type },
			energyEfficiencyRating: { value: items.EnergyEfficiencyRating },
			spinSpeed: { value: items.SpinSpeed, unit: "RPM" },
			noiseLevel: { value: items.NoiseLevel, unit: "dB" },
			waterConsumption: { value: items.WaterConsumption, unit: "L" },
			inverterTechnology: { value: items.InverterTechnology },
			smartTechnology: { value: items.SmartTechnology },
		},
		features: {
			washPrograms: { value: items.WashPrograms.join(", ") },
			quickWash: { value: items.QuickWash },
			delayStart: { value: items.DelayStart },
			childLock: { value: items.ChildLock },
		},
		physical: {
			dimensions: { value: items.Dimensions },
			weight: { value: items.Weight, unit: "kg" },
			material: { value: items.Material },
			warranty: { value: items.Warranty },
			madeIn: { value: items.MadeIn },
		},
	};

	const getValue = (spec) => {
		if (!spec || (!spec.value && !spec.unit))
			return "Hiện không có thông tin mục này";
		return `${spec.value}${spec.unit ? ` ${spec.unit}` : ""}`;
	};

	return (
	<div className={cx("wrapper")}>
		<div className={cx("description", { expanded: showFullDescription })}>
			<div className={cx("description-product")}>
				<div className={cx("description-tag")}>
					<div className={cx("title-description")}>Thông số kỹ thuật</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Dung tích</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.capacity)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.cuboid} alt="Capacity" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Loại</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.type)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.atom} alt="Type" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Hiệu suất năng lượng</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.energyEfficiencyRating)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.atom} alt="EnergyEfficiencyRating" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Tốc độ quay</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.spinSpeed)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.ghost} alt="SpinSpeed" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Mức độ ồn</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.noiseLevel)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.signal} alt="NoiseLevel" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Tiêu thụ nước</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.waterConsumption)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.cog} alt="WaterConsumption" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Công nghệ Inverter</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.inverterTechnology)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.atom} alt="InverterTechnology" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Công nghệ thông minh</div>
								<div className={cx("content-box")}>
									{getValue(specifications.technical.smartTechnology)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.extension} alt="SmartTechnology" />
							</div>
						</div>
					</div>
				</div>
				<div className={cx("description-tag")}>
					<div className={cx("title-description")}>Tính năng</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Chương trình giặt</div>
								<div className={cx("content-box")}>
									{getValue(specifications.features.washPrograms)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.layer} alt="WashPrograms" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Giặt nhanh</div>
								<div className={cx("content-box")}>
									{getValue(specifications.features.quickWash)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.area} alt="QuickWash" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Hẹn giờ</div>
								<div className={cx("content-box")}>
									{getValue(specifications.features.delayStart)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.dumbbell} alt="DelayStart" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Khóa trẻ em</div>
								<div className={cx("content-box")}>
									{getValue(specifications.features.childLock)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.webcam} alt="ChildLock" />
							</div>
						</div>
					</div>
				</div>
				<div className={cx("description-tag")}>
					<div className={cx("title-description")}>Thông tin vật lý</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Kích thước</div>
								<div className={cx("content-box")}>
									{getValue(specifications.physical.dimensions)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.shapesquare} alt="Dimensions" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Trọng lượng</div>
								<div className={cx("content-box")}>
									{getValue(specifications.physical.weight)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.dumbbell} alt="Weight" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Chất liệu</div>
								<div className={cx("content-box")}>
									{getValue(specifications.physical.material)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.cuboid} alt="Material" />
							</div>
						</div>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Bảo hành</div>
								<div className={cx("content-box")}>
									{getValue(specifications.physical.warranty)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.chess} alt="Warranty" />
							</div>
						</div>
					</div>
					<div className={cx("double-description-box")}>
						<div className={cx("description-box")}>
							<div className={cx("content-description-box")}>
								<div className={cx("title-box")}>Sản xuất tại</div>
								<div className={cx("content-box")}>
									{getValue(specifications.physical.madeIn)}
								</div>
							</div>
							<div className={cx("icon-description-box")}>
								<img src={icons.location} alt="MadeIn" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}

export default DescriptionWasher;
