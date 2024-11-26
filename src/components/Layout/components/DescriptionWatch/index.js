import classNames from "classnames/bind";
import styles from "./DescriptionWatch.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionWatch({
    items,
    selectedStorage = 0,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        screen: {
            size: { value: items.ScreenSize, unit: "inch" },
            resolution: { value: items.Resolution },
            displayType: { value: items.DisplayType },
        },
        battery: {
            life: { value: items.BatteryLife },
        },
        waterResistance: {
            value: items.WaterResistance,
        },
        sensors: {
            value: items.Sensors.join(', '),
        },
        connectivity: {
            value: items.Connectivity,
        },
        os: {
            value: items.OS,
        },
        memory: {
            ram: { value: items.RAM },
            storage: { value: items.Storage },
        },
        features: {
            fitnessTracking: { value: items.FitnessTracking },
            notifications: { value: items.Notifications },
            voiceControl: { value: items.VoiceControl },
            musicControl: { value: items.MusicControl },
        },
        design: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "g" },
            material: { value: items.Material },
        },
        warranty: {
            value: items.Warranty,
        },
        madeIn: {
            value: items.MadeIn,
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
                        <div className={cx("title-description")}>Mô tả chi tiết màn hình</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Kích thước màn hình</div>
                                    <div className={cx("content-box")}>{getValue(specifications.screen.size)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Screen Size" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Độ phân giải</div>
                                    <div className={cx("content-box")}>{getValue(specifications.screen.resolution)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.chess} alt="Resolution" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Loại màn hình</div>
                                <div className={cx("content-box")}>{getValue(specifications.screen.displayType)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.slack} alt="Display Type" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Mô tả chi tiết pin</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Thời lượng pin</div>
                                <div className={cx("content-box")}>{getValue(specifications.battery.life)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.batterylow} alt="Battery Life" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Khả năng chống nước</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Chống nước</div>
                                <div className={cx("content-box")}>{getValue(specifications.waterResistance)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.shield} alt="Water Resistance" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Cảm biến</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Cảm biến</div>
                                <div className={cx("content-box")}>{getValue(specifications.sensors)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.atom} alt="Sensors" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kết nối</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Kết nối</div>
                                <div className={cx("content-box")}>{getValue(specifications.connectivity)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.signal} alt="Connectivity" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Hệ điều hành</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Hệ điều hành</div>
                                <div className={cx("content-box")}>{getValue(specifications.os)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.ghost} alt="OS" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Bộ nhớ</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>RAM</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.ram)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.layer} alt="RAM" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Bộ nhớ trong</div>
                                    <div className={cx("content-box")}>{getValue(specifications.memory.storage)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.sushi} alt="Storage" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Theo dõi sức khỏe</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.fitnessTracking)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.dumbbell} alt="Fitness Tracking" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Thông báo</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.notifications)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.area} alt="Notifications" />
                                </div>
                            </div>
                        </div>
                        <div className={cx("double-description-box")}>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điều khiển giọng nói</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.voiceControl)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.extension} alt="Voice Control" />
                                </div>
                            </div>
                            <div className={cx("description-box")}>
                                <div className={cx("content-description-box")}>
                                    <div className={cx("title-box")}>Điều khiển nhạc</div>
                                    <div className={cx("content-box")}>{getValue(specifications.features.musicControl)}</div>
                                </div>
                                <div className={cx("icon-description-box")}>
                                    <img src={icons.showalt} alt="Music Control" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế</div>
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
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Bảo hành</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Bảo hành</div>
                                <div className={cx("content-box")}>{getValue(specifications.warranty)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.ghost} alt="Warranty" />
                            </div>
                        </div>
                    </div>
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Xuất xứ</div>
                        <div className={cx("description-box")}>
                            <div className={cx("content-description-box")}>
                                <div className={cx("title-box")}>Sản xuất tại</div>
                                <div className={cx("content-box")}>{getValue(specifications.madeIn)}</div>
                            </div>
                            <div className={cx("icon-description-box")}>
                                <img src={icons.location} alt="Made In" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionWatch;
