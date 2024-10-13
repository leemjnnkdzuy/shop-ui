import Banner from "~/components/Layout/components/Banner";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import background from "~/assets/background";

const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div>
                <img className={cx('background')} src={background.background10} alt='logo' />
            </div>
            <div className={cx('container')}>
                <div><Banner /></div>
            </div>
        </div>
    );
}

export default Home;