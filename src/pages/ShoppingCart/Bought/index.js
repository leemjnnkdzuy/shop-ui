import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Bought.module.scss";
import request from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";

import SidebarCart from "~/components/Layout/components/SidebarCart";
import ShipItem from "~/components/Layout/components/ShipItem";

const cx = classNames.bind(style);

function Bought() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [boughtItems, setBoughtItems] = useState([]);

    useEffect(() => {
        const fetchDeliveredOrders = async () => {
            const token =
                localStorage.getItem("userToken") || sessionStorage.getItem("userToken");

            if (!token) {
                setErrorMessage("Vui lòng đăng nhập để tiếp tục.");
                setShowPopup(true);
                return;
            }

            try {
                const response = await request.get("api/bought/delivered-orders", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (response.data.success) {
                    if (response.data.orders && response.data.orders.length > 0) {
                        setBoughtItems(response.data.orders);
                    } else {
                        setBoughtItems([]);
                    }
                } else {
                    setErrorMessage(response.data.message || "Không thể lấy danh sách đơn hàng.");
                    setShowPopup(true);
                }
            } catch (error) {
                console.error("Error fetching delivered orders:", error);
                setErrorMessage("Không thể kết nối đến máy chủ.");
                setShowPopup(true);
            }
        };

        fetchDeliveredOrders();
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false);
        setErrorMessage("");
        navigate("/login");
    };

    const renderBoughtItems = () => {
        if (!boughtItems || boughtItems.length === 0) {
            return (
                <div className={cx('empty-cart')}>
                    Không tìm thấy đơn hàng đã giao
                </div>
            );
        }

        return boughtItems.flatMap((order) =>
            order.orderItems.map((item) => (
                <ShipItem
                    key={`${order._id}-${item.productId}`}
                    img={item.img}
                    name={item.name}
                    description=""
                    quantity={item.quantity}
                    price={item.price * item.quantity}
                    date={new Date(order.createdAt).toLocaleDateString('vi-VN')}
                />
            ))
        );
    };

    return (
        <div className={cx('wrapper')}>
            <SidebarCart title={'Sản phẩm đã được giao'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng đơn giá</div>
                            <div className={cx('title')}>Ngày giao</div>
                        </div>
                        <div className={cx('content')}>
                            {renderBoughtItems()}
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

export default Bought;