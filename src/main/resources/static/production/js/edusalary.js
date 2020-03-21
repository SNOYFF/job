var edusalary = new Vue({
	el:'#edusalary',
	data:{
		edu:[],
		avgsalary:[]
	},
	methods:{
		edusalarys:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryEduSalary').then(function(response){
				/* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.edu.push(response.data[i].edu);
					that.avgsalary.push(response.data[i].avgsalary);
				}
				 var myChart = echarts.init(document.getElementById('edusalary'));
				var option = {
				title: {
				    //text: '学历-薪酬', //标题文本内容
					subtext: '单位：K/月'
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
				    data: that.edu,
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
				    name: '薪酬单位:/K',
				    type: 'bar',
				    data: that.avgsalary,
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
							fontSize: "13"
					                            },
				}]
															
				};
							 myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.edusalarys();
	}
})