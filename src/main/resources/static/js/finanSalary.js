var tag = new Vue({
	el:'#finansalary',
	data:{
		jobtag:[],
		avgsalary:[]
	},
	methods:{
		tags:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryJob_tag').then(function(response){
				/* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.jobtag.push(response.data[i].jobtag);
					that.nums.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('finansalary'));
				var option = {
				title: {
				    text: '岗位种类', //标题文本内容
					
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
				    data: that.jobtag,
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
				    data: that.nums,
					
				}]
															
				};
							 myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.tags();
	}
})