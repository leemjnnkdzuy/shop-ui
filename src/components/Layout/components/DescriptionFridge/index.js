import classNames from "classnames/bind";
import styles from "./DescriptionFridge.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionFridge({
    items,
    selectedStorage = 0,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        basic: {
            brand: { value: items.Brand },
            model: { value: items.Model },
            capacity: { value: items.Capacity, unit: "L" },
            freezerCapacity: { value: items.FreezerCapacity, unit: "L" },
        },
        power: {
            energyEfficiency: { value: items.EnergyEfficiency },
            voltage: { value: items.Voltage, unit: "V" },
            powerConsumption: { value: items.PowerConsumption, unit: "W" },
            inverterTechnology: { value: items.InverterTechnology },
        },
        cooling: {
            compressorType: { value: items.CompressorType },
            coolingTechnology: { value: items.CoolingTechnology },
            temperatureControl: { value: items.TemperatureControl },
            defrostType: { value: items.DefrostType },
        },
        design: {
            doorType: { value: items.DoorType },
            numberOfDoors: { value: items.NumberOfDoors },
            numberOfShelves: { value: items.NumberOfShelves },
            shelfMaterial: { value: items.ShelfMaterial },
            size: { value: items.Size },
            weight: { value: items.Weight, unit: "kg" },
            material: { value: items.Material },
        },
        features: {
            iceMaker: { value: items.IceMaker },
            waterDispenser: { value: items.WaterDispenser },
            ledLighting: { value: items.LEDLighting },
            noiseLevel: { value: items.NoiseLevel, unit: "dB" },
            smartTechnology: { value: items.SmartTechnology },
        },
        safety: {
            childLock: { value: items.ChildLock },
            doorAlarm: { value: items.DoorAlarm },
            deodorizingFilter: { value: items.DeodorizingFilter },
            antiBacterialTechnology: { value: items.AntiBacterialTechnology },
        },
        additional: {
            fastFreezing: { value: items.FastFreezing },
            holidayMode: { value: items.HolidayMode },
            freshZone: { value: items.FreshZone },
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
                        <div className={cx("title-description")}>Thông số cơ bản</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thương hiệu</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.brand)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.brightnesshalf} alt="Brand" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Model</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.model)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.atom} alt="Model" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung tích tổng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.capacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Capacity" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Dung tích ngăn đông</div>
                                    <div className={cx("content-box")}>{getValue(specifications.basic.freezerCapacity)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Freezer" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số điện năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Hiệu suất năng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.energyEfficiency)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="Energy" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điện áp</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.voltage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.batterylow} alt="Voltage" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công suất tiêu thụ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.powerConsumption)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.ghost} alt="Power" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công nghệ Inverter</div>
                                    <div className={cx("content-box")}>{getValue(specifications.power.inverterTechnology)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chip} alt="Inverter" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số làm lạnh</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại máy nén</div>
                                    <div className={cx("content-box")}>{getValue(specifications.cooling.compressorType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Compressor" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Công nghệ làm lạnh</div>
                                    <div className={cx("content-box")}>{getValue(specifications.cooling.coolingTechnology)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Cooling" />
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
                                    <div className={cx("content-box")}>{getValue(specifications.design.size)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.shapesquare} alt="Size" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Loại cửa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.doorType)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.slackold} alt="Door" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số lượng cửa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.numberOfDoors)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.slack} alt="Doors" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Số lượng kệ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.numberOfShelves)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.cog} alt="Shelves" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chất liệu kệ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.shelfMaterial)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.refresh} alt="Shelf Material" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Trọng lượng</div>
                                    <div className={cx("content-box")}>{getValue(specifications.design.weight)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.signal} alt="Weight" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Máy làm đá</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.iceMaker)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.categoryalt} alt="Ice Maker" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bộ lọc khử mùi</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.deodorizingFilter)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.objectshorizontalleft} alt="Filter" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số an toàn</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Khóa trẻ em</div>
                                    <div className={cx("content-box")}>{getValue(specifications.safety.childLock)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Child Lock" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Báo động cửa</div>
                                    <div className={cx("content-box")}>{getValue(specifications.safety.doorAlarm)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Door Alarm" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số bổ sung</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chế độ làm lạnh nhanh</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.fastFreezing)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Fast Freezing" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Chế độ kỳ nghỉ</div>
                                    <div className={cx("content-box")}>{getValue(specifications.additional.holidayMode)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Holiday Mode" />
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
                                    <img src={icons.shapesquare} alt="Warranty" />
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

export default DescriptionFridge;
