import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Ship.module.scss";
import request from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";

import SidebarCart from "~/components/Layout/components/SidebarCart";
import ShipItem from "~/components/Layout/components/ShipItem";

const cx = classNames.bind(style);

function Ship() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    
    const [shipItems, setShipItems] = useState([]);

    useEffect(() => {
        const fetchPendingOrders = async () => {
            const token =
                localStorage.getItem("userToken") || sessionStorage.getItem("userToken");

            if (!token) {
                setErrorMessage("Vui lòng đăng nhập để tiếp tục.");
                setShowPopup(true);
                return;
            }

            try {
                const response = await request.get("api/shipping/pending-orders", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    setShipItems(response.data.orders);
                } else {
                    setErrorMessage(response.data.message);
                    setShowPopup(true);
                }
            } catch (error) {
                console.error("Error fetching pending orders:", error);
                setErrorMessage("Không thể lấy danh sách đơn hàng.");
                setShowPopup(true);
            }
        };

        fetchPendingOrders();
    }, [navigate]);

    const handleClosePopup = () => {
        setShowPopup(false);
        setErrorMessage("");
        navigate("/login");
    };

    const renderCartItems = () => {
        if (shipItems.length === 0) {
            return (
                <div className={cx('empty-cart')}>
                    Không tìm thấy đơn hàng đang chờ
                </div>
            );
        }

        return shipItems.map((order) =>
            order.orderItems.map((item) => (
                <ShipItem
                    key={item.productId}
                    img={item.img}
                    name={item.name}
                    description=""
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                    date={order.createdAt}
                />
            ))
        );
    };

    return (
        <div className={cx('wrapper')}>
            <SidebarCart title={'Sản phẩm đang giao đến bạn'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng đơn giá</div>
                            <div className={cx('title')}>Ngày giao dự kiến</div>
                        </div>
                        <div className={cx('content')}>
                            {renderCartItems()}
                        </div>
                    </div>
                </div>
            </div>
            
            {showPopup && (
                <Popup>
                    <div className={cx("header-popup")}>
                        <h2>Thông báo</h2>
                        <button
                            onClick={handleClosePopup}
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

export default Ship;
