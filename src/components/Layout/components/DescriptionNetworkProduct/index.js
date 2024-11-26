import classNames from "classnames/bind";
import styles from "./DescriptionNetworkProduct.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionNetworkProduct({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            type: { value: items.Type },
            model: { value: items.Model },
            brand: { value: items.Brand },
        },
        network: {
            ports: { value: items.Ports },
            maxSpeed: { value: items.MaxSpeed },
            frequencyBands: { value: items.FrequencyBands },
        },
        wireless: {
            standards: { value: items.WirelessStandards },
            security: { value: items.SecurityProtocols },
            coverage: { value: items.CoverageArea },
        },
        antenna: {
            type: { value: items.AntennaType },
            count: { value: items.AntennaCount },
        },
        hardware: {
            processor: { value: items.Processor },
            ram: { value: items.RAM },
            storage: { value: items.Storage },
            features: { value: items.Features },
        },
        physical: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            powerSupply: { value: items.PowerSupply },
            madeIn: { value: items.MadeIn },
        }
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
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại thiết bị</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.wifi} alt="Type" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cuboid} alt="Brand" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số kết nối</div>
                        <div className={cx("information-description")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Cổng kết nối</div>
                                    <div className={cx("content-box")}>{getValue(specifications.network.ports)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Ports" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tốc độ tối đa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.network.maxSpeed)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.categoryalt} alt="Speed" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Băng tần</div>
                                    <div className={cx("content-box")}>{getValue(specifications.network.frequencyBands)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.signal} alt="Frequency" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Cấu hình phần cứng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Vi xử lý</div>
                                        <div className={cx("content-box")}>{getValue(specifications.hardware.processor)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chip} alt="Processor" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>RAM</div>
                                        <div className={cx("content-box")}>{getValue(specifications.hardware.ram)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="RAM" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bộ nhớ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.hardware.storage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Storage" />
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
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Nguồn điện</div>
                                        <div className={cx("content-box")}>{getValue(specifications.physical.powerSupply)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.batterylow} alt="Power" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Sản xuất tại</div>
                                        <div className={cx("content-box")}>{getValue(specifications.physical.madeIn)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.location} alt="MadeIn" />
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

export default DescriptionNetworkProduct;
