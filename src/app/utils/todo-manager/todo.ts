export class Todo {
    public title : string;
    public status : boolean; //false表示进行中，true表示已完成

    // public getTitle(){
    //     return this.title;
    // }

    // public getStatus(){
    //     return this.status;
    // }

    // public getStatus_zh(){
    //     return this.status ? "已完成" : "进行中";
    // }

    // public isDone(){
    //     return this.status;
    // }

    // public setDone(){
    //     this.status = true;
    // }

    // public setDoing(){
    //     this.status = false;
    // }

    constructor(todo : any){
        this.title = todo.title;
        this.status = todo.status;
        return this;
    }

    public getRaw(){
        return {"title":this.title,"status":this.status};
    }

}
