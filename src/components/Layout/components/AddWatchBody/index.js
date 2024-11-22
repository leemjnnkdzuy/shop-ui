import React, { useState } from "react";
import classNames from "classnames/bind";
import { default as request } from "~/utils/request";
import styles from "./AddWatchBody.module.scss";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(styles);

const AddWatchBody = () => {
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
		ScreenSize: 0,
		Resolution: "",
		DisplayType: "",
		BatteryLife: "",
		WaterResistance: "",
		Sensors: "",
		Connectivity: "",
		OS: "",
		RAM: "",
		Storage: "",
		FitnessTracking: "",
		Notifications: "",
		VoiceControl: "",
		MusicControl: "",
		Dimensions: "",
		Weight: 0,
		Material: "",
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
			Comment: 0,
			RateProduct: 0,
			ThumbnailImage: null,
			ListPicture: [],
			ScreenSize: 0,
			Resolution: "",
			DisplayType: "",
			BatteryLife: "",
			WaterResistance: "",
			Sensors: "",
			Connectivity: "",
			OS: "",
			RAM: "",
			Storage: "",
			FitnessTracking: "",
			Notifications: "",
			VoiceControl: "",
			MusicControl: "",
			Dimensions: "",
			Weight: 0,
			Material: "",
			Warranty: "",
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
			} else if (["Color", "Sensors"].includes(key)) {
				const values = formData[key].split(",").map((item) => item.trim());
				values.forEach((value) => {
					data.append(key, value);
				});
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			const response = await request.post("api/watchItem", data, {
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
				<input
					type="number"
					name="ScreenSize"
					placeholder="Screen Size"
					step="any"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Resolution"
					placeholder="Resolution"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="DisplayType"
					placeholder="Display Type"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="BatteryLife"
					placeholder="Battery Life"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="WaterResistance"
					placeholder="Water Resistance"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Sensors"
					placeholder="Sensors (comma-separated)"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Connectivity"
					placeholder="Connectivity"
					onChange={handleChange}
				/>
				<input type="text" name="OS" placeholder="Operating System" onChange={handleChange} />
				<input type="text" name="RAM" placeholder="RAM" onChange={handleChange} />
				<input type="text" name="Storage" placeholder="Storage" onChange={handleChange} />
				<input
					type="text"
					name="FitnessTracking"
					placeholder="Fitness Tracking"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Notifications"
					placeholder="Notifications"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="VoiceControl"
					placeholder="Voice Control"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="MusicControl"
					placeholder="Music Control"
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
					name="Material"
					placeholder="Material"
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
				<button type="submit">Add Watch</button>
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

export default AddWatchBody;
