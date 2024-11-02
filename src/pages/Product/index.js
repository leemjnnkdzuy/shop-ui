import classNames from "classnames/bind";
import styles from "./Product.module.scss";

import React, { useState, useEffect } from "react";
import ProductImage from "~/components/Layout/components/ProductImage";
import FooterProduct from "~/components/Layout/components/FooterProduct";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function Product() {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const footerItems = [
        {
            icon: icons.checkshield,
            title: 'Sản phẩm chất lượng',
            content: 'Đảm bảo tương thích và độ bền cao',
            alt: 'checkshield'
        },
        {
            icon: icons.transferalt,
            title: 'Đổi trả dễ dàng',
            content: 'Theo chính sách đổi trả tại PixelShop',
            alt: 'Truck'
        },
        {
            icon: icons.diamond,
            title: 'Thương hiệu đảm bảo',
            content: 'Nhập khẩu, bảo hành chính hãng',
            alt: 'Diamond'
        },
        {
            icon: icons.truck,
            title: 'Giao hàng tận nơi',
            content: 'Tại 63 tỉnh thành',
            alt: 'Transferalt'
        }
    ];

    const ListPics = [
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
        "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png",
    ];

    const [selectedStorage, setSelectedStorage] = useState(0);
    const [selectedColor, setSelectedColor] = useState(0);
    const [storage, setStorage] = useState([]);
    const [color, setColor] = useState([]);

    useEffect(() => {
        const fetchStorageOptions = async () => {
            const response = ["1TB", "512GB", "256GB", "128GB", "64GB"];
            const sortedStorage = response.sort((a, b) => {
                const parseValue = (str) => str.includes('TB') ? parseInt(str) * 1024 : parseInt(str);
                return parseValue(a) - parseValue(b);
            });
            setStorage(sortedStorage);
        };
        fetchStorageOptions();
    }, []);

    useEffect(() => {
        const fetchColorOptions = async () => {
            const response = ["Blue", "Gold", "Silver", "Black"];
            setColor(response);
        };
        fetchColorOptions();
    }, []);

    const handleSelectStorage = (index) => {
        setSelectedStorage(index);
    };

    const handleSelectColor = (index) => {
        setSelectedColor(index);
    };

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    const price = 36000000;
    const comment = 0;
    const model = "ABC_123";
    const NameProduct = "iPhone 13 Pro Max";
    const RateProduct = 4.5;

    const Chip = "A15 Bionic";
    const Ram = "6GB";
    const MemoryCard = "Không";
    const Size = "160.8 x 78.1 x 7.65 mm";
    const Weight = 238;
    const Protection = "IP68";
    const Material = "Thép không gỉ";

    const ScreenSize = 6.7;
    const ScreenTechnology = "OLED";
    const ScreenType = "Super Retina XDR";
    const ScreenResolution = "1284 x 2778";
    const ScreenDensity = 458;
    const ScreenProtection = "Ceramic Shield";
    const ScreenBrightness = 1800; 
    const ScreenRefreshRate = 120;

    const BackCameraInformation = "Standard: 48.0 MP, Ultra Wide: 48.0 MP, Telephoto: 12.0 MP";
    const BackCameraRotationAbility = "4K 2160p@25fps, 4K 2160p@24fps, 4K 2160p@60fps, 4K 2160p@30fps, FullHD 1080p@25fps, FullHD 1080p@30fps, FullHD 1080p@60fps, HD 720p@30fps";
    const BackCameraFeature = "Chụp chân dung, Quay chậm (Slow Motion), HDR Chụp góc rộng (Wide), Chống rung quang học (OIS), Ổn định hình ảnh quang học, Trôi nhanh thời gian (Time Lapse), Toàn cảnh (Panorama), Tự động lấy nét (AF), Chạm lấy nét, Ban đêm (Night Mode), Chụp chuyển động, Chụp góc siêu rộng (Ultrawide), Chuyên nghiệp (Pro), Flash LED";

    const FrontCameraInformation = "Single selfie camera: 12.0 MP";
    const FrontCameraRotationAbility = "Quay phim 4K, Quay phim FullHD";
    const FrontCameraFeature = "Chụp góc rộng (Wide), Tự động lấy nét (AF), Ban đêm (Night Mode), HDR, Flash màn hình, Ổn định hình ảnh quang học, Chế độ chân dung";

    const OS = "iOS";
    const SecuritySupport = "Face ID, Mật khẩu, Mã PIN";
    const SIMSupport = "1 Nano SIM & 1 eSIM";
    const NetworkSupport = "3G, 4G, 5G";
    const BluetoothSupport = "5.0";
    const WifiSupport = "Wi-Fi 6";
    const PowerStrogae = "Li-Ion 4352 mAh";
    const MadeIn = "Trung Quốc";

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('content')}>
                    <div className={cx("img-content")}>
                        <ProductImage ListPic={ListPics} />
                    </div>
                    <div className={cx('name-description')}>
                        <div className={cx('title-product-description')}>
                            Tên đầy đủ của sản phẩm
                        </div>
                        <div className={cx('name-product')}>
                            {NameProduct}
                        </div>
                    </div>
                    <div className={cx('description-temp')}>
                        <div
                            className={cx('description',
                            { expanded: showFullDescription })}
                            onClick={toggleDescription}
                        >
                            <div className={cx('description-product')}>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Mô tả chi tiết cấu hình sản phẩm
                                    </div>
                                    <div className={cx('double-description-box')}>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Chip
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { Chip || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.chip} alt="Chip" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Ram
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { Ram || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.layer} alt="Ram" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={cx('double-description-box')}>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Rom
                                                </div>
                                                <div className={cx('content-box')}>
                                                    {storage[selectedStorage] || "Hiện không có thông tin mục này"}
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.sushi} alt="Rom" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Hỗ trợ thẻ nhớ ngoài
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { MemoryCard || "Hiện không có thông tin mục này"}
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.memorycard} alt="Memorycard" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Mô tả chi tiết thiết kế & trọng lượng
                                    </div>
                                    <div className={cx('information-description')}>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Kích thước
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { Size || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.shapesquare} alt="Chip" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Trọng lượng
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { Weight + "g" || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.dumbbell} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Chuẩn kháng nước / Bụi bẩn
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { Protection || "Hiện không có thông tin mục này"}
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.shield} alt="Shield" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Chất liệu
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { Material|| "Hiện không có thông tin mục này"}
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.cuboid} alt="Cuboid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Mô tả chi tiết màn hình
                                    </div>
                                    <div className={cx('information-description')}>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Kích thước màng hình
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenSize + " inch" || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.area} alt="Chip" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Công nghệ màng hình
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenTechnology || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.slack} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Chuẩn màng hình
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenType || "Hiện không có thông tin mục này"}
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.slackold} alt="Shield" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Độ phân giải
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenResolution + " Pixel" || "Hiện không có thông tin mục này"}
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.chess} alt="Cuboid" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Mật độ điểm ảnh
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenDensity + " PPI" || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.showalt} alt="Chip" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Chất liệu mặt kính
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenProtection || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.atom} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Độ sáng tối đa
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenBrightness + " nits" || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.brightnesshalf} alt="Chip" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Tần số quét 
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { ScreenRefreshRate + "Hz" || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.refresh} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Mô tả chi Camera sau
                                    </div>
                                    <div className={cx('information-description')}>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Thông số chi tiết về camera sau
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { BackCameraInformation || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.frontwebcam} alt="Ram" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Khả năng quay camera sau
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { BackCameraRotationAbility || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.extension} alt="Ram" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Tính năng camera sau
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { BackCameraFeature || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.categoryalt} alt="Ram" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Mô tả chi Camera Trước
                                    </div>
                                    <div className={cx('information-description')}>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Thông số chi tiết về camera trước
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { FrontCameraInformation || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.webcam} alt="Ram" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Khả năng quay camera trước
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { FrontCameraRotationAbility || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.frontextension} alt="Ram" />
                                            </div>
                                        </div>
                                        <div className={cx('description-box')}>
                                            <div className={cx('content-description-box')}>
                                                <div className={cx('title-box')}>
                                                    Tính năng camera trước
                                                </div>
                                                <div className={cx('content-box')}>
                                                    { FrontCameraFeature || "Hiện không có thông tin mục này" }
                                                </div>
                                            </div>  
                                            <div className={cx('icon-description-box')}>
                                                <img src={icons.frontcategory} alt="Ram" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('description-tag')}>
                                    <div className={cx('title-description')}>
                                        Các thông số khác
                                    </div>
                                    <div className={cx('information-description')}>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Hệ điều hành
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { OS || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.ghost} alt="Hệ điều hành" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Tính năng bảo mật
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { SecuritySupport || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.cog} alt="Tính năng bảo mật" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        SIM hỗ trợ
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { SIMSupport || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.objectshorizontalleft} alt="Ram" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Hộ trợ công nghệ mạng
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { NetworkSupport || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.signal} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Hỗ trợ Bluetooth
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { BluetoothSupport || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.bluetooth} alt="Ram" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Hỗ trợ Wifi thế hệ
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { WifiSupport || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.wifi} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={cx('double-description-box')}>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Dung lượng pin
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { PowerStrogae || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.batterylow} alt="Ram" />
                                                </div>
                                            </div>
                                            <div className={cx('description-box')}>
                                                <div className={cx('content-description-box')}>
                                                    <div className={cx('title-box')}>
                                                        Sản xuất tại
                                                    </div>
                                                    <div className={cx('content-box')}>
                                                        { MadeIn || "Hiện không có thông tin mục này" }
                                                    </div>
                                                </div>  
                                                <div className={cx('icon-description-box')}>
                                                    <img src={icons.location} alt="Ram" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('button-information')} onClick={() => setShowFullDescription(!showFullDescription)}>
                            <div className={cx('button-information-title')}>
                                {showFullDescription ? 'Thu gọn' : 'Xem thêm'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('sidebar')}>
                    <div className={cx('name-product')}>
                        {NameProduct}
                    </div>
                    <div className={cx('line-1')}>
                        <div className={cx('model-product')}>
                            {model}
                        </div>
                        <div className={cx('rate-product')}>
                            {Array.from({ length: 5 }, (_, index) => (
                                index < Math.floor(RateProduct) ? 
                                <img key={index} src={icons.star} alt="Star" className={cx('icon-star')} /> : 
                                index < RateProduct ? 
                                <img key={index} src={icons.starhalf} alt="Star Half" className={cx('icon-star')} /> : 
                                <i key={index} className={cx('icon-star')} />
                            ))}
                        </div>
                        <div className={cx('comment-number')}>
                            {comment || "Chưa có "} đánh giá
                        </div>
                    </div>
                    <div className={cx('line-2')}>
                        <div className={cx('storage-product')}>
                            Dung lượng
                        </div>
                        <div className={cx('storage-option')}>
                            {storage.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('storage-select', { selected: selectedStorage === index })}
                                    onClick={() => handleSelectStorage(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('line-3')}>
                        <div className={cx('color-product')}>
                            Màu sắc
                        </div>
                        <div className={cx('color-option')}>
                            {color.map((item, index) => (
                                <div
                                    key={index}
                                    className={cx('color-select', { selected: selectedColor === index })}
                                    onClick={() => handleSelectColor(index)}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('line-5')}>
                        <div className={cx('title-gift')}>
                            Chính sách dành cho sản phẩm
                        </div>
                        <div className={cx('gift-content')}>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.creditcard} alt="creditcard" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Trả góp 0% lãi suất trong 12 tháng
                                </div>
                            </div>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.analyse} alt="analyse" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Hàng chính hãng - Bảo hành (tháng): 12
                                </div>
                            </div>
                            <div className={cx('content-gift')}>
                                <div className={cx('gift-img-content')}>
                                    <img src={icons.bolt} alt="bolt" />
                                </div>
                                <div className={cx('gift-text-content')}>
                                    Giao hàng nhanh chóng miễn phí toàn quốc
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('line-4')}>
                        <div className={cx('price-product')}>
                            <div className={cx('price-current')}>
                                <div className={cx('price-title')}>
                                    Mua ngay với giá
                                </div>
                                <div className={cx('price-value')}>
                                    {price.toLocaleString()}đ
                                </div>
                            </div>
                            <div className={cx('betwen-line')}>
                                <div className={cx('line-betwen')} />
                                <div className={cx('betwen-line-content')}>
                                    Hoặc
                                </div>
                                <div className={cx('line-betwen')} />
                            </div>
                            <div className={cx('price-current')}>
                                <div className={cx('price-title')}>
                                    Trả góp 12 tháng từ
                                </div>
                                <div className={cx('price-value')}>
                                    {Math.floor(price / 12).toLocaleString()}đ
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('line-6')}>
                        <div className={cx('double-button')}>
                            <div className={cx('button-cart')}>
                                <div className={cx('button-buy-title')}>
                                    Mua ngay
                                </div>
                                <div className={cx('button-buy-icon')}>
                                    <img src={icons.logincircle} alt="cartadd" />
                                </div>
                            </div>
                            <div className={cx('button-installment')}>
                                <div className={cx('button-buy-title')}>
                                    Mua trả góp
                                </div>
                                <div className={cx('button-buy-icon')}>
                                    <img src={icons.wallet} alt="wallet" />
                                </div>
                            </div>
                        </div>
                        <div className={cx('button-buy')}>
                            <div className={cx('button-buy-title')}>
                                Thêm vào giỏ hàng
                            </div>
                            <div className={cx('button-buy-icon')}>
                                <img src={icons.cartadd} alt="logincircle" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('footer-product')}>
                <FooterProduct footerItems={footerItems} />
            </div>
        </div>
    );
}

export default Product;