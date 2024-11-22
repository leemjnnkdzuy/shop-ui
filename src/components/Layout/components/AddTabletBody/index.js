import React, { useState } from "react";
import classNames from "classnames/bind";
import { default as request } from "~/utils/request";
import styles from "./AddTabletBody.module.scss";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(styles);

const AddTabletBody = () => {
	const [formData, setFormData] = useState({
		Name: "",
		Brand: "",
		Discount: 0,
		Price: 0,
		Model: "",
		Color: "",
		Storage: "",
		Comment: 0,
		RateProduct: 0,
		ThumbnailImage: null,
		ListPicture: [],
		Monitorsize: 0,
		Monitortech: "",
		Chip: "",
		Ram: "",
		MemoryCard: "",
		Size: "",
		Weight: 0,
		Protection: "",
		Material: "",
		ScreenSize: 0,
		ScreenTechnology: "",
		ScreenType: "",
		ScreenResolution: "",
		ScreenDensity: 0,
		ScreenProtection: "",
		ScreenBrightness: 0,
		ScreenRefreshRate: 0,
		BackCameraInformation: "",
		BackCameraRotationAbility: "",
		BackCameraFeature: "",
		FrontCameraInformation: "",
		FrontCameraRotationAbility: "",
		FrontCameraFeature: "",
		OS: "",
		SecuritySupport: "",
		SIMSupport: "",
		NetworkSupport: "",
		BluetoothSupport: "",
		WifiSupport: "",
		PowerStrogae: "",
		MadeIn: "",
	});

	const [errors, setErrors] = useState({});
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [showPopup, setShowPopup] = useState(false);

	const handleChange = (e) => {
		const { name, value, type } = e.target;
		setFormData({
			...formData,
			[name]: type === "number" ? parseFloat(value) : value,
		});
	};

	const handleFileChange = (e) => {
		const { name, files } = e.target;
		setFormData({
			...formData,
			[name]: files,
		});
	};

	const validateForm = () => {
		const newErrors = {};
		if (!formData.Name) newErrors.Name = "Name is required";
		if (!formData.Brand) newErrors.Brand = "Brand is required";
		if (formData.Price <= 0) newErrors.Price = "Price must be greater than 0";
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const clearForm = () => {
		setFormData({
			Name: "",
			Brand: "",
			Discount: 0,
			Price: 0,
			Model: "",
			Color: "",
			Storage: "",
			Comment: 0,
			RateProduct: 0,
			ThumbnailImage: null,
			ListPicture: [],
			Monitorsize: 0,
			Monitortech: "",
			Chip: "",
			Ram: "",
			MemoryCard: "",
			Size: "",
			Weight: 0,
			Protection: "",
			Material: "",
			ScreenSize: 0,
			ScreenTechnology: "",
			ScreenType: "",
			ScreenResolution: "",
			ScreenDensity: 0,
			ScreenProtection: "",
			ScreenBrightness: 0,
			ScreenRefreshRate: 0,
			BackCameraInformation: "",
			BackCameraRotationAbility: "",
			BackCameraFeature: "",
			FrontCameraInformation: "",
			FrontCameraRotationAbility: "",
			FrontCameraFeature: "",
			OS: "",
			SecuritySupport: "",
			SIMSupport: "",
			NetworkSupport: "",
			BluetoothSupport: "",
			WifiSupport: "",
			PowerStrogae: "",
			MadeIn: "",
		});
		setErrors({});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		const data = new FormData();
		for (const key in formData) {
			if (key === "ListPicture" || key === "ThumbnailImage") {
				if (formData[key] && formData[key].length > 0) {
					if (key === "ListPicture") {
						Array.from(formData[key]).forEach((file) => {
							data.append("ListPicture", file);
						});
					} else {
						data.append("ThumbnailImage", formData[key][0]);
					}
				}
			} else if (
				[
					"Color",
					"CoolingSupport",
					"RadiatorSupport",
					"DriveBays",
					"IOPanelConnectors",
					"Features",
				].includes(key)
			) {
				const values = formData[key].split(",").map((item) => item.trim());
				values.forEach((value) => {
					data.append(key, value);
				});
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			const response = await request.post("api/tabletItem", data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
				onUploadProgress: (progressEvent) => {
					const percentCompleted = Math.round(
						(progressEvent.loaded * 100) / progressEvent.total
					);
					console.log("Upload progress:", percentCompleted);
				},
			});

			if (response.status === 201) {
				setSuccessMessage("Case added successfully");
				setShowPopup(true);
				clearForm();

				setTimeout(() => {
					setShowPopup(false);
					setSuccessMessage("");
				}, 3000);
			}
		} catch (error) {
			console.error("Error adding case:", error);
			const message =
				error.response?.status === 413
					? "Files are too large. Please reduce file sizes."
					: error.response?.status === 400
					? "Please check all required fields and file formats."
					: error.response?.data?.message || "An error occurred while adding the case";

			setErrorMessage(message);
			setShowPopup(true);
		}
	};

	return (
		<div className={cx("wrapper")}>
			<form onSubmit={handleSubmit}>
				<input type="text" name="Name" placeholder="Name" onChange={handleChange} />
				{errors.Name && <span className="error">{errors.Name}</span>}
				<input type="text" name="Brand" placeholder="Brand" onChange={handleChange} />
				{errors.Brand && <span className="error">{errors.Brand}</span>}
				<input
					type="number"
					name="Discount"
					placeholder="Discount"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="Price"
					placeholder="Price"
					step="any"
					onChange={handleChange}
				/>
				{errors.Price && <span className="error">{errors.Price}</span>}
				<input type="text" name="Model" placeholder="Model" onChange={handleChange} />
				<input
					type="text"
					name="Color"
					placeholder="Colors (comma-separated)"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Storage"
					placeholder="Storage (comma-separated)"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="Comment"
					placeholder="Comment"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="RateProduct"
					placeholder="Rate Product"
					step="any"
					onChange={handleChange}
				/>
				<input type="file" name="ThumbnailImage" onChange={handleFileChange} />
				<input type="file" name="ListPicture" multiple onChange={handleFileChange} />

				{/* Display & Hardware */}
				<input
					type="number"
					name="Monitorsize"
					placeholder="Monitor Size"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Monitortech"
					placeholder="Monitor Technology"
					onChange={handleChange}
				/>
				<input type="text" name="Chip" placeholder="Chip" onChange={handleChange} />
				<input type="text" name="Ram" placeholder="RAM" onChange={handleChange} />
				<input
					type="text"
					name="MemoryCard"
					placeholder="Memory Card"
					onChange={handleChange}
				/>

				{/* Physical Specifications */}
				<input type="text" name="Size" placeholder="Size" onChange={handleChange} />
				<input
					type="number"
					name="Weight"
					placeholder="Weight"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Protection"
					placeholder="Protection"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Material"
					placeholder="Material"
					onChange={handleChange}
				/>

				{/* Screen Details */}
				<input
					type="number"
					name="ScreenSize"
					placeholder="Screen Size"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ScreenTechnology"
					placeholder="Screen Technology"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ScreenType"
					placeholder="Screen Type"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ScreenResolution"
					placeholder="Screen Resolution"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="ScreenDensity"
					placeholder="Screen Density"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ScreenProtection"
					placeholder="Screen Protection"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="ScreenBrightness"
					placeholder="Screen Brightness"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="ScreenRefreshRate"
					placeholder="Screen Refresh Rate"
					onChange={handleChange}
				/>

				{/* Camera Specifications */}
				<input
					type="text"
					name="BackCameraInformation"
					placeholder="Back Camera Information"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="BackCameraRotationAbility"
					placeholder="Back Camera Rotation Ability"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="BackCameraFeature"
					placeholder="Back Camera Features"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="FrontCameraInformation"
					placeholder="Front Camera Information"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="FrontCameraRotationAbility"
					placeholder="Front Camera Rotation Ability"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="FrontCameraFeature"
					placeholder="Front Camera Features"
					onChange={handleChange}
				/>

				{/* System & Connectivity */}
				<input
					type="text"
					name="OS"
					placeholder="Operating System"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="SecuritySupport"
					placeholder="Security Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="SIMSupport"
					placeholder="SIM Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="NetworkSupport"
					placeholder="Network Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="BluetoothSupport"
					placeholder="Bluetooth Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="WifiSupport"
					placeholder="WiFi Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="PowerStrogae"
					placeholder="Power Storage"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="MadeIn"
					placeholder="Made In"
					onChange={handleChange}
				/>

				<button type="submit">Add Tablet</button>
			</form>

			{showPopup && (successMessage || errorMessage) && (
				<Popup>
					<div className={cx("header")}>
						<h2>Thông báo</h2>
						<button
							onClick={() => {
								setShowPopup(false);
								setSuccessMessage("");
								setErrorMessage("");
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
		</div>
	);
};

export default AddTabletBody;
