import classNames from "classnames/bind";
import style from "./Watch.module.scss";

const cx = classNames.bind(style);

function Watch() {
    return (
        <div className={cx("wrapper")}>
            <p>Watch</p>
        </div>
    );
}

export default Watch;