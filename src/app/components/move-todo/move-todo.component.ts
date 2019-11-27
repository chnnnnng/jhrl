import { NavParams, PopoverController } from '@ionic/angular';
import { TodoManager } from './../../utils/todo-manager/todo-manager';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-todo',
  templateUrl: './move-todo.component.html',
  styleUrls: ['./move-todo.component.scss'],
})
export class MoveTodoComponent implements OnInit {

  private tm : TodoManager;
  private groupList : any;
  private fromGroup : number;
  private toGroup : number;
  private index : number;
  private map : any;

  constructor(public navParams:NavParams, public popoverController : PopoverController) {
    this.fromGroup = navParams.data.fromgroup;
    this.index = navParams.data.i;
   }

  ngOnInit() {
    this.tm = new TodoManager();
    this.groupList = this.tm.getGroups();
    this.map = new Array();
    for(let i in this.groupList){
      this.map.push(i);
    }
    this.groupList.splice(this.fromGroup,1);
    this.map.splice(this.fromGroup,1);
  }

  move(){
    if(this.toGroup != undefined){
      this.tm = new TodoManager();
      this.tm.moveTodo(this.fromGroup,this.index,this.toGroup);
      this.tm.save();
      this.popoverController.dismiss();
    }
  }
}
