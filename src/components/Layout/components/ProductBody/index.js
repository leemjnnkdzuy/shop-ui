import classNames from "classnames/bind";
import style from "./ProductBody.module.scss";
import { useState } from "react";
import SaleItem from "~/components/Layout/components/SaleItem";

const cx = classNames.bind(style);

const ProductBody = ({ productList }) => {
    const [visibleCount, setVisibleCount] = useState(20);

    const handleShowMore = () => {
        setVisibleCount((prevCount) => prevCount + 8);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                {productList.slice(0, visibleCount).map((product) => (
                    <div key={product.id} className={cx("product")}>
                        <SaleItem 
                            img={product.img}
                            name={product.name}
                            price={product.price}
                            discount={product.discount}
                        />
                    </div>
                ))}
            </div>
            {visibleCount < productList.length && (
                <button onClick={handleShowMore} className={cx("show-more")}>
                    Hiện Thêm
                </button>
            )}
        </div>
    );
};

export default ProductBody;
