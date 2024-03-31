const dotenv = require('dotenv').config();

module.exports = {
    "emails": [
        {
            "email": process.env.EMAIL1,
            "data": {
                "teamLeadName": "Test 1",
                "details": "Test 1"
            }
        },
        {
            "email": process.env.EMAIL2,
            "data": {
                "teamLeadName": "Test 2",
                "details": "Test 2"
            }
        },
        {
            "email": process.env.EMAIL3,
            "data": {
                "teamLeadName": "Test 3",
                "details": "Test 3"
            }
        }/* ,
        {
            "email": process.env.EMAIL4,
            "data": {
                "teamLeadName": "Test 4",
                "details": "Test 4"
            }
        },
        {
            "email": process.env.EMAIL5,
            "data": {
                "teamLeadName": "Test 5",
                "details": "Test 5"
            }
        },
        {
            "email": process.env.EMAIL6,
            "data": {
                "teamLeadName": "Test 6",
                "details": "Test 6"
            }
        },
        {
            "email": process.env.EMAIL7,
            "data": {
                "teamLeadName": "Test 7",
                "details": "Test 7"
            }
        },
        {
            "email": process.env.EMAIL8,
            "data": {
                "teamLeadName": "Test 8",
                "details": "Test 8"
            }
        },
        {
            "email": process.env.EMAIL9,
            "data": {
                "teamLeadName": "Test 9",
                "details": "Test 9"
            }
        },
        {
            "email": process.env.EMAIL10,
            "data": {
                "teamLeadName": "Test 10",
                "details": "Test 10"
            }
        },
        {
            "email": process.env.EMAIL11,
            "data": {
                "teamLeadName": "Test 11",
                "details": "Test 11"
            }
        },
        {
            "email": process.env.EMAIL12,
            "data": {
                "teamLeadName": "Test 12",
                "details": "Test 12"
            }
        },
        {
            "email": process.env.EMAIL13,
            "data": {
                "teamLeadName": "Test 13",
                "details": "Test 13"
            }
        },
        {
            "email": process.env.EMAIL14,
            "data": {
                "teamLeadName": "Test 14",
                "details": "Test 14"
            }
        },
        {
            "email": process.env.EMAIL14,
            "data": {
                "teamLeadName": "Test 14",
                "details": "Test 14"
            }
        },
        {
            "email": process.env.EMAIL15,
            "data": {
                "teamLeadName": "Test 15",
                "details": "Test 15"
            }
        },
        {
            "email": process.env.EMAIL16,
            "data": {
                "teamLeadName": "Test 16",
                "details": "Test 16"
            }
        },
        {
            "email": process.env.EMAIL17,
            "data": {
                "teamLeadName": "Test 17",
                "details": "Test 17"
            }
        },
        {
            "email": process.env.EMAIL18,
            "data": {
                "teamLeadName": "Test 18",
                "details": "Test 18"
            }
        },
        {
            "email": process.env.EMAIL19,
            "data": {
                "teamLeadName": "Test 19",
                "details": "Test 19"
            }
        },
        {
            "email": process.env.EMAIL20,
            "data": {
                "teamLeadName": "Test 20",
                "details": "Test 20"
            }
        },
        {
            "email": process.env.EMAIL21,
            "data": {
                "teamLeadName": "Test 21",
                "details": "Test 21"
            }
        },
        {
            "email": process.env.EMAIL22,
            "data": {
                "teamLeadName": "Test 22",
                "details": "Test 22"
            }
        },
        {
            "email": process.env.EMAIL23,
            "data": {
                "teamLeadName": "Test 23",
                "details": "Test 23"
            }
        },
        {
            "email": process.env.EMAIL24,
            "data": {
                "teamLeadName": "Test 24",
                "details": "Test 24"
            }
        },
        {
            "email": process.env.EMAIL25,
            "data": {
                "teamLeadName": "Test 25",
                "details": "Test 25"
            }
        },
        {
            "email": process.env.EMAIL26,
            "data": {
                "teamLeadName": "Test 26",
                "details": "Test 26"
            }
        },
        {
            "email": process.env.EMAIL27,
            "data": {
                "teamLeadName": "Test 27",
                "details": "Test 27"
            }
        },
        {
            "email": process.env.EMAIL28,
            "data": {
                "teamLeadName": "Test 28",
                "details": "Test 28"
            }
        },
        {
            "email": process.env.EMAIL29,
            "data": {
                "teamLeadName": "Test 29",
                "details": "Test 29"
            }
        },
        {
            "email": process.env.EMAIL30,
            "data": {
                "teamLeadName": "Test 30",
                "details": "Test 30"
            }
        },
        {
            "email": process.env.EMAIL31,
            "data": {
                "teamLeadName": "Test 31",
                "details": "Test 31"
            }
        },
        {
            "email": process.env.EMAIL32,
            "data": {
                "teamLeadName": "Test 32",
                "details": "Test 32"
            }
        },
        {
            "email": process.env.EMAIL33,
            "data": {
                "teamLeadName": "Test 33",
                "details": "Test 33"
            }
        },
        {
            "email": process.env.EMAIL34,
            "data": {
                "teamLeadName": "Test 34",
                "details": "Test 34"
            }
        },
        {
            "email": process.env.EMAIL35,
            "data": {
                "teamLeadName": "Test 35",
                "details": "Test 35"
            }
        },
        {
            "email": process.env.EMAIL36,
            "data": {
                "teamLeadName": "Test 36",
                "details": "Test 36"
            }
        },
        {
            "email": process.env.EMAIL37,
            "data": {
                "teamLeadName": "Test 37",
                "details": "Test 37"
            }
        },
        {
            "email": process.env.EMAIL38,
            "data": {
                "teamLeadName": "Test 38",
                "details": "Test 38"
            }
        },
        {
            "email": process.env.EMAIL39,
            "data": {
                "teamLeadName": "Test 39",
                "details": "Test 39"
            }
        },
        {
            "email": process.env.EMAIL40,
            "data": {
                "teamLeadName": "Test 40",
                "details": "Test 40"
            }
        },
        {
            "email": process.env.EMAIL41,
            "data": {
                "teamLeadName": "Test 41",
                "details": "Test 41"
            }
        },
        {
            "email": process.env.EMAIL42,
            "data": {
                "teamLeadName": "Test 42",
                "details": "Test 42"
            }
        },
        {
            "email": process.env.EMAIL43,
            "data": {
                "teamLeadName": "Test 43",
                "details": "Test 43"
            }
        },
        {
            "email": process.env.EMAIL44,
            "data": {
                "teamLeadName": "Test 44",
                "details": "Test 44"
            }
        },
        {
            "email": process.env.EMAIL45,
            "data": {
                "teamLeadName": "Test 45",
                "details": "Test 45"
            }
        },
        {
            "email": process.env.EMAIL46,
            "data": {
                "teamLeadName": "Test 46",
                "details": "Test 46"
            }
        },
        {
            "email": process.env.EMAIL47,
            "data": {
                "teamLeadName": "Test 47",
                "details": "Test 47"
            }
        },
        {
            "email": process.env.EMAIL48,
            "data": {
                "teamLeadName": "Test 48",
                "details": "Test 48"
            }
        },
        {
            "email": process.env.EMAIL49,
            "data": {
                "teamLeadName": "Test 49",
                "details": "Test 49"
            }
        },
        {
            "email": process.env.EMAIL50,
            "data": {
                "teamLeadName": "Test 50",
                "details": "Test 50"
            }
        } */
    ]
};
