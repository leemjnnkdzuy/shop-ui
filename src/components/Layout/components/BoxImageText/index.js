import classNames from "classnames/bind";
import style from "./BoxImageText.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function BoxImageText({ img , name }) {
    return (
        <div className={cx('wrapper')}>    
            <h4 className={cx('name')}>
                {name}
            </h4>
            <div className={cx('img')}>
                <img src={img ? img : images.loading}/>
            </div>
        </div>
    );
}

export default BoxImageText;