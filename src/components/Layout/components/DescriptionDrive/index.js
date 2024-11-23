import classNames from "classnames/bind";
import styles from "./DescriptionDrive.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionDrive({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            type: { value: items.Type },
            capacity: { value: items.Capacity },
            brand: { value: items.Brand },
            model: { value: items.Model }
        },
        performance: {
            interface: { value: items.Interface },
            readSpeed: { value: items.ReadSpeed, unit: "MB/s" },
            writeSpeed: { value: items.WriteSpeed, unit: "MB/s" },
            cache: { value: items.Cache }
        },
        physical: {
            formFactor: { value: items.FormFactor },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" }
        },
        reliability: {
            endurance: { value: items.Endurance },
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
                        <div className={cx("title-description")}>Thông số cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại ổ cứng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Type" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.capacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Capacity" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Hiệu năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Giao tiếp</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.interface)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Interface" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ đọc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.readSpeed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="Read Speed" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ ghi</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.writeSpeed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="Write Speed" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bộ nhớ đệm</div>
                                    <div className={cx("content-box")}>{getValue(specifications.performance.cache)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Cache" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số vật lý</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hình dạng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.formFactor)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Form Factor" />
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
                        <div className={cx("title-description")}>Độ tin cậy</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ bền</div>
                                    <div className={cx("content-box")}>{getValue(specifications.reliability.endurance)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Endurance" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.reliability.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Warranty" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Sản xuất tại</div>
                                    <div className={cx("content-box")}>{getValue(specifications.reliability.madeIn)}</div>
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

export default DescriptionDrive;
