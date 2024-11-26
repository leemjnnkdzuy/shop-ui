import classNames from "classnames/bind";
import styles from "./DescriptionPowerBank.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionPowerBank({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        mainConfig: {
            capacity: { value: items.Capacity, unit: "mAh" },
            batteryType: { value: items.BatteryType },
            fastCharging: { value: items.FastChargingSupport },
        },
        ports: {
            outputPorts: { value: items.OutputPorts },
            inputPorts: { value: items.InputPorts },
            outputPower: { value: items.OutputPower },
            inputPower: { value: items.InputPower },
        },
        design: {
            size: { value: items.Size },
            weight: { value: items.Weight, unit: "g" },
            ledIndicator: { value: items.LEDIndicator },
        },
        other: {
            safetyFeatures: { value: items.SafetyFeatures },
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn },
        },
    };

    const getValue = (spec) => {
        if (!spec || (!spec.value && !spec.unit))
            return "Hiện không có thông tin mục này";
        if (Array.isArray(spec.value)) {
            return spec.value.join(', ') || "Hiện không có thông tin mục này";
        }
        return `${spec.value}${spec.unit ? ` ${spec.unit}` : ""}`;
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("description", { expanded: showFullDescription })}>
                <div className={cx("description-product")}>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung lượng pin</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainConfig.capacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.batterylow} alt="Capacity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại pin</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainConfig.batteryType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Battery Type" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Hỗ trợ sạc nhanh</div>
                                <div className={cx("content-box")}>{getValue(specifications.mainConfig.fastCharging)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.chess} alt="Fast Charging" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Cổng kết nối</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số cổng ra</div>
                                    <div className={cx("content-box")}>{getValue(specifications.ports.outputPorts)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Output Ports" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số cổng vào</div>
                                    <div className={cx("content-box")}>{getValue(specifications.ports.inputPorts)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Input Ports" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công suất ra</div>
                                    <div className={cx("content-box")}>{getValue(specifications.ports.outputPower)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.frontcategory} alt="Output Power" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công suất vào</div>
                                    <div className={cx("content-box")}>{getValue(specifications.ports.inputPower)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Input Power" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Kích thước</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.size)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Size" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Trọng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Weight" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Đèn báo LED</div>
                                <div className={cx("content-box")}>{getValue(specifications.design.ledIndicator)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.brightnesshalf} alt="LED Indicator" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tính năng an toàn</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.safetyFeatures)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Safety Features" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Warranty" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Sản xuất tại</div>
                                <div className={cx("content-box")}>{getValue(specifications.other.madeIn)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.location} alt="Made In" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionPowerBank;
