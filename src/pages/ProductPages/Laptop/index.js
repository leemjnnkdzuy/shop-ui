import classNames from "classnames/bind";
import style from "./Laptop.module.scss";

const cx = classNames.bind(style);

function Laptop() {
    return (
        <div className={cx("wrapper")}>
            <p>Laptop</p>
        </div>
    );
}

export default Laptop;