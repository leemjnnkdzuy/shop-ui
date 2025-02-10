import style from "./Chinh_Sach_Giao_Hang_Va_Lap_Dat.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Chinh_Sach_Giao_Hang_Va_Lap_Dat() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("title")}>Chính sách giao hàng & lắp đặt</div>
				<div className={cx("content")}>
					<h6>
						Mua hàng tại Pixel Shop khách hàng sẽ được hỗ trợ giao hàng tại nhà hầu như trên
						toàn quốc. Với độ phủ trên khắp 63 tỉnh thành, Quý khách sẽ nhận được sản phẩm
						nhanh chóng mà không cần mất thời gian di chuyển tới cửa hàng.
					</h6>

					<h5>Giao hàng</h5>
					<h6>
						• Áp dụng với tất cả các sản phẩm có áp dụng giao hàng tại nhà, không giới hạn
						giá trị.
					</h6>
					<h6>
						• Miễn phí giao hàng trong bán kính 20km có đặt shop (Đơn hàng giá trị &lt;
						100.000 VNĐ thu phí 10.000 VNĐ).
					</h6>
					<h6>
						• Với khoảng cách lớn hơn 20km, nhân viên Pixel Shop sẽ tư vấn chi tiết về cách
						thức giao nhận thuận tiện nhất.
					</h6>

					<h5>Thanh toán</h5>
					<h6>
						• Đơn hàng có giá trị từ 50 triệu trở lên: Quý khách phải thanh toán trước 100%
						giá trị đơn hàng nếu muốn giao hàng tại nhà.
					</h6>
					<h6>
						• Đơn hàng có giá trị dưới 50 triệu: Quý khách có thể nhận hàng và thanh toán
						tại nhà khi đồng ý mua hàng.
					</h6>

					<h5>Hỗ trợ lắp đặt</h5>
					<h6>
						Đối với các sản phẩm có chính sách lắp đặt tại nhà (VD: TV, Điều hòa,...) sau
						khi sản phẩm được giao tới nơi. Pixel Shop sẽ hỗ trợ tư vấn, lắp đặt và hướng
						dẫn sử dụng miễn phí cho khách hàng.
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Chinh_Sach_Giao_Hang_Va_Lap_Dat;
