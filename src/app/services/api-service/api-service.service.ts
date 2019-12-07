import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  //private url_root = 'http://127.0.0.1:8000/jhrlapis/';
  private url_root = 'http://chng.fun:81/jhrlapis/';
  private url_getStart = this.url_root+"getStart";
  private url_login = this.url_root+"login";
  private url_getYzm = this.url_root+"getYzm";
  private url_getSettings = this.url_root+"getSettings";
  private url_getKb = this.url_root+"getKb";

  constructor(private http : HttpClient) { }

  getStart(){
    return this.http.get(this.url_getStart).toPromise().then((data)=>{
      return data;
    }).catch((err)=>{
      console.log("API SERVICE ERROR WITH GET_START");
    })
  }


  login(username,password,yzm,jsid){
    let h = new HttpHeaders();
    let form = new FormData();
    form.set('username',username);
    form.set('password',password);
    form.set('yzm',yzm);
    form.set('jsid',jsid);
    //h.set('cookies','JSESSIONID=' + jsid + '; SL_GWPT_Show_Hide_tmp=1; SL_wptGlobTipTmp=1');
    return this.http.post(this.url_login,form).toPromise().then((data)=>{
      return data;
    }).catch((err)=>{
      alert("登录异常");
    })
  }

  getYzmUrl(jsid){
    return this.url_getYzm+"?jsid="+jsid+"&t="+new Date().getTime();
  }

  getSettings(username){
    return this.http.get(this.url_getSettings+"?username="+username).toPromise().then((data)=>{
      return data;
    }).catch((err)=>{
      alert("获取设置失败");
    })
  }

  getKb(jsid,xn,xq){
    return this.http.get(this.url_getKb+"?xq="+xq+"&xn="+xn+"&jsid="+jsid).toPromise().then((data)=>{
      return data;
    }).catch((err)=>{
      alert("获取课表失败");
    })
  }

}
