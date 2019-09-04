$(function () {
    $.ajax({
        url: "http://home1.aichain.net.cn:10100/nanning/dashboard/mainPage"
    }).done((result) => {
        const pageData = result.data
        setTechAwardCharts(pageData.tech_award)
    })

    function setTechAwardCharts(textAwardData) {
        const nameDic = {
            "国家科技奖": "国奖",
            "广西科技奖": "省奖",
            "南宁市科技奖": "市奖",
            "技术发明奖": "发明奖",
            "自然科学奖": "自然奖",
            "科技进步奖": "进步奖",
            "重大贡献奖": "特等",
            "特别贡献奖": "特等",
            "1": "一等",
            "2": "二等",
            "3": "三等",
            "特等": "特等",
        }
        const colorDic = {
            "国家科技奖": "#da0d68",
            "广西科技奖": "#470604",
            "南宁市科技奖": "#e65832",
            "技术发明奖": "#d45a59",
            "自然科学奖": "#310d0f",
            "科技进步奖": "#ae341f",
            "重大贡献奖": "#d78823",
            "特别贡献奖": "#da5c1f",
            "1": "#f89a80",
            "2": "#f37674",
            "3": "#e75b68",
            "特等": "#d0545f",
        }
        const myChart = echarts.init(document.getElementById("techAward"))
        const dataList = textAwardData.list
        let seriesData = []
        for (let i = 0; i < dataList.length; i++) {
            let level1 = seriesData.findIndex(item => item.name == nameDic[dataList[i].prize_level])
            if (level1 == -1) {
                seriesData.push({
                    name: nameDic[dataList[i].prize_level],
                    itemStyle: {
                        color: colorDic[dataList[i].prize_level]
                    },
                    children: []
                })
                level1 = seriesData.length - 1
            }
            let level2 = seriesData[level1].children.findIndex(item => item.name == nameDic[dataList[i].prize_name])
            if (level2 == -1) {
                seriesData[level1].children.push({
                    name: nameDic[dataList[i].prize_name],
                    itemStyle: {
                        color: colorDic[dataList[i].prize_name]
                    },
                    children: []
                })
                level2 = seriesData[level1].children.length - 1
            }
            let level3 = seriesData[level1].children[level2].children.findIndex(item => item.name == nameDic[dataList[i].prize])
            if (level3 == -1) {
                seriesData[level1].children[level2].children.push({
                    name: nameDic[dataList[i].prize],
                    itemStyle: {
                        color: colorDic[dataList[i].prize]
                    },
                    value: 0
                })
                level3 = seriesData[level1].children[level2].children.length - 1
            }
            seriesData[level1].children[level2].children[level3].value += dataList[i].count
        }
        console.log(JSON.stringify(seriesData))
        const techAwardOption = {
            title: {
                text: "上市公司行业分类",
                subtext: "纯属虚构",
                textStyle: {
                    color: "#fff"
                },
                subtextStyle: {
                    fontSize: 12
                },
                left: 15,
                top: 15
            },
            tooltip: {
                show: true
            },
            series: {
                type: "sunburst",
                radius: [0, "75%"],
                center: ["50%", "52%"],
                data: seriesData,
                sort: null,
                levels: [{}, {
                    r0: "15%",
                    r: "25%",
                    itemStyle: {
                        borderWidth: 0.8
                    },
                    label: {
                        align: "right",
                        fontSize: 18,
                        color: '#fff',
                        textBorderWidth: 0
                    }
                }, {
                    r0: "25%",
                    r: "55%",
                    itemStyle: {
                        borderWidth: 0.8
                    },
                    label: {
                        position: 'right',
                        fontSize: 18,
                        color: '#fff',
                        textBorderWidth: 0
                    }
                }, {
                    r0: "55%",
                    r: "75%",
                    itemStyle: {
                        borderWidth: 0.8
                    },
                    label: {
                        position: 'outside',
                        padding: 3,
                        fontSize: 18,
                        color: 'auto',
                        textBorderWidth: 0
                    }
                }, ]
            }
        };
        myChart.setOption(techAwardOption)
    }
})