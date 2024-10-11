
import classNames from 'classnames/bind';
import style from './Banner.module.scss';
import BoxImage from '~/components/Layout/components/BoxImage';
import banner from '~/assets/banner';
import BoxImageText from '~/components/Layout/components/BoxImageText';
import products from '~/assets/product';

const cx = classNames.bind(style);

function Banner() {
    
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-list')}>
                <div className={cx('banner')}>
                    <BoxImage img={banner.banner2} />
                </div>
                <div className={cx('banner')}>
                    <BoxImage img={banner.banner1} />
                </div>
            </div>
            <div className={cx('product-list-1')}>
                <div className={cx('product')}>
                    <BoxImageText name={'Laptop'} img={products.laptop}/>
                </div>
                <div className={cx('double-product')}>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                </div>
                <div className={cx('product')}>
                    <BoxImageText name={'Laptop'} img={products.laptop}/>
                </div>
                <div className={cx('double-product')}>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                </div>
                <div className={cx('double-product')}>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                    <div className={cx('product-double')}>
                        <BoxImageText name={'Laptop'} img={products.laptop} />
                    </div>
                </div>
                <div className={cx('product')}>
                    <BoxImageText name={'Laptop'} img={products.laptop}/>
                </div>
            </div>
            <div className={cx('product-list-2')}>
                <div className={cx('product-list')}>
                    <div className={cx('product')}>
                        

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;