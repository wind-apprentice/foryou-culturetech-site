
## ForYou Culture & Tech（福語文化科技）公司網站

以 Next.js App Router + Tailwind CSS 建置，主題色：紅（#C8002A）、金（#C9A35A）、白（#FFFFFF）。字體使用 Inter（英文）與 Noto Sans TC（中文）。

### 安裝與啟動

```bash
npm install
npm run dev
```

瀏覽器開啟 http://localhost:3000

### 專案結構

```
app/
  layout.tsx          # 全域版型：字體、Navbar、Footer
  page.tsx            # 首頁
  about/page.tsx      # 關於我們
  products/page.tsx   # 產品與服務
  contact/page.tsx    # 聯絡我們
components/
  Navbar.tsx
  Footer.tsx
  HeroSection.tsx
  ProductCard.tsx
styles/
  globals.css         # Tailwind 與全域樣式
```

### 可替換區塊
- `components/HeroSection.tsx`：Hero 文案與 CTA。
- `components/ProductCard.tsx`：產品卡片（可替換為 next/image）。
- `app/contact/page.tsx`：表單 `action` 可替換為 Formspree 實際 endpoint。
- `tailwind.config.ts`：品牌色與字體設定。

### 佈景與設計
- 導覽列固定於頂部（`Navbar.tsx`）。
- 頁尾顯示公司資訊與 Email（`Footer.tsx`）。
- 響應式：使用容器與格線（`container-default`、`grid`）。

### 部署
可使用 Vercel 部署；本地建置請先 `npm run build` 後 `npm start`。


