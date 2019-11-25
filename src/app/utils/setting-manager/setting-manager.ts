import { TodoManager } from './../todo-manager/todo-manager';
import { ScheduleManager } from './../schedule-manager/schedule-manager';
import { Settings } from './settings';
import { LocalStorageService } from './../../services/local-storage/local-storage.service';
export class SettingManager {

    private storage = new LocalStorageService();
    public setting : Settings;

    constructor(){
        if(this.storage.get("settings") == null){//如果todo不存在，则初始化.
            this.makeDefaultSetting();
            this.save();
        }else{
            this.setting = this.storage.get("settings");
        }
    }

    private makeDefaultSetting(){
        this.setting = new Settings();
        this.setting.rawCourseData = "{}";
        this.setting.schoolStartDate = "";
        this.setting.schoolTotalWeeks = "";
        this.setting.defaultView = "daily";
        this.setting.autoSetting = false;
    }

    public getBackup(){
        let b = {};
        b['setting'] = this.setting;
        b['schedules'] = new ScheduleManager().fetchAll();
        b['todo'] = new TodoManager().getRawGroups();
        return JSON.stringify(b);
    }

    public recoverBackup(b : any){
        this.storage.set("schedules",b['schedules']);
        if(b['todo']!=null){
            this.storage.set("todo",b['todo']);
        }else{
            this.storage.remove('todo');
        }
        if(b['schedules']!=null){
            this.storage.set("schedules",b['schedules']);
        }else{
            this.storage.remove('schedules');
        }
        this.storage.set("settings",b['setting']);
    }

    public setSetting(setting : Settings){
        this.setting = setting;
    }

    public save(){
        this.storage.set("settings",this.setting);
    }

    public getRawCourseData(){
        return JSON.parse(this.setting.rawCourseData);
    }
    public getSchoolStartDate(){
        return this.setting.schoolStartDate;
    }
    public getSchoolTotalWeeks(){
        return this.setting.schoolTotalWeeks;
    }
    public getDefaultView(){
        return this.setting.defaultView;
    }

}
