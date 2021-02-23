export const login = function(formdata) {
	let data = {}
	return new Promise((resolve, reject) => {
		if (formdata.code != 'admin' || formdata.pwd != '123456') {
			data = {
				code: '200',
				msg: '账号密码错误'
			}
			reject(data)
		} else {
			resolve({
				"pageSize": 0,
				"currentPage": 0,
				"totalNum": 0,
				"code": 200,
				"msg": "登录成功",
				"data": {
					"id": 13893,
					"deptid": "1",
					"deptcode": "282",
					"deptname": "赫章农商银行",
					"postid": 5941,
					"postcode": "超级管理员",
					"postname": "超级管理员",
					"userid": 1,
					"usercode": "admin",
					"username": "admin",
					"userstaff": null,
					"seq": null,
					"userseq": null,
					"refpostid": null,
					"isdefault": "Y",
					"linkcode": "0001"
				},
				"reToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhZG1pbiJ9.B5-_5swwsqRIwSuXqe4JFxMaYMCzP6tHZzurQGqgfh8"
			})
		}
	})
}

export const myMessage = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": {
		"id": 8572,
		"code": "117392",
		"name": "李曼",
		"sex": "女",
		"birthday": "1991-09-17",
		"tellerno": "117392",
		"cardid": "522401199109173523",
		"position": null,
		"stationdate": "2020-03-28",
		"stationratio": "1.6",
		"age": "30",
		"degree": "本科",
		"university": "贵州工程应用技术学院 ",
		"specialities": "经济学",
		"posttitle": "助理会计师",
		"posttitleapplydate": "2019.07.30",
		"politicalstatus": null,
		"contractdate": "无",
		"joinworkdate": "2015.09",
		"joinselfbankdate": "2015.09",
		"workage": "6",
		"selfbankage": "6",
		"onlychildrenbthday": null,
		"selfbankaccount": null,
		"otheraccount": null,
		"familyaccount": null,
		"pension": null,
		"housingfund": null,
		"planway": null,
		"planratio": null,
		"isuncheck": null,
		"familyname": null,
		"medicare": null,
		"temporary": null,
		"otherglod": null,
		"technology": null,
		"stationkind": "客户经理",
		"maindeptid": "1169",
		"deptid": 1169,
		"deptname": "九0支行",
		"mainstationid": 5782,
		"mainstation": "综合柜员",
		"postseq": null,
		"deptseq": 1169,
		"linkcode": null,
		"deptcode": "2830002"
	},
	"reToken": null
}


export const salary = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"id": 568258,
			"salarybillid": 3361,
			"userid": 8572,
			"factorname": "所属部门",
			"factorid": 363,
			"factorvalue": "九0支行",
			"seq": "2",
			"viewname": "所属部门",
			"computedesc": "所属部门 = [机构.机构名称] = 九0支行\r\n"
		},
		{
			"id": 568259,
			"salarybillid": 3361,
			"userid": 8572,
			"factorname": "主要岗位",
			"factorid": 391,
			"factorvalue": "综合柜员",
			"seq": "3",
			"viewname": "主要岗位",
			"computedesc": "      主要岗位 = [指标考核人员.主岗位] = 综合柜员\r\n"
		},
		{
			"id": 568260,
			"salarybillid": 3361,
			"userid": 8572,
			"factorname": "考核人姓名",
			"factorid": 1701,
			"factorvalue": "李曼",
			"seq": "1",
			"viewname": "考核人姓名",
			"computedesc": "考核人姓名 = [指标考核人员.姓名] = 李曼\r\n"
		},
		{
			"id": 568261,
			"salarybillid": 3361,
			"userid": 8572,
			"factorname": "黔农云有效新增绩效",
			"factorid": 15838,
			"factorvalue": "0.0",
			"seq": "8",
			"viewname": "黔农云有效新增绩效",
			"computedesc": "      在计算[黔农云个人户数]时,求出的结果为空值。执行公式原[匹配(\"匹配入参\",[指标考核人员.登录名],\n\"匹配源\",[黔农云个人户数Map],\n\"匹配字段\",\"code\",\n\"返回字段\",\"num\")\n\n]+转换后公式[匹配(\"匹配入参\",_var25265,\n\"匹配源\",_var25266,\n\"匹配字段\",\"code\",\n\"返回字段\",\"num\")\n\n].系统默认返回0.请核实   黔农云个人户数 = 0\r\n黔农云客户端有效新增考核单价 = 20.0\r\n黔农云有效新增绩效 = [黔农云个人户数]*[黔农云客户端有效新增考核单价] = 0.0\r\n"
		}
	],
	"reToken": null

}

export const myself = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"TARGETID": 3864,
			"TARGETNAME": "建档指标考核"
		},
		{
			"TARGETID": 3855,
			"TARGETNAME": "黔农e贷签约户数新增"
		},
		{
			"TARGETID": 3802,
			"TARGETNAME": "有效存款户数新增"
		},
		{
			"TARGETID": 3827,
			"TARGETNAME": "各项贷款日均余额较年初新增"
		},
		{
			"TARGETID": 3082,
			"TARGETNAME": "前台业务量绩效"
		},
		{
			"TARGETID": 3806,
			"TARGETNAME": "有效存款户数日均余额新增"
		},
		{
			"TARGETID": 3823,
			"TARGETNAME": "各项贷款户数较年初新增"
		},
		{
			"TARGETID": 3810,
			"TARGETNAME": "贷款管户数"
		}
	],
	"reToken": null
}


export const myselfdetail = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"targetname": "贷款管户数",
			"checkedusername": "李丹",
			"money": "0.0",
			"个人贷款管户数（户）": "0",
			"贷款管户数单价（元）": "0.8",
			"deptname": "九0支行",
			"datadate": "2021-01-22"
		},
		{
			"targetname": "贷款管户数",
			"checkedusername": "王婷",
			"money": "0.0",
			"个人贷款管户数（户）": "0",
			"贷款管户数单价（元）": "0.8",
			"deptname": "九0支行",
			"datadate": "2021-01-22"
		},
		{
			"targetname": "贷款管户数",
			"checkedusername": "向伟",
			"money": "839.2",
			"个人贷款管户数（户）": "1049",
			"贷款管户数单价（元）": "0.8",
			"deptname": "九0支行",
			"datadate": "2021-01-22"
		},
		{
			"targetname": "贷款管户数",
			"checkedusername": "李曼",
			"money": "0.0",
			"个人贷款管户数（户）": "0",
			"贷款管户数单价（元）": "0.8",
			"deptname": "九0支行",
			"datadate": "2021-01-22"
		},
		{
			"targetname": "贷款管户数",
			"checkedusername": "周杰",
			"money": "827.2",
			"个人贷款管户数（户）": "1034",
			"贷款管户数单价（元）": "0.8",
			"deptname": "九0支行",
			"datadate": "2021-01-22"
		}
	],
	"reToken": null
}


export const departmentlist = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"TARGETID": "3373",
			"TARGETNAME": "黔农e贷线上占比得分"
		},
		{
			"TARGETID": "3611",
			"TARGETNAME": "各项存款日均余额较年初新增T+1"
		},
		{
			"TARGETID": "3619",
			"TARGETNAME": "各项贷款户数较年初新增T+1"
		},
		{
			"TARGETID": "3623",
			"TARGETNAME": "小微企业贷款户数新增T+1"
		},
		{
			"TARGETID": "3617",
			"TARGETNAME": "各项贷款日均余额较年初新增T+1"
		},
		{
			"TARGETID": "3614",
			"TARGETNAME": "各项存款有效户数较年初新增T+1"
		}
	],
	"reToken": null
}

export const departmentdetail = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "九0支行",
			"value": "10.8",
			"年初贷款日均余额(万元)": "14477.05",
			"当月贷款日均余额T+1(万元)": "14854.55",
			"deptname": "九0支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "农中支行",
			"value": "8.28",
			"年初贷款日均余额(万元)": "11352.77",
			"当月贷款日均余额T+1(万元)": "11694.63",
			"deptname": "农中支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "城关支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "15864.72",
			"当月贷款日均余额T+1(万元)": "16979.52",
			"deptname": "城关支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "解东支行",
			"value": "8.82",
			"年初贷款日均余额(万元)": "10757.84",
			"当月贷款日均余额T+1(万元)": "11050.49",
			"deptname": "解东支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "西城支行",
			"value": "15.3",
			"年初贷款日均余额(万元)": "9643.04",
			"当月贷款日均余额T+1(万元)": "10359.56",
			"deptname": "西城支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "白果支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "25683.87",
			"当月贷款日均余额T+1(万元)": "26711.31",
			"deptname": "白果支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "财神支行",
			"value": "12.78",
			"年初贷款日均余额(万元)": "18162.24",
			"当月贷款日均余额T+1(万元)": "19008.5",
			"deptname": "财神支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "达依支行",
			"value": "11.7",
			"年初贷款日均余额(万元)": "12809.29",
			"当月贷款日均余额T+1(万元)": "13195.35",
			"deptname": "达依支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "水塘堡支行",
			"value": "14.4",
			"年初贷款日均余额(万元)": "7288.4",
			"当月贷款日均余额T+1(万元)": "7623.72",
			"deptname": "水塘堡支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "田坝支行",
			"value": "15.48",
			"年初贷款日均余额(万元)": "5917.04",
			"当月贷款日均余额T+1(万元)": "6187.28",
			"deptname": "田坝支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "兴发支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "19160.63",
			"当月贷款日均余额T+1(万元)": "19851.28",
			"deptname": "兴发支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "松林坡支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "16892.63",
			"当月贷款日均余额T+1(万元)": "17768.52",
			"deptname": "松林坡支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "雉街支行",
			"value": "13.68",
			"年初贷款日均余额(万元)": "11103.57",
			"当月贷款日均余额T+1(万元)": "11369.64",
			"deptname": "雉街支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "妈姑支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "11006.42",
			"当月贷款日均余额T+1(万元)": "11585.09",
			"deptname": "妈姑支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "砂石支行",
			"value": "9.54",
			"年初贷款日均余额(万元)": "7300.2",
			"当月贷款日均余额T+1(万元)": "7476.67",
			"deptname": "砂石支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "罗州支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "17285.71",
			"当月贷款日均余额T+1(万元)": "17968.67",
			"deptname": "罗州支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "珠市支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "14968.79",
			"当月贷款日均余额T+1(万元)": "15438.8",
			"deptname": "珠市支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "双坪支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "19270.18",
			"当月贷款日均余额T+1(万元)": "20205.4",
			"deptname": "双坪支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "可乐支行",
			"value": "8.28",
			"年初贷款日均余额(万元)": "19715.28",
			"当月贷款日均余额T+1(万元)": "20250.98",
			"deptname": "可乐支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "铁匠支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "13862.71",
			"当月贷款日均余额T+1(万元)": "14590.17",
			"deptname": "铁匠支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "辅处支行",
			"value": "14.94",
			"年初贷款日均余额(万元)": "8470.81",
			"当月贷款日均余额T+1(万元)": "8964.03",
			"deptname": "辅处支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "河镇支行",
			"value": "17.46",
			"年初贷款日均余额(万元)": "19282.84",
			"当月贷款日均余额T+1(万元)": "20264.58",
			"deptname": "河镇支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "德卓支行",
			"value": "13.14",
			"年初贷款日均余额(万元)": "12263.03",
			"当月贷款日均余额T+1(万元)": "12974.68",
			"deptname": "德卓支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "安乐溪支行",
			"value": "15.12",
			"年初贷款日均余额(万元)": "9099.75",
			"当月贷款日均余额T+1(万元)": "9426.67",
			"deptname": "安乐溪支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "朱明支行",
			"value": "14.94",
			"年初贷款日均余额(万元)": "14381.07",
			"当月贷款日均余额T+1(万元)": "14939.38",
			"deptname": "朱明支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "结构支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "8884.79",
			"当月贷款日均余额T+1(万元)": "9603.8",
			"deptname": "结构支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "六曲河支行",
			"value": "9.0",
			"年初贷款日均余额(万元)": "15949.4",
			"当月贷款日均余额T+1(万元)": "16547.44",
			"deptname": "六曲河支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "古基支行",
			"value": "7.2",
			"年初贷款日均余额(万元)": "10653.69",
			"当月贷款日均余额T+1(万元)": "10986.52",
			"deptname": "古基支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "哲庄支行",
			"value": "15.84",
			"年初贷款日均余额(万元)": "21589.34",
			"当月贷款日均余额T+1(万元)": "22323.14",
			"deptname": "哲庄支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "野马川支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "35150.3",
			"当月贷款日均余额T+1(万元)": "36829.38",
			"deptname": "野马川支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "平山支行",
			"value": "12.42",
			"年初贷款日均余额(万元)": "22371.24",
			"当月贷款日均余额T+1(万元)": "22934.16",
			"deptname": "平山支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "古达支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "17793.28",
			"当月贷款日均余额T+1(万元)": "18420.13",
			"deptname": "古达支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "威奢支行",
			"value": "18.0",
			"年初贷款日均余额(万元)": "9905.57",
			"当月贷款日均余额T+1(万元)": "10325.52",
			"deptname": "威奢支行",
			"datadate": "2021-01-23"
		},
		{
			"targetname": "各项贷款日均余额较年初新增T+1",
			"checkeddeptname": "信贷部",
			"value": "39.0",
			"年初贷款日均余额(万元)": "33199.53",
			"当月贷款日均余额T+1(万元)": "35158.77",
			"deptname": "信贷部",
			"datadate": "2021-01-23"
		}
	],
	"reToken": null
}

export const gridlist = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"id": 9918,
			"year": "2020",
			"month": "10",
			"creattime": "2020-11-13 09:24:44",
			"a": "九0支行",
			"b": "周杰",
			"c": "城关镇",
			"d": "黄泥村",
			"e": "城关镇黄泥村",
			"f": "2830002",
			"g": "133270",
			"parentid": "2",
			"name": "城关镇黄泥村",
			"qk": "网格概况"
		},
		{
			"id": 9919,
			"year": "2020",
			"month": "10",
			"creattime": "2020-11-13 09:24:44",
			"a": "九0支行",
			"b": "周杰",
			"c": "城关镇",
			"d": "硐上村",
			"e": "城关镇硐上村",
			"f": "2830002",
			"g": "133270",
			"parentid": "2",
			"name": "城关镇硐上村",
			"qk": "网格概况"
		},
		{
			"id": 9920,
			"year": "2020",
			"month": "10",
			"creattime": "2020-11-13 09:24:44",
			"a": "九0支行",
			"b": "周杰",
			"c": "个体工商户网格",
			"d": "个体工商户网格",
			"e": "九0支行个体工商户网格",
			"f": "2830002",
			"g": "133270",
			"parentid": "2",
			"name": "九0支行个体工商户网格",
			"qk": "网格概况"
		}
	],
	"reToken": null
}

export const gridnamedeta = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
		"a": "管庆粉",
		"b": "农业家庭户口",
		"c": "妻",
		"d": "女",
		"e": "汉族",
		"f": "32252",
		"g": "522427198804196224",
		"h": "贵州省赫章县德卓乡柏杨村哈寨组",
		"i": "已婚",
		"j": "德卓乡",
		"k": "柏杨村",
		"deptcode": "2830030",
		"hz": "贺才云",
		"hh": "400455222",
		"code": "28330503",
		"oactInstNo": null,
		"name": "522427198804196224",
		"ckye": 0,
		"dkye": null,
		"jdxx": "否",
		"qny": "否",
		"num": "家庭成员",
		"dgck": null
	}],
	"reToken": null
}

export const loans = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
		"XD_COL5": "2021-11-20 00:00:00",
		"XD_COL6": 40000,
		"XD_COL7": 40000,
		"XD_COL16": "522428195510132420",
		"XD_COL85": "30503",
		"XD_COL86": "否",
		"XD_COL1": "305032020003769",
		"XD_COL2": "朱德会",
		"XD_COL22": "正常",
		"XD_COL4": "2020-11-21 00:00:00"
	}],
	"reToken": null
}

export const member = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"a": "刘朝军",
			"b": "农业家庭户口",
			"c": "祖父",
			"d": "男",
			"e": "汉族",
			"f": "11459",
			"g": "522428193105162416",
			"h": "贵州省赫章县德卓乡柏杨村哈沟组",
			"i": "已婚",
			"j": "德卓乡",
			"k": "柏杨村",
			"deptcode": "2830030",
			"hz": "刘银招",
			"hh": "102004244",
			"code": "28330503",
			"oactInstNo": null,
			"name": "522428193105162416",
			"ckye": 377.38,
			"dkye": null,
			"jdxx": "否",
			"qny": "否",
			"num": "家庭成员",
			"dgck": null
		},
		{
			"a": "朱德会",
			"b": "农业家庭户口",
			"c": "母亲",
			"d": "女",
			"e": "汉族",
			"f": "20375",
			"g": "522428195510132420",
			"h": "贵州省赫章县德卓乡柏杨村哈沟组",
			"i": "已婚",
			"j": "德卓乡",
			"k": "柏杨村",
			"deptcode": "2830030",
			"hz": "刘银招",
			"hh": "102004244",
			"code": "28330503",
			"oactInstNo": null,
			"name": "522428195510132420",
			"ckye": 86.61,
			"dkye": 40000,
			"jdxx": "否",
			"qny": "否",
			"num": "家庭成员",
			"dgck": null
		},
		{
			"a": "刘银招",
			"b": "农业家庭户口",
			"c": "户主",
			"d": "男",
			"e": "汉族",
			"f": "29316",
			"g": "52242819800405243X",
			"h": "贵州省赫章县德卓乡柏杨村哈沟组",
			"i": "已婚",
			"j": "德卓乡",
			"k": "柏杨村",
			"deptcode": "2830030",
			"hz": "刘银招",
			"hh": "102004244",
			"code": "28330503",
			"oactInstNo": null,
			"name": "52242819800405243X",
			"ckye": 208.97,
			"dkye": null,
			"jdxx": "否",
			"qny": "否",
			"num": "家庭成员",
			"dgck": null
		},
		{
			"a": "刘耀",
			"b": null,
			"c": null,
			"d": null,
			"e": null,
			"f": null,
			"g": "522428200510059837",
			"h": "贵州省赫章县德卓乡柏杨村哈沟组",
			"i": null,
			"j": "德卓乡",
			"k": "柏杨村",
			"deptcode": "2830030",
			"hz": "刘银招",
			"hh": "102004244",
			"code": "28330503",
			"oactInstNo": null,
			"name": null,
			"ckye": null,
			"dkye": null,
			"jdxx": "否",
			"qny": "否",
			"num": "家庭成员",
			"dgck": null
		},
		{
			"a": "刘蕊",
			"b": null,
			"c": null,
			"d": null,
			"e": null,
			"f": null,
			"g": "52242820141116242X",
			"h": "贵州省赫章县德卓乡柏杨村哈沟组",
			"i": null,
			"j": "德卓乡",
			"k": "柏杨村",
			"deptcode": "2830030",
			"hz": "刘银招",
			"hh": "102004244",
			"code": "28330503",
			"oactInstNo": null,
			"name": null,
			"ckye": null,
			"dkye": null,
			"jdxx": "否",
			"qny": "否",
			"num": "家庭成员",
			"dgck": null
		}
	],
	"reToken": null
}


export const generalEchartData = {
	"pageSize": 0,
	"currentPage": 0,
	"totalNum": 0,
	"code": 200,
	"msg": "成功",
	"data": [{
			"counths": "德卓乡柏杨村网格内总户数为：2153户"
		},
		{
			"type": "已有存款客户:1535户",
			"dkftype": "待开发存款客户:618户"
		},
		{
			"type": "已有贷款客户:113户",
			"dkftype": "待开发贷款客户:2040户"
		},
		{
			"type": "已有建档客户:1户",
			"dkftype": "待开发建档客户:2152户"
		},
		{
			"type": "已有建档客户:184户",
			"dkftype": "待开发建档客户:1969户"
		}
	],
	"reToken": null
}
