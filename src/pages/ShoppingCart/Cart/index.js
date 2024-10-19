import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Cart.module.scss";


import SidebarCart from "~/components/Layout/components/SidebarCart";
import CartItem from "~/components/Layout/components/CartItem";
import products from "~/assets/product";

const cx = classNames.bind(style);

function Cart() {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            img: products.laptop,
            name: 'Laptop',
            description: 'aaaaaaaaaa',
            quantity: 1,
            price: 10000000
        }
    ]);

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const [paymentMethod, setPaymentMethod] = useState('cash');

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    return (
        <div className={cx('wrapper')}>
            <SidebarCart title={'Giỏ hàng của bạn'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Đơn giá</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Thành tiền</div>
                        </div>
                        <div className={cx('content')}>
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        img={item.img}
                                        name={item.name}
                                        description={item.description}
                                        quantity={item.quantity}
                                        price={item.price}
                                        onQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                                    />
                                ))
                            ) : (
                                <div className={cx('empty-cart')}>Không tìm thấy sản phẩm bạn trong giỏ hàng</div>
                            )}
                        </div>
                    </div>
                    {cartItems.length > 0 && (
                        <div className={cx('checkout-temp')}>
                            <div className={cx('total')}>
                                <div className={cx('title-total')}>Tổng cộng</div>
                                <div className={cx('price-total')}>
                                    {totalAmount.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                </div>
                            </div>
                            <div className={cx('method-payment')}>
                                <select value={paymentMethod} onChange={handlePaymentMethodChange}>
                                    <option value="cash">Thanh toán khi nhận hàng</option>
                                    <option value="transfer">Chuyển khoản</option>
                                </select>
                            </div>
                            <div className={cx('checkout')}>
                                Thanh toán
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Cart;
