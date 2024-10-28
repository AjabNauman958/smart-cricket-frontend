import React, { useState } from 'react';
import { FaMapMarkerAlt, FaHeart, FaShareAlt } from 'react-icons/fa';
import playerProfileImage from '../../images/shaheen.jpeg';
import countryFlag from '../../images/pak.png';
import AverageGraph from '../../Player/PlayerDashboard/AverageGraph';

const playersData = [
    {
        fullName: "Shaheen Shah Afridi",
        playingRole: "Bowler",
        country: "Pakistan",
        battingStyle: "Left hand Bat",
        bowlingStyle: "Left arm Fast",
        age: "23 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "9", odi: "3", t20: "46" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 29,
                        inns: 50,
                        balls: 5814,
                        runs: 3019,
                        wkts: 113,
                        bbi: "6/51",
                        bbm: "10/94",
                        ave: 26.7,
                        econ: 3.11,
                        sr: 51.4,
                        fourW: 12,
                        fiveW: 4,
                        tenW: 1,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 50,
                        balls: 5814,
                        runs: 3019,
                        wkts: 113,
                        bbi: "6/51",
                        bbm: "10/94",
                        ave: 26.7,
                        econ: 3.11,
                        sr: 51.4,
                        fourW: 12,
                        fiveW: 4,
                        tenW: 1,
                    },
                    {
                        format: "T20Is",
                        mat: 29,
                        inns: 50,
                        balls: 5814,
                        runs: 3019,
                        wkts: 113,
                        bbi: "6/51",
                        bbm: "10/94",
                        ave: 26.7,
                        econ: 3.11,
                        sr: 51.4,
                        fourW: 12,
                        fiveW: 4,
                        tenW: 1,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 29,
                        inns: 50,
                        no: 5814,
                        runs: 3019,
                        hs: 113,
                        ave: 26.7,
                        bf: 10,
                        sr: 51.4,
                        hundreds: 12,
                        fifties: 4,
                        fours: 1,
                        sixes: 6,
                        ct: 4,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 50,
                        no: 5814,
                        runs: 3019,
                        hs: 113,
                        ave: 26.7,
                        bf: 10,
                        sr: 51.4,
                        hundreds: 12,
                        fifties: 4,
                        fours: 1,
                        sixes: 6,
                        ct: 4,
                    },
                    {
                        format: "T20Is",
                        mat: 29,
                        inns: 50,
                        no: 5814,
                        runs: 3019,
                        hs: 113,
                        ave: 26.7,
                        bf: 10,
                        sr: 51.4,
                        hundreds: 12,
                        fifties: 4,
                        fours: 1,
                        sixes: 6,
                        ct: 4,
                    }
                ]
            }
        }
    },
    {
        fullName: "Babar Azam",
        playingRole: "Batsman",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Offbreak",
        age: "29 years",
        iccRankings: {
            batting: { test: "5", odi: "1", t20: "3" },
            bowling: { test: "--", odi: "--", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 29,
                        inns: 50,
                        balls: 200,
                        runs: 150,
                        wkts: 2,
                        bbi: "1/25",
                        bbm: "1/50",
                        ave: 75,
                        econ: 4.5,
                        sr: 100,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 50,
                        balls: 100,
                        runs: 75,
                        wkts: 1,
                        bbi: "1/20",
                        bbm: "1/20",
                        ave: 75,
                        econ: 4.5,
                        sr: 100,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 29,
                        inns: 50,
                        balls: 50,
                        runs: 40,
                        wkts: 1,
                        bbi: "1/10",
                        bbm: "1/10",
                        ave: 40,
                        econ: 4.8,
                        sr: 50,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 40,
                        inns: 80,
                        no: 10,
                        runs: 3500,
                        hs: 196,
                        ave: 50,
                        bf: 7000,
                        sr: 50,
                        hundreds: 10,
                        fifties: 20,
                        fours: 400,
                        sixes: 20,
                        ct: 40,
                    },
                    {
                        format: "ODIs",
                        mat: 50,
                        inns: 50,
                        no: 5,
                        runs: 2500,
                        hs: 158,
                        ave: 55.55,
                        bf: 3000,
                        sr: 83.33,
                        hundreds: 7,
                        fifties: 15,
                        fours: 200,
                        sixes: 50,
                        ct: 25,
                    },
                    {
                        format: "T20Is",
                        mat: 75,
                        inns: 75,
                        no: 10,
                        runs: 3000,
                        hs: 122,
                        ave: 45,
                        bf: 2000,
                        sr: 150,
                        hundreds: 2,
                        fifties: 25,
                        fours: 300,
                        sixes: 100,
                        ct: 50,
                    }
                ]
            }
        }
    },

    {
        fullName: "Muhammad Rizwan",
        playingRole: "Wicket-Keeper Batsman",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Off Spin",
        age: "30 years",
        iccRankings: {
            batting: { test: "12", odi: "06", t20: "04" },
            bowling: { test: "--", odi: "--", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 1,
                        inns: 1,
                        balls: 108,
                        runs: 78,
                        wkts: 1,
                        bbi: "1/78",
                        bbm: "1/78",
                        ave: 78,
                        econ: 4.33,
                        sr: 108,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },


                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 29,
                        balls: 1527,
                        runs: 1424,
                        wkts: 53,
                        bbi: "5/65",
                        bbm: "5/65",
                        ave: 26.87,
                        econ: 5.60,
                        sr: 28.8,
                        fourW: 2,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 57,
                        balls: 1247,
                        runs: 1482,
                        wkts: 72,
                        bbi: "4/22",
                        bbm: "4/22",
                        ave: 20.58,
                        econ: 7.13,
                        sr: 17.3,
                        fourW: 2,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 1,
                        inns: 2,
                        no: 0,
                        runs: 1,
                        hs: 1,
                        ave: 0.50,
                        bf: 3,
                        sr: 33.33,
                        hundreds: 0,
                        fifties: 0,
                        fours: 0,
                        sixes: 0,
                        ct: 1,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 13,
                        no: 5,
                        runs: 56,
                        hs: 17,
                        ave: 7.00,
                        bf: 70,
                        sr: 80.00,
                        hundreds: 0,
                        fifties: 0,
                        fours: 6,
                        sixes: 1,
                        ct: 9,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 8,
                        no: 6,
                        runs: 54,
                        hs: 13,
                        ave: 27.00,
                        bf: 33,
                        sr: 163.63,
                        hundreds: 0,
                        fifties: 0,
                        fours: 4,
                        sixes: 3,
                        ct: 8,
                    }
                ]
            }
        }
    },
    {
        fullName: "Haris Rauf",
        playingRole: "Bowler",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Fast",
        age: "30 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "--", odi: "20", t20: "15" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 1,
                        inns: 1,
                        balls: 108,
                        runs: 78,
                        wkts: 1,
                        bbi: "1/78",
                        bbm: "1/78",
                        ave: 78,
                        econ: 4.33,
                        sr: 108,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 29,
                        balls: 1527,
                        runs: 1424,
                        wkts: 53,
                        bbi: "5/65",
                        bbm: "5/65",
                        ave: 26.87,
                        econ: 5.60,
                        sr: 28.8,
                        fourW: 2,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 57,
                        balls: 1247,
                        runs: 1482,
                        wkts: 72,
                        bbi: "4/22",
                        bbm: "4/22",
                        ave: 20.58,
                        econ: 7.13,
                        sr: 17.3,
                        fourW: 2,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 1,
                        inns: 2,
                        no: 0,
                        runs: 1,
                        hs: 1,
                        ave: 0.50,
                        bf: 3,
                        sr: 33.33,
                        hundreds: 0,
                        fifties: 0,
                        fours: 0,
                        sixes: 0,
                        ct: 1,
                    },
                    {
                        format: "ODIs",
                        mat: 29,
                        inns: 13,
                        no: 5,
                        runs: 56,
                        hs: 17,
                        ave: 7.00,
                        bf: 70,
                        sr: 80.00,
                        hundreds: 0,
                        fifties: 0,
                        fours: 6,
                        sixes: 1,
                        ct: 9,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 8,
                        no: 6,
                        runs: 54,
                        hs: 13,
                        ave: 27.00,
                        bf: 33,
                        sr: 163.63,
                        hundreds: 0,
                        fifties: 0,
                        fours: 4,
                        sixes: 3,
                        ct: 8,
                    }
                ]
            }
        }
    },
    {
        fullName: "Imam-ul-Haq",
        playingRole: "Batsman",
        country: "Pakistan",
        battingStyle: "Left hand Bat",
        bowlingStyle: "Right arm Offbreak",
        age: "27 years",
        iccRankings: {
            batting: { test: "--", odi: "2", t20: "--" },
            bowling: { test: "--", odi: "--", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 20,
                        inns: 2,
                        balls: 24,
                        runs: 25,
                        wkts: 0,
                        bbi: "0/25",
                        bbm: "0/25",
                        ave: "--",
                        econ: 6.25,
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 59,
                        inns: 1,
                        balls: 6,
                        runs: 7,
                        wkts: 0,
                        bbi: "0/7",
                        bbm: "0/7",
                        ave: "--",
                        econ: 7.00,
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 2,
                        inns: 0,
                        balls: 0,
                        runs: 0,
                        wkts: 0,
                        bbi: "--",
                        bbm: "--",
                        ave: "--",
                        econ: "--",
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 20,
                        inns: 38,
                        no: 2,
                        runs: 1355,
                        hs: 157,
                        ave: 37.64,
                        bf: 2867,
                        sr: 47.26,
                        hundreds: 3,
                        fifties: 7,
                        fours: 159,
                        sixes: 10,
                        ct: 15,
                    },
                    {
                        format: "ODIs",
                        mat: 59,
                        inns: 59,
                        no: 5,
                        runs: 2865,
                        hs: 151,
                        ave: 53.05,
                        bf: 3151,
                        sr: 90.97,
                        hundreds: 9,
                        fifties: 15,
                        fours: 280,
                        sixes: 25,
                        ct: 23,
                    },
                    {
                        format: "T20Is",
                        mat: 2,
                        inns: 2,
                        no: 0,
                        runs: 21,
                        hs: 14,
                        ave: 10.50,
                        bf: 23,
                        sr: 91.30,
                        hundreds: 0,
                        fifties: 0,
                        fours: 1,
                        sixes: 1,
                        ct: 0,
                    }
                ]
            }
        }
    },
    {
        fullName: "Shadab Khan",
        playingRole: "Allrounder",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Legbreak",
        age: "25 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "--", odi: "32", t20: "7" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 6,
                        inns: 11,
                        balls: 1134,
                        runs: 654,
                        wkts: 14,
                        bbi: "3/31",
                        bbm: "6/86",
                        ave: 46.71,
                        econ: 3.46,
                        sr: 81.0,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 58,
                        inns: 57,
                        balls: 2790,
                        runs: 2471,
                        wkts: 73,
                        bbi: "4/28",
                        bbm: "4/28",
                        ave: 33.85,
                        econ: 5.31,
                        sr: 38.2,
                        fourW: 1,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 92,
                        inns: 91,
                        balls: 1884,
                        runs: 2056,
                        wkts: 106,
                        bbi: "4/14",
                        bbm: "4/14",
                        ave: 19.39,
                        econ: 6.54,
                        sr: 17.7,
                        fourW: 2,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 6,
                        inns: 12,
                        no: 1,
                        runs: 300,
                        hs: 56,
                        ave: 27.27,
                        bf: 700,
                        sr: 42.85,
                        hundreds: 0,
                        fifties: 3,
                        fours: 29,
                        sixes: 2,
                        ct: 8,
                    },
                    {
                        format: "ODIs",
                        mat: 58,
                        inns: 43,
                        no: 8,
                        runs: 676,
                        hs: 86,
                        ave: 19.31,
                        bf: 834,
                        sr: 81.02,
                        hundreds: 0,
                        fifties: 3,
                        fours: 49,
                        sixes: 18,
                        ct: 21,
                    },
                    {
                        format: "T20Is",
                        mat: 92,
                        inns: 61,
                        no: 9,
                        runs: 476,
                        hs: 42,
                        ave: 9.15,
                        bf: 386,
                        sr: 123.31,
                        hundreds: 0,
                        fifties: 0,
                        fours: 28,
                        sixes: 19,
                        ct: 43,
                    }
                ]
            }
        }
    },
    {
        fullName: "Naseem Shah",
        playingRole: "Bowler",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Fast",
        age: "21 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "22", odi: "34", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 17,
                        inns: 28,
                        balls: 2803,
                        runs: 1573,
                        wkts: 51,
                        bbi: "5/31",
                        bbm: "5/31",
                        ave: 30.84,
                        econ: 3.36,
                        sr: 55.0,
                        fourW: 1,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 13,
                        inns: 13,
                        balls: 672,
                        runs: 527,
                        wkts: 24,
                        bbi: "5/33",
                        bbm: "5/33",
                        ave: 21.95,
                        econ: 4.70,
                        sr: 28.0,
                        fourW: 0,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 16,
                        inns: 16,
                        balls: 360,
                        runs: 416,
                        wkts: 14,
                        bbi: "2/27",
                        bbm: "2/27",
                        ave: 29.71,
                        econ: 6.93,
                        sr: 25.7,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 17,
                        inns: 23,
                        no: 4,
                        runs: 112,
                        hs: 18,
                        ave: 5.89,
                        bf: 228,
                        sr: 49.12,
                        hundreds: 0,
                        fifties: 0,
                        fours: 14,
                        sixes: 2,
                        ct: 2,
                    },
                    {
                        format: "ODIs",
                        mat: 13,
                        inns: 5,
                        no: 1,
                        runs: 15,
                        hs: 5,
                        ave: 3.75,
                        bf: 24,
                        sr: 62.50,
                        hundreds: 0,
                        fifties: 0,
                        fours: 1,
                        sixes: 0,
                        ct: 2,
                    },
                    {
                        format: "T20Is",
                        mat: 16,
                        inns: 1,
                        no: 0,
                        runs: 5,
                        hs: 5,
                        ave: 5.00,
                        bf: 1,
                        sr: 500.00,
                        hundreds: 0,
                        fifties: 0,
                        fours: 1,
                        sixes: 0,
                        ct: 3,
                    }
                ]
            }
        }
    },
    {
        fullName: "Hasan Ali",
        playingRole: "Bowler",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Medium Fast",
        age: "29 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "27", odi: "--", t20: "29" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 22,
                        inns: 42,
                        balls: 4076,
                        runs: 2440,
                        wkts: 77,
                        bbi: "5/27",
                        bbm: "10/114",
                        ave: 31.68,
                        econ: 3.59,
                        sr: 52.9,
                        fourW: 4,
                        fiveW: 5,
                        tenW: 1,
                    },
                    {
                        format: "ODIs",
                        mat: 67,
                        inns: 65,
                        balls: 3216,
                        runs: 2805,
                        wkts: 91,
                        bbi: "5/34",
                        bbm: "5/34",
                        ave: 30.82,
                        econ: 5.23,
                        sr: 35.3,
                        fourW: 4,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 55,
                        inns: 55,
                        balls: 1103,
                        runs: 1347,
                        wkts: 60,
                        bbi: "4/18",
                        bbm: "4/18",
                        ave: 22.45,
                        econ: 7.32,
                        sr: 18.4,
                        fourW: 2,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 22,
                        inns: 37,
                        no: 4,
                        runs: 388,
                        hs: 21,
                        ave: 11.76,
                        bf: 808,
                        sr: 48.01,
                        hundreds: 0,
                        fifties: 0,
                        fours: 47,
                        sixes: 5,
                        ct: 5,
                    },
                    {
                        format: "ODIs",
                        mat: 67,
                        inns: 29,
                        no: 14,
                        runs: 388,
                        hs: 59,
                        ave: 25.87,
                        bf: 415,
                        sr: 93.49,
                        hundreds: 0,
                        fifties: 1,
                        fours: 21,
                        sixes: 21,
                        ct: 18,
                    },
                    {
                        format: "T20Is",
                        mat: 55,
                        inns: 25,
                        no: 11,
                        runs: 136,
                        hs: 27,
                        ave: 9.71,
                        bf: 113,
                        sr: 120.35,
                        hundreds: 0,
                        fifties: 0,
                        fours: 9,
                        sixes: 9,
                        ct: 18,
                    }
                ]
            }
        }
    },
    {
        fullName: "Abdullah Shafique",
        playingRole: "Batsman",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "N/A",
        age: "28 years",
        iccRankings: {
            batting: { test: "30", odi: "11", t20: "2" },
            bowling: { test: "--", odi: "--", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 27,
                        inns: 0,
                        balls: 0,
                        runs: 0,
                        wkts: 0,
                        bbi: "--",
                        bbm: "--",
                        ave: "--",
                        econ: "--",
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 59,
                        inns: 0,
                        balls: 0,
                        runs: 0,
                        wkts: 0,
                        bbi: "--",
                        bbm: "--",
                        ave: "--",
                        econ: "--",
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 83,
                        inns: 0,
                        balls: 0,
                        runs: 0,
                        wkts: 0,
                        bbi: "--",
                        bbm: "--",
                        ave: "--",
                        econ: "--",
                        sr: "--",
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 27,
                        inns: 45,
                        no: 5,
                        runs: 1373,
                        hs: 115,
                        ave: 34.32,
                        bf: 2721,
                        sr: 50.47,
                        hundreds: 2,
                        fifties: 7,
                        fours: 138,
                        sixes: 8,
                        ct: 81,
                        st: 9,
                    },
                    {
                        format: "ODIs",
                        mat: 59,
                        inns: 51,
                        no: 10,
                        runs: 1710,
                        hs: 115,
                        ave: 41.70,
                        bf: 1827,
                        sr: 93.61,
                        hundreds: 3,
                        fifties: 13,
                        fours: 119,
                        sixes: 28,
                        ct: 75,
                        st: 7,
                    },
                    {
                        format: "T20Is",
                        mat: 83,
                        inns: 75,
                        no: 16,
                        runs: 2635,
                        hs: 104,
                        ave: 44.66,
                        bf: 1961,
                        sr: 134.38,
                        hundreds: 1,
                        fifties: 23,
                        fours: 228,
                        sixes: 62,
                        ct: 58,
                        st: 5,
                    }
                ]
            }
        }
    },
    {
        fullName: "Iftikhar Ahmed",
        playingRole: "Allrounder",
        country: "Pakistan",
        battingStyle: "Right hand Bat",
        bowlingStyle: "Right arm Offbreak",
        age: "33 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "--", odi: "--", t20: "--" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 4,
                        inns: 3,
                        balls: 132,
                        runs: 50,
                        wkts: 1,
                        bbi: "1/8",
                        bbm: "1/8",
                        ave: 50,
                        econ: 2.27,
                        sr: 132,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 13,
                        inns: 9,
                        balls: 168,
                        runs: 146,
                        wkts: 3,
                        bbi: "1/4",
                        bbm: "1/4",
                        ave: 48.66,
                        econ: 5.21,
                        sr: 56.0,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 19,
                        balls: 288,
                        runs: 328,
                        wkts: 17,
                        bbi: "3/5",
                        bbm: "3/5",
                        ave: 19.29,
                        econ: 6.83,
                        sr: 17.0,
                        fourW: 0,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 4,
                        inns: 8,
                        no: 1,
                        runs: 93,
                        hs: 27,
                        ave: 13.28,
                        bf: 195,
                        sr: 47.69,
                        hundreds: 0,
                        fifties: 0,
                        fours: 11,
                        sixes: 2,
                        ct: 2,
                    },
                    {
                        format: "ODIs",
                        mat: 13,
                        inns: 13,
                        no: 1,
                        runs: 307,
                        hs: 94,
                        ave: 25.58,
                        bf: 327,
                        sr: 93.91,
                        hundreds: 0,
                        fifties: 1,
                        fours: 19,
                        sixes: 10,
                        ct: 3,
                    },
                    {
                        format: "T20Is",
                        mat: 57,
                        inns: 47,
                        no: 11,
                        runs: 966,
                        hs: 62,
                        ave: 26.83,
                        bf: 692,
                        sr: 139.59,
                        hundreds: 0,
                        fifties: 4,
                        fours: 61,
                        sixes: 55,
                        ct: 20,
                    }
                ]
            }
        }
    },
    {
        fullName: "Mohammad Nawaz",
        playingRole: "Allrounder",
        country: "Pakistan",
        battingStyle: "Left hand Bat",
        bowlingStyle: "Slow Left arm Orthodox",
        age: "29 years",
        iccRankings: {
            batting: { test: "--", odi: "--", t20: "--" },
            bowling: { test: "--", odi: "49", t20: "41" }
        },
        stats: {
            bowling: {
                title: "Bowling",
                stats: [
                    {
                        format: "Tests",
                        mat: 6,
                        inns: 12,
                        balls: 882,
                        runs: 403,
                        wkts: 18,
                        bbi: "5/88",
                        bbm: "7/170",
                        ave: 22.38,
                        econ: 2.74,
                        sr: 48.5,
                        fourW: 1,
                        fiveW: 1,
                        tenW: 0,
                    },
                    {
                        format: "ODIs",
                        mat: 32,
                        inns: 31,
                        balls: 1381,
                        runs: 1182,
                        wkts: 37,
                        bbi: "4/19",
                        bbm: "4/19",
                        ave: 31.94,
                        econ: 5.13,
                        sr: 37.3,
                        fourW: 1,
                        fiveW: 0,
                        tenW: 0,
                    },
                    {
                        format: "T20Is",
                        mat: 66,
                        inns: 66,
                        balls: 1232,
                        runs: 1413,
                        wkts: 61,
                        bbi: "4/19",
                        bbm: "4/19",
                        ave: 23.16,
                        econ: 6.88,
                        sr: 22.5,
                        fourW: 1,
                        fiveW: 0,
                        tenW: 0,
                    }
                ]
            },
            batting: {
                title: "Batting & Fielding",
                stats: [
                    {
                        format: "Tests",
                        mat: 6,
                        inns: 9,
                        no: 0,
                        runs: 98,
                        hs: 45,
                        ave: 10.88,
                        bf: 180,
                        sr: 54.44,
                        hundreds: 0,
                        fifties: 0,
                        fours: 13,
                        sixes: 2,
                        ct: 5,
                    },
                    {
                        format: "ODIs",
                        mat: 32,
                        inns: 22,
                        no: 5,
                        runs: 359,
                        hs: 53,
                        ave: 21.11,
                        bf: 508,
                        sr: 70.66,
                        hundreds: 0,
                        fifties: 1,
                        fours: 18,
                        sixes: 9,
                        ct: 10,
                    },
                    {
                        format: "T20Is",
                        mat: 66,
                        inns: 36,
                        no: 10,
                        runs: 444,
                        hs: 38,
                        ave: 17.07,
                        bf: 348,
                        sr: 127.59,
                        hundreds: 0,
                        fifties: 0,
                        fours: 25,
                        sixes: 18,
                        ct: 23,
                    }
                ]
            }
        }
    }
];


const PlayerDetails = () => {
    const [selectedPlayer, setSelectedPlayer] = useState(playersData[0]);

    const handlePlayerChange = (event) => {
        const player = playersData.find(player => player.fullName === event.target.value);
        setSelectedPlayer(player);
    };



    return (
        <>
            <div className="max-w-sm m-auto mt-10 dark:bg-gray-900 dark:text-white p-4 rounded-lg shadow-lg">
                <label htmlFor="player-select" className="block mb-2">Select Player:</label>
                <select
                    id="player-select"
                    className="block w-full p-2 border dark:bg-gray-900 dark:text-white border-gray-300 rounded"
                    onChange={handlePlayerChange}
                >
                    {playersData.map(player => (
                        <option className='dark:bg-gray-900 dark:text-white' key={player.fullName} value={player.fullName}>{player.fullName}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="max-w-sm rounded-3xl overflow-hidden shadow-lg bg-[#00A09A] text-white p-4 transform transition-transform hover:scale-105 duration-400 m-auto">
                    <div className="flex items-center mb-4">
                        <img src={countryFlag} alt="Pakistan Flag" className="w-12 h-12 mr-2 border-2 rounded-full" />
                        <h2 className="text-xl font-bold">{selectedPlayer.fullName}</h2>
                    </div>
                    <div className="flex justify-center mb-4">
                        <img className="rounded-full border-4 border-white w-64 h-auto" src={playerProfileImage} alt={selectedPlayer.fullName} />
                    </div>
                    <div className="text-center mt-4">
                        <p className="text-gray-300">INTL CAREER 2018 - 2024</p>
                    </div>
                    <div className="flex justify-end mt-4 space-x-2">
                        <p className="text-lg flex items-center">
                            <FaMapMarkerAlt className="mr-2" /> {selectedPlayer.country} | {selectedPlayer.playingRole}
                        </p>
                        <button
                            className="text-white py-2 text-2xl rounded flex items-center justify-center"

                        >
                            <FaHeart className="mr-2" />
                        </button>
                        <button
                            className="text-white py-2 text-2xl rounded flex items-center justify-center"
                        >
                            <FaShareAlt className="mr-2" />
                        </button>
                    </div>

                </div>

                <div className="grid justify-start items-start max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-lg bg-[#00A09A] text-white p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <h3 className="text-lg font-bold">FULL NAME</h3>
                            <p className="text-md mt-2">{selectedPlayer.fullName}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">PLAYING ROLE</h3>
                            <p className="text-md mt-2">{selectedPlayer.playingRole}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">Country</h3>
                            <p className="text-md mt-2">{selectedPlayer.country}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <h3 className="text-lg font-bold">BATTING STYLE</h3>
                            <p className="text-md mt-2">{selectedPlayer.battingStyle}</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-bold">BOWLING STYLE</h3>
                            <p className="text-md mt-2">{selectedPlayer.bowlingStyle}</p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                        <div>
                            <h3 className="text-lg font-bold">AGE</h3>
                            <p className="text-md mt-2">{selectedPlayer.age}</p>
                        </div>
                        <div className="col-span-1 md:col-span-3">
                            <h3 className="text-lg font-bold">ICC Rankings</h3>
                            <div className="mt-2">
                                <div className="grid grid-cols-4 text-center">
                                    <div></div>
                                    <div>Test</div>
                                    <div>ODI</div>
                                    <div>T20</div>
                                </div>
                                <div className="grid grid-cols-4 text-center mt-2">
                                    <div className='font-bold'>Batting</div>
                                    <div>{selectedPlayer.iccRankings.batting.test}</div>
                                    <div>{selectedPlayer.iccRankings.batting.odi}</div>
                                    <div>{selectedPlayer.iccRankings.batting.t20}</div>
                                </div>
                                <div className="grid grid-cols-4 text-center mt-2">
                                    <div className='font-bold'>Bowling</div>
                                    <div>{selectedPlayer.iccRankings.bowling.test}</div>
                                    <div>{selectedPlayer.iccRankings.bowling.odi}</div>
                                    <div>{selectedPlayer.iccRankings.bowling.t20}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto rounded overflow-hidden shadow-inner grid grid-cols-1 dark:text-white p-8 mt-8">
                <div className='bg-[#00A09A] p-2 rounded-xl'>
                    <h2 className="text-2xl font-bold flex items-center justify-center">{selectedPlayer.fullName} Career Stats</h2>
                </div>

                {Object.values(selectedPlayer.stats).map((section) => (
                    <div key={section.title} className="mb-8">
                        <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr className="">
                                        {Object.keys(section.stats[0]).map((key) => (
                                            <th key={key} className="px-4 py-2 text-left dark:bg-gray-800 dark:text-white">{key.toUpperCase()}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="dark:bg-gray-900 dark:text-white">
                                    {section.stats.map((stat, index) => (
                                        <tr key={index} className="text-center">
                                            {Object.values(stat).map((value, idx) => (
                                                <td key={idx} className="px-4 py-2 border-t">{value}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}
            </div>


            <AverageGraph />
        </>
    );
};

export default PlayerDetails;
