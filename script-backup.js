// =====================================================
// 3-2-1 ORTAK FUTBOLCU
// NORMAL OYUN + GÜNLÜK CHALLENGE
// + İSTATİSTİKLER
// + FUTBOLCU ARŞİVİ
// =====================================================


// =====================================================
// DOM HAZIR OLDUĞUNDA BAŞLAT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {


// =====================================================
// TAKIMLAR
// =====================================================

const playableTeams = [

    "BESIKTAS",
    "FENERBAHCE",
    "GALATASARAY",
    "ISTANBUL BASAKSEHIR",
    "TRABZONSPOR",

    "PSG",
    "LILLE",
    "LYON",
    "MARSEILLE",

    "LIVERPOOL",
    "MANCHESTER CITY",
    "MANCHESTER UNITED",
    "TOTTENHAM",
    "CHELSEA",
    "ARSENAL",

    "BARCELONA",
    "REAL MADRID",
    "ATLETICO MADRID",

    "BAYERN MUNIH",
    "BORUSSIA DORTMUND",

    "INTER",
    "NAPOLI",
    "MILAN",
    "JUVENTUS",
    "ROMA",

    "PORTO",
    "SPORTING CP",
    "BENFICA"

];


// =====================================================
// LOGOLAR
// =====================================================

const teamLogos = {

    "BESIKTAS": "logos/besiktas.svg",
    "FENERBAHCE": "logos/fenerbahce.svg",
    "GALATASARAY": "logos/galatasaray.svg",
    "ISTANBUL BASAKSEHIR": "logos/istanbul-basaksehir.svg",
    "TRABZONSPOR": "logos/trabzonspor.svg",

    "PSG": "logos/psg.svg",
    "LILLE": "logos/lille.svg",
    "LYON": "logos/lyon.svg",
    "MARSEILLE": "logos/marseille.svg",

    "LIVERPOOL": "logos/liverpool.svg",
    "MANCHESTER CITY": "logos/manchester-city.svg",
    "MANCHESTER UNITED": "logos/manchester-united.svg",
    "TOTTENHAM": "logos/tottenham.svg",
    "CHELSEA": "logos/chelsea.svg",
    "ARSENAL": "logos/arsenal.svg",

    "BARCELONA": "logos/barcelona.svg",
    "REAL MADRID": "logos/real-madrid.svg",
    "ATLETICO MADRID": "logos/atletico-madrid.svg",

    "BAYERN MUNIH": "logos/bayern-munich.svg",
    "BORUSSIA DORTMUND": "logos/borussia-dortmund.svg",

    "INTER": "logos/inter.svg",
    "NAPOLI": "logos/napoli.svg",
    "MILAN": "logos/milan.svg",
    "JUVENTUS": "logos/juventus.svg",
    "ROMA": "logos/roma.svg",

    "PORTO": "logos/porto.svg",
    "SPORTING CP": "logos/sporting-cp.svg",
    "BENFICA": "logos/benfica.svg"

};


// =====================================================
// PLAYERPOOL KONTROLÜ
// =====================================================

if (
    typeof playerPool === "undefined" ||
    !playerPool ||
    typeof playerPool !== "object"
) {

    console.error(
        "playerPool bulunamadı. players.js script.js'den önce yüklenmeli."
    );

    alert(
        "Oyuncu verileri yüklenemedi. players.js dosyasının script.js'den önce yüklendiğinden emin ol."
    );

    return;

}


// =====================================================
// AKTİF TAKIMLAR
// =====================================================

const teams = playableTeams.filter(team => {

    return Object.values(playerPool).some(player => {

        return (
            player &&
            Array.isArray(player.teams) &&
            player.teams.includes(team)
        );

    });

});


// =====================================================
// ORTAK FUTBOLCULAR
// =====================================================

function findCommonPlayers(teamA, teamB) {

    const commonPlayers = [];

    for (const playerName in playerPool) {

        const playerData = playerPool[playerName];

        if (
            !playerData ||
            !Array.isArray(playerData.teams)
        ) {

            continue;

        }

        if (
            playerData.teams.includes(teamA) &&
            playerData.teams.includes(teamB)
        ) {

            commonPlayers.push(playerName);

        }

    }

    return commonPlayers;

}


// =====================================================
// GEÇERLİ EŞLEŞMELER
// =====================================================

const validTeamPairs = [];

for (let i = 0; i < teams.length; i++) {

    for (let j = i + 1; j < teams.length; j++) {

        const teamA = teams[i];
        const teamB = teams[j];

        const commonPlayers =
            findCommonPlayers(teamA, teamB);

        if (commonPlayers.length > 0) {

            validTeamPairs.push({

                teamA,
                teamB,
                players: commonPlayers

            });

        }

    }

}


// =====================================================
// HTML ELEMENTLERİ
// =====================================================

const startButton =
    document.getElementById("start-button");

const dailyChallengeButton =
    document.getElementById("daily-challenge-button");

let playerHistoryButton =
    document.getElementById("player-history-button");

let playerHistoryModal =
    document.getElementById("player-history-modal");

let closePlayerHistory =
    document.getElementById("close-player-history");

let playerHistoryList =
    document.getElementById("player-history-list");

let historyUniqueCount =
    document.getElementById("history-unique-count");

let historyTotalEntries =
    document.getElementById("history-total-entries");

let historyMostWritten =
    document.getElementById("history-most-written");

const homeHighScore =
    document.getElementById("home-high-score");

const homeGamesPlayed =
    document.getElementById("home-games-played");

const homeCorrectStreak =
    document.getElementById("home-correct-streak");

const homeDayStreak =
    document.getElementById("home-day-streak");

const dailyStatus =
    document.getElementById("daily-status");

const homeScreen =
    document.getElementById("home-screen");

const gameContent =
    document.getElementById("game-content");

const countdown =
    document.getElementById("countdown");

const vsText =
    document.getElementById("vs-text");

const team1 =
    document.getElementById("team1");

const team2 =
    document.getElementById("team2");

const team1Logo =
    document.getElementById("team1-logo");

const team2Logo =
    document.getElementById("team2-logo");

const team1Name =
    document.getElementById("team1-name");

const team2Name =
    document.getElementById("team2-name");

const answerInput =
    document.getElementById("answerInput");

const answerButton =
    document.getElementById("answerButton");

const scoreText =
    document.getElementById("score");

const result =
    document.getElementById("result");

const timerBar =
    document.getElementById("timer-bar");

const gameArea =
    document.querySelector(".game-area");

const answerArea =
    document.querySelector(".answer-area");

const timerContainer =
    document.querySelector(".timer-container");

const gameOver =
    document.getElementById("game-over");

const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");

const restartButton =
    document.getElementById("restart-button");

const questionNumberText =
    document.getElementById("question-number");

const playerSuggestions =
    document.getElementById("player-suggestions");

const gameModeTitle =
    document.getElementById("game-mode-title");

const gameOverTitle =
    document.getElementById("game-over-title");


// =====================================================
// İSTATİSTİK SİSTEMİ
// =====================================================

const STATS_STORAGE_KEY =
    "321_game_statistics_v2";


function getDefaultStats() {

    return {

        highScore: 0,

        gamesPlayed: 0,

        currentCorrectStreak: 0,

        bestCorrectStreak: 0,

        dayStreak: 0,

        lastPlayedDate: null,

        playerCounts: {}

    };

}


function loadStats() {

    try {

        const saved =
            localStorage.getItem(
                STATS_STORAGE_KEY
            );

        if (!saved) {

            return getDefaultStats();

        }

        const parsed =
            JSON.parse(saved);

        return {

            ...getDefaultStats(),

            ...parsed,

            playerCounts:
                parsed.playerCounts || {}

        };

    }
    catch (error) {

        console.error(
            "İstatistikler okunamadı:",
            error
        );

        return getDefaultStats();

    }

}


let stats = loadStats();


// =====================================================
// İSTATİSTİKLERİ KAYDET
// =====================================================

function saveStats() {

    try {

        localStorage.setItem(
            STATS_STORAGE_KEY,
            JSON.stringify(stats)
        );

    }
    catch (error) {

        console.error(
            "İstatistikler kaydedilemedi:",
            error
        );

    }

}


// =====================================================
// BUGÜNÜN TARİHİ
// =====================================================

function getTodayKey() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            now.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// =====================================================
// DÜNÜN TARİHİ
// =====================================================

function getYesterdayKey() {

    const date = new Date();

    date.setDate(
        date.getDate() - 1
    );

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// =====================================================
// GÜN SERİSİ
// =====================================================

function updateDayStreak() {

    const today =
        getTodayKey();

    const yesterday =
        getYesterdayKey();


    if (
        stats.lastPlayedDate === today
    ) {

        return;

    }


    if (
        stats.lastPlayedDate === yesterday
    ) {

        stats.dayStreak =
            Math.max(
                1,
                stats.dayStreak + 1
            );

    }
    else {

        stats.dayStreak =
            1;

    }


    stats.lastPlayedDate =
        today;


    saveStats();

}


// =====================================================
// ANA SAYFA İSTATİSTİKLERİ
// =====================================================

function updateHomeStats() {

    if (homeHighScore) {

        homeHighScore.textContent =
            stats.highScore;

    }

    if (homeGamesPlayed) {

        homeGamesPlayed.textContent =
            stats.gamesPlayed;

    }

    if (homeCorrectStreak) {

        homeCorrectStreak.textContent =
            stats.currentCorrectStreak;

    }

    if (homeDayStreak) {

        homeDayStreak.textContent =
            stats.dayStreak;

    }

}


// =====================================================
// NORMALLEŞTİRME
// =====================================================

function normalizeText(text) {

    let value =
        String(text || "")
            .trim()
            .toLocaleLowerCase("tr-TR");


    value =
        value
            .replace(/ı/g, "i")
            .replace(/İ/g, "i")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c");


    value =
        value.replace(
            /[.'’`-]/g,
            " "
        );


    value =
        value.replace(
            /\s+/g,
            " "
        );


    return value.trim();

}


// =====================================================
// FUTBOLCU KELİMELERİ
// =====================================================

function getPlayerNameWords(playerName) {

    return normalizeText(
        playerName
    )
    .split(" ")
    .filter(Boolean);

}


// =====================================================
// FUTBOLCU BUL
// =====================================================

function findRecognizedPlayer(userAnswer) {

    const normalizedAnswer =
        normalizeText(userAnswer);


    if (!normalizedAnswer) {

        return null;

    }


    const allPlayers =
        Object.keys(playerPool);


    const exactMatch =
        allPlayers.find(
            playerName =>
                normalizeText(playerName) ===
                normalizedAnswer
        );


    if (exactMatch) {

        return exactMatch;

    }


    const candidates =
        allPlayers.filter(playerName => {

            const words =
                getPlayerNameWords(
                    playerName
                );

            return words.includes(
                normalizedAnswer
            );

        });


    if (
        candidates.length === 1
    ) {

        return candidates[0];

    }


    return null;

}


// =====================================================
// FUTBOLCU YAZILMA SAYISI
// =====================================================

function recordPlayerWritten(userAnswer) {

    const recognizedPlayer =
        findRecognizedPlayer(
            userAnswer
        );


    if (!recognizedPlayer) {

        return;

    }


    if (
        !stats.playerCounts[
            recognizedPlayer
        ]
    ) {

        stats.playerCounts[
            recognizedPlayer
        ] = 0;

    }


    stats.playerCounts[
        recognizedPlayer
    ]++;


    saveStats();

}


// =====================================================
// DOĞRU CEVAP SERİSİ
// =====================================================

function recordCorrectAnswer() {

    stats.currentCorrectStreak++;


    if (
        stats.currentCorrectStreak >
        stats.bestCorrectStreak
    ) {

        stats.bestCorrectStreak =
            stats.currentCorrectStreak;

    }


    saveStats();

    updateHomeStats();

}


// =====================================================
// YANLIŞ CEVAP
// =====================================================

function resetCorrectStreak() {

    stats.currentCorrectStreak =
        0;

    saveStats();

    updateHomeStats();

}


// =====================================================
// OYUN TAMAMLANDI
// =====================================================

let currentGameRecorded = false;


function recordCompletedGame() {

    if (currentGameRecorded) {

        return;

    }


    currentGameRecorded = true;


    stats.gamesPlayed++;


    if (
        score > stats.highScore
    ) {

        stats.highScore =
            score;

    }


    updateDayStreak();


    saveStats();

    updateHomeStats();

}


// =====================================================
// HTML GÜVENLİĞİ
// =====================================================

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// ARŞİV MODALINI OTOMATİK OLUŞTUR
// =====================================================

function createPlayerHistoryModal() {

    if (document.getElementById("player-history-modal")) {

        playerHistoryModal =
            document.getElementById(
                "player-history-modal"
            );

        playerHistoryList =
            document.getElementById(
                "player-history-list"
            );

        historyUniqueCount =
            document.getElementById(
                "history-unique-count"
            );

        historyTotalEntries =
            document.getElementById(
                "history-total-entries"
            );

        historyMostWritten =
            document.getElementById(
                "history-most-written"
            );

        closePlayerHistory =
            document.getElementById(
                "close-player-history"
            );

        return;

    }


    const modal =
        document.createElement("div");


    modal.id =
        "player-history-modal";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    modal.innerHTML = `

        <div class="player-history-overlay">

            <div class="player-history-box">

                <button
                    id="close-player-history"
                    class="player-history-close"
                    type="button"
                    aria-label="Kapat"
                >
                    ×
                </button>

                <div class="player-history-title">
                    FUTBOLCU ARŞİVİ
                </div>

                <div class="player-history-stats">

                    <div class="history-stat">
                        <span>FUTBOLCU</span>
                        <strong id="history-unique-count">0</strong>
                    </div>

                    <div class="history-stat">
                        <span>TOPLAM YAZIM</span>
                        <strong id="history-total-entries">0</strong>
                    </div>

                    <div class="history-stat">
                        <span>EN ÇOK YAZILAN</span>
                        <strong id="history-most-written">-</strong>
                    </div>

                </div>

                <div
                    id="player-history-list"
                    class="player-history-list"
                ></div>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    playerHistoryModal =
        modal;

    closePlayerHistory =
        document.getElementById(
            "close-player-history"
        );

    playerHistoryList =
        document.getElementById(
            "player-history-list"
        );

    historyUniqueCount =
        document.getElementById(
            "history-unique-count"
        );

    historyTotalEntries =
        document.getElementById(
            "history-total-entries"
        );

    historyMostWritten =
        document.getElementById(
            "history-most-written"
        );


    // Basit ve güvenli stil

    if (!document.getElementById("history-auto-style")) {

        const style =
            document.createElement("style");


        style.id =
            "history-auto-style";


        style.textContent = `

            #player-history-modal {
                position: fixed;
                inset: 0;
                z-index: 99999;
                display: none;
            }

            #player-history-modal.active {
                display: flex;
            }

            .player-history-overlay {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(0,0,0,.72);
                backdrop-filter: blur(8px);
            }

            .player-history-box {
                position: relative;
                width: min(620px, 94vw);
                max-height: 85vh;
                overflow: hidden;
                border-radius: 22px;
                padding: 28px;
                background:
                    linear-gradient(
                        145deg,
                        #123c2d,
                        #08251c
                    );
                border: 1px solid rgba(40,220,130,.35);
                box-shadow:
                    0 25px 80px rgba(0,0,0,.55);
                color: white;
            }

            .player-history-title {
                text-align: center;
                font-size: 26px;
                font-weight: 900;
                letter-spacing: 2px;
                margin-bottom: 22px;
            }

            .player-history-close {
                position: absolute;
                top: 12px;
                right: 16px;
                width: 38px;
                height: 38px;
                border: 0;
                border-radius: 50%;
                background: rgba(255,255,255,.1);
                color: white;
                font-size: 28px;
                cursor: pointer;
            }

            .player-history-stats {
                display: grid;
                grid-template-columns:
                    repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 18px;
            }

            .history-stat {
                padding: 14px 8px;
                text-align: center;
                border-radius: 13px;
                background: rgba(255,255,255,.06);
                border: 1px solid rgba(255,255,255,.08);
            }

            .history-stat span {
                display: block;
                font-size: 10px;
                font-weight: 800;
                opacity: .65;
                margin-bottom: 6px;
            }

            .history-stat strong {
                display: block;
                font-size: 17px;
                color: #32df8a;
            }

            .player-history-list {
                max-height: 50vh;
                overflow-y: auto;
                padding-right: 4px;
            }

            .history-player {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 13px 15px;
                margin-bottom: 8px;
                border-radius: 12px;
                background: rgba(255,255,255,.055);
                border: 1px solid rgba(255,255,255,.07);
            }

            .history-player-left {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .history-player-rank {
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: rgba(45,220,135,.14);
                color: #32df8a;
                font-weight: 900;
                font-size: 12px;
            }

            .history-player-name {
                font-weight: 800;
            }

            .history-player-count {
                color: #32df8a;
                font-weight: 900;
                font-size: 16px;
            }

            .history-empty {
                text-align: center;
                padding: 35px 15px;
                line-height: 1.7;
                opacity: .7;
            }

            @media (max-width: 600px) {

                .player-history-stats {
                    grid-template-columns: 1fr;
                }

                .player-history-box {
                    padding: 22px 16px;
                }

            }

        `;


        document.head.appendChild(style);

    }

}


// =====================================================
// ARŞİVİ GÜNCELLE
// =====================================================

function updatePlayerHistory() {

    if (!playerHistoryList) {

        return;

    }


    const entries =
        Object.entries(
            stats.playerCounts
        );


    const totalEntries =
        entries.reduce(
            (sum, [, count]) =>
                sum + count,
            0
        );


    if (historyUniqueCount) {

        historyUniqueCount.textContent =
            entries.length;

    }


    if (historyTotalEntries) {

        historyTotalEntries.textContent =
            totalEntries;

    }


    entries.sort(
        (a, b) => {

            if (b[1] !== a[1]) {

                return b[1] - a[1];

            }

            return a[0].localeCompare(
                b[0],
                "tr"
            );

        }
    );


    if (historyMostWritten) {

        historyMostWritten.textContent =
            entries.length
                ? entries[0][0]
                : "-";

    }


    if (!entries.length) {

        playerHistoryList.innerHTML = `

            <div class="history-empty">

                Henüz bir futbolcu yazmadın.<br>

                Oyun oynadıkça futbolcu arşivin
                burada oluşacak.

            </div>

        `;

        return;

    }


    playerHistoryList.innerHTML = "";


    entries.forEach(
        ([playerName, count], index) => {

            const row =
                document.createElement("div");


            row.className =
                "history-player";


            row.innerHTML = `

                <div class="history-player-left">

                    <div class="history-player-rank">
                        ${index + 1}
                    </div>

                    <div class="history-player-name">
                        ${escapeHtml(playerName)}
                    </div>

                </div>

                <div class="history-player-count">
                    ×${count}
                </div>

            `;


            playerHistoryList.appendChild(
                row
            );

        }
    );

}


// =====================================================
// ARŞİVİ AÇ
// =====================================================

function openPlayerHistory() {

    createPlayerHistoryModal();

    updatePlayerHistory();


    if (!playerHistoryModal) {

        console.error(
            "Futbolcu arşiv modalı oluşturulamadı."
        );

        return;

    }


    playerHistoryModal.classList.add(
        "active"
    );


    playerHistoryModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


// =====================================================
// ARŞİVİ KAPAT
// =====================================================

function closePlayerHistoryModal() {

    if (!playerHistoryModal) {

        return;

    }


    playerHistoryModal.classList.remove(
        "active"
    );


    playerHistoryModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// =====================================================
// ARŞİV BUTONU
// =====================================================

createPlayerHistoryModal();


if (playerHistoryButton) {

    playerHistoryButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openPlayerHistory();

        }
    );

}


if (closePlayerHistory) {

    closePlayerHistory.addEventListener(
        "click",
        closePlayerHistoryModal
    );

}


if (playerHistoryModal) {

    playerHistoryModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                playerHistoryModal
            ) {

                closePlayerHistoryModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePlayerHistoryModal();

        }

    }
);


// =====================================================
// GÜNLÜK SEED
// =====================================================

function getDailySeed() {

    const date =
        getTodayKey();

    let hash = 0;


    for (
        let i = 0;
        i < date.length;
        i++
    ) {

        hash =
            (
                (
                    hash << 5
                ) -
                hash +
                date.charCodeAt(i)
            ) |
            0;

    }


    return Math.abs(hash);

}


// =====================================================
// SEED RANDOM
// =====================================================

function seededRandom(seed) {

    const value =
        Math.sin(seed) * 10000;

    return value -
        Math.floor(value);

}


// =====================================================
// GÜNLÜK SORULAR
// =====================================================

function generateDailyQuestions() {

    if (
        validTeamPairs.length === 0
    ) {

        return [];

    }


    const pool =
        [...validTeamPairs];


    const seed =
        getDailySeed();


    for (
        let i = pool.length - 1;
        i > 0;
        i--
    ) {

        const random =
            seededRandom(
                seed + i * 7919
            );


        const j =
            Math.floor(
                random * (i + 1)
            );


        [
            pool[i],
            pool[j]
        ] =
        [
            pool[j],
            pool[i]
        ];

    }


    return pool.slice(
        0,
        Math.min(
            totalQuestions,
            pool.length
        )
    );

}


// =====================================================
// GÜNLÜK TAMAMLANDI MI?
// =====================================================

function isDailyCompleted() {

    return (
        localStorage.getItem(
            "321_daily_completed"
        ) ===
        getTodayKey()
    );

}


// =====================================================
// GÜNLÜK DURUM
// =====================================================

function updateDailyStatus() {

    if (!dailyStatus) {

        return;

    }


    if (isDailyCompleted()) {

        dailyStatus.textContent =
            "✓ BUGÜNKÜ CHALLENGE TAMAMLANDI";


        dailyStatus.classList.add(
            "completed"
        );

    }
    else {

        dailyStatus.textContent =
            "BUGÜNÜN 10 SORUSU HAZIR";


        dailyStatus.classList.remove(
            "completed"
        );

    }

}


// =====================================================
// OYUN DEĞİŞKENLERİ
// =====================================================

let score = 0;

let currentQuestionPlayers = [];

let questionAnswered = false;

let timer = null;

let timeLeft = 15;

const questionTime = 15;

let questionNumber = 0;

const totalQuestions = 10;

let usedQuestions = [];

let gameVersion = 0;

let currentGameMode = "normal";

let dailyQuestions = [];

let dailyQuestionIndex = 0;


// =====================================================
// BAŞLANGIÇ
// =====================================================

if (homeScreen) {

    homeScreen.style.display =
        "flex";

}


if (gameContent) {

    gameContent.style.display =
        "none";

}


if (gameOver) {

    gameOver.style.display =
        "none";

}


updateDailyStatus();

updateHomeStats();


// =====================================================
// TAKIM GÖRÜNTÜLEME
// =====================================================

function updateTeamDisplay(
    team,
    logoElement,
    nameElement
) {

    if (
        !logoElement ||
        !nameElement
    ) {

        return;

    }


    const logoPath =
        teamLogos[team];


    if (logoPath) {

        logoElement.src =
            logoPath;

        logoElement.alt =
            team;

        logoElement.style.display =
            "block";

    }
    else {

        logoElement.removeAttribute(
            "src"
        );

        logoElement.alt =
            "";

        logoElement.style.display =
            "none";

    }


    nameElement.textContent =
        team;

}


// =====================================================
// SORU ANAHTARI
// =====================================================

function getQuestionKey(
    teamA,
    teamB
) {

    return [
        teamA,
        teamB
    ]
    .sort()
    .join("___");

}


// =====================================================
// ÖNERİ TEMİZLE
// =====================================================

function clearPlayerSuggestions() {

    if (playerSuggestions) {

        playerSuggestions.innerHTML =
            "";

    }

}


// =====================================================
// OYUNCU ARAMA
// =====================================================

function playerNameStartsWithSearch(
    playerName,
    searchText
) {

    const words =
        getPlayerNameWords(
            playerName
        );


    return words.some(
        word =>
            word.startsWith(
                searchText
            )
    );

}


// =====================================================
// ÖNERİLER
// =====================================================

function showPlayerSuggestions() {

    if (
        !playerSuggestions ||
        !answerInput
    ) {

        return;

    }


    if (answerInput.disabled) {

        clearPlayerSuggestions();

        return;

    }


    const searchText =
        normalizeText(
            answerInput.value
        );


    if (
        searchText.length < 2
    ) {

        clearPlayerSuggestions();

        return;

    }


    const suggestionPool =
        new Set(
            Object.keys(playerPool)
        );


    currentQuestionPlayers.forEach(
        playerName => {

            suggestionPool.add(
                playerName
            );

        }
    );


    const matchingPlayers =
        [...suggestionPool]
            .filter(
                playerName =>
                    playerNameStartsWithSearch(
                        playerName,
                        searchText
                    )
            );


    clearPlayerSuggestions();


    matchingPlayers
        .slice(0, 8)
        .forEach(
            playerName => {

                const suggestion =
                    document.createElement(
                        "div"
                    );


                suggestion.className =
                    "player-suggestion";


                suggestion.textContent =
                    playerName;


                suggestion.addEventListener(
                    "mousedown",
                    event => {

                        event.preventDefault();


                        answerInput.value =
                            playerName;


                        clearPlayerSuggestions();


                        answerInput.focus();

                    }
                );


                playerSuggestions.appendChild(
                    suggestion
                );

            }
        );

}


// =====================================================
// INPUT
// =====================================================

if (answerInput) {

    answerInput.addEventListener(
        "input",
        showPlayerSuggestions
    );


    answerInput.addEventListener(
        "focus",
        showPlayerSuggestions
    );


    answerInput.addEventListener(
        "blur",
        () => {

            setTimeout(
                clearPlayerSuggestions,
                250
            );

        }
    );

}


// =====================================================
// SONUÇ
// =====================================================

function showResult(
    type,
    message
) {

    if (!result) {

        return;

    }
    result.classList.remove(
        "correct",
        "wrong",
        "timeout",
        "result-visible"
    );
    void result.offsetWidth;
    result.textContent =
        message;
    result.classList.add(
        type,
        "result-visible"
    );

}

function clearResult() {
    if (!result) {
        return;
    }

    result.classList.remove(
        "correct",
        "wrong",
        "timeout",
        "result-visible"
    );
}

 // =====================================================
// 3-2-1 ORTAK FUTBOLCU
// NORMAL OYUN + GÜNLÜK CHALLENGE
// + İSTATİSTİKLER
// + FUTBOLCU ARŞİVİ
// + ANA SAYFAYA DÖN
// =====================================================


// =====================================================
// DOM HAZIR OLDUĞUNDA BAŞLAT
// =====================================================

document.addEventListener("DOMContentLoaded", () => {


// =====================================================
// TAKIMLAR
// =====================================================

const playableTeams = [

    "BESIKTAS",
    "FENERBAHCE",
    "GALATASARAY",
    "ISTANBUL BASAKSEHIR",
    "TRABZONSPOR",

    "PSG",
    "LILLE",
    "LYON",
    "MARSEILLE",

    "LIVERPOOL",
    "MANCHESTER CITY",
    "MANCHESTER UNITED",
    "TOTTENHAM",
    "CHELSEA",
    "ARSENAL",

    "BARCELONA",
    "REAL MADRID",
    "ATLETICO MADRID",

    "BAYERN MUNIH",
    "BORUSSIA DORTMUND",

    "INTER",
    "NAPOLI",
    "MILAN",
    "JUVENTUS",
    "ROMA",

    "PORTO",
    "SPORTING CP",
    "BENFICA"

];


// =====================================================
// LOGOLAR
// =====================================================

const teamLogos = {

    "BESIKTAS": "logos/besiktas.svg",
    "FENERBAHCE": "logos/fenerbahce.svg",
    "GALATASARAY": "logos/galatasaray.svg",
    "ISTANBUL BASAKSEHIR": "logos/istanbul-basaksehir.svg",
    "TRABZONSPOR": "logos/trabzonspor.svg",

    "PSG": "logos/psg.svg",
    "LILLE": "logos/lille.svg",
    "LYON": "logos/lyon.svg",
    "MARSEILLE": "logos/marseille.svg",

    "LIVERPOOL": "logos/liverpool.svg",
    "MANCHESTER CITY": "logos/manchester-city.svg",
    "MANCHESTER UNITED": "logos/manchester-united.svg",
    "TOTTENHAM": "logos/tottenham.svg",
    "CHELSEA": "logos/chelsea.svg",
    "ARSENAL": "logos/arsenal.svg",

    "BARCELONA": "logos/barcelona.svg",
    "REAL MADRID": "logos/real-madrid.svg",
    "ATLETICO MADRID": "logos/atletico-madrid.svg",

    "BAYERN MUNIH": "logos/bayern-munich.svg",
    "BORUSSIA DORTMUND": "logos/borussia-dortmund.svg",

    "INTER": "logos/inter.svg",
    "NAPOLI": "logos/napoli.svg",
    "MILAN": "logos/milan.svg",
    "JUVENTUS": "logos/juventus.svg",
    "ROMA": "logos/roma.svg",

    "PORTO": "logos/porto.svg",
    "SPORTING CP": "logos/sporting-cp.svg",
    "BENFICA": "logos/benfica.svg"

};


// =====================================================
// PLAYERPOOL KONTROLÜ
// =====================================================

if (
    typeof playerPool === "undefined" ||
    !playerPool ||
    typeof playerPool !== "object"
) {

    console.error(
        "playerPool bulunamadı. players.js script.js'den önce yüklenmeli."
    );

    alert(
        "Oyuncu verileri yüklenemedi. players.js dosyasının script.js'den önce yüklendiğinden emin ol."
    );

    return;

}


// =====================================================
// AKTİF TAKIMLAR
// =====================================================

const teams = playableTeams.filter(team => {

    return Object.values(playerPool).some(player => {

        return (
            player &&
            Array.isArray(player.teams) &&
            player.teams.includes(team)
        );

    });

});


// =====================================================
// ORTAK FUTBOLCULAR
// =====================================================

function findCommonPlayers(teamA, teamB) {

    const commonPlayers = [];

    for (const playerName in playerPool) {

        const playerData = playerPool[playerName];

        if (
            !playerData ||
            !Array.isArray(playerData.teams)
        ) {

            continue;

        }

        if (
            playerData.teams.includes(teamA) &&
            playerData.teams.includes(teamB)
        ) {

            commonPlayers.push(playerName);

        }

    }

    return commonPlayers;

}


// =====================================================
// GEÇERLİ EŞLEŞMELER
// =====================================================

const validTeamPairs = [];

for (let i = 0; i < teams.length; i++) {

    for (let j = i + 1; j < teams.length; j++) {

        const teamA = teams[i];
        const teamB = teams[j];

        const commonPlayers =
            findCommonPlayers(teamA, teamB);

        if (commonPlayers.length > 0) {

            validTeamPairs.push({

                teamA,
                teamB,
                players: commonPlayers

            });

        }

    }

}


// =====================================================
// HTML ELEMENTLERİ
// =====================================================

const startButton =
    document.getElementById("start-button");

const dailyChallengeButton =
    document.getElementById("daily-challenge-button");

let playerHistoryButton =
    document.getElementById("player-history-button");

let playerHistoryModal =
    document.getElementById("player-history-modal");

let closePlayerHistory =
    document.getElementById("close-player-history");

let playerHistoryList =
    document.getElementById("player-history-list");

let historyUniqueCount =
    document.getElementById("history-unique-count");

let historyTotalEntries =
    document.getElementById("history-total-entries");

let historyMostWritten =
    document.getElementById("history-most-written");

const homeHighScore =
    document.getElementById("home-high-score");

const homeGamesPlayed =
    document.getElementById("home-games-played");

const homeCorrectStreak =
    document.getElementById("home-correct-streak");

const homeDayStreak =
    document.getElementById("home-day-streak");

const dailyStatus =
    document.getElementById("daily-status");

const homeScreen =
    document.getElementById("home-screen");

const gameContent =
    document.getElementById("game-content");

const countdown =
    document.getElementById("countdown");

const vsText =
    document.getElementById("vs-text");

const team1 =
    document.getElementById("team1");

const team2 =
    document.getElementById("team2");

const team1Logo =
    document.getElementById("team1-logo");

const team2Logo =
    document.getElementById("team2-logo");

const team1Name =
    document.getElementById("team1-name");

const team2Name =
    document.getElementById("team2-name");

const answerInput =
    document.getElementById("answerInput");

const answerButton =
    document.getElementById("answerButton");

const scoreText =
    document.getElementById("score");

const result =
    document.getElementById("result");

const timerBar =
    document.getElementById("timer-bar");

const gameArea =
    document.querySelector(".game-area");

const answerArea =
    document.querySelector(".answer-area");

const timerContainer =
    document.querySelector(".timer-container");

const gameOver =
    document.getElementById("game-over");

const finalScore =
    document.getElementById("final-score");

const finalMessage =
    document.getElementById("final-message");

const restartButton =
    document.getElementById("restart-button");

const questionNumberText =
    document.getElementById("question-number");

const playerSuggestions =
    document.getElementById("player-suggestions");

const gameModeTitle =
    document.getElementById("game-mode-title");

const gameOverTitle =
    document.getElementById("game-over-title");


// =====================================================
// İSTATİSTİK SİSTEMİ
// =====================================================

const STATS_STORAGE_KEY =
    "321_game_statistics_v2";


function getDefaultStats() {

    return {

        highScore: 0,

        gamesPlayed: 0,

        currentCorrectStreak: 0,

        bestCorrectStreak: 0,

        dayStreak: 0,

        lastPlayedDate: null,

        playerCounts: {}

    };

}


function loadStats() {

    try {

        const saved =
            localStorage.getItem(
                STATS_STORAGE_KEY
            );

        if (!saved) {

            return getDefaultStats();

        }

        const parsed =
            JSON.parse(saved);

        return {

            ...getDefaultStats(),

            ...parsed,

            highScore:
                Number(parsed.highScore) || 0,

            gamesPlayed:
                Number(parsed.gamesPlayed) || 0,

            currentCorrectStreak:
                Number(parsed.currentCorrectStreak) || 0,

            bestCorrectStreak:
                Number(parsed.bestCorrectStreak) || 0,

            dayStreak:
                Number(parsed.dayStreak) || 0,

            playerCounts:
                parsed.playerCounts || {}

        };

    }
    catch (error) {

        console.error(
            "İstatistikler okunamadı:",
            error
        );

        return getDefaultStats();

    }

}


let stats = loadStats();


// =====================================================
// İSTATİSTİKLERİ KAYDET
// =====================================================

function saveStats() {

    try {

        localStorage.setItem(
            STATS_STORAGE_KEY,
            JSON.stringify(stats)
        );

    }
    catch (error) {

        console.error(
            "İstatistikler kaydedilemedi:",
            error
        );

    }

}


// =====================================================
// BUGÜNÜN TARİHİ
// =====================================================

function getTodayKey() {

    const now = new Date();

    const year =
        now.getFullYear();

    const month =
        String(
            now.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            now.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// =====================================================
// DÜNÜN TARİHİ
// =====================================================

function getYesterdayKey() {

    const date = new Date();

    date.setDate(
        date.getDate() - 1
    );

    const year =
        date.getFullYear();

    const month =
        String(
            date.getMonth() + 1
        ).padStart(2, "0");

    const day =
        String(
            date.getDate()
        ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


// =====================================================
// GÜN SERİSİ
// =====================================================

function updateDayStreak() {

    const today =
        getTodayKey();

    const yesterday =
        getYesterdayKey();


    if (
        stats.lastPlayedDate === today
    ) {

        return;

    }


    if (
        stats.lastPlayedDate === yesterday
    ) {

        stats.dayStreak =
            Math.max(
                1,
                stats.dayStreak + 1
            );

    }
    else {

        stats.dayStreak =
            1;

    }


    stats.lastPlayedDate =
        today;


    saveStats();

}


// =====================================================
// ANA SAYFA İSTATİSTİKLERİ
// =====================================================

function updateHomeStats() {

    // Her seferinde localStorage'daki en güncel
    // değerleri tekrar al.
    stats = loadStats();


    if (homeHighScore) {

        homeHighScore.textContent =
            stats.highScore;

    }

    if (homeGamesPlayed) {

        homeGamesPlayed.textContent =
            stats.gamesPlayed;

    }

    if (homeCorrectStreak) {

        homeCorrectStreak.textContent =
            stats.currentCorrectStreak;

    }

    if (homeDayStreak) {

        homeDayStreak.textContent =
            stats.dayStreak;

    }

}


// =====================================================
// NORMALLEŞTİRME
// =====================================================

function normalizeText(text) {

    let value =
        String(text || "")
            .trim()
            .toLocaleLowerCase("tr-TR");


    value =
        value
            .replace(/ı/g, "i")
            .replace(/İ/g, "i")
            .replace(/ğ/g, "g")
            .replace(/ü/g, "u")
            .replace(/ş/g, "s")
            .replace(/ö/g, "o")
            .replace(/ç/g, "c");


    value =
        value.replace(
            /[.'’`-]/g,
            " "
        );


    value =
        value.replace(
            /\s+/g,
            " "
        );


    return value.trim();

}


// =====================================================
// FUTBOLCU KELİMELERİ
// =====================================================

function getPlayerNameWords(playerName) {

    return normalizeText(
        playerName
    )
    .split(" ")
    .filter(Boolean);

}


// =====================================================
// FUTBOLCU BUL
// =====================================================

function findRecognizedPlayer(userAnswer) {

    const normalizedAnswer =
        normalizeText(userAnswer);


    if (!normalizedAnswer) {

        return null;

    }


    const allPlayers =
        Object.keys(playerPool);


    const exactMatch =
        allPlayers.find(
            playerName =>
                normalizeText(playerName) ===
                normalizedAnswer
        );


    if (exactMatch) {

        return exactMatch;

    }


    const candidates =
        allPlayers.filter(playerName => {

            const words =
                getPlayerNameWords(
                    playerName
                );

            return words.includes(
                normalizedAnswer
            );

        });


    if (
        candidates.length === 1
    ) {

        return candidates[0];

    }


    return null;

}


// =====================================================
// FUTBOLCU YAZILMA SAYISI
// =====================================================

function recordPlayerWritten(userAnswer) {

    const recognizedPlayer =
        findRecognizedPlayer(
            userAnswer
        );


    if (!recognizedPlayer) {

        return;

    }


    if (
        !stats.playerCounts[
            recognizedPlayer
        ]
    ) {

        stats.playerCounts[
            recognizedPlayer
        ] = 0;

    }


    stats.playerCounts[
        recognizedPlayer
    ]++;


    saveStats();

}


// =====================================================
// DOĞRU CEVAP SERİSİ
// =====================================================

function recordCorrectAnswer() {

    stats.currentCorrectStreak++;


    if (
        stats.currentCorrectStreak >
        stats.bestCorrectStreak
    ) {

        stats.bestCorrectStreak =
            stats.currentCorrectStreak;

    }


    saveStats();

    updateHomeStats();

}


// =====================================================
// YANLIŞ CEVAP
// =====================================================

function resetCorrectStreak() {

    stats.currentCorrectStreak =
        0;

    saveStats();

    updateHomeStats();

}


// =====================================================
// OYUN TAMAMLANDI
// =====================================================

let currentGameRecorded = false;


function recordCompletedGame() {

    if (currentGameRecorded) {

        return;

    }


    currentGameRecorded = true;


    // Oyun sayısını artır
    stats.gamesPlayed =
        Number(stats.gamesPlayed || 0) + 1;


    // Mevcut skor yüksek skordan büyük/eşitse
    // yüksek skoru güncelle
    if (
        Number(score) >
        Number(stats.highScore || 0)
    ) {

        stats.highScore =
            Number(score);

    }


    // Gün serisini güncelle
    updateDayStreak();


    // İstatistikleri kesin olarak kaydet
    saveStats();


    // Ekranı güncelle
    updateHomeStats();

}


// =====================================================
// HTML GÜVENLİĞİ
// =====================================================

function escapeHtml(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


// =====================================================
// ARŞİV MODALINI OTOMATİK OLUŞTUR
// =====================================================

function createPlayerHistoryModal() {

    if (document.getElementById("player-history-modal")) {

        playerHistoryModal =
            document.getElementById(
                "player-history-modal"
            );

        playerHistoryList =
            document.getElementById(
                "player-history-list"
            );

        historyUniqueCount =
            document.getElementById(
                "history-unique-count"
            );

        historyTotalEntries =
            document.getElementById(
                "history-total-entries"
            );

        historyMostWritten =
            document.getElementById(
                "history-most-written"
            );

        closePlayerHistory =
            document.getElementById(
                "close-player-history"
            );

        return;

    }


    const modal =
        document.createElement("div");


    modal.id =
        "player-history-modal";


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    modal.innerHTML = `

        <div class="player-history-overlay">

            <div class="player-history-box">

                <button
                    id="close-player-history"
                    class="player-history-close"
                    type="button"
                    aria-label="Kapat"
                >
                    ×
                </button>

                <div class="player-history-title">
                    FUTBOLCU ARŞİVİ
                </div>

                <div class="player-history-stats">

                    <div class="history-stat">
                        <span>FUTBOLCU</span>
                        <strong id="history-unique-count">0</strong>
                    </div>

                    <div class="history-stat">
                        <span>TOPLAM YAZIM</span>
                        <strong id="history-total-entries">0</strong>
                    </div>

                    <div class="history-stat">
                        <span>EN ÇOK YAZILAN</span>
                        <strong id="history-most-written">-</strong>
                    </div>

                </div>

                <div
                    id="player-history-list"
                    class="player-history-list"
                ></div>

            </div>

        </div>

    `;


    document.body.appendChild(modal);


    playerHistoryModal =
        modal;

    closePlayerHistory =
        document.getElementById(
            "close-player-history"
        );

    playerHistoryList =
        document.getElementById(
            "player-history-list"
        );

    historyUniqueCount =
        document.getElementById(
            "history-unique-count"
        );

    historyTotalEntries =
        document.getElementById(
            "history-total-entries"
        );

    historyMostWritten =
        document.getElementById(
            "history-most-written"
        );


    // =================================================
    // ARŞİV STİLİ
    // =================================================

    if (!document.getElementById("history-auto-style")) {

        const style =
            document.createElement("style");


        style.id =
            "history-auto-style";


        style.textContent = `

            #player-history-modal {
                position: fixed;
                inset: 0;
                z-index: 99999;
                display: none;
            }

            #player-history-modal.active {
                display: flex;
            }

            .player-history-overlay {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
                background: rgba(0,0,0,.72);
                backdrop-filter: blur(8px);
            }

            .player-history-box {
                position: relative;
                width: min(620px, 94vw);
                max-height: 85vh;
                overflow: hidden;
                border-radius: 22px;
                padding: 28px;
                background:
                    linear-gradient(
                        145deg,
                        #123c2d,
                        #08251c
                    );
                border: 1px solid rgba(40,220,130,.35);
                box-shadow:
                    0 25px 80px rgba(0,0,0,.55);
                color: white;
            }

            .player-history-title {
                text-align: center;
                font-size: 26px;
                font-weight: 900;
                letter-spacing: 2px;
                margin-bottom: 22px;
            }

            .player-history-close {
                position: absolute;
                top: 12px;
                right: 16px;
                width: 38px;
                height: 38px;
                border: 0;
                border-radius: 50%;
                background: rgba(255,255,255,.1);
                color: white;
                font-size: 28px;
                cursor: pointer;
            }

            .player-history-stats {
                display: grid;
                grid-template-columns:
                    repeat(3, 1fr);
                gap: 10px;
                margin-bottom: 18px;
            }

            .history-stat {
                padding: 14px 8px;
                text-align: center;
                border-radius: 13px;
                background: rgba(255,255,255,.06);
                border: 1px solid rgba(255,255,255,.08);
            }

            .history-stat span {
                display: block;
                font-size: 10px;
                font-weight: 800;
                opacity: .65;
                margin-bottom: 6px;
            }

            .history-stat strong {
                display: block;
                font-size: 17px;
                color: #32df8a;
            }

            .player-history-list {
                max-height: 50vh;
                overflow-y: auto;
                padding-right: 4px;
            }

            .history-player {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 13px 15px;
                margin-bottom: 8px;
                border-radius: 12px;
                background: rgba(255,255,255,.055);
                border: 1px solid rgba(255,255,255,.07);
            }

            .history-player-left {
                display: flex;
                align-items: center;
                gap: 12px;
            }

            .history-player-rank {
                width: 28px;
                height: 28px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                background: rgba(45,220,135,.14);
                color: #32df8a;
                font-weight: 900;
                font-size: 12px;
            }

            .history-player-name {
                font-weight: 800;
            }

            .history-player-count {
                color: #32df8a;
                font-weight: 900;
                font-size: 16px;
            }

            .history-empty {
                text-align: center;
                padding: 35px 15px;
                line-height: 1.7;
                opacity: .7;
            }

            @media (max-width: 600px) {

                .player-history-stats {
                    grid-template-columns: 1fr;
                }

                .player-history-box {
                    padding: 22px 16px;
                }

            }

        `;


        document.head.appendChild(style);

    }

}


// =====================================================
// ARŞİVİ GÜNCELLE
// =====================================================

function updatePlayerHistory() {

    if (!playerHistoryList) {

        return;

    }


    const entries =
        Object.entries(
            stats.playerCounts
        );


    const totalEntries =
        entries.reduce(
            (sum, [, count]) =>
                sum + count,
            0
        );


    if (historyUniqueCount) {

        historyUniqueCount.textContent =
            entries.length;

    }


    if (historyTotalEntries) {

        historyTotalEntries.textContent =
            totalEntries;

    }


    entries.sort(
        (a, b) => {

            if (b[1] !== a[1]) {

                return b[1] - a[1];

            }

            return a[0].localeCompare(
                b[0],
                "tr"
            );

        }
    );


    if (historyMostWritten) {

        historyMostWritten.textContent =
            entries.length
                ? entries[0][0]
                : "-";

    }


    if (!entries.length) {

        playerHistoryList.innerHTML = `

            <div class="history-empty">

                Henüz bir futbolcu yazmadın.<br>

                Oyun oynadıkça futbolcu arşivin
                burada oluşacak.

            </div>

        `;

        return;

    }


    playerHistoryList.innerHTML = "";


    entries.forEach(
        ([playerName, count], index) => {

            const row =
                document.createElement("div");


            row.className =
                "history-player";


            row.innerHTML = `

                <div class="history-player-left">

                    <div class="history-player-rank">
                        ${index + 1}
                    </div>

                    <div class="history-player-name">
                        ${escapeHtml(playerName)}
                    </div>

                </div>

                <div class="history-player-count">
                    ×${count}
                </div>

            `;


            playerHistoryList.appendChild(
                row
            );

        }
    );

}


// =====================================================
// ARŞİVİ AÇ
// =====================================================

function openPlayerHistory() {

    createPlayerHistoryModal();

    stats =
        loadStats();

    updatePlayerHistory();


    if (!playerHistoryModal) {

        console.error(
            "Futbolcu arşiv modalı oluşturulamadı."
        );

        return;

    }


    playerHistoryModal.classList.add(
        "active"
    );


    playerHistoryModal.setAttribute(
        "aria-hidden",
        "false"
    );

}


// =====================================================
// ARŞİVİ KAPAT
// =====================================================

function closePlayerHistoryModal() {

    if (!playerHistoryModal) {

        return;

    }


    playerHistoryModal.classList.remove(
        "active"
    );


    playerHistoryModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// =====================================================
// ARŞİV BUTONU
// =====================================================

createPlayerHistoryModal();


if (playerHistoryButton) {

    playerHistoryButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            openPlayerHistory();

        }
    );

}


if (closePlayerHistory) {

    closePlayerHistory.addEventListener(
        "click",
        closePlayerHistoryModal
    );

}


if (playerHistoryModal) {

    playerHistoryModal.addEventListener(
        "click",
        event => {

            if (
                event.target ===
                playerHistoryModal
            ) {

                closePlayerHistoryModal();

            }

        }
    );

}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closePlayerHistoryModal();

        }

    }
);


// =====================================================
// GÜNLÜK SEED
// =====================================================

function getDailySeed() {

    const date =
        getTodayKey();

    let hash = 0;


    for (
        let i = 0;
        i < date.length;
        i++
    ) {

        hash =
            (
                (
                    hash << 5
                ) -
                hash +
                date.charCodeAt(i)
            ) |
            0;

    }


    return Math.abs(hash);

}


// =====================================================
// SEED RANDOM
// =====================================================

function seededRandom(seed) {

    const value =
        Math.sin(seed) * 10000;

    return value -
        Math.floor(value);

}


// =====================================================
// GÜNLÜK SORULAR
// =====================================================

function generateDailyQuestions() {

    if (
        validTeamPairs.length === 0
    ) {

        return [];

    }


    const pool =
        [...validTeamPairs];


    const seed =
        getDailySeed();


    for (
        let i = pool.length - 1;
        i > 0;
        i--
    ) {

        const random =
            seededRandom(
                seed + i * 7919
            );


        const j =
            Math.floor(
                random * (i + 1)
            );


        [
            pool[i],
            pool[j]
        ] =
        [
            pool[j],
            pool[i]
        ];

    }


    return pool.slice(
        0,
        Math.min(
            totalQuestions,
            pool.length
        )
    );

}


// =====================================================
// GÜNLÜK TAMAMLANDI MI?
// =====================================================

function isDailyCompleted() {

    return (
        localStorage.getItem(
            "321_daily_completed"
        ) ===
        getTodayKey()
    );

}


// =====================================================
// GÜNLÜK DURUM
// =====================================================

function updateDailyStatus() {

    if (!dailyStatus) {

        return;

    }


    if (isDailyCompleted()) {

        dailyStatus.textContent =
            "✓ BUGÜNKÜ CHALLENGE TAMAMLANDI";


        dailyStatus.classList.add(
            "completed"
        );

    }
    else {

        dailyStatus.textContent =
            "BUGÜNÜN 10 SORUSU HAZIR";


        dailyStatus.classList.remove(
            "completed"
        );

    }

}


// =====================================================
// OYUN DEĞİŞKENLERİ
// =====================================================

let score = 0;

let currentQuestionPlayers = [];

let questionAnswered = false;

let timer = null;

let timeLeft = 15;

const questionTime = 15;

let questionNumber = 0;

const totalQuestions = 10;

let usedQuestions = [];

let gameVersion = 0;

let currentGameMode = "normal";

let dailyQuestions = [];

let dailyQuestionIndex = 0;


// =====================================================
// BAŞLANGIÇ
// =====================================================

if (homeScreen) {

    homeScreen.style.display =
        "flex";

}


if (gameContent) {

    gameContent.style.display =
        "none";

}


if (gameOver) {

    gameOver.style.display =
        "none";

}


updateDailyStatus();

updateHomeStats();


// =====================================================
// TAKIM GÖRÜNTÜLEME
// =====================================================

function updateTeamDisplay(
    team,
    logoElement,
    nameElement
) {

    if (
        !logoElement ||
        !nameElement
    ) {

        return;

    }


    const logoPath =
        teamLogos[team];


    if (logoPath) {

        logoElement.src =
            logoPath;

        logoElement.alt =
            team;

        logoElement.style.display =
            "block";

    }
    else {

        logoElement.removeAttribute(
            "src"
        );

        logoElement.alt =
            "";

        logoElement.style.display =
            "none";

    }


    nameElement.textContent =
        team;

}


// =====================================================
// SORU ANAHTARI
// =====================================================

function getQuestionKey(
    teamA,
    teamB
) {

    return [
        teamA,
        teamB
    ]
    .sort()
    .join("___");

}


// =====================================================
// ÖNERİ TEMİZLE
// =====================================================

function clearPlayerSuggestions() {

    if (playerSuggestions) {

        playerSuggestions.innerHTML =
            "";

    }

}


// =====================================================
// OYUNCU ARAMA
// =====================================================

function playerNameStartsWithSearch(
    playerName,
    searchText
) {

    const words =
        getPlayerNameWords(
            playerName
        );


    return words.some(
        word =>
            word.startsWith(
                searchText
            )
    );

}


// =====================================================
// ÖNERİLER
// =====================================================

function showPlayerSuggestions() {

    if (
        !playerSuggestions ||
        !answerInput
    ) {

        return;

    }


    if (answerInput.disabled) {

        clearPlayerSuggestions();

        return;

    }


    const searchText =
        normalizeText(
            answerInput.value
        );


    if (
        searchText.length < 2
    ) {

        clearPlayerSuggestions();

        return;

    }


    const suggestionPool =
        new Set(
            Object.keys(playerPool)
        );


    currentQuestionPlayers.forEach(
        playerName => {

            suggestionPool.add(
                playerName
            );

        }
    );


    const matchingPlayers =
        [...suggestionPool]
            .filter(
                playerName =>
                    playerNameStartsWithSearch(
                        playerName,
                        searchText
                    )
            );


    clearPlayerSuggestions();


    matchingPlayers
        .slice(0, 8)
        .forEach(
            playerName => {

                const suggestion =
                    document.createElement(
                        "div"
                    );


                suggestion.className =
                    "player-suggestion";


                suggestion.textContent =
                    playerName;


                suggestion.addEventListener(
                    "mousedown",
                    event => {

                        event.preventDefault();


                        answerInput.value =
                            playerName;


                        clearPlayerSuggestions();


                        answerInput.focus();

                    }
                );


                playerSuggestions.appendChild(
                    suggestion
                );

            }
        );

}


// =====================================================
// INPUT
// =====================================================

if (answerInput) {

    answerInput.addEventListener(
        "input",
        showPlayerSuggestions
    );


    answerInput.addEventListener(
        "focus",
        showPlayerSuggestions
    );


    answerInput.addEventListener(
        "blur",
        () => {

            setTimeout(
                clearPlayerSuggestions,
                250
            );

        }
    );

}


// =====================================================
// SONUÇ
// =====================================================

function showResult(
    type,
    message
) {

    if (!result) {

        return;

    }


    result.classList.remove(
        "correct",
        "wrong",
        "timeout",
        "result-visible"
    );


    void result.offsetWidth;


    result.textContent =
        message;


    result.classList.add(
        type,
        "result-visible"
    );

}


function clearResult() {

    if (!result) {

        return;

    }


    result.classList.remove(
        "correct",
        "wrong",
        "timeout",
        "result-visible"
    );

    result.textContent =
        "";

}


// =====================================================
// 3 - 2 - 1
// =====================================================

function startCountdown(version) {

    return new Promise(resolve => {

        let count = 3;


        if (countdown) {

            countdown.style.display =
                "flex";

        }


        if (vsText) {

            vsText.style.display =
                "none";

        }


        if (team1) {

            team1.style.visibility =
                "hidden";

        }


        if (team2) {

            team2.style.visibility =
                "hidden";

        }


        function showNumber() {

            if (
                version !== gameVersion
            ) {

                resolve();

                return;

            }


            if (count > 0) {

                if (countdown) {

                    countdown.textContent =
                        count;


                    countdown.classList.remove(
                        "countdown-pop"
                    );


                    void countdown.offsetWidth;


                    countdown.classList.add(
                        "countdown-pop"
                    );

                }


                count--;


                setTimeout(
                    showNumber,
                    1000
                );


                return;

            }


            if (countdown) {

                countdown.textContent =
                    "";


                countdown.classList.remove(
                    "countdown-pop"
                );

            }


            if (team1) {

                team1.style.visibility =
                    "visible";

            }


            if (team2) {

                team2.style.visibility =
                    "visible";

            }


            if (vsText) {

                vsText.textContent =
                    "VS";


                vsText.style.display =
                    "block";

            }


            setTimeout(
                () => {

                    if (
                        version === gameVersion
                    ) {

                        resolve();

                    }

                },
                300
            );

        }


        showNumber();

    });

}


// =====================================================
// YENİ SORU
// =====================================================

async function newQuestion() {

    gameVersion++;


    const currentVersion =
        gameVersion;


    clearInterval(timer);


    questionAnswered =
        false;


    if (answerInput) {

        answerInput.disabled =
            true;

        answerInput.value =
            "";

    }


    if (answerButton) {

        answerButton.disabled =
            true;

    }


    clearResult();

    clearPlayerSuggestions();


    if (
        questionNumber >= totalQuestions
    ) {

        endGame();

        return;

    }


    let selectedPair;


    // =================================================
    // GÜNLÜK
    // =================================================

    if (
        currentGameMode === "daily"
    ) {

        selectedPair =
            dailyQuestions[
                dailyQuestionIndex
            ];


        if (!selectedPair) {

            endGame();

            return;

        }


        dailyQuestionIndex++;

    }


    // =================================================
    // NORMAL
    // =================================================

    else {

        let availableQuestions =
            validTeamPairs.filter(pair => {

                const key =
                    getQuestionKey(
                        pair.teamA,
                        pair.teamB
                    );


                return !usedQuestions.includes(
                    key
                );

            });


        if (
            availableQuestions.length === 0
        ) {

            usedQuestions = [];

            availableQuestions =
                validTeamPairs;

        }


        if (
            availableQuestions.length === 0
        ) {

            alert(
                "Yeterli ortak futbolcu içeren takım çifti bulunamadı."
            );

            return;

        }


        const randomIndex =
            Math.floor(
                Math.random() *
                availableQuestions.length
            );


        selectedPair =
            availableQuestions[
                randomIndex
            ];


        usedQuestions.push(
            getQuestionKey(
                selectedPair.teamA,
                selectedPair.teamB
            )
        );

    }


    questionNumber++;


    if (questionNumberText) {

        questionNumberText.textContent =
            "Soru: " +
            questionNumber +
            " / " +
            totalQuestions;

    }


    currentQuestionPlayers =
        [...selectedPair.players];


    updateTeamDisplay(
        selectedPair.teamA,
        team1Logo,
        team1Name
    );


    updateTeamDisplay(
        selectedPair.teamB,
        team2Logo,
        team2Name
    );


    if (team1) {

        team1.style.visibility =
            "hidden";

    }


    if (team2) {

        team2.style.visibility =
            "hidden";

    }


    if (vsText) {

        vsText.style.display =
            "none";

    }


    if (countdown) {

        countdown.textContent =
            "";

    }


    if (timerBar) {

        timerBar.style.width =
            "100%";

    }


    await startCountdown(
        currentVersion
    );


    if (
        currentVersion !== gameVersion
    ) {

        return;

    }


    if (answerInput) {

        answerInput.disabled =
            false;

        answerInput.focus();

    }


    if (answerButton) {

        answerButton.disabled =
            false;

    }


    startTimer(
        currentVersion
    );

}


// =====================================================
// TIMER
// =====================================================

function startTimer(version) {

    clearInterval(timer);


    timeLeft =
        questionTime;


    if (timerBar) {

        timerBar.style.width =
            "100%";

    }


    timer =
        setInterval(
            () => {

                if (
                    version !== gameVersion
                ) {

                    clearInterval(timer);

                    return;

                }


                timeLeft--;


                const percentage =
                    Math.max(
                        0,
                        (
                            timeLeft /
                            questionTime
                        ) * 100
                    );


                if (timerBar) {

                    timerBar.style.width =
                        percentage + "%";

                }


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(timer);


                    questionAnswered =
                        true;


                    if (answerInput) {

                        answerInput.disabled =
                            true;

                    }


                    if (answerButton) {

                        answerButton.disabled =
                            true;

                    }


                    clearPlayerSuggestions();


                    resetCorrectStreak();


                    showResult(
                        "timeout",
                        "SÜRE DOLDU"
                    );


                    setTimeout(
                        () => {

                            if (
                                version ===
                                gameVersion
                            ) {

                                newQuestion();

                            }

                        },
                        1100
                    );

                }

            },
            1000
        );

}


// =====================================================
// CEVAP KARŞILAŞTIRMA
// =====================================================

function normalizeAnswerForComparison(text) {

    return normalizeText(text)
        .replace(
            /\s+/g,
            " "
        )
        .trim();

}


function isPlayerAnswerCorrect(
    userAnswer,
    playerName
) {

    const user =
        normalizeAnswerForComparison(
            userAnswer
        );


    const correct =
        normalizeAnswerForComparison(
            playerName
        );


    if (
        user === correct
    ) {

        return true;

    }


    const playerWords =
        getPlayerNameWords(
            playerName
        );


    return playerWords.some(
        word =>
            user === word
    );

}


// =====================================================
// CEVAP KONTROL
// =====================================================

function checkAnswer() {

    if (
        questionAnswered ||
        !answerInput ||
        answerInput.disabled
    ) {

        return;

    }


    const userAnswer =
        normalizeAnswerForComparison(
            answerInput.value
        );


    if (!userAnswer) {

        showResult(
            "wrong",
            "✕  BİR FUTBOLCU ADI YAZ"
        );

        return;

    }


    // Futbolcu yazımını kaydet
    recordPlayerWritten(
        userAnswer
    );


    const correctPlayer =
        currentQuestionPlayers.find(
            playerName =>
                isPlayerAnswerCorrect(
                    userAnswer,
                    playerName
                )
        );


    // =================================================
    // DOĞRU
    // =================================================

    if (correctPlayer) {

        score += 10;


        if (scoreText) {

            scoreText.textContent =
                "Puan: " +
                score;

        }


        questionAnswered =
            true;


        clearInterval(timer);


        if (answerInput) {

            answerInput.disabled =
                true;

        }


        if (answerButton) {

            answerButton.disabled =
                true;

        }


        clearPlayerSuggestions();


        recordCorrectAnswer();


        showResult(
            "correct",
            "✓  DOĞRU!"
        );


        setTimeout(
            () => {

                newQuestion();

            },
            1000
        );


        return;

    }


    // =================================================
    // YANLIŞ
    // =================================================

    resetCorrectStreak();


    showResult(
        "wrong",
        "✕  YANLIŞ!"
    );

}


// =====================================================
// CEVAPLA
// =====================================================

if (answerButton) {

    answerButton.addEventListener(
        "click",
        event => {

            event.preventDefault();

            checkAnswer();

        }
    );

}


// =====================================================
// ENTER
// =====================================================

if (answerInput) {

    answerInput.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Enter"
            ) {

                event.preventDefault();

                checkAnswer();

            }

        }
    );

}


// =====================================================
// ANA SAYFAYA DÖN BUTONU
// =====================================================

function createHomeButton() {

    if (!gameOver) {

        return;

    }


    // Daha önce oluşturulduysa tekrar oluşturma

    let homeButton =
        document.getElementById(
            "result-home-button"
        );


    if (homeButton) {

        return;

    }


    homeButton =
        document.createElement("button");


    homeButton.id =
        "result-home-button";


    homeButton.type =
        "button";


    homeButton.textContent =
        "⌂  ANA SAYFAYA DÖN";


    homeButton.className =
        "result-home-button";


    homeButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            // Aktif timer varsa durdur

            clearInterval(timer);


            // Eski oyun zamanlayıcılarının
            // sonuç ekranını tekrar açmasını engelle

            gameVersion++;


            // Güncel istatistikleri localStorage'dan al

            stats =
                loadStats();


            // Sonuç ekranını kapat

            if (gameOver) {

                gameOver.style.display =
                    "none";

            }


            // Oyun ekranını kapat

            if (gameContent) {

                gameContent.style.display =
                    "none";

            }


            // Ana sayfayı aç

            if (homeScreen) {

                homeScreen.style.display =
                    "flex";

            }


            // İstatistikleri tekrar güncelle

            updateHomeStats();

            updateDailyStatus();


            // Arşivdeki verileri de güncel tut

            if (playerHistoryModal &&
                playerHistoryModal.classList.contains("active")) {

                updatePlayerHistory();

            }


            // Sonuç butonunu temizle

            homeButton.remove();

        }
    );


    // Tekrar oynama butonunun bulunduğu
    // kapsayıcının altına ekle

    if (
        restartButton &&
        restartButton.parentElement
    ) {

        restartButton.parentElement.appendChild(
            homeButton
        );

    }
    else {

        gameOver.appendChild(
            homeButton
        );

    }

}


// =====================================================
// OYUN BİTİŞ
// =====================================================

function endGame() {

    clearInterval(timer);


    questionAnswered =
        true;


    if (answerInput) {

        answerInput.disabled =
            true;

    }


    if (answerButton) {

        answerButton.disabled =
            true;

    }


    clearPlayerSuggestions();


    // Oyunu sadece bir kere istatistiklere yaz

    recordCompletedGame();


    if (gameArea) {

        gameArea.style.display =
            "none";

    }


    if (answerArea) {

        answerArea.style.display =
            "none";

    }


    if (timerContainer) {

        timerContainer.style.display =
            "none";

    }


    if (team1Name) {

        team1Name.textContent =
            "";

    }


    if (team2Name) {

        team2Name.textContent =
            "";

    }


    if (team1Logo) {

        team1Logo.removeAttribute(
            "src"
        );

    }


    if (team2Logo) {

        team2Logo.removeAttribute(
            "src"
        );

    }


    if (countdown) {

        countdown.textContent =
            "";

    }


    if (vsText) {

        vsText.textContent =
            "";

    }


    clearResult();


    if (timerBar) {

        timerBar.style.width =
            "0%";

    }


    if (finalScore) {

        finalScore.textContent =
            score;

    }


    // =================================================
    // GÜNLÜK OYUN
    // =================================================

    if (
        currentGameMode === "daily"
    ) {

        if (finalMessage) {

            finalMessage.textContent =
                "Bugünün challenge'ını tamamladın!";

        }


        if (gameOverTitle) {

            gameOverTitle.textContent =
                "GÜNLÜK CHALLENGE TAMAMLANDI";

        }


        localStorage.setItem(
            "321_daily_completed",
            getTodayKey()
        );


        updateDailyStatus();

    }


    // =================================================
    // NORMAL OYUN
    // =================================================

    else {

        if (finalMessage) {

            finalMessage.textContent =
                "10 soruyu tamamladın!";

        }


        if (gameOverTitle) {

            gameOverTitle.textContent =
                "OYUN TAMAMLANDI";

        }

    }


    if (gameOver) {

        gameOver.style.display =
            "flex";

    }


    // ANA SAYFAYA DÖN BUTONUNU OLUŞTUR

    createHomeButton();

}


// =====================================================
// OYUNU SIFIRLA
// =====================================================

function resetGame() {

    gameVersion++;


    clearInterval(timer);


    // Eski sonuç ekranı ana sayfa butonunu kaldır

    const oldHomeButton =
        document.getElementById(
            "result-home-button"
        );


    if (oldHomeButton) {

        oldHomeButton.remove();

    }


    score =
        0;


    questionNumber =
        0;


    usedQuestions =
        [];


    currentQuestionPlayers =
        [];


    questionAnswered =
        false;


    currentGameRecorded =
        false;


    timeLeft =
        questionTime;


    dailyQuestionIndex =
        0;


    if (scoreText) {

        scoreText.textContent =
            "Puan: 0";

    }


    if (questionNumberText) {

        questionNumberText.textContent =
            "Soru: 0 / " +
            totalQuestions;

    }


    if (answerInput) {

        answerInput.value =
            "";

        answerInput.disabled =
            true;

    }


    if (answerButton) {

        answerButton.disabled =
            true;

    }


    clearPlayerSuggestions();

    clearResult();


    if (timerBar) {

        timerBar.style.width =
            "100%";

    }


    if (gameOver) {

        gameOver.style.display =
            "none";

    }


    if (gameArea) {

        gameArea.style.display =
            "flex";

    }


    if (answerArea) {

        answerArea.style.display =
            "flex";

    }


    if (timerContainer) {

        timerContainer.style.display =
            "block";

    }


    if (team1Name) {

        team1Name.textContent =
            "";

    }


    if (team2Name) {

        team2Name.textContent =
            "";

    }


    if (team1Logo) {

        team1Logo.removeAttribute(
            "src"
        );

    }


    if (team2Logo) {

        team2Logo.removeAttribute(
            "src"
        );

    }


    if (team1) {

        team1.style.visibility =
            "hidden";

    }


    if (team2) {

        team2.style.visibility =
            "hidden";

    }


    if (countdown) {

        countdown.textContent =
            "";

    }


    if (vsText) {

        vsText.textContent =
            "VS";

        vsText.style.display =
            "none";

    }

}


// =====================================================
// NORMAL OYUN
// =====================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            currentGameMode =
                "normal";


            if (gameModeTitle) {

                gameModeTitle.textContent =
                    "ORTAK FUTBOLCU";

            }


            if (homeScreen) {

                homeScreen.style.display =
                    "none";

            }


            if (gameContent) {

                gameContent.style.display =
                    "block";

            }


            resetGame();


            newQuestion();

        }
    );

}


// =====================================================
// GÜNLÜK CHALLENGE
// =====================================================

if (dailyChallengeButton) {

    dailyChallengeButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            if (
                isDailyCompleted()
            ) {

                alert(
                    "Bugünkü Günlük Challenge'ı zaten tamamladın. Yarın tekrar gel!"
                );

                return;

            }


            dailyQuestions =
                generateDailyQuestions();


            if (
                dailyQuestions.length <
                totalQuestions
            ) {

                alert(
                    "Günlük Challenge için yeterli soru bulunamadı."
                );

                return;

            }


            currentGameMode =
                "daily";


            dailyQuestionIndex =
                0;


            if (gameModeTitle) {

                gameModeTitle.textContent =
                    "GÜNLÜK CHALLENGE";

            }


            if (homeScreen) {

                homeScreen.style.display =
                    "none";

            }


            if (gameContent) {

                gameContent.style.display =
                    "block";

            }


            resetGame();


            newQuestion();

        }
    );

}


// =====================================================
// TEKRAR OYNA
// =====================================================

if (restartButton) {

    restartButton.addEventListener(
        "click",
        event => {

            event.preventDefault();


            // Eski ana sayfa butonunu kaldır

            const oldHomeButton =
                document.getElementById(
                    "result-home-button"
                );


            if (oldHomeButton) {

                oldHomeButton.remove();

            }


            if (
                currentGameMode === "daily" &&
                isDailyCompleted()
            ) {

                if (gameOver) {

                    gameOver.style.display =
                        "none";

                }


                if (gameContent) {

                    gameContent.style.display =
                        "none";

                }


                if (homeScreen) {

                    homeScreen.style.display =
                        "flex";

                }


                updateDailyStatus();

                updateHomeStats();


                return;

            }


            resetGame();

            newQuestion();

        }
    );

}


// =====================================================
// ANA SAYFA İSTATİSTİK TASARIMI
// =====================================================

function applyHomeStatisticsDesign() {

    if (
        document.getElementById(
            "321-home-stats-style"
        )
    ) {

        return;

    }


    const style =
        document.createElement("style");


    style.id =
        "321-home-stats-style";


    style.textContent = `

        /* =================================================
           ANA SAYFA - İSTATİSTİKLER
           ================================================= */

        #home-high-score,
        #home-games-played,
        #home-correct-streak,
        #home-day-streak {

            transition:
                all .25s ease;

        }


        #home-high-score,
        #home-games-played,
        #home-correct-streak,
        #home-day-streak {

            font-variant-numeric:
                tabular-nums;

        }


        /* İstatistik alanındaki mevcut kartları
           daha modern göstermek için */

        #home-high-score,
        #home-games-played,
        #home-correct-streak,
        #home-day-streak {

            text-shadow:
                0 0 12px
                rgba(50, 223, 138, .18);

        }


        /* =================================================
           CEVAP ALANI
           ================================================= */

        .answer-area {

            position: relative;

            transform:
                translateY(-45px);

            z-index: 50;

        }


        .answer-area input,
        .answer-area button {

            position: relative;

            z-index: 60;

        }


        .player-suggestions {

            position: relative;

            z-index: 9999 !important;

        }


        /* =================================================
           SONUÇ EKRANI
           ================================================= */

        .result-home-button {

            width: 100%;

            min-height: 48px;

            margin-top: 12px;

            padding:
                12px 20px;

            border:
                1px solid
                rgba(50, 223, 138, .42);

            border-radius:
                12px;

            background:
                linear-gradient(
                    135deg,
                    #123c2d,
                    #0a2b20
                );

            color:
                #ffffff;

            font-family:
                inherit;

            font-size:
                14px;

            font-weight:
                900;

            letter-spacing:
                .6px;

            cursor:
                pointer;

            transition:
                transform .18s ease,
                background .18s ease,
                border-color .18s ease,
                box-shadow .18s ease;

        }


        .result-home-button:hover {

            transform:
                translateY(-2px);

            background:
                linear-gradient(
                    135deg,
                    #19553f,
                    #0c3426
                );

            border-color:
                rgba(50, 223, 138, .8);

            box-shadow:
                0 8px 25px
                rgba(0, 0, 0, .25);

        }


        .result-home-button:active {

            transform:
                translateY(0);

        }


        /* =================================================
           MOBİL
           ================================================= */

        @media (max-width: 700px) {

            .answer-area {

                transform:
                    translateY(-25px);

            }


            .result-home-button {

                min-height:
                    46px;

                font-size:
                    13px;

            }

        }

    `;


    document.head.appendChild(
        style
    );

}


// Tasarımı uygula

applyHomeStatisticsDesign();


// =====================================================
// GELİŞTİRİCİ BİLGİLERİ
// =====================================================

console.log(
    "======================================"
);

console.log(
    "3-2-1 ORTAK FUTBOLCU HAZIR"
);

console.log(
    "Oyuncu sayısı:",
    Object.keys(playerPool).length
);

console.log(
    "Aktif takım sayısı:",
    teams.length
);

console.log(
    "Geçerli soru sayısı:",
    validTeamPairs.length
);

console.log(
    "Bugünün tarihi:",
    getTodayKey()
);

console.log(
    "Günlük soru sayısı:",
    generateDailyQuestions().length
);

console.log(
    "İstatistikler:",
    stats
);

console.log(
    "======================================"
);


});