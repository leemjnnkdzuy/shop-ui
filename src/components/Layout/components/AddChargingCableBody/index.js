import React, { useState } from "react";
import classNames from "classnames/bind";
import { default as request } from "~/utils/request";
import styles from "./AddChargingCableBody.module.scss";
import Popup from "~/components/Layout/components/Popup";

const cx = classNames.bind(styles);

const AddChargingCableBody = () => {
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
		CableType: "",
		ConnectorType: "",
		Length: "",
		MaximumPower: "",
		DataTransferRate: "",
		Compatibility: "",
		Material: "",
		Durability: "",
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
			CableType: "",
			ConnectorType: "",
			Length: "",
			MaximumPower: "",
			DataTransferRate: "",
			Compatibility: "",
			Material: "",
			Durability: "",
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
			} else if (["Color", "Compatibility"].includes(key)) {
				const values = formData[key].split(",").map((item) => item.trim());
				values.forEach((value) => {
					data.append(key, value);
				});
			} else {
				data.append(key, formData[key]);
			}
		}

		try {
			const response = await request.post("api/chargingCableItem", data, {
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
					type="text"
					name="CableType"
					placeholder="Cable Type"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="ConnectorType"
					placeholder="Connector Type"
					onChange={handleChange}
				/>
				<input type="text" name="Length" placeholder="Length" onChange={handleChange} />
				<input
					type="text"
					name="MaximumPower"
					placeholder="Maximum Power"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="DataTransferRate"
					placeholder="Data Transfer Rate"
					onChange={handleChange}
				/>
				<input
					type="text"
					name="Compatibility"
					placeholder="Compatibility (comma-separated)"
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
					name="Durability"
					placeholder="Durability"
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
				<button type="submit">Add Charging Cable</button>
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

export default AddChargingCableBody;
