import classNames from "classnames/bind";
import styles from "./DescriptionPsu.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionPsu({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        power: {
            wattage: { value: items.Wattage, unit: "W" },
            efficiency: { value: items.EfficiencyRating },
            modularity: { value: items.Modularity },
            formFactor: { value: items.FormFactor },
        },
        electrical: {
            inputVoltage: { value: items.InputVoltage },
            outputConnectors: { value: items.OutputConnectors?.join(', ') },
            protectionFeatures: { value: items.ProtectionFeatures?.join(', ') },
        },
        physical: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            warranty: { value: items.Warranty },
        },
        other: {
            features: { value: items.Features?.join(', ') },
            releaseDate: { value: new Date(items.ReleaseDate).toLocaleDateString() },
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
                        <div className={cx("title-description")}>Thông số nguồn điện</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công suất</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.wattage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Wattage" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hiệu suất</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.efficiency)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Efficiency" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kiểu Module</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.modularity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chess} alt="Modularity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước chuẩn</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.formFactor)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Form Factor" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số điện</div>
                        <div className={cx("information-description")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điện áp đầu vào</div>
                                    <div className={cx("content-box")}>{getValue(specifications.electrical.inputVoltage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Input Voltage" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Cổng kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.electrical.outputConnectors)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Connectors" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tính năng bảo vệ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.electrical.protectionFeatures)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Protection" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số vật lý</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.dimensions)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Dimensions" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Trọng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.weight)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Weight" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tính năng bổ sung</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.features)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.categoryalt} alt="Features" />
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Ngày ra mắt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.releaseDate)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slackold} alt="Release Date" />
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
            </div>
        </div>
    );
}

export default DescriptionPsu;
