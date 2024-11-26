import classNames from "classnames/bind";
import styles from "./DescriptionPc.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionPc({
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
        mainConfig: {
            cpu: { value: items.CPU },
            gpu: { value: items.GPU },
            ram: { value: items.RAM },
            storage: { value: storageValue },
            motherboard: { value: items.Motherboard },
            psu: { value: items.PSU },
            coolingSystem: { value: items.CoolingSystem },
        },
        design: {
            case: { value: items.Case },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "kg" },
        },
        other: {
            os: { value: items.OS },
            connectivity: { value: items.Connectivity },
            powerConsumption: { value: items.PowerConsumption, unit: "W" },
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn },
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
                        <div className={cx("title-description")}>Cấu hình chính</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>CPU</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.cpu)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chip} alt="CPU" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>GPU</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.gpu)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.analyse} alt="GPU" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>RAM</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.ram)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="RAM" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Lưu trữ</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.storage)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.sushi} alt="Storage" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bo mạch chủ</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.motherboard)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.transferalt} alt="Motherboard" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Nguồn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.mainConfig.psu)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="PSU" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hệ thống làm mát</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainConfig.coolingSystem)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.brightnesshalf} alt="Cooling" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Kích thước</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Case</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.case)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Case" />
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
                                    <div className={cx("title-box")}>Trọng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Weight" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hệ điều hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.os)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="OS" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kết nối</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.connectivity)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.wifi} alt="Connectivity" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công suất tiêu thụ</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.powerConsumption)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.batterylow} alt="Power" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Warranty" />
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
        </div>
    );
}

export default DescriptionPc;
