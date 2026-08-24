// =====================================================
// 3-2-1 ORTAK FUTBOLCU
// NORMAL OYUN + GÜNLÜK CHALLENGE
// + İSTATİSTİKLER
// + FUTBOLCU ARŞİVİ
// =====================================================


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

    throw new Error(
        "playerPool bulunamadı. players.js önce yüklenmelidir."
    );

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

        const playerData =
            playerPool[playerName];

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
    document.getElementById(
        "daily-challenge-button"
    );

const playerHistoryButton =
    document.getElementById(
        "player-history-button"
    );

const playerHistoryModal =
    document.getElementById(
        "player-history-modal"
    );

const closePlayerHistory =
    document.getElementById(
        "close-player-history"
    );

const playerHistoryList =
    document.getElementById(
        "player-history-list"
    );

const historyUniqueCount =
    document.getElementById(
        "history-unique-count"
    );

const historyTotalEntries =
    document.getElementById(
        "history-total-entries"
    );

const historyMostWritten =
    document.getElementById(
        "history-most-written"
    );

const homeHighScore =
    document.getElementById(
        "home-high-score"
    );

const homeGamesPlayed =
    document.getElementById(
        "home-games-played"
    );

const homeCorrectStreak =
    document.getElementById(
        "home-correct-streak"
    );

const homeDayStreak =
    document.getElementById(
        "home-day-streak"
    );

const dailyStatus =
    document.getElementById(
        "daily-status"
    );

const homeScreen =
    document.getElementById(
        "home-screen"
    );

const gameContent =
    document.getElementById(
        "game-content"
    );

const countdown =
    document.getElementById(
        "countdown"
    );

const vsText =
    document.getElementById(
        "vs-text"
    );

const team1 =
    document.getElementById(
        "team1"
    );

const team2 =
    document.getElementById(
        "team2"
    );

const team1Logo =
    document.getElementById(
        "team1-logo"
    );

const team2Logo =
    document.getElementById(
        "team2-logo"
    );

const team1Name =
    document.getElementById(
        "team1-name"
    );

const team2Name =
    document.getElementById(
        "team2-name"
    );

const answerInput =
    document.getElementById(
        "answerInput"
    );

const answerButton =
    document.getElementById(
        "answerButton"
    );

const scoreText =
    document.getElementById(
        "score"
    );

const result =
    document.getElementById(
        "result"
    );

const timerBar =
    document.getElementById(
        "timer-bar"
    );

const gameArea =
    document.querySelector(
        ".game-area"
    );

const answerArea =
    document.querySelector(
        ".answer-area"
    );

const timerContainer =
    document.querySelector(
        ".timer-container"
    );

const gameOver =
    document.getElementById(
        "game-over"
    );

const finalScore =
    document.getElementById(
        "final-score"
    );

const finalMessage =
    document.getElementById(
        "final-message"
    );

const restartButton =
    document.getElementById(
        "restart-button"
    );

const questionNumberText =
    document.getElementById(
        "question-number"
    );

const playerSuggestions =
    document.getElementById(
        "player-suggestions"
    );

const gameModeTitle =
    document.getElementById(
        "game-mode-title"
    );

const gameOverTitle =
    document.getElementById(
        "game-over-title"
    );


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
// İSTATİSTİK SİSTEMİ
// =====================================================

const STATS_STORAGE_KEY =
    "321_game_statistics_v1";


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


let stats =
    loadStats();


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

    const now =
        new Date();

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
// TARİHİ BİR GÜN GERİ AL
// =====================================================

function getYesterdayKey() {

    const date =
        new Date();

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
// GÜN SERİSİNİ GÜNCELLE
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
// ANA SAYFA İSTATİSTİKLERİNİ GÜNCELLE
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
// FUTBOLCU ADINI NORMALLEŞTİR
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
// YAZILAN FUTBOLCUYU BUL
// =====================================================

function findRecognizedPlayer(
    userAnswer
) {

    const normalizedAnswer =
        normalizeText(
            userAnswer
        );


    if (!normalizedAnswer) {

        return null;

    }


    const allPlayers =
        Object.keys(playerPool);


    // Tam isim eşleşmesi

    const exactMatch =
        allPlayers.find(
            playerName =>
                normalizeText(
                    playerName
                ) === normalizedAnswer
        );


    if (exactMatch) {

        return exactMatch;

    }


    // Tek kelimelik isim/soyisim eşleşmesi

    const candidates =
        allPlayers.filter(
            playerName => {

                const words =
                    getPlayerNameWords(
                        playerName
                    );

                return words.includes(
                    normalizedAnswer
                );

            }
        );


    /*
       Birden fazla futbolcuda aynı
       isim/soyisim varsa yanlış kişiye
       yazılmaması için kayıt etmiyoruz.
    */

    if (
        candidates.length === 1
    ) {

        return candidates[0];

    }


    return null;

}


// =====================================================
// FUTBOLCU YAZIM SAYISINI KAYDET
// =====================================================

function recordPlayerWritten(
    userAnswer
) {

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
// DOĞRU SERİ
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
// YANLIŞ CEVAP SERİYİ SIFIRLAR
// =====================================================

function resetCorrectStreak() {

    stats.currentCorrectStreak =
        0;

    saveStats();

    updateHomeStats();

}


// =====================================================
// OYUN TAMAMLANDIĞINDA İSTATİSTİKLER
// =====================================================

function recordCompletedGame() {

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
// FUTBOLCU ARŞİVİNİ GÖSTER
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
        (a, b) =>
            b[1] - a[1] ||
            a[0].localeCompare(
                b[0],
                "tr"
            )
    );


    if (historyMostWritten) {

        if (entries.length > 0) {

            historyMostWritten.textContent =
                entries[0][0];

        }
        else {

            historyMostWritten.textContent =
                "-";

        }

    }


    if (
        entries.length === 0
    ) {

        playerHistoryList.innerHTML = `

            <div class="history-empty">

                Henüz bir futbolcu yazmadın.<br>

                Oyun oynadıkça futbolcu arşivin
                burada oluşacak.

            </div>

        `;

        return;

    }


    playerHistoryList.innerHTML =
        "";


    entries.forEach(
        ([playerName, count], index) => {

            const row =
                document.createElement(
                    "div"
                );


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
// HTML GÜVENLİĞİ
// =====================================================

function escapeHtml(text) {

    return String(text)
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );

}


// =====================================================
// ARŞİVİ AÇ
// =====================================================

function openPlayerHistory() {

    updatePlayerHistory();

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

    playerHistoryModal.classList.remove(
        "active"
    );

    playerHistoryModal.setAttribute(
        "aria-hidden",
        "true"
    );

}


// =====================================================
// ARŞİV BUTONLARI
// =====================================================

if (playerHistoryButton) {

    playerHistoryButton.addEventListener(
        "click",
        openPlayerHistory
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
// SEEDLİ RANDOM
// =====================================================

function seededRandom(seed) {

    let value =
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
        ) === getTodayKey()
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
// BAŞLANGIÇ DURUMU
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
// INPUT EVENTLERİ
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

    return new Promise(
        resolve => {

            let count = 3;


            countdown.style.display =
                "flex";


            vsText.style.display =
                "none";


            team1.style.visibility =
                "hidden";

            team2.style.visibility =
                "hidden";


            function showNumber() {

                if (
                    version !== gameVersion
                ) {

                    resolve();

                    return;

                }


                if (count > 0) {

                    countdown.textContent =
                        count;


                    countdown.classList.remove(
                        "countdown-pop"
                    );


                    void countdown.offsetWidth;


                    countdown.classList.add(
                        "countdown-pop"
                    );


                    count--;


                    setTimeout(
                        showNumber,
                        1000
                    );


                    return;

                }


                countdown.textContent =
                    "";


                countdown.classList.remove(
                    "countdown-pop"
                );


                team1.style.visibility =
                    "visible";

                team2.style.visibility =
                    "visible";


                vsText.textContent =
                    "VS";

                vsText.style.display =
                    "block";


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

        }
    );

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


    answerInput.disabled =
        true;

    answerButton.disabled =
        true;


    answerInput.value =
        "";


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
            validTeamPairs.filter(
                pair => {

                    const key =
                        getQuestionKey(
                            pair.teamA,
                            pair.teamB
                        );


                    return !usedQuestions.includes(
                        key
                    );

                }
            );


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


    questionNumberText.textContent =
        "Soru: " +
        questionNumber +
        " / " +
        totalQuestions;


    currentQuestionPlayers =
        [
            ...selectedPair.players
        ];


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


    team1.style.visibility =
        "hidden";

    team2.style.visibility =
        "hidden";


    vsText.style.display =
        "none";


    countdown.textContent =
        "";


    timerBar.style.width =
        "100%";


    await startCountdown(
        currentVersion
    );


    if (
        currentVersion !== gameVersion
    ) {

        return;

    }


    answerInput.disabled =
        false;

    answerButton.disabled =
        false;


    answerInput.focus();


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


    timerBar.style.width =
        "100%";


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


                timerBar.style.width =
                    percentage + "%";


                if (
                    timeLeft <= 0
                ) {

                    clearInterval(timer);


                    questionAnswered =
                        true;


                    answerInput.disabled =
                        true;

                    answerButton.disabled =
                        true;


                    clearPlayerSuggestions();


                    resetCorrectStreak();


                    showResult(
                        "timeout",
                        "SÜRE DOLDU"
                    );


                    setTimeout(
                        () => {

                            if (
                                version === gameVersion
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

function normalizeAnswerForComparison(
    text
) {

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


    // =================================================
    // FUTBOLCU YAZIM SAYISINI KAYDET
    // =================================================

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


        scoreText.textContent =
            "Puan: " +
            score;


        questionAnswered =
            true;


        clearInterval(timer);


        answerInput.disabled =
            true;

        answerButton.disabled =
            true;


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
        checkAnswer
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
// OYUN BİTİŞ
// =====================================================

function endGame() {

    clearInterval(timer);


    questionAnswered =
        true;


    answerInput.disabled =
        true;

    answerButton.disabled =
        true;


    clearPlayerSuggestions();


    // =================================================
    // OYUN İSTATİSTİKLERİ
    // =================================================

    recordCompletedGame();


    gameArea.style.display =
        "none";

    answerArea.style.display =
        "none";

    timerContainer.style.display =
        "none";


    team1Name.textContent =
        "";

    team2Name.textContent =
        "";


    team1Logo.removeAttribute(
        "src"
    );

    team2Logo.removeAttribute(
        "src"
    );


    countdown.textContent =
        "";

    vsText.textContent =
        "";


    clearResult();


    timerBar.style.width =
        "0%";


    finalScore.textContent =
        score;


    if (
        currentGameMode === "daily"
    ) {

        finalMessage.textContent =
            "Bugünün challenge'ını tamamladın!";


        gameOverTitle.textContent =
            "GÜNLÜK CHALLENGE TAMAMLANDI";


        localStorage.setItem(
            "321_daily_completed",
            getTodayKey()
        );


        updateDailyStatus();

    }
    else {

        finalMessage.textContent =
            "10 soruyu tamamladın!";


        gameOverTitle.textContent =
            "OYUN TAMAMLANDI";

    }


    gameOver.style.display =
        "flex";

}


// =====================================================
// OYUNU SIFIRLA
// =====================================================

function resetGame() {

    gameVersion++;


    clearInterval(timer);


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


    timeLeft =
        questionTime;


    dailyQuestionIndex =
        0;


    scoreText.textContent =
        "Puan: 0";


    questionNumberText.textContent =
        "Soru: 0 / " +
        totalQuestions;


    answerInput.value =
        "";


    answerInput.disabled =
        true;


    answerButton.disabled =
        true;


    clearPlayerSuggestions();

    clearResult();


    timerBar.style.width =
        "100%";


    gameOver.style.display =
        "none";


    gameArea.style.display =
        "flex";


    answerArea.style.display =
        "flex";


    timerContainer.style.display =
        "block";


    team1Name.textContent =
        "";

    team2Name.textContent =
        "";


    team1Logo.removeAttribute(
        "src"
    );

    team2Logo.removeAttribute(
        "src"
    );


    team1.style.visibility =
        "hidden";

    team2.style.visibility =
        "hidden";


    countdown.textContent =
        "";


    vsText.textContent =
        "VS";

    vsText.style.display =
        "none";

}


// =====================================================
// NORMAL OYUN
// =====================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            currentGameMode =
                "normal";


            gameModeTitle.textContent =
                "ORTAK FUTBOLCU";


            homeScreen.style.display =
                "none";


            gameContent.style.display =
                "block";


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
        () => {

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


            gameModeTitle.textContent =
                "GÜNLÜK CHALLENGE";


            homeScreen.style.display =
                "none";


            gameContent.style.display =
                "block";


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
        () => {

            if (
                currentGameMode === "daily" &&
                isDailyCompleted()
            ) {

                gameOver.style.display =
                    "none";

                gameContent.style.display =
                    "none";

                homeScreen.style.display =
                    "flex";

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
// GELİŞTİRİCİ BİLGİLERİ
// =====================================================

console.log(
    "3-2-1 oyunu hazır."
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