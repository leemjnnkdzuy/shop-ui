import style from "./Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("title")}>Hướng dẫn mua hàng và thanh toán online</div>
				<div className={cx("content")}>
					<h5>Bước 1:</h5>
					<h6>Tại giao diện trang chủ của Pixel Shop (https://pixelshop.com.vn/)</h6>
					<h6>
						Quý khách gõ vào thanh tìm kiếm tên sản phẩm mà mình quan tâm. Ví dụ Quý khách
						đang muốn mua sản phẩm iPhone, sau khi gõ hệ thống sẽ truy xuất ra các sản phẩm
						liên quan tới từ khóa mà Quý khách muốn tìm.
					</h6>
					<h5>Bước 2:</h5>
					<h6>
						Bây giờ Quý khách hãy click chọn sản phẩm mà mình muốn tham khảo. Ví dụ Quý
						khách chọn sản phẩm iPhone 15, sau khi click chọn sẽ hiển thị trang chi tiết sản
						phẩm như dưới. Quý khách có thể xem các thông số thuộc tính cũng như bài viết
						đánh giá về sản phẩm phía bên dưới trang web.
					</h6>
					<h5>Bước 3:</h5>
					<h6>
						Sau khi đã chọn được sản phẩm phù hợp, Quý khách vui lòng click vào nút “MUA
						NGAY”. Sau đó Quý khách có thể thấy được giỏ hàng của mình đang gồm những sản
						phẩm đã chọn mua.
					</h6>
					<h5>Bước 4:</h5>
					<h6>
						Quý khách kiểm tra thông tin sản phẩm đã chọn, sau đó điền thông tin đặt hàng.
					</h6>
					<h6>
						Quý khách lựa chọn hình thức giao hàng mong muốn: Giao hàng tận nơi/Nhận tại cửa
						hàng và điền form thông tin khách hàng bao gồm: “Anh/Chị”, “Họ và tên”, “Số điện
						thoại”, “Email”. Trường “Email” Quý khách có thể bỏ qua nếu không muốn.
					</h6>
					<h6>
						Đối với phương án giao hàng tận nơi: Quý khách điền thông tin địa chỉ nhận hàng
						và thời gian giao hàng.
					</h6>
					<h6>
						Đối với phương án nhận tại cửa hàng: Quý khách chọn tỉnh, huyện mong muốn và
						chọn cửa hàng phù hợp trong danh sách kết quả.
					</h6>
					<h5>Bước 5:</h5>
					<h6>
						Quý khách có thể lựa chọn hình thức thanh toán bằng tiền mặt khi nhận hàng, trả
						góp qua nhà tài chính hoặc qua thẻ ATM và thẻ tín dụng hoặc theo chương trình
						bạn đồng hành Pixel.Friends.
					</h6>
					<h6>
						Nếu Quý khách chọn hình thức thanh toán tiền mặt khi nhận hàng. Vui lòng bấm nút
						"Đặt hàng" để hoàn tất.
					</h6>
					<h6>
						Vậy là Quý khách đã hoàn tất việc đặt hàng và thanh toán, tư vấn viên của Pixel
						Shop sẽ gọi điện để xác nhận đơn hàng trong thời gian sớm nhất, đồng thời giải
						đáp các thắc mắc liên quan nếu khách hàng có nhu cầu.
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online;
