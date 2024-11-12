import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Admin.module.scss";
import icons from "~/assets/icons";
import images from "~/assets/images";
import { default as request } from '~/utils/request';
import axios from 'axios';

const cx = classNames.bind(styles);

function Admin() {
    const [adminid, setAdminid] = useState("");
    const [password, setPassword] = useState("");
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const checkToken = async () => {
            const token = localStorage.getItem("adminToken") || sessionStorage.getItem("adminToken");
            if (token) {
                try {
                    const response = await request.get("api/admin/verify-token", {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    if (response.data.valid) {
                        navigate("/Admin/Dashboard");
                    }
                } catch (error) {
                    console.error("Token verification failed:", error);
                }
            }
        };
        checkToken();
    }, [navigate]);

    const handleLogin = async () => {
        if (!adminid || !password) {
            setError("Vui lòng điền đầy đủ thông tin");
            return;
        }
    
        setLoading(true);
    
        try {
            const response = await request.post("api/admin/login", {
                adminid,
                password
            });
            const { token } = response.data;
            if (remember) {
                localStorage.setItem("adminToken", token);
            } else {
                sessionStorage.setItem("adminToken", token);
            }
            navigate("/Admin/Dashboard");
        } catch (error) {
            if (axios.isAxiosError(error) && !error.response) {
                setError("Không thể kết nối tới server. Vui lòng thử lại sau.");
            } else {
                setError("AdminID hoặc mật khẩu không đúng");
            }
            setLoading(false);
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("form-box")}>
                <div className={cx('title-form')}>Đăng Nhập</div>
                {error && <div className={cx("error-message")}>{error}</div>}
                <div className={cx("input-box")}>
                    <input
                        type=""
                        required
                        name="adminid"
                        value={adminid}
                        onChange={(e) => setAdminid(e.target.value)}
                    />
                    <label className={cx('title-input')}>AdminID</label>
                    <div className={cx("icon-form")}>
                        <img src={icons.user} alt="user" />
                    </div>
                </div>
                <div className={cx("input-box")}>
                    <input
                        type="password"
                        required
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label className={cx('title-input')}>Password</label>
                    <div className={cx("icon-form")}>
                        <img src={icons.lockalt} alt="lock" />
                    </div>
                </div>
                <label className={cx('rememder-input')}>
                    <input
                        type="checkbox"
                        name="remember"
                        checked={remember}
                        onChange={(e) => setRemember(e.target.checked)}
                    />
                    <div className={cx('remember-title')}>Lưu Đăng Nhập</div>
                </label>
                <div className={cx("button-submit")} onClick={handleLogin}>
                    {loading ? <img src={images.Loadingwhitecolor} alt="loading" className={cx("loading-image")} /> : "Đăng Nhập"}
                </div>
            </div>
        </div>
    );
}

export default Admin;