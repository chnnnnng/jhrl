import { TimeManager } from 'src/app/utils/TimeManager/time-manager';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
export class ScheduleManager {

    private schoolStartDayString : string;
    private storage = new LocalStorageService();

    constructor(){
        if(this.storage.get("schedules") == null){
            this.storage.set("schedules",[]);
        }
        this.schoolStartDayString = "2019-9-16";
        //this.schoolStartDayString = this.storage.get("schoolStart");
    }

    public create(schedule ,check = false){
        let startDayDate = new Date(this.schoolStartDayString);
        let startDate = new Date(schedule.start);
        let endDate = new Date(schedule.end);
        if(startDate.getDay() == endDate.getDay() && startDate.getTime() < endDate.getTime()){
            let weeknum = TimeManager.getWeeknumber(startDate,startDayDate);
            let day = startDate.getDay();
            let schedules = this.fetchAll();
            if(schedules[weeknum] == null){
                schedules[weeknum] = new Array(7);
            }
            if(schedules[weeknum][day-1] == null){
                schedules[weeknum][day-1] = new Array();
            }
            schedule['type'] = 's';
            if(!check) schedule['createtime'] = new Date().getTime();
            schedule['week'] = weeknum;
            schedule['day'] = day;
            schedule['style'] = {
                'height':TimeManager.getDeltaMinutesByTime(startDate,endDate) / 2+'px',
                'top':TimeManager.getDeltaMinutesFromZeroToCertain(startDate) /2 +'px',
            };
            schedule['simple_time'] = startDate.getHours()+":"+((startDate.getMinutes()<10)?(startDate.getMinutes()+'0'):(startDate.getMinutes()))+"~"+endDate.getHours()+":"+((endDate.getMinutes()<10)?(endDate.getMinutes()+'0'):(endDate.getMinutes()));
            if(!check){
                schedules[weeknum][day-1].push(schedule);
                this.storage.set("schedules",schedules);
            }
            return true;
        }else{
            return false;
        }
    }

    public update(schedule){
        let x = this.create(schedule,true);
        if(x){
            this.delete(schedule);
            return this.create(schedule);
        }else{
            return false;
        }
    }

    public fetchAll(){
        return this.storage.get("schedules");
    }

    public fetch(weeknum, day){
        let t = this.storage.get("schedules")[weeknum];
        if(t == null){
            return [];
        }else{
            return t[day-1];
        }
    }

    public delete(schedule){
        let old = this.fetch(schedule.week,schedule.day);
        for(let i in old){
            if(old[i] != null){
                if(old[i]['createtime'] == schedule['createtime']){
                    old.splice(i,1);
                }
            }
        }
        let schedules = this.storage.get("schedules");
        schedules[schedule.week][schedule.day-1] = old;
        this.storage.set("schedules",schedules);
    }

}