# Hướng dẫn dùng blog cá nhân

Blog này đã được chỉnh theo 3 chuyên mục chính:

- `Research`: ghi chép research về lỗ hổng, bug class, phân tích kỹ thuật.
- `CTF - Writeup`: writeup các bài pwn CTF.
- `Techniques`: các kỹ thuật pwn, ghi chú học tập, mẹo khai thác có thể tái sử dụng.

## 1. Tạo bài mới

Cách nhanh nhất:

```powershell
npm run new-post -- research/ten-bai-viet
```

Ví dụ:

```powershell
npm run new-post -- research/unsafe-unlink-notes
npm run new-post -- ctf/bksec-pwn01-writeup
npm run new-post -- techniques/fsop-basics
```

Sau khi chạy, file markdown sẽ được tạo trong:

```text
src/content/posts/...
```

## 2. Frontmatter cần điền

Ví dụ cho bài `Research`:

```yaml
---
title: Unsafe Unlink Notes
published: 2026-07-06
updated:
description: "Research notes about unsafe unlink and heap metadata corruption."
cover: ""
category:
  - Research
  - Heap
tags:
  - Heap
  - Linux
draft: false
lang: ""
---
```

Ví dụ cho bài `CTF - Writeup`:

```yaml
---
title: BKSEC Pwn01 Writeup
published: 2026-07-06
updated:
description: "A heap exploitation writeup for BKSEC."
cover: ""
category:
  - CTF - Writeup
  - Heap
tags:
  - CTF
  - Heap
  - Linux
draft: false
lang: ""
---
```

Ví dụ cho bài `Techniques`:

```yaml
---
title: FSOP Basics
published: 2026-07-06
updated:
description: "Reusable notes for file structure oriented programming."
cover: ""
category:
  - Techniques
  - Fmtstr
tags:
  - Fmtstr
  - Linux
draft: false
lang: ""
---
```

## 3. Category đang dùng

Category cấp 1 nên dùng đúng 1 trong 3 giá trị sau:

- `Research`
- `CTF - Writeup`
- `Techniques`

Category cấp 2 là tùy chọn. Bạn có thể dùng nó để chia nhỏ theo nội dung:

- `Heap`
- `Fmtstr`
- `Bof`
- `Kernel`
- `Windows`
- `Linux`

Ví dụ:

```yaml
category:
  - Techniques
  - Kernel
```

## 4. Tag đang dùng

Tag hiện tại đã cấu hình sẵn:

- `CTF`
- `Heap`
- `Fmtstr`
- `Bof`
- `Kernel`
- `Windows`
- `Linux`

Bạn có thể gán nhiều tag cho một bài:

```yaml
tags:
  - CTF
  - Heap
  - Linux
```

## 5. Cách thêm tag mới

Mở file:

```text
src/constants/blog-taxonomy.ts
```

Sửa mảng `DEFAULT_POST_TAGS`, ví dụ:

```ts
export const DEFAULT_POST_TAGS = [
  "CTF",
  "Heap",
  "Fmtstr",
  "Bof",
  "Kernel",
  "Windows",
  "Linux",
  "ROP",
];
```

Sau đó bạn có thể dùng tag mới ngay trong frontmatter của bài viết.

## 6. Cách thêm category phụ mới

Bạn không cần sửa code nếu chỉ muốn thêm category cấp 2 mới vào bài viết.

Ví dụ:

```yaml
category:
  - Research
  - ROP
```

Category mới sẽ tự xuất hiện trong sidebar sau khi có bài dùng nó.

## 7. Archive hoạt động thế nào

Trang `Archive` tự động lấy toàn bộ bài published trong:

```text
src/content/posts/
```

Miễn là bài có:

```yaml
draft: false
```

thì nó sẽ xuất hiện ở:

- Trang chủ
- `Archive`
- `Research`, `CTF - Writeup`, hoặc `Techniques`
- Category sidebar
- Tag sidebar

## 8. Timeline chỉnh ở đâu

Trang `Timeline` hiện đang là placeholder để tránh hiện dữ liệu demo của template.

Sau này bạn sửa tại:

```text
src/content/timeline/
```

Mỗi mốc là một file JSON riêng.

## 9. About chỉnh ở đâu

Phần giới thiệu cá nhân nằm ở:

```text
src/content/about.md
```

## 10. Những file bạn sẽ hay dùng nhất

- `src/content/about.md`: thông tin cá nhân.
- `src/content/posts/`: toàn bộ bài blog.
- `src/content/timeline/`: dữ liệu timeline.
- `src/constants/blog-taxonomy.ts`: tag mặc định và 3 section chính.
- `twilight.config.yaml`: menu, profile, banner, sidebar.

## 11. Chạy thử local

```powershell
npm run dev
```

Build production:

```powershell
npm run build
```

## 12. Một lưu ý nên chỉnh trước khi deploy

Trong file `twilight.config.yaml`, trường sau vẫn đang là URL template:

```yaml
siteURL: "https://twilight.spr-aachen.com/"
```

Khi có domain thật của bạn, hãy đổi dòng đó sang domain blog của bạn.
