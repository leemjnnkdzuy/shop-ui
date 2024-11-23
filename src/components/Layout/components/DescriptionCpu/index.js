import classNames from "classnames/bind";
import styles from "./DescriptionCpu.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionCpu({
    items,
    selectedStorage = 0,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        mainSpecs: {
            socketType: { value: items.SocketType || '' },
            cores: { value: items.Cores || '' },
            threads: { value: items.Threads || '' },
            baseClock: { value: items.BaseClock, unit: "GHz" },
            boostClock: { value: items.BoostClock, unit: "GHz" },
        },
        architecture: {
            cache: { value: items.Cache || '' },
            tdp: { value: items.TDP, unit: "W" },
            integratedGraphics: { value: items.IntegratedGraphics || '' },
            architecture: { value: items.Architecture || '' },
            manufacturingProcess: { value: items.ManufacturingProcess || ''},
        },
        memory: {
            memorySupport: { value: items.MemorySupport || '' },
            maxMemoryBandwidth: { value: items.MaxMemoryBandwidth || '' },
            maximumMemory: { value: items.MaximumMemory || ''},
        },
        additional: {
            pcieLanes: { value: items.PCIeLanes || '' },
            virtualizationSupport: { value: items.VirtualizationSupport || '' },
            thermalInterfaceMaterial: { value: items.ThermalInterfaceMaterial || '' },
            powerConsumption: { value: items.PowerConsumption, unit: "W" },
            releaseDate: { value: items.ReleaseDate },
            madeIn: { value: items.MadeIn || '' },
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
                                    <div className={cx("title-box")}>Socket</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.socketType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Socket" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số nhân (Cores)</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.cores)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Cores" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số luồng (Threads)</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.threads)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Threads" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Base Clock</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.baseClock)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Base Clock" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Boost Clock</div>
                                    <div className={cx("content-box")}>{getValue(specifications.mainSpecs.boostClock)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Boost Clock" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kiến trúc</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Cache</div>
                                    <div className={cx("content-box")}>{getValue(specifications.architecture.cache)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Cache" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>TDP</div>
                                    <div className={cx("content-box")}>{getValue(specifications.architecture.tdp)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="TDP" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Đồ họa tích hợp</div>
                                    <div className={cx("content-box")}>{getValue(specifications.architecture.integratedGraphics)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Đồ họa tích hợp" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kiến trúc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.architecture.architecture)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chess} alt="Kiến trúc" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Quy trình sản xuất</div>
                                    <div className={cx("content-box")}>{getValue(specifications.architecture.manufacturingProcess)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Quy trình sản xuất" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Bộ nhớ</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hỗ trợ bộ nhớ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.memorySupport)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Hỗ trợ bộ nhớ" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Băng thông bộ nhớ tối đa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.maxMemoryBandwidth)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Băng thông bộ nhớ tối đa" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung lượng bộ nhớ tối đa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.maximumMemory)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Dung lượng bộ nhớ tối đa" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số bổ sung</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>PCIe Lanes</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.pcieLanes)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cuboid} alt="PCIe Lanes" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hỗ trợ ảo hóa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.virtualizationSupport)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.slack} alt="Hỗ trợ ảo hóa" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Vật liệu giao diện nhiệt</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.thermalInterfaceMaterial)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Vật liệu giao diện nhiệt" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Tiêu thụ điện năng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.powerConsumption)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Tiêu thụ điện năng" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Ngày phát hành</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.releaseDate)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.frontcategory} alt="Ngày phát hành" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Sản xuất tại</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.madeIn)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Sản xuất tại" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionCpu;
