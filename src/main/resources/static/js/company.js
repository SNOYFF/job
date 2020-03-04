var company = new Vue({
	el:'#company',
	
	data:{
		companyfinance:[],
		numa:[],
		people:[],
		numb:[]
	},
	methods:{
		companyfinan:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryCompanyFinance').then(function(response){
				 /* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.companyfinance.push(response.data[i].company_financing);
					that.numa.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('companyfinance'));
				var option = {
				title: {
				    text: '融资情况', //标题文本内容
					
				},
						toolbox: { //可视化的工具箱
							show: true,
							feature: {
								dataView: { //数据视图
									show: true
								},
								restore: { //重置
									show: true
								},
								dataZoom: { //数据缩放视图
									show: true
								},
								saveAsImage: {//保存图片
									show: true
								},
								magicType: {//动态类型切换
									type: ['bar', 'line']
								}
							}
						},
						
						tooltip: { //弹窗组件
							show: true
						},
				xAxis: [{
				    data: that.companyfinance,
					type : 'category',
					axisLabel:{
				    interval:0,
					rotate:45,
					margin:2,
				    textStyle:{
					      color:"#222"
					        }},
				}],
				yAxis: {},
				series: [{
				    name: '数量',
				    type: 'bar',
				    data: that.numa,
					itemStyle: {
					            normal: {
					　　　　　　　　//这里是重点
					                color: function(params) {
					                	//注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
					                    var colorList = ['#d87c7c','#919e8b', '#d7ab82',  '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b',
														 '#d87c7c','#919e8b', '#d7ab82',  '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b',
														 '#d87c7c','#919e8b', '#d7ab82',  '#6e7074','#61a0a8','#efa18d', '#787464', '#cc7e63', '#724e58', '#4b565b'
														 ];
					                    return colorList[params.dataIndex]
					                }
					            }
					        },
					 label: {
							show: "true",
							position: "top",
							color: "#FFF",
							fontWeight: "bolder",
							backgroundColor: "auto",
							fontSize: "11"
					                            },
				}]
															
				};
					 myChart.setOption(option);
			},function(err){})
			
		},
		companypeol:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryCompanyPeople').then(function(response){
				for(var i = 0;i<response.data.length;i++){
					that.people.push(response.data[i].people);
					that.numb.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('companypeople'));
				var option = {
												title: {
													text: '公司规模',
													/* subtext: '纯属虚构', */
													left: 'center'
												},
												  toolbox: { //可视化的工具箱
												                 show: true,
												                 feature: {
												                     dataView: { //数据视图
												                         show: true
												                     },
												                     saveAsImage: {//保存图片
												                         show: true
												                     },
												                    
												                 }
												             },
												             tooltip: { //弹窗组件
												                 show: true
												             },
												legend: {
												        orient: 'vertical',
												        left: 1,
												        data: that.people
												    },
												
												series: [
													{
														name: '岗位数量',
														type: 'pie',
														radius: '55%',
														center: ['50%', '60%'],
														data: [
															{value: that.numb[0], name: that.people[0]},
															{value: that.numb[1], name: that.people[1]},
															{value: that.numb[2], name: that.people[2]},
															{value: that.numb[3], name: that.people[3]},
															{value: that.numb[4], name: that.people[4]},
															
														],
														
														emphasis: {
															itemStyle: {
																shadowBlur: 10,
																shadowOffsetX: 0,
																shadowColor: 'rgba(0, 0, 0, 0.5)'
															}
														},
														top:'90',
														
													},
													
												]
				};
							 myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.companyfinan();
		this.companypeol();
	}
})