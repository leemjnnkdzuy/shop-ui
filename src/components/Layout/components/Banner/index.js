import classNames from 'classnames/bind';
import { useNavigate } from "react-router-dom";
import style from './Banner.module.scss';
import { URL } from '~/utils/request';

// Components
import BoxImage from '~/components/Layout/components/BoxImage';
import BoxImageText from '~/components/Layout/components/BoxImageText';
import SaleItem from '~/components/Layout/components/SaleItem';
import BannerProduct from '~/components/Layout/components/BannerProduct';
import BannerProductTripble from '~/components/Layout/components/BannerProductTripble';

// Images
import background from '~/assets/background';
import products from '~/assets/product';
import banner1 from '~/assets/banner1';
import banner2 from '~/assets/banner2';

const cx = classNames.bind(style);

function Banner({ saleItems }) {
    const navigate = useNavigate();  
    const handleNavigate = (path) => { navigate(path); };

    const banners1 = [banner1.banner1, banner1.banner6, banner1.banner7];
    const banners2 = [banner1.banner8, banner1.banner9, banner1.banner10];
    const banners3 = [banner1.banner5, banner1.banner2, banner1.banner3, banner1.banner4];
    const banners4 = [banner2.banner1, banner2.banner2, banner2.banner3, banner2.banner4, banner2.banner5, banner2.banner7];

    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-list-1')}>
                <div className={cx('banner-1')}>
                    <BannerProduct ListBanner={banners1} />
                </div>
                <div className={cx('banner-1')}>
                    <BannerProduct ListBanner={banners2} />
                </div>
            </div>
            <div className={cx('title')}>Sản Phẩm Siêu Hot</div>
            <div className={cx('banner-product')}>
                <div className={cx('temp-layer')}>
                    <div className={cx('banner-product-line')}>
                        {saleItems.length > 0 ? (
                            saleItems.slice(0, 5).map(item => (
                                <div key={item._id} className={cx('product-sale')}>
                                    <SaleItem
                                        img={URL + "public/" + item.ThumbnailImage}
                                        name={item.Name}
                                        price={item.Price}
                                        discount={item.Discount}
                                        _id={item._id}
                                    />
                                </div>
                            ))
                        ) : (
                            <p>Không có sản phẩm nào.</p>
                        )}
                    </div>
                </div>
            </div>
            <div className={cx('title')}>Sản Phẩm Bán Chạy</div>
            <div className={cx('product-list')}>
                <div onClick={() => handleNavigate(`/ProductPages/Laptop`)} className={cx('product')}>
                    <BoxImageText name={'Laptop'} img={products.laptop} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/TV`)} className={cx('product')}>
                    <BoxImageText name={'Tivi'} img={products.TV} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Phone`)} className={cx('product')}>
                    <BoxImageText name={'Điện Thoại'} img={products.phone} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Acessory`)} className={cx('product')}>
                    <BoxImageText name={'Phụ Kiện'} img={products.phukien} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Tablet`)} className={cx('product')}>
                    <BoxImageText name={'Máy Tính Bảng'} img={products.tablet} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Watch`)} className={cx('product')}>
                    <BoxImageText name={'Smart Watch'} img={products.smartwacth} alt="#" />
                </div>
            </div>
            <div className={cx('banner-list-2')}>
                <BannerProductTripble ListBanner={banners4} />
            </div>
            <div className={cx('title')}>Sản Phẩm Khác</div>
            <div className={cx('product-list')}>
                <div onClick={() => handleNavigate(`/ProductPages/PC`)} className={cx('product')}>
                    <BoxImageText name={'Máy Tính'} img={products.pcdesktop} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/LinhKien`)} className={cx('product')}>
                    <BoxImageText name={'Linh Kiện'} img={products.linhkienmaytinh} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Moniter`)} className={cx('product')}>
                    <BoxImageText name={'Màng Hình'} img={products.moniter} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/DustCollector`)} className={cx('product')}>
                    <BoxImageText name={'Máy Hút Bụi'} img={products.mayhutbui} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Washer`)} className={cx('product')}>
                    <BoxImageText name={'Máy Giặt'} img={products.washer} alt="#" />
                </div>
                <div onClick={() => handleNavigate(`/ProductPages/Fridge`)} className={cx('product')}>
                    <BoxImageText name={'Tủ Lạnh'} img={products.tulanh} alt="#" />
                </div>
            </div>
            <div className={cx('banner')}>
                <BannerProduct ListBanner={banners3} />
            </div>
            <div className={cx('title')}>Sản Phẩm Siêu Khuyến Mãi</div>
            <div className={cx('banner-product')}>
                <div className={cx('temp-layer')}>
                    <div className={cx('banner-product-line')}>
                        {saleItems.slice(5, 10).map(item => (
                            <div key={item._id} className={cx('product-sale')}>
                                <SaleItem
                                        img={URL + "public/" + item.ThumbnailImage}
                                        name={item.Name}
                                        price={item.Price}
                                        discount={item.Discount}
                                        _id={item._id}
                                    />
                            </div>
                        ))}
                    </div>
                    <div className={cx('banner-product-line')}>
                        {saleItems.slice(10, 15).map(item => (
                            <div key={item._id} className={cx('product-sale')}>
                                <SaleItem
                                        img={URL + "public/" + item.ThumbnailImage}
                                        name={item.Name}
                                        price={item.Price}
                                        discount={item.Discount}
                                        _id={item._id}
                                    />
                            </div>
                        ))}
                    </div>
                    <div className={cx('banner-product-line')}>
                        {saleItems.slice(15, 20).map(item => (
                            <div key={item._id} className={cx('product-sale')}>
                                <SaleItem
                                        img={URL + "public/" + item.ThumbnailImage}
                                        name={item.Name}
                                        price={item.Price}
                                        discount={item.Discount}
                                        _id={item._id}
                                    />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={cx('title')}>Thông Tin Hữu Ích</div>
            <div className={cx('banner-list-3')}>
                <div className={cx('banner-list-3-line')}>
                    <div onClick={() => handleNavigate('/OrderPages/Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online')} className={cx('banner-3-1')}>
                        <BoxImage img={background.background6} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>Hướng Dẫn Mua Hàng & Thanh Toán Online</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('banner-list-3-line')}>
                    <div className={cx('banner-3-2')}>
                        <BoxImage img={background.background4} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>Bản Tin Công Nghệ</h1>
                        </div>
                    </div>
                    <div className={cx('banner-3-2')}>
                        <BoxImage img={background.background5} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>Tra Cứu Thông Tin</h1>
                        </div>
                    </div>
                </div>
                <div className={cx('banner-list-3-line')}>
                    <div className={cx('banner-3-3')}>
                        <BoxImage img={background.background7} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>Bảo Hành</h1>
                        </div>
                    </div>
                    <div className={cx('banner-3-3')}>
                        <BoxImage img={background.background8} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>Ưu Đãi</h1>
                        </div>
                    </div>
                    <div onClick={() => handleNavigate("/Support")} className={cx('banner-3-3')}>
                        <BoxImage img={background.background9} alt="#" />
                        <div className={cx('text-banner')}>
                            <h1 className={cx('text')}>CSKH</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;