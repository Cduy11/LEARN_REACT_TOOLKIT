
import "./Footer.css"; // Đừng quên tạo file CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Liên Hệ</h3>
          <p>Email: example@email.com</p>
          <p>Điện thoại: (123) 456-7890</p>
          <p>Địa chỉ: 123 Đường ABC, Thành phố XYZ</p>
        </div>
        
        <div className="footer-section">
          <h3>Theo Dõi Chúng Tôi</h3>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Thông Tin</h3>
          <ul>
            <li><a href="#">Về chúng tôi</a></li>
            <li><a href="#">Chính sách bảo mật</a></li>
            <li><a href="#">Điều khoản sử dụng</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Website của bạn. Tất cả quyền được bảo lưu.</p>
      </div>
    </footer>
  );
}