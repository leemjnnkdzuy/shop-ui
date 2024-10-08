import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import classNames from "classnames/bind";
import style from "./CategoryList.module.scss";
import icons from "~/assets/icons";
import CategoryItem from "~/components/Layout/components/CategoryItem";
import { Wrapper as PopperWrapper } from '~/components/Layout/components/Popper';


const cx = classNames.bind(style);

function CategoryList({}) {
    return (
        <div className={cx('wrapper')}>
            <PopperWrapper>
                <h4 className={cx('category-title')}>
                    Danh Mục
                </h4>

                <div className={cx('main-category-list')}>
                    <CategoryItem img={icons.mobile} name="Điện Thoại" />
                    <CategoryItem img={icons.laptop} name="Laptop" />
                    <CategoryItem img={icons.headphone} name="Phụ Kiện" />
                </div>

                <div className={cx('orther-category-list')}>
                    <CategoryItem img={icons.category_4} name="TV" />
                </div>
            </PopperWrapper>
        </div>
    );
}

export default CategoryList;