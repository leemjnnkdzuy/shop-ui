import { useState, useEffect, useCallback } from "react";
import classNames from "classnames/bind";
import style from "./BannerProductTripble.module.scss";

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
                        transform: `translateX(-${(currentImageIndex * (100 / imagesPerGroup))}%)`, // Chuyển mỗi lần theo chiều dài của nhóm ảnh
                        transition: 'transform 0.5s ease-in-out',
                        width: `${(totalImages / imagesPerGroup) * 100}%`, // Chiều rộng tổng thể của mảng ảo
                    }}
                >
                    {duplicatedList.map((banner, index) => (
                        <img
                            key={index}
                            className={cx("image-banner")}
                            src={banner}
                            alt={`BannerProduct banner ${index + 1}`}
                            style={{ width: `${100 / imagesPerGroup}%` }} // Điều chỉnh chiều rộng mỗi ảnh
                        />
                    ))}
                </div>
                <div className={cx("controls")}>
                    <button className={cx("control-button")} onClick={handlePrev}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#444444">
                            <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                        </svg>
                    </button>
                    <button className={cx("control-button")} onClick={handleNext}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#444444">
                            <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BannerProductTripble;
