var city = new Vue({
	el:'#main',
	data:{
		message:"",
		titles:"",
		avgs:'',
		highs:'',
		lows:'',
		jobname1:[],
		nums1:[],
		jobname2:[],
		nums2:[],
		jobname3:[],
		nums3:[],
		jobname4:[],
		nums4:[],
		jobname5:[],
		nums5:[],
		jobname6:[],
		nums6:[],
		jobname7:[],
		nums7:[],
		jobname8:[],
		nums8:[],
		title:"全国大数据薪酬",
		avg:'',
		high:'',
		low:''
	},
	methods:{
		
		BJ:function(){
			 this.titles="北京"; 
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithBJ').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithBJ').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithBJ').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		SH:function(){
			this.titles="上海";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithSH').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithSH').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithSH').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		SZ:function(){
			this.titles="深圳";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithSZ').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithSZ').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithSZ').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		HZ:function(){
			this.titles="杭州";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithHZ').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithHZ').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithHZ').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		GZ:function(){
			this.titles="广州";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithGZ').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithGZ').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithGZ').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		CD:function(){
			this.titles="成都";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithCD').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithCD').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithCD').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		WH:function(){
			this.titles="武汉";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithWH').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithWH').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithWH').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		NJ:function(){
			this.titles="南京";
			var that = this;
			axios.get('http://114.55.104.213:8080//avgSalaryWithNJ').then(function(response){
				that.avgs = response.data.avgSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//highSalaryWithNJ').
			then(function(response){
				that.highs = response.data.highSalary
			},function(err){})
			axios.get('http://114.55.104.213:8080//lowSalaryWithNJ').
			then(function(response){
				that.lows = response.data.lowSalary
			},function(err){})
		},
		
		getAvgSalary:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//avgSalary').
					then(function(response){
						that.avg = response.data.avgSalary;
					},function(err){})
				},
		getHighSalary:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//highSalary').
					then(function(response){
						that.high = response.data.highSalary
					},function(err){})
				},
		getLowSalary:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//lowSalary').
					then(function(response){
						that.low = response.data.lowSalary
					},function(err){})
				},
		
		getjobtag_bj:function(){
					var that = this;
					axios.get('http://114.55.104.213:8080//queryBJ').then(function(response){
						/* console.log(response) */
						
						for(var i = 0;i<response.data.length;i++){
							that.jobname1.push(response.data[i].jobname);
							that.nums1.push(response.data[i].nums);
							var myChart = echarts.init(document.getElementById('jobtag'));
							var option = {
							title: {
								text: '北京岗位分布图',
								subtext: '数据来自近三个月',
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
							
							series: [
								{
									name: '岗位数量',
									type: 'pie',
									radius: '55%',
									center: ['50%', '60%'],
									data: [
										{value: that.nums1[0], name: that.jobname1[0]},
										{value: that.nums1[1], name: that.jobname1[1]},
										{value: that.nums1[2], name: that.jobname1[2]},
										{value: that.nums1[3], name: that.jobname1[3]},
										{value: that.nums1[4], name: that.jobname1[4]},
										{value: that.nums1[5], name: that.jobname1[5]},
										{value: that.nums1[6], name: that.jobname1[6]},
										{value: that.nums1[7], name: that.jobname1[7]},
										{value: that.nums1[8], name: that.jobname1[8]},
										{value: that.nums1[9], name: that.jobname1[9]},
										
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
						}
					},function(err){})
				},
		getjobtag_sh:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//querySH').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname2.push(response.data[i].jobname);
										that.nums2.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option1 = {
										title: {
											text: '上海岗位分布图',
											subtext: '数据来自近三个月',
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
										
										series: [
											{
												name: '岗位数量',
												type: 'pie',
												radius: '55%',
												center: ['50%', '60%'],
												data: [
													{value: that.nums2[0], name: that.jobname2[0]},
													{value: that.nums2[1], name: that.jobname2[1]},
													{value: that.nums2[2], name: that.jobname2[2]},
													{value: that.nums2[3], name: that.jobname2[3]},
													{value: that.nums2[4], name: that.jobname2[4]},
													{value: that.nums2[5], name: that.jobname2[5]},
													{value: that.nums2[6], name: that.jobname2[6]},
													{value: that.nums2[7], name: that.jobname2[7]},
													{value: that.nums2[8], name: that.jobname2[8]},
													{value: that.nums2[9], name: that.jobname2[9]},
													
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
								 myChart.setOption(option1);
									}
								},function(err){})
				},
		getjobtag_sz:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//querySZ').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										
										that.jobname3.push(response.data[i].jobname);
										that.nums3.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
										title: {
											text: '深圳岗位分布图',
											subtext: '数据来自近三个月',
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
										
										series: [
											{
												name: '岗位数量',
												type: 'pie',
												radius: '55%',
												center: ['50%', '60%'],
												data: [
													{value: that.nums3[0], name: that.jobname3[0]},
													{value: that.nums3[1], name: that.jobname3[1]},
													{value: that.nums3[2], name: that.jobname3[2]},
													{value: that.nums3[3], name: that.jobname3[3]},
													{value: that.nums3[4], name: that.jobname3[4]},
													{value: that.nums3[5], name: that.jobname3[5]},
													{value: that.nums3[6], name: that.jobname3[6]},
													{value: that.nums3[7], name: that.jobname3[7]},
													{value: that.nums3[8], name: that.jobname3[8]},
													{value: that.nums3[9], name: that.jobname3[9]},
													
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
									}
								},function(err){})
				},
		getjobtag_hz:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//queryHZ').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname4.push(response.data[i].jobname);
										that.nums4.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
										title: {
											text: '杭州岗位分布图',
											subtext: '数据来自近三个月',
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
										
										series: [
											{
												name: '岗位数量',
												type: 'pie',
												radius: '55%',
												center: ['50%', '60%'],
												data: [
													{value: that.nums4[0], name: that.jobname4[0]},
													{value: that.nums4[1], name: that.jobname4[1]},
													{value: that.nums4[2], name: that.jobname4[2]},
													{value: that.nums4[3], name: that.jobname4[3]},
													{value: that.nums4[4], name: that.jobname4[4]},
													{value: that.nums4[5], name: that.jobname4[5]},
													{value: that.nums4[6], name: that.jobname4[6]},
													{value: that.nums4[7], name: that.jobname4[7]},
													{value: that.nums4[8], name: that.jobname4[8]},
													{value: that.nums4[9], name: that.jobname4[9]},
													
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
									}
								},function(err){})
				},
		getjobtag_nj:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//queryNJ').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname5.push(response.data[i].jobname);
										that.nums5.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
										title: {
											text: '南京岗位分布图',
											 subtext: '数据来自近三个月', 
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
										
										series: [
											{
												name: '岗位数量',
												type: 'pie',
												radius: '55%',
												center: ['50%', '60%'],
												data: [
													{value: that.nums5[0], name: that.jobname5[0]},
													{value: that.nums5[1], name: that.jobname5[1]},
													{value: that.nums5[2], name: that.jobname5[2]},
													{value: that.nums5[3], name: that.jobname5[3]},
													{value: that.nums5[4], name: that.jobname5[4]},
													{value: that.nums5[5], name: that.jobname5[5]},
													{value: that.nums5[6], name: that.jobname5[6]},
													{value: that.nums5[7], name: that.jobname5[7]},
													{value: that.nums5[8], name: that.jobname5[8]},
													{value: that.nums5[9], name: that.jobname5[9]},
													
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
									}
								},function(err){})
				},
		getjobtag_gz:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//queryGZ').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname6.push(response.data[i].jobname);
										that.nums6.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
													title: {
														text: '广州岗位分布图',
														subtext: '数据来自近三个月',
														left: 'center'
													},
													tooltip: {
														trigger: 'item',
														formatter: '{a} <br/>{b} : {c} ({d}%)'
													},
													/* legend: {
														orient: 'vertical',
														left: 'left',
														data: that.jobname
													}, */
													series: [
														{
															name: '岗位数量',
															type: 'pie',
															radius: '55%',
															center: ['50%', '60%'],
															data: [
																{value: that.nums6[0], name: that.jobname6[0]},
																{value: that.nums6[1], name: that.jobname6[1]},
																{value: that.nums6[2], name: that.jobname6[2]},
																{value: that.nums6[3], name: that.jobname6[3]},
																{value: that.nums6[4], name: that.jobname6[4]},
																{value: that.nums6[5], name: that.jobname6[5]},
																{value: that.nums6[6], name: that.jobname6[6]},
																{value: that.nums6[7], name: that.jobname6[7]},
																{value: that.nums6[8], name: that.jobname6[8]},
																{value: that.nums6[9], name: that.jobname6[9]},
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
									}
								},function(err){})
				},
		getjobtag_cd:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//queryCD').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname7.push(response.data[i].jobname);
										that.nums7.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
													title: {
														text: '成都岗位分布图',
														subtext: '数据来自近三个月',
														left: 'center'
													},
													tooltip: {
														trigger: 'item',
														formatter: '{a} <br/>{b} : {c} ({d}%)'
													},
													/* legend: {
														orient: 'vertical',
														left: 'left',
														data: that.jobname
													}, */
													series: [
														{
															name: '岗位数量',
															type: 'pie',
															radius: '55%',
															center: ['50%', '60%'],
															data: [
																{value: that.nums7[0], name: that.jobname7[0]},
																{value: that.nums7[1], name: that.jobname7[1]},
																{value: that.nums7[2], name: that.jobname7[2]},
																{value: that.nums7[3], name: that.jobname7[3]},
																{value: that.nums7[4], name: that.jobname7[4]},
																{value: that.nums7[5], name: that.jobname7[5]},
																{value: that.nums7[6], name: that.jobname7[6]},
																{value: that.nums7[7], name: that.jobname7[7]},
																{value: that.nums7[8], name: that.jobname7[8]},
																{value: that.nums7[9], name: that.jobname7[9]},
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
									}
								},function(err){})
				},
		getjobtag_wh:function(){
					var that = this;
								axios.get('http://114.55.104.213:8080//queryWH').then(function(response){
									for(var i = 0;i<response.data.length;i++){
										that.jobname8.push(response.data[i].jobname);
										that.nums8.push(response.data[i].nums);
										var myChart = echarts.init(document.getElementById('jobtag'));
										var option = {
													title: {
														text: '武汉岗位分布图',
														subtext: '数据来自近三个月',
														left: 'center'
													},
													tooltip: {
														trigger: 'item',
														formatter: '{a} <br/>{b} : {c} ({d}%)'
													},
													/* legend: {
														orient: 'vertical',
														left: 'left',
														data: that.jobname
													}, */
													series: [
														{
															name: '岗位数量',
															type: 'pie',
															radius: '55%',
															center: ['50%', '60%'],
															data: [
																{value: that.nums8[0], name: that.jobname8[0]},
																{value: that.nums8[1], name: that.jobname8[1]},
																{value: that.nums8[2], name: that.jobname8[2]},
																{value: that.nums8[3], name: that.jobname8[3]},
																{value: that.nums8[4], name: that.jobname8[4]},
																{value: that.nums8[5], name: that.jobname8[5]},
																{value: that.nums8[6], name: that.jobname8[6]},
																{value: that.nums8[7], name: that.jobname8[7]},
																{value: that.nums8[8], name: that.jobname8[8]},
																{value: that.nums8[9], name: that.jobname8[9]},
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
									}
								},function(err){})
				},
		
		get:function(){
			var that = this;
			if (that.message =="北京") {
				this.BJ();
				this.getjobtag_bj()
			}else if(that.message =="上海"){
				this.SH();
				this.getjobtag_sh();
			}else if(that.message =="深圳"){
				this.SZ();
				this.getjobtag_sz();
			}else if(that.message =="杭州"){
				this.HZ();
				this.getjobtag_hz();
			}else if(that.message =="南京"){
				this.NJ();
				this.getjobtag_nj();
			}else if(that.message =="广州"){
				this.GZ();
				this.getjobtag_gz();
			}else if(that.message =="成都"){
				this.CD();
				this.getjobtag_cd();
			}else if(that.message =="武汉"){
				this.WH();
				this.getjobtag_wh();
			}
			else{
				alert("对不起，该地区因数据不足而无法分析！")
			}
			
			
		}
	},
	mounted() {
		this.BJ();
		this.getjobtag_bj();
		this.getAvgSalary();
		this.getHighSalary();
		this.getLowSalary();
	}
})