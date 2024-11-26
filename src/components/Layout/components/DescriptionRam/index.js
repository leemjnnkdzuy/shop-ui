import classNames from "classnames/bind";
import styles from "./DescriptionRam.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionRam({ items, showFullDescription }) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            releaseDate: { value: items.ReleaseDate ? new Date(items.ReleaseDate).toLocaleDateString() : '' }
        },
        performance: {
            capacity: { value: items.Capacity },
            type: { value: items.Type },
            speed: { value: items.Speed },
            timing: { value: items.Timing },
            voltage: { value: items.Voltage }
        },
        features: {
            heatSpreader: { value: items.HeatSpreader },
            ecc: { value: items.ECC },
            features: { value: Array.isArray(items.Features) ? items.Features.join(', ') : items.Features }
        },
        physical: {
            material: { value: items.Material },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: 'g' },
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
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thương hiệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.basic.brand)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Brand" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Model</div>
                                        <div className={cx("content-box")}>{getValue(specifications.basic.model)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Model" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ngày ra mắt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.releaseDate)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Release Date" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số kỹ thuật</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Dung lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.capacity)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Capacity" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại RAM</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.type)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chip} alt="Type" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tốc độ</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.speed)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Speed" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Timing</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.timing)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.signal} alt="Timing" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điện áp</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.voltage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.batterylow} alt="Voltage" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tản nhiệt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.heatSpreader)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Heat Spreader" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>ECC</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.ecc)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="ECC" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tính năng khác</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.features)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Features" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số vật lý</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.physical.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
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
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trọng lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.physical.weight)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Weight" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Sản xuất tại</div>
                                        <div className={cx("content-box")}>{getValue(specifications.physical.madeIn)}</div>
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

export default DescriptionRam;
