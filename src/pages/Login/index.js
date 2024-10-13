import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Login.module.scss';
import icons from '~/assets/icons';

const cx = classNames.bind(style);

function Login() {
    const [isActive, setIsActive] = useState(false);

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', { active: isActive })} id="container">
                <div className={cx('form-container', 'sign-up')}>
                    <form>
                        <h1>Tạo Tài Khoản</h1>
                        <div className={cx('social-icons')}>
                            <div className={cx('icon')}>
                                <img src={icons.google} alt='google' />
                            </div>
                            <div className={cx('icon')}>
                                <img src={icons.facebook} alt='facebook' />
                            </div>
                        </div>
                        <span>Sử dụng Email hoặc SDT để tạo tài khoản</span>
                        <input type="text" placeholder="Tên Đăng Nhập" />
                        <input type="email" placeholder="Email Hoặc SDT" />
                        <input type="password" placeholder="Mật Khẩu" />
                        <button>
                            <div className={cx('text-button')}>
                                Tạo Tài Khoản
                            </div>
                        </button>
                    </form>
                </div>
                <div className={cx('form-container', 'sign-in')}>
                    <form>
                        <h1>Đăng Nhập</h1>
                        <div className={cx('social-icons')}>
                            <div className={cx('icon')}>
                                <img src={icons.google} alt='google' />
                            </div>
                            <div className={cx('icon')}>
                                <img src={icons.facebook} alt='facebook' />
                            </div>
                        </div>
                        <span>Hoặc sử dụng tài khoản hiện có</span>
                        <input type="text" placeholder="Tên Đăng Nhập" />
                        <input type="password" placeholder="Mật Khẩu" />
                        <a className={cx('forget-password')}>
                            Bạn quên mật khẩu ?
                        </a>
                        <button>
                            <div className={cx('text-button')}>
                                Đăng Nhập
                            </div>
                        </button>
                    </form>
                </div>
                <div className={cx('toggle-container')}>
                    <div className={cx('toggle')}>
                        <div className={cx('toggle-panel', 'toggle-left')}>
                            <h1>Chào Mừng <br/> Bạn Trở Lại!</h1>
                            <p>Đăng nhập tài khoản cá nhân của bạn để tiếp tục mua hàng trên trang web.</p>
                            <button className={cx('hidden')} id="login" onClick={handleLoginClick}>ĐĂNG NHẬP</button>
                        </div>
                        <div className={cx('toggle-panel', 'toggle-right')}>
                            <h1>Chào Mừng <br/> Bạn Mới!</h1>
                            <p>Đăng ký với thông tin cá nhân của bạn để tiếp tục mua hàng trên trang web.</p>
                            <button className={cx('hidden')} id="register" onClick={handleRegisterClick}>TẠO TÀI KHOẢN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;