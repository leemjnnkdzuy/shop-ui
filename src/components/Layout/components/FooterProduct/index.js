import React from "react";
import classNames from "classnames/bind";
import styles from "./FooterProduct.module.scss";

const cx = classNames.bind(styles);

const FooterBox = ({ icon, title, content, alt }) => (
	<div className={cx("box-footer")}>
		<div className={cx("image-box-footer")}>
			<img src={icon} alt={alt} />
		</div>
		<div className={cx("text-box-footer")}>
			<div className={cx("text-box-footer-title")}>{title}</div>
			<div className={cx("text-box-footer-content")}>{content}</div>
		</div>
	</div>
);

function FooterProduct({ footerItems }) {
	return (
		<div className={cx("wrapper")}>
			{footerItems.map((item, index) => (
				<FooterBox
					key={index}
					icon={item.icon}
					title={item.title}
					content={item.content}
					alt={item.alt}
				/>
			))}
		</div>
	);
}

export default FooterProduct;
