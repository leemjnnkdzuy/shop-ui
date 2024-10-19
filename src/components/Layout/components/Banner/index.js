
import classNames from 'classnames/bind';
import { useNavigate } from "react-router-dom";
import style from './Banner.module.scss';

// Components
import BoxImage from '~/components/Layout/components/BoxImage';
import BoxImageText from '~/components/Layout/components/BoxImageText';
import SaleItem from '~/components/Layout/components/SaleItem';

// Images
import background from '~/assets/background';
import products from '~/assets/product';
import banner from '~/assets/banner';

const cx = classNames.bind(style);

function Banner() {
    const navigate = useNavigate();  
    const handleNavigate = (path) => { navigate(path); };
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-list-1')}>
                <div className={cx('banner-1')}>
                    <BoxImage img={banner.banner2} alt={"banner2"}/>
                </div>
                <div className={cx('banner-1')}>
                    <BoxImage img={banner.banner1} alt={"banner1"} />
                </div>
            </div>
            <div className={cx('title')}>
                Sản Phẩm Siêu Hot
            </div>
            <div className={cx('banner-product')}>
                <div className={cx('temp-layer')}>
                    <div className={cx('banner-product-line')}>
                        <div className={cx('product-sale')}>
                            <SaleItem alt={"#"} />
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                    </div>   
                </div>
            </div>
            <div className={cx('title')}>
                Sản Phẩm Bán Chạy
            </div>
            <div className={cx('product-list')}>
                <div onClick={() => handleNavigate('/ProductPages/Laptop')} className={cx('product')}>
                    <BoxImageText name={'Laptop'} img={products.laptop} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/TV')} className={cx('product')}>
                    <BoxImageText name={'Tivi'} img={products.TV} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Phone')} className={cx('product')}>
                    <BoxImageText name={'Điện Thoại'} img={products.phone} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Acessory')} className={cx('product')}>
                    <BoxImageText name={'Phụ Kiện'} img={products.phukien} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Tablet')} className={cx('product')}>
                    <BoxImageText name={'Máy Tính Bảng'} img={products.tablet} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Watch')} className={cx('product')}>
                    <BoxImageText name={'Smart Watch'} img={products.smartwacth} alt={"#"}/>
                </div>
            </div>
            <div className={cx('banner-list-2')}>
                <div className={cx('banner-2')}>
                    <BoxImage img={banner.banner3} alt={"#"}/>
                </div>
                <div className={cx('banner-2')}>
                    <BoxImage img={banner.banner4} alt={"#"}/>
                </div>
                <div className={cx('banner-2')}>
                    <BoxImage img={banner.banner5} alt={"#"}/>
                </div>
            </div>
            <div className={cx('title')}>
                Sản Phẩm Khác
            </div>
            <div className={cx('product-list')}>
                <div onClick={() => handleNavigate('/ProductPages/PC')} className={cx('product')}>
                    <BoxImageText name={'Máy Tính'} img={products.pcdesktop} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/LinhKien')} className={cx('product')}>
                    <BoxImageText name={'Linh Kiện'} img={products.linhkienmaytinh} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Moniter')} className={cx('product')}>
                    <BoxImageText name={'Màng Hình'} img={products.moniter} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/DustCollector')} className={cx('product')}>
                    <BoxImageText name={'Máy Hút Bụi'} img={products.mayhutbui} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Washer')} className={cx('product')}>
                    <BoxImageText name={'Máy Giặt'} img={products.washer} alt={"#"}/>
                </div>
                <div onClick={() => handleNavigate('/ProductPages/Fridge')} className={cx('product')}>
                    <BoxImageText name={'Tủ Lạnh'} img={products.tulanh} alt={"#"}/>
                </div>
            </div>
            <div className={cx('banner')}>
                <BoxImage img={banner.banner6} alt={"#"}/>
            </div>
            <div className={cx('title')}>
                Sản Phẩm Siêu Khuyến Mãi
            </div>
            <div className={cx('banner-product')}>
                <div className={cx('temp-layer')}>
                    <div className={cx('banner-product-line')}>
                        <div className={cx('product-sale')}>
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                    </div>
                    <div className={cx('banner-product-line')}>
                        <div className={cx('product-sale')}>
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                    </div>
                    <div className={cx('banner-product-line')}>
                        <div className={cx('product-sale')}>
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                        <div className={cx('product-sale')}>    
                            <SaleItem alt={"#"}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('title')}>
                Thông Tin Hữu Ích
            </div>
            <div className={cx('banner-list-3')}>
                <div className={cx('banner-list-3-line')}>
                    <div onClick={() => handleNavigate('/OrderPages/Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online')} className={cx('banner-3-1')}>
                        <BoxImage img={background.background6} alt={"#"} />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>
                                Hướng Dẫn Mua Hàng & Thanh Toán Online
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={cx('banner-list-3-line')}>
                    <div className={cx('banner-3-2')}>
                        <BoxImage img={background.background4} alt={"#"}/>
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>
                                Bản Tin Công Nghệ
                            </h1>
                        </div>
                    </div>
                    <div className={cx('banner-3-2')}>
                        <BoxImage img={background.background5} alt={"#"}/>
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>
                                Tra Cứu Thông Tin
                            </h1>
                        </div>
                    </div>
                </div>
                <div className={cx('banner-list-3-line')}>
                    <div className={cx('banner-3-3')}>
                        <BoxImage img={background.background7} alt={"#"}/>
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>
                                Bảo Hành
                            </h1>
                        </div>
                    </div>
                    <div className={cx('banner-3-3')}>
                        <BoxImage img={background.background8} alt={"#"}/>
                        <div className={cx('text-banner')}>
                        <h1 className={cx('text')}>
                                Ưu Đãi
                            </h1>
                        </div>
                    </div>
                    <div onClick={() => handleNavigate("/Support")} className={cx('banner-3-3')}>
                        <BoxImage img={background.background9} alt={"#"}/>
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>
                                CSKH
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;