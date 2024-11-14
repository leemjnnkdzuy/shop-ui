import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Cart.module.scss";
import request, { URL } from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";

import SidebarCart from "~/components/Layout/components/SidebarCart";
import CartItem from "~/components/Layout/components/CartItem";

const cx = classNames.bind(style);

function Cart() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Fetch cart items
    useEffect(() => {
        const fetchCartItems = async () => {
            const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
            
            if (!token) {
                setErrorMessage("Vui lòng đăng nhập để xem giỏ hàng");
                setShowPopup(true);
                return;
            }

            try {
                const response = await request.get("api/user/cart", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                const transformedItems = response.data.map(item => ({
                    ...item,
                    img: `${URL}public/${item.img}`,
                    id: item.productId
                }));

                setCartItems(transformedItems);
            } catch (error) {
                if (error.response?.status === 401) {
                    setErrorMessage("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
                    setShowPopup(true);
                } else {
                    setErrorMessage("Không thể tải giỏ hàng. Vui lòng thử lại sau.");
                    setShowPopup(true);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    const handleQuantityChange = async (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.productId === id ? { ...item, quantity: newQuantity } : item
            )
        );

        // TODO: Thêm API cập nhật số lượng trong giỏ hàng
    };

    const handleDeleteItem = async (productId) => {
        const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
        
        if (!token) {
            setErrorMessage("Vui lòng đăng nhập để thực hiện thao tác này");
            setShowPopup(true);
            return;
        }

        try {
            await request.delete(`api/user/cart/${productId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
        } catch (error) {
            setErrorMessage("Không thể xóa sản phẩm. Vui lòng thử lại sau.");
            setShowPopup(true);
        }
    };

    const [paymentMethod, setPaymentMethod] = useState('cash');
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePaymentMethodChange = (e) => {
        setPaymentMethod(e.target.value);
    };

    useEffect(() => {
        const verifyToken = async () => {
            const token = localStorage.getItem("userToken") || sessionStorage.getItem("userToken");
            
            if (!token) {
                setErrorMessage("Vui lòng đăng nhập để tiếp tục.");
                setShowPopup(true);
                return;
            }

            try {
                await request.get("api/user/verify-token", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } catch (error) {
                setErrorMessage("Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại.");
                setShowPopup(true);
            }
        };

        verifyToken();
    }, [navigate]);

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
                            {isLoading ? (
                                <div className={cx('loading')}>Đang tải giỏ hàng...</div>
                            ) : cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <CartItem
                                        key={item.productId}
                                        img={item.img}
                                        name={item.name}
                                        description={item.description}
                                        quantity={item.quantity}
                                        price={item.price}
                                        onQuantityChange={(newQuantity) => 
                                            handleQuantityChange(item.productId, newQuantity)
                                        }
                                        onDelete={() => handleDeleteItem(item.productId)}
                                    />
                                ))
                            ) : (
                                <div className={cx('empty-cart')}>
                                    Không tìm thấy sản phẩm nào trong giỏ hàng
                                </div>
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
            
            {showPopup && (
                <Popup>
                    <div className={cx("header-popup")}>
                        <h2>Thông báo</h2>
                        <button
                            onClick={() => {
                                setShowPopup(false);
                                if (!localStorage.getItem("userToken") && 
                                    !sessionStorage.getItem("userToken")) {
                                    navigate("/login");
                                }
                            }}
                            className={cx("close-btn-popup")}
                        >
                            &times;
                        </button>
                    </div>
                    <div className={cx("content-popup")}>
                        <p>{errorMessage}</p>
                    </div>
                </Popup>
            )}
        </div>
    );
}

export default Cart;
