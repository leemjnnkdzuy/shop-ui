import classNames from "classnames/bind";
import styles from "./DescriptionCase.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionCase({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            formFactor: { value: items.FormFactor },
            warranty: { value: items.Warranty },
        },
        design: {
            material: { value: items.Material },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            features: { value: items.Features },
        },
        cooling: {
            coolingSupport: { value: items.CoolingSupport },
            radiatorSupport: { value: items.RadiatorSupport },
        },
        storage: {
            driveBays: { value: items.DriveBays },
            expansionSlots: { value: items.ExpansionSlots },
            ioPanelConnectors: { value: items.IOPanelConnectors },
        },
        other: {
            releaseDate: { value: items.ReleaseDate },
            madeIn: { value: items.MadeIn },
        },
    };

    const getValue = (spec) => {
        if (!spec || (!spec.value && !spec.unit))
            return "Hiện không có thông tin mục này";
        if (Array.isArray(spec.value)) {
            return spec.value.join(", ") || "Hiện không có thông tin mục này";
        }
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
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.computercomponents} alt="Brand" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.analyse} alt="Model" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Form Factor</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.formFactor)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Form Factor" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Warranty" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Đặc điểm</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Cuboid" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.dimensions)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Dimensions" />
                                    </div>
                                </div>
                            </div>
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
                                        <div className={cx("title-box")}>Đặc điểm</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.features)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.categoryalt} alt="Features" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tản nhiệt</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ tản nhiệt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.cooling.coolingSupport)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="Cooling Support" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ Radiator</div>
                                        <div className={cx("content-box")}>{getValue(specifications.cooling.radiatorSupport)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Radiator Support" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Khe cắm & Cổng kết nối</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Khe ổ đĩa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.storage.driveBays)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.sushi} alt="Drive Bays" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Khe mở rộng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.storage.expansionSlots)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Expansion Slots" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Cổng kết nối I/O</div>
                                        <div className={cx("content-box")}>{getValue(specifications.storage.ioPanelConnectors)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.signal} alt="I/O Panel Connectors" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Ngày phát hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.releaseDate)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.analyse} alt="Release Date" />
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

export default DescriptionCase;
