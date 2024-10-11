import Banner from "~/components/Layout/components/Banner";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import background from "~/assets/background";

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img className={cx('background')} src={background.background1} alt='logo' />
            </div>
            <div className={cx('container')}>
                <Banner />
            </div>
        </div>
    );
}

export default Home;