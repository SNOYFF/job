var box = new Vue({
	el:'#box',
	data:{
		salary:[],
	},
	methods:{
		boxs:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryCompanySalary').then(function(response){
				/* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.salary.push(response.data[i].salary);
				}
				 var myChart = echarts.init(document.getElementById('box'));
				 var ss = that.salary;
				var data = echarts.dataTool.prepareBoxplotData([
					[37,60,30,21,24,22,45,30,22,22,21,30,12,20,40,21,12,45,37,30,21]
				]);
				
				var option = {
				    title: [
				        {
							subtext: '单位：K/月'
				           // text: '工资-箱型图',
				           // left: 'left',
				        },
				       /* {
				            text: 'upper: Q3 + 1.5 * IQR \nlower: Q1 - 1.5 * IQR',
				            borderColor: '#999',
				            borderWidth: 1,
				            textStyle: {
				                fontSize: 14
				            },
				            left: '10%',
				            top: '90%'
				        } */
				    ],
				    tooltip: {
				        trigger: 'item',
				        axisPointer: {
				            type: 'shadow'
				        }
				    },
				    grid: {
				        left: '10%',
				        right: '10%',
				        bottom: '15%'
				    },
				    xAxis: {
				        type: 'category',
				        data: data.axisData,
				        boundaryGap: true,
				        nameGap: 30,
				        splitArea: {
				            show: false
				        },
				        axisLabel: {
				            formatter: 'expr {value}'
				        },
				        splitLine: {
				            show: false
				        }
				    },
				    yAxis: {
				        type: 'value',
				        name: '',
				        splitArea: {
				            show: true
				        }
				    },
				    series: [
				        {
				            name: 'boxplot',
				            type: 'boxplot',
				            data: data.boxData,
				            /* tooltip: {
				                formatter: function (param) {
				                    return [
				                        'Experiment ' + param.name + ': ',
				                        'upper: ' + param.data[5],
				                        'Q3: ' + param.data[4],
				                        'median: ' + param.data[3],
				                        'Q1: ' + param.data[2],
				                        'lower: ' + param.data[1]
				                    ].join('<br/>');
				                }
				            } */
				        },
				        {
				            name: 'outlier',
				            type: 'scatter',
				            data: data.outliers
				        }
				    ]
				};
				myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.boxs();
	}
})