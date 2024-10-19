import classNames from "classnames/bind";
import style from "./Washer.module.scss";

const cx = classNames.bind(style);

function Washer() {
    return (
        <div className={cx("wrapper")}>
            <p>Washer</p>
        </div>
    );
}

export default Washer;