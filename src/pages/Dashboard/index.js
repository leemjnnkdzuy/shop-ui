import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { default as request } from '~/utils/request';
import LoadingBody from "~/components/Layout/components/LoadingBody";
import ShowItemsDashboard from "~/components/Layout/components/ShowItemsDashboard";
import AddItemsDashboard from "~/components/Layout/components/AddItemsDashboard";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function Dashboard() {
    const [activeItem, setActiveItem] = useState('show-items');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("token") || sessionStorage.getItem("token");
            if (!token) {
                navigate("/Admin");
                return;
            }

            try {
                const response = await request.get("api/admin/verify-token", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (!response.data.valid) {
                    navigate("/Admin");
                } else {
                    setTimeout(() => {
                        setLoading(false);
                    }, 3000);
                }
            } catch (error) {
                console.error("Token verification failed:", error);
                navigate("/Admin");
            }
        };
        checkToken();
    }, [navigate]);

    const renderContent = () => {
        switch (activeItem) {
            case 'show-items':
                return <ShowItemsDashboard />;
            case 'add-items':
                return <AddItemsDashboard />;
            default:
                return <ShowItemsDashboard />;
        }
    };

    if (loading) {
        return (
            <div className={cx("loading")}>
                <LoadingBody />
            </div>
        );
    }

    return (
        <div className={cx("wrapper")}>
            <div className={cx("sidebar")}>
                <div className={cx("logo")} onClick={() => navigate("/")}>
                    <img src={images.logo_1} alt="logo" />
                </div>
                <div className={cx("menu")}>
                    <div 
                        className={cx('item-sidebar', { active: activeItem === 'show-items' })}
                        onClick={() => setActiveItem('show-items')}
                    >
                        Xem danh sách sản phẩm
                    </div>
                    <div 
                        className={cx('item-sidebar', { active: activeItem === 'add-items' })}
                        onClick={() => setActiveItem('add-items')}
                    >
                        Thêm sản phẩm
                    </div>
                </div>
            </div>
            <div className={cx("inner")}>
                {renderContent()}
            </div>
        </div>
    );
}

export default Dashboard;
