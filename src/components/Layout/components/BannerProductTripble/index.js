import { useState, useEffect, useCallback } from "react";
import classNames from "classnames/bind";
import style from "./BannerProductTripble.module.scss";

import icons from "~/assets/icons";

const cx = classNames.bind(style);

function BannerProductTripble({ ListBanner }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const imagesPerGroup = 3;

    // Tạo mảng ảnh ảo
    const duplicatedList = [...ListBanner, ...ListBanner];

    const totalImages = duplicatedList.length;

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % (totalImages - imagesPerGroup + 1));
    }, [totalImages]);

    const handlePrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) => 
            (prevIndex - 1 + (totalImages - imagesPerGroup + 1)) % (totalImages - imagesPerGroup + 1)
        );
    }, [totalImages]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);
        return () => clearInterval(interval);
    }, [handleNext]);

    if (ListBanner.length === 0) {
        return <div>No banners available</div>;
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <div 
                    className={cx("banner-container")}
                    style={{
                        transform: `translateX(-${(currentImageIndex * (100 / imagesPerGroup))}%)`,
                        transition: 'transform 0.5s ease-in-out',
                        width: `${(totalImages / imagesPerGroup) * 100}%`,
                    }}
                >
                    {duplicatedList.map((banner, index) => (
                        <img
                            key={index}
                            className={cx("image-banner")}
                            src={banner}
                            alt={`BannerProduct banner ${index + 1}`}
                            style={{ width: `${100 / imagesPerGroup}%` }}
                        />
                    ))}
                </div>
                <div className={cx("controls")}>
                    <button className={cx("control-button")} onClick={handlePrev}>
                        <img src={icons.chevronleft} alt="chevronleft" />
                    </button>
                    <button className={cx("control-button")} onClick={handleNext}>
                        <img src={icons.chevronright} alt="chevronright" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerProductTripble;
