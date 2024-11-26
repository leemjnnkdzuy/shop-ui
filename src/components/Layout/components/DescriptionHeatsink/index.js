import classNames from "classnames/bind";
import styles from "./DescriptionHeatsink.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionHeatsink({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        design: {
            material: { value: items.Material },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "kg" },
        },
        fan: {
            included: { value: items.FanIncluded },
            size: { value: items.FanSize },
            speed: { value: items.FanSpeed },
        },
        performance: {
            compatibility: { value: items.Compatibility?.join(', ') },
            cooling: { value: items.CoolingPerformance },
            noise: { value: items.NoiseLevel },
        },
        other: {
            warranty: { value: items.Warranty },
            releaseDate: { value: items.ReleaseDate ? new Date(items.ReleaseDate).toLocaleDateString() : '' },
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
                        <div className={cx("title-description")}>Thiết kế & Vật liệu</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
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
                        <div className={cx("title-description")}>Thông số quạt tản nhiệt</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Quạt đi kèm</div>
                                        <div className={cx("content-box")}>{getValue(specifications.fan.included)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Fan" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước quạt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.fan.size)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Fan Size" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ quạt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.fan.speed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="Fan Speed" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Hiệu năng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tương thích</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.compatibility)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Compatibility" />
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hiệu năng làm mát</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.cooling)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Cooling" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ ồn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.performance.noise)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Noise" />
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
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Warranty" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Ngày ra mắt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.releaseDate)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cog} alt="Release Date" />
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

export default DescriptionHeatsink;
