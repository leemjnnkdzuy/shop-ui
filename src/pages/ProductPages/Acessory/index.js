import classNames from "classnames/bind";
import style from "./Acessory.module.scss";

const cx = classNames.bind(style);

function Acessory() {
    return (
        <div className={cx("wrapper")}>
            <p>Acessory</p>
        </div>
    );
}

export default Acessory;