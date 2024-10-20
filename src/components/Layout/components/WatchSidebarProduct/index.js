import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './WatchSidebarProduct.module.scss';

const cx = classNames.bind(style);

const priceRanges = [
    { value: "", label: "Chọn mức giá" },
    { value: "0", label: "0 VNĐ" },
    { value: "500000", label: "500,000 VNĐ" },
    { value: "1000000", label: "1,000,000 VNĐ" },
    { value: "3000000", label: "3,000,000 VNĐ" },
    { value: "5000000", label: "5,000,000 VNĐ" },
    { value: "7000000", label: "7,000,000 VNĐ" },
    { value: "9000000", label: "9,000,000 VNĐ" },
    { value: "10000000", label: "10,000,000 VNĐ" },
    { value: "12500000", label: "12,500,000 VNĐ" },
    { value: "15000000", label: "15,000,000 VNĐ" },
    { value: "17500000", label: "17,500,000 VNĐ" },
    { value: "20000000", label: "20,000,000 VNĐ" },
    { value: "25000000", label: "25,000,000 VNĐ" },
    { value: "30000000", label: "30,000,000 VNĐ" },
    { value: "1000000000", label: "Trên 30,000,000 VNĐ" },
];

const WatchSidebarProduct = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [ramOptions, setRamOptions] = useState([]);
    const [screenSizeOptions, setScreenSizeOptions] = useState([]);

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

    const handleFilter = () => {
        onFilter({
            price: {
                min: minPrice ? parseFloat(minPrice) : undefined,
                max: maxPrice ? parseFloat(maxPrice) : undefined,
            },
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
                    <div className={cx("price-options")}>
                        <div className={cx("price-options-content")}>
                            <div className={cx("title-options")}>
                                Từ:
                            </div>
                            <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
                                {priceRanges.map(range => (
                                    <option key={range.value} value={range.value}>
                                        {range.label}
                                    </option>
                                ))}
                            </select>
                            <div className={cx("title-options")}>
                                Đến:
                            </div>
                            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
                                {priceRanges.map(range => (
                                    <option key={range.value} value={range.value}>
                                        {range.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className={cx("content-title")}>
                        Dung lượng RAM:
                    </div>
                    <div className={cx("ram-options")}>
                        <div className={cx("ram-options-content")}>
                            <input
                                type="checkbox"
                                value="3GB"
                                checked={ramOptions.includes("3GB")}
                                onChange={handleRamChange}
                            />
                            <div className={cx("ram-title-options")}>
                                3GB
                            </div>
                        </div>
                        <div className={cx("ram-options-content")}>
                            <input
                                type="checkbox"
                                value="4GB"
                                checked={ramOptions.includes("4GB")}
                                onChange={handleRamChange}
                            />
                            <div className={cx("ram-title-options")}>
                                4GB
                            </div>
                        </div>
                        <div className={cx("ram-options-content")}>
                            <input
                                type="checkbox"
                                value="6GB"
                                checked={ramOptions.includes("6GB")}
                                onChange={handleRamChange}
                            />
                            <div className={cx("ram-title-options")}>
                                6GB
                            </div>
                        </div>
                        <div className={cx("ram-options-content")}>
                            <input
                                type="checkbox"
                                value="8GB"
                                checked={ramOptions.includes("8GB")}
                                onChange={handleRamChange}
                            />
                            <div className={cx("ram-title-options")}>
                                8GB
                            </div>
                        </div>
                        <div className={cx("ram-options-content")}>
                            <input
                                type="checkbox"
                                value="16GB"
                                checked={ramOptions.includes("16GB")}
                                onChange={handleRamChange}
                            />
                            <div className={cx("ram-title-options")}>
                                16GB
                            </div>
                        </div>
                    </div>

                    <div className={cx("content-title")}>
                        Kích cỡ màn hình:
                    </div>
                    <div className={cx("moniter-options")}>
                        <div className={cx("moniter-options-content")}>
                            <input
                                type="checkbox"
                                value="7 inch - 9 inch"
                                checked={screenSizeOptions.includes("7 inch - 9 inch")}
                                onChange={handleScreenSizeChange}
                            />
                            <div className={cx("moniter-title-options")}>
                                7 inch - 9 inch
                            </div>
                        </div>
                        <div className={cx("moniter-options-content")}>
                            <input
                                type="checkbox"
                                value="10 inch - 11 inch"
                                checked={screenSizeOptions.includes("10 inch - 11 inch")}
                                onChange={handleScreenSizeChange}
                            />
                            <div className={cx("moniter-title-options")}>
                                10 inch - 11 inch
                            </div>
                        </div>
                        <div className={cx("moniter-options-content")}>
                            <input
                                type="checkbox"
                                value="12 inch - 20 inch"
                                checked={screenSizeOptions.includes("12 inch - 20 inch")}
                                onChange={handleScreenSizeChange}
                            />
                            <div className={cx("moniter-title-options")}>
                                Hơn 12 inch    
                            </div>
                        </div>
                    </div>
                </div>
                <button className={cx("button-apply")} onClick={handleFilter}>Tìm Kiếm</button>
            </div>
        </div>
    );
};

export default WatchSidebarProduct;
