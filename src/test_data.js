var data1 = [{
    "type": "questset",
    "id": "qs_1",
    "children": [{
        "type": "quest",
        "id": "q_1",
        "children": [{
            "type": "objectivelist",
            "id": "ol_1",
            "children": [{
                "type": "objective",
                "id": "o_1"
            }]
        }]
    }]
}];

var data2 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var gdata2 ;
/**
 * two objectives
 */
var data3 =[
    {
        "type": "questset",
        "id": "qs_1",
        "children": [
            {
                "type": "quest",
                "id": "q_1",
                "children": [
                    {
                        "type": "objectivelist",
                        "id": "ol_1",
                        "children": [
                            {
                                "type": "objective",
                                "id": "o_1"
                            },
                            {
                                "type": "objective",
                                "id": "o_2"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

/**
 * two objective list
 */
var data4 = [
    {
        "type": "questset",
        "id": "qs_1",
        "children": [
            {
                "type": "quest",
                "id": "q_1",
                "children": [
                    {
                        "type": "objectivelist",
                        "id": "ol_1",
                        "children": [
                            {
                                "type": "objective",
                                "id": "o_1"
                            },
                            {
                                "type": "objective",
                                "id": "o_2"
                            }
                        ]
                    },
                    {
                        "type": "objectivelist",
                        "id": "ol_2",
                        "children": [
                            {
                                "type": "objective",
                                "id": "o_3"
                            },
                            {
                                "type": "objective",
                                "id": "o_4"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var gdata4 ;
//Two quest set
var data5 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

/**
 * two quests
 */
var data6 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            },
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
];


var data7 = [
    {
        "data": {
            "type": "questset",
            "id": "qs_1"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_1"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_1"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_1"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "data": {
            "type": "questset",
            "id": "qs_2"
        },
        "children": [
            {
                "data": {
                    "type": "quest",
                    "id": "q_2"
                },
                "children": [
                    {
                        "data": {
                            "type": "objectivelist",
                            "id": "ol_2"
                        },
                        "children": [
                            {
                                "data": {
                                    "type": "objective",
                                    "id": "o_2"
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }

];
