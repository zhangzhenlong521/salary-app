
// 判断字符串是否是中文
export let isChinese = function ( str ) {
	let pattern = new RegExp("[\u4E00-\u9FA5]+");
	if(pattern.test(str)){
		return true
	} else {
		return false
	}
}

