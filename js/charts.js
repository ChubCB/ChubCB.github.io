var myChart = echarts.init(document.getElementById('testmain'));
var myChart2 = echarts.init(document.getElementById('testmain2'));

var option = {
    xAxis: {
        type: 'category',
        data: ['1', '2', '3', '4', '5', '6', '7']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        itemStyle: {
            normal: {
                color: 'rgb(255, 70, 131)'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgb(255, 158, 68)'
                }, {
                    offset: 1,
                    color: 'rgb(255, 70, 131)'
                }])
            }
        },
        type: 'line'
    }]
};


myChart.setOption(option);
myChart2.setOption(option);
