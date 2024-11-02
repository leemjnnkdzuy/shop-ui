import Banner from "~/components/Layout/components/Banner";
import classNames from "classnames/bind";
import style from "./Home.module.scss";
import background from "~/assets/background";
import { useEffect, useState } from "react";

import { default as request } from '~/utils/request';
import LoadingBody from '~/components/Layout/components/LoadingBody';

const cx = classNames.bind(style);

function Home() {
    const [saleItems, setSaleItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSaleItems = async () => {
            while (true) {
                try {
                    const response = await request.get('api/saleItem');
                    setSaleItems(response.data);
                    setTimeout(() => {
                        setLoading(false);
                    }, 2000);
                    break;
                } catch (err) {
                    setLoading(true);
                    await new Promise(resolve => setTimeout(resolve, 3000));
                }
            }
        };

        fetchSaleItems();
    }, []);

    if (loading) return <LoadingBody className={cx('loading-body')} />;

    return (
        <div className={cx('wrapper')}>
            <div>
                <img className={cx('background')} src={background.background10} alt='logo' />
            </div>
            <div className={cx('container')}>
                <Banner saleItems={saleItems} />
            </div>
        </div>
    );
}

export default Home;