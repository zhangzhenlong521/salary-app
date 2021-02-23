<script>
	import Vue from 'vue'

	export default {
		onLaunch: function() {
			
			let token = uni.getStorageInfoSync('token')
			
			if (!token) {
				un.reLaunch({
					url: 'pages/login/login'
				})
			} 
			
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	
	@import "common/style/common.css";
	
	page {
		background-color: #f9f9f9;
	}
	
</style>
