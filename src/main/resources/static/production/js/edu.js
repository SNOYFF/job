var edu = new Vue({
	el:'#edu',
	data:{
		edu:[],
		nums:[]
	},
	methods:{
		edus:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryEdu').then(function(response){
				/* console.log(response); */
				for(var i = 0;i<response.data.length;i++){
					that.edu.push(response.data[i].edu);
					that.nums.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('edu'));
				var option = {
												title: {
													//text: '学历要求',
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
															{value: that.nums[0], name: that.edu[0]},
															{value: that.nums[1], name: that.edu[1]},
															{value: that.nums[2], name: that.edu[2]},
															{value: that.nums[3], name: that.edu[3]},
															{value: that.nums[4], name: that.edu[4]},
															
														],
														emphasis: {
															itemStyle: {
																shadowBlur: 10,
																shadowOffsetX: 0,
																shadowColor: 'rgba(0, 0, 0, 0.5)'
															}
														}
													}
												]
				};
							 myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.edus();
	}
})