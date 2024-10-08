import classNames from "classnames/bind";
import style from "./CategoryItem.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function CategoryItem({ img, name }) {
    const isName = name ? name : "Tên";
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src={img ? img : images.loading}
                alt={name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    {name}
                </h4>
            </div>
        </div>
    );
}

export default CategoryItem;