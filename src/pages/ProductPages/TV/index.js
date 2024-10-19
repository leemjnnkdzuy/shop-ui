import classNames from "classnames/bind";
import style from "./TV.module.scss";

const cx = classNames.bind(style);

function TV() {
    return (
        <div className={cx("wrapper")}>
            <p>TV</p>
        </div>
    );
}

export default TV;