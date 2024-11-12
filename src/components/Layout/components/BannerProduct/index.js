import { useState, useEffect, useCallback } from "react";
import classNames from "classnames/bind";
import style from "./BannerProduct.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(style);

function BannerProduct({ ListBanner }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === ListBanner.length - 1 ? 0 : prevIndex + 1
        );
    }, [ListBanner.length]);

    const handlePrev = useCallback(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? ListBanner.length - 1 : prevIndex - 1
        );
    }, [ListBanner.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [handleNext]);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <div className={cx("banner-container")} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {ListBanner.map((banner, index) => (
                        <img
                            key={index}
                            className={cx("image-banner")}
                            src={banner}
                            alt={`BannerProductbanner ${index + 1}`}
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

export default BannerProduct;
