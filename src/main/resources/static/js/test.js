var test = new Vue({
	el:'#table',
	data:{
		arr:{
			company_industry:[],
			company_name:[],
			company_nature:[],
			company_people:[],
			job_edu_require:[],
			job_exp_require:[],
			job_name:[],
			job_salary:[],
			job_tag:[],
			job_welfare:[],
		}
	},
	methods:{
		get:function(){
			var that = this;
			axios.get('http://114.55.104.213:8080/queryJob').then(function(response){
				/* console.log(response.data.data.list); */
				that.arr = response.data.data.list;
			},function(err){})
		}
	},
	mounted() {
		this.get();
	}
})