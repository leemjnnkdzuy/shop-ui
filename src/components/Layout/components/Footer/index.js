import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import icons from "~/assets/icons";
import { useNavigate } from "react-router-dom";

const cx = classNames.bind(style);

function Footer() {
  
    const navigate = useNavigate();  
    const handleNavigate = (path) => { navigate(path); };
    const handleNavigateExternal = (url) => {window.open(url, "_blank");};
  
return (
	<footer className={cx("wrapper")}>
		<div className={cx("container")}>
			<div className={cx("inner")}>
				<div className={cx("title")}>KẾT NỐI VỚI PIXELSHOP</div>
				<div className={cx("content-icon")}>
					<img
						onClick={() => handleNavigateExternal("https://www.facebook.com/leemjnnkdzuy")}
						src={icons.facebook}
						alt="facebook"
					/>
					<img
						onClick={() => handleNavigateExternal("https://zaloapp.com/qr/p/o4o9fecxo3s4")}
						src={icons.zalo}
						alt="zalo"
					/>
					<img
						onClick={() => handleNavigateExternal("#")}
						src={icons.tiktok}
						alt="zalo"
					/>
					<img
						onClick={() => handleNavigateExternal("#")}
						src={icons.youtube}
						alt="tiktok"
					/>
				</div>
				<div className={cx("about-us")}>
					<div className={cx("content-item")}>
						<button onClick={() => handleNavigate("/AboutUs")} className={cx("button")}>
							DEV INFO
						</button>
					</div>
				</div>
			</div>
			<div className={cx("inner")}>
				<div className={cx("title")}>VỀ CHÚNG TÔI</div>
				<div className={cx("content")}>
					<div
						onClick={() => handleNavigate("/OrderPages/Gioi_Thieu_Ve_Cong_Ty")}
						className={cx("content-item")}
					>
						Giới thiệu về công ty
					</div>
					<div
						onClick={() => handleNavigate("/OrderPages/Quy_Che_Hoat_Dong")}
						className={cx("content-item")}
					>
						Quy chế hoạt động
					</div>
					<div onClick={() => handleNavigate("#")} className={cx("content-item")}>
						Tin tức khuyến mại
					</div>
					<div
						onClick={() => handleNavigate("/OrderPages/Gioi_Thieu_May_Doi_Tra")}
						className={cx("content-item")}
					>
						Giới thiệu máy đổi trả
					</div>
					<div
						onClick={() =>
							handleNavigate("/OrderPages/Huong_Dan_Mua_Hang_Va_Thanh_Toan_Online")
						}
						className={cx("content-item")}
					>
						Hướng dẫn mua hàng & thanh toán online
					</div>
					<div
						onClick={() => handleNavigate("/OrderPages/Gioi_Thieu_Ve_Cong_Ty")}
						className={cx("content-item")}
					>
						Tra cứu hoá đơn điện tử
					</div>
					<div
						onClick={() => handleNavigate("/OrderPages/Gioi_Thieu_Ve_Cong_Ty")}
						className={cx("content-item")}
					>
						Tra cứu bảo hành
					</div>
					<div
						onClick={() => handleNavigate("/OrderPages/Cau_Hoi_Thuong_Gap")}
						className={cx("content-item")}
					>
						Câu hỏi thường gặp
					</div>
				</div>
			</div>
			<div className={cx("inner")}>
				<div className={cx("title")}>CHÍNH SÁCH</div>
				<div className={cx("content")}>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Bao_Hanh")}
						className={cx("content-item")}
					>
						Chính sách bảo hành
					</div>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Doi_Tra")}
						className={cx("content-item")}
					>
						Chính sách đổi trả
					</div>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Bao_Mat")}
						className={cx("content-item")}
					>
						Chính sách bảo mật
					</div>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Tra_Gop")}
						className={cx("content-item")}
					>
						Chính sách trả góp
					</div>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Khui_Hop_San_Pham")}
						className={cx("content-item")}
					>
						Chính sách khui hộp sản phẩm
					</div>
					<div
						onClick={() => handleNavigate("/Policy/Chinh_Sach_Giao_Hang_Va_Lap_Dat")}
						className={cx("content-item")}
					>
						Chính sách giao hàng & lắp đặt
					</div>
					<div
						onClick={() =>
							handleNavigate("/Policy/Chinh_Sach_Thu_Thap_Va_Xu_Ly_Du_Lieu_Ca_Nhan")
						}
						className={cx("content-item")}
					>
						Chính sách thu thập & xử lý dữ liệu cá nhân
					</div>
					<div
						onClick={() =>
							handleNavigate("/Policy/Quy_Dinh_Ve_Ho_Tro_Ky_Thuat_Va_Sao_Luu_Du_Lieu")
						}
						className={cx("content-item")}
					>
						Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu
					</div>
				</div>
			</div>
		</div>
		<div className={cx("container")}>
			<div className={cx("technology-container")}>
				<div className={cx("technology-container-title")}>CÔNG NGHỆ ĐƯỢC SỬ DỤNG</div>
				<div className={cx("technology-icon-list")}>
					<div className={cx("technology-content")}>
						<div className={cx("technology-icon")}>
							<img src={icons.reactjs} alt="reactjs" />
						</div>
						<div className={cx("technology-icon")}>
							<img src={icons.mongodb} alt="zalo" />
						</div>
						<div className={cx("technology-icon")}>
							<img src={icons.github} alt="nodejs" />
						</div>

						<div className={cx("technology-icon")}>
							<img src={icons.expressjs} alt="expressjs" />
						</div>

						<div className={cx("technology-icon")}>
							<img src={icons.axios} alt="axios" />
						</div>
					</div>
					<div className={cx("technology-content")}>
						<div className={cx("technology-icon")}>
							<img src={icons.vercel} alt="vercel" />
						</div>
						<div className={cx("technology-icon")}>
							<img src={icons.cloudflare} alt="cloudflare" />
						</div>
						<div className={cx("technology-icon")}>
							<img src={icons.namecom} alt="namecom" />
						</div>
						<div className={cx("technology-icon")}>
							<img src={icons.nodejs} alt="namecom" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={cx("container-end")}>
			<div className={cx("content-end")}>
				© 2024 Trường Đại Học Văn Hiến • Địa chỉ: 665-667-669 Điện Biên Phủ, Phường 1,
				Quận 3, TP. Hồ Chí Minh
			</div>
			<div className={cx("content-end")}>
				Chịu trách nhiệm nội dung: Lê Minh Duy - MSSV: 221A011220 • Email:
				duylelv17@gmail.com
			</div>
		</div>
	</footer>
);
}

export default Footer;