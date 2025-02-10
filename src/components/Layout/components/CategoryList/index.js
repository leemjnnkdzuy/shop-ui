import "tippy.js/dist/tippy.css";

import classNames from "classnames/bind";
import style from "./CategoryList.module.scss";
import { useNavigate } from "react-router-dom";

import icons from "~/assets/icons";
import CategoryItem from "~/components/Layout/components/CategoryItem";
import { Wrapper as PopperWrapper } from "~/components/Layout/components/Popper";

const cx = classNames.bind(style);

function CategoryList({ onCategoryClick }) {
	const navigate = useNavigate();
	const handleNavigate = (path) => {
		navigate(path);
	};

	return (
		<div className={cx("wrapper")}>
			<PopperWrapper>
				<h4 className={cx("category-title")}>Danh Mục</h4>
				<div className={cx("main-category-list")}>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Phone");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.mobile} name="Điện Thoại" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Tablet");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.tablet} name="Máy Tính Bảng" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Laptop");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.laptop} name="Laptop" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Watch");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.smartwatch} name="Đồng Hồ Thông Minh" />
					</div>
				</div>

				<div className={cx("orther-category-list")}>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/TV");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.TV} name="TV" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Washer");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.washer} name="Máy Giặt" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Fridge");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.fridge} name="Tủ Lạnh" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/LinhKien");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.computercomponents} name="Linh Kiện Máy Tính" />
					</div>
					<div
						onClick={() => {
							handleNavigate("/ProductPages/Acessory");
							onCategoryClick();
						}}
					>
						<CategoryItem img={icons.headphone} name="Phụ Kiện" />
					</div>
				</div>
			</PopperWrapper>
		</div>
	);
}

export default CategoryList;
