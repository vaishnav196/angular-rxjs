import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  // Task: EventEmitter<string>=new EventEmitter<string>();
  Task=new Subject<string>();
  oncreateTask(value:string){
this.Task.next(value)
  }
}
