import { EventEmitterService } from './../../services/event-emitter/event-emitter.service';
import { SettingManager } from './../../utils/setting-manager/setting-manager';
import { CreateSceduleComponent } from './../../components/create-schedule/create-scedule.component';
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public switchView : string;;//设定默认视图(daily/weekly/monthly)
  public calendarData : any;
  public coursesData : any;
  private modal : any;
  private sm = new SettingManager();

  constructor(public modalController: ModalController, public eventEmitterService : EventEmitterService, public platform : Platform) { 
  }

  ngOnInit() {
    try {
      this.coursesData = this.sm.getRawCourseData();
      this.coursesData['schoolStartTime'] = this.sm.getSchoolStartDate();
      this.coursesData['maxWeek'] = this.sm.getSchoolTotalWeeks();
      this.calendarData = this.coursesData;
      this.switchView = this.sm.getDefaultView();

      this.platform.resume.subscribe(async () => {
        //alert("calendar resume, ask refresh");
        this.eventEmitterService.emitter.emit("askChildRefreshNowPointer");//从后台切回，通知日历刷新。
      });

    } catch (error) {
      alert("数据错误，请检查设置。");
      window.location.href = "/settings";
    }
  }

  async createSchedule(){
    this.modal = await this.modalController.create({
      component: CreateSceduleComponent,
    });
    this.modal.onDidDismiss()
    .then((data) => {
      this.eventEmitterService.emitter.emit("askChildRefresh");//模态框关闭，通知刷新。
    });
    return await this.modal.present();
  }

}
