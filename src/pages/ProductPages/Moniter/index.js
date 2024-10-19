import classNames from "classnames/bind";
import style from "./Moniter.module.scss";

const cx = classNames.bind(style);

function Moniter() {
    return (
        <div className={cx("wrapper")}>
            <p>Moniter</p>
        </div>
    );
}

export default Moniter;