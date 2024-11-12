import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Bought.module.scss";
import request from "~/utils/request";
import Popup from "~/components/Layout/components/Popup";
import products from "~/assets/product";

import SidebarCart from "~/components/Layout/components/SidebarCart";
import BoughtItem from "~/components/Layout/components/BoughtItem";

const cx = classNames.bind(style);

function Bought() {
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    
    const [boughtItem] = useState([
        {
            id: 1,
            img: products.laptop,
            name: 'Laptop',
            description: 'aaaaaaaaaa',
            quantity: 1,
            price: 10000000,
            date: '2021-10-10',
        }
    ]);

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

    const handleClosePopup = () => {
        setShowPopup(false);
        setErrorMessage("");
        navigate("/login");
    };

    const renderCartItems = () => {
        if (boughtItem.length === 0) {
            return <div className={cx('empty-cart')}>Không tìm thấy sản phẩm bạn đã từng giao đến bạn</div>;
        }

        return boughtItem.map(item => (
            <BoughtItem
                key={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
                date={item.date}
            />
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <SidebarCart title={'Sản phẩm bạn đã mua'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng đơn giá</div>
                            <div className={cx('title')}>Ngày hoàn thành</div>
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

export default Bought;