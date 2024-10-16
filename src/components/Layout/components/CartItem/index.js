import { useState } from "react";
import classNames from "classnames/bind";
import style from "./CartItem.module.scss";

const cx = classNames.bind(style);

function CartItem({ img, name, description, quantity, price, onQuantityChange }) {
    const [currentQuantity, setCurrentQuantity] = useState(quantity);

    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setCurrentQuantity(value);
            onQuantityChange(value);  
        }
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
                    <div className={cx('price')}>
                        {(price || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                    <input 
                        type="number" 
                        value={currentQuantity} 
                        onChange={handleQuantityChange} 
                        min="1" 
                    />
                    <div className={cx('total')}>
                        {(price * currentQuantity || 0).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItem;
