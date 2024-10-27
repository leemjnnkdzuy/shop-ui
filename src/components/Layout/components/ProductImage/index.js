import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import style from "./ProductImage.module.scss";

const cx = classNames.bind(style);

function ProductImage({ ListPic }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [currentImageIndex]);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === ListPic.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? ListPic.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("banner-body")}>
                <div className={cx("banner-container")} style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {ListPic.map((banner, index) => (
                        <img
                            key={index}
                            className={cx("image-banner")}
                            src={banner}
                            alt={`ProductImagebanner ${index + 1}`}
                        />
                    ))}
                </div>
                <div className={cx("controls")}>
                    <button className={cx("control-button")} onClick={handlePrev}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#444444"
                        >
                            <path d="M13.293 6.293L7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z" />
                        </svg>
                    </button>
                    <button className={cx("control-button")} onClick={handleNext}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="#444444"
                        >
                            <path d="M10.707 17.707L16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className={cx("banner-footer")}>
                {ListPic.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`thumbnail ${index + 1}`}
                        className={cx("thumbnail", { active: index === currentImageIndex })}
                        onClick={() => setCurrentImageIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}

export default ProductImage;
