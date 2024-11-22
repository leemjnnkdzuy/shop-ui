import React, { useState } from "react";
import classNames from "classnames/bind";
import { default as request } from "~/utils/request";
import styles from "./AddTVBody.module.scss";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(styles);

const AddTVBody = () => {
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
		AspectRatio: "",
		PanelType: "",
		RefreshRate: 0,
		HDRSupport: "",
		Brightness: 0,
		ContrastRatio: "",
		ViewingAngle: "",
		BacklightTechnology: "",
		SmartTV: "",
		OS: "",
		Processor: "",
		RAM: "",
		Storage: "",
		Connectivity: "",
		HDMI: 0,
		USB: 0,
		Ethernet: "",
		WiFi: "",
		Bluetooth: "",
		AudioOutput: "",
		AudioSystem: "",
		SpeakerOutput: 0,
		DolbySupport: "",
		SurroundSound: "",
		VoiceControl: "",
		ScreenMirroring: "",
		AppSupport: "",
		GameMode: "",
		PowerConsumption: 0,
		Voltage: "",
		EnergyEfficiency: "",
		Dimensions: "",
		Weight: 0,
		Material: "",
		WallMountable: "",
		VESASupport: "",
		ParentalControl: "",
		SleepTimer: "",
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
			AspectRatio: "",
			PanelType: "",
			RefreshRate: 0,
			HDRSupport: "",
			Brightness: 0,
			ContrastRatio: "",
			ViewingAngle: "",
			BacklightTechnology: "",
			SmartTV: "",
			OS: "",
			Processor: "",
			RAM: "",
			Storage: "",
			Connectivity: "",
			HDMI: 0,
			USB: 0,
			Ethernet: "",
			WiFi: "",
			Bluetooth: "",
			AudioOutput: "",
			AudioSystem: "",
			SpeakerOutput: 0,
			DolbySupport: "",
			SurroundSound: "",
			VoiceControl: "",
			ScreenMirroring: "",
			AppSupport: "",
			GameMode: "",
			PowerConsumption: 0,
			Voltage: "",
			EnergyEfficiency: "",
			Dimensions: "",
			Weight: 0,
			Material: "",
			WallMountable: "",
			VESASupport: "",
			ParentalControl: "",
			SleepTimer: "",
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
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			const response = await request.post("api/tvItem", data, {
				headers: { "Content-Type": "multipart/form-data" },
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
				{/* Basic Information */}
				<input type="text" name="Name" placeholder="Name" onChange={handleChange} />
				{errors.Name && <span className="error">{errors.Name}</span>}
				<input type="text" name="Brand" placeholder="Brand" onChange={handleChange} />
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
				<input type="text" name="Model" placeholder="Model" onChange={handleChange} />
				<input
					type="text"
					name="Color"
					placeholder="Colors (comma-separated)"
					onChange={handleChange}
				/>
				<input type="file" name="ThumbnailImage" onChange={handleFileChange} />
				<input type="file" name="ListPicture" multiple onChange={handleFileChange} />

				{/* Display Specifications */}
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
					name="AspectRatio"
					placeholder="Aspect Ratio"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="PanelType"
					placeholder="Panel Type"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="RefreshRate"
					placeholder="Refresh Rate"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="HDRSupport"
					placeholder="HDR Support"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="Brightness"
					placeholder="Brightness (nits)"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ContrastRatio"
					placeholder="Contrast Ratio"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ViewingAngle"
					placeholder="Viewing Angle"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="BacklightTechnology"
					placeholder="Backlight Technology"
					onChange={handleChange}
				/>

				{/* Smart Features */}
				<input
					type="text"
					name="SmartTV"
					placeholder="Smart TV"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="OS"
					placeholder="Operating System"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Processor"
					placeholder="Processor"
					onChange={handleChange}
				/>
				<input type="text" name="RAM" placeholder="RAM" onChange={handleChange} />
				<input
					type="text"
					name="Storage"
					placeholder="Storage"
					onChange={handleChange}
				/>

				{/* Connectivity */}
				<input
					type="text"
					name="Connectivity"
					placeholder="Connectivity"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="HDMI"
					placeholder="HDMI Ports"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="USB"
					placeholder="USB Ports"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Ethernet"
					placeholder="Ethernet"
					onChange={handleChange}
				/>
				<input type="text" name="WiFi" placeholder="WiFi" onChange={handleChange} />
				<input
					type="text"
					name="Bluetooth"
					placeholder="Bluetooth"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="AudioOutput"
					placeholder="Audio Output"
					onChange={handleChange}
				/>

				{/* Audio */}
				<input
					type="text"
					name="AudioSystem"
					placeholder="Audio System"
					onChange={handleChange}
				/>
				<input
					type="number"
					name="SpeakerOutput"
					placeholder="Speaker Output (W)"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="DolbySupport"
					placeholder="Dolby Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="SurroundSound"
					placeholder="Surround Sound"
					onChange={handleChange}
				/>

				{/* Features */}
				<input
					type="text"
					name="VoiceControl"
					placeholder="Voice Control"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ScreenMirroring"
					placeholder="Screen Mirroring"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="AppSupport"
					placeholder="App Support"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="GameMode"
					placeholder="Game Mode"
					onChange={handleChange}
				/>

				{/* Physical & Power */}
				<input
					type="number"
					name="PowerConsumption"
					placeholder="Power Consumption (W)"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Voltage"
					placeholder="Voltage"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="EnergyEfficiency"
					placeholder="Energy Efficiency"
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
					name="WallMountable"
					placeholder="Wall Mountable"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="VESASupport"
					placeholder="VESA Support"
					onChange={handleChange}
				/>

				{/* Additional Features */}
				<input
					type="text"
					name="ParentalControl"
					placeholder="Parental Control"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="SleepTimer"
					placeholder="Sleep Timer"
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

				<button type="submit">Add TV</button>
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

export default AddTVBody;
