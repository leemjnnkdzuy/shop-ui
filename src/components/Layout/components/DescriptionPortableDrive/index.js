import classNames from "classnames/bind";
import styles from "./DescriptionPortableDrive.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionPortableDrive({ items, showFullDescription }) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        mainSpecs: {
            capacity: { value: items.Capacity },
            interface: { value: items.Interface },
            readSpeed: { value: items.ReadSpeed },
            writeSpeed: { value: items.WriteSpeed },
        },
        features: {
            formFactor: { value: items.FormFactor },
            encryption: { value: items.EncryptionSupport },
            compatibility: { value: items.Compatibility?.join(', ') },
        },
        physical: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            shockResistance: { value: items.ShockResistance },
        },
        other: {
            powerSupply: { value: items.PowerSupply },
            warranty: { value: items.Warranty },
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
                        <div className={cx("title-description")}>Thông số kỹ thuật chính</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.capacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Capacity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chuẩn kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.interface)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Interface" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ đọc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.readSpeed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Read Speed" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ ghi</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.writeSpeed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Write Speed" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kiểu thiết kế</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.formFactor)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Form Factor" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo mật</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.encryption)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Encryption" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Tương thích với</div>
                                <div className={cx("content-box")}>{getValue(specifications.features.compatibility)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.extension} alt="Compatibility" />
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
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Khả năng chống sốc</div>
                                <div className={cx("content-box")}>{getValue(specifications.physical.shockResistance)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.frontcategory} alt="Shock Resistance" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Nguồn điện</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.powerSupply)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.batterylow} alt="Power Supply" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Warranty" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ngày ra mắt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.releaseDate)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Release Date" />
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

export default DescriptionPortableDrive;
