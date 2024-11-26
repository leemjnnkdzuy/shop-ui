import classNames from "classnames/bind";
import styles from "./DescriptionPhoneCase.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionPhoneCase({
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
            color: { value: items.Color?.join(', ') },
        },
        design: {
            material: { value: items.Material },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
        },
        protection: {
            protectionLevel: { value: items.ProtectionLevel },
            shockResistance: { value: items.ShockResistance },
            waterResistance: { value: items.WaterResistance },
            dropTestRating: { value: items.DropTestRating },
        },
        compatibility: {
            compatibleModels: { value: items.CompatibleModels?.join(', ') },
            features: { value: items.Features?.join(', ') },
        },
        additional: {
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
                        <div className={cx("title-description")}>Thông tin cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.slack} alt="Brand" />
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

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Kích thước</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.dimensions)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Dimensions" />
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
                        <div className={cx("title-description")}>Khả năng bảo vệ</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Mức độ bảo vệ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.protection.protectionLevel)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shield} alt="Protection" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chống sốc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.protection.shockResistance)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Shock" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông tin khác</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bảo hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.warranty)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Warranty" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Xuất xứ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.madeIn)}</div>
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

export default DescriptionPhoneCase;
