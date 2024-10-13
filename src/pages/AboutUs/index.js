import classNames from "classnames/bind";
import style from "./AboutUs.module.scss";
import images from "~/assets/images";

const cx = classNames.bind(style);

function AboutUs() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('temp')}>
                    <div className={cx('info')}>
                        <h2>About Me</h2>
                        <p>Mình là Duy, đầy đủ là Lê Minh Duy, mình đang là sinh viên năm 2 ngành cntt. Đây là Project vừa học vừa làm, cũng vừa thỏa mãn đam mê tìm tòi những thứ mới. Song song đó thì đây cũng là một trong những ý tưởng mà mình nghĩ ra được. Dể thực hiện hóa nó cần rất nhiều thời gian, mong mọi người ủng hộ.</p>
                    </div>
                    <div className={cx('image')}>
                        <img src={images.avatar} alt="Hình Ảnh" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;