import { ModalController } from '@ionic/angular';
import { SettingManager } from './../../utils/setting-manager/setting-manager';
import { Settings } from './../../utils/setting-manager/settings';
import { Component, OnInit } from '@angular/core';
import { LoginComponent } from 'src/app/components/login/login.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  public isAutoSettingEnabled = true;//是否开放自动设置模式，现阶段为不开放(20191129已开放)
  //public isAutoSetting : boolean;
  public setting : Settings;
  public backupData : string;
  private backupDataTemp : string;
  private sm = new SettingManager();
  private iseditRawCourseData = false;
  private iseditSchoolStartDate = false;
  private iseditSchoolTotalWeeks = false;
  private isRecover = false;

  constructor(private modalController : ModalController) { }

  ngOnInit() {
    this.setting = this.sm.setting;
    this.backupData = this.sm.getBackup();
  }

  autoSettingChange(){
    this.save();
  }

  editRawCourseData(){
    this.iseditRawCourseData = true;
  }
  doneRawCourseData(){
    this.iseditRawCourseData = false;
    this.save();
  }

  editSchoolStartDate(){
    this.iseditSchoolStartDate = true;
  }
  doneSchoolStartDate(){
    this.iseditSchoolStartDate = false;
    this.save();
  }

  editSchoolTotalWeeks(){
    this.iseditSchoolTotalWeeks = true;
  }
  doneSchoolTotalWeeks(){
    this.iseditSchoolTotalWeeks = false;
    this.save();
  }

  dafaultViewChange(ev){
    this.setting.defaultView = ev.detail.value;
    this.save();
  }

  recover(){
    this.isRecover = true;
    this.backupDataTemp = this.backupData;
  }
  doRecover(){
    try {
      this.isRecover = false;
      let b = JSON.parse(this.backupData);
      this.sm.recoverBackup(b);
      location.reload()
    } catch (e) {
      alert("恢复备份失败");
      location.reload();
    }
  }
  cancelRecover(){
    this.isRecover = false;
    this.backupData = this.backupDataTemp;
  }

  private save(){
    this.sm.setSetting(this.setting);
    this.sm.save();
    this.backupData = this.sm.getBackup();
  }

  aboutMe(){
    window.location.href = "http://chng.fun/jhrl-about/"
  }

  async autoFetchKb(){
    let modal = await this.modalController.create({
      component: LoginComponent,
    });
    modal.onDidDismiss()
    .then((data) => {
      if(data != null){
        this.setting.rawCourseData = JSON.stringify(data.data['kb']);
        this.save();
      }
    });
    return await modal.present();
  }

}
