var company = new Vue({
	el:'#company',
	
	data:{
		companyfinance:[],
		numa:[],
		people:[],
		numb:[],
		industry:[],
		nums:[],
		nature:[],
		numf:[]
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
				    //text: '融资情况', //标题文本内容
					
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
													//text: '公司规模',
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
		},
		industrys:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//queryIndustry').then(function(response){
						/* console.log(response) */
						for(var i = 0;i<response.data.length;i++){
							that.industry.push(response.data[i].industry);
							that.nums.push(response.data[i].nums);
							var myChart = echarts.init(document.getElementById('industry'));
						var	option = {
							    title: {
							        //text: '大数据涉及行业分布图',
							        //subtext: '南丁格尔玫瑰图',
							        //left: 'center'
							    },
								top:'',
							    tooltip: {
							        trigger: 'item',
							        formatter: '{a} <br/>{b} : {c} ({d}%)'
							    },
							   
							    toolbox: {
							        show: true,
							        feature: {
							            mark: {show: true},
							            dataView: {show: true, readOnly: false},
							            magicType: {
							                show: true,
							                type: ['pie', 'funnel']
							            },
							            restore: {show: true},
							            saveAsImage: {show: true}
							        }
							    },
							    series: [
							        {
							            name: '面积模式',
							            type: 'pie',
							            radius: [30, 110],
							            // center: ['75%', '50%'],
							            roseType: 'area',
							            data: [
							                {value: that.nums[0], name: that.industry[0]},
											{value: that.nums[1], name: that.industry[1]},
											{value: that.nums[2], name: that.industry[2]},
											{value: that.nums[3], name: that.industry[3]},
											{value: that.nums[4], name: that.industry[4]},
											{value: that.nums[5], name: that.industry[5]},
											{value: that.nums[6], name: that.industry[6]},
											{value: that.nums[7], name: that.industry[7]},
											{value: that.nums[8], name: that.industry[8]},
											{value: that.nums[9], name: that.industry[9]},
											{value: that.nums[10], name: that.industry[10]},
											{value: that.nums[11], name: that.industry[11]},
											{value: that.nums[12], name: that.industry[12]},
											{value: that.nums[13], name: that.industry[13]},
											{value: that.nums[14], name: that.industry[14]},
											{value: that.nums[15], name: that.industry[15]},
											{value: that.nums[16], name: that.industry[16]},
											{value: that.nums[17], name: that.industry[17]},
											{value: that.nums[18], name: that.industry[18]},
											{value: that.nums[19], name: that.industry[19]},
											
							            ]
							        }
							    ]
							};
							
					 myChart.setOption(option);
						}
					},function(err){})
						},
		
		natures:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//queryNature').then(function(response){
						/* console.log(response) */
						for(var i = 0;i<response.data.length;i++){
							that.nature.push(response.data[i].nature);
							that.numf.push(response.data[i].numf);
							var myChart = echarts.init(document.getElementById('nature'));
						var	option = {
							    title: {
							        //text: '企业性质',
							        //subtext: '南丁格尔玫瑰图',
							        //left: 'center'
							    },
								top:'',
							    tooltip: {
							        trigger: 'item',
							        formatter: '{a} <br/>{b} : {c} ({d}%)'
							    },
							   
							    toolbox: {
							        show: true,
							        feature: {
							            mark: {show: true},
							            dataView: {show: true, readOnly: false},
							            magicType: {
							                show: true,
							                type: ['pie', 'funnel']
							            },
							            restore: {show: true},
							            saveAsImage: {show: true}
							        }
							    },
							    series: [
							        {
							            name: '面积模式',
							            type: 'pie',
							            radius: [30, 110],
							            // center: ['75%', '50%'],
							            roseType: 'area',
							            data: [
							                {value: that.nums[0], name: that.nature[0]},
											{value: that.nums[1], name: that.nature[1]},
											{value: that.nums[2], name: that.nature[2]},
											{value: that.nums[3], name: that.nature[3]},
											{value: that.nums[4], name: that.nature[4]},
											{value: that.nums[5], name: that.nature[5]},
											{value: that.nums[6], name: that.nature[6]},
											{value: that.nums[7], name: that.nature[7]},
											{value: that.nums[8], name: that.nature[8]},
											{value: that.nums[9], name: that.nature[9]},
											
							            ]
							        }
							    ]
							};
		
					 myChart.setOption(option);
						}
					},function(err){})
				},
			
	},
	mounted() {
		this.companyfinan();
		this.companypeol();
		this.industrys();
		this.natures();
	}
})