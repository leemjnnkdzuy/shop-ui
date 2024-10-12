import classNames from "classnames/bind";
import style from "./Footer.module.scss";
import icons from "~/assets/icons";

const cx = classNames.bind(style);

function Footer() {
return (
    <footer className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('inner')}>
          <div className={cx('title')}>
            KẾT NỐI VỚI PIXELSHOP
          </div>
          <div className={cx('content-icon')}>
            <img src={icons.facebook} alt='facebook' />
            <img src={icons.zalo} alt='instagram' />
            <img src={icons.tiktok} alt='zalo' />
            <img src={icons.youtube} alt='tiktok' />
          </div>
        </div>
        <div className={cx('inner')}>
          <div className={cx('title')}>
            VỀ CHÚNG TÔI
          </div>
          <div className={cx('content')}>
            <div className={cx('content-item')}>
              Giới thiệu về công ty
            </div>
            <div className={cx('content-item')}>
              Quy chế hoạt động
            </div>
            <div className={cx('content-item')}>
              Tin tức khuyến mại
            </div>
            <div className={cx('content-item')}>
              Giới thiệu máy đổi trả
            </div>
            <div className={cx('content-item')}>
              Hướng dẫn mua hàng & thanh toán online
            </div>
            <div className={cx('content-item')}>
              Tra cứu hoá đơn điện tử
            </div>
            <div className={cx('content-item')}>
              Tra cứu bảo hành
            </div>
            <div className={cx('content-item')}>
              Câu hỏi thường gặp
            </div>
          </div>
        </div>
        <div className={cx('inner')}>
          <div className={cx('title')}>
            CHÍNH SÁCH
          </div>
          <div className={cx('content')}>
            <div className={cx('content-item')}>
              Chính sách bảo hành
            </div>
            <div className={cx('content-item')}>
              Chính sách đổi trả
            </div>
            <div className={cx('content-item')}>
              Chính sách bảo mật
            </div>
            <div className={cx('content-item')}>
              Chính sách trả góp
            </div>
            <div className={cx('content-item')}>
              Chính sách khui hộp sản phẩm
            </div>
            <div className={cx('content-item')}>
              Chính sách giao hàng & lắp đặt
            </div>
            <div className={cx('content-item')}>
              Chính sách thu thập & xử lý dữ liệu cá nhân
            </div>
            <div className={cx('content-item')}>
              Quy định về hỗ trợ kỹ thuật & sao lưu dữ liệu
            </div>
          </div>
        </div>
      </div>
      <div className={cx('container')}>
        <div className={cx('technology-container')}>
          <div className={cx('technology-title')}>
            CÔNG NGHỆ ĐƯỢC SỬ DỤNG
          </div>
          <div className={cx('technology-icon')}>
          <div className={cx('technology-content')}>
              <div className={cx('technology-icon')}>
                <img src={icons.axios} alt='axios' />
              </div>
              <div className={cx('technology-icon')}>
                <img src={icons.reactjs} alt='reactjs' />
              </div>
              <div className={cx('technology-icon')}>
                <img src={icons.mongodb} alt='zalo' />
              </div>
              <div className={cx('technology-icon')}>
                <img src={icons.nodejs} alt='nodejs' />
              </div>  
              <div className={cx('technology-icon')}>
                <img src={icons.expressjs} alt='expressjs' />
              </div>
            </div>
          </div>
        </div>
    </div>
    <div className={cx('container-end')}>
      <div className={cx('content-end')}>
        © 2024 Trường Đại Học Văn Hiến • Địa chỉ: 665-667-669 Điện Biên Phủ, Phường 1, Quận 3, TP. Hồ Chí Minh
      </div>
      <div className={cx('content-end')}>
        Chịu trách nhiệm nội dung: Lê Minh Duy - MSSV: 221A011220 • Email: duylelv17@gmail.com
      </div>
    </div>
    </footer>
  );
}

export default Footer;