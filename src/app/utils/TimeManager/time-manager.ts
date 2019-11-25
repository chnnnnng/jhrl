export class TimeManager {
    ScheduleToTimeMap = {1:["8:00","8:45"],2:["8:55","9:40"],3:["9:55","10:40"],4:["10:50","11:35"],5:["11:45","12:30"],6:["13:30","14:15"],7:["14:25","15:10"],8:["15:25","16:10"],9:["16:20","17:05"],10:["18:30","19:15"],11:["19:25","20:10"],12:["20:20","21:05"]};
    
    public static dayTimeList = ['凌晨0点','凌晨1点','凌晨2点','凌晨3点','凌晨4点','凌晨5点','早上6点','早上7点','上午8点','上午9点','上午10点','中午11点','中午12点','下午1点','下午2点','下午3点','下午4点','下午5点','下午6点','傍晚7点','晚上8点','晚上9点','晚上10点','晚上11点'];
    public static dayTimeListSimple = ['0点','1点','2点','3点','4点','5点','6点','7点','8点','9点','10点','11点','12点','13点','14点','15点','16点','17点','18点','19点','20点','21点','22点','23点'];
    public static timePickerRange = {'max':(new Date().getFullYear())+1,'min':new Date().getFullYear()};


    public getTimeBySchedule(schedule : number){
        return this.ScheduleToTimeMap[schedule];
    }

    public getDeltaMinutesBySchedule(fromSchedule : number, toSchedule : number){
        let fromDate = new Date("1970/01/01 "+this.getTimeBySchedule(fromSchedule)[0]+":00");
        let toDate = new Date("1970/01/01 "+this.getTimeBySchedule(toSchedule)[1]+":00");
        return (toDate.getTime() - fromDate.getTime()) / 60000;
    }

    public getDeltaMinutesFromZeroOClockToCertainSchedule(schedule : number){
        let fromDate = new Date("1970/01/01 00:00:00");
        let toDate = new Date("1970/01/01 "+this.getTimeBySchedule(schedule)[0]+":00");
        //console.log((toDate.getTime() - fromDate.getTime()) / 60000);
        return (toDate.getTime() - fromDate.getTime()) / 60000;
    }

    public static getDeltaMinutesFromZeroToNow(){
        let d = new Date();
        return d.getHours()*60+d.getMinutes();
    }

    public static getDeltaMinutesFromZeroToCertain(d : Date){
        return d.getHours()*60+d.getMinutes();
    }


    public static getDeltaMinutesByTime(from : Date, to : Date){
        return (to.getTime() - from.getTime()) / 60000;
    }

    public static getWeeknumber(nowDate,startDayDate){
        var deltaDay = Math.round((nowDate.getTime()-startDayDate.getTime())/(1000*60*60*24));
        return Math.ceil((deltaDay+1)/7);//deltaDay为天数之差，deltaDay+1即可表示开学第几天。
    
    }

    /**
     * 根据字符串得到开学日期对象，字符串形如： 2019-9-16
     * **/
    public static generateStartDayDateByString(string:string){
        var startDayDate = new Date();
        startDayDate.setFullYear(<number><unknown>string.split('-')[0],<number><unknown>string.split('-')[1]-1,<number><unknown>string.split('-')[2]);
        return startDayDate;
    }

    public static formatDateFromISOToYYYYMMDD_HH_MM(s){
        var d = new Date(s);
        return d.getFullYear()+"-"+d.getMonth()+'-'+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
    }
}
