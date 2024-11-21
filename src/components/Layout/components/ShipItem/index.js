import classNames from "classnames/bind";
import style from "./ShipItem.module.scss";

const cx = classNames.bind(style);

function ShipItem({ img, name, description = "", quantity, price, date }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx('product')}>
                        <div className={cx('image')}>
                            <img src={img} alt="product" />
                        </div>
                        <div className={cx('info')}>
                            <div className={cx('name')}>{name}</div>
                            <div className={cx('description')}>{description}</div>
                        </div>
                    </div>
                    <div className={cx('quantity')}>
                        {quantity}
                    </div>
                    <div className={cx('price')}>
                        {(price || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                    <div className={cx('date')}>
                        {formatDate(date)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShipItem;
