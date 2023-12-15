const geoGpsMap = {
    '1': [127.9688, 45.368],
    '2': [116.4551, 40.2539],
    '3': [109.1162, 34.2004],
    '4': [113.12244, 23.009505],
    '5': [87.9236, 43.5883],
    '6': [91.11, 29.97],
};
const geoCoordMap = {
    'taiwan': [121.5135, 25.0308],
    'Heilongjiang': [127.9688, 45.368],
    'Inner Mongolia': [110.3467, 41.4899],
    'Jilin': [125.8154, 44.2584],
    'Beijing': [116.4551, 40.2539],
    'Liaoning': [123.1238, 42.1216],
    'Hebei': [114.4995, 38.1006],
    'Tianjin': [117.4219, 39.4189],
    'Shanxi': [112.3352, 37.9413],
    'Shaanxi': [109.1162, 34.2004],
    'Gansu': [103.5901, 36.3043],
    'Ningxia': [106.3586, 38.1775],
    'Qinghai': [101.4038, 36.8207],
    'Xinjiang': [87.9236, 43.5883],
    'Tibet': [91.11, 29.97],
    'Sichuan': [103.9526, 30.7617],
    'Chongqing': [108.384366, 30.439702],
    'Shandong': [117.1582, 36.8701],
    'Henan': [113.4668, 34.6234],
    'Jiangsu': [118.8062, 31.9208],
    'Anhui': [117.29, 32.0581],
    'Hubei': [114.3896, 30.6628],
    'Zhejiang': [119.5313, 29.8773],
    'Fujian': [119.4543, 25.9222],
    'Jiangxi': [116.0046, 28.6633],
    'Hunan': [113.0823, 28.2568],
    'Guizhou': [106.6992, 26.7682],
    'Yunnan': [102.9199, 25.4663],
    'Guangdong': [113.12244, 23.009505],
    'Guangxi': [108.479, 23.1152],
    'Hainan': [110.3893, 19.8516],
    'Shanghai': [121.4648, 31.2891],
};

const colors = [
    ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
    ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3", "#9D96F5", "#8378EA", "#8378EA"],
    ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
];
const colorIndex = 0;

const convertData = function(data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
        }
    }
    return res;
};

const convertToLineData = function(data, gps) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var dataItem = data[i];
        var fromCoord = geoCoordMap[dataItem.name];
        var toCoord = gps; //郑州
        //  var toCoord = geoGps[Math.random()*3]; 
        if (fromCoord && toCoord) {
            res.push([{
                coord: fromCoord,
                value: dataItem.value
            }, {
                coord: toCoord,
            }]);
        }
    }
    return res;
};



export const chinaMapConfig = (configData : any) => {
    const { data, max, min } = configData;
    let year = ["2018", "2019", "2020", "2021", "2022", "2023"];
    let mapData : any = [
        [],
        [],
        [],
        [],
        [],
        []
    ];

    let categoryData = [];
    let barData = [];
    for (var key in geoCoordMap) {
        categoryData.push(key);
        mapData[0].push({
            "year": '2018',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[1].push({
            "year": '2019',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[2].push({
            "year": '2020',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[3].push({
            "year": '2021',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[4].push({
            "year": '2022',
            "name": key,
            "value": randomNum(100, 300)
        });
        mapData[5].push({
            "year": '2023',
            "name": key,
            "value": randomNum(100, 300)
        });

    }
    for (var i = 0; i < mapData.length; i++) {
        barData.push([]);
        for (var j = 0; j < mapData[i].length; j++) {
            barData[i].push(mapData[i][j].value)
        }
    }
    let initialOption : any = {
        title: {
          show: false,
          text: "数据地图",
          left: "right",
          textStyle: {
            color: "#000"
          }
        },
        options: [],
        timeline: {
          show: false,
          data: year,
          axisType: 'category',
          autoPlay: true,
          playInterval: 3000,
          left: '10%',
          right: '10%',
          bottom: '3%',
          width: '80%',
          //  height: null,
          label: {
              normal: {
                  textStyle: {
                      color: '#ddd'
                  }
              },
              emphasis: {
                  textStyle: {
                      color: '#fff'
                  }
              }
          },
          symbolSize: 10,
          lineStyle: {
              color: '#555'
          },
          checkpointStyle: {
              borderColor: '#777',
              borderWidth: 2
          },
          controlStyle: {
              showNextBtn: true,
              showPrevBtn: true,
              normal: {
                  color: '#666',
                  borderColor: '#666'
              },
              emphasis: {
                  color: '#aaa',
                  borderColor: '#aaa'
              }
          },
  
        },
        baseOption: {
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            grid: {
                right: '1%',
                top: '15%',
                bottom: '10%',
                width: '20%'
            },
            tooltip: {
                trigger: 'axis', // hover触发器
                axisPointer: { // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                    shadowStyle: {
                        color: 'rgba(150,150,150,0.1)' //hover颜色
                    }
                }
            },
            geo: {
                show: true,
                map: 'china',
                roam: true,
                zoom: 1.8,
                center: [120.83531246, 38.0267395887],
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        borderColor: 'rgba(147, 235, 248, 1)',
                        borderWidth: 1,
                        areaColor: {
                            type: 'radial',
                            x: 0.5,
                            y: 0.5,
                            r: 0.8,
                            colorStops: [{
                                offset: 0,
                                color: 'rgba(147, 235, 248, 0)' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: 'rgba(147, 235, 248, .2)' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                    },
                    emphasis: {
                        areaColor: '#389BB7',
                        borderWidth: 0
                    }
                }
            },
        },

    }

    for (var n = 0; n < year.length; n++) {
        initialOption.options.push({
            // backgroundColor: '#051b4a',
            title: [{
                
                    text: year[n] + " CryptoCurrency inflow outflow by china state",
                    left: 'left',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                },
                {
                    show: false,
                    id: 'statistic',
                    text: year[n] + "Outflow Statistics",
                    left: '80%',
                    top: '8%',
                    textStyle: {
                        color: '#fff',
                        fontSize: 12
                    }
                }
            ],
            xAxis: {
                type: 'value',
                scale: true,
                position: 'top',
                min: 0,
                boundaryGap: false,
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
                    margin: 4,
                    textStyle: {
                        color: '#aaa'
                    }
                },
            },
            yAxis: {
                type: 'category',
                //  name: 'TOP 20',
                nameGap: 20,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisTick: {
                    show: false,
                    lineStyle: {
                        color: '#ddd'
                    }
                },
                axisLabel: {
                    interval: 0,
                    textStyle: {
                        color: '#ddd',
                        lineHeight: 14,
                    }
                },
                data: categoryData
            },
            series: [
                //未知作用
                {
                    //文字和标志
                    name: 'light',
                    type: 'scatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData[n]),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colors[colorIndex][n]
                        }
                    }
                },
                //地图？
                {
                    type: 'map',
                    map: 'china',
                    geoIndex: 0,
                    aspectScale: 0.75, //长宽比
                    showLegendSymbol: false, // 存在legend时显示
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false,
                            textStyle: {
                                color: '#fff'
                            }
                        }
                    },
                    roam: true,
                    itemStyle: {
                        normal: {
                            areaColor: '#031525',
                            borderColor: '#FFFFFF',
                        },
                        emphasis: {
                            areaColor: '#2B91B7'
                        }
                    },
                    animation: false,
                    data: mapData
                },
                //地图点的动画效果
                {
                    //  name: 'Top 5',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: convertData(mapData[n].sort(function(a, b) {
                        return b.value - a.value;
                    }).slice(0, 20)),
                    symbolSize: function(val) {
                        return val[2] / 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: '{b}',
                            position: 'right',
                            show: true
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: colors[colorIndex][n],
                            shadowBlur: 10,
                            shadowColor: colors[colorIndex][n]
                        }
                    },
                    zlevel: 1
                },
                //地图线的动画效果
                {
                    type: 'lines',
                    zlevel: 2,
                    effect: {
                        show: true,
                        period: 4, //箭头指向速度，值越小速度越快
                        trailLength: 0.02, //特效尾迹长度[0,1]值越大，尾迹越长重
                        symbol: 'arrow', //箭头图标
                        symbolSize: 3, //图标大小
                    },
                    lineStyle: {
                        normal: {
                            color: colors[colorIndex][n],
                            width: 0.1, //尾迹线条宽度
                            opacity: 0.5, //尾迹线条透明度
                            curveness: .3 //尾迹线条曲直度
                        }
                    },
                    data: convertToLineData(mapData[n], geoGpsMap[Math.ceil(Math.random() * 6)])
                },
                //柱状图
                    {
                        zlevel: 1.5,
                        type: 'bar',
                        symbol: 'none',
                        itemStyle: {
                            normal: {
                                color: colors[colorIndex][n]
                            }
                        },
                        data: barData[n]
                    }
            ]
        })
    }
    return initialOption;
  };
  
export const resData = {
    max: 218,
    data: [
      {
        name: "北京",
        value: 218
      },
      {
        value: 122,
        name: "广东"
      },
      {
        value: 119,
        name: "台湾"
      },
      {
        value: 81,
        name: "香港"
      },
      {
        value: 74,
        name: "山东"
      },
      {
        value: 68,
        name: "江苏"
      },
      {
        value: 62,
        name: "浙江"
      },
      {
        value: 49,
        name: "上海"
      },
      {
        value: 48,
        name: "河北"
      },
      {
        value: 43,
        name: "河南"
      },
      {
        value: 41,
        name: "辽宁"
      },
      {
        value: 38,
        name: "NULL"
      },
      {
        value: 36,
        name: "四川"
      },
      {
        value: 33,
        name: "湖北"
      },
      {
        value: 31,
        name: "湖南"
      },
      {
        value: 29,
        name: "安徽"
      },
      {
        value: 28,
        name: "吉林"
      },
      {
        value: 26,
        name: "江西"
      },
      {
        value: 24,
        name: "新疆"
      },
      {
        value: 24,
        name: "重庆"
      },
      {
        value: 23,
        name: "福建"
      },
      {
        value: 19,
        name: "广西"
      },
      {
        value: 18,
        name: "山西"
      },
      {
        value: 16,
        name: "云南"
      },
      {
        value: 16,
        name: "内蒙古"
      },
      {
        value: 16,
        name: "黑龙江"
      },
      {
        value: 12,
        name: "陕西"
      },
      {
        value: 12,
        name: "天津"
      },
      {
        value: 11,
        name: "宁夏"
      },
      {
        value: 10,
        name: "甘肃"
      },
      {
        value: 8,
        name: "贵州"
      },
      {
        value: 4,
        name: "西藏"
      },
      {
        value: 4,
        name: "青海"
      },
      {
        value: 1,
        name: "海南"
      }
    ]
  };
  

  function randomNum(minNum : any, maxNum : any) {
    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1, 10);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
            break;
        default:
            return 0;
            break;
    }
}