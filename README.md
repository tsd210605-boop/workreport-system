# Hệ thống Quản lý Công việc (Work Management System)

Đây là dự án ứng dụng web Quản lý công việc được xây dựng bằng Java Servlet, JSP và MySQL. Ứng dụng cung cấp các chức năng để người dùng có thể dễ dàng theo dõi, quản lý, và thống kê các công việc hàng ngày của mình.

## 🚀 Tính năng nổi bật

- Quản lý Tài khoản (Authentication)**: Đăng nhập, Đăng xuất an toàn.
- Bảng điều khiển (Dashboard)**: Xem tổng quan về tiến độ và trạng thái các công việc.
- Quản lý Công việc (Task Management)**:
  - Thêm mới công việc.
  - Sửa thông tin chi tiết công việc.
  - Xóa công việc.
  - Cập nhật trạng thái công việc.
- Thống kê (Statistics)**: Báo cáo trực quan về tình trạng và hiệu suất công việc.
- Quản lý Hồ sơ (Profile)**: Xem và cập nhật thông tin cá nhân.
- Quản trị (Admin)**: Giao diện dành riêng cho quyền quản trị viên.

 🛠️ Công nghệ sử dụng

- Backend:
  - Java 17
  - Java Servlet & JSP
  - JSTL (JavaServer Pages Standard Tag Library) 1.2
- Frontend: HTML, CSS, JavaScript
- Cơ sở dữ liệu: MySQL (JDBC Driver 8.0.33)
- Quản lý Dependencies & Build: Maven / Ant
- IDE/Server: Apache NetBeans (có hỗ trợ cho IntelliJ IDEA/Eclipse), Web Server Apache Tomcat.

 ⚙️ Hướng dẫn cài đặt

### 1. Yêu cầu hệ thống
- JDK: Phiên bản 17 trở lên.
- Web Server: Apache Tomcat 9.x (tương thích tốt với Servlet API 4.0.1).
- Cơ sở dữ liệu: MySQL Server.

### 2. Cài đặt Cơ sở dữ liệu
1. Mở MySQL Workbench hoặc một công cụ quản trị CSDL.
2. Tạo database mới với tên `work_management`.
3. Chạy script SQL (nếu có trong dự án) để tạo các bảng `users`, `tasks`, v.v...
4. Cập nhật thông tin kết nối CSDL tại file `src/java/util/DBConnection.java`:
   ```java
   private static final String URL = "jdbc:mysql://localhost:3306/work_management?...";
   private static final String USER = "root";   // Username MySQL của bạn
   private static final String PASS = "123456"; // Password MySQL của bạn
   ```

### 3. Chạy dự án

Cách 1: Chạy bằng Apache NetBeans (Khuyến nghị cho dự án này)**
1. Mở NetBeans -> **File** -> **Open Project** và trỏ tới thư mục `WorkManagement`.
2. Chắc chắn bạn đã thêm máy chủ Tomcat vào NetBeans (**Tools** -> **Servers**).
3. Chuột phải vào dự án, chọn **Clean and Build**.
4. Chuột phải vào dự án, chọn **Run**. Trình duyệt sẽ tự động mở trang chủ.

Cách 2: Build bằng Maven
1. Mở Terminal/Command Prompt tại thư mục chứa file `pom.xml`.
2. Chạy lệnh: `mvn clean package`.
3. Lấy file `.war` (hoặc cấu trúc đã giải nén) trong thư mục `target` và deploy vào thư mục `webapps` của Tomcat. Khởi động Tomcat.

## 📂 Cấu trúc thư mục dự án

- `src/java/controller/`: Chứa các Servlet đóng vai trò làm điều hướng và xử lý logic (DashboardServlet, EditTaskServlet, LoginServlet...).
- `src/java/dao/`: Chứa các lớp Data Access Object thao tác trực tiếp với cơ sở dữ liệu.
- `src/java/model/`: Các entity/model object của dự án (Task, User).
- `src/java/util/`: Chứa các class hỗ trợ (như `DBConnection` quản lý kết nối CSDL).
- `web/`: Chứa giao diện của dự án (file `.jsp`, thư mục `WEB-INF`, style CSS).
- `pom.xml`: File cấu hình Maven (quản lý thư viện ngoài như MySQL Connector, JSTL).

## 🤝 Đóng góp
Dự án được thực hiện nhằm phục vụ mục đích học tập và xây dựng ứng dụng theo chuẩn mô hình MVC trong Java Web. Mọi đóng góp cải tiến đều được hoan nghênh qua việc tạo Pull Request hoặc mở Issue.
