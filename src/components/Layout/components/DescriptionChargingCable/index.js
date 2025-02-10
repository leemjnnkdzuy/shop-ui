import classNames from "classnames/bind";
import styles from "./DescriptionChargingCable.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionChargingCable({ items, showFullDescription }) {
	if (!items) {
		return <div>Loading...</div>;
	}

	const specifications = {
		basic: {
			cableType: { value: items.CableType },
			connectorType: { value: items.ConnectorType },
			length: { value: items.Length },
			maximumPower: { value: items.MaximumPower },
		},
		technical: {
			dataTransferRate: { value: items.DataTransferRate },
			compatibility: {
				value: Array.isArray(items.Compatibility)
					? items.Compatibility.join(", ")
					: items.Compatibility,
			},
		},
		physical: {
			material: { value: items.Material },
			durability: { value: items.Durability },
		},
		other: {
			warranty: { value: items.Warranty },
			madeIn: { value: items.MadeIn },
		},
	};

	const getValue = (spec) => {
		if (!spec || !spec.value) return "Hiện không có thông tin mục này";
		return `${spec.value}${spec.unit ? ` ${spec.unit}` : ""}`;
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("description", { expanded: showFullDescription })}>
				<div className={cx("description-product")}>
					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông số cơ bản</div>
						<div className={cx("double-description-box")}>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Loại cáp</div>
									<div className={cx("content-box")}>
										{getValue(specifications.basic.cableType)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.extension} alt="Cable Type" />
								</div>
							</div>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Loại đầu nối</div>
									<div className={cx("content-box")}>
										{getValue(specifications.basic.connectorType)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.sushi} alt="Connector Type" />
								</div>
							</div>
						</div>
						<div className={cx("double-description-box")}>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Chiều dài</div>
									<div className={cx("content-box")}>{getValue(specifications.basic.length)}</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.shapesquare} alt="Length" />
								</div>
							</div>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Công suất tối đa</div>
									<div className={cx("content-box")}>
										{getValue(specifications.basic.maximumPower)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.cuboid} alt="Maximum Power" />
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông số kỹ thuật</div>
						<div className={cx("information-description")}>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Tốc độ truyền dữ liệu</div>
									<div className={cx("content-box")}>
										{getValue(specifications.technical.dataTransferRate)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.refresh} alt="Data Transfer Rate" />
								</div>
							</div>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Tương thích với</div>
									<div className={cx("content-box")}>
										{getValue(specifications.technical.compatibility)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.atom} alt="Compatibility" />
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông số vật lý</div>
						<div className={cx("information-description")}>
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
									<div className={cx("title-box")}>Độ bền</div>
									<div className={cx("content-box")}>
										{getValue(specifications.physical.durability)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.shield} alt="Durability" />
								</div>
							</div>
						</div>
					</div>

					<div className={cx("description-tag")}>
						<div className={cx("title-description")}>Thông tin khác</div>
						<div className={cx("information-description")}>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Bảo hành</div>
									<div className={cx("content-box")}>
										{getValue(specifications.other.warranty)}
									</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.ghost} alt="Warranty" />
								</div>
							</div>
							<div className={cx("description-box")}>
								<div className={cx("content-description-box")}>
									<div className={cx("title-box")}>Sản xuất tại</div>
									<div className={cx("content-box")}>{getValue(specifications.other.madeIn)}</div>
								</div>
								<div className={cx("icon-description-box")}>
									<img src={icons.location} alt="Made In" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default DescriptionChargingCable;
