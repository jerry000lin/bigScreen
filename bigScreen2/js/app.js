window.onload = function () {
    const kytr = kytrChart()
    const hydl = hydlChart()
    const gxqysl = gxqyslChart()
    const qygm = qygmChart()

    window.onresize = function () {
        kytr.resize()
        hydl.resize()
        gxqysl.resize()
        qygm.resize()
    }
}

function kytrChart() {
    const myChart = echarts.init(document.getElementById("kytr"))
    const option = {
        title: {
            text: '科技经费占营业比',

            x: 'center',
            y: '10%',
            textStyle: {
                fontWeight: 'normal',
                color: '#fff',
                fontSize: '16'
            }
        },
        color: ['rgba(176, 212, 251, 1)'],
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['50%', '66%'],
            center: ['50%', '60%'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            hoverAnimation: false,
            label: {
                normal: {
                    show: true,
                    position: 'center',
                    formatter: '4%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 25

                    }
                }
            },
            data: [{
                value: 75,
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#00cefc' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#367bec' // 100% 处的颜色
                            }]
                        },

                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value: 25,
                itemStyle: {
                    color: "transparent"
                }
            }]
        }]
    }
    myChart.setOption(option)
    return myChart;

}

function hydlChart() {
    const myChart = echarts.init(document.getElementById("hydl"))

    var data = [{
            name: "A",
            value: 24,
        },
        {
            name: "C",
            value: 243,
        },

        {
            name: "D",
            value: 12,
        },

        {
            name: "E",
            value: 60,
        },

        {
            name: "F",
            value: 14,
        },


        {
            name: "G",
            value: 4,
        },
        {
            name: "I",
            value: 259,
        },
        {
            name: "J",
            value: 3,
        },
        {
            name: "K",
            value: 1,
        },
        {
            name: "L",
            value: 5,
        },
        {
            name: "M",
            value: 92,
        },
        {
            name: "N",
            value: 22,
        },
        {
            name: "O",
            value: 5,
        },
        {
            name: "P",
            value: 1,
        },
        {
            name: "Q",
            value: 2,
        },
        {
            name: "R",
            value: 4,
        },

    ];
    const x = data.map(item => item.name)
    const option = {
        color: ['#3398DB'],
        grid: {
            left: '2%',
            right: '2%',
            bottom: '2%',
            top: '20%',
            containLabel: true,
        },
        xAxis: [{
            type: 'category',
            data: x,
            gridIndex: 0,
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#0c3b71'
                }
            },
            axisLabel: {
                show: true,
                color: '#fff',
                fontSize: 10,
                interval: 0,
                formatter: function (val) {
                    var strs = val.split(''); //字符串数组
                    var str = ''
                    for (var i = 0, s; s = strs[i++];) { //遍历字符串数组
                        str += s;
                        if (!(i % 5)) str += '\n'; //按需要求余
                    }
                    return str
                }

            }
        }],
        yAxis: [{
                type: 'value',
                name: "数量",
                nameTextStyle: {
                    color: "#fff"
                },
                nameGap: 10,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                },
                minInterval: 100,
                axisLine: {
                    lineStyle: {
                        color: '#0c3b71'
                    }
                },
                axisLabel: {
                    color: '#fff',
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                gridIndex: 0,
                min: 0,
                max: 100,
                splitNumber: 12,
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                splitArea: {
                    show: true,
                    areaStyle: {
                        color: ['rgba(250,250,250,0.0)', 'rgba(250,250,250,0.05)']
                    }
                }
            }
        ],
        series: [{
                name: '数量',
                type: 'bar',
                barWidth: '30%',
                xAxisIndex: 0,
                yAxisIndex: 0,
                label: {
                    normal: {
                        position: "top",
                        show: true,
                        color: "#fff"
                    },
                },
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#00feff'
                                },
                                {
                                    offset: 0.5,
                                    color: '#027eff'
                                },
                                {
                                    offset: 1,
                                    color: '#0286ff'
                                }
                            ]
                        )
                    }
                },
                data: data,
                zlevel: 11

            },
            {
                name: '背景',
                type: 'bar',
                barWidth: '50%',
                xAxisIndex: 0,
                yAxisIndex: 1,
                barGap: '-135%',
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                itemStyle: {
                    normal: {
                        color: 'rgba(255,255,255,0.1)'
                    }
                },
                zlevel: 9
            },

        ]
    };

    myChart.setOption(option)
    return myChart;
}

function gxqyslChart() {

    const myChart = echarts.init(document.getElementById("gxqysl"))

    const option = {
        color: ["#0082fc", "#05f8d6", ],
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
                    color: "#666"
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
            },
            {
                name: '高新企业增量',
                type: 'line',
                yAxisIndex: 1,
                data: [125, 214, 412],
                lineStyle: {
                    normal: {
                        width: 2
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
    myChart.setOption(option)
    return myChart;
}


function qygmChart() {
    const myChart = echarts.init(document.getElementById("qygm"))

    var data = [
        ["1", "1", 15],
        ["2", "1", 13],
        ["2", "2", 5],
        ["2", "3", 2],
        ["3", "1", 8],
        ["3", "2", 14],
        ["3", "3", 6],
        ["4", "1", 6],
        ["4", "2", 43],
        ["4", "3", 47],
        ["4", "4", 4],
        ["4", "5", 1],
        ["4", "6", 1],
        ["5", "1", 1],
        ["5", "2", 17],
        ["5", "3", 70],
        ["5", "4", 30],
        ["5", "5", 11],
        ["5", "6", 4],
        ["6", "1", 1],
        ["6", "2", 3],
        ["6", "3", 45],
        ["6", "4", 45],
        ["6", "5", 47],
        ["6", "6", 64],
        ["7", "3", 8],
        ["7", "4", 19],
        ["7", "5", 37],
        ["7", "6", 184],
    ]


    var itemStyle = {
        normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    const option = {
        color: [
            '#367bec'
        ],
        xAxis: {
            type: 'category',
            name: '',
            nameGap: 16,
            nameTextStyle: {
                color: '#fff',
                fontSize: 14
            },
            data: ["1", "2", "3", "4", "5", "6", "7"],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            }
        },
        grid: {
            top: "10%",
            left: "8%",
            right: "5%",
            bottom: "10%"
        },
        yAxis: {
            type: 'category',
            name: '',
            nameLocation: 'end',
            nameGap: 20,
            nameTextStyle: {
                color: '#fff',
                fontSize: 16
            },
            data: ["1", "2", "3", "4", "5", "6"],
            axisLine: {
                lineStyle: {
                    color: '#eee'
                }
            },
            splitLine: {
                show: false
            }
        },
        visualMap: [{
            left: 'right',
            top: '10%',
            dimension: 2,
            itemWidth: 30,
            show: false,
            itemHeight: 120,
            calculable: true,
            precision: 0.01,
            inRange: {
                symbolSize: [10, 20],
                colorLightness: [0.8, 0.5]
            }
        }],
        series: [{
            name: '北京',
            type: 'scatter',
            itemStyle: itemStyle,
            data: data
        }]
    };

    myChart.setOption(option)
    return myChart;
}