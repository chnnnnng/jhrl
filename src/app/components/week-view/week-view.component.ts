import { ScheduleManager } from './../../utils/schedule-manager/schedule-manager';
import { Component, OnInit, Input } from '@angular/core';
import { TimeManager } from 'src/app/utils/TimeManager/time-manager';
import { CalendarManager } from 'src/app/utils/calender-manager/calendar-manager';
import { PopoverController } from '@ionic/angular';
import { DetailPopoverComponent } from '../detail-popover/detail-popover.component';


@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.scss'],
})
export class WeekViewComponent implements OnInit {
  
  @Input() calendarData : any;
  public week = [];
  public nowweeknumber : number;
  public weeknumber : number;
  public maxWeek : number;
  public dayTimeList = TimeManager.dayTimeListSimple;
  public schoolStartDate : string;
  public schedule = [];
  private cm : CalendarManager;
  private sm : ScheduleManager;
  private dayTranslation = {0:'周日',1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六'}

  constructor(public popoverController: PopoverController) {
    this.setWeek(0);
  }

   /**
    * deltaWeek是指距离本周相差的周数.
    * **/
  private setWeek(deltaWeek : number){
    var d = new Date();
    var todayDay = d.getDay();
    console.log("todayDay:"+todayDay);
    var todayDate = d.getDate();
    d.setDate( todayDate - (todayDay==0?7:todayDay) + 1 + deltaWeek*7);//当前星期（位移后）的第一天(星期一)的日期
    for(var i=0;i<7;i++){
      this.week[i] = {'date':d.getDate(),'day':this.dayTranslation[d.getDay()],'today':(d.getDate() == todayDate && d.getDay() == todayDay ? 1 : 0),'stamp':d.toString()}
      d.setDate(d.getDate() + 1);
    }
    console.log(this.week);
  }

  refreshWeek(){
      this.schedule = this.cm.getCourseListByWeek(this.weeknumber);
      for(let i in this.schedule){
        let user_schedule = this.sm.fetch(this.weeknumber, Number(i)+1);
        if(user_schedule != null) this.schedule[i] = this.schedule[i].concat(user_schedule);
      }
      console.log(this.schedule);
  }

  goToPrevWeek(){
      if(this.weeknumber>1){
        this.weeknumber--;
        this.setWeek(this.weeknumber - this.nowweeknumber);
        this.refreshWeek();
      }
  }

  goToNextWeek(){
    if(this.weeknumber<this.maxWeek){
      this.weeknumber++;
      this.setWeek(this.weeknumber - this.nowweeknumber);
      this.refreshWeek();
    }
  }

  async presentPopover(course: any) {
    const popover = await this.popoverController.create({
      component: DetailPopoverComponent,
      componentProps:course
    });
    return await popover.present();
  }

  ngOnInit() {
    this.cm = new CalendarManager(this.calendarData);
    this.sm = new ScheduleManager();
    this.schoolStartDate = this.calendarData.schoolStartTime;
    this.maxWeek = this.calendarData.maxWeek;
    var nowDate = new Date();
    var startDayDate = TimeManager.generateStartDayDateByString(this.schoolStartDate);
    this.weeknumber = TimeManager.getWeeknumber(nowDate,startDayDate);
    this.nowweeknumber = this.weeknumber;
    this.refreshWeek();
  }

}
