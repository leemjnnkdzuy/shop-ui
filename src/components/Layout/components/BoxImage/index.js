import classNames from "classnames/bind";
import style from "./BoxImage.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function BoxImage({ img, alt }) {
    return (
        <div>
            <div className={cx('wrapper')}>
                <img
                    alt={ alt } 
                    className={cx('img')}
                    src={img ? img : images.loading}
                />
            </div>
        </div>
    );
}

export default BoxImage;