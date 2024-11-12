import classNames from "classnames/bind";
import style from "./AccountUser.module.scss";

const cx = classNames.bind(style);

function AccountUser() {
    const avatar = "http://localhost:3001/public/icon.png";

    const user = "leemjnnkdzuy";
    const email = "duylelv17@gmail.com";

    const fullname = "Nguyen Van A";
    const age = "13/11/2004";
    const phonemumber = "0123456789";
    const sex = "Nam";
    const address = "Ha Noi";


    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <div className={cx("header")}>
                    Tài khoản của tôi
                </div>
                <div className={cx("body")}>
                    <div className={cx("user-info")}>
                        <div className={cx('user-info-tag')}>                                    
                            <div className={cx('user-info-title')}>
                                Tên đăng nhập
                            </div>
                            <div className={cx('user-info-content')}>
                                { user || "Tên người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Email
                            </div>
                            <div className={cx('user-info-content')}>
                                { email || "Email người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Họ và tên
                            </div>
                            <div className={cx('user-info-content')}>
                                { fullname || "Tên người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Ngày sinh
                            </div>
                            <div className={cx('user-info-content')}>
                                { age || "Ngày sinh người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Số điện thoại
                            </div>
                            <div className={cx('user-info-content')}>
                                { phonemumber || "Số điện thoại người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Giới tính
                            </div>
                            <div className={cx('user-info-content')}>
                                { sex || "Giới tính người dùng" }
                            </div>
                        </div>
                        <div className={cx('user-info-tag')}>
                            <div className={cx('user-info-title')}>
                                Địa chỉ
                            </div>
                            <div className={cx('user-info-content')}>
                                { address || "Địa chỉ người dùng" }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("sidebar")}>
                <div className={cx('avatar')}>
                    <div className={cx('avatar-img')}>
                        <img src={avatar} alt="avatar" />
                    </div>
                </div>
                <div className={cx('body-sidebar')}>
                    <div className={cx('body-sidebar-name')}>
                        { fullname || "Tên người dùng" }
                    </div>
                    <div className={cx('body-sidebar-user')}>
                        { user || "Tên người dùng" }
                    </div>
                </div>
                <button className={cx('button-sidebar')}>
                    Chỉnh sửa thông tin
                </button>
            </div>
        </div>
    );
}

export default AccountUser;