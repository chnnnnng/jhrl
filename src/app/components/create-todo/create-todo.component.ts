import { TodoManager } from './../../utils/todo-manager/todo-manager';
import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/utils/todo-manager/todo';
import { ModalController, NavParams, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss'],
})
export class CreateTodoComponent implements OnInit {

  public title = "";
  public groupList : any;
  public group : number;
  private tm = new TodoManager();

  constructor(public modalController : ModalController,navParams: NavParams,public alertController:AlertController) { 
    this.group = navParams.get('group');
  }

  ngOnInit() { 
    this.groupList = this.tm.getGroups();
  }

  groupChanged(ev : any){
    this.group = ev.detail.value;
  }

  dismissModal(){
    this.modalController.dismiss({"group":this.group});
  }

  async onFormSubmit(){
    if(this.title == ""){
      const alert = await this.alertController.create({
        header: '呃～',
        message: '内容不可为空',
        buttons: ['知道了']
      });
      await alert.present();
    }else{
      let todo = new Todo({"title":this.title,"status":false});
      this.tm.addTodo(this.group,todo);
      this.tm.save();
      this.dismissModal();
    }

  }
}