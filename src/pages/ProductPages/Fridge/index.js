import classNames from "classnames/bind";
import style from "./Fridge.module.scss";

const cx = classNames.bind(style);

function Fridge() {
    return (
        <div className={cx("wrapper")}>
            <p>Fridge</p>
        </div>
    );
}

export default Fridge;