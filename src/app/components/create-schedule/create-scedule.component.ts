import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { ScheduleManager } from './../../utils/schedule-manager/schedule-manager';
import { TimeManager } from 'src/app/utils/TimeManager/time-manager';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-create-scedule',
  templateUrl: './create-scedule.component.html',
  styleUrls: ['./create-scedule.component.scss'],
})
export class CreateSceduleComponent implements OnInit {

  public timePicker : any;
  private nowDate = new Date();
  public schedule : any;

  constructor(public modalController : ModalController,public alertController : AlertController) {
    this.timePicker = {
      'max':TimeManager.timePickerRange.max,
      'min':TimeManager.timePickerRange.min,
      'now':this.nowDate.getFullYear()+'-'+(this.nowDate.getMonth()+1)+'-'+this.nowDate.getDate()+' '+this.nowDate.getHours()+':'+this.nowDate.getMinutes(),
      'format':'YYYY-MM-DD HH:mm'
    };
    this.schedule = {
      'title':'',
      'location':'',
      'start':this.timePicker.now,
      'end':this.timePicker.now,
      'note':''
      }
   }

  ngOnInit() {
  }

  dismissModal(){
    this.modalController.dismiss();
  }

  async onFormSubmit(ev : any){
    if(this.schedule.title == ""){
      const alert = await this.alertController.create({
        header: '呃～',
        message: '事件标题不可为空。',
        buttons: ['知道了']
      });
      await alert.present();
    }else{
      let sm = new ScheduleManager();
      let resl = sm.create(this.schedule);
      if(resl){
        console.log("成功");
        this.dismissModal();
        location.reload();
      }else{
        const alert = await this.alertController.create({
          header: '呃～',
          message: '时间格式错误。',
          buttons: ['知道了']
        });
        await alert.present();
      }
    }
  }

}
