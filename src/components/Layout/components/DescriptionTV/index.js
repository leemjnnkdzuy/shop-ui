import classNames from "classnames/bind";
import styles from "./DescriptionTV.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(styles);

function DescriptionTV({
    items,
    showFullDescription
}) {
    if (!items) {
        return <div>Loading...</div>;
    }

    const specifications = {
        display: {
            screenSize: { value: items.ScreenSize, unit: "inch" },
            resolution: { value: items.Resolution },
            aspectRatio: { value: items.AspectRatio },
            panelType: { value: items.PanelType },
            refreshRate: { value: items.RefreshRate, unit: "Hz" },
            hdrSupport: { value: items.HDRSupport },
            brightness: { value: items.Brightness, unit: "nits" },
            contrastRatio: { value: items.ContrastRatio },
            viewingAngle: { value: items.ViewingAngle },
            backlightTechnology: { value: items.BacklightTechnology },
        },
        smartFeatures: {
            smartTV: { value: items.SmartTV },
            os: { value: items.OS },
            processor: { value: items.Processor },
            ram: { value: items.RAM },
            storage: { value: items.Storage },
            voiceControl: { value: items.VoiceControl },
            screenMirroring: { value: items.ScreenMirroring },
            appSupport: { value: items.AppSupport },
            gameMode: { value: items.GameMode },
        },
        audio: {
            audioSystem: { value: items.AudioSystem },
            speakerOutput: { value: items.SpeakerOutput, unit: "W" },
            dolbySupport: { value: items.DolbySupport },
            surroundSound: { value: items.SurroundSound },
        },
        connectivity: {
            connectivity: { value: items.Connectivity },
            hdmi: { value: items.HDMI },
            usb: { value: items.USB },
            ethernet: { value: items.Ethernet },
            wifi: { value: items.WiFi },
            bluetooth: { value: items.Bluetooth },
            audioOutput: { value: items.AudioOutput },
        },
        powerAndDesign: {
            powerConsumption: { value: items.PowerConsumption, unit: "W" },
            voltage: { value: items.Voltage },
            energyEfficiency: { value: items.EnergyEfficiency },
            dimensions: { value: items.Dimensions },
            weight: { value: items.Weight, unit: "kg" },
            material: { value: items.Material },
            wallMountable: { value: items.WallMountable },
            vesaSupport: { value: items.VESASupport },
        },
        additionalFeatures: {
            parentalControl: { value: items.ParentalControl },
            sleepTimer: { value: items.SleepTimer },
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
                    {/* Display Specifications */}
                    {/* Display Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thông số màn hình</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* Screen Size */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước màn hình</div>
                                        <div className={cx("content-box")}>{getValue(specifications.display.screenSize)}</div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.area} alt="Screen Size" />
                                    </div>
                                </div>
                                {/* Resolution */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Độ phân giải</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.resolution)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chess} alt="Resolution" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Aspect Ratio */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tỷ lệ khung hình</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.aspectRatio)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Aspect Ratio" />
                                    </div>
                                </div>
                                {/* Panel Type */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Loại tấm nền</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.panelType)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Panel Type" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Contrast Ratio */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Tỷ lệ tương phản</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.contrastRatio)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.slack} alt="Contrast Ratio" />
                                    </div>
                                </div>
                                {/* Viewing Angle */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Góc nhìn</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.viewingAngle)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.objectshorizontalleft} alt="Viewing Angle" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Backlight Technology */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công nghệ đèn nền</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.display.backlightTechnology)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="Backlight Technology" />
                                    </div>
                                </div>
                                {/* ...render other display specifications similarly... */}
                            </div>
                        </div>
                    </div>
                    {/* Smart Features Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng thông minh</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* Operating System */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hệ điều hành</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.smartFeatures.os)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.ghost} alt="Operating System" />
                                    </div>
                                </div>
                                {/* Processor */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bộ vi xử lý</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.smartFeatures.processor)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.chip} alt="Processor" />
                                    </div>
                                </div>
                            </div>
                            {/* ...render other smart features similarly... */}
                        </div>
                    </div>
                    {/* Audio Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Âm thanh</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* Audio System */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hệ thống âm thanh</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.audio.audioSystem)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.diamond} alt="Audio System" />
                                    </div>
                                </div>
                                {/* Speaker Output */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Công suất loa</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.audio.speakerOutput)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="Speaker Output" />
                                    </div>
                                </div>
                            </div>
                            {/* ...render other audio specifications similarly... */}
                        </div>
                    </div>
                    {/* Connectivity Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Kết nối</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* WiFi */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>WiFi</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.wifi)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.wifi} alt="WiFi" />
                                    </div>
                                </div>
                                {/* Bluetooth */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bluetooth</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.bluetooth)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bluetooth} alt="Bluetooth" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* HDMI */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>HDMI</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.hdmi)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.creditcard} alt="HDMI" />
                                    </div>
                                </div>
                                {/* USB */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>USB</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.usb)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.transferalt} alt="USB" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Ethernet */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Ethernet</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.ethernet)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.signal} alt="Ethernet" />
                                    </div>
                                </div>
                                {/* Audio Output */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Đầu ra âm thanh</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.connectivity.audioOutput)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.diamond} alt="Audio Output" />
                                    </div>
                                </div>
                            </div>
                            {/* ...render other connectivity specifications similarly... */}
                        </div>
                    </div>
                    {/* Power and Design Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Thiết kế & Năng lượng</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* Dimensions */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kích thước</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.dimensions)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.shapesquare} alt="Dimensions" />
                                    </div>
                                </div>
                                {/* Weight */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Trọng lượng</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.weight)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.dumbbell} alt="Weight" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Voltage */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Điện áp</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.voltage)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="Voltage" />
                                    </div>
                                </div>
                                {/* Energy Efficiency */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hiệu suất năng lượng</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.energyEfficiency)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.refresh} alt="Energy Efficiency" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Material */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Chất liệu</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.material)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.cuboid} alt="Material" />
                                    </div>
                                </div>
                                {/* Wall Mountable */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Khả năng treo tường</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.wallMountable)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="Wall Mountable" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* VESA Support */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hỗ trợ VESA</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.powerAndDesign.vesaSupport)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.layer} alt="VESA Support" />
                                    </div>
                                </div>
                                {/* ...render other power and design specifications similarly... */}
                            </div>
                        </div>
                    </div>
                    {/* Additional Features Section */}
                    <div className={cx("description-tag")}>
                        <div className={cx("title-description")}>Tính năng bổ sung</div>
                        <div className={cx("information-description")}>
                            <div className={cx("double-description-box")}>
                                {/* Parental Control */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Kiểm soát của phụ huynh</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.additionalFeatures.parentalControl)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.lockalt} alt="Parental Control" />
                                    </div>
                                </div>
                                {/* Warranty */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Bảo hành</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.additionalFeatures.warranty)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.checkshield} alt="Warranty" />
                                    </div>
                                </div>
                            </div>
                            <div className={cx("double-description-box")}>
                                {/* Sleep Timer */}
                                <div className={cx("description-box")}>
                                    <div className={cx("content-description-box")}>
                                        <div className={cx("title-box")}>Hẹn giờ ngủ</div>
                                        <div className={cx("content-box")}>
                                            {getValue(specifications.additionalFeatures.sleepTimer)}
                                        </div>
                                    </div>
                                    <div className={cx("icon-description-box")}>
                                        <img src={icons.bolt} alt="Sleep Timer" />
                                    </div>
                                </div>
                                {/* ...render other additional features similarly... */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DescriptionTV;
