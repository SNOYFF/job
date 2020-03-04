var nature = new Vue({
	el:'#nature',
	data:{
		nature:[],
		nums:[]
	},
	methods:{
		natures:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//queryNature').then(function(response){
						/* console.log(response) */
						for(var i = 0;i<response.data.length;i++){
							that.nature.push(response.data[i].nature);
							that.nums.push(response.data[i].nums);
							var myChart = echarts.init(document.getElementById('nature'));
						var	option = {
							    title: {
							        text: '企业性质',
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
		this.natures();
	}
})