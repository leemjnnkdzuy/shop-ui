import Header from "~/components/Layout/components/Header";
import Footer from "~/components/Layout/components/Footer";
import styles from './HeaderOnly.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function HeaderOnly({ img , children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
                <div className={cx('container')}>
                    <div className={cx('content')}>{children}</div>
                </div>
            <Footer />
        </div>
    );
}

export default HeaderOnly;