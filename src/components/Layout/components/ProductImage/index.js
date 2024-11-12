import { useState, useEffect, useCallback } from "react";
import classNames from "classnames/bind";
import style from "./ProductImage.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(style);

function ProductImage({ ListPic }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = useCallback(() => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === ListPic.length - 1 ? 0 : prevIndex + 1
        );
    }, [ListPic.length]);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 7000);

        return () => clearInterval(interval);
    }, [handleNext]);

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
                        <img src={icons.chevronleft} alt="chevronleft" />
                    </button>
                    <button className={cx("control-button")} onClick={handleNext}>
                        <img src={icons.chevronright} alt="chevronright" />
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
