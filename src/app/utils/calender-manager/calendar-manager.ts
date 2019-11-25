import { TimeManager } from './../TimeManager/time-manager';
export class CalendarManager {
    calenderRawData : any;
    weekMap = {1:0,2:1,3:2,4:3,5:4,6:5,7:6};
    rawCourseList : any;
    CourseListBasesOnWeek = new Array();
    timeManager : TimeManager = new TimeManager();

    constructor(rawCalendar :any){
        try{
            this.calenderRawData = rawCalendar;
            this.rawCourseList = rawCalendar.kbList;
            for (let course of this.rawCourseList){
                var week = course.zcd.split(',');
                for(let key in week){
                    week[key] = week[key].replace("周","");
                    if(week[key].search("(双)") != -1){
                        week[key] = week[key].replace("(双)","");
                        this.putToCourseList(<number>(week[key].split('-')[0]),<number>(week[key].split('-')[1]),2,this.formatCourse(course));
                    }else if(week[key].search("-") != -1){
                        this.putToCourseList(<number>(week[key].split('-')[0]),<number>(week[key].split('-')[1]),1,this.formatCourse(course));
                    }else{
                        this.putToCourseList(<number>(week[key]),<number>(week[key]),1,this.formatCourse(course));
                    }
                }
            }
        }catch(e){
            alert("原始课表信息配置异常，请检查重试。");
            window.location.href = "/settings";
        }
    }

    private putToCourseList(fromweek : number, toweek : number, stepweek : number, course){
        for(var i=(fromweek -1+1) ;i<=toweek;i+=stepweek){
            if(this.CourseListBasesOnWeek[i] == undefined){
                this.CourseListBasesOnWeek[i] = new Array(7);
            }
            if( this.CourseListBasesOnWeek[i][course.day-1] == undefined){
                this.CourseListBasesOnWeek[i][course.day-1] = new Array();
            }
            this.CourseListBasesOnWeek[i][course.day-1].push(course);
        }
    }

    private formatCourse(course){
        return {
            'name':course.kcmc,
            'location':course.cdmc,
            'day':course.xqj,
            'time_in_curriculum':course.jcs,
            'start_time_in_curriculum':course.jcs.split('-')[0],
            'start_time':this.timeManager.getTimeBySchedule(course.jcs.split('-')[0])[0],
            'end_time_in_curriculum':course.jcs.split('-')[1],
            'end_time':this.timeManager.getTimeBySchedule(course.jcs.split('-')[1])[1],
            'style':{
                'height':this.timeManager.getDeltaMinutesBySchedule(course.jcs.split('-')[0],course.jcs.split('-')[1]) / 2+'px',
                'top':this.timeManager.getDeltaMinutesFromZeroOClockToCertainSchedule(course.jcs.split('-')[0]) /2 +'px',
            },
            'teacher':course.xm,
            'type':'c',
        }
    }

    public getCourseListBasesOnWeek(){
        return this.CourseListBasesOnWeek;
    }

    /**
     * week为第几个星期
     * day为星期几，星期几就是几
     * **/
    public getCourseListByWeekAndDay(week:number,day:number){
        return this.CourseListBasesOnWeek[week][this.weekMap[day]];
    }

     /**
     * week为第几个星期
     * 返回值中的index，0表示星期一，1表示星期二，以此类推。
     * **/
    public getCourseListByWeek(week:number){
        return this.CourseListBasesOnWeek[week];
    }
}
