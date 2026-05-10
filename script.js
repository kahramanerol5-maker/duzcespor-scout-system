// Sayfa yüklendiğinde konsola bilgi ver (Ödevin JS şartını sağlamak için)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Düzcespor Scouting Sistemi Aktif!");
    
    // Eğer analiz sayfasındaysak özel bir karşılama yapalım
    if(window.location.pathname.includes('analiz.html')) {
        console.log("Analiz paneline giriş yapıldı.");
    }
});
document.getElementById('scoutForm')?.addEventListener('submit', function(e) {
    e.preventDefault(); // Sayfanın yenilenmesini engeller
    
    const name = document.getElementById('playerName').value;
    const messageBox = document.getElementById('formMessage');
    
    messageBox.innerText = `Teşekkürler! ${name} için öneriniz sisteme kaydedildi.`;
    
    // Formu temizle
    this.reset();
});
// Canlı Maç Verilerini Çeken Fonksiyon
async function getLiveMatches() {
    const liveContainer = document.getElementById('live-matches');
    if(!liveContainer) return;

    // Gerçek API çağrısı simülasyonu
    const matches = [
        { team1: "Düzcespor", team2: "Isparta 32", score: "2 - 1", minute: "74'", event: "Gol: Ahmet (62')" },
        { team1: "Fenerbahçe", team2: "Galatasaray", score: "0 - 0", minute: "12'", event: "Sarı Kart: Fred" }
    ];

    liveContainer.innerHTML = matches.map(m => `
        <div class="live-match-card">
            <div class="match-meta"><span>${m.minute}</span> LIVE</div>
            <h4>${m.team1} vs ${m.team2}</h4>
            <div class="score">${m.score}</div>
            <p>${m.event}</p>
        </div>
    `).join('');
}

// Altyapı Oyuncu Verilerini Çeken Fonksiyon
function getAcademyPlayers() {
    const players = [
        { name: "Mert Yılmaz", age: 17, pos: "Orta Saha", rating: "88%" },
        { name: "Can Arslan", age: 18, pos: "Defans", rating: "82%" }
    ];
    // Buraya HTML'e basma kodları gelecek...
}

window.onload = () => { getLiveMatches(); getAcademyPlayers(); };