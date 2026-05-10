:root {
    /* Karanlık Mod Değerleri (Varsayılan) */
    --bg-color: #0a0a0a;
    --card-bg: rgba(255, 255, 255, 0.05);
    --text-color: #ffffff;
    --nav-bg: rgba(0, 0, 0, 0.9);
    --primary: #ed1c24;
}

/* Aydınlık Mod Değerleri */
[data-theme="light"] {
    --bg-color: #f4f4f4;
    --card-bg: #ffffff;
    --text-color: #1a1a1a;
    --nav-bg: #ffffff;
}

body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: 0.3s; /* Geçiş yumuşak olsun */
}

/* Tüm kartların ve yazıların renklerini değişken yapıyoruz */
.player-card, .stat-card, .settings-container, .match-card {
    background: var(--card-bg) !important;
    color: var(--text-color) !important;
}

.navbar {
    background: var(--nav-bg) !important;
}
:root {
    --primary: #ed1c24; /* Düzcespor Kırmızısı */
    --secondary: #003366; /* Düzcespor Laciverti */
    --dark: #0a0a0b;
    --glass: rgba(255, 255, 255, 0.05);
}
/* Arka Plandaki Büyük Logo (Watermark) */
.bg-logo-watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.1; /* Çok hafif gözükecek şekilde ayarlı */
    width: 600px;
    z-index: 0;
    pointer-events: none; /* Kartlara tıklamayı engellememesi için */
}

.bg-logo-watermark img {
    width: 100%;
    filter: grayscale(100%) brightness(2);
}

/* Küçük Kartlar Tasarımı (Grid System) */
/* --- ANA SAYFA KART DÜZENİ (4+2) --- */

/* --- ANA SAYFA KART DÜZENİ (Gelişmiş 4+2) --- */

/* --- GELİŞMİŞ 4+2 DASHBOARD DÜZENİ --- */

/* --- STANDART 4+2 KUTU DÜZENİ --- */

/* KART DÜZENİ: Birebir Aynı Ölçüler */
/* Ana Başlık ve Hero Konumlandırma */
.hero-content h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4.5rem;
    line-height: 1.1;
    margin-top: 120px; /* Yazıyı yukarıdan aşağı çektik */
    margin-bottom: 40px;
    z-index: 5;
    position: relative;
}

/* KART DÜZENİ: Tam Ortalanmış 4+2 */
/* KART DÜZENİ: Tam Ortalanmış 4+2 */
.feature-grid {
    display: flex;
    flex-wrap: wrap; /* Sığmayan kartlar alt satıra geçsin */
    justify-content: center; /* Kartların hepsini yatayda ortala */
    gap: 25px;
    margin-top: 50px;
    max-width: 1250px; /* 4 kartın toplam genişliği civarı */
    margin-left: auto;
    margin-right: auto;
}

.stat-card {
    width: 280px; 
    height: 340px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    overflow: hidden;
    text-decoration: none;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s ease;
    display: flex;
    flex-direction: column;
}

/* Kart resimleri ve yazıları aynı kalsın */
.card-img {
    height: 180px;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-bottom: 4px solid #ed1c24;
}

.card-info {
    padding: 20px;
    text-align: center;
}

.stat-card:hover {
    transform: translateY(-10px);
    border-color: #ed1c24;
    box-shadow: 0 15px 30px rgba(237, 28, 36, 0.3);
}

.card-img {
    height: 180px;
    width: 100%;
    display: block;
    min-height: 180px;
    background-size: cover;
    background-position: center;
    border-bottom: 4px solid #ed1c24;
}

.card-info {
    padding: 20px;
    text-align: center;
}

.card-info h3 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 1.5rem;
    color: white;
}

/* Mobil Uyum İçin */
@media (max-width: 768px) {
    .feature-grid {
        grid-template-columns: 1fr;
    }
    .hero-content h1 {
        font-size: 3rem;
    }
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: var(--dark);
    color: white;
    overflow-x: hidden;
}

/* Navbar: Cam Efekti */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem 8%;
    background: rgba(10, 10, 11, 0.8);
    backdrop-filter: blur(10px);
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Logo ve Yazı Hizalaması */
.logo {
    display: flex;
    align-items: center;
    gap: 10px; /* Logo ile yazı arasındaki boşluk */
    font-family: 'Bebas Neue', sans-serif;
    font-size: 2rem;
    letter-spacing: 2px;
}

.logo-img {
    height: 45px; /* Logonun boyutu */
    width: auto;
    object-fit: contain;
    /* İsteğe bağlı: Logoya hafif bir parlama efekti verir */
    filter: drop-shadow(0 0 5px rgba(237, 28, 36, 0.5)); 
}
.logo span { color: var(--primary); }

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li { margin: 0 1.5rem; }

.nav-links a {
    text-decoration: none;
    color: #ccc;
    font-weight: 600;
    font-size: 0.9rem;
    transition: 0.3s;
}

.nav-links a:hover, .nav-links a.active {
    color: var(--primary);
}

.nav-btn {
    background: transparent;
    border: 1px solid var(--primary);
    color: white;
    padding: 0.6rem 1.2rem;
    text-decoration: none;
    border-radius: 5px;
    font-size: 0.8rem;
    transition: 0.3s;
}

.nav-btn:hover { background: var(--primary); }

/* Hero Bölümü: Dinamik ve Şık */
/* Hero Bölümü: Düzcespor Atmosferi */
/* Ana Ekran Düzeni Ayarı */
.hero {
    min-height: 120vh; /* İçerik sığsın diye yüksekliği esnettik */
    display: flex;
    flex-direction: column; /* İçerikleri dikey sırala */
    align-items: center;
    padding-top: 100px; /* Yazıları ve kartları navbar'dan aşağı ittik */
    background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)), 
                url('resimler/duzcespora-kayyim-mi-atanacak-duzcespora-neden_2e086c686c_amp.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    position: relative;
}
.hero-overlay {
    position: absolute;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    /* Görselin üzerine hafif karanlık bir katman atıyoruz ki yazılar okunsun */
    background: linear-gradient(to right, rgba(0,0,0,0.85), rgba(0,0,0,0.3));
}

.hero-content {
    width: 100%;
    max-width: 1200px;
    z-index: 2;
    text-align: center;
}

.badge {
    background: var(--primary);
    padding: 5px 15px;
    font-size: 0.7rem;
    font-weight: bold;
    border-radius: 50px;
    letter-spacing: 1px;
}

.hero-content h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 5rem;
    line-height: 1;
    margin: 1.5rem 0;
}

.highlight { color: var(--primary); text-shadow: 0 0 20px rgba(237, 28, 36, 0.5); }

.hero-content p {
    color: #bbb;
    font-size: 1.1rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
}

/* Buton Tasarımları */
.hero-btns { display: flex; gap: 1.5rem; }

.main-btn {
    background: var(--primary);
    color: white;
    padding: 1rem 2.5rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0 10px 20px rgba(237, 28, 36, 0.3);
    transition: 0.3s;
}

.secondary-btn {
    background: var(--glass);
    color: white;
    padding: 1rem 2.5rem;
    text-decoration: none;
    font-weight: bold;
    border-radius: 5px;
    border: 1px solid rgba(255,255,255,0.1);
    transition: 0.3s;
}

.main-btn:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(237, 28, 36, 0.5); }
.secondary-btn:hover { background: rgba(255,255,255,0.1); }
.form-container {
    padding: 120px 8% 50px;
    display: flex;
    justify-content: center;
}

.form-box {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    max-width: 600px;
}

.form-box h2 {
    font-family: 'Bebas Neue', sans-serif;
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 10px;
}

.input-group {
    margin-bottom: 20px;
    text-align: left;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-size: 0.9rem;
    color: #ccc;
}

.input-group input, .input-group select, .input-group textarea {
    width: 100%;
    padding: 12px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    color: white;
    outline: none;
}

.input-group input:focus {
    border-color: var(--primary);
}

.success-message {
    margin-top: 20px;
    color: #4caf50;
    font-weight: bold;
}
/* Genel İçerik Ayarları */
.content-section { padding: 120px 5% 50px; text-align: center; }
.section-title { font-family: 'Bebas Neue', sans-serif; font-size: 3rem; color: #ed1c24; margin-bottom: 40px; }

/* Altyapı Kartları */
.academy-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
.player-mini-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; backdrop-filter: blur(10px); }
.player-header { display: flex; align-items: center; gap: 15px; margin-bottom: 15px; }
.player-header img { border-radius: 50%; border: 2px solid #ed1c24; }

/* Canlı Takip */
.live-match-box { background: rgba(0,0,0,0.4); padding: 30px; border-radius: 20px; border-left: 5px solid #ed1c24; }
.live-badge { background: #ed1c24; padding: 5px 10px; border-radius: 5px; animation: blink 1s infinite; }
@keyframes blink { 50% { opacity: 0; } }

/* Form Tasarımı */
.glass-form-container { background: rgba(255,255,255,0.05); padding: 40px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); max-width: 800px; margin: 0 auto; }
.form-row { display: flex; gap: 15px; margin-bottom: 15px; }
input, select, textarea { width: 100%; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.2); padding: 12px; color: white; border-radius: 8px; }
.submit-btn { background: #ed1c24; color: white; border: none; padding: 15px 30px; border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%; transition: 0.3s; }
.submit-btn:hover { background: white; color: #ed1c24; }
/* Öneri Sayfası Genel Alanı */
.oneri-container {
    min-height: 100vh;
    padding-top: 150px; /* NAVBARIN ALTINDA KALMASINI ENGELLER */
    display: flex;
    justify-content: center;
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://pbs.twimg.com/media/FmP0z9pXoAA-W_j?format=jpg&name=large');
    background-size: cover;
    background-attachment: fixed;
}

.oneri-box {
    width: 90%;
    max-width: 800px;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    padding: 40px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
}

.oneri-box h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 3.5rem;
    color: white;
    margin: 15px 0;
}

.modern-form {
    margin-top: 30px;
    text-align: left;
}

.form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.input-group {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.input-group label {
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 8px;
    font-size: 0.9rem;
}

.input-group input, .input-group select, .input-group textarea {
    background: rgba(0,0,0,0.4);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 12px;
    color: white;
    border-radius: 8px;
    outline: none;
}

.input-group input:focus {
    border-color: var(--primary);
}
/* İletişim Sayfası Stilleri */
.contact-page {
    padding: 150px 8% 50px; /* Navbar'ın altına girmesini engeller */
    text-align: center;
}

.contact-header h1 {
    font-family: 'Bebas Neue', sans-serif;
    font-size: 4rem;
    margin-bottom: 10px;
}

.contact-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 50px;
}

.contact-info {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.info-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    padding: 30px;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: 0.3s;
}

.info-card:hover {
    border-color: #ed1c24;
    transform: translateY(-5px);
}

.info-card i {
    font-size: 2.5rem;
    color: #ed1c24;
    margin-bottom: 15px;
}

.info-card h3 {
    margin-bottom: 10px;
    font-family: 'Bebas Neue', sans-serif;
}

.map-container {
    padding: 10px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
.map-container iframe {
    filter: grayscale(100%) invert(90%) contrast(90%); /* Haritayı karanlık temaya uydurur */
    transition: 0.5s ease;
}

.map-container iframe:hover {
    filter: grayscale(0%) invert(0%) contrast(100%); /* Üstüne gelince gerçek renkler çıkar */
}
/* Raporlar Sayfası Tasarımı */
.raporlar-page { padding: 150px 8% 50px; }

.stats-overview {
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 50px;
}

.mini-stat {
    background: rgba(237, 28, 36, 0.1);
    border: 1px solid var(--primary);
    padding: 20px 40px;
    border-radius: 10px;
    text-align: center;
}

.mini-stat h4 { font-size: 2rem; color: var(--primary); }

.reports-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.report-item {
    background: rgba(255,255,255,0.05);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.1);
    transition: 0.3s;
}

.report-item:hover { transform: translateY(-10px); border-color: var(--primary); }

.report-img { height: 200px; background-size: cover; background-position: center; }

.report-img {
    height: 300px; /* Görselin tam okunması için yüksekliği biraz artır */
    width: 100%;
    /* RESMİ SIĞDIRMA AYARI: */
    background-size: contain; /* Resmin tamamını kutunun içine sığdırır, kesmez */
    background-repeat: no-repeat; /* Resmin tekrarlanmasını engeller */
    background-position: center; /* Resmi tam ortalar */
    background-color: #000; /* Boş kalan yerleri siyahla doldurur ki şık dursun */
    display: block;
}

.report-body { padding: 25px; text-align: left; }

.report-tag {
    background: var(--primary);
    padding: 4px 10px;
    border-radius: 5px;
    font-size: 0.7rem;
    font-weight: bold;
}

.report-tag.yellow { background: #f1c40f; color: black; }
.report-tag.green { background: #2ecc71; }
.report-tag.purple { background: #8e44ad; color: white; } /* Gizli Cevherler için mor renk */

.report-body h3 { margin: 15px 0 10px; font-family: 'Bebas Neue', sans-serif; }

.report-footer {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 15px;
}

.download-btn {
    color: white;
    text-decoration: none;
    background: #333;
    padding: 5px 15px;
    border-radius: 5px;
    font-size: 0.8rem;
}
/* Oyuncu Havuzu Stilleri */
.havuz-page { padding: 150px 5% 50px; }

.filter-bar {
    display: flex;
    gap: 15px;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 30px;
    align-items: center;
}

.player-table-container {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 15px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.player-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
}

.player-table th, .player-table td {
    padding: 15px 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.player-table th {
    background: rgba(237, 28, 36, 0.1);
    color: var(--primary);
    font-family: 'Bebas Neue', sans-serif;
    letter-spacing: 1px;
}

.player-cell {
    display: flex;
    align-items: center;
    gap: 10px;
}

.value {
    font-weight: bold;
    color: #2ecc71; /* Para değerlerini yeşil yapalım */
}

.view-btn {
    color: white;
    text-decoration: none;
    background: rgba(255, 255, 255, 0.1);
    padding: 5px 12px;
    border-radius: 5px;
    font-size: 0.8rem;
    transition: 0.3s;
}

.view-btn:hover { background: var(--primary); }
.havuz-header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.05);
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    border-left: 5px solid var(--primary);
}

.havuz-header-actions p {
    font-style: italic;
    color: #ccc;
}
.poll-special-card {
    position: relative;
    background: linear-gradient(135deg, rgba(237, 28, 36, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%) !important;
    border: 1px solid rgba(237, 28, 36, 0.3) !important;
    overflow: hidden;
}

.live-pulse-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 0.65rem;
    font-weight: 800;
    color: #ed1c24;
    display: flex;
    align-items: center;
    gap: 6px;
    background: rgba(0, 0, 0, 0.5);
    padding: 4px 10px;
    border-radius: 20px;
}

.pulse-dot {
    width: 8px;
    height: 8px;
    background: #ed1c24;
    border-radius: 50%;
    animation: pulseIcon 1.5s infinite;
}

@keyframes pulseIcon {
    0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(237, 28, 36, 0.7); }
    70% { transform: scale(1.2); box-shadow: 0 0 0 10px rgba(237, 28, 36, 0); }
    100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(237, 28, 36, 0); }
}

.mini-poll-stats {
    margin-top: 15px;
    text-align: left;
}

.poll-labels {
    display: flex;
    justify-content: space-between;
    font-size: 0.7rem;
    color: #888;
    margin-bottom: 5px;
}

.mini-bar-bg {
    width: 100%;
    height: 4px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
}

.mini-bar-fill {
    width: 65%; /* Dümenden doluluk oranı */
    height: 100%;
    background: #ed1c24;
    border-radius: 2px;
}
/* Scout Oylaması Premium Kartı */
.scout-poll-premium {
    position: relative;
    background: linear-gradient(145deg, #111111 0%, #050505 100%) !important;
    border: 1px solid rgba(237, 28, 36, 0.2) !important;
    display: flex;
    flex-direction: column;
    padding: 0 !important; /* Alt bar için padding'i sıfırladık */
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
}

.scout-poll-premium:hover {
    border-color: #ed1c24 !important;
    box-shadow: 0 10px 40px rgba(237, 28, 36, 0.15) !important;
}

.card-body-layout {
    padding: 25px;
    display: flex;
    gap: 20px;
    align-items: center;
}

.card-icon-main {
    font-size: 2.5rem;
    color: #ed1c24;
    text-shadow: 0 0 15px rgba(237, 28, 36, 0.4);
}

.poll-status {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 0.6rem;
    font-weight: 900;
    letter-spacing: 1px;
    background: rgba(237, 28, 36, 0.1);
    color: #ed1c24;
    padding: 4px 10px;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.live-blink {
    width: 6px;
    height: 6px;
    background: #ed1c24;
    border-radius: 50%;
    animation: blinker 1s infinite alternate;
}

@keyframes blinker { from { opacity: 1; } to { opacity: 0.3; } }

/* Mini Avatar Grubu */
.scout-avatars {
    display: flex;
    align-items: center;
    margin-top: 15px;
}

.avatar-mini {
    width: 24px;
    height: 24px;
    background: #222;
    border: 1px solid #ed1c24;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.6rem;
    font-weight: bold;
    margin-left: -8px;
    color: #fff;
}
.avatar-mini:first-child { margin-left: 0; }

.avatar-plus {
    font-size: 0.7rem;
    color: #666;
    margin-left: 10px;
}

/* Alt Aksiyon Barı */
.poll-action-footer {
    background: rgba(237, 28, 36, 0.05);
    padding: 12px 25px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.75rem;
    font-weight: bold;
    color: #ed1c24;
    border-top: 1px solid rgba(255, 255, 255, 0.03);
    transition: 0.3s;
}

.scout-poll-premium:hover .poll-action-footer {
    background: #ed1c24;
    color: #fff;
}
/* --- MOBİL UYUMLULUK (RESPONSIVE) AYARLARI --- */

@media (max-width: 992px) {
    /* Tablet ve Telefonlar için genel padding'i azalt */
    main, .pool-container, .transfer-container, .container {
        padding: 120px 5% 40px !important;
    }
    
    .poll-layout, .transfer-grid, .container {
        grid-template-columns: 1fr !important; /* Yan yana olan her şeyi alt alta getir */
    }
}

@media (max-width: 768px) {
    /* Navbar'ı sadeleştir */
    .nav-links {
        display: none; /* Mobilde burger menü yapmadıysan şimdilik gizlemek en temizi */
    }
    
    .logo {
        font-size: 1.5rem;
        width: 100%;
        text-align: center;
    }

    /* Başlıkları küçült */
    h1 { font-size: 2.5rem !important; }
    .header-title { font-size: 3rem !important; }

    /* Tabloları yatayda kaydırılabilir yap (Ekranı bozmasın) */
    .table-wrapper, .table-box {
        overflow-x: auto;
    }
    
    .pool-table, .transfer-table {
        min-width: 600px; /* Tablonun içindekiler çok sıkışmasın */
    }

    /* Form Grid'i tek sütuna düşür (image_8.png stilindeki pop-up için) */
    .form-grid {
        grid-template-columns: 1fr !important;
        gap: 15px;
    }

    /* Ana sayfadaki kartlar alt alta */
    .stats-container {
        grid-template-columns: 1fr !important;
    }
    
    .action-banner, .suggest-action-box {
        flex-direction: column;
        text-align: center;
        gap: 20px;
    }
}

/* Telefonlar için ince ayar */
@media (max-width: 480px) {
    .form-modal {
        padding: 30px 20px !important;
        width: 90%;
    }
    
    .save-btn, .suggest-btn {
        font-size: 0.7rem !important;
        padding: 12px !important;
    }
}
.live-stream-container {
    background: #0a0a0a;
    border: 1px solid #1a1a1a;
    border-radius: 15px;
    height: 350px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.stream-header {
    background: #111;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #222;
}

.live-tag {
    color: #ed1c24;
    font-weight: bold;
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    gap: 8px;
}

.dot {
    width: 8px;
    height: 8px;
    background: #ed1c24;
    border-radius: 50%;
    animation: pulse 1s infinite alternate;
}

.stream-content {
    flex-grow: 1;
    padding: 20px;
    overflow-y: auto;
    font-family: 'Courier New', Courier, monospace; /* Terminal havası verir */
    font-size: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.log-entry {
    color: #888;
    border-left: 2px solid #333;
    padding-left: 10px;
    animation: slideIn 0.3s ease-out;
}

.log-entry.important { color: #fff; border-left-color: #ed1c24; }

@keyframes slideIn { from { opacity: 0; transform: translateX(-10px); } }
/* --- MOBİL İÇİN JİLET GİBİ AYARLAR --- */

@media (max-width: 992px) {
    /* Canlı Takip ve Lab sayfalarındaki 3'lü yapıyı iptal et, alt alta diz */
    .live-wrapper, .lab-container {
        display: flex !important;
        flex-direction: column !important;
        height: auto !important; /* Ekranın taşmasına izin ver */
        overflow-y: auto !important;
        padding-top: 100px !important;
    }

    /* Panellerin genişliğini %100 yap */
    .side-panel, .log-panel, .dna-selector, .main-radar-zone, .analysis-room {
        width: 100% !important;
        height: auto !important;
        border: none !important;
        border-bottom: 1px solid #222 !important;
        padding: 20px !important;
    }

    /* Ortadaki radarın ve lab çerçevesinin boyutunu ayarla */
    .biometric-frame {
        width: 95% !important;
        flex-direction: column !important; /* Lab içindeki resmi ve istatistikleri alt alta al */
        height: auto !important;
        padding: 20px !important;
    }

    .subject-image-zone {
        width: 100% !important;
        height: 250px !important;
        margin-bottom: 20px;
    }

    /* Yazıları mobilde biraz küçült ki taşmasın */
    .global-title { font-size: 2.5rem !important; }
    #subjectName { font-size: 2rem !important; }
}

@media (max-width: 480px) {
    /* Navbar mobilde çok yer kaplamasın */
    .logo { font-size: 1.2rem !important; }
    .nav-links { gap: 10px !important; }
    .nav-links a { font-size: 0.7rem !important; }
    
    /* Scout Lab kutusunu mobilde sabitleme, normal akışa al */
    .scout-lab-box {
        position: relative !important;
        left: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        margin-top: 20px;
    }
}
