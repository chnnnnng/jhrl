import { CreateSceduleComponent } from './../../components/create-schedule/create-scedule.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RawdataServiceService } from 'src/app/services/rawdata-service/rawdata-service.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
})
export class CalendarPage implements OnInit {

  public switchView : string = "daily";//设定默认视图(daily/weekly/monthly)
  public calendarData : any;
  public coursesData : any;
  private modal : any;

  constructor(public modalController: ModalController) { 
    this.coursesData = new RawdataServiceService().getRawCourseData()
    this.coursesData['schoolStartTime'] = "2019-9-16";
    this.coursesData['maxWeek'] = "16";
    this.calendarData = this.coursesData;
  }

  ngOnInit() {
    
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev.detail.value);
  }

  async createSchedule(){
    this.modal = await this.modalController.create({
      component: CreateSceduleComponent
    });
    return await this.modal.present();
  }

}
