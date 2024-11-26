import classNames from "classnames/bind";
import styles from "./DescriptionLaptop.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionLaptop({
    items,
    selectedStorage = 0,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const storageValue = Array.isArray(items.Storage) && items.Storage.length > 0 
        ? items.Storage[selectedStorage]
        : '';

    const specifications = {
        config: {
            chip: { value: items.Chip || '' },
            ram: { value: items.Ram ? items.Ram[0] : '' },
            ramType: { value: items.RamType || '' },
            storage: { value: storageValue },
            storageType: { value: items.StrorageType || '' },
            gpu: { value: items.GPU || '' }
        },
        monitor: {
            size: { value: items.Monitorsize, unit: "inch" },
            technology: { value: items.Monitortech },
        },
        design: {
            size: { value: items.Size },
            weight: { value: items.Weight, unit: "g" },
            material: { value: items.Material },
        },
        screen: {
            size: { value: items.ScreenSize, unit: "inch" },
            technology: { value: items.ScreenTechnology },
            type: { value: items.ScreenType },
            resolution: { value: items.ScreenResolution },
            density: { value: items.ScreenDensity, unit: "PPI" },
            protection: { value: items.ScreenProtection },
            brightness: { value: items.ScreenBrightness, unit: "nits" },
            refreshRate: { value: items.ScreenRefreshRate, unit: "Hz" },
        },
        other: {
            os: { value: items.OS },
            securitySupport: { value: items.SecuritySupport },
            cameraSupport: { value: items.CameraSupport },
            touchScreenSupport: { value: items.TouchScreenSupport },
            touchPadSupport: { value: items.TouchPadSupport },
            networkSupport: { value: items.NetworkSupport },
            bluetoothSupport: { value: items.BluetoothSupport },
            wifiSupport: { value: items.WifiSupport },
            powerStorage: { value: items.PowerStrogae },
            madeIn: { value: items.MadeIn },
        },
    };

    const getValue = (spec) => {
        if (!spec || (!spec.value && !spec.unit))
            return "Hiện không có thông tin mục này";
        return `${spec.value}${spec.unit ? ` ${spec.unit}` : ""}`;
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("description", { expanded: showFullDescription })}>
                <div className={cx("description-product")}>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Mô tả chi tiết cấu hình sản phẩm</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chip</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.chip)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Chip" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>GPU</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.gpu)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="GPU" />
                                </div>
                            </div>
                        </div>
                        {/* Continue with RAM and Storage sections using similar pattern */}
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ram</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.ram)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Ram" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ram Type</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.ramType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Ram Type" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Storage</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.storage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Storage" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Storage Type</div>
                                    <div className={cx("content-box")}>{getValue(specifications.config.storageType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Storage Type" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Mô tả chi tiết màn hình</div>
                        {/* Screen specifications */}
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước màng hình</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.size)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Chip" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công nghệ màng hình</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.technology)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chuẩn màng hình</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.type)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slackold} alt="Shield" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ phân giải</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.resolution)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Cuboid" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Mật độ điểm ảnh</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.density)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Chip" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu mặt kính</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.protection)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ sáng tối đa</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.brightness)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.brightnesshalf} alt="Chip" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tần số quét</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.screen.refreshRate)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Các thông số khác</div>
                        {/* Other specifications */}
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hệ điều hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.os)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Hệ điều hành" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tính năng bảo mật</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.securitySupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cog} alt="Tính năng bảo mật" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Camera hỗ trợ</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.cameraSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.webcam} alt="Camera hỗ trợ" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ màn hình cảm ứng</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.touchScreenSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Hỗ trợ màn hình cảm ứng" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ TouchPad</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.touchPadSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Hỗ trợ TouchPad" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hộ trợ công nghệ mạng</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.networkSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.signal} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ Bluetooth</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.bluetoothSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bluetooth} alt="Ram" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ Wifi thế hệ</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.wifiSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.wifi} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Dung lượng pin</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.other.powerStorage)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.batterylow} alt="Ram" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Sản xuất tại</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.madeIn)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.location} alt="Ram" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionLaptop;
