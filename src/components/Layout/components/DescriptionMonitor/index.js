import classNames from "classnames/bind";
import styles from "./DescriptionMonitor.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionMonitor({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        screen: {
            size: { value: items.ScreenSize, unit: "inch" },
            resolution: { value: items.Resolution },
            aspectRatio: { value: items.AspectRatio },
            panelType: { value: items.PanelType },
            brightness: { value: items.Brightness, unit: "nits" },
            contrastRatio: { value: items.ContrastRatio },
            refreshRate: { value: items.RefreshRate, unit: "Hz" },
            responseTime: { value: items.ResponseTime, unit: "ms" },
            colorDepth: { value: items.ColorDepth },
            colorGamut: { value: items.ColorGamut },
            hdrSupport: { value: items.HDRSupport },
            viewingAngle: { value: items.ViewingAngle },
        },
        design: {
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "kg" },
            material: { value: items.Material },
            wallMountable: { value: items.WallMountable },
            vesaSupport: { value: items.VESASupport }
        },
        adjustments: {
            stand: { value: items.AdjustableStand },
            tilt: { value: items.TiltAdjustment },
            swivel: { value: items.SwivelAdjustment },
            pivot: { value: items.PivotAdjustment },
            height: { value: items.HeightAdjustment }
        },
        features: {
            speakers: { value: items.BuiltInSpeakers },
            speakerOutput: { value: items.SpeakerOutput, unit: "W" },
            connectivity: { value: items.Connectivity },
            flickerFree: { value: items.FlickerFree },
            blueLightFilter: { value: items.BlueLightFilter },
            lowInputLag: { value: items.LowInputLagMode },
            gamingMode: { value: items.GamingMode },
            adaptiveSync: { value: items.AdaptiveSyncTechnology }
        },
        power: {
            consumption: { value: items.PowerConsumption, unit: "W" },
            savingMode: { value: items.PowerSavingMode },
            voltage: { value: items.Voltage }
        },
        other: {
            warranty: { value: items.Warranty },
            madeIn: { value: items.MadeIn }
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
                        <div className={cx("title-description")}>Thông số màn hình</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước màn hình</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.size)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Screen size" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ phân giải</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.resolution)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Resolution" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tỷ lệ khung hình</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.aspectRatio)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Aspect Ratio" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại tấm nền</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.panelType)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Panel Type" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ sáng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.brightness)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.brightnesshalf} alt="Brightness" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tỷ lệ tương phản</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.contrastRatio)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cog} alt="Contrast Ratio" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tần số quét</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.refreshRate)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Refresh Rate" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Thời gian phản hồi</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.responseTime)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.objectshorizontalleft} alt="Response Time" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ sâu màu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.colorDepth)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.frontextension} alt="Color Depth" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Gam màu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.colorGamut)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.webcam} alt="Color Gamut" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ HDR</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.hdrSupport)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="HDR Support" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Góc nhìn</div>
                                        <div className={cx("content-box")}>{getValue(specifications.screen.viewingAngle)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.sushi} alt="Viewing Angle" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Kích thước</div>
                        <div className={cx("information-description")}>
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
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.material)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Gắn tường</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.wallMountable)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Wall Mountable" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ VESA</div>
                                        <div className={cx("content-box")}>{getValue(specifications.design.vesaSupport)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cog} alt="VESA Support" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Khả năng điều chỉnh</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chân đế</div>
                                        <div className={cx("content-box")}>{getValue(specifications.adjustments.stand)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Stand" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điều chỉnh độ nghiêng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.adjustments.tilt)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Tilt Adjustment" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điều chỉnh xoay</div>
                                        <div className={cx("content-box")}>{getValue(specifications.adjustments.swivel)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Swivel Adjustment" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điều chỉnh trục</div>
                                        <div className={cx("content-box")}>{getValue(specifications.adjustments.pivot)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Pivot Adjustment" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điều chỉnh chiều cao</div>
                                        <div className={cx("content-box")}>{getValue(specifications.adjustments.height)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Height Adjustment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loa tích hợp</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.speakers)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Built-in Speakers" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công suất loa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.speakerOutput)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.objectshorizontalleft} alt="Speaker Output" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kết nối</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.connectivity)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Connectivity" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chống nhấp nháy</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.flickerFree)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Flicker Free" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bộ lọc ánh sáng xanh</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.blueLightFilter)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Blue Light Filter" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chế độ độ trễ thấp</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.lowInputLag)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.showalt} alt="Low Input Lag Mode" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chế độ chơi game</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.gamingMode)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shield} alt="Gaming Mode" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công nghệ đồng bộ hóa</div>
                                        <div className={cx("content-box")}>{getValue(specifications.features.adaptiveSync)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Adaptive Sync Technology" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số điện</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tiêu thụ điện năng</div>
                                        <div className={cx("content-box")}>{getValue(specifications.power.consumption)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Power Consumption" />
                                    </div>
                                </div>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chế độ tiết kiệm điện</div>
                                        <div className={cx("content-box")}>{getValue(specifications.power.savingMode)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.sushi} alt="Power Saving Mode" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điện áp</div>
                                        <div className={cx("content-box")}>{getValue(specifications.power.voltage)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Voltage" />
                                    </div>
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
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>{getValue(specifications.other.warranty)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.atom} alt="Warranty" />
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

export default DescriptionMonitor;
