import Header from "~/components/Layout/components/Header";
import Footer from "~/components/Layout/components/Footer";
import Sidebar from "./Sidebar";
import classNames from 'classnames/bind';

//SCSS import
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
                <div className={cx('container')}>   
                    <Sidebar />
                        <div className={cx('content')}>{children}</div>
                </div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;