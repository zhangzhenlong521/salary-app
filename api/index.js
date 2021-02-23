


// 判断网络环境
// uni.getNetworkType({
// 	success(networkType) {
// 		console.log(networkType)
// 	}
// })

// #ifdef H5
	let BASE_URL = '/sal/'
// #endif 

// #ifdef APP-PLUS
	let BASE_URL = 'http://10.18.126.95:9080/sal/'
	// let BASE_URL = 'http://192.168.3.34:9080/sal/'
// #endif

let token = uni.getStorageSync('token') ? uni.getStorageSync('token') : ''

export const request = function (option) {
	
	uni.showLoading({
		title: '加载中...',
		mask: true
	});
	
	return new Promise ((resolve,reject)=>{
		uni.request({
			url: BASE_URL + option.url,
			method: option.method || 'GET',
			data: option.data || {},
			header: {
			 'token' : token
			 // 'Authorization' : 'Bearer ' + token
			},
			sslVerify: false,  // 验证 ssl 证书
			
			success: (res)=> {
				console.log(res)
				// 成功回调 逻辑处理
				if (res.statusCode  === 500 ) {
					return uni.showToast({
						title: '服务器错误',
						icon:'none'
					})
				} else if (res.data.code === 200){
					resolve(res.data)
				}
			},
			
			fail: (err)=> {
				// 失败回调 逻辑处理
				uni.showToast({
					title: err.errMsg,
					icon: 'none'
				})
				reject(err)
			},
			
			complete() {
				uni.hideLoading()
			}
		})
		
	})
}