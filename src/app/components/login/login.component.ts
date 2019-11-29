import { ApiServiceService } from './../../services/api-service/api-service.service';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  public username = "";
  public password = "";
  public yzm : string;
  public yzmurl : string;
  public jsid : string;

  constructor(private modalController : ModalController, private apiService : ApiServiceService) { }

  ngOnInit() {
    try {
      this.apiService.getStart().then((data)=>{      
        this.jsid = data['jsid'];
        this.yzmurl = this.apiService.getYzmUrl(this.jsid);
        //console.log(data);
      });
    } catch (error) {
      alert("发生未知错误");
    }
  }

  dismissModal(data){
    this.modalController.dismiss(data);
  }

  refreshYzm(){
    this.ngOnInit()
  }

  onFormSubmit(){
    if( this.username != "" && this.password != "" && this.yzm != ""){
      //console.log("login");
      this.login();
    }else{
      alert("请填写用户名、密码及验证码")
    }
  }

  login(){
    try {
      this.apiService.login(this.username,this.password,this.yzm,this.jsid).then((data)=>{
        //console.log(data);
        if(data['status']== true){
          //console.log("登录成功");
          this.success(data['data'])
        }else{
          alert(data['data']);
        }
      })
    } catch (error) {
      alert("发生未知错误");
    }
  }

  success(data){
    this.jsid = data;
    //this.apiService.getSettings(this.username);
    this.apiService.getKb(this.jsid,2019,1).then((data)=>{
      //console.log(data);
      this.dismissModal({'kb':data});
    })
  }

}
