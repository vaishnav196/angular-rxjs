import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent {
  data:any[]=[];
 sub1:any;
counter=interval(1000);
onsubscribe(){
 this.sub1=this.counter.subscribe((val)=>{
  this.data.push(val);
})
}
onUnsubscribe(){
  this.sub1.unsubscribe()
}

}
