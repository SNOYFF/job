var citysalary = new Vue({
	el:'#citysalary',
	data:{
		id:[],
		city:[],
		nums:[]
	},
	methods:{
		pic:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080//queryCitySalary').then(function(response){
				
				for(var i = 0;i<response.data.length;i++){
					that.city.push(response.data[i].city);
					that.nums.push(response.data[i].nums);
				}
				 var myChart = echarts.init(document.getElementById('citysalary'));
				var option = {
				     title: {
				         //text: '平均薪酬',
				         //subtext: '数据来自网络'
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
				         data: ['单位:K/薪酬']
				     },
				     grid: {
				         left: '3%',
				         right: '4%',
				         bottom: '3%',
				         containLabel: true
				     },
				     xAxis: {
				         type: 'value',
				         boundaryGap: [0, 0.01]
				     },
				     yAxis: {
				         type: 'category',
				         data: that.city
				     },
				     series: [
				         {
				             name: '单位:K/薪酬',
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
							 		position: "right",
							 		color: "#FFF",
							 		fontWeight: "bolder",
							 		backgroundColor: "auto",
							 		fontSize: "11"
							                             },
				         },
				         
				     ]
				 };
					 myChart.setOption(option);
			},function(err){})
		}
	},
	mounted() {
		this.pic();
	}
})