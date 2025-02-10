import classNames from "classnames/bind";
import style from "./Popup.module.scss";

const cx = classNames.bind(style);

function Popup({ children }) {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>{children}</div>
		</div>
	);
}

export default Popup;
