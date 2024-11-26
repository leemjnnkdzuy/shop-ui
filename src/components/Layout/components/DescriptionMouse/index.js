import classNames from "classnames/bind";
import styles from "./DescriptionMouse.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionMouse({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        general: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            color: { value: items.Color?.join(', ') },
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn },
        },
        performance: {
            dpi: { value: items.DPI },
            sensorType: { value: items.SensorType },
            pollingRate: { value: items.PollingRate, unit: "Hz" },
            buttons: { value: items.Buttons },
        },
        design: {
            weight: { value: items.Weight, unit: "g" },
            dimensions: { value: items.Dimensions },
            rgbLighting: { value: items.RGBLighting },
        },
        connectivity: {
            type: { value: items.Connectivity },
            cableLength: { value: items.CableLength },
            batteryLife: { value: items.BatteryLife },
        }
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
                        <div className={cx("title-description")}>Thông tin chung</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Brand" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Model" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Màu sắc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.color)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Color" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Warranty" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Hiệu năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>DPI</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.dpi)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="DPI" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại cảm biến</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.sensorType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Sensor" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tần số phản hồi</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.pollingRate)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="Polling Rate" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số nút bấm</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.buttons)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Buttons" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Trọng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Weight" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.dimensions)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Dimensions" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Đèn LED</div>
                                <div className={cx("content-box")}>{getValue(specifications.design.rgbLighting)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.brightnesshalf} alt="RGB" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kết nối</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.connectivity.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.wifi} alt="Connectivity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chiều dài dây</div>
                                    <div className={cx("content-box")}>{getValue(specifications.connectivity.cableLength)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Cable" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Thời lượng pin</div>
                                <div className={cx("content-box")}>{getValue(specifications.connectivity.batteryLife)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.batterylow} alt="Battery" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionMouse;
