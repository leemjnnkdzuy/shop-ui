import React, { useState } from 'react';
import classNames from "classnames/bind";
import { default as request } from '~/utils/request';
import styles from "./AddLaptopBody.module.scss";
import Popup from '~/components/Layout/components/Popup';

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
        GPU: '',
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
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

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

    const clearForm = () => {
        setFormData({
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
            GPU: '',
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
        setErrors({});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        const data = new FormData();
        for (const key in formData) {
            if (key === 'ListPicture' || key === 'ThumbnailImage') {
                if (formData[key] && formData[key].length > 0) {
                    if (key === 'ListPicture') {
                        Array.from(formData[key]).forEach(file => {
                            data.append('ListPicture', file);
                        });
                    } else {
                        data.append('ThumbnailImage', formData[key][0]);
                    }
                }
            } else if (key === 'Color' || key === 'Ram' || key === 'Storage') {
                const values = formData[key].split(',').map(item => item.trim());
                values.forEach(value => {
                    data.append(key, value);
                });
            } else {
                data.append(key, formData[key]);
            }
        }

        try {
            const response = await request.post('api/laptopItem', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    console.log('Upload progress:', percentCompleted);
                },
            });

            if (response.status === 201) {
                setSuccessMessage('Laptop added successfully');
                setShowPopup(true);
                clearForm();
                
                setTimeout(() => {
                    setShowPopup(false);
                    setSuccessMessage('');
                }, 3000);
            }
        } catch (error) {
            console.error('Error adding laptop:', error);
            const message = error.response?.status === 413 
                ? 'Files are too large. Please reduce file sizes.'
                : error.response?.status === 400 
                ? 'Please check all required fields and file formats.'
                : error.response?.data?.message || 'An error occurred while adding the laptop';
            
            setErrorMessage(message);
            setShowPopup(true);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" placeholder="Name" onChange={handleChange} value={formData.Name} />
                {errors.Name && <span className="error">{errors.Name}</span>}
                <input type="text" name="Brand" placeholder="Brand" onChange={handleChange} value={formData.Brand} />
                {errors.Brand && <span className="error">{errors.Brand}</span>}
                <input type="number" name="Discount" placeholder="Discount" step="any" onChange={handleChange} value={formData.Discount || ''} />
                <input type="number" name="Price" placeholder="Price" step="any" onChange={handleChange} value={formData.Price || ''} />
                {errors.Price && <span className="error">{errors.Price}</span>}
                <input type="text" name="Model" placeholder="Model" onChange={handleChange} value={formData.Model} />
                <input type="text" name="Color" placeholder="Color" onChange={handleChange} value={formData.Color} />
                <input type="number" name="Comment" placeholder="Comment" step="any" onChange={handleChange} value={formData.Comment || ''} />
                <input type="number" name="RateProduct" placeholder="RateProduct" step="any" onChange={handleChange} value={formData.RateProduct || ''} />
                <input type="file" name="ThumbnailImage" onChange={handleFileChange} />
                <input type="file" name="ListPicture" multiple onChange={handleFileChange} />
                <input type="number" name="Monitorsize" placeholder="Monitorsize" step="any" onChange={handleChange} value={formData.Monitorsize || ''} />
                <input type="text" name="Monitortech" placeholder="Monitortech" onChange={handleChange} value={formData.Monitortech} />
                <input type="text" name="Chip" placeholder="Chip" onChange={handleChange} value={formData.Chip} />
                <input type="text" name="Ram" placeholder="Ram" onChange={handleChange} value={formData.Ram} />
                <input type="text" name="RamType" placeholder="RamType" onChange={handleChange} value={formData.RamType} />
                <input type="text" name="GPU" placeholder="GPU" onChange={handleChange} value={formData.GPU} />
                <input type="text" name="Storage" placeholder="Storage" onChange={handleChange} value={formData.Storage} />
                <input type="text" name="StrorageType" placeholder="StrorageType" onChange={handleChange} value={formData.StrorageType} />
                <input type="text" name="Size" placeholder="Size" onChange={handleChange} value={formData.Size} />
                <input type="number" name="Weight" placeholder="Weight" step="any" onChange={handleChange} value={formData.Weight || ''} />
                <input type="text" name="Material" placeholder="Material" onChange={handleChange} value={formData.Material} />
                <input type="number" name="ScreenSize" placeholder="ScreenSize" step="any" onChange={handleChange} value={formData.ScreenSize || ''} />
                <input type="text" name="ScreenTechnology" placeholder="ScreenTechnology" onChange={handleChange} value={formData.ScreenTechnology} />
                <input type="text" name="ScreenType" placeholder="ScreenType" onChange={handleChange} value={formData.ScreenType} />
                <input type="text" name="ScreenResolution" placeholder="ScreenResolution" onChange={handleChange} value={formData.ScreenResolution} />
                <input type="number" name="ScreenDensity" placeholder="ScreenDensity" step="any" onChange={handleChange} value={formData.ScreenDensity || ''} />
                <input type="text" name="ScreenProtection" placeholder="ScreenProtection" onChange={handleChange} value={formData.ScreenProtection} />
                <input type="number" name="ScreenBrightness" placeholder="ScreenBrightness" step="any" onChange={handleChange} value={formData.ScreenBrightness || ''} />
                <input type="number" name="ScreenRefreshRate" placeholder="ScreenRefreshRate" step="any" onChange={handleChange} value={formData.ScreenRefreshRate || ''} />
                <input type="text" name="OS" placeholder="OS" onChange={handleChange} value={formData.OS} />
                <input type="text" name="SecuritySupport" placeholder="SecuritySupport" onChange={handleChange} value={formData.SecuritySupport} />
                <input type="text" name="SIMSupport" placeholder="SIMSupport" onChange={handleChange} value={formData.SIMSupport} />
                <input type="text" name="NetworkSupport" placeholder="NetworkSupport" onChange={handleChange} value={formData.NetworkSupport} />
                <input type="text" name="BluetoothSupport" placeholder="BluetoothSupport" onChange={handleChange} value={formData.BluetoothSupport} />
                <input type="text" name="CameraSupport" placeholder="CameraSupport" onChange={handleChange} value={formData.CameraSupport} />
                <input type="text" name="TouchScreenSupport" placeholder="TouchScreenSupport" onChange={handleChange} value={formData.TouchScreenSupport} />
                <input type="text" name="TouchPadSupport" placeholder="TouchPadSupport" onChange={handleChange} value={formData.TouchPadSupport} />
                <input type="text" name="WifiSupport" placeholder="WifiSupport" onChange={handleChange} value={formData.WifiSupport} />
                <input type="text" name="PowerStrogae" placeholder="PowerStrogae" onChange={handleChange} value={formData.PowerStrogae} />
                <input type="text" name="MadeIn" placeholder="MadeIn" onChange={handleChange} value={formData.MadeIn} />
                <button type="submit">Add Laptop</button>
                {errorMessage && <div className="error">{errorMessage}</div>}
            </form>

            {showPopup && (successMessage || errorMessage) && (
                <Popup>
                    <div className={cx("header")}>
                        <h2>Thông báo</h2>
                        <button
                            onClick={() => {
                                setShowPopup(false);
                                setSuccessMessage('');
                                setErrorMessage('');
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

export default AddLaptopBody;