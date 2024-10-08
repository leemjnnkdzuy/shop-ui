import classNames from "classnames/bind";
import style from "./SearchItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function SearchItem({ img, name, priceBefore, priceDiscount }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={img ? img : images.loading}
                alt={name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>Tên</h4>
                <span className={cx('price')}>
                    <h5 className={cx('price-discount')}>Giá{priceDiscount}</h5>
                    <h6 className={cx('price-before')}>giá{priceBefore}</h6>
                </span>
            </div>
        </div>
    );
}

export default SearchItem;