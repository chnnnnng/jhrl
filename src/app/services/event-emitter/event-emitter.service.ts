import { EventEmitter } from 'events';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService{

  public emitter : EventEmitter

  constructor() {
    this.emitter = new EventEmitter();
   }
}