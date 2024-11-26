import classNames from "classnames/bind";
import styles from "./DescriptionTemperedGlass.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionTemperedGlass({ items, showFullDescription }) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            compatibility: { value: items.Compatibility?.join(', ') },
        },
        glass: {
            thickness: { value: items.Thickness },
            hardness: { value: items.Hardness },
            weight: { value: items.Weight, unit: "g" },
        },
        protection: {
            antiGlare: { value: items.AntiGlare },
            oleophobicCoating: { value: items.OleophobicCoating },
        },
        other: {
            installationType: { value: items.InstallationType },
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
                        <div className={cx("title-description")}>Thông tin cơ bản</div>
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
                                    <div className={cx("title-box")}>Model tương thích</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Model" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Thiết bị tương thích</div>
                                <div className={cx("content-box")}>{getValue(specifications.basic.compatibility)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.area} alt="Compatibility" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số kỹ thuật kính</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ dày</div>
                                    <div className={cx("content-box")}>{getValue(specifications.glass.thickness)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Thickness" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ cứng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.glass.hardness)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Hardness" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Trọng lượng</div>
                                <div className={cx("content-box")}>{getValue(specifications.glass.weight)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.dumbbell} alt="Weight" />
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng bảo vệ</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chống lóa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.protection.antiGlare)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.brightnesshalf} alt="Anti-glare" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Lớp phủ oleophobic</div>
                                    <div className={cx("content-box")}>{getValue(specifications.protection.oleophobicCoating)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Oleophobic" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Phương pháp lắp đặt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.installationType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Installation" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Warranty" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Sản xuất tại</div>
                                <div className={cx("content-box")}>{getValue(specifications.other.madeIn)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.location} alt="Made in" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionTemperedGlass;
