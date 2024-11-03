import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { default as request } from '~/utils/request';
import LoadingBody from "~/components/Layout/components/LoadingBody";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Dashboard() {
    const [activeItem, setActiveItem] = useState('');
    const [loading, setLoading] = useState(true);

    const [formDataPhone, setFormDataPhone] = useState({
        Name: "",
        Brand: "",
        Discount: "",
        Price: "",
        Chip: "",
        Model: "",
        Monitorsize: "",
        Color: "",
        Storage: "",
        Monitortech: "",
        Comment: "",
        RateProduct: "",
        Ram: "",
        MemoryCard: "",
        Size: "",
        Weight: "",
        Protection: "",
        Material: "",
        ScreenSize: "",
        ScreenTechnology: "",
        ScreenType: "",
        ScreenResolution: "",
        ScreenDensity: "",
        ScreenProtection: "",
        ScreenBrightness: "",
        ScreenRefreshRate: "",
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
        MadeIn: ""
    });
    
    const navigate = useNavigate();

    const handleMenuClick = (itemName) => {
        setActiveItem(itemName);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        navigate("/Admin");
    };

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            if (!token) {
                navigate("/Admin");
                return;
            }

            try {
                const response = await request.get("api/admin/verify-token", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.data.valid) {
                    navigate("/Admin");
                } else {
                    setTimeout(() => {
                        setLoading(false);
                    }, 3000);
                }
            } catch (error) {
                console.error("Token verification failed:", error);
                navigate("/Admin");
            }
        };
        checkToken();
    }, [navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDataPhone({
            ...formDataPhone,
            [name]: value
        });
    };

    const handleSubmitPhone = async (e) => {
        e.preventDefault();
        try {
            const response = await request.post("/api/phoneItem", formDataPhone);
            console.log("Phone item created:", response.data);
        } catch (error) {
            console.error("Error creating phone item:", error);
        }
    };

    const renderForm = () => (
        <form onSubmit={handleSubmitPhone}>
            <input type="text" name="Name" value={formDataPhone.Name} onChange={handleChange} placeholder="Name" required />
            <input type="text" name="Brand" value={formDataPhone.Brand} onChange={handleChange} placeholder="Brand" required />
            <input type="number" name="Discount" value={formDataPhone.Discount} onChange={handleChange} placeholder="Discount" required />
            <input type="number" name="Price" value={formDataPhone.Price} onChange={handleChange} placeholder="Price" required />
            <input type="text" name="Chip" value={formDataPhone.Chip} onChange={handleChange} placeholder="Chip" required />
            <input type="text" name="Model" value={formDataPhone.Model} onChange={handleChange} placeholder="Model" required />
            <input type="number" name="Monitorsize" value={formDataPhone.Monitorsize} onChange={handleChange} placeholder="Monitor Size" required />
            <input type="text" name="Color" value={formDataPhone.Color} onChange={handleChange} placeholder="Color" required />
            <input type="text" name="Storage" value={formDataPhone.Storage} onChange={handleChange} placeholder="Storage" required />
            <input type="text" name="Monitortech" value={formDataPhone.Monitortech} onChange={handleChange} placeholder="Monitor Tech" required />
            <input type="number" name="Comment" value={formDataPhone.Comment} onChange={handleChange} placeholder="Comment" required />
            <input type="number" name="RateProduct" value={formDataPhone.RateProduct} onChange={handleChange} placeholder="Rate Product" required />
            <input type="text" name="Ram" value={formDataPhone.Ram} onChange={handleChange} placeholder="Ram" required />
            <input type="text" name="MemoryCard" value={formDataPhone.MemoryCard} onChange={handleChange} placeholder="Memory Card" required />
            <input type="text" name="Size" value={formDataPhone.Size} onChange={handleChange} placeholder="Size" required />
            <input type="number" name="Weight" value={formDataPhone.Weight} onChange={handleChange} placeholder="Weight" required />
            <input type="text" name="Protection" value={formDataPhone.Protection} onChange={handleChange} placeholder="Protection" required />
            <input type="text" name="Material" value={formDataPhone.Material} onChange={handleChange} placeholder="Material" required />
            <input type="number" name="ScreenSize" value={formDataPhone.ScreenSize} onChange={handleChange} placeholder="Screen Size" required />
            <input type="text" name="ScreenTechnology" value={formDataPhone.ScreenTechnology} onChange={handleChange} placeholder="Screen Technology" required />
            <input type="text" name="ScreenType" value={formDataPhone.ScreenType} onChange={handleChange} placeholder="Screen Type" required />
            <input type="text" name="ScreenResolution" value={formDataPhone.ScreenResolution} onChange={handleChange} placeholder="Screen Resolution" required />
            <input type="number" name="ScreenDensity" value={formDataPhone.ScreenDensity} onChange={handleChange} placeholder="Screen Density" required />
            <input type="text" name="ScreenProtection" value={formDataPhone.ScreenProtection} onChange={handleChange} placeholder="Screen Protection" required />
            <input type="number" name="ScreenBrightness" value={formDataPhone.ScreenBrightness} onChange={handleChange} placeholder="Screen Brightness" required />
            <input type="number" name="ScreenRefreshRate" value={formDataPhone.ScreenRefreshRate} onChange={handleChange} placeholder="Screen Refresh Rate" required />
            <input type="text" name="BackCameraInformation" value={formDataPhone.BackCameraInformation} onChange={handleChange} placeholder="Back Camera Information" required />
            <input type="text" name="BackCameraRotationAbility" value={formDataPhone.BackCameraRotationAbility} onChange={handleChange} placeholder="Back Camera Rotation Ability" required />
            <input type="text" name="BackCameraFeature" value={formDataPhone.BackCameraFeature} onChange={handleChange} placeholder="Back Camera Feature" required />
            <input type="text" name="FrontCameraInformation" value={formDataPhone.FrontCameraInformation} onChange={handleChange} placeholder="Front Camera Information" required />
            <input type="text" name="FrontCameraRotationAbility" value={formDataPhone.FrontCameraRotationAbility} onChange={handleChange} placeholder="Front Camera Rotation Ability" required />
            <input type="text" name="FrontCameraFeature" value={formDataPhone.FrontCameraFeature} onChange={handleChange} placeholder="Front Camera Feature" required />
            <input type="text" name="OS" value={formDataPhone.OS} onChange={handleChange} placeholder="OS" required />
            <input type="text" name="SecuritySupport" value={formDataPhone.SecuritySupport} onChange={handleChange} placeholder="Security Support" required />
            <input type="text" name="SIMSupport" value={formDataPhone.SIMSupport} onChange={handleChange} placeholder="SIM Support" required />
            <input type="text" name="NetworkSupport" value={formDataPhone.NetworkSupport} onChange={handleChange} placeholder="Network Support" required />
            <input type="text" name="BluetoothSupport" value={formDataPhone.BluetoothSupport} onChange={handleChange} placeholder="Bluetooth Support" required />
            <input type="text" name="WifiSupport" value={formDataPhone.WifiSupport} onChange={handleChange} placeholder="Wifi Support" required />
            <input type="text" name="PowerStrogae" value={formDataPhone.PowerStrogae} onChange={handleChange} placeholder="Power Storage" required />
            <input type="text" name="MadeIn" value={formDataPhone.MadeIn} onChange={handleChange} placeholder="Made In" required />
            <button type="submit">Submit</button>
        </form>
    );

    if (loading) {
        return (
            <div className={cx("loading")}>
                <LoadingBody />
            </div>
        );
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("sidebar")}>
                <div className={cx("logo")} onClick={() => navigate("/")}>
                    <img src={images.logo_1} alt="logo" />
                </div>
                <div className={cx("menu")}>
                    {[
                        "Phụ kiện", "Máy hút bụi", "Tủ lạnh", "Laptop", 
                        "Linh kiện máy tính", "Màng hình máy tính", "PC", 
                        "Điện thoại", "Máy tính bảng", "TV", "Máy Giặt", 
                        "Đồng hồ thông minh"
                    ].map((item) => (
                        <div 
                            key={item}
                            className={cx("item", { active: activeItem === item })}
                            onClick={() => handleMenuClick(item)}
                        >
                            {item}
                        </div>
                    ))}
                    <div className={cx("item")} onClick={handleLogout}>
                        Đăng xuất
                    </div>
                </div>
            </div>
            <div className={cx("inner")}>
                <div className={cx("form")}>
                    
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
