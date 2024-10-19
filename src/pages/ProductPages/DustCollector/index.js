import classNames from "classnames/bind";
import style from "./DustCollector.module.scss";

const cx = classNames.bind(style);

function DustCollector() {
    return (
        <div className={cx("wrapper")}>
            <p>DustCollector</p>
        </div>
    );
}

export default DustCollector;