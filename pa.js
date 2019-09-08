opt = {
    "legend": {
        "show": true,
        "icon": "circle",
        "top": "center",
        "left": "70%",
        "data": ["专利申请量", "专利授权量", "有效发明专利量", "每万人口发明专利拥有量"],
        "width": 50,
        "padding": [0, 5],
        "itemGap": 25,
        "textStyle": {
            "rich": {
                "title": {
                    "fontSize": 16,
                    "lineHeight": 15,
                    "color": "rgb(0, 178, 246)"
                },
                "value": {
                    "fontSize": 18,
                    "lineHeight": 20,
                    "color": "#fff"
                }
            }
        }
    },
    "tooltip": {
        "show": true,
        "trigger": "item",
        "formatter": "{b}:{c}"
    },
    "color": ["rgb(24, 183, 142)", "rgb(1, 179, 238)", "rgb(22, 75, 205)", "rgb(52, 52, 176)"],
    "grid": {
        "top": "16%",
        "bottom": "53%",
        "left": "30%",
        "containLabel": false
    },
    "yAxis": [{
        "type": "category",
        "inverse": true,
        "axisLine": {
            "show": false
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "interval": 0,
            "inside": true,
            "textStyle": {
                "color": "#fff",
                "fontSize": 16
            },
            "show": true
        }
    }],
    "xAxis": [{
        "show": false
    }],
    "series": [{
        "name": "",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["73%", "68%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 12112,
            "name": "专利申请量"
        }, {
            "value": 0,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "silent": true,
        "z": 1,
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["73%", "68%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 7.5,
            "itemStyle": {
                "color": "rgb(3, 31, 62)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }, {
            "value": 2.5,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["58%", "53%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 6156,
            "name": "专利授权量"
        }, {
            "value": 12112,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "silent": true,
        "z": 1,
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["58%", "53%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 7.5,
            "itemStyle": {
                "color": "rgb(3, 31, 62)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }, {
            "value": 2.5,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["43%", "38%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 6986,
            "name": "有效发明专利量"
        }, {
            "value": 12112,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "silent": true,
        "z": 1,
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["43%", "38%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 7.5,
            "itemStyle": {
                "color": "rgb(3, 31, 62)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }, {
            "value": 2.5,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["28%", "23%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 9.89,
            "name": "每万人口发明专利拥有量"
        }, {
            "value": 100,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }, {
        "name": "",
        "type": "pie",
        "silent": true,
        "z": 1,
        "clockWise": false,
        "hoverAnimation": false,
        "radius": ["28%", "23%"],
        "center": ["30%", "55%"],
        "label": {
            "show": false
        },
        "itemStyle": {
            "label": {
                "show": false
            },
            "labelLine": {
                "show": false
            },
            "borderWidth": 5
        },
        "data": [{
            "value": 7.5,
            "itemStyle": {
                "color": "rgb(3, 31, 62)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }, {
            "value": 2.5,
            "name": "",
            "itemStyle": {
                "color": "rgba(0,0,0,0)",
                "borderWidth": 0
            },
            "tooltip": {
                "show": false
            },
            "hoverAnimation": false
        }]
    }]
}