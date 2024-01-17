import { Component, inject } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})


export class NewtaskComponent {
newTask:string=''

taskserv:TaskService=inject(TaskService)
oncreateTask(){
console.log(this.newTask)
this.taskserv.oncreateTask(this.newTask)
}
}
