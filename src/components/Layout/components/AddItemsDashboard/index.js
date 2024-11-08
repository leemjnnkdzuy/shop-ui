import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./AddItemsDashboard.module.scss";

// Import AddLaptopBody component
import AddLaptopBody from "~/components/Layout/components/AddLaptopBody";


const cx = classNames.bind(styles);

const AddItemsDashboard = () => {
    const [selectedOption, setSelectedOption] = useState("");

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const renderBodyComponent = () => {
        switch (selectedOption) {
            case "laptop":
                return <AddLaptopBody />;
            default:
                return <AddLaptopBody />;
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx('header')}>
                <select className={cx('header-section')} onChange={handleSelectChange}>
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
                    <select className={cx('header-section')}>
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
                    <select className={cx('header-section')}>
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
            <div className={cx('body')}>
                {renderBodyComponent()}
            </div>
        </div>
    );
};

export default AddItemsDashboard;