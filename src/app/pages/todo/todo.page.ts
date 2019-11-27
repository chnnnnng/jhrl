import { MoveTodoComponent } from './../../components/move-todo/move-todo.component';
import { ManageGroupComponent } from './../../components/manage-group/manage-group.component';
import { CreateTodoComponent } from './../../components/create-todo/create-todo.component';
import { TodoManager } from './../../utils/todo-manager/todo-manager';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  private tm : TodoManager;
  private isReorderDisabled = true;
  private todoList : any;
  private groupList : any;
  private cur_group : number;

  constructor(public modalController : ModalController, public popoverController : PopoverController) { 
    
  }

  ngOnInit(default_group : number = 0) {
    try {
      this.tm = new TodoManager();
      this.cur_group = default_group;
      this.groupList = this.tm.getGroups();
      this.getTodos();
    } catch (error) {
      alert("数据错误，请检查设置。");
      window.location.href = "/settings";
    }
  }

  getTodos(){
    this.todoList = this.tm.getGroup(this.cur_group).getTodolist();
  }

  reorder(ev : any) {
    try {
        if (ev.detail.to === this.todoList.length) {
            ev.detail.to -= 1;
        }
        if (ev.detail.from < ev.detail.to) {
            this.todoList.splice(ev.detail.to + 1, 0, this.todoList[ev.detail.from]);
            this.todoList.splice(ev.detail.from, 1);
        }
        if (ev.detail.from > ev.detail.to) {
            this.todoList.splice(ev.detail.to, 0, this.todoList[ev.detail.from]);
            this.todoList.splice(ev.detail.from + 1, 1);
        }
        ev.detail.complete();
    } catch (e) {
        return;
    }
}

  toggleReorderGroup() {
    this.isReorderDisabled = !this.isReorderDisabled;
    if(this.isReorderDisabled) this.save();
  }

  groupChanged(ev : any){
    this.cur_group = ev.detail.value;
    this.getTodos();
  }

  private save(){
    this.tm.setGroup(this.cur_group,this.todoList);
    this.tm.save();
  }

  setDone(i : number){
    this.todoList[i].status = true;
    this.save();
  }

  setDoing(i : number){
    this.todoList[i].status = false;
    console.log(this.todoList[i].status);
    this.save();
  }

  deleteTodo(i : number){
    this.todoList.splice(i,1);
    this.save();
  }

  async  moveTo(i : number){
    const popover = await this.popoverController.create({
      component: MoveTodoComponent,
      componentProps:{'fromgroup':this.cur_group,'i':i}
    });
    popover.onDidDismiss().then((data)=>{
      this.tm = new TodoManager();
      this.getTodos();
    })
    return await popover.present();
  }

  async createTodo(){
    let modal = await this.modalController.create({
      component: CreateTodoComponent,
      componentProps: { "group" : this.cur_group },
    });
    modal.onDidDismiss()
      .then((data) => {
        this.ngOnInit(data.data.group);//创建新的待办后直接跳转到所在分组。
    });
    return await modal.present();
  }

  async manageGroup(){
    let modal = await this.modalController.create({
      component: ManageGroupComponent,
    });
    modal.onDidDismiss()
      .then((data) => {
        if(data.data != {}){
          this.ngOnInit(data.data.newGroup);//创建新的分组后直接跳转到新的分组
        }else{
          this.ngOnInit();//其他则不做操作。
        }
        
    });
    return await modal.present();
  }

  

}
