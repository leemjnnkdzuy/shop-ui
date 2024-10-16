import style from './Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                Quy định hỗ trợ kỹ thuật và sao lưu dữ liệu
                </div>
                <div className={cx('content')}>
                <h6>Đối tượng áp dụng: Khách hàng có nhu cầu hỗ trợ phần mềm bảo hành sửa chữa sản phẩm tại Pixel Shop.</h6>

                <h6>Nhằm đảm bảo đầy đủ quyền lợi của khách hàng khi cài đặt, bảo hành sửa chữa sản phẩm, Pixel Shop xin thông báo Quy định như sau:</h6>

                <h6>Để bảo vệ dữ liệu cá nhân, Quý khách vui lòng sao lưu và XOÁ các dữ liệu cá nhân trước khi bàn giao sản phẩm cho nhân viên Pixel Shop.</h6>
                <h6>Pixel Shop không chịu trách nhiệm về việc mất dữ liệu của Quý khách trong quá trình cài đặt, bảo hành sửa chữa.</h6>
                <h6>Để đảm bảo Quyền lợi, Quý khách vui lòng ký xác nhận để thông tin bàn giao thiết bị của Quý khách được ghi nhận trên hệ thống Pixel Shop.</h6>
                <h6>Pixel Shop không hỗ trợ cài đặt phần mềm không có bản quyền trên máy tính của Quý khách.</h6>
                <h6>Quý khách vui lòng kiểm tra tài khoản iCloud/ Google và các tài khoản xã hội khác trên máy trước khi rời cửa hàng.</h6>
                <h6>Tài khoản cài đặt trên máy phải là tài khoản cá nhân của Quý khách (chủ sở hữu máy).</h6>
                <h6>Nếu chưa có tài khoản iCloud, Quý khách liên hệ NV Kỹ thuật để được hỗ trợ tạo Tài khoản iCloud (Apple ID)/ Google và các tài khoản khác miễn phí tại cửa hàng. Đồng thời yêu cầu nhân viên cung cấp thông tin, mật khẩu tài khoản vừa được tạo trước khi rời cửa hàng.</h6>

                </div>
            </div>
        </div>
    );
}

export default Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu;
