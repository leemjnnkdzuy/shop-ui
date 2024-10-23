import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './MoniterSidebarProduct.module.scss';

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

const panelTechnologies = [
    { value: "IPS", label: "IPS" },
    { value: "VA", label: "VA" },
    { value: "TN", label: "TN" },
    { value: "OLED", label: "OLED" },
];

const screenSizes = [
    { value: "24 inch", label: "24 inch" },
    { value: "27 inch", label: "27 inch" },
    { value: "32 inch", label: "32 inch" },
    { value: "34 inch", label: "34 inch" },
    { value: "49 inch", label: "49 inch" },
];

const refreshRates = [
    { value: "60Hz", label: "60Hz" },
    { value: "75Hz", label: "75Hz" },
    { value: "120Hz", label: "120Hz" },
    { value: "144Hz", label: "144Hz" },
    { value: "165Hz", label: "165Hz" },
    { value: "180Hz", label: "180Hz" },
    { value: "240Hz", label: "240Hz" },
    { value: "360Hz", label: "360Hz" },
];

const aspectRatios = [
    { value: "16:9", label: "16:9" },
    { value: "21:9", label: "21:9" },
    { value: "32:9", label: "32:9" },
];

const MoniterSidebarProduct = ({ onFilter }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [panelTechOptions, setPanelTechOptions] = useState([]);
    const [screenSizeOptions, setScreenSizeOptions] = useState([]);
    const [refreshRateOptions, setRefreshRateOptions] = useState([]);
    const [aspectRatioOptions, setAspectRatioOptions] = useState([]);

    const handlePanelTechChange = (event) => {
        const value = event.target.value;
        setPanelTechOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleScreenSizeChange = (event) => {
        const value = event.target.value;
        setScreenSizeOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleRefreshRateChange = (event) => {
        const value = event.target.value;
        setRefreshRateOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleAspectRatioChange = (event) => {
        const value = event.target.value;
        setAspectRatioOptions((prev) => 
            prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
        );
    };

    const handleFilter = () => {
        onFilter({
            price: {
                min: minPrice ? parseFloat(minPrice) : undefined,
                max: maxPrice ? parseFloat(maxPrice) : undefined,
            },
            panelTechnology: panelTechOptions,
            screenSize: screenSizeOptions,
            refreshRate: refreshRateOptions,
            aspectRatio: aspectRatioOptions,
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
                        Công nghệ tấm màn:
                    </div>
                    <div className={cx("tech-options")}>
                        {panelTechnologies.map(tech => (
                            <div key={tech.value} className={cx("tech-options-content")}>
                                <input
                                    type="checkbox"
                                    value={tech.value}
                                    checked={panelTechOptions.includes(tech.value)}
                                    onChange={handlePanelTechChange}
                                />
                                <div className={cx("tech-title-options")}>
                                    {tech.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cx("content-title")}>
                        Kích thước màn hình:
                    </div>
                    <div className={cx("moniter-options")}>
                        {screenSizes.map(size => (
                            <div key={size.value} className={cx("moniter-options-content")}>
                                <input
                                    type="checkbox"
                                    value={size.value}
                                    checked={screenSizeOptions.includes(size.value)}
                                    onChange={handleScreenSizeChange}
                                />
                                <div className={cx("moniter-title-options")}>
                                    {size.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cx("content-title")}>
                        Tần số quét:
                    </div>
                    <div className={cx("refresh-options")}>
                        {refreshRates.map(rate => (
                            <div key={rate.value} className={cx("refresh-options-content")}>
                                <input
                                    type="checkbox"
                                    value={rate.value}
                                    checked={refreshRateOptions.includes(rate.value)}
                                    onChange={handleRefreshRateChange}
                                />
                                <div className={cx("refresh-title-options")}>
                                    {rate.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={cx("content-title")}>
                        Tỉ lệ màn hình:
                    </div>
                    <div className={cx("aspect-options")}>
                        {aspectRatios.map(aspect => (
                            <div key={aspect.value} className={cx("aspect-options-content")}>
                                <input
                                    type="checkbox"
                                    value={aspect.value}
                                    checked={aspectRatioOptions.includes(aspect.value)}
                                    onChange={handleAspectRatioChange}
                                />
                                <div className={cx("aspect-title-options")}>
                                    {aspect.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className={cx("button-apply")} onClick={handleFilter}>Tìm Kiếm</button>
            </div>
        </div>
    );
};

export default MoniterSidebarProduct;
