import classNames from "classnames/bind";
import styles from "./DescriptionHeadphone.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionHeadphone({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            type: { value: items.Type },
            connectivity: { value: items.Connectivity },
            model: { value: items.Model },
            brand: { value: items.Brand },
        },
        audio: {
            frequencyResponse: { value: items.FrequencyResponse },
            impedance: { value: items.Impedance, unit: "Ω" },
            sensitivity: { value: items.Sensitivity, unit: "dB" },
            driverSize: { value: items.DriverSize },
            noiseCancellation: { value: items.NoiseCancellation },
        },
        design: {
            weight: { value: items.Weight, unit: "g" },
            buildMaterial: { value: items.BuildMaterial },
            earCupMaterial: { value: items.EarCupMaterial },
            adjustableHeadband: { value: items.AdjustableHeadband },
            waterResistance: { value: items.WaterResistance },
        },
        features: {
            microphone: { value: items.Microphone },
            controlButtons: { value: items.ControlButtons },
            batteryLife: { value: items.BatteryLife },
            chargeTime: { value: items.ChargeTime },
        },
        additional: {
            warranty: { value: items.Warranty },
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
                        <div className={cx("title-description")}>Thông số cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại tai nghe</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Type" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.connectivity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.wifi} alt="Connectivity" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Model" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.signal} alt="Brand" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số âm thanh</div>
                        <div className={cx("information-description")}>
                            {/* Audio specifications */}
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Đáp ứng tần số</div>
                                        <div className={cx("content-box")}>{getValue(specifications.audio.frequencyResponse)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Frequency" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trở kháng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.audio.impedance)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slackold} alt="Impedance" />
                                    </div>
                                </div>
                            </div>
                            {/* Continue with other audio specs */}
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ nhạy</div>
                                        <div className={cx("content-box")}>{getValue(specifications.audio.sensitivity)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Sensitivity" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước driver</div>
                                        <div className={cx("content-box")}>{getValue(specifications.audio.driverSize)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.frontcategory} alt="Driver Size" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Khử tiếng ồn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.audio.noiseCancellation)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Noise Cancellation" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Vật liệu</div>
                        <div className={cx("information-description")}>
                            {/* Design specifications */}
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trọng lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Weight" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Vật liệu xây dựng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.buildMaterial)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.brightnesshalf} alt="Build Material" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Vật liệu earcup</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.earCupMaterial)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Ear Cup Material" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Băng đô điều chỉnh</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.adjustableHeadband)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cog} alt="Adjustable Headband" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kháng nước</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.waterResistance)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Water Resistance" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("information-description")}>
                            {/* Features specifications */}
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Microphone</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.microphone)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Microphone" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Nút điều khiển</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.controlButtons)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Control Buttons" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thời lượng pin</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.batteryLife)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.batterylow} alt="Battery Life" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thời gian sạc</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.chargeTime)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Charge Time" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin thêm</div>
                        <div className={cx("information-description")}>
                            {/* Additional information */}
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.additional.warranty)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Warranty" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Sản xuất tại</div>
                                        <div className={cx("content-box")}>{getValue(specifications.additional.madeIn)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.location} alt="Made In" />
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

export default DescriptionHeadphone;
