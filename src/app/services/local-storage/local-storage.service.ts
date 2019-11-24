/*
  Generated class for the LocalStorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
export class LocalStorageService {
  constructor() {
  }

  //存储
  set(key,value){
    localStorage.setItem(key,JSON.stringify(value)); //对象转换成字符串并存储,key存在时更新
  }

  //获取
  get(key){
    return JSON.parse(localStorage.getItem(key)); //字符串转换成对象并返回，key不存在，返回null
  }

  //移除
  remove(key){
    localStorage.removeItem(key);//移除key后，对应的值是null
  }

  //清除所有-----慎用！（执行的后果是会清除所有localStorage对象保存的数据）
  clear(){
    localStorage.clear();
  }

  //获取键值对的个数,可根据索引取出key和value
  getLength(){
    //console.log(localStorage.length);
    for(var i=0;i<localStorage.length;i++){

      var name = localStorage.key(i)​;
      //console.log(name);
      var value = localStorage.getItem(name);​
      //console.log(value);

 }
    return localStorage.length;
  }

  //存过期时间的方法
  setForExp(key, value) {
    var curTime = new Date().getTime();
    localStorage.setItem(key, JSON.stringify({ data: value, time: curTime }));
  }

  //指定过期时间的get方法;1000*60:过期时间为1分钟
  getWithExp(key, exp) {
    var data = localStorage.getItem(key);
    var dataObj = JSON.parse(data);
    if (new Date().getTime() - dataObj.time > exp) {
      //console.log('信息已过期');
    } else {
      var dataObjDatatoJson = JSON.parse(dataObj.data)
      return dataObjDatatoJson;
    }
  }
}