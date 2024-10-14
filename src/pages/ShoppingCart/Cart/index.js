import classNames from "classnames/bind";
import style from "./Cart.module.scss";
import Sidebar from "~/components/Layout/components/Sidebar";

const cx = classNames.bind(style);

function Cart() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>   
                <Sidebar title={'Giỏ hàng của bạn'}/>
                <div className={cx('content')}>

                </div>
            </div>
        </div>
    );
}

export default Cart;