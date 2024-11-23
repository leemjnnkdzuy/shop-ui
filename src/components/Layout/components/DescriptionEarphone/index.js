import classNames from "classnames/bind";
import styles from "./DescriptionEarphone.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionEarphone({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basicInfo: {
            type: { value: items.Type },
            connectivity: { value: items.Connectivity },
            microphone: { value: items.Microphone },
            controlButtons: { value: items.ControlButtons }
        },
        technical: {
            frequencyResponse: { value: items.FrequencyResponse },
            impedance: { value: items.Impedance, unit: "Ω" },
            sensitivity: { value: items.Sensitivity, unit: "dB" },
            driverSize: { value: items.DriverSize }
        },
        design: {
            weight: { value: items.Weight, unit: "g" },
            buildMaterial: { value: items.BuildMaterial },
            earTipMaterial: { value: items.EarTipMaterial },
            cableLength: { value: items.CableLength }
        },
        features: {
            noiseIsolation: { value: items.NoiseIsolation },
            adjustableCable: { value: items.AdjustableCable },
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn }
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
                        <div className={cx("title-description")}>Thông tin cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại tai nghe</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.headphone} alt="Type" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.connectivity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.bluetooth} alt="Connectivity" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Microphone</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.microphone)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.webcam} alt="Microphone" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Nút điều khiển</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.controlButtons)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Controls" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số kỹ thuật</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Đáp ứng tần số</div>
                                    <div className={cx("content-box")}>{getValue(specifications.technical.frequencyResponse)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Frequency" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Trở kháng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.technical.impedance)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Impedance" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ nhạy</div>
                                    <div className={cx("content-box")}>{getValue(specifications.technical.sensitivity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Sensitivity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước driver</div>
                                    <div className={cx("content-box")}>{getValue(specifications.technical.driverSize)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Driver Size" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Vật liệu</div>
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
                                    <div className={cx("title-box")}>Chất liệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.buildMaterial)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cuboid} alt="Material" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chất liệu đệm tai</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.earTipMaterial)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Ear Tip" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chiều dài dây</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.cableLength)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Cable" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng khác</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chống ồn</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.noiseIsolation)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Noise Isolation" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dây có thể tháo rời</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.adjustableCable)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.signal} alt="Cable" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Warranty" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Sản xuất tại</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.madeIn)}</div>
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
    );
}

export default DescriptionEarphone;
