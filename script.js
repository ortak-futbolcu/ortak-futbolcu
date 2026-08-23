// =====================================================
// 3-2-1 ORTAK FUTBOLCU OYUNU
// =====================================================
//
// Oyuncu verileri:
// players.js -> playerPool
//
// index.html içinde sıra:
// 1. players.js
// 2. script.js
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
// TAKIM -> LOGO EŞLEŞTİRMESİ
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
// SADECE OYUNCU HAVUZUNDA BULUNAN TAKIMLAR
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
// ORTAK FUTBOLCULARI BUL
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


        const hasTeamA =
            playerData.teams.includes(teamA);

        const hasTeamB =
            playerData.teams.includes(teamB);


        if (
            hasTeamA &&
            hasTeamB
        ) {

            commonPlayers.push(playerName);

        }

    }


    return commonPlayers;

}


// =====================================================
// GEÇERLİ TAKIM ÇİFTLERİNİ OLUŞTUR
// =====================================================

const validTeamPairs = [];


for (let i = 0; i < teams.length; i++) {

    for (let j = i + 1; j < teams.length; j++) {

        const teamA =
            teams[i];

        const teamB =
            teams[j];


        const commonPlayers =
            findCommonPlayers(
                teamA,
                teamB
            );


        if (commonPlayers.length > 0) {

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


// =====================================================
// SÜRE
// =====================================================

let timeLeft = 15;

const questionTime = 15;


// =====================================================
// SORU AYARLARI
// =====================================================

let questionNumber = 0;

const totalQuestions = 10;

let usedQuestions = [];


// =====================================================
// OYUN VERSİYONU
// =====================================================

let gameVersion = 0;


// =====================================================
// BAŞLANGIÇ DURUMU
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
// TAKIM LOGOSUNU GÜNCELLE
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

        console.warn(
            "Logo bulunamadı:",
            team
        );

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
// OYUNCU ADINI KELİMELERE AYIR
// =====================================================

function getPlayerNameWords(playerName) {

    return normalizeText(playerName)
        .split(" ")
        .filter(Boolean);

}


// =====================================================
// TAKIM ÇİFTİ ANAHTARI
// =====================================================

function getQuestionKey(teamA, teamB) {

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

        playerSuggestions.innerHTML = "";

    }

}


// =====================================================
// OYUNCU ADININ BAŞLANGICINI KONTROL ET
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
                playerName => {

                    return playerNameStartsWithSearch(
                        playerName,
                        searchText
                    );

                }
            );


    clearPlayerSuggestions();


    if (
        matchingPlayers.length === 0
    ) {

        return;

    }


    matchingPlayers.forEach(
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
// OYUNCU ARAMA EVENTLERİ
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
                () => {

                    clearPlayerSuggestions();

                },
                300
            );

        }
    );

}


// =====================================================
// 3 - 2 - 1 GERİ SAYIM
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


    result.textContent =
        "";


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


                return (
                    !usedQuestions.includes(
                        key
                    )
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


    // ================================================
    // TAKIMLARI VE LOGOLARI YÜKLE
    // ================================================

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


    console.log(
        "SORU:",
        selectedPair.teamA,
        "VS",
        selectedPair.teamB
    );


    console.log(
        "ORTAK OYUNCULAR:",
        currentQuestionPlayers
    );

}


// =====================================================
// 15 SANİYELİK TIMER
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


                    result.textContent =
                        "SÜRE DOLDU! ⏰";


                    setTimeout(
                        () => {

                            if (
                                version === gameVersion
                            ) {

                                newQuestion();

                            }

                        },
                        1000
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

    return normalizeText(
        text
    )
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


    if (
        !userAnswer
    ) {

        result.textContent =
            "Bir futbolcu adı yaz!";

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


    // ================================================
    // DOĞRU
    // ================================================

    if (
        correctPlayer
    ) {

        score += 10;


        scoreText.textContent =
            "Puan: " +
            score;


        result.textContent =
            "DOĞRU! 🎉";


        questionAnswered =
            true;


        clearInterval(timer);


        answerInput.disabled =
            true;

        answerButton.disabled =
            true;


        clearPlayerSuggestions();


        console.log(
            "DOĞRU CEVAP:",
            correctPlayer
        );


        setTimeout(
            () => {

                newQuestion();

            },
            1000
        );


        return;

    }


    // ================================================
    // YANLIŞ
    // ================================================

    result.textContent =
        "YANLIŞ! ❌";

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
// OYUN BİTTİ
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


    result.textContent =
        "";


    timerBar.style.width =
        "0%";


    finalScore.textContent =
        "Final Skoru: " +
        score;


    finalMessage.textContent =
        "10 soruyu tamamladın!";


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


    result.textContent =
        "";


    timerBar.style.width =
        "100%";


    gameOver.style.display =
        "none";


    gameArea.style.display =
        "flex";


    answerArea.style.display =
        "block";


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

            resetGame();

            newQuestion();

        }
    );

}


// =====================================================
// ANA SAYFA - OYUNA BAŞLA
// =====================================================

if (startButton) {

    startButton.addEventListener(
        "click",
        () => {

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