import classNames from "classnames/bind";
import styles from "./Error.module.scss";
import images from "~/assets/images";

import { useNavigate } from "react-router-dom";

const cx = classNames.bind(styles);

function Error() {
	const navigate = useNavigate();
	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		<div className={cx("wrapper")}>
			<div className={cx("container")}>
				<div className={cx("content")}>
					<div className={cx("info")}>
						<h2>Đen vãi!</h2>
						<p>Trang này bị lỗi rồi!</p>
						<button onClick={() => handleNavigate("/")} className={cx("button")}>
							Quay lại trang chủ
						</button>
					</div>
					<div className={cx("image")}>
						<img src={images.error} alt="Hình Ảnh" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Error;
