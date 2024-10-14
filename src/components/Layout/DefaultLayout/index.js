import Header from "~/components/Layout/components/Header";
import Footer from "~/components/Layout/components/Footer";
import Sidebar from "~/components/Layout/components/Sidebar";
import classNames from 'classnames/bind';

//SCSS import
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            
        </div>
    );
}

export default DefaultLayout;