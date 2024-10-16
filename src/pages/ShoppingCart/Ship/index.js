import classNames from "classnames/bind";
import style from "./Ship.module.scss";
import Sidebar from "~/components/Layout/components/Sidebar";

const cx = classNames.bind(style);

function Ship() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>   
                <Sidebar title={'Sản phẩm đang giao đến bạn'} />
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ship;