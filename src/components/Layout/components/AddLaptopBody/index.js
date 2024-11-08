import React, { useState } from 'react';
import classNames from "classnames/bind";
import { default as request } from '~/utils/request';
import styles from "./AddLaptopBody.module.scss";

const cx = classNames.bind(styles);

const AddLaptopBody = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Brand: '',
        Discount: 0,
        Price: 0,
        Model: '',
        Color: '',
        Comment: 0,
        RateProduct: 0,
        ThumbnailImage: null,
        ListPicture: [],
        Monitorsize: 0,
        Monitortech: '',
        Chip: '',
        Ram: '',
        RamType: '',
        Storage: '',
        StrorageType: '',
        Size: '',
        Weight: 0,
        Material: '',
        ScreenSize: 0,
        ScreenTechnology: '',
        ScreenType: '',
        ScreenResolution: '',
        ScreenDensity: 0,
        ScreenProtection: '',
        ScreenBrightness: 0,
        ScreenRefreshRate: 0,
        OS: '',
        SecuritySupport: '',
        SIMSupport: '',
        NetworkSupport: '',
        BluetoothSupport: '',
        CameraSupport: '',
        TouchScreenSupport: '',
        TouchPadSupport: '',
        WifiSupport: '',
        PowerStrogae: '',
        MadeIn: '',
    });

    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState('');

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'number' ? parseFloat(value) : value,
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
        if (!formData.Name) newErrors.Name = 'Name is required';
        if (!formData.Brand) newErrors.Brand = 'Brand is required';
        if (formData.Price <= 0) newErrors.Price = 'Price must be greater than 0';
          setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const data = new FormData();
        for (const key in formData) {
            if (key === 'ListPicture') {
                for (let i = 0; i < formData[key].length; i++) {
                    data.append(key, formData[key][i]);
                }
            } else if (key === 'ThumbnailImage') {
                data.append(key, formData[key][0]);
            } else {
                data.append(key, formData[key]);
            }
        }
        try {
            await request.post('api/laptopItem', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('Laptop added successfully');
        } catch (error) {
            console.error('Error adding laptop:', error);
            if (error.response) {
                setServerError(error.response.data.message || 'An error occurred');
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                console.error('Response headers:', error.response.headers);
            }
        }
    };

    return (
        <div className={cx("wrapper")}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Name" onChange={handleChange} />
                {errors.Name && <span className="error">{errors.Name}</span>}
                <input type="text" name="Brand" placeholder="Brand" onChange={handleChange} />
                {errors.Brand && <span className="error">{errors.Brand}</span>}
                <input type="number" name="Discount" placeholder="Discount" step="any" onChange={handleChange} />
                <input type="number" name="Price" placeholder="Price" step="any" onChange={handleChange} />
                {errors.Price && <span className="error">{errors.Price}</span>}
                <input type="text" name="Model" placeholder="Model" onChange={handleChange} />
                <input type="text" name="Color" placeholder="Color" onChange={handleChange} />
                <input type="number" name="Comment" placeholder="Comment" step="any" onChange={handleChange} />
                <input type="number" name="RateProduct" placeholder="RateProduct" step="any" onChange={handleChange} />
                <input type="file" name="ThumbnailImage" onChange={handleFileChange} />
                <input type="file" name="ListPicture" multiple onChange={handleFileChange} />
                <input type="number" name="Monitorsize" placeholder="Monitorsize" step="any" onChange={handleChange} />
                <input type="text" name="Monitortech" placeholder="Monitortech" onChange={handleChange} />
                <input type="text" name="Chip" placeholder="Chip" onChange={handleChange} />
                <input type="text" name="Ram" placeholder="Ram" onChange={handleChange} />
                <input type="text" name="RamType" placeholder="RamType" onChange={handleChange} />
                <input type="text" name="Storage" placeholder="Storage" onChange={handleChange} />
                <input type="text" name="StrorageType" placeholder="StrorageType" onChange={handleChange} />
                <input type="text" name="Size" placeholder="Size" onChange={handleChange} />
                <input type="number" name="Weight" placeholder="Weight" step="any" onChange={handleChange} />
                <input type="text" name="Material" placeholder="Material" onChange={handleChange} />
                <input type="number" name="ScreenSize" placeholder="ScreenSize" step="any" onChange={handleChange} />
                <input type="text" name="ScreenTechnology" placeholder="ScreenTechnology" onChange={handleChange} />
                <input type="text" name="ScreenType" placeholder="ScreenType" onChange={handleChange} />
                <input type="text" name="ScreenResolution" placeholder="ScreenResolution" onChange={handleChange} />
                <input type="number" name="ScreenDensity" placeholder="ScreenDensity" step="any" onChange={handleChange} />
                <input type="text" name="ScreenProtection" placeholder="ScreenProtection" onChange={handleChange} />
                <input type="number" name="ScreenBrightness" placeholder="ScreenBrightness" step="any" onChange={handleChange} />
                <input type="number" name="ScreenRefreshRate" placeholder="ScreenRefreshRate" step="any" onChange={handleChange} />
                <input type="text" name="OS" placeholder="OS" onChange={handleChange} />
                <input type="text" name="SecuritySupport" placeholder="SecuritySupport" onChange={handleChange} />
                <input type="text" name="SIMSupport" placeholder="SIMSupport" onChange={handleChange} />
                <input type="text" name="NetworkSupport" placeholder="NetworkSupport" onChange={handleChange} />
                <input type="text" name="BluetoothSupport" placeholder="BluetoothSupport" onChange={handleChange} />
                <input type="text" name="CameraSupport" placeholder="CameraSupport" onChange={handleChange} />
                <input type="text" name="TouchScreenSupport" placeholder="TouchScreenSupport" onChange={handleChange} />
                <input type="text" name="TouchPadSupport" placeholder="TouchPadSupport" onChange={handleChange} />
                <input type="text" name="WifiSupport" placeholder="WifiSupport" onChange={handleChange} />
                <input type="text" name="PowerStrogae" placeholder="PowerStrogae" onChange={handleChange} />
                <input type="text" name="MadeIn" placeholder="MadeIn" onChange={handleChange} />
                <button type="submit">Add Laptop</button>
                {serverError && <div className="error">{serverError}</div>}
            </form>
        </div>
    );
};

export default AddLaptopBody;