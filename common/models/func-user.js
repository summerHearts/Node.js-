module.exports = function(Funcuser) {

  Funcuser.userDetailInfo = function(callback){
    callback(null,'我是佐毅，一位iOS开发者');
  };

  Funcuser.remoteMethod(
    'userDetailInfo',
    {
      'accepts':[],//接受数据
      'returns':[ //返回数据样式
        {'arg':'result','type':'string'}
      ],
      'http':{//定义接口请求类型  和 请求的API路径
        'verb':'post',
        'path':'/user-DetailInfo'
      }
    }
  );
};
