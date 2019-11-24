import { ModalController, AlertController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { TodoManager } from 'src/app/utils/todo-manager/todo-manager';

@Component({
  selector: 'app-manage-group',
  templateUrl: './manage-group.component.html',
  styleUrls: ['./manage-group.component.scss'],
})
export class ManageGroupComponent implements OnInit {

  private tm = new TodoManager();
  public groups : any;
  public isReorderDisabled = true;
  private changedOrder = false;
  public newGroup = "";

  constructor(public modalController : ModalController, public alertController : AlertController) { }

  ngOnInit() {
    this.groups = this.tm.getGroups();
  }

  reorder(ev : any) {
    try {
        if (ev.detail.to === this.groups.length) {
            ev.detail.to -= 1;
        }
        if (ev.detail.from < ev.detail.to) {
            this.groups.splice(ev.detail.to + 1, 0, this.groups[ev.detail.from]);
            this.groups.splice(ev.detail.from, 1);
        }
        if (ev.detail.from > ev.detail.to) {
            this.groups.splice(ev.detail.to, 0, this.groups[ev.detail.from]);
            this.groups.splice(ev.detail.from + 1, 1);
        }
        ev.detail.complete();
        this.changedOrder = true;
    } catch (e) {
        return;
    }
}

  dismissModal(data : any = {}){
    this.modalController.dismiss(data);
    if(this.changedOrder) location.reload();
  }

  toggleReorderGroup() {
    this.isReorderDisabled = !this.isReorderDisabled;
    if(this.isReorderDisabled && this.changedOrder) this.save();
  }

  addNewGroup(){
    if(this.newGroup != ""){ 
      let newGroupIndex = this.tm.addGroup(this.newGroup);
      this.save();
      this.dismissModal({"newGroup":newGroupIndex});
    }
  }

  async deleteGroup(group : number) {
    const alert = await this.alertController.create({
      header: '确认删除!？',
      message: '该待办组之下的待办事项将一并删除。',
      buttons: [
        {
          text: '取消',
          role: 'cancel',
          handler: (blah) => {
            console.log('取消删除.');
          }
        }, {
          text: '确认删除',
          handler: () => {
            this.tm.deleteGroup(group)
            this.save();
            this.dismissModal()
          }
        }
      ]
    });

    await alert.present();
  }

  private save(){
    this.tm.setGroups(this.groups);
    this.tm.save();
    //this.dismissModal(data);
  }
}
