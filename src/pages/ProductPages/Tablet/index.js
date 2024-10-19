import classNames from "classnames/bind";
import style from "./Tablet.module.scss";

const cx = classNames.bind(style);

function Tablet() {
    return (
        <div className={cx("wrapper")}>
            <p>Tablet</p>
        </div>
    );
}

export default Tablet;