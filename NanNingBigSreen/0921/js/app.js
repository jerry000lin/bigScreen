window.onload = function () {
    const chart1 = setTechAwardCharts(seriesData.techAward)
    const chart2 = setHighTechCompanyCharts(seriesData.highTechCompany)
    const chart3 = setWordCharts(seriesData.word)
    const chart4 = setCostCharts(seriesData.cost)
    const chart5 = setTechCompanyCharts(seriesData.techCompany)
    let chart6 = setPatentChart(seriesData.patent)
    const chart7 = setInstitutionCharts(seriesData.institution)
    const chart8 = setMapCharts()

    window.onresize = function () {
        chart1.resize();
        chart2.resize();
        chart3.resize();
        chart4.resize();
        chart5.resize();
        chart6 = setPatentChart(seriesData.patent)
        chart6.resize();
        chart7.resize();
        chart8.resize();
    }
}

function setTechAwardCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("techAward"))

    const techAwardOption = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#f47a75", "#006599", "#D8E12C"],
        tooltip: {
            trigger: 'axis',
        },
        grid: {
            top: 60,
            bottom: 25
        },
        legend: {
            textStyle: {
                color: "#fff"
            },
            top: 5,
            right: 20,
            left: 20,
            type: "scroll",
            pageIconColor: "#fff",
            pageTextStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            data: [
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018"
            ],
            axisPointer: {
                type: 'shadow'
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: "#fff"
            },
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: "#fff"
                }
            },
            axisPointer: {
                shadowStyle: {
                    color: "#666",
                    shadowBlur: 5
                }
            }
        }],
        yAxis: [{
            type: 'value',
            name: 'pre',
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: '#5793f3'
                }
            },
            splitLine: {
                lineStyle: {
                    type: "dotted",
                    color: "#5793f3",
                    opacity: 0.5
                },
            }
        }],
        series: [{
                name: '国家科技奖',
                type: 'line',
                symbol: "diamond",
                data: [0.11, 0.15, 0.15, 0.07, 0.07, 0.11, 0.07, 0.07, 0.19]
            },
            {
                name: '广西科技奖',
                type: 'line',
                symbol: "diamond",
                data: [0.07, 0.05, 0.08, 0.08, 0.07, 0.06, 0.10, 0.27, 0.24]
            },
            {
                name: '南宁市科技奖',
                type: 'line',
                symbol: "diamond",
                data: [0.09, 0.10, 0.14, 0.12, 0.13, 0.14, 0.14, 0.14]
            }
        ]
    };
    myChart.setOption(techAwardOption)
    return myChart;
}

function setHighTechCompanyCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("highTechCompany"))

    const option = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#CDCC00", "#F58B01", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​"],

        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            right: 0,
            textStyle: {
                color: "#fff",
            },
            orient: "vertical",
            type: "scroll",
            pageIconColor: "#fff",
            pageTextStyle: {
                color: "transparent"
            }
        },
        series: [{
            type: 'pie',
            radius: '80%',
            startAngle: -180,
            minAngle: 10,
            center: ['40%', '50%'],
            data: seriesData.sort(function (a, b) {
                return b.value - a.value;
            }),
            label: {
                fontSize: 14,
                textShadowBlur: 10,
                textShadowColor: '#aaa',
                formatter: "{d}%"
            },
            labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 10
            },
            itemStyle: {
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };

    const option2 = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#f47a75", "#006599", "#D8E12C"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
        },
        grid: {
            top: 60,
            bottom: 25
        },
        legend: {
            textStyle: {
                color: "#fff"
            },
            top: 5,
            x: "center",
            type: "scroll",
            pageIconColor: "#fff",
            pageTextStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            data: ["2016", "2017", "2018"],
            axisPointer: {
                type: 'shadow'
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#666"
                }
            },
            axisPointer: {
                shadowStyle: {
                    color: "#666",
                    shadowBlur: 5
                }
            }
        }],
        yAxis: [{
                type: 'value',
                name: '高新企业数量',
                nameTextStyle: {
                    color: '#fff'
                },
                axisLabel: {
                    color: "#fff"
                },
                axisLine: {
                    lineStyle: {
                        color: "#CC3467"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#CC3467",
                        type: "dotted",
                        opacity: 0.5

                    }
                },
                axisPointer: {
                    shadowStyle: {
                        color: "#CC3467"
                    }
                }
            },
            {
                type: 'value',
                name: '高新企业增量',
                nameTextStyle: {
                    color: '#fff'
                },
                axisLabel: {
                    color: "#fff"
                },
                axisLine: {
                    lineStyle: {
                        color: '#5793f3'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dotted",
                        color: "#5793f3",
                        opacity: 0.5
                    },
                }
            }
        ],
        series: [{
                name: '高新企业数量',
                type: 'bar',
                data: [303, 446, 751],
                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: 'rgba(255,255,255, 0.5)'
                },
            },
            {
                name: '高新企业增量',
                type: 'line',
                yAxisIndex: 1,
                data: [125, 214, 412],
                lineStyle: {
                    normal: {
                        width: 2,
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                    }
                },
                symbol: "diamond",
                smooth: true,
            }
        ]
    }

    let key = 0
    myChart.setOption(option)
    setInterval(() => {
        if (key == 0) {
            myChart.clear()
            myChart.setOption(option2)
            key = 1
        } else {
            key = 0
            myChart.clear()
            myChart.setOption(option)
        }
    }, 16000)

    let scrollDataIndex = 0
    setInterval(() => {
        if (key == 0) {
            scrollDataIndex = (++scrollDataIndex) % 5
            myChart.dispatchAction({
                type: 'legendScroll',
                scrollDataIndex: scrollDataIndex
            })
        }
    }, 2000);

    return myChart
}

function setWordCharts(data) {
    //初始化echarts实例
    const wordChart = echarts.init(document.getElementById("wordChart"));
    const wordOpt = {
        series: [{
            type: 'wordCloud',
            shape: 'diamond', //circle cardioid diamond triangle-forward triangle
            left: 0,
            right: 0,
            top: 5,
            bottom: 5,
            width: '100%',
            height: '100%',
            gridSize: 10, //值越大，word间的距离越大，单位像素
            sizeRange: [15, 25], //word的字体大小区间，单位像素
            rotationRange: [0, 0], //word的可旋转角度区间
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            100,
                            150 + Math.round(Math.random() * 105),
                            100
                        ].join(',') + ')';
                    },
                    shadowBlur: 2,
                    shadowColor: '#fff',
                },
                emphasis: {
                    shadowBlur: 8,
                    shadowColor: '#eee',
                    shadowOffsetX: 4,
                    shadowOffsetY: 4
                }
            },
            data
        }],
    };
    wordChart.setOption(wordOpt);
    return wordChart
}

function setCostCharts(data) {
    const costChart = echarts.init(document.getElementById("costChart"));
    const costChartsOption = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#f47a75", "#006599", "#D8E12C"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
        },
        grid: {
            top: 60,
            bottom: 25
        },
        legend: {
            textStyle: {
                color: "#fff"
            },
            top: 5,
            right: 20,
            left: 20,
            data: ["专利质押项目数", "科学研究与技术开发计划项目数", "科技型中小企业技术创新项目数", "专利质押项目经费", "科学研究与技术开发计划项目经费", "科技型中小企业技术创新项目经费", ],
            type: "scroll",
            pageIconColor: "#fff",
            pageTextStyle: {
                color: "#fff"
            }
        },
        xAxis: [{
            type: 'category',
            data: data.x,
            axisPointer: {
                type: 'shadow'
            },
            nameTextStyle: {
                color: '#fff'
            },
            axisLabel: {
                color: "#fff"
            },
            axisLine: {
                lineStyle: {
                    color: "#666"
                }
            },
            axisPointer: {
                shadowStyle: {
                    color: "#666",
                    shadowBlur: 5
                }
            }
        }],
        yAxis: [{
                type: 'value',
                name: '数量',
                nameTextStyle: {
                    color: '#fff'
                },
                axisLabel: {
                    color: "#fff"
                },
                axisLine: {
                    lineStyle: {
                        color: "#CC3467"
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: "#CC3467",
                        type: "dotted",
                        opacity: 0.5

                    }
                },
                axisPointer: {
                    shadowStyle: {
                        color: "#CC3467"
                    }
                }
            },
            {
                type: 'value',
                name: '经费(万元)',
                nameTextStyle: {
                    color: '#fff'
                },
                axisLabel: {
                    color: "#fff"
                },
                min: 100,
                axisLine: {
                    lineStyle: {
                        color: '#5793f3'
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dotted",
                        color: "#5793f3",
                        opacity: 0.5
                    },
                }
            }
        ],
        series: [{
                name: '专利质押项目数',
                type: 'bar',
                data: data["专利质押项目数"],
                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: 'rgba(255,255,255, 0.5)'
                },
            },
            {
                name: '科学研究与技术开发计划项目数',
                type: 'bar',
                data: data["专利质押项目数"],
                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: 'rgba(255,255,255, 0.5)'
                },
            },
            {
                name: '科技型中小企业技术创新项目数',
                type: 'bar',
                data: data["科技型中小企业技术创新项目数"],
                itemStyle: {
                    shadowBlur: 5,
                    shadowColor: 'rgba(255,255,255, 0.5)'
                },
            },
            {
                name: '专利质押项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["专利质押项目经费"],
                lineStyle: {
                    normal: {
                        width: 2,
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                    }
                },
                symbol: "diamond",
                smooth: true,
            },
            {
                name: '科学研究与技术开发计划项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["科学研究与技术开发计划项目经费"],
                lineStyle: {
                    normal: {
                        width: 2,
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                    }
                },
                symbol: "diamond",
                smooth: true,
            },
            {
                name: '科技型中小企业技术创新项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["科技型中小企业技术创新项目经费"],
                lineStyle: {
                    normal: {
                        width: 2,
                        shadowColor: 'rgba(71,216,190, 0.5)',
                        shadowBlur: 5,
                        shadowOffsetY: 2
                    }
                },
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                    }
                },
                symbol: "diamond",
                smooth: true,
            }
        ]
    }
    costChart.setOption(costChartsOption);

    let scrollDataIndex = 0
    setInterval(() => {
        scrollDataIndex = (++scrollDataIndex) % 5
        costChart.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: scrollDataIndex
        })
    }, 2000);
    return costChart
}

function setTechCompanyCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("techCompany"))
    option = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#09b0d3", "#1d27c9", "#f9e264", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​", "#f1b000", "#5c0c7b", "#7b76ac", "#2059a6", "#669934"],
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            right: 0,
            textStyle: {
                color: "#fff",
            },
            orient: "vertical",
            type: "scroll",
            pageIconColor: "#fff",
            pageTextStyle: {
                color: "transparent"
            }
        },
        series: [{
            type: 'pie',
            radius: ["50%", '80%'],
            startAngle: -180,
            minAngle: 5,
            center: ['30%', '50%'],
            itemStyle: {
                shadowColor: 'rgba(255,255,255, 0.5)',
                shadowBlur: 10
            },
            data: seriesData.sort(function (a, b) {
                return b.value - a.value;
            }),
            label: {
                show: false
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    myChart.setOption(option)

    let scrollDataIndex = 0
    setInterval(() => {
        scrollDataIndex = (++scrollDataIndex) % 5
        myChart.dispatchAction({
            type: 'legendScroll',
            scrollDataIndex: scrollDataIndex
        })
    }, 2000);

    return myChart
}

function setPatentChart(data) {
    const myChart = echarts.init(document.getElementById("patent"));


    const option = {
        "tooltip": {
            "show": true,
            "trigger": "item",
            "formatter": "{b}:{c}"
        },
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#09b0d3", "#f9e264", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​"],

        "yAxis": [{
            "type": "category",
            "axisLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLabel": {
                "show": false
            }
        }],
        "xAxis": [{
            "show": false
        }],
        "series": [{
            "name": "",
            "type": "pie",
            "hoverAnimation": false,
            "radius": ["80%", "70%"],
            "center": ["30%", "55%"],
            label: {
                fontSize: 16,
                // textShadowBlur: 5,
                "formatter": "{b}\n{c}",
                textShadowColor: '#999'
            },
            labelLine: {
                smooth: 0.2,
                length: 30,
                length2: 50
            },
            "data": [{
                "value": 12112,
                "name": "专利申请量"
            }, {
                "value": 4037.33,
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
            "hoverAnimation": false,
            "radius": ["80%", "70%"],
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
            "hoverAnimation": false,
            "radius": ["65%", "55%"],
            "center": ["30%", "55%"],

            label: {
                fontSize: 16,
                // textShadowBlur: 5,
                "formatter": "{b}\n{c}",
                textShadowColor: '#aaa'
            },
            labelLine: {
                smooth: 0.2,
                length: 70,
                length2: 30
            },
            "data": [{
                "value": 6156,
                "name": "专利授权量"
            }, {
                "value": 8888,
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
            "hoverAnimation": false,
            "radius": ["65%", "55%"],
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
            "hoverAnimation": false,
            "radius": ["50%", "40%"],
            "center": ["30%", "55%"],

            label: {
                fontSize: 16,
                // textShadowBlur: 5,
                "formatter": "{b}\n{c}",
                textShadowColor: '#aaa'
            },
            labelLine: {
                smooth: 0.2,
                length: 70,
                length2: 20
            },
            "data": [{
                "value": 6986,
                "name": "有效发明专利量"
            }, {
                "value": 5126,
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
            "hoverAnimation": false,
            "radius": ["50%", "40%"],
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
            "hoverAnimation": false,
            "radius": ["35%", "25%"],
            "center": ["30%", "55%"],

            label: {
                fontSize: 16,
                // textShadowBlur: 5,
                "formatter": "{b}\n{c}",
                textShadowColor: '#aaa'
            },
            labelLine: {
                smooth: 0.2,
                length: window.innerHeight / 14,
                length2: 10
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
            "hoverAnimation": false,
            "radius": ["35%", "25%"],
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


    myChart.setOption(option);
    return myChart
}


function setInstitutionCharts(data) {
    const institutionCharts = echarts.init(document.getElementById("institution"));
    const institutionOpt = {
        color: ["#30588C", "#984D54", "#09b0d3", "#1d27c9", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​", "#f1b000", "#5c0c7b", "#7b76ac", "#2059a6", "#669934"],
        backgroundColor: "transparent",
        tooltip: {
            trigger: 'item',
            formatter: "{b}:{c}家"
        },
        series: [{
            type: 'treemap',
            top: '0',
            bottom: '0',
            left: '0',
            right: '0',
            roam: false, //是否开启拖拽漫游（移动和缩放）
            nodeClick: false, //点击节点后的行为,false无反应
            breadcrumb: {
                show: false
            },
            label: { //描述了每个矩形中，文本标签的样式。
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 11,
                },
                position: ['10%', '10%'],
                formatter: function (params) {
                    var arr = [
                        params.name,
                        params.value + '家'
                    ];
                    return arr.join('\n');
                }

            },
            itemStyle: {
                borderColor: "transparent",
                borderWidth: 2
            },
            data: data
        }]
    };
    institutionCharts.setOption(institutionOpt);

    return institutionCharts
}

function setMapCharts() {
    //初始化echarts实例
    const mapChart = echarts.init(document.getElementById("mapChart"));
    const mapChartOpt = {
        geo: {
            map: '南宁市',
            roam: false, //开启鼠标缩放和漫游
            zoom: 1, //地图缩放级别
            selectedMode: "single", //选中模式：single | multiple
            layoutCenter: ['50%', '50%'],
            layoutSize: '98%', //保持地图宽高比
            label: {
                normal: {
                    show: true,
                    color: "#F1B000",
                },
                emphasis: {
                    show: true,
                    color: '#fff'
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'transparent',
                    borderColor: '#3fdaff',
                    borderWidth: 2,
                    shadowColor: 'rgba(63, 218, 255, 0.5)',
                    shadowBlur: 30
                },
                emphasis: {
                    areaColor: '#2B91B7',
                }
            },
            regions: [{
                    name: "兴宁区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                }, {
                    name: "青秀区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                }, {
                    name: "江南区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                }, {
                    name: "西乡塘区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                }, {
                    name: "良庆区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                }, {
                    name: "邕宁区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                },
                {
                    name: "武鸣区",
                    itemStyle: {
                        areaColor: '#2B91B7',
                    }
                },
                {
                    name: "隆安县",
                },
                {
                    name: "马山县",
                },
                {
                    name: "上林县",
                },
                {
                    name: "宾阳县",
                },
                {
                    name: "横县"
                },
            ]
        },

    };
    mapChart.setOption(mapChartOpt);
    return mapChart
}