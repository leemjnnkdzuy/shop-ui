import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddItemsDashboard.module.scss";
import { IoMdAdd } from "react-icons/io";

// Import AddLaptopBody component
import AddChargerBody from "~/components/Layout/components/AddChargerBody";
import AddCaseBody from "~/components/Layout/components/AddCaseBody";
import AddLaptopBody from "~/components/Layout/components/AddLaptopBody";
import AddChargingCableBody from "~/components/Layout/components/AddChargingCableBody";
import AddCpuBody from "~/components/Layout/components/AddCpuBody";
import AddDriveBody from "~/components/Layout/components/AddDriveBody";
import AddDustCollectorBody from "~/components/Layout/components/AddDustCollectorBody";
import AddEarphoneBody from "~/components/Layout/components/AddEarphoneBody";
import AddFridgeBody from "~/components/Layout/components/AddFridgeBody";
import AddHeadphoneBody from "~/components/Layout/components/AddHeadphoneBody";
import AddHeatsinkBody from "~/components/Layout/components/AddHeatsinkBody";
import AddKeyboardBody from "~/components/Layout/components/AddKeyboardBody";

const cx = classNames.bind(styles);

const AddItemsDashboard = () => {
	const [selectedOption, setSelectedOption] = useState("");
	const [selectedPcComponent, setSelectedPcComponent] = useState("");
	const [selectedAccessory, setSelectedAccessory] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handlePcComponentChange = (event) => {
		setSelectedPcComponent(event.target.value);
	};

	const handleAccessoryChange = (event) => {
		setSelectedAccessory(event.target.value);
	};

	const getDisplayTitle = () => {
		if (selectedOption === "pc-components") {
			const pcComponentTitles = {
				cpu: "CPU",
				mainboard: "Mainboard",
				ram: "RAM",
				vga: "VGA",
				heatsink: "Tản nhiệt",
				drive: "Ổ cứng",
				psu: "Nguồn",
				case: "Case",
			};
			return pcComponentTitles[selectedPcComponent] || "Linh kiện PC";
		}

		if (selectedOption === "accessories") {
			const accessoryTitles = {
				keyboard: "Bàn phím",
				mouse: "Chuột",
				powerbank: "Sạc dự phòng",
				chargingcable: "Cáp sạc",
				earphone: "Tai nghe",
				headphone: "Tai nghe",
				mousepad: "Lót chuột",
				networkproduct: "Sản phẩm mạng",
				phonecase: "Ốp lưng",
				portabledrive: "Ổ cứng di động",
				charger: "Củ sạc",
				temperedglass: "Kính cường lực",
			};
			return accessoryTitles[selectedAccessory] || "Phụ kiện";
		}

		const productTitles = {
			laptop: "Laptop",
			dustCollector: "Robot hút bụi",
			tablet: "Máy tính bảng",
			fridge: "Tủ lạnh",
			phone: "Điện thoại",
			monitor: "Màn hình",
			tv: "TV",
			washer: "Máy giặt",
			watch: "Đồng hồ thông minh",
			accessories: "Phụ kiện",
		};
		return productTitles[selectedOption] || "";
	};

	const renderBodyComponent = () => {
		// Add more components here
		if (selectedOption === "accessories" && selectedAccessory === "charger") {
			return <AddChargerBody />;
		}
		if (selectedOption === "accessories" && selectedAccessory === "chargingcable") {
			return <AddChargingCableBody />;
		}
		if (selectedOption === "accessories" && selectedAccessory === "earphone") {
			return <AddEarphoneBody />;
		}
		if (selectedOption === "accessories" && selectedAccessory === "headphone") {
			return <AddHeadphoneBody />;
		}
		if (selectedOption === "accessories" && selectedAccessory === "keyboard") {
			return <AddKeyboardBody />;
		}

		// Add more components here
		if (selectedOption === "pc-components" && selectedPcComponent === "case") {
			return <AddCaseBody />;
		}
		if (selectedOption === "pc-components" && selectedPcComponent === "cpu") {
			return <AddCpuBody />;
		}
		if (selectedOption === "pc-components" && selectedPcComponent === "drive") {
			return <AddDriveBody />;
		}
		if (selectedOption === "pc-components" && selectedPcComponent === "heatsink") {
			return <AddHeatsinkBody />;
		}
		
		// Add more components here
		if (selectedOption === "dustCollector") {
			return <AddDustCollectorBody />;
		}
		if (selectedOption === "laptop") {
			return <AddLaptopBody />;
		}
		if (selectedOption === "fridge") {
			return <AddFridgeBody />;
		}
		return <div></div>;
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("header")}>
				<div className={cx("popup-wrapper")}>
					<div
						className={cx("popup-button", {
							extended:
								selectedOption === "pc-components" || selectedOption === "accessories",
						})}
					>
						<div className={cx("icon")}>
							<IoMdAdd size={24} />
						</div>
						<div className={cx("select-container")}>
							<select className={cx("header-section")} onChange={handleSelectChange}>
								<option value="laptop">Laptop</option>
								<option value="dustCollector">Robot hut bụi</option>
								<option value="tablet">Máy tính bảng</option>
								<option value="fridge">Tủ lạnh</option>
								<option value="phone">Điện thoại</option>
								<option value="monitor">Màng hình</option>
								<option value="tv">TV</option>
								<option value="washer">Máy Giặc</option>
								<option value="watch">Đồng hồ thông minh</option>
								<option value="pc-components">Linh kiện PC</option>
								<option value="accessories">Phụ Kiện</option>
							</select>

							{selectedOption === "pc-components" && (
								<select className={cx("header-section")} onChange={handlePcComponentChange}>
									<option value="cpu">CPU</option>
									<option value="mainboard">Mainboard</option>
									<option value="ram">RAM</option>
									<option value="vga">VGA</option>
									<option value="heatsink">Heatsink</option>
									<option value="drive">Drive</option>
									<option value="psu">PSU</option>
									<option value="case">Case</option>
								</select>
							)}

							{selectedOption === "accessories" && (
								<select className={cx("header-section")} onChange={handleAccessoryChange}>
									<option value="keyboard">Keyboard</option>
									<option value="mouse">Mouse</option>
									<option value="powerbank">Sạc dự phòng</option>
									<option value="chargingcable">Cáp sạc</option>
									<option value="earphone">Earphone</option>
									<option value="headphone">Headphone</option>
									<option value="mousepad">Lót chuột</option>
									<option value="networkproduct">Sản phẩm mạng</option>
									<option value="phonecase">Ốp Lưng</option>
									<option value="portabledrive">Ổ cứng di động</option>
									<option value="charger">Củ sạc</option>
									<option value="temperedglass">Kính cường lực</option>
								</select>
							)}
						</div>
					</div>
				</div>
				<div className={cx("header-title")}>
					<div>Thêm {getDisplayTitle()}</div>
				</div>
			</div>
			<div className={cx("body")}>{renderBodyComponent()}</div>
		</div>
	);
};

export default AddItemsDashboard;
