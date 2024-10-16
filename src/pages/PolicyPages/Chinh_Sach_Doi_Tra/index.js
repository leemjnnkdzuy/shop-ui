import style from './Chinh_Sach_Doi_Tra.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Chinh_Sach_Doi_Tra() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                Chính sách bảo hành
                </div>
                <div className={cx('content')}>
                    
                </div>
            </div>
        </div>
    );
}

export default Chinh_Sach_Doi_Tra;
