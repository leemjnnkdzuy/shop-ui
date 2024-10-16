import style from './Gioi_Thieu_May_Doi_Tra.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

function Gioi_Thieu_May_Doi_Tra() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>
                Giới thiệu máy đổi trả
                </div>
                <div className={cx('content')}>
                    <h6>
                        Máy cũ kinh doanh tại Pixel Shop là các sản phẩm có nguồn gốc tin cậy, còn đủ điều kiện bảo hành được kiểm tra kỹ lưỡng bởi Pixel Shop, bao gồm:
                    </h6>
                    <h6>
                        - Máy trưng bày (demo): là máy được dùng để trưng bày tại cửa hàng, phục vụ nhu cầu trải nghiệm của khách hàng tại shop, sau khi hết thời gian trưng bày, được điều chuyển để kinh doanh.
                    </h6>
                    <h6>
                        - Máy đã qua sử dụng: là máy thu lại từ khách hàng theo chính sách đổi trả/bảo hành, đã được bảo hành chính hãng và được Pixel Shop kiểm tra chất lượng.
                    </h6>
                    <h5>Chế độ bảo hành:</h5>
                    <h6>
                        1 đổi 1 máy tương đương trong vòng 30 ngày nếu máy có lỗi nhà sản xuất (*) nếu không có máy tương đương, khách hàng có thể đổi sang sản phẩm khác cao tiền hơn hoặc Pixel Shop thu hồi lại máy.
                    </h6>
                    <h6>
                        Áp dụng bảo hành theo chính sách của Hãng nếu máy còn bảo hành mặc định của Hãng, trường hợp hết bảo hành mặc định, máy sẽ được bảo hành từ 1 đến 12 tháng theo chính sách của Pixel Shop tùy từng loại sản phẩm.(**)
                    </h6>
                    <h6>
                        Tiếp nhận bảo hành tại tất cả các cửa hàng Pixel Shop trên toàn quốc.
                    </h6>
                    <h6>
                        Với mẫu mã đa dạng, giá cả hợp lý, chất lượng tốt, Khách hàng có thể hoàn toàn yên tâm chọn mua và sử dụng các sản phẩm máy cũ tại Pixel Shop đang kinh doanh phù hợp với nhu cầu của mình.
                    </h6>
                    <h6>
                        Quý khách có thể đến trực tiếp Pixel Shop để xem và mua máy, hoặc tìm kiếm máy đổi trả phù hợp về mức giá và nhu cầu sử dụng trên Website. Nếu tìm thấy sản phẩm vừa ý trên website, Quý khách có thể đặt giữ hàng trong 24 tiếng.
                    </h6>
                    <h5>
                        (*) Theo kết quả kết luận của hãng
                    </h5>
                    <h5>
                        (**) Hạn bảo hành của sản phẩm được thể hiện trên hóa đơn bán hàng và trên website https://pixelshop.com.vn/ 
                    </h5>
                </div>
            </div>
        </div>
    );
}

export default Gioi_Thieu_May_Doi_Tra;
