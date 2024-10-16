import classNames from "classnames/bind";
import style from "./Bought.module.scss";
import { useState } from "react";

import Sidebar from "~/components/Layout/components/Sidebar";
import products from "~/assets/product";
import BoughtItem from "~/components/Layout/components/BoughtItem";

const cx = classNames.bind(style);

function Bought() {
    const [boughtItem] = useState([
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
        if (boughtItem.length === 0) {
            return <div className={cx('empty-cart')}>Không tìm thấy sản phẩm bạn đã từng giao đến bạn</div>;
        }

        return boughtItem.map(item => (
            <BoughtItem
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
            <Sidebar title={'Sản phẩm bạn đã mua'} />
            <div className={cx('container')}>
                <div className={cx('temp')}>
                    <div className={cx('inner')}>
                        <div className={cx('header')}>
                            <div className={cx('name')}>Sản phẩm</div>
                            <div className={cx('title')}>Số lượng</div>
                            <div className={cx('title')}>Tổng đơn giá</div>
                            <div className={cx('title')}>Ngày hoàn thành</div>
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

export default Bought;