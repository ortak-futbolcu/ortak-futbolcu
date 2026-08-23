// =====================================================
// 3-2-1 OYUNCU HAVUZU
// Temizlenmiş / tekrarları giderilmiş sürüm
// =====================================================

const playerPool = {

    "Cristiano Ronaldo": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "MANCHESTER UNITED",
            "REAL MADRID",
            "JUVENTUS",
            "AL NASSR"
        ]
    },

    "Nani": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "MANCHESTER UNITED",
            "FENERBAHCE",
            "LAZIO",
            "VALENCIA",
            "ORLANDO CITY",
            "VENEZIA",
            "MELBOURNE VICTORY",
            "ADANA DEMIRSPOR",
            "ESTRELA",
            "AKTOBE"
        ]
    },

    "Pepe": {
        nationality: "PORTEKIZ",
        teams: [
            "MARITIMO",
            "PORTO",
            "REAL MADRID",
            "BESIKTAS"
        ]
    },

    "Ricardo Quaresma": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "BARCELONA",
            "PORTO",
            "INTER",
            "CHELSEA",
            "BESIKTAS",
            "AL AHLI",
            "KASIMPASA",
            "VITORIA GUIMARAES"
        ]
    },
     "Ruben Loftus-Cheek": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "MILAN"
    ]
    },

    "Deco": {
        nationality: "PORTEKIZ",
        teams: [
            "PORTO",
            "BARCELONA",
            "CHELSEA",
            "FLUMINENSE"
        ]
    },

    "Ricardo Carvalho": {
        nationality: "PORTEKIZ",
        teams: [
            "LECA",
            "VITORIA SETUBAL",
            "ALVERCA",
            "PORTO",
            "CHELSEA",
            "REAL MADRID",
            "MONACO",
            "SHANGHAI SIPG"
        ]
    },

    "Jose Bosingwa": {
        nationality: "PORTEKIZ",
        teams: [
            "BOAVISTA",
            "PORTO",
            "CHELSEA",
            "QUEENS PARK RANGERS",
            "TRABZONSPOR"
        ]
    },

    "Joao Moutinho": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "PORTO",
            "MONACO",
            "WOLVERHAMPTON",
            "BRAGA"
        ]
    },
        "Lionel Messi": {
        nationality: "ARJANTIN",
        teams: [
            "BARCELONA",
            "PSG",
            "INTER MIAMI"
        ]
    },

    "Xavi": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "AL SADD"
        ]
    },

    "Andres Iniesta": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "VISSEL KOBE",
            "EMIRATES CLUB"
        ]
    },

    "Sergio Busquets": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "INTER MIAMI"
        ]
    },

    "Gerard Pique": {
        nationality: "ISPANYA",
        teams: [
            "MANCHESTER UNITED",
            "ZARAGOZA",
            "BARCELONA"
        ]
    },

    "Carles Puyol": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA"
        ]
    },

    "Victor Valdes": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "MANCHESTER UNITED",
            "STANDARD LIEGE",
            "MIDDLESBROUGH"
        ]
    },

    "Iker Casillas": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "PORTO"
        ]
    },

    "Sergio Ramos": {
        nationality: "ISPANYA",
        teams: [
            "SEVILLA",
            "REAL MADRID",
            "PSG",
            "MONTERREY"
        ]
    },

    "Marcelo": {
        nationality: "BREZILYA",
        teams: [
            "FLUMINENSE",
            "REAL MADRID",
            "OLYMPIACOS"
        ]
    },

    "Xabi Alonso": {
        nationality: "ISPANYA",
        teams: [
            "REAL SOCIEDAD",
            "EIBAR",
            "LIVERPOOL",
            "REAL MADRID",
            "BAYERN MUNIH"
        ]
    },

    "Toni Kroos": {
        nationality: "ALMANYA",
        teams: [
            "BAYERN MUNIH",
            "BAYER LEVERKUSEN",
            "REAL MADRID"
        ]
    },

    "Mesut Ozil": {
        nationality: "ALMANYA",
        teams: [
            "SCHALKE 04",
            "WERDER BREMEN",
            "REAL MADRID",
            "ARSENAL",
            "FENERBAHCE",
            "ISTANBUL BASAKSEHIR"
        ]
    },

    "Karim Benzema": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "REAL MADRID",
            "AL ITTIHAD"
        ]
    },

    "Angel Di Maria": {
        nationality: "ARJANTIN",
        teams: [
            "ROSARIO CENTRAL",
            "BENFICA",
            "REAL MADRID",
            "MANCHESTER UNITED",
            "PSG",
            "JUVENTUS"
        ]
    },

    "Gonzalo Higuain": {
        nationality: "ARJANTIN",
        teams: [
            "RIVER PLATE",
            "REAL MADRID",
            "NAPOLI",
            "JUVENTUS",
            "MILAN",
            "CHELSEA",
            "INTER MIAMI"
        ]
    },

    "Samuel Eto'o": {
        nationality: "KAMERUN",
        teams: [
            "REAL MADRID",
            "MALLORCA",
            "BARCELONA",
            "INTER",
            "ANZHI",
            "CHELSEA",
            "EVERTON",
            "SAMPDORIA",
            "ANTALYASPOR",
            "KONYASPOR"
        ]
    },

    "David Villa": {
        nationality: "ISPANYA",
        teams: [
            "SPORTING GIJON",
            "ZARAGOZA",
            "VALENCIA",
            "BARCELONA",
            "ATLETICO MADRID",
            "MELBOURNE CITY",
            "NEW YORK CITY",
            "VISSEL KOBE"
        ]
    },

    "Fernando Torres": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID",
            "LIVERPOOL",
            "CHELSEA",
            "MILAN",
            "SAGAN TOSU"
        ]
    },

    "David Silva": {
        nationality: "ISPANYA",
        teams: [
            "VALENCIA",
            "EIBAR",
            "CELTA VIGO",
            "MANCHESTER CITY",
            "REAL SOCIEDAD"
        ]
    },

    "Cesc Fabregas": {
        nationality: "ISPANYA",
        teams: [
            "ARSENAL",
            "BARCELONA",
            "CHELSEA",
            "MONACO",
            "COMO"
        ]
    },

    "Vincent Kompany": {
        nationality: "BELCIKA",
        teams: [
            "ANDERLECHT",
            "HAMBURG",
            "MANCHESTER CITY",
            "BAYERN MUNIH"
        ]
    },

    "Fernandinho": {
        nationality: "BREZILYA",
        teams: [
            "ATLETICO PARANAENSE",
            "SHAKHTAR DONETSK",
            "MANCHESTER CITY"
        ]
    },

    "James Milner": {
        nationality: "INGILTERE",
        teams: [
            "LEEDS UNITED",
            "NEWCASTLE UNITED",
            "ASTON VILLA",
            "MANCHESTER CITY",
            "LIVERPOOL",
            "BRIGHTON"
        ]
    },

    "Sadio Mane": {
        nationality: "SENEGAL",
        teams: [
            "METZ",
            "RED BULL SALZBURG",
            "SOUTHAMPTON",
            "LIVERPOOL",
            "BAYERN MUNIH",
            "AL NASSR"
        ]
    },

    "Roberto Firmino": {
        nationality: "BREZILYA",
        teams: [
            "FIGUEIRENSE",
            "HOFFENHEIM",
            "LIVERPOOL",
            "AL AHLI"
        ]
    },

    "Virgil van Dijk": {
        nationality: "HOLLANDA",
        teams: [
            "GRONINGEN",
            "CELTIC",
            "SOUTHAMPTON",
            "LIVERPOOL"
        ]
    },

    "Alisson": {
        nationality: "BREZILYA",
        teams: [
            "INTERNACIONAL",
            "ROMA",
            "LIVERPOOL"
        ]
    },

    "Thibaut Courtois": {
        nationality: "BELCIKA",
        teams: [
            "GENK",
            "ATLETICO MADRID",
            "CHELSEA",
            "REAL MADRID"
        ]
    },

    "David De Gea": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID",
            "MANCHESTER UNITED",
            "FIORENTINA"
        ]
    },

    "Koke": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID"
        ]
    },

    "Gabi": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID",
            "ZARAGOZA",
            "GETAFE",
            "AL SADD"
        ]
    },

    "Diego Godin": {
        nationality: "URUGUAY",
        teams: [
            "CERRO",
            "NACIONAL",
            "VILLARREAL",
            "ATLETICO MADRID",
            "INTER",
            "CAGLIARI",
            "VELEZ SARSFIELD"
        ]
    },

    "Ivan Rakitic": {
        nationality: "HIRVATISTAN",
        teams: [
            "BASEL",
            "SCHALKE 04",
            "SEVILLA",
            "BARCELONA",
            "HAJDUK SPLIT"
        ]
    },

    "Casemiro": {
        nationality: "BREZILYA",
        teams: [
            "SAO PAULO",
            "REAL MADRID",
            "PORTO",
            "MANCHESTER UNITED"
        ]
    },

    "Vinicius Junior": {
        nationality: "BREZILYA",
        teams: [
            "FLAMENGO",
            "REAL MADRID"
        ]
    },

    "Rodrygo": {
        nationality: "BREZILYA",
        teams: [
            "SANTOS",
            "REAL MADRID"
        ]
    },

    "Bukayo Saka": {
        nationality: "INGILTERE",
        teams: [
            "ARSENAL"
        ]
    },

    "Phil Foden": {
        nationality: "INGILTERE",
        teams: [
            "MANCHESTER CITY"
        ]
    },

    "Cole Palmer": {
        nationality: "INGILTERE",
        teams: [
            "MANCHESTER CITY",
            "CHELSEA"
        ]
    },

    "Mason Mount": {
        nationality: "INGILTERE",
        teams: [
            "CHELSEA",
            "VITESSE",
            "DERBY COUNTY",
            "MANCHESTER UNITED"
        ]
    },

    "Kai Havertz": {
        nationality: "ALMANYA",
        teams: [
            "BAYER LEVERKUSEN",
            "CHELSEA",
            "ARSENAL"
        ]
    },

    "N'Golo Kante": {
        nationality: "FRANSA",
        teams: [
            "BOULOGNE",
            "CAEN",
            "LEICESTER CITY",
            "CHELSEA",
            "AL ITTIHAD"
        ]
    },

    "Lautaro Martinez": {
        nationality: "ARJANTIN",
        teams: [
            "RACING CLUB",
            "INTER"
        ]
    },

    "Mauro Icardi": {
        nationality: "ARJANTIN",
        teams: [
            "SAMPDORIA",
            "INTER",
            "PSG",
            "GALATASARAY"
        ]
    },

    "Heung Min Son": {
        nationality: "GUNEY KORE",
        teams: [
            "HAMBURG",
            "BAYER LEVERKUSEN",
            "TOTTENHAM",
            "LOS ANGELES FC"
        ]
    },

    "Keylor Navas": {
        nationality: "KOSTA RIKA",
        teams: [
            "SAPRISSA",
            "ALBACETE",
            "LEVANTE",
            "REAL MADRID",
            "PSG",
            "NOTTINGHAM FOREST"
        ]
    },

    "Rui Patricio": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "WOLVERHAMPTON",
            "ROMA",
            "ATALANTA"
        ]
    },

    "Luis Figo": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "BARCELONA",
            "REAL MADRID",
            "INTER"
        ]
    },

    "Joao Cancelo": {
        nationality: "PORTEKIZ",
        teams: [
            "BENFICA",
            "VALENCIA",
            "INTER",
            "JUVENTUS",
            "MANCHESTER CITY",
            "BAYERN MUNIH",
            "BARCELONA"
        ]
    },

    "Joao Felix": {
        nationality: "PORTEKIZ",
        teams: [
            "BENFICA",
            "ATLETICO MADRID",
            "CHELSEA",
            "BARCELONA"
        ]
    },

    "Bruno Fernandes": {
        nationality: "PORTEKIZ",
        teams: [
            "NOVARA",
            "UDINESE",
            "SAMPDORIA",
            "SPORTING CP",
            "MANCHESTER UNITED"
        ]
    },

    "Danilo": {
        nationality: "PORTEKIZ",
        teams: [
            "SANTOS",
            "PORTO",
            "REAL MADRID",
            "MANCHESTER CITY",
            "JUVENTUS"
        ]
    },

    "Fabio Coentrao": {
        nationality: "PORTEKIZ",
        teams: [
            "RIO AVE",
            "BENFICA",
            "REAL MADRID",
            "MONACO",
            "SPORTING CP"
        ]
    },

    "Raul Meireles": {
        nationality: "PORTEKIZ",
        teams: [
            "BOAVISTA",
            "PORTO",
            "LIVERPOOL",
            "CHELSEA",
            "FENERBAHCE"
        ]
    },

    "Bruno Alves": {
        nationality: "PORTEKIZ",
        teams: [
            "PORTO",
            "FENERBAHCE"
        ]
    },

    "Danilo Pereira": {
        nationality: "PORTEKIZ",
        teams: [
            "PARMA",
            "RODA",
            "MARITIMO",
            "PORTO",
            "PSG"
        ]
    },

    "Diogo Jota": {
        nationality: "PORTEKIZ",
        teams: [
            "PACOS DE FERREIRA",
            "ATLETICO MADRID",
            "PORTO",
            "WOLVERHAMPTON",
            "LIVERPOOL"
        ]
    },

    "Joao Mario": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "INTER",
            "LOKOMOTIV MOSKOVA",
            "BENFICA"
        ]
    },

    "Renato Sanches": {
        nationality: "PORTEKIZ",
        teams: [
            "BENFICA",
            "BAYERN MUNIH",
            "SWANSEA",
            "LILLE",
            "PSG"
        ]
    },

    "Ruben Dias": {
        nationality: "PORTEKIZ",
        teams: [
            "BENFICA",
            "MANCHESTER CITY"
        ]
    },

    "Thierry Henry": {
        nationality: "FRANSA",
        teams: [
            "MONACO",
            "JUVENTUS",
            "ARSENAL",
            "BARCELONA",
            "NEW YORK RED BULLS"
        ]
    },

    "Alexis Sanchez": {
        nationality: "SILI",
        teams: [
            "COBRELOA",
            "COLO COLO",
            "RIVER PLATE",
            "UDINESE",
            "BARCELONA",
            "ARSENAL",
            "MANCHESTER UNITED",
            "INTER",
            "MARSEILLE",
            "UDINESE",
            "SEVILLA"
        ]
    },

    "Ashley Cole": {
        nationality: "INGILTERE",
        teams: [
            "ARSENAL",
            "CHELSEA",
            "ROMA",
            "LOS ANGELES GALAXY",
            "DERBY COUNTY"
        ]
    },

    "William Gallas": {
        nationality: "FRANSA",
        teams: [
            "CAEN",
            "MARSEILLE",
            "CHELSEA",
            "ARSENAL",
            "TOTTENHAM",
            "PERTH GLORY"
        ]
    },

    "David Luiz": {
        nationality: "BREZILYA",
        teams: [
            "VITORIA",
            "BENFICA",
            "CHELSEA",
            "PSG",
            "ARSENAL",
            "FLAMENGO",
            "BOTAFOGO"
        ]
    },

    "Willian": {
        nationality: "BREZILYA",
        teams: [
            "CORINTHIANS",
            "SHAKHTAR DONETSK",
            "ANZHI",
            "CHELSEA",
            "ARSENAL",
            "FULHAM"
        ]
    },

    "Olivier Giroud": {
        nationality: "FRANSA",
        teams: [
            "GRENOBLE",
            "ISTRES",
            "TOURS",
            "MONTPELLIER",
            "ARSENAL",
            "CHELSEA",
            "MILAN",
            "LOS ANGELES FC"
        ]
    },

    "Petr Cech": {
        nationality: "CEKYA",
        teams: [
            "SPARTA PRAG",
            "RENNES",
            "CHELSEA",
            "ARSENAL"
        ]
    },

    "Emmanuel Petit": {
        nationality: "FRANSA",
        teams: [
            "MONACO",
            "ARSENAL",
            "BARCELONA"
        ]
    },

    "Lassana Diarra": {
        nationality: "FRANSA",
        teams: [
            "LE HAVRE",
            "CHELSEA",
            "ARSENAL",
            "PORTSMOUTH",
            "REAL MADRID",
            "ANZHI",
            "LOKOMOTIV MOSKOVA",
            "MARSEILLE",
            "AL JAZIRA"
        ]
    },

    "Nicolas Anelka": {
        nationality: "FRANSA",
        teams: [
            "PSG",
            "ARSENAL",
            "REAL MADRID",
            "LIVERPOOL",
            "MANCHESTER CITY",
            "FENERBAHCE",
            "BOLTON",
            "CHELSEA",
            "SHANGHAI SHENHUA",
            "JUVENTUS",
            "WEST BROMWICH"
        ]
    },

    "Mikel Arteta": {
        nationality: "ISPANYA",
        teams: [
            "PSG",
            "RANGERS",
            "REAL SOCIEDAD",
            "EVERTON",
            "ARSENAL"
        ]
    },

    "Alex Oxlade-Chamberlain": {
        nationality: "INGILTERE",
        teams: [
            "SOUTHAMPTON",
            "ARSENAL",
            "LIVERPOOL",
            "BESIKTAS"
        ]
    },

    "Nicolas Pepe": {
        nationality: "FILDISI SAHILI",
        teams: [
            "POITIERS",
            "ANGERS",
            "ORLEANS",
            "LILLE",
            "ARSENAL",
            "NICE",
            "TRABZONSPOR",
            "VILLARREAL"
        ]
    },
"Filipe Luis": {
    nationality: "BREZILYA",
    teams: [
        "ATLETICO MADRID",
        "CHELSEA"
    ]
},
    "Gabriel Jesus": {
        nationality: "BREZILYA",
        teams: [
            "PALMEIRAS",
            "MANCHESTER CITY",
            "ARSENAL"
        ]
    },
"Marc Overmars": {
    nationality: "HOLLANDA",
    teams: [
        "GO AHEAD EAGLES",
        "WILLEM II",
        "AJAX",
        "ARSENAL",
        "BARCELONA"
    ]
},

"Giovanni van Bronckhorst": {
    nationality: "HOLLANDA",
    teams: [
        "FEYENOORD",
        "RKC WAALWIJK",
        "RANGERS",
        "ARSENAL",
        "BARCELONA"
    ]
},

"Sylvinho": {
    nationality: "BREZILYA",
    teams: [
        "CORINTHIANS",
        "ARSENAL",
        "CELTA VIGO",
        "BARCELONA",
        "MANCHESTER CITY"
    ]
},

"Sadio Mane": {
    nationality: "SENEGAL",
    teams: [
        "METZ",
        "RED BULL SALZBURG",
        "SOUTHAMPTON",
        "LIVERPOOL",
        "BAYERN MUNIH",
        "AL-NASSR"
    ]
},

"Marko Grujic": {
    nationality: "SIRBISTAN",
    teams: [
        "RED STAR BELGRADE",
        "LIVERPOOL",
        "CARDIFF CITY",
        "HERTHA BERLIN",
        "PORTO"
    ]
},

"Divock Origi": {
    nationality: "BELCIKA",
    teams: [
        "LILLE",
        "LIVERPOOL",
        "WOLFSBURG",
        "MILAN",
        "NOTTINGHAM FOREST"
    ]
},

"Dejan Lovren": {
    nationality: "HIRVATISTAN",
    teams: [
        "DINAMO ZAGREB",
        "INTER ZAPRESIC",
        "LYON",
        "SOUTHAMPTON",
        "LIVERPOOL",
        "ZENIT"
    ]
},

"John Arne Riise": {
    nationality: "NORVEC",
    teams: [
        "ALESUND",
        "MONACO",
        "LIVERPOOL",
        "ROMA",
        "FULHAM",
        "APOEL"
    ]
},

"James Milner": {
    nationality: "INGILTERE",
    teams: [
        "LEEDS UNITED",
        "NEWCASTLE UNITED",
        "ASTON VILLA",
        "MANCHESTER CITY",
        "LIVERPOOL",
        "BRIGHTON"
    ]
},

"Javier Mascherano": {
    nationality: "ARJANTIN",
    teams: [
        "RIVER PLATE",
        "CORINTHIANS",
        "WEST HAM",
        "LIVERPOOL",
        "BARCELONA",
        "HEBEI CHINA FORTUNE",
        "ESTUDIANTES"
    ]
},

"Henrik Larsson": {
    nationality: "ISVEC",
    teams: [
        "HOGABORGS BK",
        "HELSINGBORG",
        "FEYENOORD",
        "CELTIC",
        "BARCELONA",
        "MANCHESTER UNITED"
    ]
},

"Patrick Kluivert": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "MILAN",
        "BARCELONA",
        "NEWCASTLE UNITED",
        "VALENCIA",
        "PSV",
        "LILLE"
    ]
},

"Lilian Thuram": {
    nationality: "FRANSA",
    teams: [
        "MONACO",
        "PARMA",
        "JUVENTUS",
        "BARCELONA"
    ]
},

"Gianluca Zambrotta": {
    nationality: "ITALYA",
    teams: [
        "COMO",
        "BARI",
        "JUVENTUS",
        "BARCELONA",
        "MILAN",
        "CHIASSO"
    ]
},

"Lothar Matthaus": {
    nationality: "ALMANYA",
    teams: [
        "BORUSSIA MONCHENGLADBACH",
        "BAYERN MUNIH",
        "INTER",
        "METROSTARS"
    ]
},

"Cengiz Under": {
    nationality: "TURKIYE",
    teams: [
        "ALTINORDU",
        "ISTANBUL BASAKSEHIR",
        "ROMA",
        "LEICESTER CITY",
        "MARSEILLE",
        "FENERBAHCE",
        "BESIKTAS"
    ]
},

"Lucas Torreira": {
    nationality: "URUGUAY",
    teams: [
        "PESCARA",
        "SAMPDORIA",
        "ARSENAL",
        "ATLETICO MADRID",
        "FIORENTINA",
        "GALATASARAY"
    ]
},

"Sofyan Amrabat": {
    nationality: "FAS",
    teams: [
        "UTRECHT",
        "FEYENOORD",
        "CLUB BRUGGE",
        "HELLAS VERONA",
        "FIORENTINA",
        "MANCHESTER UNITED",
        "FENERBAHCE"
    ]
},

"Fred": {
    nationality: "BREZILYA",
    teams: [
        "INTERNACIONAL",
        "SHAKHTAR DONETSK",
        "MANCHESTER UNITED",
        "FENERBAHCE"
    ]
},

"Talisca": {
    nationality: "BREZILYA",
    teams: [
        "BAHIA",
        "BENFICA",
        "BESIKTAS",
        "GUANGZHOU FC",
        "AL NASSR",
        "FENERBAHCE"
    ]
},

"Hakim Ziyech": {
    nationality: "FAS",
    teams: [
        "HEERENVEEN",
        "TWENTE",
        "AJAX",
        "CHELSEA",
        "GALATASARAY",
        "AL DUHAIL",
        "WYDAD"
    ]
},

"Dries Mertens": {
    nationality: "BELCIKA",
    teams: [
        "AGOVV",
        "UTRECHT",
        "PSV",
        "NAPOLI",
        "GALATASARAY"
    ]
},

"Yannick Carrasco": {
    nationality: "BELCIKA",
    teams: [
        "MONACO",
        "ATLETICO MADRID",
        "DALIAN PRO",
        "AL SHABAB"
    ]
},

"Younes Belhanda": {
    nationality: "FAS",
    teams: [
        "MONTPELLIER",
        "DYNAMO KYIV",
        "SCHALKE 04",
        "NICE",
        "GALATASARAY",
        "AL ITTIHAD",
        "ADANA DEMIRSPOR"
    ]
},

"Sofiane Feghouli": {
    nationality: "CEZAYIR",
    teams: [
        "GRENOBLE",
        "VALENCIA",
        "WEST HAM",
        "GALATASARAY",
        "FATIH KARAGUMRUK"
    ]
},

"Bafetimbi Gomis": {
    nationality: "FRANSA",
    teams: [
        "SAINT ETIENNE",
        "TROYES",
        "LYON",
        "SWANSEA CITY",
        "MARSEILLE",
        "GALATASARAY",
        "AL HILAL",
        "KAWASAKI FRONTALE"
    ]
},

"Nabil Fekir": {
    nationality: "FRANSA",
    teams: [
        "LYON",
        "REAL BETIS",
        "AL JAZIRA"
    ]
},

"Kaan Ayhan": {
    nationality: "TURKIYE",
    teams: [
        "SCHALKE 04",
        "FORTUNA DUSSELDORF",
        "SASSUOLO",
        "GALATASARAY"
    ]
},

"Salih Ucan": {
    nationality: "TURKIYE",
    teams: [
        "BUCASPOR",
        "FENERBAHCE",
        "ROMA",
        "EMPOLI",
        "SIon",
        "ALANYASPOR",
        "ISTANBUL BASAKSEHIR",
        "BESIKTAS"
    ]
},

"Kerem Akturkoglu": {
    nationality: "TURKIYE",
    teams: [
        "GOLCUKSPOR",
        "HISAREYNSPOR",
        "KARACABEY BELEDIYESPOR",
        "24 ERZINCANSPOR",
        "GALATASARAY",
        "BENFICA",
        "FENERBAHCE"
    ]
},

"Yusuf Yazici": {
    nationality: "TURKIYE",
    teams: [
        "TRABZONSPOR",
        "LILLE",
        "CSKA MOSKOVA",
        "OLYMPIACOS"
    ]
},

"Enes Unal": {
    nationality: "TURKIYE",
    teams: [
        "BURSASPOR",
        "MANCHESTER CITY",
        "GENK",
        "NAC BREDA",
        "TWENTE",
        "VILLARREAL",
        "LEVANTE",
        "VALLADOLID",
        "GETAFE",
        "BOURNEMOUTH"
    ],

    "Emmanuel Agbadou": {

        teams: [
            "US MONASTIR",
            "EUPEN",
            "REIMS",
            "WOLVES",
            "BESIKTAS"
        ]

    },

    "Alessandro Bastoni": {

        teams: [
            "ATALANTA",
            "PARMA",
            "INTER"
        ]

    },

    "Ersin Destanoğlu": {

        teams: [
            "BESIKTAS"
        ]

    },

    "Altay Bayındır": {

        teams: [
            "ANKARAGUCU",
            "FENERBAHCE",
            "MANCHESTER UNITED"
        ]

    },

    "Wilfried Zaha": {

        teams: [
            "CRYSTAL PALACE",
            "MANCHESTER UNITED",
            "CARDIFF CITY",
            "GALATASARAY",
            "LYON",
            "CHARLOTTE FC"
        ]

    },

    "Nihat Kahveci": {

        teams: [
            "BESIKTAS",
            "REAL SOCIEDAD",
            "VILLARREAL"
        ]

    },

    "Mehmet Zeki Çelik": {

        teams: [
            "BURSASPOR",
            "KARACABEYSPOR",
            "ISTANBULSPOR",
            "LILLE",
            "ROMA"
        ]

    },

    "Eduardo Quaresma": {

        teams: [
            "SPORTING CP",
            "TONDELA",
            "HOFFENHEIM"
        ]

    },

    "Simão Sabrosa": {

        teams: [
            "SPORTING CP",
            "BARCELONA",
            "BENFICA",
            "ATLETICO MADRID",
            "BESIKTAS",
            "ESPANYOL"
        ]

    },

    "Pape Matar Sarr": {

        teams: [
            "METZ",
            "TOTTENHAM"
        ]

    },

    "Mathys Tel": {

        teams: [
            "RENNES",
            "BAYERN MUNIH",
            "TOTTENHAM"
        ]

    },

    "Günay Güvenç": {

        teams: [
            "STUTTGART",
            "DENIZLISPOR",
            "GOZTEPE",
            "GAZIANTEP",
            "KASIMPASA",
            "GALATASARAY",
            "BESIKTAS"
        ]

    },

    "Şenol Güneş": {

        teams: [
            "TRABZONSPOR"
        ]

    },

    "Eljif Elmas": {

        teams: [
            "RABOTNICKI",
            "FENERBAHCE",
            "NAPOLI",
            "RB LEIPZIG",
            "TORINO"
        ]

    },

    "Gedson Fernandes": {

        teams: [
            "BENFICA",
            "GALATASARAY",
            "TOTTENHAM",
            "BESIKTAS"
        ]

    },

    "Aleksey Batrakov": {

        teams: [
            "LOKOMOTIV MOSCOW",
            "GALATASARAY"
        ]

    },

    "Youri Tielemans": {

        teams: [
            "ANDERLECHT",
            "MONACO",
            "LEICESTER",
            "ASTON VILLA",
            "MANCHESTER UNITED"
        ]

    },

    "Garry Rodrigues": {

        teams: [
            "ADO DEN HAAG",
            "DORDRECHT",
            "ELCHE",
            "PAOK",
            "GALATASARAY",
            "FENERBAHCE",
            "AL ITTIHAD",
            "OLYMPIACOS",
            "ANKARAGUCU"
        ]

    },

    "Burak Yılmaz": {

        teams: [
            "ANTALYASPOR",
            "BESIKTAS",
            "MANISASPOR",
            "FENERBAHCE",
            "ESKISEHIRSPOR",
            "TRABZONSPOR",
            "GALATASARAY",
            "BEIJING GUOAN",
            "LILLE",
            "FORTUNA SITTARD"
        ]

    }

},

"Okay Yokuslu": {
    nationality: "TURKIYE",
    teams: [
        "ALTAY",
        "KAYSERISPOR",
        "TRABZONSPOR",
        "CELTA VIGO",
        "WEST BROMWICH ALBION",
        "GETAFE"
    ]
},

"Caglar Soyuncu": {
    nationality: "TURKIYE",
    teams: [
        "ALTINORDU",
        "FREIBURG",
        "LEICESTER CITY",
        "ATLETICO MADRID",
        "FENERBAHCE"
    ]
},

"Ozan Kabak": {
    nationality: "TURKIYE",
    teams: [
        "GALATASARAY",
        "STUTTGART",
        "SCHALKE 04",
        "LIVERPOOL",
        "NORWICH CITY",
        "HOFFENHEIM",
        "MAINZ"
    ]
},

"Merih Demiral": {
    nationality: "TURKIYE",
    teams: [
        "FENERBAHCE",
        "SPORTING CP",
        "ALANYASPOR",
        "SASSUOLO",
        "JUVENTUS",
        "ATALANTA",
        "AL AHLI"
    ]
},

"Irfan Can Kahveci": {
    nationality: "TURKIYE",
    teams: [
        "GENCLERBIRLIGI",
        "HACETTEPE",
        "ISTANBUL BASAKSEHIR",
        "FENERBAHCE"
    ]
},

"Mert Hakan Yandas": {
    nationality: "TURKIYE",
    teams: [
        "ALTINORDU",
        "MANISASPOR",
        "DEMIRSPOR",
        "SIVASSPOR",
        "FENERBAHCE"
    ]
},

"Berat Ozdemir": {
    nationality: "TURKIYE",
    teams: [
        "KAYSERISPOR",
        "TRABZONSPOR",
        "AL ETTIFAQ"
    ]
},

"Abdulkadir Omur": {
    nationality: "TURKIYE",
    teams: [
        "TRABZONSPOR",
        "HULL CITY"
    ]
},

"Halil Dervisoglu": {
    nationality: "TURKIYE",
    teams: [
        "SPARTA ROTTERDAM",
        "BRENTFORD",
        "GALATASARAY",
        "BURNLEY"
    ]
},

"Nuri Sahin": {
    nationality: "TURKIYE",
    teams: [
        "BORUSSIA DORTMUND",
        "FEYENOORD",
        "REAL MADRID",
        "LIVERPOOL",
        "WERDER BREMEN",
        "ANTALYASPOR"
    ]
},

"Ferdi Kadioglu": {
    nationality: "TURKIYE",
    teams: [
        "NEC NIJMEGEN",
        "FENERBAHCE",
        "BRIGHTON"
    ]
},

"Ederson": {
    nationality: "BREZILYA",
    teams: [
        "RIO AVE",
        "BENFICA",
        "MANCHESTER CITY"
    ]
},

"Nathan Ake": {
    nationality: "HOLLANDA",
    teams: [
        "FEYENOORD",
        "CHELSEA",
        "READING",
        "WATFORD",
        "BOURNEMOUTH",
        "MANCHESTER CITY"
    ]
},

"Matteo Guendouzi": {
    nationality: "FRANSA",
    teams: [
        "POISSY",
        "LORIENT",
        "ARSENAL",
        "HERTHA BERLIN",
        "MARSEILLE",
        "LAZIO"
    ]
},

"Mason Greenwood": {
    nationality: "INGILTERE",
    teams: [
        "MANCHESTER UNITED",
        "GETAFE",
        "MARSEILLE"
    ]
},

"Jorginho": {
    nationality: "ITALYA",
    teams: [
        "HELLAS VERONA",
        "NAPOLI",
        "CHELSEA",
        "ARSENAL",
        "FLAMENGO"
    ]
},

"Nicolo Zaniolo": {
    nationality: "ITALYA",
    teams: [
        "VIRTUS ENTELLA",
        "INTER",
        "ROMA",
        "GALATASARAY",
        "ASTON VILLA",
        "ATALANTA",
        "FIORENTINA"
    ]
},

"Robin Gosens": {
    nationality: "ALMANYA",
    teams: [
        "VITESSE",
        "DORDRECHT",
        "HERACLES",
        "ATALANTA",
        "INTER",
        "UNION BERLIN",
        "FIORENTINA"
    ]
},

"Matteo Darmian": {
    nationality: "ITALYA",
    teams: [
        "MILAN",
        "PADOVA",
        "PALERMO",
        "TORINO",
        "MANCHESTER UNITED",
        "PARMA",
        "INTER"
    ]
},

"Jose Sosa": {
    nationality: "ARJANTIN",
    teams: [
        "ESTUDIANTES",
        "BAYERN MUNIH",
        "NAPOLI",
        "METALIST KHARKIV",
        "BESIKTAS",
        "MILAN",
        "TRABZONSPOR",
        "FENERBAHCE"
    ]
},

"Marek Hamsik": {
    nationality: "SLOVAKYA",
    teams: [
        "SLOVAN BRATISLAVA",
        "BRESCIA",
        "NAPOLI",
        "DALIAN PRO",
        "IFK GOTEBORG",
        "TRABZONSPOR"
    ]
},

"Samuel Eto'o": {
    nationality: "KAMERUN",
    teams: [
        "REAL MADRID",
        "LEGANES",
        "ESPANYOL",
        "MALLORCA",
        "BARCELONA",
        "INTER",
        "ANZHI",
        "CHELSEA",
        "EVERTON",
        "SAMPDORIA",
        "ANTALYASPOR",
        "KONYASPOR"
    ]
},

"Gervinho": {
    nationality: "FILDISI SAHILI",
    teams: [
        "ASEC MIMOSAS",
        "BEVEREN",
        "LE MANS",
        "LILLE",
        "ARSENAL",
        "ROMA",
        "HEBEI CHINA FORTUNE",
        "PARMA",
        "TRABZONSPOR"
    ]
},

"Adem Ljajic": {
    nationality: "SIRBISTAN",
    teams: [
        "PARTIZAN",
        "FIORENTINA",
        "ROMA",
        "INTER",
        "TORINO",
        "BESIKTAS",
        "KARAGUMRUK"
    ]
},

"Edin Visca": {
    nationality: "BOSNA HERSEK",
    teams: [
        "BUDUCNOST BANOVICI",
        "ZELJEZNICAR",
        "ISTANBUL BASAKSEHIR",
        "TRABZONSPOR"
    ]
},

"Rachid Ghezzal": {
    nationality: "CEZAYIR",
    teams: [
        "LYON",
        "MONACO",
        "LEICESTER CITY",
        "BESIKTAS",
        "FIORENTINA"
    ]
},

"Mbaye Diagne": {
    nationality: "SENEGAL",
    teams: [
        "JUVENTUS",
        "LASK",
        "AJACCIO",
        "AL SHABAB",
        "WESTERN SYDNEY",
        "WESTERLO",
        "KASIMPASA",
        "GALATASARAY",
        "CLUB BRUGGE",
        "FATIH KARAGUMRUK"
    ]
},

"Enner Valencia": {
    nationality: "EKVADOR",
    teams: [
        "EMELEC",
        "WEST HAM",
        "EVERTON",
        "TIGRES",
        "FENERBAHCE",
        "INTERNACIONAL"
    ]
},

"Diego Rossi": {
    nationality: "URUGUAY",
    teams: [
        "PENAROL",
        "LOS ANGELES FC",
        "FENERBAHCE",
        "COLUMBUS CREW"
    ]
},

"Jerome Boateng": {
    nationality: "ALMANYA",
    teams: [
        "HERTHA BERLIN",
        "HAMBURGER SV",
        "MANCHESTER CITY",
        "BAYERN MUNIH",
        "LYON",
        "SALERNITANA"
    ]
},

"Kingsley Coman": {
    nationality: "FRANSA",
    teams: [
        "PSG",
        "JUVENTUS",
        "BAYERN MUNIH",
        "AL-NASSR"
    ]
},

"Mario Mandzukic": {
    nationality: "HIRVATISTAN",
    teams: [
        "MARSONIA",
        "NK ZAGREB",
        "DINAMO ZAGREB",
        "WOLFSBURG",
        "BAYERN MUNIH",
        "ATLETICO MADRID",
        "JUVENTUS",
        "AL-DUHAIL",
        "MILAN"
    ]
},

"Arturo Vidal": {
    nationality: "SILI",
    teams: [
        "COLO-COLO",
        "BAYER LEVERKUSEN",
        "JUVENTUS",
        "BAYERN MUNIH",
        "BARCELONA",
        "INTER",
        "FLAMENGO",
        "ATHLETICO PARANAENSE"
    ]
},

"Miralem Pjanic": {
    nationality: "BOSNA HERSEK",
    teams: [
        "METZ",
        "LYON",
        "ROMA",
        "JUVENTUS",
        "BARCELONA",
        "BESIKTAS",
        "SHARJAH"
    ]
},

"Douglas Costa": {
    nationality: "BREZILYA",
    teams: [
        "GREMIO",
        "SHAKHTAR DONETSK",
        "BAYERN MUNIH",
        "JUVENTUS",
        "LA GALAXY",
        "FLUMINENSE",
        "SYDNEY FC",
        "CHIEVO"
    ]
},

"Ruben Loftus-Cheek": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "CRYSTAL PALACE",
        "FULHAM",
        "MILAN"
    ]
},

"Fikayo Tomori": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "BRIGHTON",
        "HULL CITY",
        "DERBY COUNTY",
        "MILAN"
    ]
},

"Mateo Kovacic": {
    nationality: "HIRVATISTAN",
    teams: [
        "DINAMO ZAGREB",
        "INTER",
        "REAL MADRID",
        "CHELSEA",
        "MANCHESTER CITY"
    ]
},

"Nemanja Matic": {
    nationality: "SIRBISTAN",
    teams: [
        "KOLUBARA",
        "KOSICE",
        "CHELSEA",
        "VITESSE",
        "BENFICA",
        "MANCHESTER UNITED",
        "ROMA",
        "RENNES",
        "LYON",
        "SASSUOLO"
    ]
},

"Pedro": {
    nationality: "ISPANYA",
    teams: [
        "BARCELONA",
        "CHELSEA",
        "ROMA",
        "LAZIO"
    ]
},

"Olivier Giroud": {
    nationality: "FRANSA",
    teams: [
        "GRENOBLE",
        "ISTRES",
        "TOURS",
        "MONTPELLIER",
        "ARSENAL",
        "CHELSEA",
        "MILAN",
        "LOS ANGELES FC"
    ]
},

"Davide Zappacosta": {
    nationality: "ITALYA",
    teams: [
        "ISOLA LIRI",
        "ATALANTA",
        "TORINO",
        "CHELSEA",
        "ROMA",
        "GENOA"
    ]
},

"Fabio Borini": {
    nationality: "ITALYA",
    teams: [
        "BOLOGNA",
        "CHELSEA",
        "SWANSEA CITY",
        "PARMA",
        "ROMA",
        "LIVERPOOL",
        "SUNDERLAND",
        "MILAN",
        "HELLAS VERONA",
        "FATIH KARAGUMRUK",
        "SAMPDORIA"
    ]
},

"Alexandre Lacazette": {
    nationality: "FRANSA",
    teams: [
        "LYON",
        "ARSENAL"
    ]
},

"Eric Abidal": {
    nationality: "FRANSA",
    teams: [
        "MONACO",
        "LILLE",
        "LYON",
        "BARCELONA",
        "MONACO"
    ]
},

"Samuel Umtiti": {
    nationality: "FRANSA",
    teams: [
        "LYON",
        "BARCELONA",
        "LECCE",
        "LILLE"
    ]
},

"Jeremy Mathieu": {
    nationality: "FRANSA",
    teams: [
        "SOCHAUX",
        "TOULOUSE",
        "VALENCIA",
        "BARCELONA",
        "SPORTING CP"
    ]
},

"Joao Felix": {
    nationality: "PORTEKIZ",
    teams: [
        "BENFICA",
        "ATLETICO MADRID",
        "CHELSEA",
        "BARCELONA",
        "MILAN"
    ]
},

"Saul Niguez": {
    nationality: "ISPANYA",
    teams: [
        "ATLETICO MADRID",
        "RAYO VALLECANO",
        "CHELSEA",
        "SEVILLA"
    ]
},

"Diego Costa": {
    nationality: "ISPANYA",
    teams: [
        "BRAGA",
        "PENAFIEL",
        "ATLETICO MADRID",
        "VALLADOLID",
        "CELTA VIGO",
        "ALBACETE",
        "CHELSEA",
        "WOLVERHAMPTON",
        "BOTAFOGO",
        "GREMIO"
    ]
},

"Radamel Falcao": {
    nationality: "KOLOMBIYA",
    teams: [
        "RIVER PLATE",
        "PORTO",
        "ATLETICO MADRID",
        "MONACO",
        "MANCHESTER UNITED",
        "CHELSEA",
        "GALATASARAY",
        "RAYO VALLECANO",
        "MILLONARIOS"
    ]
},

"Rodri": {
    nationality: "ISPANYA",
    teams: [
        "ATLETICO MADRID",
        "VILLARREAL",
        "MANCHESTER CITY",
        "BARCELONA"
    ]
},

"Fernando Torres": {
    nationality: "ISPANYA",
    teams: [
        "ATLETICO MADRID",
        "LIVERPOOL",
        "CHELSEA",
        "MILAN",
        "SAGAN TOSU"
    ]
},

"Carlos Tevez": {
    nationality: "ARJANTIN",
    teams: [
        "BOCA JUNIORS",
        "CORINTHIANS",
        "WEST HAM",
        "MANCHESTER UNITED",
        "MANCHESTER CITY",
        "JUVENTUS",
        "SHANGHAI SHENHUA",
        "BOCA JUNIORS"
    ]
},

"Kyle Walker": {
    nationality: "INGILTERE",
    teams: [
        "SHEFFIELD UNITED",
        "TOTTENHAM",
        "ASTON VILLA",
        "QUEENS PARK RANGERS",
        "MANCHESTER CITY",
        "MILAN"
    ]
},

"Yaya Toure": {
    nationality: "FILDISI SAHILI",
    teams: [
        "BEVEREN",
        "METALLURG DONETSK",
        "OLYMPIACOS",
        "MONACO",
        "BARCELONA",
        "MANCHESTER CITY",
        "QINGDAO HUANGHAI"
    ]
},

"Kolo Toure": {
    nationality: "FILDISI SAHILI",
    teams: [
        "ASEC MIMOSAS",
        "ARSENAL",
        "MANCHESTER CITY",
        "LIVERPOOL",
        "CELTIC"
    ]
},

"Robinho": {
    nationality: "BREZILYA",
    teams: [
        "SANTOS",
        "REAL MADRID",
        "MANCHESTER CITY",
        "MILAN",
        "GUANGZHOU EVERGRANDE",
        "SIVASSPOR",
        "ISTANBUL BASAKSEHIR"
    ]
},

"Michael Owen": {
    nationality: "INGILTERE",
    teams: [
        "LIVERPOOL",
        "REAL MADRID",
        "NEWCASTLE UNITED",
        "MANCHESTER UNITED",
        "STOKE CITY"
    ]
},

"Gabriel Heinze": {
    nationality: "ARJANTIN",
    teams: [
        "NEWELL'S OLD BOYS",
        "VALLADOLID",
        "PSG",
        "MANCHESTER UNITED",
        "REAL MADRID",
        "MARSEILLE",
        "ROMA"
    ]
},

"Kaka": {
    nationality: "BREZILYA",
    teams: [
        "SAO PAULO",
        "MILAN",
        "REAL MADRID",
        "ORLANDO CITY"
    ]
},

"Ronaldo Nazario": {
    nationality: "BREZILYA",
    teams: [
        "CRUZEIRO",
        "PSV",
        "BARCELONA",
        "INTER",
        "REAL MADRID",
        "MILAN",
        "CORINTHIANS"
    ]
},

"Luis Figo": {
    nationality: "PORTEKIZ",
    teams: [
        "SPORTING CP",
        "BARCELONA",
        "REAL MADRID",
        "INTER"
    ]
},

"Clarence Seedorf": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "SAMPDORIA",
        "REAL MADRID",
        "INTER",
        "MILAN",
        "BOTAFONOGO"
    ]
},

"Davor Suker": {
    nationality: "HIRVATISTAN",
    teams: [
        "OSIJEK",
        "DINAMO ZAGREB",
        "SEVILLA",
        "REAL MADRID",
        "ARSENAL",
        "WEST HAM",
        "1860 MUNICH"
    ]
},

"Marco Asensio": {
    nationality: "ISPANYA",
    teams: [
        "MALLORCA",
        "REAL MADRID",
        "PSG",
        "ASTON VILLA"
    ]
},

"Jackson Martinez": {
    nationality: "KOLOMBIYA",
    teams: [
        "INDEPENDIENTE MEDELLIN",
        "JAGUARES",
        "PORTO",
        "ATLETICO MADRID",
        "GUANGZHOU EVERGRANDE"
    ]
},

"Ricardo Carvalho": {
    nationality: "PORTEKIZ",
    teams: [
        "LECA",
        "PORTO",
        "CHELSEA",
        "REAL MADRID",
        "MONACO",
        "SHANGHAI SIPG"
    ]
},

"Maxi Lopez": {
    nationality: "ARJANTIN",
    teams: [
        "RIVER PLATE",
        "BARCELONA",
        "MOSCOW",
        "GREMIO",
        "CATANIA",
        "MILAN",
        "SAMPDORIA",
        "CHIEVO",
        "TORINO",
        "UDINESE",
        "SAMBENEDETTESE"
    ]
},

"Sandro": {
    nationality: "BREZILYA",
    teams: [
        "INTERNACIONAL",
        "TOTTENHAM",
        "QUEENS PARK RANGERS",
        "WEST BROMWICH ALBION",
        "ANTALYASPOR",
        "GENOA",
        "BENEVENTO"
    ]
},
    "Oleksandr Zinchenko": {
        nationality: "UKRAYNA",
        teams: [
            "UFA",
            "MANCHESTER CITY",
            "PSV",
            "ARSENAL"
        ]
    },

    "Raheem Sterling": {
        nationality: "INGILTERE",
        teams: [
            "QUEENS PARK RANGERS",
            "LIVERPOOL",
            "MANCHESTER CITY",
            "CHELSEA",
            "ARSENAL"
        ]
    },

    "Alexandre Lacazette": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "ARSENAL",
            "NEOM"
        ]
    },

    "Yossi Benayoun": {
        nationality: "ISRAIL",
        teams: [
            "HAPOEL BEER SHEVA",
            "RACING SANTANDER",
            "WEST HAM",
            "LIVERPOOL",
            "CHELSEA",
            "ARSENAL"
        ]
    },

    "Kolo Toure": {
        nationality: "FILDISI SAHILI",
        teams: [
            "ASEC MIMOSAS",
            "ARSENAL",
            "MANCHESTER CITY",
            "LIVERPOOL"
        ]
    },

    "Bacary Sagna": {
        nationality: "FRANSA",
        teams: [
            "AUXERRE",
            "ARSENAL",
            "MANCHESTER CITY"
        ]
    },

    "Gael Clichy": {
        nationality: "FRANSA",
        teams: [
            "CANNES",
            "ARSENAL",
            "MANCHESTER CITY",
            "ISTANBUL BASAKSEHIR",
            "SERVETTE"
        ]
    },

    "Emmanuel Adebayor": {
        nationality: "TOGO",
        teams: [
            "METZ",
            "MONACO",
            "ARSENAL",
            "MANCHESTER CITY",
            "REAL MADRID",
            "TOTTENHAM",
            "ISTANBUL BASAKSEHIR"
        ]
    },

    "Serge Gnabry": {
        nationality: "ALMANYA",
        teams: [
            "ARSENAL",
            "WEST BROMWICH",
            "BAYERN MUNIH"
        ]
    },

    "Kevin De Bruyne": {
        nationality: "BELCIKA",
        teams: [
            "GENK",
            "CHELSEA",
            "WERDER BREMEN",
            "WOLFSBURG",
            "MANCHESTER CITY"
        ]
    },

    "Nathan Ake": {
        nationality: "HOLLANDA",
        teams: [
            "FEYENOORD",
            "CHELSEA",
            "READING",
            "WATFORD",
            "BOURNEMOUTH",
            "MANCHESTER CITY"
        ]
    },

    "John Stones": {
        nationality: "INGILTERE",
        teams: [
            "BARNSLEY",
            "EVERTON",
            "MANCHESTER CITY"
        ]
    },

    "Jadon Sancho": {
        nationality: "INGILTERE",
        teams: [
            "WATFORD",
            "MANCHESTER CITY",
            "BORUSSIA DORTMUND",
            "MANCHESTER UNITED",
            "CHELSEA",
            "ASTON VILLA"
        ]
    },

    "Henrikh Mkhitaryan": {
        nationality: "ERMENISTAN",
        teams: [
            "PYUNIK",
            "METALLURG DONETSK",
            "SHAKHTAR DONETSK",
            "BORUSSIA DORTMUND",
            "MANCHESTER UNITED",
            "ARSENAL",
            "ROMA",
            "INTER"
        ]
    },

    "Shinji Kagawa": {
        nationality: "JAPONYA",
        teams: [
            "CERESO OSAKA",
            "BORUSSIA DORTMUND",
            "MANCHESTER UNITED",
            "BESIKTAS",
            "REAL ZARAGOZA",
            "PAOK"
        ]
    },

    "Paul Pogba": {
        nationality: "FRANSA",
        teams: [
            "LE HAVRE",
            "MANCHESTER UNITED",
            "JUVENTUS",
            "MONACO"
        ]
    },

    "Patrice Evra": {
        nationality: "FRANSA",
        teams: [
            "MARSALA",
            "MONZA",
            "MONACO",
            "MANCHESTER UNITED",
            "JUVENTUS",
            "MARSEILLE",
            "WEST HAM"
        ]
    },

    "Ashley Young": {
        nationality: "INGILTERE",
        teams: [
            "WATFORD",
            "ASTON VILLA",
            "MANCHESTER UNITED",
            "INTER",
            "EVERTON"
        ]
    },

    "Juan Mata": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "VALENCIA",
            "CHELSEA",
            "MANCHESTER UNITED",
            "GALATASARAY",
            "VISSEL KOBE",
            "WESTERN SYDNEY WANDERERS"
        ]
    },

    "Nemanja Matic": {
        nationality: "SIRBISTAN",
        teams: [
            "KOSICE",
            "CHELSEA",
            "VITESSE",
            "BENFICA",
            "MANCHESTER UNITED",
            "ROMA",
            "RENNES",
            "LYON"
        ]
    },

    "Christian Eriksen": {
        nationality: "DANIMARKA",
        teams: [
            "OB",
            "AJAX",
            "TOTTENHAM",
            "INTER",
            "MANCHESTER UNITED",
            "BRENTFORD"
        ]
    },

    "Dimitar Berbatov": {
        nationality: "BULGARISTAN",
        teams: [
            "CSKA SOFIA",
            "BAYER LEVERKUSEN",
            "TOTTENHAM",
            "MANCHESTER UNITED",
            "FULHAM",
            "MONACO",
            "PAOK"
        ]
    },

    "Michael Owen": {
        nationality: "INGILTERE",
        teams: [
            "LIVERPOOL",
            "REAL MADRID",
            "NEWCASTLE UNITED",
            "MANCHESTER UNITED",
            "STOKE CITY"
        ]
    },

    "Owen Hargreaves": {
        nationality: "INGILTERE",
        teams: [
            "BAYERN MUNIH",
            "MANCHESTER UNITED",
            "MANCHESTER CITY"
        ]
    },

    "Javier Hernandez": {
        nationality: "MEKSIKA",
        teams: [
            "CHIVAS",
            "MANCHESTER UNITED",
            "REAL MADRID",
            "BAYER LEVERKUSEN",
            "WEST HAM",
            "SEVILLA"
        ]
    },

    "Radamel Falcao": {
        nationality: "KOLOMBIYA",
        teams: [
            "RIVER PLATE",
            "PORTO",
            "ATLETICO MADRID",
            "MONACO",
            "MANCHESTER UNITED",
            "CHELSEA",
            "GALATASARAY"
        ]
    },

    "Diego Forlan": {
        nationality: "URUGUAY",
        teams: [
            "INDEPENDIENTE",
            "MANCHESTER UNITED",
            "VILLARREAL",
            "ATLETICO MADRID",
            "INTER",
            "OSAKA CERESO",
            "PENAROL",
            "KITCHEE"
        ]
    },

    "Anderson": {
        nationality: "BREZILYA",
        teams: [
            "GREMIO",
            "PORTO",
            "MANCHESTER UNITED"
        ]
    },

    "Alex Telles": {
        nationality: "BREZILYA",
        teams: [
            "GALATASARAY",
            "GREMIO",
            "PORTO",
            "MANCHESTER UNITED",
            "SEVILLA",
            "AL NASSR",
            "BOTAFOGO"
        ]
    },

    "Fernando Morientes": {
        nationality: "ISPANYA",
        teams: [
            "ALBACETE",
            "REAL ZARAGOZA",
            "REAL MADRID",
            "MONACO",
            "LIVERPOOL",
            "VALENCIA",
            "MARSEILLE"
        ]
    },

    "Xherdan Shaqiri": {
        nationality: "ISVICRE",
        teams: [
            "BASEL",
            "BAYERN MUNIH",
            "INTER",
            "STOKE CITY",
            "LIVERPOOL",
            "LYON",
            "CHICAGO FIRE"
        ]
    },

    "Thiago Alcantara": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "BAYERN MUNIH",
            "LIVERPOOL"
        ]
    },

    "Luis Suarez": {
        nationality: "URUGUAY",
        teams: [
            "NACIONAL",
            "GRONINGEN",
            "AJAX",
            "LIVERPOOL",
            "BARCELONA",
            "ATLETICO MADRID",
            "GREMIO"
        ]
    },

    "Philippe Coutinho": {
        nationality: "BREZILYA",
        teams: [
            "VASCO DA GAMA",
            "INTER",
            "ESPANYOL",
            "LIVERPOOL",
            "BARCELONA",
            "BAYERN MUNIH",
            "ASTON VILLA",
            "AL DUHAIL"
        ]
    },

    "Pepe Reina": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "VILLARREAL",
            "LIVERPOOL",
            "NAPOLI",
            "BAYERN MUNIH",
            "MILAN",
            "ASTON VILLA",
            "LAZIO",
            "COMO"
        ]
    },

    "Daniel Sturridge": {
        nationality: "INGILTERE",
        teams: [
            "MANCHESTER CITY",
            "CHELSEA",
            "BOLTON",
            "LIVERPOOL",
            "WEST BROMWICH",
            "TRABZONSPOR",
            "PERTH GLORY"
        ]
    },

"Milot Rashica": {
    nationality: "KOSOVA",
    teams: [
        "VUSHtrRIA",
        "VITESSE",
        "WERDER BREMEN",
        "NORWICH",
        "GALATASARAY",
        "BESIKTAS"
    ]
},

"Arda Turan": {
    nationality: "TURKIYE",
    teams: [
        "GALATASARAY",
        "MANISASPOR",
        "ATLETICO MADRID",
        "BARCELONA",
        "ISTANBUL BASAKSEHIR"
    ]
},

"Arda Guler": {
    nationality: "TURKIYE",
    teams: [
        "FENERBAHCE",
        "REAL MADRID"
    ]
},

"Rustu Recber": {
    nationality: "TURKIYE",
    teams: [
        "ANTALYASPOR",
        "FENERBAHCE",
        "BARCELONA",
        "BESIKTAS"
    ]
},

"Ernest Muci": {
    nationality: "ARNAVUTLUK",
    teams: [
        "TIRANA",
        "LEGIA WARSZAWA",
        "BESIKTAS",
        "TRABZONSPOR"
    ]
},

"Dusan Vlahovic": {
    nationality: "SIRBISTAN",
    teams: [
        "PARTIZAN",
        "FIORENTINA",
        "JUVENTUS",
        "BESIKTAS"
    ]
},

"Leandro Trossard": {
    nationality: "BELCIKA",
    teams: [
        "GENK",
        "LOMMEL",
        "WESTERLO",
        "BRIGHTON",
        "ARSENAL",
        "BESIKTAS"
    ]
},

"Orkun Kokcu": {
    nationality: "TURKIYE",
    teams: [
        "FEYENOORD",
        "BENFICA",
        "BESIKTAS"
    ]
},

"Mert Gunok": {
    nationality: "TURKIYE",
    teams: [
        "FENERBAHCE",
        "BURSASPOR",
        "ISTANBUL BASAKSEHIR",
        "BESIKTAS"
    ]
},

"Alexander Nubel": {
    nationality: "ALMANYA",
    teams: [
        "PADERBORN",
        "SCHALKE 04",
        "BAYERN MUNIH",
        "MONACO",
        "STUTTGART",
        "BESIKTAS"
    ]
},

"Tiago Djalo": {
    nationality: "PORTEKIZ",
    teams: [
        "SPORTING CP",
        "LILLE",
        "JUVENTUS",
        "PORTO",
        "BESIKTAS"
    ]
},

"Emirhan Topcu": {
    nationality: "TURKIYE",
    teams: [
        "CAYKUR RIZESPOR",
        "MENEMENSPOR",
        "BESIKTAS"
    ]
},

"Ridvan Yilmaz": {
    nationality: "TURKIYE",
    teams: [
        "BESIKTAS",
        "RANGERS"
    ]
},

"Amir Murillo": {
    nationality: "PANAMA",
    teams: [
        "SAN FRANCISCO",
        "NEW YORK RED BULLS",
        "ANDERLECHT",
        "MARSEILLE",
        "BESIKTAS"
    ]
},

"Felix Uduokhai": {
    nationality: "ALMANYA",
    teams: [
        "1860 MUNIH",
        "WOLFSBURG",
        "AUGSBURG",
        "BESIKTAS"
    ]
},

"Vaclav Cerny": {
    nationality: "CEKYA",
    teams: [
        "AJAX",
        "UTRECHT",
        "TWENTE",
        "WOLFSBURG",
        "RANGERS",
        "BESIKTAS"
    ]
},

"Salih Ozcan": {
    nationality: "TURKIYE",
    teams: [
        "KOLN",
        "WOLFSBURG",
        "BORUSSIA DORTMUND",
        "BESIKTAS"
    ]
},

"Amir Hadziahmetovic": {
    nationality: "BOSNA HERSEK",
    teams: [
        "ZELJEZNICAR",
        "KONYASPOR",
        "BESIKTAS",
        "CAYKUR RIZESPOR"
    ]
},

"Mario Gomez": {
    nationality: "ALMANYA",
    teams: [
        "STUTTGART",
        "BAYERN MUNIH",
        "FIORENTINA",
        "BESIKTAS",
        "WOLFSBURG"
    ]
},

"Tolga Zengin": {
    nationality: "TURKIYE",
    teams: [
        "TRABZONSPOR",
        "BESIKTAS"
    ]
},

"Necip Uysal": {
    nationality: "TURKIYE",
    teams: [
        "BESIKTAS"
    ]
},

"Marcelo Guedes": {
    nationality: "BREZILYA",
    teams: [
        "SANTOS",
        "WISLA KRAKOW",
        "PSV",
        "HANNOVER 96",
        "BESIKTAS",
        "LYON",
        "BORDEAUX",
        "FLUMINENSE"
    ]
},

"Tolgay Arslan": {
    nationality: "TURKIYE",
    teams: [
        "HAMBURG",
        "ALEMANNIA AACHEN",
        "BESIKTAS",
        "FENERBAHCE",
        "UDINESE",
        "MELBOURNE CITY",
        "SANFRECCE HIROSHIMA"
    ]
},

"Cenk Tosun": {
    nationality: "TURKIYE",
    teams: [
        "EINTRACHT FRANKFURT",
        "GAZIANTEPSPOR",
        "BESIKTAS",
        "EVERTON",
        "CRYSTAL PALACE",
        "FENERBAHCE",
        "KASIMPASA",
        "KARAGUMRUK"
    ]
},

    "Mohamed Salah": {
        nationality: "MISIR",
        teams: [
            "EL MOKAWLOON",
            "BASEL",
            "CHELSEA",
            "FIORENTINA",
            "ROMA",
            "LIVERPOOL",
            "TRABZONSPOR"
        ]
    },

    "Joe Cole": {
        nationality: "INGILTERE",
        teams: [
            "WEST HAM",
            "CHELSEA",
            "LIVERPOOL",
            "LILLE",
            "ASTON VILLA",
            "COVENTRY CITY"
        ]
    },

    "Mamadou Sakho": {
        nationality: "FRANSA",
        teams: [
            "PSG",
            "LIVERPOOL",
            "CRYSTAL PALACE",
            "MONTPELLIER"
        ]
    },

    "Luis Garcia": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "VALLADOLID",
            "TOLEDO",
            "TENERIFE",
            "ATLETICO MADRID",
            "LIVERPOOL",
            "RACING SANTANDER",
            "PANATHINAIKOS",
            "PUEBLA"
        ]
    },

    "Djibril Cisse": {
        nationality: "FRANSA",
        teams: [
            "AUXERRE",
            "LIVERPOOL",
            "MARSEILLE",
            "Sunderland",
            "Panathinaikos",
            "Lazio",
            "Queens Park Rangers",
            "Kuban Krasnodar",
            "Bastia",
            "Saint-Pierre"
        ]
    },

    "Michael Essien": {
        nationality: "GANA",
        teams: [
            "LIBERTY PROFESSIONALS",
            "BASTIA",
            "LYON",
            "CHELSEA",
            "REAL MADRID",
            "MILAN",
            "PANATHINAIKOS"
        ]
    },

    "Hernan Crespo": {
        nationality: "ARJANTIN",
        teams: [
            "RIVER PLATE",
            "PARMA",
            "LAZIO",
            "INTER",
            "CHELSEA",
            "MILAN",
            "GENOA"
        ]
    },

    "Florent Malouda": {
        nationality: "FRANSA",
        teams: [
            "CHATEAUROUX",
            "GUINGAMP",
            "LYON",
            "CHELSEA",
            "TRABZONSPOR",
            "DELHI DYNAMOS"
        ]
    },

    "Claude Makelele": {
        nationality: "FRANSA",
        teams: [
            "NANTES",
            "MARSEILLE",
            "CELTA VIGO",
            "REAL MADRID",
            "CHELSEA",
            "PSG"
        ]
    },

    "Marcel Desailly": {
        nationality: "FRANSA",
        teams: [
            "NANTES",
            "MARSEILLE",
            "MILAN",
            "CHELSEA"
        ]
    },

    "Frank Leboeuf": {
        nationality: "FRANSA",
        teams: [
            "LAVAL",
            "STRASBOURG",
            "CHELSEA",
            "MARSEILLE",
            "AL-SAAD"
        ]
    },

    "Didier Deschamps": {
        nationality: "FRANSA",
        teams: [
            "NANTES",
            "MARSEILLE",
            "BORDEAUX",
            "JUVENTUS",
            "CHELSEA",
            "VALENCIA"
        ]
    },

    "Loic Remy": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "LENS",
            "NICE",
            "MARSEILLE",
            "QUEENS PARK RANGERS",
            "NEWCASTLE UNITED",
            "CHELSEA",
            "CRYSTAL PALACE",
            "LAS PALMAS",
            "LILLE"
        ]
    },

    "Salomon Kalou": {
        nationality: "FILDISI SAHILI",
        teams: [
            "FEYENOORD",
            "CHELSEA",
            "LILLE",
            "HERTHA BERLIN"
        ]
    },

    "Victor Moses": {
        nationality: "NIGERYA",
        teams: [
            "CRYSTAL PALACE",
            "WIGAN",
            "CHELSEA",
            "LIVERPOOL",
            "WEST HAM",
            "STOKE CITY",
            "FENERBAHCE",
            "INTER",
            "SPARTAK MOSKOVA",
            "LEVANTE"
        ]
    },

    "Yaya Toure": {
        nationality: "FILDISI SAHILI",
        teams: [
            "BEVEREN",
            "METALLURG DONETSK",
            "OLYMPIACOS",
            "MONACO",
            "BARCELONA",
            "MANCHESTER CITY"
        ]
    },

    "Ramires": {
        nationality: "BREZILYA",
        teams: [
            "JOINVILLE",
            "CRUZEIRO",
            "BENFICA",
            "CHELSEA",
            "JIANGSU SUNING",
            "PALMEIRAS"
        ]
    },

    "Mario Gotze": {
        nationality: "ALMANYA",
        teams: [
            "BORUSSIA DORTMUND",
            "BAYERN MUNIH",
            "PSV",
            "EINTRACHT FRANKFURT"
        ]
    },

    "Robert Lewandowski": {
        nationality: "POLONYA",
        teams: [
            "ZNICZ PRUSZKOW",
            "LECH POZNAN",
            "BORUSSIA DORTMUND",
            "BAYERN MUNIH",
            "BARCELONA"
        ]
    },

    "Ilkay Gundogan": {
        nationality: "ALMANYA",
        teams: [
            "VFL BOCHUM",
            "NUREMBERG",
            "BORUSSIA DORTMUND",
            "MANCHESTER CITY",
            "BARCELONA"
        ]
    },

    "Mats Hummels": {
        nationality: "ALMANYA",
        teams: [
            "BAYERN MUNIH",
            "BORUSSIA DORTMUND",
            "ROMA"
        ]
    },

    "Ivan Perisic": {
        nationality: "HIRVATISTAN",
        teams: [
            "HAJDUK SPLIT",
            "SOCHAUX",
            "ROSIERES",
            "CLUB BRUGGE",
            "BORUSSIA DORTMUND",
            "WOLFSBURG",
            "INTER",
            "BAYERN MUNIH",
            "TOTTENHAM",
            "PSV"
        ]
    },

    "Mario Mandzukic": {
        nationality: "HIRVATISTAN",
        teams: [
            "MARSONIA",
            "NK ZAGREB",
            "DINAMO ZAGREB",
            "WOLFSBURG",
            "BAYERN MUNIH",
            "ATLETICO MADRID",
            "JUVENTUS",
            "AL DUHAIL",
            "MILAN"
        ]
    },

    "Lukas Podolski": {
        nationality: "ALMANYA",
        teams: [
            "FC KOLN",
            "BAYERN MUNIH",
            "FC KOLN",
            "ARSENAL",
            "INTER",
            "GALATASARAY",
            "VISSel KOBE",
            "ANTALYASPOR",
            "GORNYK ZABRZE"
        ]
    },

    "Emre Can": {
        nationality: "ALMANYA",
        teams: [
            "BAYERN MUNIH",
            "BAYER LEVERKUSEN",
            "LIVERPOOL",
            "JUVENTUS",
            "BORUSSIA DORTMUND"
        ]
    },

    "Sami Khedira": {
        nationality: "ALMANYA",
        teams: [
            "STUTTGART",
            "REAL MADRID",
            "JUVENTUS",
            "HERTHA BERLIN"
        ]
    },

    "Mark van Bommel": {
        nationality: "HOLLANDA",
        teams: [
            "FORTUNA SITTARD",
            "PSV",
            "BARCELONA",
            "BAYERN MUNIH",
            "MILAN"
        ]
    },

    "Franck Ribery": {
        nationality: "FRANSA",
        teams: [
            "BOULOGNE",
            "ALES",
            "BREST",
            "METZ",
            "GALATASARAY",
            "MARSEILLE",
            "BAYERN MUNIH",
            "FIORENTINA",
            "SALERNITANA"
        ]
    },

    "Luca Toni": {
        nationality: "ITALYA",
        teams: [
            "EMPOLI",
            "FIORENTINA",
            "BAYERN MUNIH",
            "ROMA",
            "GENOA",
            "JUVENTUS",
            "AL NASR",
            "HELLAS VERONA"
        ]
    },

    "Luiz Gustavo": {
        nationality: "BREZILYA",
        teams: [
            "CORINTHIANS ALAGOANO",
            "Hoffenheim",
            "BAYERN MUNIH",
            "WOLFSBURG",
            "MARSEILLE",
            "FENERBAHCE",
            "AL NASSR",
            "SAO PAULO"
        ]
    },

    "Luis Enrique": {
        nationality: "ISPANYA",
        teams: [
            "SPORTING GIJON",
            "REAL MADRID",
            "BARCELONA"
        ]
    },

    "Michael Laudrup": {
        nationality: "DANIMARKA",
        teams: [
            "BRONDBY",
            "LAZIO",
            "JUVENTUS",
            "BARCELONA",
            "REAL MADRID",
            "VISSEL KOBE",
            "AJAX"
        ]
    },

    "Javier Saviola": {
        nationality: "ARJANTIN",
        teams: [
            "RIVER PLATE",
            "BARCELONA",
            "MONACO",
            "SEVILLA",
            "REAL MADRID",
            "BENFICA",
            "MALAGA",
            "OLYMPIACOS",
            "VERONA"
        ]
    },

    "Martin Caceres": {
        nationality: "URUGUAY",
        teams: [
            "DEFENSOR SPORTING",
            "BARCELONA",
            "JUVENTUS",
            "SEVILLA",
            "VILLARREAL",
            "LAZIO",
            "HELLAS VERONA",
            "FIORENTINA",
            "CAGLIARI",
            "LOS ANGELES GALAXY",
            "LEVANTE"
        ]
    },

    "Arturo Vidal": {
        nationality: "SILI",
        teams: [
            "COLO COLO",
            "BAYER LEVERKUSEN",
            "JUVENTUS",
            "BAYERN MUNIH",
            "BARCELONA",
            "INTER",
            "FLAMENGO",
            "ATHLETICO PARANAENSE"
        ]
    },

    "Dani Alves": {
        nationality: "BREZILYA",
        teams: [
            "BAHIA",
            "SEVILLA",
            "BARCELONA",
            "JUVENTUS",
            "PSG",
            "SAO PAULO",
            "UNAM PUMAS"
        ]
    },

    "Neymar": {
        nationality: "BREZILYA",
        teams: [
            "SANTOS",
            "BARCELONA",
            "PSG",
            "AL HILAL"
        ]
    },

    "Rafinha": {
        nationality: "BREZILYA",
        teams: [
            "BARCELONA",
            "INTER",
            "CELTA VIGO",
            "REAL SOCIEDAD",
            "PSG"
        ]
    },

    "Adriano": {
        nationality: "BREZILYA",
        teams: [
            "CORITIBA",
            "SEVILLA",
            "BARCELONA",
            "BESIKTAS",
            "ATLETICO PARANAENSE",
            "EUPEN"
        ]
    },

    "Pedro": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "CHELSEA",
            "ROMA",
            "LAZIO"
        ]
    },

    "Antoine Griezmann": {
        nationality: "FRANSA",
        teams: [
            "REAL SOCIEDAD",
            "ATLETICO MADRID",
            "BARCELONA"
        ]
    },

    "Marcos Alonso": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "BOLTON",
            "FIORENTINA",
            "SUNDERLAND",
            "CHELSEA",
            "BARCELONA"
        ]
    },

    "Cesar Azpilicueta": {
        nationality: "ISPANYA",
        teams: [
            "OSASUNA",
            "MARSEILLE",
            "CHELSEA",
            "ATLETICO MADRID"
        ]
    },

    "Oriol Romeu": {
        nationality: "ISPANYA",
        teams: [
            "BARCELONA",
            "CHELSEA",
            "VALENCIA",
            "STUTTGART",
            "SOUTHAMPTON"
        ]
    },

    "Eric Abidal": {
        nationality: "FRANSA",
        teams: [
            "MONACO",
            "LILLE",
            "LYON",
            "BARCELONA"
        ]
    },

    "Samuel Umtiti": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "BARCELONA",
            "LECCE"
        ]
    },

    "Lucas Digne": {
        nationality: "FRANSA",
        teams: [
            "LILLE",
            "PSG",
            "ROMA",
            "BARCELONA",
            "EVERTON",
            "ASTON VILLA"
        ]
    },

    "Maxwell": {
        nationality: "BREZILYA",
        teams: [
            "CRUZEIRO",
            "AJAX",
            "INTER",
            "BARCELONA",
            "PSG"
        ]
    },

    "Thiago Motta": {
        nationality: "ITALYA",
        teams: [
            "BARCELONA",
            "ATLETICO MADRID",
            "GENOA",
            "INTER",
            "PSG"
        ]
    },

    "Ronaldo Nazario": {
        nationality: "BREZILYA",
        teams: [
            "CRUZEIRO",
            "PSV",
            "BARCELONA",
            "INTER",
            "REAL MADRID",
            "MILAN",
            "CORINTHIANS"
        ]
    },

    "Robinho": {
        nationality: "BREZILYA",
        teams: [
            "SANTOS",
            "REAL MADRID",
            "MANCHESTER CITY",
            "MILAN",
            "GUANGZHOU EVERGRANDE",
            "ATLETICO MINEIRO",
            "SIVASSPOR",
            "ISTANBUL BASAKSEHIR"
        ]
    },

    "Kaka": {
        nationality: "BREZILYA",
        teams: [
            "SAO PAULO",
            "MILAN",
            "REAL MADRID",
            "ORLANDO CITY"
        ]
    },

    "Clarence Seedorf": {
        nationality: "HOLLANDA",
        teams: [
            "AJAX",
            "SAMPDORIA",
            "REAL MADRID",
            "INTER",
            "MILAN",
            "BOTAFOGO"
        ]
    },

    "Patrick Vieira": {
        nationality: "FRANSA",
        teams: [
            "CANNES",
            "MILAN",
            "ARSENAL",
            "JUVENTUS",
            "INTER",
            "MANCHESTER CITY"
        ]
    },

    "Radja Nainggolan": {
        nationality: "BELCIKA",
        teams: [
            "PIACENZA",
            "CAGLIARI",
            "ROMA",
            "INTER",
            "SPAL",
            "ANTWERP",
            "BHAYANGKARA",
            "LOKEREN-TEMSE",
            "PATRO"
        ]
    },

    "Lucio": {
        nationality: "BREZILYA",
        teams: [
            "INTERNACIONAL",
            "BAYER LEVERKUSEN",
            "BAYERN MUNIH",
            "INTER",
            "JUVENTUS"
        ]
    },

    "Hernanes": {
        nationality: "BREZILYA",
        teams: [
            "SAO PAULO",
            "LAZIO",
            "INTER",
            "JUVENTUS"
        ]
    },

    "Antonio Candreva": {
        nationality: "ITALYA",
        teams: [
            "UDINESE",
            "LIVORNO",
            "JUVENTUS",
            "CESENA",
            "PARMA",
            "LAZIO",
            "INTER",
            "SAMPDORIA",
            "SALERNITANA"
        ]
    },

    "Christian Vieri": {
        nationality: "ITALYA",
        teams: [
            "TORINO",
            "PISA",
            "RAVENNA",
            "VENEZIA",
            "ATALANTA",
            "JUVENTUS",
            "ATLETICO MADRID",
            "LAZIO",
            "INTER",
            "MILAN",
            "MONACO",
            "FIORENTINA",
            "SAMPDORIA"
        ]
    },

    "Ronaldinho": {
        nationality: "BREZILYA",
        teams: [
            "GREMIO",
            "PSG",
            "BARCELONA",
            "MILAN",
            "FLAMENGO",
            "ATLETICO MINEIRO",
            "QUERETARO",
            "FLUMINENSE"
        ]
    },

    "David Beckham": {
        nationality: "INGILTERE",
        teams: [
            "MANCHESTER UNITED",
            "REAL MADRID",
            "LA GALAXY",
            "MILAN",
            "PSG"
        ]
    },

    "Thiago Silva": {
        nationality: "BREZILYA",
        teams: [
            "JUVENTUDE",
            "DYNAMO MOSKOVA",
            "FLUMINENSE",
            "MILAN",
            "PSG",
            "CHELSEA"
        ]
    },

    "Marquinhos": {
        nationality: "BREZILYA",
        teams: [
            "CORINTHIANS",
            "ROMA",
            "PSG"
        ]
    },

    "Georginio Wijnaldum": {
        nationality: "HOLLANDA",
        teams: [
            "FEYENOORD",
            "PSV",
            "NEWCASTLE UNITED",
            "LIVERPOOL",
            "PSG",
            "AL ETTIFAQ"
        ]
    },

    "Memphis Depay": {
        nationality: "HOLLANDA",
        teams: [
            "PSV",
            "MANCHESTER UNITED",
            "LYON",
            "BARCELONA",
            "ATLETICO MADRID",
            "CORINTHIANS"
        ]
    },

    "Anthony Martial": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "MONACO",
            "MANCHESTER UNITED",
            "SEVILLA",
            "AEK ATHENS"
        ]
    },

    "Clement Lenglet": {
        nationality: "FRANSA",
        teams: [
            "NANCY",
            "SEVILLA",
            "BARCELONA",
            "TOTTENHAM",
            "ASTON VILLA",
            "ATLETICO MADRID"
        ]
    },

    "Kevin Gameiro": {
        nationality: "FRANSA",
        teams: [
            "STRASBOURG",
            "LORIENT",
            "PSG",
            "SEVILLA",
            "ATLETICO MADRID",
            "VALENCIA"
        ]
    },

    "Bafetimbi Gomis": {
        nationality: "FRANSA",
        teams: [
            "SAINT-ETIENNE",
            "TROYES",
            "LYON",
            "SWANSEA",
            "MARSEILLE",
            "GALATASARAY",
            "AL HILAL",
            "AL WEHDA",
            "KAWASAKI FRONTALE"
        ]
    },

    "Hatem Ben Arfa": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "MARSEILLE",
            "NEWCASTLE UNITED",
            "HULL CITY",
            "NICE",
            "PSG",
            "RENNES",
            "BORDEAUX",
            "LILLE"
        ]
    },

    "Mathieu Valbuena": {
        nationality: "FRANSA",
        teams: [
            "LIBOURNE",
            "MARSEILLE",
            "DINAMO MOSKOVA",
            "LYON",
            "FENERBAHCE",
            "OLYMPIACOS",
            "APOEL"
        ]
    },

    "Javier Pastore": {
        nationality: "ARJANTIN",
        teams: [
            "TALLERES",
            "HURACAN",
            "PALERMO",
            "PSG",
            "ROMA",
            "ELCHE"
        ]
    },

    "Ezequiel Lavezzi": {
        nationality: "ARJANTIN",
        teams: [
            "ESTUDIANTES",
            "SAN LORENZO",
            "NAPOLI",
            "PSG",
            "HEBEI CHINA FORTUNE"
        ]
    },

    "Miralem Pjanic": {
        nationality: "BOSNA HERSEK",
        teams: [
            "METZ",
            "LYON",
            "ROMA",
            "JUVENTUS",
            "BARCELONA",
            "BESIKTAS",
            "SHARJAH"
        ]
    },

    "Blaise Matuidi": {
        nationality: "FRANSA",
        teams: [
            "TROYES",
            "SAINT-ETIENNE",
            "PSG",
            "JUVENTUS",
            "INTER MIAMI"
        ]
    },

    "Kingsley Coman": {
        nationality: "FRANSA",
        teams: [
            "PSG",
            "JUVENTUS",
            "BAYERN MUNIH"
        ]
    },

    "Lucas Hernandez": {
        nationality: "FRANSA",
        teams: [
            "ATLETICO MADRID",
            "BAYERN MUNIH",
            "PSG"
        ]
    },

    "Theo Hernandez": {
        nationality: "FRANSA",
        teams: [
            "ATLETICO MADRID",
            "ALAVES",
            "REAL MADRID",
            "REAL SOCIEDAD",
            "MILAN"
        ]
    },

    "Medhi Benatia": {
        nationality: "FAS",
        teams: [
            "MARSEILLE",
            "CLERMONT",
            "UDINESE",
            "ROMA",
            "BAYERN MUNIH",
            "JUVENTUS",
            "AL Duhail",
            "FATIH KARAGUMRUK"
        ]
    },

    "Douglas Costa": {
        nationality: "BREZILYA",
        teams: [
            "GREMIO",
            "SHAKHTAR DONETSK",
            "BAYERN MUNIH",
            "JUVENTUS",
            "GREMIO",
            "LA GALAXY",
            "FLUMINENSE"
        ]
    },

    "Corentin Tolisso": {
        nationality: "FRANSA",
        teams: [
            "LYON",
            "BAYERN MUNIH"
        ]
    },

    "Ousmane Dembele": {
        nationality: "FRANSA",
        teams: [
            "RENNES",
            "BORUSSIA DORTMUND",
            "BARCELONA",
            "PSG"
        ]
    },

    "Gareth Bale": {
        nationality: "GALLER",
        teams: [
            "SOUTHAMPTON",
            "TOTTENHAM",
            "REAL MADRID",
            "LOS ANGELES FC"
        ]
    },

    "Luka Modric": {
        nationality: "HIRVATISTAN",
        teams: [
            "DINAMO ZAGREB",
            "ZAKPECK",
            "Zrinjski Mostar",
            "INTER ZAPRESIC",
            "TOTTENHAM",
            "REAL MADRID",
            "MILAN"
        ]
    },

    "Rafael van der Vaart": {
        nationality: "HOLLANDA",
        teams: [
            "AJAX",
            "HAMBURG",
            "REAL MADRID",
            "TOTTENHAM",
            "REAL BETIS",
            "MIDTJYLLAND",
            "ESBJERG"
        ]
    },

    "Roberto Soldado": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "OSASUNA",
            "GETAFE",
            "VALENCIA",
            "TOTTENHAM",
            "VILLARREAL",
            "FENERBAHCE",
            "GRANADA",
            "LEVANTE"
        ]
    },

    "Fernando Llorente": {
        nationality: "ISPANYA",
        teams: [
            "ATHLETIC BILBAO",
            "JUVENTUS",
            "SEVILLA",
            "SWANSEA",
            "TOTTENHAM",
            "NAPOLI",
            "UDINESE",
            "EIBAR"
        ]
    },

    "Erik Lamela": {
        nationality: "ARJANTIN",
        teams: [
            "RIVER PLATE",
            "ROMA",
            "TOTTENHAM",
            "SEVILLA"
        ]
    },

    "Tanguy Ndombele": {
        nationality: "FRANSA",
        teams: [
            "AMIENS",
            "LYON",
            "TOTTENHAM",
            "NAPOLI",
            "GALATASARAY"
        ]
    },

    "Clinton N'Jie": {
        nationality: "KAMERUN",
        teams: [
            "LYON",
            "TOTTENHAM",
            "MARSEILLE",
            "DINAMO MOSKOVA"
        ]
    },

    "Serge Aurier": {
        nationality: "FILDISI SAHILI",
        teams: [
            "LENS",
            "TOULOUSE",
            "PSG",
            "TOTTENHAM",
            "VILLARREAL",
            "NOTTINGHAM FOREST"
        ]
    },

    "Lucas Moura": {
        nationality: "BREZILYA",
        teams: [
            "SAO PAULO",
            "PSG",
            "TOTTENHAM"
        ]
    },

    "Kieran Trippier": {
        nationality: "INGILTERE",
        teams: [
            "MANCHESTER CITY",
            "BARNSLEY",
            "BURNLEY",
            "TOTTENHAM",
            "ATLETICO MADRID",
            "NEWCASTLE UNITED"
        ]
    },

    "Toby Alderweireld": {
        nationality: "BELCIKA",
        teams: [
            "AJAX",
            "ATLETICO MADRID",
            "SOUTHAMPTON",
            "TOTTENHAM",
            "AL Duhail",
            "ANTWERP"
        ]
    },

    "Jan Vertonghen": {
        nationality: "BELCIKA",
        teams: [
            "AJAX",
            "TOTTENHAM",
            "BENFICA",
            "ANDERLECHT"
        ]
    },

    "Edin Dzeko": {
        nationality: "BOSNA HERSEK",
        teams: [
            "FK ZELJEZNICAR",
            "TEP",
            "UDINESE",
            "WOLFSBURG",
            "MANCHESTER CITY",
            "ROMA",
            "INTER",
            "FENERBAHCE"
        ]
    },

    "Aleksandar Kolarov": {
        nationality: "SIRBISTAN",
        teams: [
            "CUKARICKI",
            "OFK BEOGRAD",
            "LAZIO",
            "MANCHESTER CITY",
            "ROMA",
            "INTER"
        ]
    },

    "Stevan Jovetic": {
        nationality: "KARADAG",
        teams: [
            "PARTIZAN",
            "FIORENTINA",
            "MANCHESTER CITY",
            "INTER",
            "SEVILLA",
            "MONACO",
            "HERTHA BERLIN",
            "OLYMPIACOS"
        ]
    },

    "Walter Samuel": {
        nationality: "ARJANTIN",
        teams: [
            "NEWELL'S OLD BOYS",
            "BOCA JUNIORS",
            "ROMA",
            "REAL MADRID",
            "INTER",
            "BASEL"
        ]
    },

    "Paulo Futre": {
        nationality: "PORTEKIZ",
        teams: [
            "SPORTING CP",
            "PORTO",
            "ATLETICO MADRID",
            "BENFICA"
        ]
    },

    "Mamadou Niang": {
        nationality: "SENEGAL",
        teams: [
            "TROYES",
            "METZ",
            "STRASBOURG",
            "MARSEILLE",
            "FENERBAHCE",
            "AL SADD"
        ]
    },

    "Erling Haaland": {
        nationality: "NORVEC",
        teams: [
            "BRYNE",
            "MOLDE",
            "RED BULL SALZBURG",
            "BORUSSIA DORTMUND",
            "MANCHESTER CITY"
        ]
    },

    "Jude Bellingham": {
        nationality: "INGILTERE",
        teams: [
            "BIRMINGHAM CITY",
            "BORUSSIA DORTMUND",
            "REAL MADRID"
        ]
    },

    "Leroy Sane": {
        nationality: "ALMANYA",
        teams: [
            "SCHALKE 04",
            "MANCHESTER CITY",
            "BAYERN MUNIH"
        ]
    },

    "Harry Kane": {
        nationality: "INGILTERE",
        teams: [
            "TOTTENHAM",
            "BAYERN MUNIH"
        ]
    },

    "Darwin Nunez": {
        nationality: "URUGUAY",
        teams: [
            "PENAROL",
            "ALMERIA",
            "BENFICA",
            "LIVERPOOL"
        ]
    },

    "Luis Diaz": {
        nationality: "KOLOMBIYA",
        teams: [
            "BARRANQUILLA",
            "JUNIOR",
            "PORTO",
            "LIVERPOOL"
        ]
    },

    "Emre Belozoglu": {
        nationality: "TURKIYE",
        teams: [
            "GALATASARAY",
            "INTER",
            "NEWCASTLE UNITED",
            "FENERBAHCE",
            "ATLETICO MADRID",
            "ISTANBUL BASAKSEHIR"
        ]
    },

    "Caner Erkin": {
        nationality: "TURKIYE",
        teams: [
            "MANISASPOR",
            "CSKA MOSKOVA",
            "GALATASARAY",
            "FENERBAHCE",
            "BESIKTAS",
            "INTER",
            "KARAGUMRUK",
            "EYUPSPOR"
        ]
    },

    "Mehmet Topal": {
        nationality: "TURKIYE",
        teams: [
            "DARDANELSPOR",
            "GALATASARAY",
            "VALENCIA",
            "FENERBAHCE",
            "ISTANBUL BASAKSEHIR",
            "BESIKTAS"
        ]
    },

    "Sergen Yalcin": {
        nationality: "TURKIYE",
        teams: [
            "BESIKTAS",
            "ISTANBULSPOR",
            "FENERBAHCE",
            "GALATASARAY",
            "TRABZONSPOR"
        ]
    },

    "Emre Asik": {
        nationality: "TURKIYE",
        teams: [
            "SARIYER",
            "FENERBAHCE",
            "ISTANBULSPOR",
            "GALATASARAY",
            "BESIKTAS",
            "ANKARAGUCU"
        ]
    },

    "Ahmet Yildirim": {
        nationality: "TURKIYE",
        teams: [
            "ANKARAGUCU",
            "GENCLERBIRLIGI",
            "FENERBAHCE",
            "GALATASARAY",
            "BESIKTAS",
            "DIYARBAKIRSPOR"
        ]
    },

    "Mehmet Yozgatli": {
        nationality: "TURKIYE",
        teams: [
            "Sakaryaspor",
            "Galatasaray",
            "Fenerbahce",
            "Besiktas",
            "Rizespor",
            "Ankaragucu"
        ]
    },

    "Tumer Metin": {
        nationality: "TURKIYE",
        teams: [
            "ZONGULDAKSPOR",
            "SAMSUNSPOR",
            "BESIKTAS",
            "FENERBAHCE",
            "LARISSA"
        ]
    },

    "Tanju Colak": {
        nationality: "TURKIYE",
        teams: [
            "SAMSUNSPOR",
            "GALATASARAY",
            "FENERBAHCE"
        ]
    },

    "Haim Revivo": {
        nationality: "ISRAIL",
        teams: [
            "BNEI YEHUDA",
            "CELTA VIGO",
            "FENERBAHCE",
            "GALATASARAY"
        ]
    },

    "Ozan Tufan": {
        nationality: "TURKIYE",
        teams: [
            "BURSASPOR",
            "FENERBAHCE",
            "WATFORD",
            "HULL CITY",
            "TRABZONSPOR"
        ]
    },

    "Gokhan Gonul": {
        nationality: "TURKIYE",
        teams: [
            "GENCLERBIRLIGI",
            "HACETTEPE",
            "FENERBAHCE",
            "BESIKTAS",
            "RIZESPOR"
        ]
    },

    "Oguzhan Ozyakup": {
        nationality: "TURKIYE",
        teams: [
            "AZ ALKMAAR",
            "ARSENAL",
            "BESIKTAS",
            "FEYENOORD"
        ]
    },

    "Gokhan Tore": {
        nationality: "TURKIYE",
        teams: [
            "CHELSEA",
            "HAMBURG",
            "RUBIN KAZAN",
            "BESIKTAS",
            "WEST HAM",
            "TRABZONSPOR",
            "ADANA DEMIRSPOR"
        ]
    },

    "Umut Bulut": {
        nationality: "TURKIYE",
        teams: [
            "PETROL OFISI",
            "ANKARAGUCU",
            "TRABZONSPOR",
            "TOULOUSE",
            "GALATASARAY",
            "KAYSERISPOR",
            "YENI MALATYASPOR"
        ]
    },

    "Selcuk Inan": {
        nationality: "TURKIYE",
        teams: [
            "CANAKKALE DARDANEL",
            "MANISASPOR",
            "TRABZONSPOR",
            "GALATASARAY"
        ]
    },

    "Serdar Aziz": {
        nationality: "TURKIYE",
        teams: [
            "BURSASPOR",
            "GALATASARAY",
            "FENERBAHCE"
        ]
    },

    "Yasin Oztekin": {
        nationality: "TURKIYE",
        teams: [
            "TRABZONSPOR",
            "KAYSERISPOR",
            "GENCLERBIRLIGI",
            "GALATASARAY",
            "GOZTEPE",
            "SAMSUNSPOR"
        ]
    },

    "Olcay Sahan": {
        nationality: "TURKIYE",
        teams: [
            "DUISBURG",
            "KAISERSLAUTERN",
            "BESIKTAS",
            "TRABZONSPOR",
            "GOZTEPE"
        ]
    },

    "Volkan Babacan": {
        nationality: "TURKIYE",
        teams: [
            "FENERBAHCE",
            "MANISASPOR",
            "KAYSERISPOR",
            "ISTANBUL BASAKSEHIR"
        ]
    },

    "Michy Batshuayi": {
        nationality: "BELCIKA",
        teams: [
            "STANDARD LIEGE",
            "MARSEILLE",
            "CHELSEA",
            "BORUSSIA DORTMUND",
            "VALENCIA",
            "CRYSTAL PALACE",
            "BESIKTAS",
            "FENERBAHCE",
            "GALATASARAY",
            "EINTRACHT FRANKFURT"
        ]
    },

    "Mertens": {
        nationality: "BELCIKA",
        teams: [
            "GENT",
            "AGOVV",
            "UTRECHT",
            "PSV",
            "NAPOLI",
            "GALATASARAY"
        ]
    },

    "Didier Drogba": {
        nationality: "FILDISI SAHILI",
        teams: [
            "LE MANS",
            "GUINGAMP",
            "MARSEILLE",
            "CHELSEA",
            "SHANGHAI SHENHUA",
            "GALATASARAY",
            "MONTREAL IMPACT",
            "PHOENIX RISING"
        ]
    },

    "Wesley Sneijder": {
        nationality: "HOLLANDA",
        teams: [
            "AJAX",
            "REAL MADRID",
            "INTER",
            "GALATASARAY",
            "NICE",
            "AL GHARAFA"
        ]
    },

    "Milan Baros": {
        nationality: "CEKYA",
        teams: [
            "BANIK OSTRAVA",
            "LIVERPOOL",
            "ASTON VILLA",
            "LYON",
            "PORTSMOUTH",
            "GALATASARAY",
            "ANTALYASPOR",
            "MELBOURNE VICTORY",
            "SLOVAN LIBEREC"
        ]
    },

    "Harry Kewell": {
        nationality: "AVUSTRALYA",
        teams: [
            "LEEDS UNITED",
            "LIVERPOOL",
            "GALATASARAY",
            "MELBOURNE VICTORY",
            "AL GHARAFA"
        ]
    },

    "Fernando Muslera": {
        nationality: "URUGUAY",
        teams: [
            "MONTEVIDEO WANDERERS",
            "NACIONAL",
            "LAZIO",
            "GALATASARAY"
        ]
    },

    "Didier Zokora": {
        nationality: "FILDISI SAHILI",
        teams: [
            "ASEC MIMOSAS",
            "BEVEREN",
            "ACADEMICA",
            "SAINT-ETIENNE",
            "TOTTENHAM",
            "SEVILLA",
            "TRABZONSPOR",
            "PUNE CITY"
        ]
    },

    "Talisca": {
        nationality: "BREZILYA",
        teams: [
            "BAHIA",
            "BENFICA",
            "BESIKTAS",
            "GUANGZHOU EVERGRANDE",
            "AL NASSR",
            "FENERBAHCE"
        ]
    },

    "Elano": {
        nationality: "BREZILYA",
        teams: [
            "SANTOS",
            "SHAKHTAR DONETSK",
            "MANCHESTER CITY",
            "GALATASARAY",
            "GREMIO",
            "FLAMENGO"
        ]
    },
 
    "Robin van Persie": {
        nationality: "HOLLANDA",
        teams: [
            "ARSENAL",
            "MANCHESTER UNITED",
            "FENERBAHCE",
            "FEYENOORD"
        ]
    },

"Benjamin Pavard": {
    nationality: "FRANSA",
    teams: [
        "LILLE",
        "STUTTGART",
        "BAYERN MUNIH",
        "INTER"
    ]
},

"Khvicha Kvaratskhelia": {
    nationality: "GURCISTAN",
    teams: [
        "DINAMO TBILISI",
        "RUSTAVI",
        "LOKOMOTIV MOSKOVA",
        "RUBIN KAZAN",
        "DINAMO BATUMI",
        "NAPOLI",
        "PSG"
    ]
},

"Victor Osimhen": {
    nationality: "NIGERYA",
    teams: [
        "ULTIMATE STRIKERS",
        "WOLFSBURG",
        "CHARLEROI",
        "RSC CHARLEROI",
        "LILLE",
        "NAPOLI",
        "GALATASARAY"
    ]
},

"Kim Min-jae": {
    nationality: "GUNEY KORE",
    teams: [
        "GYEONGJU KHNP",
        "JEONBUK HYUNDAI",
        "BEIJING GUOAN",
        "FENERBAHCE",
        "NAPOLI",
        "BAYERN MUNIH"
    ]
},

"Joao Palhinha": {
    nationality: "PORTEKIZ",
    teams: [
        "SACAVENENSE",
        "SPORTING CP",
        "MOREIRENSE",
        "BELENENSES",
        "BRAGA",
        "FULHAM",
        "BAYERN MUNIH"
    ]
},

"Sergej Milinkovic-Savic": {
    nationality: "SIRBISTAN",
    teams: [
        "VOJVODINA",
        "GENK",
        "LAZIO",
        "AL HILAL"
    ]
},

"Nicolas Jackson": {
    nationality: "SENEGAL",
    teams: [
        "CASA SPORTS",
        "VILLARREAL B",
        "VILLARREAL",
        "CHELSEA",
        "BAYERN MUNIH"
    ]
},

"Marc Cucurella": {
    nationality: "ISPANYA",
    teams: [
        "BARCELONA",
        "EIBAR",
        "GETAFE",
        "BRIGHTON",
        "CHELSEA"
    ]
},

"Enzo Fernandez": {
    nationality: "ARJANTIN",
    teams: [
        "RIVER PLATE",
        "DEFENSA Y JUSTICIA",
        "RIVER PLATE",
        "BENFICA",
        "CHELSEA"
    ]
},

"Moises Caicedo": {
    nationality: "EKVADOR",
    teams: [
        "INDEPENDIENTE DEL VALLE",
        "BEERSCHOT",
        "BRIGHTON",
        "CHELSEA"
    ]
},

"Conor Gallagher": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "CHARLTON",
        "SWANSEA CITY",
        "WEST BROMWICH ALBION",
        "CRYSTAL PALACE",
        "ATLETICO MADRID"
    ]
},

"Noni Madueke": {
    nationality: "INGILTERE",
    teams: [
        "CRYSTAL PALACE",
        "TOTTENHAM",
        "PSV",
        "CHELSEA",
        "ARSENAL"
    ]
},

"Pedro Neto": {
    nationality: "PORTEKIZ",
    teams: [
        "BRAGA",
        "LAZIO",
        "WOLVERHAMPTON",
        "CHELSEA"
    ]
},

"Romeo Lavia": {
    nationality: "BELCIKA",
    teams: [
        "ANDERLECHT",
        "MANCHESTER CITY",
        "SOUTHAMPTON",
        "CHELSEA"
    ]
},

"Levi Colwill": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "HUDDERSFIELD",
        "BRIGHTON"
    ]
},

"Axel Disasi": {
    nationality: "FRANSA",
    teams: [
        "PARIS FC",
        "STADE DE REIMS",
        "AS MONACO",
        "CHELSEA"
    ]
},

"Trevoh Chalobah": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "IPSWICH TOWN",
        "HUDDERSFIELD",
        "LORIENT",
        "CRYSTAL PALACE"
    ]
},

"Malick Thiaw": {
    nationality: "ALMANYA",
    teams: [
        "SCHALKE 04",
        "MILAN"
    ]
},

"Reece James": {
    nationality: "INGILTERE",
    teams: [
        "CHELSEA",
        "WIGAN ATHLETIC"
    ]
},

"Reiss Nelson": {
    nationality: "INGILTERE",
    teams: [
        "ARSENAL",
        "HOFFENHEIM",
        "FEYENOORD",
        "FULHAM"
    ]
},

"Emile Smith Rowe": {
    nationality: "INGILTERE",
    teams: [
        "ARSENAL",
        "HUDDERSFIELD",
        "FULHAM"
    ]
},

"Gabriel Martinelli": {
    nationality: "BREZILYA",
    teams: [
        "ITUANO",
        "ARSENAL"
    ]
},

"Martin Odegaard": {
    nationality: "NORVEC",
    teams: [
        "STROMGODSET",
        "REAL MADRID",
        "HEERENVEEN",
        "VITESSE",
        "REAL SOCIEDAD",
        "ARSENAL"
    ]
},

"William Saliba": {
    nationality: "FRANSA",
    teams: [
        "SAINT-ETIENNE",
        "ARSENAL",
        "NICE",
        "MARSEILLE"
    ]
},

"Thomas Partey": {
    nationality: "GANA",
    teams: [
        "ODOMETAH",
        "ATLETICO MADRID",
        "ALMERIA",
        "MALLORCA",
        "ARSENAL"
    ]
},

"Gabriel Magalhaes": {
    nationality: "BREZILYA",
    teams: [
        "AVAI",
        "LILLE",
        "TROYES",
        "DINAMO ZAGREB",
        "WATFORD",
        "ARSENAL"
    ]
},

"Ben White": {
    nationality: "INGILTERE",
    teams: [
        "BRIGHTON",
        "NEWPORT COUNTY",
        "LEEDS UNITED",
        "ARSENAL"
    ]
},

"Takehiro Tomiyasu": {
    nationality: "JAPONYA",
    teams: [
        "AVISPA FUKUOKA",
        "SINT-TRUIDEN",
        "BOLOGNA",
        "ARSENAL"
    ]
},

"Nico Williams": {
    nationality: "ISPANYA",
    teams: [
        "ATHLETIC BILBAO"
    ]
},

"Fermin Lopez": {
    nationality: "ISPANYA",
    teams: [
        "REAL BETIS",
        "BARCELONA"
    ]
},

"Pau Torres": {
    nationality: "ISPANYA",
    teams: [
        "VILLARREAL",
        "MALAGA",
        "ASTON VILLA"
    ]
},

"Rodrigo Bentancur": {
    nationality: "URUGUAY",
    teams: [
        "BOCA JUNIORS",
        "JUVENTUS",
        "TOTTENHAM"
    ]
},

"Weston McKennie": {
    nationality: "ABD",
    teams: [
        "DALLAS",
        "SCHALKE 04",
        "JUVENTUS",
        "LEEDS UNITED"
    ]
},

"Douglas Luiz": {
    nationality: "BREZILYA",
    teams: [
        "VASCO DA GAMA",
        "MANCHESTER CITY",
        "GIRONA",
        "ASTON VILLA",
        "JUVENTUS"
    ]
},


"Arthur Melo": {
    nationality: "BREZILYA",
    teams: [
        "GREMIO",
        "BARCELONA",
        "JUVENTUS",
        "LIVERPOOL",
        "FIORENTINA"
    ]
},

"Matias Vecino": {
    nationality: "URUGUAY",
    teams: [
        "NACIONAL",
        "EMPOLI",
        "CAGLIARI",
        "FIORENTINA",
        "INTER",
        "LAZIO"
    ]
},

"Luis Alberto": {
    nationality: "ISPANYA",
    teams: [
        "SEVILLA",
        "BARCELONA B",
        "LIVERPOOL",
        "MALAGA",
        "DEPORTIVO LA CORUNA",
        "LAZIO",
        "AL DUHAIL"
    ]
},

"Pau Cubarsi": {
    nationality: "ISPANYA",
    teams: [
        "BARCELONA"
    ]
},

"Dani Ceballos": {
    nationality: "ISPANYA",
    teams: [
        "REAL BETIS",
        "REAL MADRID",
        "ARSENAL"
    ]
},

"Isco": {
    nationality: "ISPANYA",
    teams: [
        "VALENCIA",
        "MALAGA",
        "REAL MADRID",
        "SEVILLA",
        "REAL BETIS"
    ]
},

"Gerard Moreno": {
    nationality: "ISPANYA",
    teams: [
        "ESPANYOL",
        "MALLORCA",
        "VILLARREAL"
    ]
},

"Yeremy Pino": {
    nationality: "ISPANYA",
    teams: [
        "VILLARREAL"
    ]
},

"Mikel Oyarzabal": {
    nationality: "ISPANYA",
    teams: [
        "REAL SOCIEDAD"
    ]
},


"Martin Zubimendi": {
    nationality: "ISPANYA",
    teams: [
        "REAL SOCIEDAD",
        "ARSENAL"
    ]
},

"Robin Le Normand": {
    nationality: "FRANSA",
    teams: [
        "BREST",
        "REAL SOCIEDAD",
        "ATLETICO MADRID"
    ]
},

"Fabian Schar": {
    nationality: "ISVICRE",
    teams: [
        "WIL",
        "BASEL",
        "HOFFENHEIM",
        "HERTHA BERLIN",
        "NEWCASTLE UNITED"
    ]
},

"Sven Botman": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "HEERENVEEN",
        "PEC ZWOLLE",
        "HEERENVEEN",
        "LILLE",
        "NEWCASTLE UNITED"
    ]
},

"Anthony Elanga": {
    nationality: "ISVEC",
    teams: [
        "MANCHESTER UNITED",
        "NOTTINGHAM FOREST",
        "NEWCASTLE UNITED"
    ]
},

"Morgan Gibbs-White": {
    nationality: "INGILTERE",
    teams: [
        "WOLVERHAMPTON",
        "SWANSEA CITY",
        "NOTTINGHAM FOREST"
    ]
},

    "Yaya Toure": {
        nationality: "FILDISI SAHILI",
        teams: [
            "BARCELONA",
            "MANCHESTER CITY",
            "OLYMPIAKOS",
            "MONACO"
        ]
    },

    "Aleksandar Kolarov": {
        nationality: "SIRBISTAN",
        teams: [
            "MANCHESTER CITY",
            "ROMA",
            "INTER"
        ]
    },

    "Mario Balotelli": {
        nationality: "ITALYA",
        teams: [
            "INTER",
            "MANCHESTER CITY",
            "MILAN",
            "LIVERPOOL"
        ]
    },

    "Fernando Torres": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID",
            "LIVERPOOL",
            "CHELSEA",
            "MILAN"
        ]
    },

    "Eden Hazard": {
        nationality: "BELCIKA",
        teams: [
            "LILLE",
            "CHELSEA",
            "REAL MADRID"
        ]
    },

    "Thibaut Courtois": {
        nationality: "BELCIKA",
        teams: [
            "CHELSEA",
            "ATLETICO MADRID",
            "REAL MADRID"
        ]
    },

    "Alvaro Morata": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "JUVENTUS",
            "CHELSEA",
            "ATLETICO MADRID",
            "MILAN"
        ]
    },

    "Miralem Pjanic": {
        nationality: "BOSNA HERSEK",
        teams: [
            "LYON",
            "ROMA",
            "JUVENTUS",
            "BARCELONA",
            "BESIKTAS"
        ]
    },

    "Romelu Lukaku": {
        nationality: "BELCIKA",
        teams: [
            "CHELSEA",
            "MANCHESTER UNITED",
            "INTER",
            "FENERBAHCE"
        ]
    },

    "Nicolas Anelka": {
        nationality: "FRANSA",
        teams: [
            "PSG",
            "ARSENAL",
            "REAL MADRID",
            "LIVERPOOL",
            "MANCHESTER CITY",
            "CHELSEA",
            "JUVENTUS",
            "FENERBAHCE"
        ]
    },

    "Samuel Eto'o": {
        nationality: "KAMERUN",
        teams: [
            "REAL MADRID",
            "BARCELONA",
            "INTER",
            "CHELSEA"
        ]
    },

    "Gael Clichy": {
        nationality: "FRANSA",
        teams: [
            "ARSENAL",
            "MANCHESTER CITY"
        ]
    },

    "Kolo Toure": {
        nationality: "FILDISI SAHILI",
        teams: [
            "ARSENAL",
            "MANCHESTER CITY",
            "LIVERPOOL"
        ]
    },

    "Samir Nasri": {
        nationality: "FRANSA",
        teams: [
            "MARSEILLE",
            "ARSENAL",
            "MANCHESTER CITY"
        ]
    },

    "Sol Campbell": {
        nationality: "INGILTERE",
        teams: [
            "TOTTENHAM",
            "ARSENAL"
        ]
    },

    "Yossi Benayoun": {
        nationality: "ISRAIL",
        teams: [
            "LIVERPOOL",
            "CHELSEA",
            "ARSENAL"
        ]
    },

    "Joe Cole": {
        nationality: "INGILTERE",
        teams: [
            "CHELSEA",
            "LIVERPOOL"
        ]
    },

    "Christian Vieri": {
        nationality: "ITALYA",
        teams: [
            "ATLETICO MADRID",
            "JUVENTUS",
            "INTER",
            "MILAN"
        ]
    },

    "Hernan Crespo": {
        nationality: "ARJANTIN",
        teams: [
            "INTER",
            "MILAN",
            "CHELSEA"
        ]
    },

    "Juan Sebastian Veron": {
        nationality: "ARJANTIN",
        teams: [
            "LAZIO",
            "MANCHESTER UNITED",
            "CHELSEA",
            "INTER"
        ]
    },

    "Michael Essien": {
        nationality: "GANA",
        teams: [
            "LYON",
            "CHELSEA",
            "REAL MADRID",
            "MILAN"
        ]
    },

    "Sergio Aguero": {
        nationality: "ARJANTIN",
        teams: [
            "INDEPENDIENTE",
            "ATLETICO MADRID",
            "MANCHESTER CITY",
            "BARCELONA"
        ]
    },

    "Alvaro Morata": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "JUVENTUS",
            "CHELSEA",
            "ATLETICO MADRID",
            "MILAN"
        ]
    },

    "Romelu Lukaku": {
        nationality: "BELCIKA",
        teams: [
            "ANDERLECHT",
            "CHELSEA",
            "MANCHESTER UNITED",
            "INTER",
            "ROMA"
        ]
    },

    "Fernando Torres": {
        nationality: "ISPANYA",
        teams: [
            "ATLETICO MADRID",
            "LIVERPOOL",
            "CHELSEA",
            "MILAN"
        ]
    },

    "Samuel Eto'o": {
        nationality: "KAMERUN",
        teams: [
            "REAL MADRID",
            "MALLORCA",
            "BARCELONA",
            "INTER",
            "CHELSEA"
        ]
    },

    "Mesut Ozil": {
        nationality: "ALMANYA",
        teams: [
            "SCHALKE 04",
            "WERDER BREMEN",
            "REAL MADRID",
            "ARSENAL",
            "FENERBAHCE"
        ]
    },

    "Sergio Ramos": {
        nationality: "ISPANYA",
        teams: [
            "SEVILLA",
            "REAL MADRID",
            "PSG"
        ]
    },

    "Xabi Alonso": {
        nationality: "ISPANYA",
        teams: [
            "REAL SOCIEDAD",
            "LIVERPOOL",
            "REAL MADRID",
            "BAYERN MUNIH"
        ]
    },
 
"Thibaut Courtois": {
    nationality: "BELCIKA",
    teams: [
        "GENK",
        "ATLETICO MADRID",
        "CHELSEA",
        "REAL MADRID"
    ]
},

"Alisson Becker": {
    nationality: "BREZILYA",
    teams: [
        "INTERNACIONAL",
        "ROMA",
        "LIVERPOOL"
    ]
},

"Marc-Andre ter Stegen": {
    nationality: "ALMANYA",
    teams: [
        "BORUSSIA MONCHENGLADBACH",
        "BARCELONA"
    ]
},

"Manuel Neuer": {
    nationality: "ALMANYA",
    teams: [
        "SCHALKE 04",
        "BAYERN MUNIH"
    ]
},

"Edouard Mendy": {
    nationality: "SENEGAL",
    teams: [
        "CHERBOURG",
        "REIMS",
        "MARSEILLE",
        "RENNES",
        "CHELSEA",
        "AL AHLI"
    ]
},

"Antonio Rudiger": {
    nationality: "ALMANYA",
    teams: [
        "STUTTGART",
        "ROMA",
        "CHELSEA",
        "REAL MADRID"
    ]
},

"Raphael Varane": {
    nationality: "FRANSA",
    teams: [
        "LENS",
        "REAL MADRID",
        "MANCHESTER UNITED",
        "COMO"
    ]
},

"Marquinhos": {
    nationality: "BREZILYA",
    teams: [
        "CORINTHIANS",
        "ROMA",
        "PARIS SAINT GERMAIN"
    ]
},

"Thiago Silva": {
    nationality: "BREZILYA",
    teams: [
        "JUVENTUDE",
        "PORTO",
        "DYNAMO MOSCOW",
        "FLUMINENSE",
        "MILAN",
        "PARIS SAINT GERMAIN",
        "CHELSEA"
    ]
},

"Joao Cancelo": {
    nationality: "PORTEKIZ",
    teams: [
        "BENFICA",
        "VALENCIA",
        "INTER",
        "JUVENTUS",
        "MANCHESTER CITY",
        "BAYERN MUNIH",
        "BARCELONA",
        "AL HILAL"
    ]
},

"Dani Alves": {
    nationality: "BREZILYA",
    teams: [
        "BAHIA",
        "SEVILLA",
        "BARCELONA",
        "JUVENTUS",
        "PARIS SAINT GERMAIN",
        "SAO PAULO",
        "UNAM PUMAS"
    ]
},

"Daniel Carvajal": {
    nationality: "ISPANYA",
    teams: [
        "REAL MADRID",
        "BAYER LEVERKUSEN"
    ]
},

"Andrew Robertson": {
    nationality: "ISKOCYA",
    teams: [
        "QUEENS PARK",
        "DUNDEE UNITED",
        "HULL CITY",
        "LIVERPOOL"
    ]
},

"Bernardo Silva": {
    nationality: "PORTEKIZ",
    teams: [
        "BENFICA",
        "MONACO",
        "MANCHESTER CITY"
    ]
},

"Kylian Mbappe": {
    nationality: "FRANSA",
    teams: [
        "MONACO",
        "PSG",
        "REAL MADRID"
    ]
},

"Rayan Cherki": {
    nationality: "FRANSA",
    teams: [
        "LYON",
        "MANCHESTER CITY"
    ]
},

"Bradley Barcola": {
    nationality: "FRANSA",
    teams: [
        "LYON",
        "PSG"
    ]
},

"Kassoum Ouattara": {
    nationality: "FRANSA",
    teams: [
        "AMIENS",
        "MONACO",
        "BESIKTAS"
    ]
},

"Gianluigi Donnarumma": {
    nationality: "ITALYA",
    teams: [
        "MILAN",
        "PSG"
    ]
},

"Loris Karius": {
    nationality: "ALMANYA",
    teams: [
        "MAINZ",
        "LIVERPOOL",
        "BESIKTAS",
        "UNION BERLIN",
        "NEWCASTLE",
        "SCHALKE 04"
    ]
},

"Berke Ozer": {
    nationality: "TURKIYE",
    teams: [
        "ALTINORDU",
        "FENERBAHCE",
        "WESTERLO",
        "PORTIMONENSE",
        "EYUPSPOR",
        "LILLE"
    ]
},

"Andre Onana": {
    nationality: "KAMERUN",
    teams: [
        "BARCELONA",
        "JONG AJAX",
        "AJAX",
        "INTER",
        "MANCHESTER UNITED",
        "TRABZONSPOR"
    ]
},

"Dele Alli": {
    nationality: "INGILTERE",
    teams: [
        "MK DONS",
        "TOTTENHAM",
        "EVERTON",
        "BESIKTAS",
        "COMO"
    ]
},

"Marcus Rashford": {
    nationality: "INGILTERE",
    teams: [
        "MANCHESTER UNITED",
        "ASTON VILLA",
        "BARCELONA"
    ]
},

"Jadon Sancho": {
    nationality: "INGILTERE",
    teams: [
        "MANCHESTER CITY",
        "BORUSSIA DORTMUND",
        "MANCHESTER UNITED",
        "CHELSEA"
    ]
},

"Vincent Aboubakar": {
    nationality: "KAMERUN",
    teams: [
        "COTON SPORT",
        "VALENCIENNES",
        "LORIENT",
        "PORTO",
        "BESIKTAS",
        "AL NASSR",
        "AL TAAWOUN",
        "HATAYSPOR"
    ]
},

"Diego Maradona": {
    nationality: "ARJANTIN",
    teams: [
        "ARGENTINOS JUNIORS",
        "BOCA JUNIORS",
        "BARCELONA",
        "NAPOLI",
        "SEVILLA",
        "NEWELLS OLD BOYS"
    ]
},

"Marouane Fellaini": {
    nationality: "BELCIKA",
    teams: [
        "STANDARD LIEGE",
        "EVERTON",
        "MANCHESTER UNITED",
        "SHANDONG LUNENG"
    ]
},

"Raphinha": {
    nationality: "BREZILYA",
    teams: [
        "AVAI",
        "VITORIA GUIMARAES",
        "SPORTING CP",
        "RENNES",
        "LEEDS UNITED",
        "BARCELONA"
    ]
},

"Kenan Yildiz": {
    nationality: "TURKIYE",
    teams: [
        "BAYERN MUNIH",
        "JUVENTUS"
    ]
},

"Emre Mor": {
    nationality: "TURKIYE",
    teams: [
        "LYNGBY",
        "NORDSJAELLAND",
        "BORUSSIA DORTMUND",
        "CELTA VIGO",
        "GALATASARAY",
        "OLYMPIACOS",
        "FENERBAHCE",
        "FATIH KARAGUMRUK",
        "EYUPSPOR"
    ]
},

"Ozan Tufan": {
    nationality: "TURKIYE",
    teams: [
        "BURSASPOR",
        "FENERBAHCE",
        "ALANYASPOR",
        "WATFORD",
        "HULL CITY",
        "TRABZONSPOR"
    ]
},

"Vedat Muriqi": {
    nationality: "KOSOVA",
    teams: [
        "BESA",
        "TEUTA",
        "GENT",
        "GENCLERBIRLIGI",
        "RIZESPOR",
        "FENERBAHCE",
        "LAZIO",
        "MALLORCA"
    ]
},

"Pierre van Hooijdonk": {
    nationality: "HOLLANDA",
    teams: [
        "RBC ROOSENDAAL",
        "NAC BREDA",
        "CELTIC",
        "NOTTINGHAM FOREST",
        "VITESSE",
        "FEYENOORD",
        "BENFICA",
        "FENERBAHCE"
    ]
},

"Ryan Donk": {
    nationality: "HOLLANDA",
    teams: [
        "RKC WAALWIJK",
        "AZ ALKMAAR",
        "WEST BROMWICH ALBION",
        "CLUB BRUGGE",
        "KASIMPASA",
        "GALATASARAY",
        "REAL BETIS",
        "AL SHARJAH"
    ]
},

"Rafa Silva": {
    nationality: "PORTEKIZ",
    teams: [
        "FEIRENSE",
        "BRAGA",
        "BENFICA",
        "BESIKTAS"
    ]
},

"Amad Diallo": {
    nationality: "FILDISI SAHILI",
    teams: [
        "ATALANTA",
        "MANCHESTER UNITED",
        "RANGERS",
        "SUNDERLAND"
    ]
},

"Ismaila Sarr": {
    nationality: "SENEGAL",
    teams: [
        "METZ",
        "RENNES",
        "WATFORD",
        "MARSEILLE",
        "CRYSTAL PALACE"
    ]
},

"Dusan Tadic": {
    nationality: "SIRBISTAN",
    teams: [
        "VOJVODINA",
        "GRONINGEN",
        "TWENTE",
        "SOUTHAMPTON",
        "AJAX",
        "FENERBAHCE"
    ]
},

"Keita Balde": {
    nationality: "SENEGAL",
    teams: [
        "LAZIO",
        "MONACO",
        "INTER",
        "SAMPDORIA",
        "CAGLIARI",
        "SPARTAK MOSKOVA",
        "ESPANYOL",
        "SIVASSPOR",
        "MONZA"
    ]
},

"Ademola Lookman": {
    nationality: "NIGERYA",
    teams: [
        "CHARLTON ATHLETIC",
        "EVERTON",
        "RB LEIPZIG",
        "FULHAM",
        "LEICESTER CITY",
        "ATALANTA"
    ]
},

"Michael Olise": {
    nationality: "FRANSA",
    teams: [
        "READING",
        "CRYSTAL PALACE",
        "BAYERN MUNIH"
    ]
},

"Jackson Muleka": {
    nationality: "KONGO DC",
    teams: [
        "TP MAZEMBE",
        "STANDARD LIEGE",
        "KASIMPASA",
        "BESIKTAS",
        "AL AHLI",
        "KONYASPOR"
    ]
},

"Arthur Masuaku": {
    nationality: "KONGO DC",
    teams: [
        "VALENCIENNES",
        "OLYMPIACOS",
        "WEST HAM UNITED",
        "BESIKTAS"
    ]
},

"Stefan Savic": {
    nationality: "KARADAG",
    teams: [
        "BSK BORCA",
        "PARTIZAN",
        "MANCHESTER CITY",
        "FIORENTINA",
        "ATLETICO MADRID",
        "TRABZONSPOR"
    ]
},

"Fabinho": {
    nationality: "BREZILYA",
    teams: [
        "FLUMINENSE",
        "REAL MADRID",
        "RIO AVE",
        "MONACO",
        "LIVERPOOL",
        "AL ITTIHAD"
    ]
},

"Marco Verratti": {
    nationality: "ITALYA",
    teams: [
        "PESCARA",
        "PARIS SAINT GERMAIN",
        "AL ARABI"
    ]
},

"Adrien Rabiot": {
    nationality: "FRANSA",
    teams: [
        "CRETEIL",
        "MANCHESTER CITY",
        "PARIS SAINT GERMAIN",
        "JUVENTUS",
        "MARSEILLE"
    ]
},

"Federico Valverde": {
    nationality: "URUGUAY",
    teams: [
        "PENAROL",
        "REAL MADRID",
        "DEPORTIVO LA CORUNA"
    ]
},


"Riyad Mahrez": {
    nationality: "CEZAYIR",
    teams: [
        "LE HAVRE",
        "LEICESTER CITY",
        "MANCHESTER CITY",
        "AL AHLI"
    ]
},

"Son Heung-min": {
    nationality: "GUNEY KORE",
    teams: [
        "HAMBURG",
        "BAYER LEVERKUSEN",
        "TOTTENHAM",
        "LOS ANGELES FC"
    ]
},

"Paulo Dybala": {
    nationality: "ARJANTIN",
    teams: [
        "INSTITUTO",
        "PALERMO",
        "JUVENTUS",
        "ROMA"
    ]
},

"Edinson Cavani": {
    nationality: "URUGUAY",
    teams: [
        "DANUBIO",
        "PALERMO",
        "NAPOLI",
        "PARIS SAINT GERMAIN",
        "MANCHESTER UNITED",
        "VALENCIA",
        "BOCA JUNIORS"
    ]
},

"Pierre-Emerick Aubameyang": {
    nationality: "GABON",
    teams: [
        "MILAN",
        "DIJON",
        "LILLE",
        "MONACO",
        "SAINT ETIENNE",
        "BORUSSIA DORTMUND",
        "ARSENAL",
        "BARCELONA",
        "CHELSEA",
        "MARSEILLE",
        "AL QADSIAH"
    ]
},

"Alexandre Pato": {
    nationality: "BREZILYA",
    teams: [
        "INTERNACIONAL",
        "MILAN",
        "CORINTHIANS",
        "SAO PAULO",
        "ORLANDO CITY",
        "TIANJIN QUANJIAN"
    ]
},

"Willian": {
    nationality: "BREZILYA",
    teams: [
        "CORINTHIANS",
        "SHAKHTAR DONETSK",
        "ANZHI",
        "CHELSEA",
        "ARSENAL",
        "FULHAM",
        "OLYMPIACOS"
    ]
},

"Alexis Sanchez": {
    nationality: "SILI",
    teams: [
        "COBRELOA",
        "COLO COLO",
        "RIVER PLATE",
        "UDINESE",
        "BARCELONA",
        "ARSENAL",
        "MANCHESTER UNITED",
        "INTER",
        "MARSEILLE"
    ]
},

"Zlatan Ibrahimovic": {
    nationality: "ISVEC",
    teams: [
        "MALMO",
        "AJAX",
        "JUVENTUS",
        "INTER",
        "BARCELONA",
        "MILAN",
        "PARIS SAINT GERMAIN",
        "MANCHESTER UNITED",
        "LA GALAXY"
    ]
},

    "Michael Ballack": {
        nationality: "ALMANYA",
        teams: [
            "BAYER LEVERKUSEN",
            "BAYERN MUNIH",
            "CHELSEA"
        ]
    },

    "Bastian Schweinsteiger": {
        nationality: "ALMANYA",
        teams: [
            "BAYERN MUNIH",
            "MANCHESTER UNITED"
        ]
    },

    "Mesut Ozil": {
        nationality: "ALMANYA",
        teams: [
            "SCHALKE 04",
            "WERDER BREMEN",
            "REAL MADRID",
            "ARSENAL",
            "FENERBAHCE"
        ]
    },

    "Santi Cazorla": {
        nationality: "ISPANYA",
        teams: [
            "VILLARREAL",
            "ARSENAL"
        ]
    },

    "Juanfran": {
        nationality: "ISPANYA",
        teams: [
            "REAL MADRID",
            "ATLETICO MADRID"
        ]
    },

    "Nicolas Anelka": {
        nationality: "FRANSA",
        teams: [
            "PSG",
            "ARSENAL",
            "REAL MADRID",
            "LIVERPOOL",
            "MANCHESTER CITY",
            "CHELSEA",
            "JUVENTUS",
            "FENERBAHCE"
        ]
    },
    
"Thomas Vermaelen": {
    nationality: "BELCIKA",
    teams: [
        "AJAX",
        "RKC WAALWIJK",
        "ARSENAL",
        "BARCELONA",
        "ROMA",
        "VISSEL KOBE"
    ]
},

"Theo Walcott": {
    nationality: "INGILTERE",
    teams: [
        "SOUTHAMPTON",
        "ARSENAL",
        "EVERTON"
    ]
},

"Danny Welbeck": {
    nationality: "INGILTERE",
    teams: [
        "MANCHESTER UNITED",
        "PRESTON NORTH END",
        "SUNDERLAND",
        "ARSENAL",
        "WATFORD",
        "BRIGHTON"
    ]
},

"Aaron Ramsey": {
    nationality: "GALLES",
    teams: [
        "CARDIFF CITY",
        "ARSENAL",
        "NOTTINGHAM FOREST",
        "JUVENTUS",
        "RANGERS",
        "NICE"
    ]
},

"Jack Wilshere": {
    nationality: "INGILTERE",
    teams: [
        "ARSENAL",
        "BOLTON",
        "BOURNEMOUTH",
        "WEST HAM",
        "AGF"
    ]
},

"Mathieu Flamini": {
    nationality: "FRANSA",
    teams: [
        "MARSEILLE",
        "ARSENAL",
        "MILAN",
        "CRYSTAL PALACE",
        "GETAFE"
    ]
},

"Robert Pires": {
    nationality: "FRANSA",
    teams: [
        "METZ",
        "MARSEILLE",
        "ARSENAL",
        "VILLARREAL",
        "ASTON VILLA"
    ]
},

"Laurent Koscielny": {
    nationality: "FRANSA",
    teams: [
        "GUINGAMP",
        "TOURS",
        "LORIENT",
        "ARSENAL",
        "BORDEAUX"
    ]
},

"Abou Diaby": {
    nationality: "FRANSA",
    teams: [
        "AUXERRE",
        "ARSENAL",
        "MARSEILLE"
    ]
},

"Mathieu Debuchy": {
    nationality: "FRANSA",
    teams: [
        "LILLE",
        "NEWCASTLE",
        "ARSENAL",
        "SAINT ETIENNE",
        "BORDEAUX"
    ]
},

"Francis Coquelin": {
    nationality: "FRANSA",
    teams: [
        "ARSENAL",
        "LORIENT",
        "FREIBURG",
        "VALENCIA",
        "VILLARREAL"
    ]
},

"Per Mertesacker": {
    nationality: "ALMANYA",
    teams: [
        "HANNOVER 96",
        "WERDER BREMEN",
        "ARSENAL"
    ]
},

"Gilberto Silva": {
    nationality: "BREZILYA",
    teams: [
        "AMERICA MINEIRO",
        "ATLETICO MINEIRO",
        "ARSENAL",
        "PANATHINAIKOS",
        "GREMIO"
    ]
},

"Dennis Bergkamp": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "INTER",
        "ARSENAL"
    ]
},

"Ruud van Nistelrooy": {
    nationality: "HOLLANDA",
    teams: [
        "DEN BOSCH",
        "HEERENVEEN",
        "PSV",
        "MANCHESTER UNITED",
        "REAL MADRID",
        "HAMBURG",
        "MALAGA"
    ]
},

"Edwin van der Sar": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "JUVENTUS",
        "FULHAM",
        "MANCHESTER UNITED"
    ]
},

"Arjen Robben": {
    nationality: "HOLLANDA",
    teams: [
        "GRONINGEN",
        "PSV",
        "CHELSEA",
        "REAL MADRID",
        "BAYERN MUNIH"
    ]
},

"Dirk Kuyt": {
    nationality: "HOLLANDA",
    teams: [
        "UTRECHT",
        "FEYENOORD",
        "LIVERPOOL",
        "FENERBAHCE"
    ]
},

"Ryan Babel": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "LIVERPOOL",
        "HOFFENHEIM",
        "KASIMPASA",
        "AL AIN",
        "DEPORTIVO LA CORUNA",
        "BESIKTAS",
        "FULHAM",
        "GALATASARAY"
    ]
},

"Daley Blind": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "MANCHESTER UNITED",
        "BAYERN MUNIH",
        "GIRONA"
    ]
},

"Wout Weghorst": {
    nationality: "HOLLANDA",
    teams: [
        "EMMEN",
        "HERACLES",
        "AZ ALKMAAR",
        "WOLFSBURG",
        "BURNLEY",
        "BESIKTAS",
        "MANCHESTER UNITED",
        "HOFFENHEIM",
        "AJAX"
    ]
},

"Yohan Cabaye": {
    nationality: "FRANSA",
    teams: [
        "LILLE",
        "NEWCASTLE",
        "PSG",
        "CRYSTAL PALACE",
        "AL NASR"
    ]
},

"Jordan Veretout": {
    nationality: "FRANSA",
    teams: [
        "NANTES",
        "ASTON VILLA",
        "FIORENTINA",
        "ROMA",
        "MARSEILLE",
        "LYON"
    ]
},

"Adil Rami": {
    nationality: "FRANSA",
    teams: [
        "LILLE",
        "VALENCIA",
        "MILAN",
        "SEVILLA",
        "MARSEILLE",
        "FENERBAHCE",
        "SOCHI",
        "BOAVISTA",
        "TROYES"
    ]
},

"Philippe Mexes": {
    nationality: "FRANSA",
    teams: [
        "AUXERRE",
        "ROMA",
        "MILAN"
    ]
},

"Jeremy Menez": {
    nationality: "FRANSA",
    teams: [
        "SOCHAUX",
        "MONACO",
        "ROMA",
        "PSG",
        "MILAN",
        "BORDEAUX",
        "ANTALYASPOR",
        "CLUB AMERICA",
        "PARIS FC",
        "REGGINA",
        "BARI"
    ]
},

"Kevin Prince Boateng": {
    nationality: "GANA",
    teams: [
        "HERTHA BERLIN",
        "TOTTENHAM",
        "BORUSSIA DORTMUND",
        "PORTSMOUTH",
        "MILAN",
        "SCHALKE",
        "LAS PALMAS",
        "EINTRACHT FRANKFURT",
        "SASSUOLO",
        "BARCELONA",
        "FIORENTINA",
        "BESIKTAS",
        "MONZA"
    ]
},

"Edgar Davids": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "MILAN",
        "JUVENTUS",
        "BARCELONA",
        "INTER",
        "TOTTENHAM",
        "CRYSTAL PALACE",
        "BARNET"
    ]
},

"Jari Litmanen": {
    nationality: "FINLANDIYA",
    teams: [
        "REIPAS",
        "HJK",
        "AJAX",
        "BARCELONA",
        "LIVERPOOL",
        "FULHAM",
        "LAAHTI",
        "MALMO",
        "HANSA ROSTOCK"
    ]
},

"Michael Reiziger": {
    nationality: "HOLLANDA",
    teams: [
        "GRONINGEN",
        "VOLENDAM",
        "AJAX",
        "MILAN",
        "BARCELONA",
        "MIDDLESBROUGH",
        "PSV"
    ]
},

"Julio Baptista": {
    nationality: "BREZILYA",
    teams: [
        "SAO PAULO",
        "SEVILLA",
        "REAL MADRID",
        "ARSENAL",
        "ROMA",
        "MALAGA",
        "CRUZEIRO",
        "ORLANDO CITY",
        "CFR CLUJ"
    ]
},

"David Trezeguet": {
    nationality: "FRANSA",
    teams: [
        "PLATENSE",
        "MONACO",
        "JUVENTUS",
        "HERCULES",
        "BANIYAS",
        "RIVER PLATE",
        "NEWELLS OLD BOYS"
    ]
},

"Pavel Nedved": {
    nationality: "CEKYA",
    teams: [
        "DUKLA PRAG",
        "SPARTA PRAG",
        "LAZIO",
        "JUVENTUS"
    ]
},

"Fabio Cannavaro": {
    nationality: "ITALYA",
    teams: [
        "NAPOLI",
        "PARMA",
        "INTER",
        "JUVENTUS",
        "REAL MADRID",
        "AL AHLI",
        "SASSUOLO"
    ]
},

"Andrea Pirlo": {
    nationality: "ITALYA",
    teams: [
        "BRESCIA",
        "INTER",
        "REGGINA",
        "MILAN",
        "JUVENTUS",
        "NEW YORK CITY"
    ]
},

"Gennaro Gattuso": {
    nationality: "ITALYA",
    teams: [
        "PERUGIA",
        "RANGERS",
        "SALERNITANA",
        "MILAN",
        "SION"
    ]
},

"Achraf Hakimi": {
    nationality: "FAS",
    teams: [
        "REAL MADRID",
        "BORUSSIA DORTMUND",
        "INTER",
        "PSG"
    ]
},

"Stefan de Vrij": {
    nationality: "HOLLANDA",
    teams: [
        "FEYENOORD",
        "LAZIO",
        "INTER",
        "PANATHINAIKOS"
    ]
},

"Denzel Dumfries": {
    nationality: "HOLLANDA",
    teams: [
        "SPARTA ROTTERDAM",
        "HEERENVEEN",
        "PSV",
        "INTER",
        "REAL MADRID"
    ]
},

"Hakan Calhanoglu": {
    nationality: "TURKIYE",
    teams: [
        "KARLSRUHER",
        "HAMBURG",
        "BAYER LEVERKUSEN",
        "MILAN",
        "INTER"
    ]
},

"Marcus Thuram": {
    nationality: "FRANSA",
    teams: [
        "SOCHAUX",
        "GUINGAMP",
        "BORUSSIA MONCHENGLADBACH",
        "INTER"
    ]
},

"Nicolo Barella": {
    nationality: "ITALYA",
    teams: [
        "CAGLIARI",
        "COMO",
        "INTER"
    ]
},

"Franck Kessie": {
    nationality: "FILDISI SAHILI",
    teams: [
        "STELLA CLUB",
        "CESENA",
        "ATALANTA",
        "MILAN",
        "BARCELONA",
        "AL AHLI"
    ]
},

"Mike Maignan": {
    nationality: "FRANSA",
    teams: [
        "PSG",
        "LILLE",
        "MILAN"
    ]
},

"Christian Pulisic": {
    nationality: "ABD",
    teams: [
        "BORUSSIA DORTMUND",
        "CHELSEA",
        "MILAN"
    ]
},

"Tijjani Reijnders": {
    nationality: "HOLLANDA",
    teams: [
        "RKC WAALWIJK",
        "AZ ALKMAAR",
        "MILAN",
        "MANCHESTER CITY",
        "AL QADSIAH"
    ]
},

"Rafael Leao": {
    nationality: "PORTEKIZ",
    teams: [
        "SPORTING CP",
        "LILLE",
        "MILAN"
    ]
},

"Ismael Bennacer": {
    nationality: "CEZAYIR",
    teams: [
        "ARLES",
        "ARSENAL",
        "TOURS",
        "EMPOLI",
        "MILAN",
        "MARSEILLE",
        "DINAMO ZAGREB"
    ]
},

"Sandro Tonali": {
    nationality: "ITALYA",
    teams: [
        "BRESCIA",
        "MILAN",
        "NEWCASTLE UNITED"
    ]
},

"Alexander Isak": {
    nationality: "ISVEC",
    teams: [
        "AIK",
        "BORUSSIA DORTMUND",
        "WILLEM II",
        "REAL SOCIEDAD",
        "NEWCASTLE UNITED"
    ]
},

"Bruno Guimaraes": {
    nationality: "BREZILYA",
    teams: [
        "ATHLETICO PARANAENSE",
        "LYON",
        "NEWCASTLE UNITED"
    ]
},

"Anthony Gordon": {
    nationality: "INGILTERE",
    teams: [
        "EVERTON",
        "PRESTON NORTH END",
        "NEWCASTLE UNITED",
        "BARCELONA"
    ]
},

"Joelinton": {
    nationality: "BREZILYA",
    teams: [
        "SPORT RECIFE",
        "HOFFENHEIM",
        "RAPID WIEN",
        "NEWCASTLE UNITED"
    ]
},

"Dan Burn": {
    nationality: "INGILTERE",
    teams: [
        "DARLINGTON",
        "BIRMINGHAM CITY",
        "FULHAM",
        "YEOVIL TOWN",
        "WIGAN ATHLETIC",
        "BRIGHTON",
        "NEWCASTLE UNITED"
    ]
},

"Declan Rice": {
    nationality: "INGILTERE",
    teams: [
        "WEST HAM",
        "ARSENAL"
    ]
},

"Jorginho": {
    nationality: "ITALYA",
    teams: [
        "HELLAS VERONA",
        "NAPOLI",
        "CHELSEA",
        "ARSENAL",
        "FLAMENGO"
    ]
},

"Christopher Nkunku": {
    nationality: "FRANSA",
    teams: [
        "PSG",
        "RB LEIPZIG",
        "CHELSEA",
        "MILAN"
    ]
},

"Timo Werner": {
    nationality: "ALMANYA",
    teams: [
        "STUTTGART",
        "RB LEIPZIG",
        "CHELSEA",
        "TOTTENHAM",
        "SAN JOSE EARTHQUAKES"
    ]
},

"Dayot Upamecano": {
    nationality: "FRANSA",
    teams: [
        "VALENCIENNES",
        "LIEFERING",
        "RED BULL SALZBURG",
        "RB LEIPZIG",
        "BAYERN MUNIH"
    ]
},

"Marcel Sabitzer": {
    nationality: "AVUSTURYA",
    teams: [
        "ADMIRA WACKER",
        "RAPID WIEN",
        "RB LEIPZIG",
        "BAYERN MUNIH",
        "MANCHESTER UNITED",
        "BORUSSIA DORTMUND"
    ]
},

"Konrad Laimer": {
    nationality: "AVUSTURYA",
    teams: [
        "RED BULL SALZBURG",
        "RB LEIPZIG",
        "BAYERN MUNIH"
    ]
},

"Xavi Simons": {
    nationality: "HOLLANDA",
    teams: [
        "PSG",
        "PSV",
        "RB LEIPZIG",
        "TOTTENHAM"
    ]
},

"Dani Olmo": {
    nationality: "ISPANYA",
    teams: [
        "DINAMO ZAGREB",
        "RB LEIPZIG",
        "BARCELONA"
    ]
},

"Ferran Torres": {
    nationality: "ISPANYA",
    teams: [
        "VALENCIA",
        "MANCHESTER CITY",
        "BARCELONA"
    ]
},

"Ansu Fati": {
    nationality: "ISPANYA",
    teams: [
        "BARCELONA",
        "BRIGHTON",
        "MONACO"
    ]
},

"Nuno Mendes": {
    nationality: "PORTEKIZ",
    teams: [
        "SPORTING CP",
        "PSG"
    ]
},

"Vitinha": {
    nationality: "PORTEKIZ",
    teams: [
        "PORTO",
        "WOLVERHAMPTON",
        "PSG"
    ]
},

"Fabian Ruiz": {
    nationality: "ISPANYA",
    teams: [
        "REAL BETIS",
        "ELCHE",
        "NAPOLI",
        "PSG"
    ]
},

"Goncalo Ramos": {
    nationality: "PORTEKIZ",
    teams: [
        "BENFICA",
        "PSG",
        "MILAN"
    ]
},

"Randal Kolo Muani": {
    nationality: "FRANSA",
    teams: [
        "NANTES",
        "EINTRACHT FRANKFURT",
        "PSG",
        "JUVENTUS"
    ]
},

"Dominik Szoboszlai": {
    nationality: "MACARISTAN",
    teams: [
        "LIEFERING",
        "RED BULL SALZBURG",
        "RB LEIPZIG",
        "LIVERPOOL"
    ]
},

"Alexis Mac Allister": {
    nationality: "ARJANTIN",
    teams: [
        "ARGENTINOS JUNIORS",
        "BRIGHTON",
        "LIVERPOOL"
    ]
},

"Cody Gakpo": {
    nationality: "HOLLANDA",
    teams: [
        "PSV",
        "LIVERPOOL"
    ]
},

"Ibrahima Konate": {
    nationality: "FRANSA",
    teams: [
        "SOCHAUX",
        "RB LEIPZIG",
        "LIVERPOOL",
        "REAL MADRID"
    ]
},

"Andy Robertson": {
    nationality: "ISKOCYA",
    teams: [
        "QUEENS PARK",
        "DUNDEE UNITED",
        "HULL CITY",
        "LIVERPOOL",
        "TOTTENHAM"
    ]
},

"Trent Alexander-Arnold": {
    nationality: "INGILTERE",
    teams: [
        "LIVERPOOL",
        "REAL MADRID"
    ]
},

"Dominik Livakovic": {
    nationality: "HIRVATISTAN",
    teams: [
        "NK ZAGREB",
        "DINAMO ZAGREB",
        "FENERBAHCE",
        "GIRONA"
    ]
},

"Josko Gvardiol": {
    nationality: "HIRVATISTAN",
    teams: [
        "DINAMO ZAGREB",
        "RB LEIPZIG",
        "MANCHESTER CITY"
    ]
},

"Mateo Retegui": {
    nationality: "ITALYA",
    teams: [
        "BOCA JUNIORS",
        "ESTUDIANTES",
        "TALLERES",
        "TIGRE",
        "GENOA",
        "ATALANTA",
        "AL QADSIAH"
    ]
},

"Jamal Musiala": {
    nationality: "ALMANYA",
    teams: [
        "BAYERN MUNIH"
    ]
},

"Florian Wirtz": {
    nationality: "ALMANYA",
    teams: [
        "BAYER LEVERKUSEN",
        "LIVERPOOL"
    ]
},

"Jonathan Tah": {
    nationality: "ALMANYA",
    teams: [
        "HAMBURG",
        "FORTUNA DUSSELDORF",
        "BAYER LEVERKUSEN",
        "BAYERN MUNIH"
    ]
},

"Granit Xhaka": {
    nationality: "ISVICRE",
    teams: [
        "BASEL",
        "BORUSSIA MONCHENGLADBACH",
        "ARSENAL",
        "BAYER LEVERKUSEN",
        "SUNDERLAND"
    ]
},

"Jeremie Frimpong": {
    nationality: "HOLLANDA",
    teams: [
        "MANCHESTER CITY",
        "CELTIC",
        "BAYER LEVERKUSEN",
        "LIVERPOOL"
    ]
},

"Federico Valverde": {
    nationality: "URUGUAY",
    teams: [
        "PENAROL",
        "REAL MADRID"
    ]
},

"Aurelien Tchouameni": {
    nationality: "FRANSA",
    teams: [
        "BORDEAUX",
        "MONACO",
        "REAL MADRID"
    ]
},

"Alessandro Nesta": {
    nationality: "ITALYA",
    teams: [
        "LAZIO",
        "MILAN",
        "MONTREAL IMPACT",
        "CHENNAIYIN"
    ]
},


"Cafu": {
    nationality: "BREZILYA",
    teams: [
        "SAO PAULO",
        "REAL ZARAGOZA",
        "JUVENTUDE",
        "PALMEIRAS",
        "ROMA",
        "MILAN"
    ]
},

"Dida": {
    nationality: "BREZILYA",
    teams: [
        "VITORIA",
        "CRUZEIRO",
        "LUGANO",
        "MILAN",
        "CORINTHIANS",
        "PORTUGUESA",
        "GREMIO",
        "INTERNACIONAL"
    ]
},

"Romario": {
    nationality: "BREZILYA",
    teams: [
        "VASCO DA GAMA",
        "PSV",
        "BARCELONA",
        "VALENCIA",
        "FLAMENGO",
        "FLUMINENSE",
        "AL SADD",
        "ADELAIDE UNITED",
        "MIAMI FC",
        "AMERICA RJ"
    ]
},

"Ronald de Boer": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "TWENTE",
        "BARCELONA",
        "RANGERS",
        "AL RAYYAN",
        "AL SHAMAL"
    ]
},

"Jaap Stam": {
    nationality: "HOLLANDA",
    teams: [
        "ZWOLLE",
        "WILLEM II",
        "PSV",
        "MANCHESTER UNITED",
        "LAZIO",
        "MILAN",
        "AJAX"
    ]
},

"Ruud Gullit": {
    nationality: "HOLLANDA",
    teams: [
        "HAARLEM",
        "FEYENOORD",
        "PSV",
        "MILAN",
        "SAMPDORIA",
        "CHELSEA"
    ]
},

"Frank Rijkaard": {
    nationality: "HOLLANDA",
    teams: [
        "AJAX",
        "REAL ZARAGOZA",
        "MILAN"
    ]
},

"Ronald Koeman": {
    nationality: "HOLLANDA",
    teams: [
        "GRONINGEN",
        "AJAX",
        "PSV",
        "FEYENOORD",
        "BARCELONA"
    ]
},

"Yaya Sanogo": {
    nationality: "FRANSA",
    teams: [
        "AUXERRE",
        "ARSENAL",
        "CRYSTAL PALACE",
        "AJAX",
        "CHARLTON",
        "TOULOUSE",
        "HUDDERSFIELD",
        "AMAZONAS"
    ]
},

"Pascal Cygan": {
    nationality: "FRANSA",
    teams: [
        "LILLE",
        "ARSENAL",
        "VILLARREAL",
        "CARTAGENA"
    ]
},

"Mikael Silvestre": {
    nationality: "FRANSA",
    teams: [
        "RENNES",
        "INTER",
        "MANCHESTER UNITED",
        "ARSENAL",
        "WERDER BREMEN",
        "PORTLAND TIMBERS",
        "CHENNAIYIN"
    ]
},

"Philippe Senderos": {
    nationality: "ISVICRE",
    teams: [
        "SERVETTE",
        "ARSENAL",
        "MILAN",
        "FULHAM",
        "EVERTON",
        "VALENCIA",
        "ASTON VILLA",
        "GRASSHOPPERS",
        "HOUSTON DYNAMO"
    ]
},

"Kieran Gibbs": {
    nationality: "INGILTERE",
    teams: [
        "ARSENAL",
        "WEST BROMWICH ALBION",
        "INTER MIAMI"
    ]
},

    "Roberto Carlos": {
        nationality: "BREZILYA",
        teams: [
            "UNIAO SAO JOAO",
            "PALMEIRAS",
            "INTER",
            "REAL MADRID",
            "FENERBAHCE",
            "CORINTHIANS",
            "ANZHI",
            "DELHI DYNAMOS"
        ]
    }

};


// =====================================================
// VERİ TEMİZLEME
// Tekrarlanan kulüpleri otomatik kaldırır.
// =====================================================

Object.values(playerPool).forEach(player => {

    player.teams = [
        ...new Set(player.teams)
    ];

});