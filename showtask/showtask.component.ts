import { Component, OnInit, inject } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
task:string[]=['task1','task2','task3']

taskserv:TaskService=inject(TaskService)
ngOnInit(): void {
  this.taskserv.Task.subscribe((value)=>{
    this.task.push(value)
  })
}
}
