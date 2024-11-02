import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Dashboard.module.scss";
import { default as request } from '~/utils/request';
import LoadingBody from "~/components/Layout/components/LoadingBody";

const cx = classNames.bind(styles);

function Dashboard() {
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

    if (loading) {
        return (
            <div className={cx("loading")}>
                <LoadingBody />
            </div>
        );
    }

    return (
        <div className={cx("dashboard")}>
            
        </div>
    );
}

export default Dashboard;