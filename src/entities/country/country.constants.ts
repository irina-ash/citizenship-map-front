import { ICountry } from "./country.types";

export const countries_object = {
    "AF": "Afghanistan", 
    "AG": "Antigua and Barbuda",
     "AL": "Albania", 
     "DZ": "Algeria", 
     "AI": "Anguilla", 
     "AM": "Armenia", 
     "AW": "Aruba", 
     "AT": "Austria", 
     "BH": "Bahrain", 
     "BD": "Bangladesh", 
     "BB": "Barbados", 
     "BY": "Belarus", 
     "BE": "Belgium", 
     "BZ": "Belize", 
     "BJ": "Benin", 
     "BM": "Bermuda", 
     "BT": "Bhutan", 
     "BO": "Bolivia", 
     "BA": "Bosnia and Herzegovina", 
     "BW": "Botswana", 
     "BR": "Brazil", 
     "VG": "British Virgin Islands", 
     "BN": "Brunei Darussalam", 
     "BG": "Bulgaria", 
     "BF": "Burkina Faso", 
     "BI": "Burundi", 
     "KH": "Cambodia", 
     "CM": "Cameroon", 
     "CA": "Canada",
     "CF": "Central African Republic", 
     "TD": "Chad", 
     "CO": "Colombia", 
     "CR": "Costa Rica", 
     "HR": "Croatia", 
     "CU": "Cuba", 
     "CW": "Curaçao", 
     "CZ": "Czech Republic", 
     "CI": "Côte d'Ivoire", 
     "KP": "Dem. Rep. Korea", 
     "CD": "Democratic Republic of the Congo", 
     "DJ": "Djibouti", 
     "DM": "Dominica", 
     "DO": "Dominican Republic", 
     "EC": "Ecuador", 
     "EG": "Egypt", 
     "SV": "El Salvador", 
     "GQ": "Equatorial Guinea", 
     "ER": "Eritrea", 
     "EE": "Estonia", 
     "ET": "Ethiopia", 
     "FI": "Finland", 
     "GF": "French Guiana", 
     "GA": "Gabon", 
     "GE": "Georgia", 
     "DE": "Germany", 
     "GH": "Ghana", 
     "GL": "Greenland", 
     "GD": "Grenada", 
     "GU": "Guam", 
     "GT": "Guatemala", 
     "GN": "Guinea", 
     "GW": "Guinea-Bissau", 
     "GY": "Guyana", 
     "HT": "Haiti", 
     "HN": "Honduras", 
     "HU": "Hungary", 
     "IS": "Iceland", 
     "IN": "India", 
     "IR": "Iran", 
     "IQ": "Iraq", 
     "IE": "Ireland", 
     "IL": "Israel", 
     "JM": "Jamaica", 
     "JO": "Jordan", 
     "KZ": "Kazakhstan", 
     "KE": "Kenya", 
     "XK": "Kosovo", 
     "KW": "Kuwait", 
     "KG": "Kyrgyzstan", 
     "LA": "Lao PDR", 
     "LV": "Latvia", 
     "LB": "Lebanon", 
     "LS": "Lesotho", 
     "LR": "Liberia", 
     "LY": "Libya", 
     "LT": "Lithuania", 
     "LU": "Luxembourg", 
     "MK": "Macedonia", 
     "MG": "Madagascar", 
     "MW": "Malawi", 
     "MV": "Maldives", 
     "ML": "Mali", 
     "MH": "Marshall Islands", 
     "MQ": "Martinique", 
     "MR": "Mauritania", 
     "YT": "Mayotte", 
     "MX": "Mexico", 
     "MD": "Moldova", 
     "MN": "Mongolia", 
     "ME": "Montenegro", 
     "MS": "Montserrat", 
     "MA": "Morocco", 
     "MZ": "Mozambique", 
     "MM": "Myanmar", 
     "NA": "Namibia", 
     "NR": "Nauru", 
     "NP": "Nepal", 
     "NL": "Netherlands", 
     "BQBO": "Netherlands", 
     "NI": "Nicaragua", 
     "NE": "Niger", 
     "NG": "Nigeria", 
     "PK": "Pakistan", 
     "PW": "Palau", 
     "PS": "Palestine", 
     "PA": "Panama", 
     "PY": "Paraguay", 
     "PE": "Peru", 
     "PL": "Poland", 
     "PT": "Portugal", 
     "QA": "Qatar", 
     "CG": "Republic of Congo", 
     "KR": "Republic of Korea", 
     "RE": "Reunion", 
     "RO": "Romania",
     "RU": "Russia", 
     "RW": "Rwanda", 
     "BQSA": "Saba (Netherlands)", 
     "LC": "Saint Lucia", 
     "VC": "Saint Vincent and the Grenadines", 
     "BL": "Saint-Barthélemy", 
     "MF": "Saint-Martin", 
     "SA": "Saudi Arabia", 
     "SN": "Senegal", 
     "RS": "Serbia", 
     "SL": "Sierra Leone", 
     "SX": "Sint Maarten", 
     "SK": "Slovakia", 
     "SI": "Slovenia", 
     "SO": "Somalia", 
     "ZA": "South Africa", 
     "SS": "South Sudan", 
     "ES": "Spain", 
     "LK": "Sri Lanka", 
     "BQSE": "St. Eustatius (Netherlands)", 
     "SD": "Sudan", 
     "SR": "Suriname", 
     "SZ": "Swaziland", 
     "SE": "Sweden", 
     "CH": "Switzerland", 
     "SY": "Syria", 
     "TW": "Taiwan", 
     "TJ": "Tajikistan", 
     "TZ": "Tanzania", 
     "TH": "Thailand", 
     "GM": "The Gambia", 
     "TL": "Timor-Leste", 
     "TG": "Togo", 
     "TN": "Tunisia", 
     "TM": "Turkmenistan", 
     "TV": "Tuvalu", 
     "UG": "Uganda", 
     "UA": "Ukraine", 
     "AE": "United Arab Emirates", 
     "UY": "Uruguay",
     "US": "United States",
     "UZ": "Uzbekistan", 
     "VE": "Venezuela", 
     "VN": "Vietnam", 
     "EH": "Western Sahara", 
     "YE": "Yemen", 
     "ZM": "Zambia", 
     "ZW": "Zimbabwe"
   };


export const countries_array: ICountry[] = [
  {
      "id": 0,
      "value": "AE",
      "title": "United Arab Emirates",
      "name": "ОАЭ"
  },
  {
      "id": 1,
      "value": "AF",
      "title": "Afghanistan",
      "name": "Афганистан"
  },
  {
      "id": 2,
      "value": "AG",
      "title": "Antigua and Barbuda",
      "name": ""
  },
  {
      "id": 3,
      "value": "AI",
      "title": "Anguilla",
      "name": ""
  },
  {
      "id": 4,
      "value": "AL",
      "title": "Albania",
      "name": "Албания"
  },
  {
      "id": 5,
      "value": "AM",
      "title": "Armenia",
      "name": "Армения"
  },
  {
      "id": 6,
      "value": "AT",
      "title": "Austria",
      "name": "Австрия"
  },
  {
      "id": 7,
      "value": "AW",
      "title": "Aruba",
      "name": ""
  },
  {
      "id": 8,
      "value": "BA",
      "title": "Bosnia and Herzegovina",
      "name": "Босния и Герцеговина"
  },
  {
      "id": 9,
      "value": "BB",
      "title": "Barbados",
      "name": "Барбадос"
  },
  {
      "id": 10,
      "value": "BD",
      "title": "Bangladesh",
      "name": "Бангладеш"
  },
  {
      "id": 11,
      "value": "BE",
      "title": "Belgium",
      "name": "Бельгия"
  },
  {
      "id": 12,
      "value": "BF",
      "title": "Burkina Faso",
      "name": ""
  },
  {
      "id": 13,
      "value": "BG",
      "title": "Bulgaria",
      "name": "Болгария"
  },
  {
      "id": 14,
      "value": "BH",
      "title": "Bahrain",
      "name": ""
  },
  {
      "id": 15,
      "value": "BI",
      "title": "Burundi",
      "name": ""
  },
  {
      "id": 16,
      "value": "BJ",
      "title": "Benin",
      "name": ""
  },
  {
      "id": 17,
      "value": "BL",
      "title": "Saint-Barthélemy",
      "name": ""
  },
  {
      "id": 18,
      "value": "BM",
      "title": "Bermuda",
      "name": ""
  },
  {
      "id": 19,
      "value": "BN",
      "title": "Brunei Darussalam",
      "name": ""
  },
  {
      "id": 20,
      "value": "BO",
      "title": "Bolivia",
      "name": "Боливия"
  },
  {
      "id": 21,
      "value": "BQBO",
      "title": "Netherlands",
      "name": "Недерланды"
  },
  {
      "id": 22,
      "value": "BQSA",
      "title": "Saba (Netherlands)",
      "name": ""
  },
  {
      "id": 23,
      "value": "BQSE",
      "title": "St. Eustatius (Netherlands)",
      "name": ""
  },
  {
      "id": 24,
      "value": "BR",
      "title": "Brazil",
      "name": "Бразилия"
  },
  {
      "id": 25,
      "value": "BT",
      "title": "Bhutan",
      "name": ""
  },
  {
      "id": 26,
      "value": "BW",
      "title": "Botswana",
      "name": ""
  },
  {
      "id": 27,
      "value": "BY",
      "title": "Belarus",
      "name": "Беларусь"
  },
  {
      "id": 28,
      "value": "BZ",
      "title": "Belize",
      "name": ""
  },
  {
      "id": 29,
      "value": "CA",
      "title": "Canada",
      "name": "Канада"
  },
  {
      "id": 30,
      "value": "CD",
      "title": "Democratic Republic of the Congo",
      "name": ""
  },
  {
      "id": 31,
      "value": "CF",
      "title": "Central African Republic",
      "name": ""
  },
  {
      "id": 32,
      "value": "CG",
      "title": "Republic of Congo",
      "name": ""
  },
  {
      "id": 33,
      "value": "CH",
      "title": "Switzerland",
      "name": "Швейцария"
  },
  {
      "id": 34,
      "value": "CI",
      "title": "Côte d'Ivoire",
      "name": ""
  },
  {
      "id": 35,
      "value": "CM",
      "title": "Cameroon",
      "name": "Камерун"
  },
  {
      "id": 36,
      "value": "CO",
      "title": "Colombia",
      "name": "Колумбия"
  },
  {
      "id": 37,
      "value": "CR",
      "title": "Costa Rica",
      "name": "Коста Рика"
  },
  {
      "id": 38,
      "value": "CU",
      "title": "Cuba",
      "name": "Куба"
  },
  {
      "id": 39,
      "value": "CW",
      "title": "Curaçao",
      "name": ""
  },
  {
      "id": 40,
      "value": "CZ",
      "title": "Czech Republic",
      "name": ""
  },
  {
      "id": 41,
      "value": "DE",
      "title": "Germany",
      "name": "Германия"
  },
  {
      "id": 42,
      "value": "DJ",
      "title": "Djibouti",
      "name": ""
  },
  {
      "id": 43,
      "value": "DM",
      "title": "Dominica",
      "name": ""
  },
  {
      "id": 44,
      "value": "DO",
      "title": "Dominican Republic",
      "name": ""
  },
  {
      "id": 45,
      "value": "DZ",
      "title": "Algeria",
      "name": ""
  },
  {
      "id": 46,
      "value": "EC",
      "title": "Ecuador",
      "name": "Эквадор"
  },
  {
      "id": 47,
      "value": "EE",
      "title": "Estonia",
      "name": "Эстония"
  },
  {
      "id": 48,
      "value": "EG",
      "title": "Egypt",
      "name": "Египет"
  },
  {
      "id": 49,
      "value": "EH",
      "title": "Western Sahara",
      "name": ""
  },
  {
      "id": 50,
      "value": "ER",
      "title": "Eritrea",
      "name": ""
  },
  {
      "id": 51,
      "value": "ES",
      "title": "Spain",
      "name": "Испания"
  },
  {
      "id": 52,
      "value": "ET",
      "title": "Ethiopia",
      "name": "Эфиопия"
  },
  {
      "id": 53,
      "value": "FI",
      "title": "Finland",
      "name": "Финляндия"
  },
  {
      "id": 54,
      "value": "GA",
      "title": "Gabon",
      "name": "Габон"
  },
  {
      "id": 55,
      "value": "GD",
      "title": "Grenada",
      "name": ""
  },
  {
      "id": 56,
      "value": "GE",
      "title": "Georgia",
      "name": "Грузия"
  },
  {
      "id": 57,
      "value": "GF",
      "title": "French Guiana",
      "name": ""
  },
  {
      "id": 58,
      "value": "GH",
      "title": "Ghana",
      "name": "Гана"
  },
  {
      "id": 59,
      "value": "GL",
      "title": "Greenland",
      "name": ""
  },
  {
      "id": 60,
      "value": "GM",
      "title": "The Gambia",
      "name": ""
  },
  {
      "id": 61,
      "value": "GN",
      "title": "Guinea",
      "name": "Гвинея"
  },
  {
      "id": 62,
      "value": "GQ",
      "title": "Equatorial Guinea",
      "name": ""
  },
  {
      "id": 63,
      "value": "GT",
      "title": "Guatemala",
      "name": "Гватемала"
  },
  {
      "id": 64,
      "value": "GU",
      "title": "Guam",
      "name": ""
  },
  {
      "id": 65,
      "value": "GW",
      "title": "Guinea-Bissau",
      "name": ""
  },
  {
      "id": 66,
      "value": "GY",
      "title": "Guyana",
      "name": ""
  },
  {
      "id": 67,
      "value": "HN",
      "title": "Honduras",
      "name": ""
  },
  {
      "id": 68,
      "value": "HR",
      "title": "Croatia",
      "name": "Харватия"
  },
  {
      "id": 69,
      "value": "HT",
      "title": "Haiti",
      "name": "Гаити"
  },
  {
      "id": 70,
      "value": "HU",
      "title": "Hungary",
      "name": ""
  },
  {
      "id": 71,
      "value": "IE",
      "title": "Ireland",
      "name": "Ирландия"
  },
  {
      "id": 72,
      "value": "IL",
      "title": "Israel",
      "name": "Израиль"
  },
  {
      "id": 73,
      "value": "IN",
      "title": "India",
      "name": "Индия"
  },
  {
      "id": 74,
      "value": "IQ",
      "title": "Iraq",
      "name": "Ирак"
  },
  {
      "id": 75,
      "value": "IR",
      "title": "Iran",
      "name": "Иран"
  },
  {
      "id": 76,
      "value": "IS",
      "title": "Iceland",
      "name": "Исландия"
  },
  {
      "id": 77,
      "value": "JM",
      "title": "Jamaica",
      "name": "Ямайка"
  },
  {
      "id": 78,
      "value": "JO",
      "title": "Jordan",
      "name": ""
  },
  {
      "id": 79,
      "value": "KE",
      "title": "Kenya",
      "name": "Кения"
  },
  {
      "id": 80,
      "value": "KG",
      "title": "Kyrgyzstan",
      "name": "Киргизия"
  },
  {
      "id": 81,
      "value": "KH",
      "title": "Cambodia",
      "name": ""
  },
  {
      "id": 82,
      "value": "KP",
      "title": "Dem. Rep. Korea",
      "name": ""
  },
  {
      "id": 83,
      "value": "KR",
      "title": "Republic of Korea",
      "name": ""
  },
  {
      "id": 84,
      "value": "KW",
      "title": "Kuwait",
      "name": ""
  },
  {
      "id": 85,
      "value": "KZ",
      "title": "Kazakhstan",
      "name": "Казахстан"
  },
  {
      "id": 86,
      "value": "LA",
      "title": "Lao PDR",
      "name": ""
  },
  {
      "id": 87,
      "value": "LB",
      "title": "Lebanon",
      "name": ""
  },
  {
      "id": 88,
      "value": "LC",
      "title": "Saint Lucia",
      "name": ""
  },
  {
      "id": 89,
      "value": "LK",
      "title": "Sri Lanka",
      "name": "Шри-Ланка"
  },
  {
      "id": 90,
      "value": "LR",
      "title": "Liberia",
      "name": ""
  },
  {
      "id": 91,
      "value": "LS",
      "title": "Lesotho",
      "name": ""
  },
  {
      "id": 92,
      "value": "LT",
      "title": "Lithuania",
      "name": ""
  },
  {
      "id": 93,
      "value": "LU",
      "title": "Luxembourg",
      "name": "Люксембург"
  },
  {
      "id": 94,
      "value": "LV",
      "title": "Latvia",
      "name": "Латвия"
  },
  {
      "id": 95,
      "value": "LY",
      "title": "Libya",
      "name": ""
  },
  {
      "id": 96,
      "value": "MA",
      "title": "Morocco",
      "name": ""
  },
  {
      "id": 97,
      "value": "MD",
      "title": "Moldova",
      "name": "Молдова"
  },
  {
      "id": 98,
      "value": "ME",
      "title": "Montenegro",
      "name": ""
  },
  {
      "id": 99,
      "value": "MF",
      "title": "Saint-Martin",
      "name": ""
  },
  {
      "id": 100,
      "value": "MG",
      "title": "Madagascar",
      "name": "Мадагаскар"
  },
  {
      "id": 101,
      "value": "MH",
      "title": "Marshall Islands",
      "name": ""
  },
  {
      "id": 102,
      "value": "MK",
      "title": "Macedonia",
      "name": "Македония"
  },
  {
      "id": 103,
      "value": "ML",
      "title": "Mali",
      "name": ""
  },
  {
      "id": 104,
      "value": "MM",
      "title": "Myanmar",
      "name": ""
  },
  {
      "id": 105,
      "value": "MN",
      "title": "Mongolia",
      "name": "Монголия"
  },
  {
      "id": 106,
      "value": "MQ",
      "title": "Martinique",
      "name": ""
  },
  {
      "id": 107,
      "value": "MR",
      "title": "Mauritania",
      "name": ""
  },
  {
      "id": 108,
      "value": "MS",
      "title": "Montserrat",
      "name": ""
  },
  {
      "id": 109,
      "value": "MV",
      "title": "Maldives",
      "name": ""
  },
  {
      "id": 110,
      "value": "MW",
      "title": "Malawi",
      "name": ""
  },
  {
      "id": 111,
      "value": "MX",
      "title": "Mexico",
      "name": "Мексика"
  },
  {
      "id": 112,
      "value": "MZ",
      "title": "Mozambique",
      "name": ""
  },
  {
      "id": 113,
      "value": "NA",
      "title": "Namibia",
      "name": ""
  },
  {
      "id": 114,
      "value": "NE",
      "title": "Niger",
      "name": ""
  },
  {
      "id": 115,
      "value": "NG",
      "title": "Nigeria",
      "name": ""
  },
  {
      "id": 116,
      "value": "NI",
      "title": "Nicaragua",
      "name": ""
  },
  {
      "id": 117,
      "value": "NL",
      "title": "Netherlands",
      "name": "Недерланды"
  },
  {
      "id": 118,
      "value": "NP",
      "title": "Nepal",
      "name": "Непал"
  },
  {
      "id": 119,
      "value": "NR",
      "title": "Nauru",
      "name": ""
  },
  {
      "id": 120,
      "value": "PA",
      "title": "Panama",
      "name": ""
  },
  {
      "id": 121,
      "value": "PE",
      "title": "Peru",
      "name": ""
  },
  {
      "id": 122,
      "value": "PK",
      "title": "Pakistan",
      "name": "Пакистан"
  },
  {
      "id": 123,
      "value": "PL",
      "title": "Poland",
      "name": "Польша"
  },
  {
      "id": 124,
      "value": "PS",
      "title": "Palestine",
      "name": ""
  },
  {
      "id": 125,
      "value": "PT",
      "title": "Portugal",
      "name": "Португалия"
  },
  {
      "id": 126,
      "value": "PW",
      "title": "Palau",
      "name": ""
  },
  {
      "id": 127,
      "value": "PY",
      "title": "Paraguay",
      "name": ""
  },
  {
      "id": 128,
      "value": "QA",
      "title": "Qatar",
      "name": ""
  },
  {
      "id": 129,
      "value": "RE",
      "title": "Reunion",
      "name": ""
  },
  {
      "id": 130,
      "value": "RU",
      "title": "Russia",
      "name": "Россия"
  },
  {
      "id": 131,
      "value": "RO",
      "title": "Romania",
      "name": "Румыния"
  },
  {
      "id": 132,
      "value": "RS",
      "title": "Serbia",
      "name": "Сербия"
  },
  {
      "id": 133,
      "value": "RW",
      "title": "Rwanda",
      "name": ""
  },
  {
      "id": 134,
      "value": "SA",
      "title": "Saudi Arabia",
      "name": "Саудовская Аравия"
  },
  {
      "id": 135,
      "value": "SD",
      "title": "Sudan",
      "name": "Судан"
  },
  {
      "id": 136,
      "value": "SE",
      "title": "Sweden",
      "name": ""
  },
  {
      "id": 137,
      "value": "SI",
      "title": "Slovenia",
      "name": "Словения"
  },
  {
      "id": 138,
      "value": "SK",
      "title": "Slovakia",
      "name": "Словакия"
  },
  {
      "id": 139,
      "value": "SL",
      "title": "Sierra Leone",
      "name": ""
  },
  {
      "id": 140,
      "value": "SN",
      "title": "Senegal",
      "name": ""
  },
  {
      "id": 141,
      "value": "SO",
      "title": "Somalia",
      "name": ""
  },
  {
      "id": 142,
      "value": "SR",
      "title": "Suriname",
      "name": ""
  },
  {
      "id": 143,
      "value": "SS",
      "title": "South Sudan",
      "name": ""
  },
  {
      "id": 144,
      "value": "SV",
      "title": "El Salvador",
      "name": ""
  },
  {
      "id": 145,
      "value": "SX",
      "title": "Sint Maarten",
      "name": ""
  },
  {
      "id": 146,
      "value": "SY",
      "title": "Syria",
      "name": "Сирия"
  },
  {
      "id": 147,
      "value": "SZ",
      "title": "Swaziland",
      "name": ""
  },
  {
      "id": 148,
      "value": "TD",
      "title": "Chad",
      "name": ""
  },
  {
      "id": 149,
      "value": "TG",
      "title": "Togo",
      "name": ""
  },
  {
      "id": 150,
      "value": "TH",
      "title": "Thailand",
      "name": "Тайланд"
  },
  {
      "id": 151,
      "value": "TJ",
      "title": "Tajikistan",
      "name": "Таджикистан"
  },
  {
      "id": 152,
      "value": "TL",
      "title": "Timor-Leste",
      "name": ""
  },
  {
      "id": 153,
      "value": "TM",
      "title": "Turkmenistan",
      "name": "Туркменистан"
  },
  {
      "id": 154,
      "value": "TN",
      "title": "Tunisia",
      "name": ""
  },
  {
      "id": 155,
      "value": "TV",
      "title": "Tuvalu",
      "name": ""
  },
  {
      "id": 156,
      "value": "TW",
      "title": "Taiwan",
      "name": ""
  },
  {
      "id": 157,
      "value": "TZ",
      "title": "Tanzania",
      "name": ""
  },
  {
      "id": 158,
      "value": "UA",
      "title": "Ukraine",
      "name": "Украина"
  },
  {
      "id": 159,
      "value": "UG",
      "title": "Uganda",
      "name": ""
  },
  {
      "id": 160,
      "value": "US",
      "title": "United States",
      "name": "США"
  },
  {
      "id": 161,
      "value": "UY",
      "title": "Uruguay",
      "name": ""
  },
  {
      "id": 162,
      "value": "UZ",
      "title": "Uzbekistan",
      "name": "Узбекистан"
  },
  {
      "id": 163,
      "value": "VC",
      "title": "Saint Vincent and the Grenadines",
      "name": ""
  },
  {
      "id": 164,
      "value": "VE",
      "title": "Venezuela",
      "name": ""
  },
  {
      "id": 165,
      "value": "VG",
      "title": "British Virgin Islands",
      "name": ""
  },
  {
      "id": 166,
      "value": "VN",
      "title": "Vietnam",
      "name": "Вьетнам"
  },
  {
      "id": 167,
      "value": "XK",
      "title": "Kosovo",
      "name": "Косово"
  },
  {
      "id": 168,
      "value": "YE",
      "title": "Yemen",
      "name": ""
  },
  {
      "id": 169,
      "value": "YT",
      "title": "Mayotte",
      "name": ""
  },
  {
      "id": 170,
      "value": "ZA",
      "title": "South Africa",
      "name": "Южная Африка"
  },
  {
      "id": 171,
      "value": "ZM",
      "title": "Zambia",
      "name": "Замбия"
  },
  {
      "id": 172,
      "value": "ZW",
      "title": "Zimbabwe",
      "name": "Зимбабве"
  }
];