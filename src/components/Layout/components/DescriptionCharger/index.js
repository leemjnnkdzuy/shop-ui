import classNames from "classnames/bind";
import styles from "./DescriptionCharger.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionCharger({ items, showFullDescription }) {
	if (!items) {
		return <div>Loading...</div>;
	}

	const specifications = {
		basicInfo: {
			type: { value: items.ChargerType },
			brand: { value: items.Brand },
			model: { value: items.Model },
		},
		powerSpecs: {
			output: { value: items.PowerOutput },
			ports: { value: items.Ports },
			connector: { value: items.ConnectorType },
			cable: { value: items.CableIncluded },
			fastCharging: { value: items.FastChargingSupport },
		},
		physical: {
			dimensions: { value: items.Dimensions },
			weight: { value: items.Weight, unit: "g" },
			madeIn: { value: items.MadeIn },
		},
		features: {
			compatibility: { value: items.Compatibility },
			safety: { value: items.SafetyFeatures },
			warranty: { value: items.Warranty },
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
						<div className={cx("title-description")}>Thông tin cơ bản</div>
						<div className={cx("information-description")}>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Loại sạc</div>
										<div className={cx("content-box")}>
											{getValue(specifications.basicInfo.type)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.ghost} alt="Type" />
									</div>
								</div>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Thương hiệu</div>
										<div className={cx("content-box")}>
											{getValue(specifications.basicInfo.brand)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.layer} alt="Brand" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông số kỹ thuật</div>
						<div className={cx("information-description")}>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Công suất</div>
										<div className={cx("content-box")}>
											{getValue(specifications.powerSpecs.output)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.batterylow} alt="Output" />
									</div>
								</div>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Số cổng sạc</div>
										<div className={cx("content-box")}>
											{getValue(specifications.powerSpecs.ports)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.extension} alt="Ports" />
									</div>
								</div>
							</div>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Loại cổng kết nối</div>
										<div className={cx("content-box")}>
											{getValue(specifications.powerSpecs.connector)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.cog} alt="Connector" />
									</div>
								</div>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Cáp đi kèm</div>
										<div className={cx("content-box")}>
											{getValue(specifications.powerSpecs.cable)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.frontcategory} alt="Cable" />
									</div>
								</div>
							</div>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Hỗ trợ sạc nhanh</div>
										<div className={cx("content-box")}>
											{getValue(specifications.powerSpecs.fastCharging)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.atom} alt="Fast Charging" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông số vật lý</div>
						<div className={cx("information-description")}>
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
										<div className={cx("title-box")}>Sản xuất tại</div>
										<div className={cx("content-box")}>
											{getValue(specifications.physical.madeIn)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.location} alt="Made In" />
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Tính năng</div>
						<div className={cx("information-description")}>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Tương thích</div>
										<div className={cx("content-box")}>
											{getValue(specifications.features.compatibility)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.area} alt="Compatibility" />
									</div>
								</div>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Tính năng an toàn</div>
										<div className={cx("content-box")}>
											{getValue(specifications.features.safety)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.shield} alt="Safety" />
									</div>
								</div>
							</div>
							<div className={cx("double-description-box")}>
								<div className={cx("description-box")}>
									<div className={cx("content-description-box")}>
										<div className={cx("title-box")}>Bảo hành</div>
										<div className={cx("content-box")}>
											{getValue(specifications.features.warranty)}
										</div>
									</div>
									<div className={cx("icon-description-box")}>
										<img src={icons.slack} alt="Warranty" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DescriptionCharger;
