import classNames from "classnames/bind";
import styles from "./DescriptionDustCollector.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionDustCollector({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basicInfo: {
            power: { value: items.Power, unit: "W" },
            suctionPower: { value: items.SuctionPower, unit: "AW" },
            voltage: { value: items.Voltage, unit: "V" },
            capacity: { value: items.Capacity, unit: "L" }
        },
        design: {
            weight: { value: items.Weight, unit: "kg" },
            material: { value: items.Material },
            cordLength: { value: items.CordLength, unit: "m" },
            hoseLength: { value: items.HoseLength, unit: "m" }
        },
        filter: {
            filterType: { value: items.FilterType },
            noiseLevel: { value: items.NoiseLevel, unit: "dB" },
            numberOfFilters: { value: items.NumberOfFilters },
            filterWashable: { value: items.FilterWashable },
            hepaFilter: { value: items.HEPAFilter }
        },
        battery: {
            powerSource: { value: items.PowerSource },
            maxRuntime: { value: items.MaxRuntime, unit: "min" },
            rechargeTime: { value: items.RechargeTime, unit: "h" },
            batteryType: { value: items.BatteryType },
            batteryCapacity: { value: items.BatteryCapacity, unit: "mAh" }
        },
        features: {
            bagless: { value: items.Bagless },
            tankMaterial: { value: items.TankMaterial },
            smartTechnology: { value: items.SmartTechnology },
            automaticCordRewind: { value: items.AutomaticCordRewind },
            maneuverability: { value: items.Maneuverability },
            noiseReduction: { value: items.NoiseReduction },
            ecoMode: { value: items.EcoMode }
        },
        other: {
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn },
            attachments: { value: items.AttachmentsIncluded ? items.AttachmentsIncluded.join(", ") : "" }
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
                                    <div className={cx("title-box")}>Công suất</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.power)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Power" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Lực hút</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.suctionPower)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.slackold} alt="Suction" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điện áp</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.voltage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.frontcategory} alt="Voltage" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung tích</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basicInfo.capacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Capacity" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>
                            Mô tả chi tiết thiết kế & trọng lượng
                        </div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trọng lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Weight" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chiều dài dây điện</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.cordLength)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.frontextension} alt="Cord Length" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chiều dài ống hút</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.hoseLength)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Hose Length" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Mô tả chi tiết bộ lọc</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại bộ lọc</div>
                                        <div className={cx("content-box")}>{getValue(specifications.filter.filterType)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Filter Type" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Mức độ ồn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.filter.noiseLevel)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Noise Level" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Số lượng bộ lọc</div>
                                        <div className={cx("content-box")}>{getValue(specifications.filter.numberOfFilters)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Number of Filters" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bộ lọc có thể rửa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.filter.filterWashable)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Filter Washable" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bộ lọc HEPA</div>
                                        <div className={cx("content-box")}>{getValue(specifications.filter.hepaFilter)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="HEPA Filter" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Mô tả chi tiết pin</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Nguồn điện</div>
                                        <div className={cx("content-box")}>{getValue(specifications.battery.powerSource)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.batterylow} alt="Power Source" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thời gian hoạt động tối đa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.battery.maxRuntime)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.location} alt="Max Runtime" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thời gian sạc</div>
                                        <div className={cx("content-box")}>{getValue(specifications.battery.rechargeTime)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.frontextension} alt="Recharge Time" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại pin</div>
                                        <div className={cx("content-box")}>{getValue(specifications.battery.batteryType)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Battery Type" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Dung lượng pin</div>
                                        <div className={cx("content-box")}>{getValue(specifications.battery.batteryCapacity)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Battery Capacity" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Các tính năng khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Không túi</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.bagless)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Bagless" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu bình chứa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.tankMaterial)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Tank Material" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công nghệ thông minh</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.smartTechnology)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Smart Technology" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tự động cuộn dây</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.automaticCordRewind)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.sushi} alt="Automatic Cord Rewind" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Khả năng di chuyển</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.maneuverability)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Maneuverability" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Giảm tiếng ồn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.noiseReduction)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.brightnesshalf} alt="Noise Reduction" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chế độ tiết kiệm năng lượng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.ecoMode)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chip} alt="Eco Mode" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Các thông số khác</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Warranty" />
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
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Phụ kiện đi kèm</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.attachments)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Attachments" />
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

export default DescriptionDustCollector;
