import { EventEmitterService } from './../../services/event-emitter/event-emitter.service';
import { ScheduleManager } from './../../utils/schedule-manager/schedule-manager';
import { TimeManager } from './../../utils/TimeManager/time-manager';
import { CalendarManager } from './../../utils/calender-manager/calendar-manager';
import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DetailPopoverComponent } from '../detail-popover/detail-popover.component';

@Component({
  selector: 'app-day-view',
  templateUrl: './day-view.component.html',
  styleUrls: ['./day-view.component.scss'],
})
export class DayViewComponent implements OnInit {

  @Input() calendarData : any;
  public week = [];
  public dayTimeList = TimeManager.dayTimeList;
  public slideOptions : any;
  public schoolStartDate : string;
  public schedule = [];
  public nowStyle : any;
  private cm : CalendarManager;
  private sm : ScheduleManager;
  private dayTranslation = {0:'周日',1:'周一',2:'周二',3:'周三',4:'周四',5:'周五',6:'周六'}
  private cur_selete_date : string;
  private lastRefreshNowPointerTime = 0;

  constructor(public popoverController: PopoverController, public eventEmitterService : EventEmitterService) { 
    this.slideOptions = {
      'slidesPerView': '7'
    };
    var d = new Date();
    //d.setDate(d.getDate() + 3);
    var todayDay = d.getDay();
    var todayDate = d.getDate();
    
    d.setDate( todayDate - todayDay);
    for(var i=0;i<28;i++){
      this.week[i] = {'date':d.getDate(),'day':this.dayTranslation[d.getDay()],'today':(d.getDate() == todayDate && d.getDay() == todayDay ? 1 : 0),'stamp':d.toString(),'selected':0}
      d.setDate(d.getDate() + 1);
    }
  }

  onDayClick(date) {
    this.cur_selete_date = date;
    var clickedDate = new Date(date);
    var startDayDate = new Date();
    startDayDate.setFullYear(<number><unknown>this.schoolStartDate.split('-')[0],<number><unknown>this.schoolStartDate.split('-')[1]-1,<number><unknown>this.schoolStartDate.split('-')[2]);
    //console.log("第一节课日期:"+startDayDate.toUTCString());
    var deltaDay = Math.round((clickedDate.getTime()-startDayDate.getTime())/(1000*60*60*24));
    //console.log("相差"+deltaDay+"天第"+(Math.floor(deltaDay/7)-1+2)+"周星期"+clickedDate.getDay());
    this.schedule = this.cm.getCourseListByWeekAndDay((Math.ceil(deltaDay/7)),clickedDate.getDay());
    let user_schedule = this.sm.fetch((Math.floor(deltaDay/7))+1, clickedDate.getDay());
    if(user_schedule != null) this.schedule = this.schedule.concat(user_schedule);
    //console.log(this.sm.fetch((Math.floor(deltaDay/7))+1, clickedDate.getDay()));
    //console.log(this.schedule);
    //console.log(deltaDay); 
    //console.log((Math.ceil(deltaDay/7)),clickedDate.getDay());
    //console.log(this.sm.fetch(11,1));
    for(var i=0;i<28;i++){
      this.week[i].selected = 0;
      if(this.week[i]['day']== this.dayTranslation[clickedDate.getDay()]&& this.week[i]['date']==clickedDate.getDate()){
        this.week[i]['selected'] = 1;
      }
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
      this.cur_selete_date = new Date().toString()
      this.onDayClick(this.cur_selete_date);
      this.refreshNowPointer();
      this.eventEmitterService.emitter.addListener("askChildRefresh",(v)=>{
        //console.log("refreshing");
        //alert("refreshing");
        this.refresh();
      });
      this.eventEmitterService.emitter.addListener("askChildClosePopup",(v)=>{
        //console.log("close popup");
        this.popoverController.dismiss();
      });
      this.eventEmitterService.emitter.addListener("askChildRefreshNowPointer",(v)=>{
        let thisTime = new Date().getTime();
        if(thisTime - this.lastRefreshNowPointerTime >200) this.refreshNowPointer();
        this.lastRefreshNowPointerTime = thisTime;
      });
      
  }

  private refresh(){
    this.sm = new ScheduleManager();
    this.onDayClick(this.cur_selete_date);
    this.refreshNowPointer();
  }

  private refreshNowPointer(){
    let d = new Date();
    //alert("现在时间："+d.getHours()+":"+d.getMinutes()+"px:"+TimeManager.getDeltaMinutesFromZeroToNow(d)/2);
    this.nowStyle = {'top':TimeManager.getDeltaMinutesFromZeroToNow(d)/2+'px'};
  }
}
