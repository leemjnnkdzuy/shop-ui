import classNames from "classnames/bind";
import styles from "./LoadingBody.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(styles);

function LoadingBody() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx('inner')}>
                <div className={cx('image')}>
                    <img src={images.logo_1} alt="Logo" />
                </div>
                <div className={cx('loading-circles')}>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                    <div className={cx('circle')}></div>
                </div>
            </div>
        </div>
    );
}

export default LoadingBody;