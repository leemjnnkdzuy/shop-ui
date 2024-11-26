import classNames from "classnames/bind";
import styles from "./DescriptionVga.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionVga({
    items,
    selectedStorage = 0,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        general: {
            name: { value: items.Name },
            brand: { value: items.Brand },
            model: { value: items.Model },
            color: { value: items.Color.join(", ") },
            warranty: { value: items.Warranty },
            releaseDate: { value: new Date(items.ReleaseDate).toLocaleDateString() },
            madeIn: { value: items.MadeIn },
        },
        performance: {
            memory: { value: items.Memory },
            memoryType: { value: items.MemoryType },
            coreClock: { value: items.CoreClock, unit: "MHz" },
            boostClock: { value: items.BoostClock, unit: "MHz" },
            cudaCores: { value: items.CUDACores },
            tdp: { value: items.TDP, unit: "W" },
        },
        physical: {
            coolingSolution: { value: items.CoolingSolution },
            pcieInterface: { value: items.PCIeInterface },
            outputs: { value: items.Outputs.join(", ") },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "kg" },
        },
        features: {
            features: { value: items.Features.join(", ") },
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
                        <div className={cx("title-description")}>Thông tin chung</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tên</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.name)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chess} alt="Name" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Brand" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Model" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Hiệu suất</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bộ nhớ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.memory)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.memorycard} alt="Memory" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại bộ nhớ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.memoryType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Memory Type" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Xung nhịp cơ bản</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.coreClock)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Core Clock" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Xung nhịp tăng cường</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.boostClock)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Boost Clock" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số nhân CUDA</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.cudaCores)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="CUDA Cores" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>TDP</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.tdp)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.batterylow} alt="TDP" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số vật lý</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Giải pháp làm mát</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.coolingSolution)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Cooling Solution" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Giao diện PCIe</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.pcieInterface)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="PCIe Interface" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Cổng kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.outputs)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Outputs" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.dimensions)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Dimensions" />
                                </div>
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
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Tính năng</div>
                                <div className={cx("content-box")}>{getValue(specifications.features.features)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.categoryalt} alt="Features" />
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Warranty" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ngày phát hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.general.releaseDate)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Release Date" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Sản xuất tại</div>
                                <div className={cx("content-box")}>{getValue(specifications.general.madeIn)}</div>
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

export default DescriptionVga;
