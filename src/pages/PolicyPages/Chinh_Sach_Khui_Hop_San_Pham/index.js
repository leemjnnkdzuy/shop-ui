import style from "./Chinh_Sach_Khui_Hop_San_Pham.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Chinh_Sach_Khui_Hop_San_Pham() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("title")}>Chính sách khui hộp sản phẩm</div>
				<div className={cx("content")}>
					<h6>
						Áp dụng cho các sản phẩm bán ra tại Pixel Shop bao gồm ĐTDĐ, MT, MTB, Đồng hồ
						thông minh.
					</h6>

					<h6>Nội dung chính sách:</h6>

					<h6>
						Sản phẩm bắt buộc phải khui seal/mở hộp và kích hoạt bảo hành điện tử (Active)
						ngay tại shop hoặc ngay tại thời điểm nhận hàng khi có nhân viên giao hàng tại
						nhà.
					</h6>

					<h6>
						Đối với các sản phẩm bán nguyên seal khách hàng cần phải thanh toán trước 100%
						giá trị đơn hàng trước khi khui seal sản phẩm.
					</h6>

					<h5>Lưu ý:</h5>

					<h6>
						Trước khi kích hoạt bảo hành điện tử (Active) sản phẩm khách hàng cần kiểm tra
						các lỗi ngoại quan của sản phẩm (Cấn_Trầy thân máy, bụi trong camera, bụi màn
						hình, hở viền…). Nếu phát hiện các lỗi trên khách hàng sẽ được đổi 1 sản phẩm
						khác hoặc hoàn tiền.
					</h6>

					<h6>
						Ngay sau khi kiểm tra lỗi ngoại quan, tiến hành bật nguồn để kiểm tra đến lỗi kỹ
						thuật; nếu sản phẩm có lỗi kỹ thuật của nhà sản xuất khách hàng sẽ được đổi 1
						sản phẩm mới tương đương tại Pixel Shop.
					</h6>

					<h6>
						Nếu quý khách báo lỗi ngoại quan sau khi sản phẩm đã được kích hoạt bảo hành
						điện tử (Active) hoặc sau khi nhân viên giao hàng rời đi Pixel Shop chỉ hỗ trợ
						chuyển sản phẩm của khách hàng đến hãng để thẩm định và xử lý.
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Chinh_Sach_Khui_Hop_San_Pham;
