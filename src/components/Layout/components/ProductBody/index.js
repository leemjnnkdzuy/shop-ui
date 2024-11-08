import classNames from "classnames/bind";
import style from "./ProductBody.module.scss";
import { useState } from "react";
import SaleItem from "~/components/Layout/components/SaleItem";
import images from "~/assets/images";
import { URL } from "~/utils/request";

const cx = classNames.bind(style);

const ProductBody = ({ productList }) => {
    const [visibleCount, setVisibleCount] = useState(20);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    if (!productList || productList.length === 0) {
        return (
            <div className={cx("wrapper")}>
                <div className={cx("no-products")}>
                    <div className={cx('err-title')}>
                        Hiện chúng mình chưa có sản phẩm nào trong danh mục này
                    </div>
                    <div className={cx('err-img')}>
                        <img src={images.loading} alt="empty-box" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                {productList.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className={cx("product")}>
                        <SaleItem 
                            img={`${URL}public/${product.ThumbnailImage}`}
                            name={product.Name}
                            price={product.Price}
                            discount={product.Discount}
                        />
                    </div>
                ))}
            </div>
            {visibleCount < productList.length && (
                <button onClick={handleShowMore} className={cx("show-more")}>
                    <div className={cx("show-more-content")}>Hiện Thêm</div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="#ffffff"
                    >
                        <path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414l5.707-5.707z" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default ProductBody;
