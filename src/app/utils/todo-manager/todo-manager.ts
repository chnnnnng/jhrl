import { LocalStorageService } from './../../services/local-storage/local-storage.service';
import { Todogroup } from './todogroup';
import { Todo } from './todo';
export class TodoManager {
    private rawTodoSample = [{"name":"默认","type":true,"todolist":[{"title":"默认·样例待办一","status":false},{"title":"默认·样例待办二","status":true}]}];
    private rawTodo : any;
    private todoGroups = new Array<Todogroup>();
    private storage = new LocalStorageService();

    constructor(){
        if(this.storage.get("todo") == null){//如果todo不存在，则初始化.
            this.storage.set("todo",this.rawTodoSample);
        }
        this.rawTodo = this.storage.get("todo");
        for(let group of this.rawTodo){
            this.todoGroups.push(new Todogroup(group));
        }
    }

    public getGroups(){
        return this.todoGroups;
    }

    public getRawGroups(){
        return this.rawTodo;
    }

    public getGroup( i : number){
        return this.todoGroups[i];
    }

    public setGroup( i : number , todolist : Array<Todo>){
        this.todoGroups[i].todolist = todolist;
        this.refreshRaw();
    }

    public setGroups(groups : Array<Todogroup>){
        this.todoGroups = groups;
        this.refreshRaw();
    }

    public addGroup(name : string){
        let group = new Todogroup({"name":name,"type":false,"todolist":[{"title":name+"·样例待办","status":false}]});
        let newLength = this.todoGroups.push(group);
        this.refreshRaw();
        return newLength-1;
    }

    public deleteGroup(group : number){
        let groups = this.getGroups();
        groups = groups.splice(group,1);
        this.setGroups(groups);
        this.refreshRaw();
    }

    public addTodo(group : number, todo : Todo){
        this.todoGroups[group].todolist.push(todo);
        this.refreshRaw();
    }

    private refreshRaw(){
        let newRaw = new Array();
        for(let group of this.todoGroups){
            newRaw.push(group.getRaw());
        }
        this.rawTodo = newRaw;
    }

    public save(){
        this.storage.set("todo",this.rawTodo);
    }

    
}
