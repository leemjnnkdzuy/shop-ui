import classNames from "classnames/bind";
import style from "./PC.module.scss";

const cx = classNames.bind(style);

function PC() {
    return (
        <div className={cx("wrapper")}>
            <p>PC</p>
        </div>
    );
}

export default PC;