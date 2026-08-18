# Membangun Landing Page Toko Sembako: Studi Kasus Berkah Jaya dengan HTML & CSS Murni

Bikin website toko kelontong yang responsif dan kelihatan modern ternyata nggak selalu butuh framework berat, kadang HTML dan CSS murni udah lebih dari cukup.

[SCREENSHOT HASIL AKHIR DI SINI - Masukkan screenshot halaman utuh atau bagian Hero]

Belakangan ini banyak banget UMKM atau toko sembako lokal yang mulai sadar pentingnya punya presensi digital. Masalahnya, mereka sering mikir bikin website itu pasti mahal dan harus pakai teknologi ribet. Padahal untuk sekadar landing page profil toko, pendekatan yang paling simpel justru yang paling efektif.

Di project pertama magang Udacoding Batch 21 ini, saya mutusin buat ngebangun landing page "Toko Sembako Berkah Jaya". Tujuannya sederhana: bikin website yang ringan, gampang diakses dari HP ibu-ibu komplek, tapi tetep punya sentuhan premium. Makanya saya milih balik ke basic pakai HTML5 dan CSS3 murni tanpa campur tangan framework kayak Bootstrap atau Tailwind.

Ini beberapa bagian teknis yang saya kerjain di project ini.

### 1. Layout Mobile-First pakai CSS Grid dan Flexbox

Bikin web statis kerasa jadul kalau nggak responsif. Saya mulai styling dari ukuran layar paling kecil (mobile), baru pelan-pelan disesuaikan ke tablet dan desktop. Flexbox kepake banget buat ngatur navbar sama posisi icon, sedangkan CSS Grid jadi andalan buat nyusun card produk dan galeri foto biar rapi.

```css
.produk-grid {
  display: grid;
  gap: 24px;
}

/* Breakpoint untuk tablet ke atas */
@media (min-width: 480px) {
  .produk-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .produk-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

Pendekatan mobile-first ini ngebantu banget ngurangin kode CSS yang mubazir. Load halaman juga berasa lebih cepet karena browser nggak perlu banyak mikir buat ngerender layout dasar di HP.

### 2. Animasi Scroll dengan Intersection Observer

Biar webnya nggak kaku amat, saya tambahin efek fade-in dan blur waktu user scroll ke bawah. Alih-alih pakai library eksternal yang bikin berat, saya manfaatin Intersection Observer bawaan JavaScript.

```javascript
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
```

Menurut saya ini fitur yang ngasih impact gede banget ke user experience (UX). Halaman statis biasa langsung berasa lebih hidup dan ngasih kesan "mahal" cuma modal beberapa baris JS dan transisi CSS.

### 3. Validasi Form Kontak Native

Bagian form kontak sering jadi PR sendiri. Daripada nambahin script validasi yang panjang, saya optimalin HTML5 form validation.

```html
<input type="email" id="email" name="email" required
  pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}">
```

Cara ini efektif banget buat ngeblok input abal-abal langsung dari browser sebelum datanya diproses lebih jauh. Simpel, tapi ngeberesin masalah validasi dasar tanpa bikin pusing.

### Kesimpulan

Ngerjain Task 1 ini nyadarin saya kalau pondasi dasar web (HTML/CSS/JS murni) itu kuat banget kalau kita tahu cara maksimalkannya. Nggak semua project butuh React atau Tailwind. Terkadang kembali ke basic justru ngasih performa dan kontrol yang lebih baik untuk use case yang tepat.

Gimana menurut kalian soal penggunaan CSS murni di tahun 2026? Masih relevan atau mending langsung pakai framework? Drop pendapat kalian di kolom komentar ya!

**Ridho Dwi Syahputra**
Web Developer Intern - Udacoding Batch 21
GitHub Repo: [ISI DENGAN LINK GITHUB KAMU]
