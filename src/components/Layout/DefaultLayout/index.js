import classNames from "classnames/bind";

//SCSS import
import styles from "./DefaultLayout.module.scss";

const cx = classNames.bind(styles);

function DefaultLayout() {
	return <div className={cx("wrapper")}></div>;
}

export default DefaultLayout;
