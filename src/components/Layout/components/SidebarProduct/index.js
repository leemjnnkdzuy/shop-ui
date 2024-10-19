import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './SidebarProduct.module.scss';

const cx = classNames.bind(style);

const SidebarProduct = ({ onFilter }) => {
    const [priceOptions, setPriceOptions] = useState([]);
    const [ramOptions, setRamOptions] = useState([]);
    const [screenSizeOptions, setScreenSizeOptions] = useState([]);
    const [inputPrice, setInputPrice] = useState('');

    const handlePriceChange = (event) => {
        const value = event.target.value;
        setPriceOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleRamChange = (event) => {
        const value = event.target.value;
        setRamOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleScreenSizeChange = (event) => {
        const value = event.target.value;
        setScreenSizeOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleInputPriceChange = (event) => {
        const value = event.target.value;
        setInputPrice(value);
        if (value) {
            setPriceOptions([]); // Bỏ tất cả các lựa chọn giá khi có giá trị nhập vào
        }
    };

    const handleFilter = () => {
        onFilter({
            price: inputPrice ? [inputPrice] : priceOptions,
            ram: ramOptions,
            screenSize: screenSizeOptions,
        });
    };

    return (
        <div className="wrapper">
            <div className={cx("inner")}>
                <div className={cx("header")}>
                    <div className={cx("header-icon")}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="35"
                            height="35"
                            viewBox="0 0 24 24"
                            fill="rgba(0, 0, 0, 1)"
                        >
                            <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z" />
                        </svg>
                    </div>
                    <div className={cx("header-title")}>
                        Bộ lọc sản phẩm
                    </div>
                </div>
            
                <div className={cx("content")}>
                    <div className={cx("content-title")}>
                        Mức giá:
                    </div>
                    <div className={cx("options")}>
                        <input
                            type="text"
                            value={inputPrice}
                            onChange={handleInputPriceChange}
                            placeholder="Nhập số tiền..."
                        />
                        <div>
                            <input
                                type="checkbox"
                                value="dưới 500k"
                                checked={priceOptions.includes("dưới 500k")}
                                onChange={handlePriceChange}
                            /> Dưới 500k
                            <input
                                type="checkbox"
                                value="500k - 1tr"
                                checked={priceOptions.includes("500k - 1tr")}
                                onChange={handlePriceChange}
                            /> 500k - 1tr
                            <input
                                type="checkbox"
                                value="1tr - 2tr"
                                checked={priceOptions.includes("1tr - 2tr")}
                                onChange={handlePriceChange}
                            /> 1tr - 2tr
                            <input
                                type="checkbox"
                                value="trên 2tr"
                                checked={priceOptions.includes("trên 2tr")}
                                onChange={handlePriceChange}
                            /> Trên 2tr
                        </div>
                    </div>
                </div>
                
                <div>
                    <div className={cx("content-title")}>
                        Dung lượng RAM:
                    </div>
                    <div className={cx("options")}>
                        <input
                            type="checkbox"
                            value="4GB"
                            checked={ramOptions.includes("4GB")}
                            onChange={handleRamChange}
                        /> 4GB
                        <input
                            type="checkbox"
                            value="8GB"
                            checked={ramOptions.includes("8GB")}
                            onChange={handleRamChange}
                        /> 8GB
                        <input
                            type="checkbox"
                            value="16GB"
                            checked={ramOptions.includes("16GB")}
                            onChange={handleRamChange}
                        /> 16GB
                    </div>
                </div>
                
                <div>
                    <div className={cx("content-title")}>
                        Kích cỡ màn hình:
                    </div>
                    <div className={cx("options")}>
                        <input
                            type="checkbox"
                            value="13 inch"
                            checked={screenSizeOptions.includes("13 inch")}
                            onChange={handleScreenSizeChange}
                        /> 13 inch
                        <input
                            type="checkbox"
                            value="15 inch"
                            checked={screenSizeOptions.includes("15 inch")}
                            onChange={handleScreenSizeChange}
                        /> 15 inch
                        <input
                            type="checkbox"
                            value="17 inch"
                            checked={screenSizeOptions.includes("17 inch")}
                            onChange={handleScreenSizeChange}
                        /> 17 inch
                    </div>
                </div>
                <button className={cx("button-apply")} onClick={handleFilter}>Tìm Kiếm</button>
            </div>
        </div>
    );
};

export default SidebarProduct;
