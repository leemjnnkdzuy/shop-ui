import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Support.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function Support() {
    const [formData, setFormData] = useState({
        name: "",
        gender: "male",
        email: "",
        phone: "",
        address: "",
        dob: {
            day: "",
            month: "",
            year: ""
        },
        content: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleDobChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            dob: {
                ...formData.dob,
                [name]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://your-server-endpoint.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Thông tin đã được gửi thành công!");
            } else {
                alert("Đã xảy ra lỗi, vui lòng thử lại sau.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Không thể kết nối đến server.");
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <div className={cx("image")}>
                    <img src={images.cskh} alt="cskh" />
                </div>
                <div className={cx("inner")}>
                    <div className={cx("header")}>
                        Để lại thông tin để chúng mình hỗ trợ bạn 
                    </div>
                    <form className={cx("content")} onSubmit={handleSubmit}>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            />
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Giới tính</label>
                            <select
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            >
                                <option value="male">Nam</option>
                                <option value="female">Nữ</option>
                            </select>
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Ngày sinh</label>
                            <div className={cx("dob-container")}>
                                <input
                                    type="text"
                                    name="day"
                                    value={formData.dob.day}
                                    onChange={handleDobChange}
                                    placeholder="Ngày"
                                    className={cx("dob-input")}
                                    required
                                />
                                <input
                                    type="text"
                                    name="month"
                                    value={formData.dob.month}
                                    onChange={handleDobChange}
                                    placeholder="Tháng"
                                    className={cx("dob-input")}
                                    required
                                />
                                <input
                                    type="text"
                                    name="year"
                                    value={formData.dob.year}
                                    onChange={handleDobChange}
                                    placeholder="Năm"
                                    className={cx("dob-input")}
                                    required
                                />
                            </div>
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            />
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Số điện thoại</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            />
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Địa chỉ</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            />
                        </div>
                        <div className={cx("item")}>
                            <label className={cx("label")}>Nội dung</label>
                            <textarea
                                name="content"
                                value={formData.content}
                                onChange={handleChange}
                                className={cx("input")}
                                required
                            />
                        </div>
                        <button type="submit" className={cx("submit-btn")}>Gửi</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Support;
