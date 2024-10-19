import classNames from "classnames/bind";
import style from "./LinhKien.module.scss";

const cx = classNames.bind(style);

function LinhKien() {
    return (
        <div className={cx("wrapper")}>
            <p>Phone</p>
        </div>
    );
}

export default LinhKien;