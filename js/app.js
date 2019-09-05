$(function () {
    setTechAwardCharts(seriesData.techAward)
    setHighTechCompanyCharts(seriesData.highTechCompany)
    setWordCharts()
    setCostCharts(seriesData.cost)
    setTechCompanyCharts(seriesData.techCompany)
    setInstitutionCharts(seriesData.institution)
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
            startAngle: 360,
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
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#09b0d3", "#1d27c9", "#f9e264", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​"],

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
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            radius: '80%',
            startAngle: -180,
            center: ['40%', '50%'],
            data: seriesData.sort(function (a, b) {
                return b.value - a.value;
            }),
            label: {
                fontSize: 14
            },
            labelLine: {
                smooth: 0.2,
                length: 10,
                length2: 10
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
            top: 5,
            right: 0,
            width: '100%',
            height: '100%',
            gridSize: 10, //值越大，word间的距离越大，单位像素
            sizeRange: [20, 32], //word的字体大小区间，单位像素
            rotationRange: [0, 0], //word的可旋转角度区间
            textStyle: {
                normal: {
                    color: function () {
                        return 'rgb(' + [
                            100 + Math.round(Math.random() * 155),
                            100 + Math.round(Math.random() * 155),
                            100 + Math.round(Math.random() * 155)
                        ].join(',') + ')';
                    }
                },
                emphasis: {
                    shadowBlur: 1,
                    color: '#eee'
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

function setCostCharts(data) {
    const costChart = echarts.init(document.getElementById("costChart"), "myTheme");
    const costChartsOption = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#09b0d3", "#1d27c9", "#f9e264", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        grid: {
            top: 60,
            bottom: 25
        },
        legend: {
            textStyle: {
                color: "#fff"
            },
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
                    color: "#fff"
                }
            },
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
                        color: "#fff"
                    }
                },
            },
            {
                type: 'value',
                name: '经费(万美元)',
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
            }
        ],
        series: [{
                name: '专利质押项目数',
                type: 'bar',
                data: data["专利质押项目数"]
            },
            {
                name: '科学研究与技术开发计划项目数',
                type: 'bar',
                data: data["专利质押项目数"]
            },
            {
                name: '科技型中小企业技术创新项目数',
                type: 'bar',
                data: data["科技型中小企业技术创新项目数"]
            },
            {
                name: '专利质押项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["专利质押项目经费"]
            },
            {
                name: '科学研究与技术开发计划项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["科学研究与技术开发计划项目经费"]
            },
            {
                name: '科技型中小企业技术创新项目经费',
                type: 'line',
                yAxisIndex: 1,
                data: data["科技型中小企业技术创新项目经费"]
            }
        ]
    }
    costChart.setOption(costChartsOption);

}

function setTechCompanyCharts(seriesData) {
    const myChart = echarts.init(document.getElementById("techCompany"), "myTheme")
    option = {
        color: ["#05f8d6", "#0082fc", "#fdd845", "#22ed7c", "#09b0d3", "#1d27c9", "#f9e264", "#f47a75", "#009db2", "#024b51", "#0780cf", "#765005​​​​​​​"],

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
                color: "#fff"
            }
        },
        series: [{
            type: 'pie',
            radius: '80%',
            startAngle: -180,
            center: ['30%', '50%'],
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

}

function setInstitutionCharts(data) {
    const institutionCharts = echarts.init(document.getElementById("institution"));
    const institutionOpt = {
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
                    fontSize: 18,
                },
                position: ['10%', '40%'],
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

}