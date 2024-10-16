import classNames from "classnames/bind";
import style from "./Bought.module.scss";
import Sidebar from "~/components/Layout/components/Sidebar";

const cx = classNames.bind(style);

function Bought() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>   
                <Sidebar title={'Sản phẩm bạn đã mua'} />
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bought;