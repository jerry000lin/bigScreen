$(function () {
    setTechAwardCharts(seriesData.techAward)
    setHighTechCompanyCharts(seriesData.highTechCompany)
    setWordCharts()
})

function setTechAwardCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("techAward"))

    const techAwardOption = {
        tooltip: {
            show: true
        },
        label: {
            minAngle: 5,
        },
        series: {
            type: "sunburst",
            center: ["50%", "50%"],
            data: seriesData,
            sort: null,
            levels: [{}, {
                r0: "15%",
                r: "35%",
                itemStyle: {
                    borderWidth: 0.8,
                },
                label: {
                    align: "center",
                    fontSize: 12,
                    color: '#fff',
                    textBorderWidth: 0
                }
            }, {
                r0: "37%",
                r: "72%",
                itemStyle: {
                    borderWidth: 0.8
                },
                label: {
                    position: 'center',
                    fontSize: 12,
                    color: '#fff',
                    textBorderWidth: 0
                }
            }, {
                r0: "74%",
                r: "76%",
                itemStyle: {
                    borderWidth: 1,
                    borderColor: "white"
                },
                label: {
                    position: 'outside',
                    padding: 3,
                    fontSize: 12,
                    color: 'auto',
                    textBorderWidth: 1,
                    textBorderColor: "#fff"
                }
            }, ]
        }
    };
    myChart.setOption(techAwardOption)
}

function setHighTechCompanyCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("highTechCompany"))
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{b} : {c} ({d}%)"
        },
        legend: {
            right: 0,
            textStyle: {
                color: "#fff",
            },
            orient: "vertical"
        },
        series: [{
            type: 'pie',
            radius: '80%',
            center: ['40%', '50%'],
            data: seriesData.sort(function (a, b) {
                return a.value - b.value;
            }),
            label: {
                fontSize: 18,
                normal: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#fff'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                }
            },
            itemStyle: {
                normal: {
                    shadowBlur: 200,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }]
    };
    myChart.setOption(option)

}

function setWordCharts() {
    //初始化echarts实例
    const wordChart = echarts.init(document.getElementById("wordChart"));
    const wordOpt = {
        series: [{
            type: 'wordCloud',
            shape: 'diamond', //circle cardioid diamond triangle-forward triangle
            left: 0,
            right: 0,
            top: 0,
            right: 0,
            width: '100%',
            height: '100%',
            gridSize: 10, //值越大，word间的距离越大，单位像素
            sizeRange: [20, 32], //word的字体大小区间，单位像素
            rotationRange: [0,0], //word的可旋转角度区间
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160),
                            Math.round(Math.random() * 160)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 2,
                    shadowColor: '#fff'
                }
            },
            data: [{
                name: '数据可视化',
                value: 3000,
            }, {
                name: '大数据',
                value: 2181
            }, {
                name: '云计算',
                value: 1386
            }, {
                name: '物联网',
                value: 2055
            }, {
                name: '移动互联网',
                value: 2467
            }, {
                name: '人工智能',
                value: 2244
            }, {
                name: '深度学习',
                value: 1898
            }, {
                name: '机器学习',
                value: 1484
            }, {
                name: '区块链',
                value: 3865
            }, {
                name: 'AI',
                value: 897
            }, {
                name: 'Big Data',
                value: 847
            }, {
                name: 'Deep Learning',
                value: 1366
            }, {
                name: 'IoT',
                value: 555
            }, {
                name: 'Data Visualization',
                value: 550
            }, {
                name: '互联网+',
                value: 2222
            }, {
                name: '智能合约',
                value: 366
            }, {
                name: '比特币',
                value: 360
            }, {
                name: 'Block Chain',
                value: 282
            }, {
                name: '数据挖掘',
                value: 273
            }, {
                name: 'Hadoop',
                value: 265
            }]
        }],
    };
    wordChart.setOption(wordOpt);
}