# Jumpin — Website fan-team

Trang giới thiệu fan-team **Jumpin** (event & hoạt động phi lợi nhuận), làm bằng
HTML + Tailwind CSS v4, host miễn phí trên GitHub Pages.

Có 4 trang:

| Trang | File | Nội dung |
| --- | --- | --- |
| Home | `index.html` | Logo lớn, tên team, giới thiệu, 3 project mới nhất |
| Project | `project.html` | Toàn bộ event/project, có bộ lọc theo trạng thái |
| Member | `member.html` | Danh sách thành viên |
| Liên hệ | `contact.html` | Hợp tác, tài trợ, tham gia team |

---

## 1. Xem thử trên máy (preview)

### Bước 1 — Cài Node.js (chỉ làm 1 lần)

Tải bản **LTS** ở https://nodejs.org rồi cài như phần mềm bình thường.

### Bước 2 — Mở terminal ở thư mục này

Mở thư mục `jumpin-web` trong File Explorer, bấm vào thanh địa chỉ, gõ `cmd` rồi Enter.

### Bước 3 — Cài thư viện (chỉ làm 1 lần)

```bash
npm install
```

### Bước 4 — Chạy chế độ vừa-sửa-vừa-xem

```bash
npm run dev
```

Lệnh này **giữ chạy liên tục** và tự build lại CSS mỗi khi bồ sửa file.
Cứ để cửa sổ này mở. Muốn dừng thì bấm `Ctrl + C`.

### Bước 5 — Mở web

Mở **thêm một cửa sổ terminal thứ hai** ở cùng thư mục, chạy:

```bash
npm run serve
```

Rồi vào trình duyệt mở địa chỉ: **http://localhost:5173**

> Bồ có thể mở trực tiếp `index.html` bằng cách nhấp đúp, web vẫn hiện đúng.
> Nhưng nên dùng `npm run serve` cho giống môi trường thật.

Sửa file xong thì chỉ cần **F5** trong trình duyệt là thấy thay đổi.

---

## 2. Xem trên điện thoại

Web đã được làm responsive: điện thoại có menu thu gọn (bấm icon ☰),
các thẻ xếp 1 cột, chữ và nút được co lại cho vừa màn hình.

### Cách 1 — Giả lập trong trình duyệt máy tính (nhanh nhất)

1. Mở web trên Chrome/Edge
2. Bấm `F12` (mở DevTools)
3. Bấm `Ctrl + Shift + M` (bật chế độ điện thoại)
4. Chọn model máy ở thanh trên, ví dụ *iPhone 14 Pro* hoặc *Galaxy S20*
5. **Bấm F5 sau khi đổi kích thước** để trang tính lại layout

Muốn tắt thì bấm `Ctrl + Shift + M` lần nữa.

### Cách 2 — Xem bằng điện thoại thật (cùng WiFi)

1. Ở terminal, lấy địa chỉ IP của máy tính:

```bash
ipconfig
```

Tìm dòng **IPv4 Address**, ví dụ `192.168.1.12`

2. Chạy server cho phép máy khác truy cập:

```bash
npx --yes serve . -l 5173
```

3. Trên điện thoại (**phải cùng mạng WiFi**), mở trình duyệt và vào:

```
http://192.168.1.12:5173
```

(thay `192.168.1.12` bằng IP máy bồ)

> Nếu điện thoại không vào được, thường là do Windows Firewall chặn.
> Khi chạy lệnh trên, Windows sẽ hỏi cho phép — chọn **Allow / Cho phép**.

### Cách 3 — Xem trên bản đã deploy

Sau khi làm xong mục 4, bồ có link công khai, mở trên điện thoại ở đâu cũng được.

---

## 3. Sửa nội dung

**Chỉ cần sửa duy nhất 1 file: [`assets/data.js`](assets/data.js)**

Không cần sửa HTML. Sửa file này thì cả 4 trang tự cập nhật theo.

### Đổi logo

Bỏ file logo vào thư mục `assets/`, rồi sửa dòng `logo` trong `data.js`:

```js
team: {
  name: "Jumpin",
  logo: "assets/logo.png",   // ← đổi thành tên file của bồ
  ...
}
```

Dùng được `.png`, `.jpg`, `.svg`, `.webp`. Nên là ảnh vuông (ví dụ 512×512).
Logo hiện ở 3 nơi: ô lớn giữa trang chủ, góc trên bên trái, và footer.

Để `logo: ""` thì hiện chữ cái đầu của tên team thay cho ảnh.

### Đổi mạng xã hội

```js
socials: [
  { name: "Facebook", icon: "facebook", url: "https://facebook.com/jumpin" },
  { name: "Twitter / X", icon: "twitter", url: "https://x.com/jumpin" },
  { name: "Email", icon: "mail", url: "mailto:hello@jumpin.com" },
],
```

Thêm kênh thì thêm 1 dòng, bỏ kênh thì xoá dòng đó. Sửa ở đây thì cả hero,
footer và trang Liên hệ đều đổi theo.

Icon có sẵn: `facebook`, `twitter`, `github`, `youtube`, `twitch`, `discord`,
`tiktok`, `instagram`, `mail`

### Thêm project / event

Thêm một khối vào danh sách `projects`:

```js
{
  title: "Tên event",
  year: "2026",
  status: "upcoming",          // done | ongoing | upcoming
  cover: "assets/event1.jpg",  // để "" thì hiện khối màu
  summary: "Mô tả ngắn 1-2 câu về event.",
  tags: ["Offline", "Festival"],
  link: "https://facebook.com/events/...",  // để "" thì không có nút
},
```

Ý nghĩa `status` (quyết định nhãn màu trên thẻ):

| Giá trị | Hiện trên web |
| --- | --- |
| `done` | Đã hoàn thành (hồng) |
| `ongoing` | Đang diễn ra (xanh) |
| `upcoming` | Sắp tới (vàng) |

Trang chủ luôn hiện **3 project đầu danh sách**, nên muốn nổi bật cái nào thì
đưa lên đầu.

### Thêm thành viên

```js
{
  name: "Tên",
  role: "Vị trí trong team",
  bio: "Mô tả ngắn công việc phụ trách.",
  avatar: "assets/avatar-ten.jpg",   // để "" thì hiện chữ cái đầu
  socials: [{ icon: "twitter", url: "https://x.com/..." }],
},
```

### Đổi màu chủ đạo

Sửa trong [`src/input.css`](src/input.css), phần `@theme` ở đầu file:

```css
--color-blush-200: #ffc9d1;   /* màu hồng chính */
--color-ink-900: #141414;     /* màu nền */
```

Sửa xong nhớ chạy lại `npm run build` (hoặc để `npm run dev` đang chạy thì tự động).

---

## 4. Đưa lên GitHub Pages

### Bước 1 — Tạo repo trên GitHub

Vào https://github.com/new, đặt tên repo (ví dụ `jumpin-web`), chọn **Public**,
rồi bấm **Create repository**. Không cần tích thêm gì.

### Bước 2 — Push code lên

Ở terminal trong thư mục `jumpin-web`, chạy lần lượt:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Website Jumpin"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/TEN-CUA-BO/jumpin-web.git
```

```bash
git push -u origin main
```

(thay `TEN-CUA-BO` bằng username GitHub của bồ)

### Bước 3 — Bật GitHub Pages

1. Vào repo trên GitHub → tab **Settings**
2. Menu bên trái chọn **Pages**
3. Ở mục **Source**, chọn **GitHub Actions**

Xong. Repo đã có sẵn file `.github/workflows/deploy.yml` nên GitHub sẽ tự build
Tailwind và deploy.

### Bước 4 — Lấy link

Vào tab **Actions**, chờ dấu tích xanh (khoảng 1-2 phút). Link sẽ là:

```
https://TEN-CUA-BO.github.io/jumpin-web/
```

### Cập nhật về sau

Mỗi lần sửa nội dung, chỉ cần:

```bash
git add . && git commit -m "Cap nhat noi dung" && git push
```

GitHub tự build và deploy lại. Chờ 1-2 phút là link mới có nội dung mới.

---

## Ghi chú

- `dist/style.css` là file **tự sinh ra** từ `src/input.css`. Không sửa trực tiếp
  file này vì sẽ bị ghi đè mỗi lần build.
- `dist/` và `node_modules/` đã được `.gitignore` bỏ qua — GitHub Actions tự
  build CSS khi deploy nên không cần commit chúng.
- Ảnh nên nén trước khi bỏ vào `assets/` (dưới 300 KB mỗi ảnh) để web load nhanh
  trên điện thoại.

## Cấu trúc file

```
jumpin-web/
├── index.html            Trang chủ
├── project.html          Trang project
├── member.html           Trang thành viên
├── contact.html          Trang liên hệ
├── assets/
│   ├── data.js           ← SỬA NỘI DUNG Ở ĐÂY
│   ├── main.js           Code render (không cần sửa)
│   └── logo.svg          Logo (thay bằng file của bồ)
├── src/
│   └── input.css         Màu sắc & style gốc
├── dist/
│   └── style.css         CSS tự build ra (đừng sửa)
├── .github/workflows/
│   └── deploy.yml        Tự động deploy lên GitHub Pages
└── package.json
```
