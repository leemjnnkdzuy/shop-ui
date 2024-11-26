import classNames from "classnames/bind";
import styles from "./DescriptionMousePad.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionMousePad({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basicInfo: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            madeIn: { value: items.MadeIn },
        },
        physical: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            thickness: { value: items.Thickness },
        },
        material: {
            material: { value: items.Material },
            surfaceType: { value: items.SurfaceType },
            antiSlip: { value: items.AntiSlip },
        },
        other: {
            design: { value: items.Design },
            compatibility: { value: items.Compatibility },
            warranty: { value: items.Warranty },
        },
    };

    const getValue = (spec) => {
        if (!spec || (!spec.value && !spec.unit))
            return "Hiện không có thông tin mục này";
        if (Array.isArray(spec.value)) {
            return spec.value.join(", ");
        }
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
                                        <div className={cx("content-box")}>{getValue(specifications.basicInfo.brand)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Brand" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Model</div>
                                        <div className={cx("content-box")}>{getValue(specifications.basicInfo.model)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Model" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kích thước & Trọng lượng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
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
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ dày</div>
                                    <div className={cx("content-box")}>{getValue(specifications.physical.thickness)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Thickness" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Chất liệu & Bề mặt</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.material.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại bề mặt</div>
                                        <div className={cx("content-box")}>{getValue(specifications.material.surfaceType)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Surface" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chống trượt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.material.antiSlip)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Anti-slip" />
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
                                        <div className={cx("title-box")}>Thiết kế</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.design)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Design" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tương thích</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.compatibility)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.extension} alt="Compatibility" />
                                    </div>
                                </div>
                            </div>
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
                                        <div className={cx("title-box")}>Xuất xứ</div>
                                        <div className={cx("content-box")}>{getValue(specifications.basicInfo.madeIn)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.location} alt="Made in" />
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

export default DescriptionMousePad;
