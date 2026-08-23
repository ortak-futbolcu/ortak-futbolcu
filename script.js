// =====================================================
// 3-2-1 ORTAK FUTBOLCU OYUNU
// =====================================================


// =====================================================
// OYUNDA KULLANILACAK TAKIMLAR
// =====================================================

const playableTeams = [

    // TÜRKİYE
    "BESIKTAS",
    "FENERBAHCE",
    "GALATASARAY",
    "ISTANBUL BASAKSEHIR",
    "TRABZONSPOR",

    // FRANSA
    "PSG",
    "LILLE",
    "LYON",
    "MARSEILLE",

    // İNGİLTERE
    "LIVERPOOL",
    "MANCHESTER CITY",
    "MANCHESTER UNITED",
    "TOTTENHAM",
    "CHELSEA",
    "ARSENAL",

    // İSPANYA
    "BARCELONA",
    "REAL MADRID",
    "ATLETICO MADRID",

    // ALMANYA
    "BAYERN MUNIH",
    "BORUSSIA DORTMUND",

    // İTALYA
    "INTER",
    "NAPOLI",
    "MILAN",
    "JUVENTUS",
    "ROMA",

    // PORTEKİZ
    "PORTO",
    "SPORTING CP",
    "BENFICA"

];


// =====================================================
// TAKIM LOGOLARI
// =====================================================

const teamLogos = {

    "BESIKTAS":
        "logos/besiktas.svg",

    "FENERBAHCE":
        "logos/fenerbahce.svg",

    "GALATASARAY":
        "logos/galatasaray.svg",

    "ISTANBUL BASAKSEHIR":
        "logos/istanbul-basaksehir.svg",

    "TRABZONSPOR":
        "logos/trabzonspor.svg",

    "PSG":
        "logos/psg.svg",

    "LILLE":
        "logos/lille.svg",

    "LYON":
        "logos/lyon.svg",

    "MARSEILLE":
        "logos/marseille.svg",

    "LIVERPOOL":
        "logos/liverpool.svg",

    "MANCHESTER CITY":
        "logos/manchester-city.svg",

    "MANCHESTER UNITED":
        "logos/manchester-united.svg",

    "TOTTENHAM":
        "logos/tottenham.svg",

    "CHELSEA":
        "logos/chelsea.svg",

    "ARSENAL":
        "logos/arsenal.svg",

    "BARCELONA":
        "logos/barcelona.svg",

    "REAL MADRID":
        "logos/real-madrid.svg",

    "ATLETICO MADRID":
        "logos/atletico-madrid.svg",

    "BAYERN MUNIH":
        "logos/bayern-munich.svg",

    "BORUSSIA DORTMUND":
        "logos/borussia-dortmund.svg",

    "INTER":
        "logos/inter.svg",

    "NAPOLI":
        "logos/napoli.svg",

    "MILAN":
        "logos/milan.svg",

    "JUVENTUS":
        "logos/juventus.svg",

    "ROMA":
        "logos/roma.svg",

    "PORTO":
        "logos/porto.svg",

    "SPORTING CP":
        "logos/sporting-cp.svg",

    "BENFICA":
        "logos/benfica.svg"

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
        "playerPool bulunamadı. index.html içinde önce players.js, sonra script.js yüklenmelidir."
    );

}


// =====================================================
// AKTİF TAKIMLAR
// =====================================================

const teams =
    playableTeams.filter(team => {

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
// GEÇERLİ TAKIM ÇİFTLERİ
// =====================================================

const validTeamPairs = [];


for (
    let i = 0;
    i < teams.length;
    i++
) {

    for (
        let j = i + 1;
        j < teams.length;
        j++
    ) {

        const teamA =
            teams[i];

        const teamB =
            teams[j];


        const commonPlayers =
            findCommonPlayers(
                teamA,
                teamB
            );


        if (
            commonPlayers.length > 0
        ) {

            validTeamPairs.push({

                teamA: teamA,

                teamB: teamB,

                players: commonPlayers

            });

        }

    }

}


// =====================================================
// HTML ELEMANLARI
// =====================================================

const startButton =
    document.getElementById("start-button");


const dailyButton =
    document.getElementById("daily-button");


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
// OYUN MODU
// normal = normal oyun
// daily  = günlük challenge
// =====================================================

let gameMode = "normal";


// =====================================================
// GÜNLÜK CHALLENGE DEĞİŞKENLERİ
// =====================================================

let dailyQuestions = [];

let dailyQuestionIndex = 0;

let dailyCompleted = false;

const DAILY_TOTAL_QUESTIONS = 10;


// =====================================================
// BAŞLANGIÇ
// =====================================================

if (homeScreen) {

    homeScreen.style.display = "flex";

}

if (gameContent) {

    gameContent.style.display = "none";

}

if (gameOver) {

    gameOver.style.display = "none";

}


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

        logoElement.removeAttribute("src");

        logoElement.alt = "";

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
// OYUNCU İSMİ
// =====================================================

function getPlayerNameWords(playerName) {

    return normalizeText(playerName)
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
// ÖNERİLERİ TEMİZLE
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
// OYUNCU ÖNERİLERİ
// =====================================================

function showPlayerSuggestions() {

    if (
        !playerSuggestions ||
        !answerInput
    ) {

        return;

    }


    if (
        answerInput.disabled
    ) {

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


    if (
        matchingPlayers.length === 0
    ) {

        return;

    }


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
// ARAMA EVENTLERİ
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
// SONUÇ MESAJINI GÖSTER
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


// =====================================================
// SONUÇ MESAJINI TEMİZLE
// =====================================================

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


    result.textContent = "";

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


            countdown.classList.remove(
                "start-text"
            );


            function showNumber() {

                if (
                    version !== gameVersion
                ) {

                    resolve();

                    return;

                }


                if (
                    count > 0
                ) {

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
                            version !== gameVersion
                        ) {

                            resolve();

                            return;

                        }


                        resolve();

                    },
                    300
                );

            }


            showNumber();

        }
    );

}


// =====================================================
// NORMAL OYUN - YENİ SORU
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


    const selectedPair =
        availableQuestions[
            randomIndex
        ];


    const questionKey =
        getQuestionKey(
            selectedPair.teamA,
            selectedPair.teamB
        );


    usedQuestions.push(
        questionKey
    );


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
// GÜNLÜK TARİH ANAHTARI
// =====================================================

function getDailyDateKey() {

    const now =
        new Date();


    const year =
        now.getFullYear();


    const month =
        String(
            now.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const day =
        String(
            now.getDate()
        ).padStart(
            2,
            "0"
        );


    return (
        year +
        "-" +
        month +
        "-" +
        day
    );

}


// =====================================================
// GÜNLÜK SEED
// =====================================================

function createDailySeed(
    dateString
) {

    let hash = 0;


    for (
        let i = 0;
        i < dateString.length;
        i++
    ) {

        hash =
            (
                (
                    hash << 5
                ) -
                hash
            ) +
            dateString.charCodeAt(i);


        hash |= 0;

    }


    return Math.abs(hash);

}


// =====================================================
// GÜNLÜK SORULARI OLUŞTUR
// =====================================================

function generateDailyQuestions() {

    const dateKey =
        getDailyDateKey();


    const seed =
        createDailySeed(
            dateKey
        );


    const questions = [];


    const available =
        [...validTeamPairs];


    let currentSeed =
        seed;


    function seededRandom() {

        currentSeed =
            (
                currentSeed * 9301 +
                49297
            ) % 233280;


        return (
            currentSeed /
            233280
        );

    }


    while (
        questions.length <
            DAILY_TOTAL_QUESTIONS &&
        available.length > 0
    ) {

        const randomIndex =
            Math.floor(
                seededRandom() *
                available.length
            );


        const selected =
            available.splice(
                randomIndex,
                1
            )[0];


        questions.push(
            selected
        );

    }


    return questions;

}


// =====================================================
// GÜNLÜK CHALLENGE BAŞLAT
// =====================================================

function startDailyChallenge() {

    gameMode =
        "daily";


    dailyQuestions =
        generateDailyQuestions();


    dailyQuestionIndex =
        0;


    dailyCompleted =
        false;


    if (
        dailyQuestions.length <
        DAILY_TOTAL_QUESTIONS
    ) {

        alert(
            "Günlük Challenge için yeterli soru bulunamadı."
        );


        gameMode =
            "normal";


        return;

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


    gameMode =
        "daily";


    newDailyQuestion();

}


// =====================================================
// GÜNLÜK CHALLENGE - YENİ SORU
// =====================================================

async function newDailyQuestion() {

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
        dailyQuestionIndex >=
        dailyQuestions.length
    ) {

        endDailyChallenge();

        return;

    }


    const selectedPair =
        dailyQuestions[
            dailyQuestionIndex
        ];


    dailyQuestionIndex++;


    questionNumber =
        dailyQuestionIndex;


    questionNumberText.textContent =
        "Günlük: " +
        questionNumber +
        " / " +
        DAILY_TOTAL_QUESTIONS;


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
// 15 SANİYELİK SÜRE
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

                                if (
                                    gameMode ===
                                    "daily"
                                ) {

                                    newDailyQuestion();

                                }
                                else {

                                    newQuestion();

                                }

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
// CEVAP NORMALLEŞTİRME
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


// =====================================================
// CEVAP DOĞRU MU?
// =====================================================

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
// CEVAP KONTROLÜ
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

                if (
                    gameMode ===
                    "daily"
                ) {

                    newDailyQuestion();

                }
                else {

                    newQuestion();

                }

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
// NORMAL OYUN BİTİŞİ
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


    finalMessage.textContent =
        "10 soruyu tamamladın!";


    gameOver.style.display =
        "flex";

}


// =====================================================
// GÜNLÜK CHALLENGE BİTİŞİ
// =====================================================

function endDailyChallenge() {

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


    finalMessage.textContent =
        "Günlük Challenge tamamlandı!";


    gameOver.style.display =
        "flex";


    dailyCompleted =
        true;


    localStorage.setItem(
        "dailyChallenge_" +
        getDailyDateKey(),
        JSON.stringify({

            completed: true,

            score: score

        })
    );

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


    scoreText.textContent =
        "Puan: 0";


    if (
        gameMode === "daily"
    ) {

        questionNumberText.textContent =
            "Günlük: 0 / " +
            DAILY_TOTAL_QUESTIONS;

    }
    else {

        questionNumberText.textContent =
            "Soru: 0 / " +
            totalQuestions;

    }


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
// TEKRAR OYNA
// =====================================================

if (restartButton) {

    restartButton.addEventListener(
        "click",
        () => {

            // =========================================
            // GÜNLÜK CHALLENGE
            // =========================================

            if (
                gameMode === "daily"
            ) {

                // Günlük challenge aynı gün
                // ikinci kez oynanmasın.

                homeScreen.style.display =
                    "flex";


                gameContent.style.display =
                    "none";


                gameOver.style.display =
                    "none";


                return;

            }


            // =========================================
            // NORMAL OYUN
            // =========================================

            resetGame();


            newQuestion();

        }
    );

}


// =====================================================
// ANA SAYFA → NORMAL OYUN
// =====================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

            gameMode =
                "normal";


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
// ANA SAYFA → GÜNLÜK CHALLENGE
// =====================================================

if (dailyButton) {

    dailyButton.addEventListener(
        "click",
        () => {

            const todayKey =
                "dailyChallenge_" +
                getDailyDateKey();


            const completedToday =
                localStorage.getItem(
                    todayKey
                );


            // =====================================
            // BUGÜN ZATEN OYNANDI
            // =====================================

            if (
                completedToday
            ) {

                try {

                    const data =
                        JSON.parse(
                            completedToday
                        );


                    alert(
                        "⚡ Bugünkü Challenge'ı zaten tamamladın!\n\n" +
                        "Skorun: " +
                        data.score
                    );

                }
                catch (error) {

                    alert(
                        "⚡ Bugünkü Challenge'ı zaten tamamladın!"
                    );

                }


                return;

            }


            // =====================================
            // GÜNLÜK CHALLENGE BAŞLAT
            // =====================================

            startDailyChallenge();

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
    "Logo sayısı:",
    Object.keys(teamLogos).length
);


console.log(
    "Günlük Challenge:",
    getDailyDateKey()
);


console.log(
    "Günlük soru sayısı:",
    DAILY_TOTAL_QUESTIONS
);