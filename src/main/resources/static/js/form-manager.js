var formmanager = new Vue({
	el:"#form-manager",
	data:{
		username:'',
		password:''
	},
	methods:{
		submit:function(){
			var u = this.username;
			var p = this.password;
			if (!this.username) {
			            alert('请输入账号!')
			            return false
			        }
			if (!this.password) {
				alert('请输入密码!')
				return false
			}
			if (u='admin') {
				if(p = 'admin'){
					return true
				}
				return true
			}
		},
	}
})