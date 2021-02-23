
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/index/department","pages/index/department/departmentdetail","pages/index/myself","pages/index/myself/myselfdetail","pages/index/gridding","pages/index/gridding/search","pages/index/gridding/add","pages/index/gridding/gridnamedetail","pages/index/gridding/general","pages/index/gridding/loans","pages/index/gridding/member","pages/my/my","pages/my/message","pages/my/salary","pages/my/set","pages/ranking/ranking","pages/statistics/statistics","pages/login/login"],"window":{"navigationBarTitleText":"贵州赫章农商银行绩效管理系统","navigationBarTextStyle":"white","navigationBarBackgroundColor":"#4c75fe","enablePullDownRefresh":false},"tabBar":{"color":"#7A7E83","selectedColor":"#4c75fe","backgroundColor":"#ffffff","borderStyle":"white","list":[{"pagePath":"pages/index/index","iconPath":"static/imgs/index.png","selectedIconPath":"static/imgs/index_active.png","text":"首页"},{"pagePath":"pages/my/my","iconPath":"static/imgs/my.png","selectedIconPath":"static/imgs/my_active.png","text":"我的"}]},"debug":true,"nvueCompiler":"uni-app","nvueStyleCompiler":"weex","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"绩效管理","compilerVersion":"3.1.2","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","bounce":"none"}},{"path":"/pages/index/department","meta":{},"window":{"navigationBarTitleText":"部门指标查询","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/department/departmentdetail","meta":{},"window":{"navigationBarTitleText":"部门指标明细查询","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/myself","meta":{},"window":{"navigationBarTitleText":"个人定量指标","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/myself/myselfdetail","meta":{},"window":{"navigationBarTitleText":"个人定量指标明细","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/gridding","meta":{},"window":{"navigationBarTitleText":"网格明细查询","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","softinputNavBar":"none","titleNView":{"buttons":[{"fontSize":"22px","type":"none","text":"","color":"#000000","fontSrc":"/static/uni.ttf","float":"right","width":"50px"}]}}},{"path":"/pages/index/gridding/search","meta":{},"window":{"navigationBarTitleText":"搜索","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black"}},{"path":"/pages/index/gridding/add","meta":{},"window":{"navigationBarTitleText":"新增客户信息录入","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/gridding/gridnamedetail","meta":{},"window":{"navigationBarTitleText":"网格客户明细","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none","titleNView":{"buttons":[{"fontSize":"22px","type":"none","text":"","color":"#000000","fontSrc":"/static/uni.ttf","float":"right","width":"50px"}]}}},{"path":"/pages/index/gridding/general","meta":{},"window":{"navigationBarTitleText":"网格概况","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/gridding/loans","meta":{},"window":{"navigationBarTitleText":"贷款余额","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/index/gridding/member","meta":{},"window":{"navigationBarTitleText":"家庭成员","navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","bounce":"none"}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","bounce":"none"}},{"path":"/pages/my/message","meta":{},"window":{"navigationBarTitleText":"个人信息","bounce":"none"}},{"path":"/pages/my/salary","meta":{},"window":{"navigationBarTitleText":"工资查询","bounce":"none"}},{"path":"/pages/my/set","meta":{},"window":{"navigationBarTitleText":"设置","backgroundColor":"#F9F9F9","bounce":"none"}},{"path":"/pages/ranking/ranking","meta":{},"window":{"navigationBarTitleText":"排名","bounce":"none"}},{"path":"/pages/statistics/statistics","meta":{},"window":{"navigationBarTitleText":"统计","bounce":"none"}},{"path":"/pages/login/login","meta":{},"window":{"navigationBarTitleText":"登录","bounce":"none"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
