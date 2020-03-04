var industry = new Vue({
	el:'#industry',
	data:{
		industry:[],
		nums:[]
	},
	methods:{
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
							        text: '大数据涉及行业分布图',
							        subtext: '南丁格尔玫瑰图',
							        left: 'center'
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
	},
	mounted() {
		this.industrys();
	}
})