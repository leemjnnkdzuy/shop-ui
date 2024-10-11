import classNames from "classnames/bind";
import style from "./BoxImage.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function BoxImage({ img }) {
    return (
        <div>
            <div className={cx('wrapper')}>
            <img
                className={cx('img')}
                src={img ? img : images.loading}
            />
            </div>
        </div>
    );
}

export default BoxImage;