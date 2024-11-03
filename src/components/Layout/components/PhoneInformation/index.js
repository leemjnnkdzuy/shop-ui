import classNames from "classnames/bind";
import style from "./PhoneInformation.module.scss";

const cx = classNames.bind(style);

function PhoneInformation({ phone }) {
    return (
        <div className={cx('phone-information')}>
            <div className={cx('phone-information__container')}>
                <div className={cx('phone-information__container__image')}>
                    <img src={phone.image} alt={phone.name} />
                </div>
                <div className={cx('phone-information__container__description')}>
                    <h3>{phone.name}</h3>
                    <p>{phone.description}</p>
                    <p>{phone.price}</p>
                </div>
            </div>
        </div>
    );
}