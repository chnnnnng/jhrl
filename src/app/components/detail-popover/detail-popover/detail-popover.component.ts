import { EditScheduleComponent } from './../../edit-schedule/edit-schedule.component';
import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detail-popover',
  templateUrl: './detail-popover.component.html',
  styleUrls: ['./detail-popover.component.scss'],
})
export class DetailPopoverComponent implements OnInit {

  public course : any;

  constructor(public navParams: NavParams,public modalController: ModalController) {
    if(navParams.get('type') == 'c'){
      this.course = {
        'name':navParams.get('name'),
        'teacher':navParams.get('teacher'),
        'location':navParams.get('location'),
        'start_time':navParams.get('start_time'),
        'end_time':navParams.get('end_time'),
        'start_time_in_curriculum':navParams.get('start_time_in_curriculum'),
        'end_time_in_curriculum':navParams.get('end_time_in_curriculum'),
        'type':'c'
      }
    }else{
      let s = new Date(navParams.get('start'));
      let e = new Date(navParams.get('end'));
      this.course = {
        'title':navParams.get('title'),
        'location':navParams.get('location'),
        'note':navParams.get('note'),
        'type':'s',
        'start':navParams.get('start'),
        'end':navParams.get('end'),
        'week':navParams.get('week'),
        'day':navParams.get('day'),
        'createtime':navParams.get('createtime'),
        'start_zh':s.getFullYear()+"年"+s.getMonth()+"月"+s.getDate()+"日 "+s.getHours()+"时"+(s.getMinutes()<10?s.getMinutes()+'0':s.getMinutes())+"分",
        'end_zh':e.getFullYear()+"年"+e.getMonth()+"月"+e.getDate()+"日 "+e.getHours()+"时"+(e.getMinutes()<10?e.getMinutes()+'0':e.getMinutes())+"分",
      }
    }
    
   }

  ngOnInit() {

  }

  async editSchedule(course : any){
    let modal = await this.modalController.create({
      component: EditScheduleComponent,
      componentProps: {'schedule':course}
    });
    return await modal.present();
  }

}
