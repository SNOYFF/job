var exp = new Vue({
	el:'#exp',
	data:{
		year:[],
		nums:[]
	},
	methods:{
		exps:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryExp').then(function(response){
				/* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.year.push(response.data[i].year);
					that.nums.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('exp'));
				var option = {
				title: {
				   // text: '经验要求', //标题文本内容
					
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
				    data: that.year,
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
				    name: '要求年数',
				    type: 'bar',
				    data: that.nums,
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
		}
	},
	mounted() {
		this.exps();
	}
})