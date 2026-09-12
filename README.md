# AvesOS — Legal Centre

Web tĩnh (React + Vite + TypeScript) hiển thị **Điều khoản sử dụng**, **Chính sách bảo mật** và
**Hướng dẫn xóa tài khoản** cho ứng dụng AvesOS. Dùng để điền vào các trường bắt buộc khi submit
app lên App Store và Google Play.

Song ngữ Việt / Anh, tự nhận theo ngôn ngữ trình duyệt, có nút chuyển VI/EN, hỗ trợ sáng/tối và
in ra PDF.

## Chạy local

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # xuất tĩnh vào dist/
npm run preview  # xem thử bản build
```

## URL để điền vào store

| Trường trên store | Đường dẫn |
| --- | --- |
| Privacy Policy URL (App Store + Play Console) | `/privacy` |
| Terms of Use / EULA URL (App Store) | `/terms` |
| Account deletion URL (Play Console — **bắt buộc**) | `/delete-account` |

Các đường dẫn khác cũng được chuyển hướng sẵn: `/privacy-policy`, `/terms-of-service`,
`/data-deletion`, `/chinh-sach-bao-mat`, `/dieu-khoan`, `/xoa-tai-khoan`.

Thêm `?lang=en` hoặc `?lang=vi` vào URL để mở đúng ngôn ngữ, ví dụ `https://…/privacy?lang=en` —
hữu ích khi cần nộp bản tiếng Anh cho Apple.

## Cần sửa trước khi submit

Mở [src/content/appInfo.ts](src/content/appInfo.ts) và cập nhật:

- `supportEmail`, `privacyEmail` — email thật, phải có người đọc và trả lời trong 30 ngày
- `address` / `addressVi` — địa chỉ đăng ký kinh doanh (hiện để trống)
- `websiteUrl` — trang chủ công ty
- `effectiveDate`, `lastUpdated` — ngày hiệu lực và ngày cập nhật
- `appVersion` — phiên bản app tương ứng với tài liệu

Sửa một chỗ này, cả 6 tài liệu (3 trang × 2 ngôn ngữ) tự cập nhật theo.

## Sửa nội dung pháp lý

Mỗi tài liệu là một mảng `sections`, mỗi section gồm các block:

```ts
{ kind: 'p', text: '…' }                                   // đoạn văn
{ kind: 'list', items: ['…', '…'] }                        // danh sách gạch đầu dòng
{ kind: 'table', head: ['…'], rows: [['…']] }              // bảng
{ kind: 'callout', tone: 'info' | 'warning', title, text } // khung nhấn mạnh
```

Files:

- [src/content/privacy.vi.ts](src/content/privacy.vi.ts) · [privacy.en.ts](src/content/privacy.en.ts)
- [src/content/terms.vi.ts](src/content/terms.vi.ts) · [terms.en.ts](src/content/terms.en.ts)
- [src/content/deletion.ts](src/content/deletion.ts) — cả hai ngôn ngữ trong một file
- [src/content/index.ts](src/content/index.ts) — chuỗi giao diện (nav, nhãn, nút)

Mục lục bên trái sinh tự động từ `title` và `id` của từng section, không cần sửa tay.

## Deploy

Bản build là file tĩnh trong `dist/`. Vì app dùng client-side routing, hosting phải rewrite mọi
đường dẫn về `index.html` — nếu không, mở trực tiếp `/privacy` sẽ ra 404.

**Vercel** — đã có [vercel.json](vercel.json):

```bash
npx vercel --prod
```

**Netlify / Cloudflare Pages** — đã có [public/_redirects](public/_redirects). Build command
`npm run build`, publish directory `dist`.

**Nginx** tự host:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**GitHub Pages** không hỗ trợ rewrite. Nếu buộc phải dùng, đổi `BrowserRouter` sang `HashRouter`
trong [src/main.tsx](src/main.tsx); URL sẽ thành dạng `/#/privacy`.

## Lưu ý

Nội dung được soạn dựa trên quyền và tính năng thực tế của app: Bluetooth, GPS, camera, micro,
thông báo, sinh trắc học, chia sẻ gia đình, Firebase. Nếu app thêm hoặc bỏ tính năng, hãy cập nhật
lại bảng dữ liệu và bảng quyền cho khớp — cả Apple và Google đều đối chiếu chính sách với quyền
khai báo trong bản build.

Đây không phải tư vấn pháp lý. Nên để luật sư soát lại trước khi công bố chính thức.
