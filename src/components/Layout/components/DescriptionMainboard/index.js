import classNames from "classnames/bind";
import styles from "./DescriptionMainboard.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionMainboard({ items, showFullDescription }) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basicInfo: {
            model: { value: items.Model },
            brand: { value: items.Brand },
            releaseDate: { value: items.ReleaseDate },
        },
        mainFeatures: {
            formFactor: { value: items.FormFactor },
            socketType: { value: items.SocketType },
            chipset: { value: items.Chipset },
        },
        memory: {
            type: { value: items.MemoryType },
            maxMemory: { value: items.MaxMemory },
            slots: { value: items.MemorySlots },
        },
        connectivity: {
            pcieSlots: { value: items.PCIeSlots },
            sataPorts: { value: items.SATAPorts },
            usbPorts: { value: items.USBPorts },
            ethernet: { value: items.EthernetPort },
        },
        wireless: {
            wifi: { value: items.WiFi },
            bluetooth: { value: items.Bluetooth },
        },
        other: {
            audioChip: { value: items.AudioChip },
            powerConnector: { value: items.PowerConnector },
            cooling: { value: items.CoolingSolution },
            material: { value: items.Material },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            features: { value: items.Features },
            standards: { value: items.MainStandards },
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
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Model" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hãng sản xuất</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Brand" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Features Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Đặc điểm chính</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Form Factor</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainFeatures.formFactor)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Form Factor" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Socket</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainFeatures.socketType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Socket" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Memory Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số bộ nhớ</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại RAM hỗ trợ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.type)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.memorycard} alt="Memory Type" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số khe RAM</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.slots)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Memory Slots" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Connectivity Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kết nối</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Khe PCIe</div>
                                    <div className={cx("content-box")}>{getValue(specifications.connectivity.pcieSlots)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.signal} alt="PCIe" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Cổng SATA</div>
                                    <div className={cx("content-box")}>{getValue(specifications.connectivity.sataPorts)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="SATA" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Wireless Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kết nối không dây</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>WiFi</div>
                                    <div className={cx("content-box")}>{getValue(specifications.wireless.wifi)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.wifi} alt="WiFi" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bluetooth</div>
                                    <div className={cx("content-box")}>{getValue(specifications.wireless.bluetooth)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.bluetooth} alt="Bluetooth" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Specifications Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.dimensions)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Dimensions" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trọng lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.weight)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Weight" />
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
        </div>
    );
}

export default DescriptionMainboard;
