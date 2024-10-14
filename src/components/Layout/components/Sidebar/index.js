import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';

import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Sidebar({ title }) {
    const navigate = useNavigate();  
    const handleNavigate = (path) => { navigate(path); };

    return (
        <aside className={cx('wrapper')}>
            <div className={cx('title-gage')}>
                {title ? title  : 'Tên Trang' }
            </div>
            <div onClick={() => handleNavigate('/Cart')} className={cx('tag')}>
                <div className={cx('icon')}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        style={{ fill: '#333333' }}
                    >
                        <path d="M8.132 2.504 4.42 9H3a1.001 1.001 0 0 0-.965 1.263l2.799 10.263A2.004 2.004 0 0 0 6.764 22h10.473c.898 0 1.692-.605 1.93-1.475l2.799-10.263A.998.998 0 0 0 21 9h-1.42l-3.712-6.496-1.736.992L17.277 9H6.723l3.145-5.504-1.736-.992zM14 13h2v5h-2v-5zm-6 0h2v5H8v-5z"></path>
                    </svg>
                </div>
                <div className={cx('title')}>
                    Giỏ hàng
                </div>
            </div>
            <div onClick={() => handleNavigate('/Ship')} className={cx('tag')}>
                <div className={cx('icon')}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style={{ fill: '#333333' }} 
                >
                    <path d="M20.92 2.38A15.72 15.72 0 0 0 17.5 2a8.26 8.26 0 0 0-6 2.06Q9.89 5.67 8.31 7.27c-1.21-.13-4.08-.2-6 1.74a1 1 0 0 0 0 1.41l11.3 11.32a1 1 0 0 0 1.41 0c1.95-2 1.89-4.82 1.77-6l3.21-3.2c3.19-3.19 1.74-9.18 1.68-9.43a1 1 0 0 0-.76-.73zm-2.36 8.75L15 14.67a1 1 0 0 0-.27.9 6.81 6.81 0 0 1-.54 3.94L4.52 9.82a6.67 6.67 0 0 1 4-.5A1 1 0 0 0 9.39 9s1.4-1.45 3.51-3.56A6.61 6.61 0 0 1 17.5 4a14.51 14.51 0 0 1 2.33.2c.24 1.43.62 5.04-1.27 6.93z"></path>
                    <circle cx="15.73" cy="8.3" r="2"></circle>
                    <path d="M5 16c-2 1-2 5-2 5a7.81 7.81 0 0 0 5-2z"></path>
                </svg>
                </div>
                <div className={cx('title')}>
                    Sản phẩm đang giao
                </div>
            </div>
            <div onClick={() => handleNavigate('/Bought')} className={cx('tag')}>
                <div className={cx('icon')}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="30" 
                    height="30" 
                    viewBox="0 0 24 24" 
                    style={{ fill: '#333333' }}
                >
                    <path d="M12 8v5h5v-2h-3V8z"></path>
                    <path d="M21.292 8.497a8.957 8.957 0 0 0-1.928-2.862 9.004 9.004 0 0 0-4.55-2.452 9.09 9.09 0 0 0-3.626 0 8.965 8.965 0 0 0-4.552 2.453 9.048 9.048 0 0 0-1.928 2.86A8.963 8.963 0 0 0 4 12l.001.025H2L5 16l3-3.975H6.001L6 12a6.957 6.957 0 0 1 1.195-3.913 7.066 7.066 0 0 1 1.891-1.892 7.034 7.034 0 0 1 2.503-1.054 7.003 7.003 0 0 1 8.269 5.445 7.117 7.117 0 0 1 0 2.824 6.936 6.936 0 0 1-1.054 2.503c-.25.371-.537.72-.854 1.036a7.058 7.058 0 0 1-2.225 1.501 6.98 6.98 0 0 1-1.313.408 7.117 7.117 0 0 1-2.823 0 6.957 6.957 0 0 1-2.501-1.053 7.066 7.066 0 0 1-1.037-.855l-1.414 1.414A8.985 8.985 0 0 0 13 21a9.05 9.05 0 0 0 3.503-.707 9.009 9.009 0 0 0 3.959-3.26A8.968 8.968 0 0 0 22 12a8.928 8.928 0 0 0-.708-3.503z"></path>
                </svg>

                </div>
                <div className={cx('title')}>
                    Sản phẩm đã mua
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
