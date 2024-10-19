import classNames from "classnames/bind";
import style from "./Phone.module.scss";

const cx = classNames.bind(style);

function Phone() {
    return (
        <div className={cx("wrapper")}>
            <p>Phone</p>
        </div>
    );
}

export default Phone;