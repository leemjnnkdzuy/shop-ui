import style from "./Gioi_Thieu_Ve_Cong_Ty.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

function Gioi_Thieu_Ve_Cong_Ty() {
	return (
		<div className={cx("wrapper")}>
			<div className={cx("inner")}>
				<div className={cx("title")}>Giới thiệu về công ty</div>
				<div className={cx("content")}>
					<h5>1. Về chúng tôi</h5>
					<h6>
						Pixel Shop là chuỗi chuyên bán lẻ các sản phẩm kỹ thuật số di động bao gồm điện
						thoại di động, máy tính bảng, laptop, phụ kiện và dịch vụ công nghệ… cùng các
						mặt hàng gia dụng, điện máy chính hãng, chất lượng cao đến từ các thương hiệu
						lớn, với mẫu mã đa dạng và mức giá tối ưu nhất cho khách hàng.
					</h6>
					<h6>
						Pixel Shop là hệ thống bán lẻ đầu tiên ở Việt Nam được cấp chứng chỉ ISO
						9001:2000 về quản lý chất lượng theo tiêu chuẩn quốc tế. Hiện nay, Pixel Shop là
						chuỗi bán lẻ lớn thứ 2 trên thị trường bán lẻ hàng công nghệ.
					</h6>
					<h5>2. Sứ mệnh</h5>
					<h6>
						Hệ thống Pixel Shop kỳ vọng mang đến cho khách hàng những trải nghiệm mua sắm
						tốt nhất thông qua việc cung cấp các sản phẩm chính hãng, dịch vụ chuyên nghiệp
						cùng chính sách hậu mãi chu đáo. Pixel Shop không ngừng cải tiến và phát triển,
						hướng tới việc trở thành nhà bán lẻ công nghệ hàng đầu Việt Nam, đồng thời mang
						lại giá trị thiết thực cho cộng đồng.
					</h6>
					<h5>3. Giá trị cốt lõi</h5>
					<h6>
						• Chất lượng và Uy tín: Pixel Shop cam kết cung cấp các sản phẩm chính hãng,
						chất lượng cao với chính sách bảo hành uy tín và dịch vụ chăm sóc khách hàng chu
						đáo, nhằm đem đến cho khách hàng sự an tâm tuyệt đối khi mua sắm các sản phẩm
						công nghệ, điện máy - gia dụng.
					</h6>
					<h6>
						• Khách hàng là trọng tâm: Phục vụ khách hàng luôn là ưu tiên số 1. Pixel Shop
						luôn chú trọng hoàn thiện chất lượng dịch vụ, bồi dưỡng đội ngũ nhân viên nhiệt
						tình, trung thực, chân thành, mang lại lợi ích và sự hài lòng tối đa cho khách
						hàng.
					</h6>
					<h6>
						• Đổi mới và phát triển: Pixel Shop luôn cập nhật và đổi mới sản phẩm, công nghệ
						cũng như dịch vụ để đáp ứng nhu cầu thay đổi liên tục của thị trường và khách
						hàng.
					</h6>
					<h6>
						• Đồng hành cùng cộng đồng: Pixel Shop không chỉ tập trung vào phát triển kinh
						doanh mà còn chú trọng đến các hoạt động xã hội, đóng góp tích cực cho sự phát
						triển của cộng đồng và xã hội.
					</h6>
					<h5>4. Định hướng phát triển</h5>
					<h6>
						Với mục tiêu “Tạo trải nghiệm xuất sắc cho khách hàng”, Pixel Shop tiếp tục đẩy
						mạnh chuyển đổi số để ứng dụng vào công tác bán hàng, quản lý và đào tạo nhân
						sự... theo chiến lược tận tâm phục vụ nhằm gia tăng trải nghiệm khách hàng. Đầu
						tư mạnh mẽ kinh doanh trực tuyến đa nền tảng, khai thác và ứng dụng công nghệ để
						thấu hiểu và tiếp cận khách hàng một cách linh hoạt và hiệu quả nhất, không
						ngừng khẳng định vị thế là một trong những thương hiệu bán lẻ uy tín tại Việt
						Nam.
					</h6>
				</div>
			</div>
		</div>
	);
}

export default Gioi_Thieu_Ve_Cong_Ty;
