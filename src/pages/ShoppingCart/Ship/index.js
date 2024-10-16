import { useState } from "react";
import classNames from "classnames/bind";
import style from "./Ship.module.scss";

import Sidebar from "~/components/Layout/components/Sidebar";
import ShipItem from "~/components/Layout/components/ShipItem";
import products from "~/assets/product";

const cx = classNames.bind(style);

function Ship() {
    const [shipItem] = useState([
        // {
        //     id: 1,
        //     img: products.laptop,
        //     name: 'Laptop',
        //     description: 'aaaaaaaaaa',
        //     quantity: 1,
        //     price: 10000000,
        //     date: '2021-10-10',
        // }
    ]);

    const renderCartItems = () => {
        if (shipItem.length === 0) {
            return <div className={cx('empty-cart')}>Không tìm thấy sản phẩm bạn đã mua trước đó</div>;
        }

        return shipItem.map(item => (
            <ShipItem
                key={item.id}
                img={item.img}
                name={item.name}
                description={item.description}
                quantity={item.quantity}
                price={item.price}
                date={item.date}
            />
        ));
    };

    return (
        <div className={cx('wrapper')}>
            <Sidebar title={'Giỏ hàng của bạn'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng đơn giá</div>
                            <div className={cx('title')}>Ngày giao dự kiến</div>
                        </div>
                        <div className={cx('content')}>
                            {renderCartItems()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ship;
