import style from './Chinh_Sach_Bao_Hanh.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Chinh_Sach_Bao_Hanh() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                Chính sách bảo hành
                </div>
                <div className={cx('content')}>
                    <h6>
                    Tất cả sản phẩm tại Pixel Shop kinh doanh đều là sản phẩm chính hãng và được bảo hành theo đúng chính sách của nhà sản xuất(*). Ngoài ra Pixel Shop cũng hỗ trợ gửi bảo hành miễn phí giúp khách hàng đối với cả sản phẩm do Pixel Shop bán ra và sản phẩm Quý khách mua tại các chuỗi bán lẻ khác.
                    </h6>
                    <h6>
                    Mua hàng tại Pixel Shop, Quý khách sẽ được hưởng những đặc quyền sau:
                    </h6>
                    <h6>
                    • Bảo hành đổi sản phẩm mới ngay tại shop trong 30 ngày nếu có lỗi NSX.(**)
                    </h6>
                    <h6>
                    • Gửi bảo hành chính hãng không mất phí vận chuyển.(***)
                    </h6>
                    <h6>
                    • Theo dõi tiến độ bảo hành nhanh chóng qua kênh hotline hoặc tự tra cứu
                    </h6>
                    <h6>
                    • Hỗ trợ làm việc với hãng để xử lý phát sinh trong quá trình bảo hành.
                    </h6>
                    <h6>
                    Bên cạnh đó Quý khách có thể tham khảo một số các trường hợp thường gặp nằm ngoài chính sách bảo hành sau để xác định sơ bộ máy có đủ điều kiện bảo hành hãng:
                    </h6>
                    <h6>• Sản phẩm hết hạn bảo hành (Vui lòng tra cứu thời hạn bảo hành sản phẩm Tại đây).</h6>
                    <h6>• Sản phẩm đã bị thay đổi, sửa chữa không thuộc các Trung Tâm Bảo Hành Ủy Quyền của Hãng.</h6>
                    <h6>• Sản phẩm lắp đặt, bảo trì, sử dụng không đúng theo hướng dẫn của Nhà sản xuất gây ra hư hỏng.</h6>
                    <h6>• Sản phẩm lỗi do ngấm nước, chất lỏng và bụi bẩn. Quy định này áp dụng cho cả những thiết bị đạt chứng nhận kháng nước/kháng bụi cao nhất là IP68.</h6>
                    <h6>• Sản phẩm bị biến dạng, nứt vỡ, cấn móp, trầy xước nặng do tác động nhiệt, tác động bên ngoài.</h6>
                    <h6>• Sản phẩm có vết mốc, rỉ sét hoặc bị ăn mòn, oxy hóa bởi hóa chất.</h6>
                    <h6>• Sản phẩm bị hư hại do thiên tai, hỏa hoạn, lụt lội, sét đánh, côn trùng, động vật vào.</h6>
                    <h6>• Sản phẩm trong tình trạng bị khóa tài khoản cá nhân như: Tài khoản khóa máy/màn hình, khóa tài khoản trực tuyến Xiaomi Cloud, Samsung Cloud, iCloud, Gmail...</h6>
                    <h6>• Khách hàng sử dụng phần mềm, ứng dụng không chính hãng, không bản quyền.</h6>
                    <h6>• Màn hình có bốn (04) điểm chết trở xuống.</h6>
                    <h5>Lưu ý:</h5>
                    <h6>• Chương trình bảo hành bắt đầu có hiệu lực từ thời điểm Pixel Shop xuất hóa đơn cho Quý khách.</h6>
                    <h6>• Với mỗi dòng sản phẩm khác nhau sẽ có chính sách bảo hành khác nhau tùy theo chính sách của Hãng/Nhà cung cấp.</h6>
                    <h6>• Để tìm hiểu thông tin chi tiết về chính sách bảo hành cho sản phẩm cụ thể, xin liên hệ bộ phận Chăm sóc Khách hàng của Pixel Shop 1800 6616.</h6>
                    <h6>• Tra cứu tình trạng máy gửi bảo hành bất cứ lúc nào Tại đây.</h6>
                    <h6>• Trong quá trình thực hiện dịch vụ bảo hành, các nội dung lưu trữ trên sản phẩm của Quý khách sẽ bị xóa và định dạng lại. Do đó, Quý khách vui lòng tự sao lưu toàn bộ dữ liệu trong sản phẩm, đồng thời gỡ bỏ tất cả các thông tin cá nhân mà Quý khách muốn bảo mật. Pixel Shop không chịu trách nhiệm đối với bất kỳ mất mát nào liên quan tới các chương trình phần mềm, dữ liệu hoặc thông tin nào khác lưu trữ trên sản phẩm bảo hành.</h6>
                    <h6>• Vui lòng tắt tất cả các mật khẩu bảo vệ, Pixel Shop sẽ từ chối tiếp nhận bảo hành nếu thiết bị của bạn bị khóa bởi bất cứ phương pháp nào.</h6>
                    <h5>(*) Áp dụng với các sản phẩm bán mới hoặc còn hạn bảo hành mặc định nếu đã qua sử dụng.</h5>
                    <h5>(**) Áp dụng với các sản phẩm thuộc diện đổi mới trong 30 ngày nếu có lỗi NSX được công bố trên website Chính sách đổi trả.</h5>
                    <h5>(***) Trừ các sản phẩm có chính sách bảo hành tại nhà, sản phẩm thuộc diện cồng kềnh.</h5>
                </div>
            </div>
        </div>
    );
}

export default Chinh_Sach_Bao_Hanh;
