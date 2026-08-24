// =====================================================
// 3-2-1 ORTAK FUTBOLCU
// NORMAL OYUN + GÜNLÜK CHALLENGE
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
// PLAYERPOOL
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
// HTML
// =====================================================

const startButton =
    document.getElementById("start-button");

const dailyChallengeButton =
    document.getElementById(
        "daily-challenge-button"
    );

const dailyStatus =
    document.getElementById(
        "daily-status"
    );

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


// =====================================================
// MOD
// =====================================================

let currentGameMode = "normal";


// =====================================================
// GÜNLÜK CHALLENGE
// =====================================================

let dailyQuestions = [];

let dailyQuestionIndex = 0;


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
// GÜNLÜK SORULARI OLUŞTUR
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


    /*
       Aynı tarih + aynı playerPool
       = aynı sıralama
    */

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
// GÜNLÜK DURUMU GÖSTER
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
// METİN NORMALLEŞTİRME
// =====================================================

function normalizeText(text) {

    let value =
        String(text || "")
            .trim()
            .toLocaleLowerCase("tr-TR");


    value = value
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
// OYUNCU KELİMELERİ
// =====================================================

function getPlayerNameWords(playerName) {

    return normalizeText(
        playerName
    )
    .split(" ")
    .filter(Boolean);

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
    // GÜNLÜK MOD
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
    // NORMAL MOD
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

                showResult;

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

            /*
               Günlük challenge bittiyse
               tekrar oynatılmıyor.
            */

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