import classNames from "classnames/bind";
import style from "./SaleItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function SaleItem({ img, name, price, discount }) {
    const formatToVND = (amount) => {
        return amount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    };

    const discountAmount = discount - price ;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('img')}>
                <img src={img ? img : images.loading} alt={name ? name : "Sản Phẩm"} />
            </div>
            <h4 className={cx('name')}>
                {name ? name : "Sản Phẩm"}
            </h4>
            <div className={cx('price-item')}>
                <span className={cx('price')}>
                    {price ? formatToVND(price) : "Giá"}
                </span>
                <span className={cx('discount')}>
                    {discount ? formatToVND(discount) : "Giảm Từ"}
                </span>
            </div>
            <span className={cx('sale')}>
                Giảm {formatToVND(discountAmount)}
            </span>
        </div>
    );
}

export default SaleItem;