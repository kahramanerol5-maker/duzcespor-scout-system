/* GENEL AYARLAR */
* { margin: 0; padding: 0; box-sizing: border-box; }
body { background: #050505; color: #fff; font-family: 'Poppins', sans-serif; overflow-x: hidden; }

/* NAVBAR (HEM PC HEM MOBİL UYUMLU) */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 5%;
    background: #000;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    border-bottom: 1px solid #1a1a1a;
}

.logo { font-family: 'Bebas Neue'; font-size: 1.5rem; color: #fff; }
.logo span { color: #ed1c24; }
.nav-links { display: flex; gap: 20px; list-style: none; }
.nav-links a { color: #fff; text-decoration: none; font-size: 0.9rem; font-weight: 600; transition: 0.3s; }
.nav-links a:hover, .nav-links a.active { color: #ed1c24; }

/* ANA YAPI (GRID'DEN FLEX'E DÖNDÜK - DAHA SAĞLAM) */
.live-wrapper, .lab-container {
    display: flex;
    flex-direction: row; /* PC'de yan yana */
    margin-top: 70px;
    height: calc(100vh - 70px);
}

.side-panel { width: 350px; background: #0e0e0e; border-right: 1px solid #1a1a1a; padding: 20px; }
.main-radar-zone, .analysis-room { flex: 1; position: relative; display: flex; align-items: center; justify-content: center; }
.log-panel { width: 350px; background: #000; border-left: 1px solid #1a1a1a; padding: 20px; }

/* --- TELEFON İÇİN KRİTİK AYARLAR --- */
@media screen and (max-width: 992px) {
    .navbar { flex-direction: column; height: auto; gap: 10px; }
    .nav-links { gap: 10px; }
    .nav-links a { font-size: 0.75rem; }

    .live-wrapper, .lab-container {
        flex-direction: column !important; /* TELEFONDA ALT ALTA ZORLA */
        height: auto !important;
        margin-top: 110px;
    }

    .side-panel, .log-panel, .main-radar-zone, .analysis-room {
        width: 100% !important;
        height: auto !important;
        min-height: 300px;
        border: none;
        border-bottom: 1px solid #1a1a1a;
    }

    .global-title { font-size: 2rem !important; }
    
    .scout-lab-box {
        position: relative !important;
        left: 0 !important;
        bottom: 0 !important;
        width: 100% !important;
        margin: 20px 0;
    }
}
