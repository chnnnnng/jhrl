import { Todo } from './todo';
export class Todogroup {
    public name : string;
    public type : boolean; //true为默认，false为其他。
    public todolist : Array<Todo>;

    public getName(){
        return this.name;
    }
    public isDefault(){
        return this.type == true;
    }

    public getTodolist(){
        return this.todolist;
    }

    constructor(group : any){
        this.name = group.name;
        this.type = group.type;
        this.todolist = new Array<Todo>();
        for(let todo of group.todolist){
            this.todolist.push(new Todo(todo));
        }
        return this;
    }

    public getRaw(){
        let group = {};
        group['name'] = this.name;
        group['type'] = this.type;
        let todolist = [];
        for(let todo of this.todolist){
            todolist.push(todo.getRaw());
        }
        group['todolist'] = todolist;
        return group;
    }
}
