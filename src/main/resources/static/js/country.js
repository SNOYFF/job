/* in city */

/* var country  = new Vue({
	el:'#country',
	data:{
		title:'全国大数据招聘薪酬',
		avg:'',
		high:'',
		low:''
	},
	methods:{
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
	},
	mounted() {
		this.getAvgSalary();
		this.getHighSalary();
		this.getLowSalary();
	}
})



 */