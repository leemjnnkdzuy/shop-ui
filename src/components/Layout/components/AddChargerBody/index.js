import React, { useState } from "react";
import classNames from "classnames/bind";
import { default as request } from "~/utils/request";
import styles from "./AddChargerBody.module.scss";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(styles);

const AddChargerBody = () => {
	const [formData, setFormData] = useState({
		Name: "",
		Brand: "",
		Discount: 0,
		Price: 0,
		Model: "",
		Color: "",
		Comment: 0,
		RateProduct: 0,
		ThumbnailImage: null,
		ListPicture: [],
		ChargerType: "",
		PowerOutput: "",
		Ports: 0,
		ConnectorType: "",
		CableIncluded: "",
		Compatibility: "",
		FastChargingSupport: "",
		SafetyFeatures: "",
		Dimensions: "",
		Weight: 0,
		Warranty: "",
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
		if (!formData.Model) newErrors.Model = "Model is required";
		if (!formData.Color) newErrors.Color = "Color is required";
		if (formData.Price <= 0) newErrors.Price = "Price must be greater than 0";
		if (!formData.ChargerType) newErrors.ChargerType = "Charger type is required";
		if (!formData.PowerOutput) newErrors.PowerOutput = "Power output is required";
		if (!formData.ThumbnailImage)
			newErrors.ThumbnailImage = "Thumbnail image is required";
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
			Comment: 0,
			RateProduct: 0,
			ThumbnailImage: null,
			ListPicture: [],
			ChargerType: "",
			PowerOutput: "",
			Ports: 0,
			ConnectorType: "",
			CableIncluded: "",
			Compatibility: "",
			FastChargingSupport: "",
			SafetyFeatures: "",
			Dimensions: "",
			Weight: 0,
			Warranty: "",
			MadeIn: "",
		});
		setErrors({});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) return;

		const data = new FormData();

		if (formData.ThumbnailImage?.length > 0) {
			data.append("ThumbnailImage", formData.ThumbnailImage[0]);
		}
		if (formData.ListPicture?.length > 0) {
			Array.from(formData.ListPicture).forEach((file) => {
				data.append("ListPicture", file);
			});
		}

		const arrayFields = ["Color", "Compatibility", "SafetyFeatures"];
		arrayFields.forEach((field) => {
			if (formData[field]) {
				formData[field]
					.split(",")
					.map((item) => item.trim())
					.filter((item) => item)
					.forEach((value) => {
						data.append(field, value);
					});
			}
		});

		Object.keys(formData).forEach((key) => {
			if (!["ThumbnailImage", "ListPicture", ...arrayFields].includes(key)) {
				data.append(key, formData[key]);
			}
		});

		try {
			const response = await request.post("api/chargerItem", data, {
				headers: { "Content-Type": "multipart/form-data" },
			});

			if (response.status === 201) {
				setSuccessMessage("Charger added successfully");
				setShowPopup(true);
				clearForm();
				setTimeout(() => {
					setShowPopup(false);
					setSuccessMessage("");
				}, 3000);
			}
		} catch (error) {
			const message =
				error.response?.status === 413
					? "Files are too large. Please reduce file sizes."
					: error.response?.data?.message || "An error occurred";
			setErrorMessage(message);
			setShowPopup(true);
		}
	};

	return (
		<div className={cx("wrapper")}>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="Name"
					placeholder="Name *"
					value={formData.Name}
					onChange={handleChange}
				/>
				{errors.Name && <span className={cx("error")}>{errors.Name}</span>}

				<input
					type="text"
					name="Brand"
					placeholder="Brand *"
					value={formData.Brand}
					onChange={handleChange}
				/>
				{errors.Brand && <span className={cx("error")}>{errors.Brand}</span>}

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
					placeholder="Price *"
					value={formData.Price}
					onChange={handleChange}
				/>
				{errors.Price && <span className={cx("error")}>{errors.Price}</span>}

				<input
					type="text"
					name="Model"
					placeholder="Model *"
					value={formData.Model}
					onChange={handleChange}
				/>
				{errors.Model && <span className={cx("error")}>{errors.Model}</span>}

				<input
					type="text"
					name="Color"
					placeholder="Colors (comma-separated) *"
					value={formData.Color}
					onChange={handleChange}
				/>

				<input
					type="file"
					name="ThumbnailImage"
					onChange={handleFileChange}
					accept="image/*"
				/>
				{errors.ThumbnailImage && (
					<span className={cx("error")}>{errors.ThumbnailImage}</span>
				)}

				<input
					type="file"
					name="ListPicture"
					multiple
					onChange={handleFileChange}
					accept="image/*"
				/>

				<input
					type="text"
					name="ChargerType"
					placeholder="Charger Type *"
					value={formData.ChargerType}
					onChange={handleChange}
				/>
				{errors.ChargerType && (
					<span className={cx("error")}>{errors.ChargerType}</span>
				)}

				<input
					type="text"
					name="PowerOutput"
					placeholder="Power Output *"
					value={formData.PowerOutput}
					onChange={handleChange}
				/>
				{errors.PowerOutput && (
					<span className={cx("error")}>{errors.PowerOutput}</span>
				)}

				<input
					type="number"
					name="Ports"
					placeholder="Number of Ports"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ConnectorType"
					placeholder="Connector Type"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="CableIncluded"
					placeholder="Cable Included"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Compatibility"
					placeholder="Compatibility (comma-separated)"
					value={formData.Compatibility}
					onChange={handleChange}
				/>
				<input
					type="text"
					name="FastChargingSupport"
					placeholder="Fast Charging Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="SafetyFeatures"
					placeholder="Safety Features (comma-separated)"
					value={formData.SafetyFeatures}
					onChange={handleChange}
				/>

				<input
					type="text"
					name="Dimensions"
					placeholder="Dimensions"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="Weight"
					placeholder="Weight"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Warranty"
					placeholder="Warranty"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="MadeIn"
					placeholder="Made In"
					onChange={handleChange}
				/>

				<button type="submit" className={cx("submit-btn")}>
					Add Charger
				</button>
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

export default AddChargerBody;
