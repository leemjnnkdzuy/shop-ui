import classNames from "classnames/bind";
import styles from "./ShowItemsDashboard.module.scss";

const cx = classNames.bind(styles);

const AddItemsDashboard = () => {
	return (
		<div className={cx("add-items-dashboard")}>
			<h2 className={cx("add-items-dashboard__title")}>Add Items</h2>
		</div>
	);
};

export default AddItemsDashboard;
