import { Component } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'rx';

  data: any[] = [];
array1=[1,2,3,4,5,6,7]
array2=[3,5,7,4,7,2,'heya',23,true]

  myobsrv = new Observable((observer) => {
     //observer.next([1,2,3,4])
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);

    setTimeout(() => {
      observer.error(new Error('Something went wrong cannot print new values'));
    }, 5000);

    setTimeout(() => {
      observer.next(6);
    }, 6000);
    setTimeout(() => {
      observer.next(7);
    }, 7000);


  });
 // myobsrv=of(this.array1,this.array2,'hello world',23)
 //myobsrv=from(this.array2)
 //myobsrv=from(this.array1)

// for maping
   //myobsrv=from([1,2,3,4,5,6,7])
  transformmap=this.myobsrv.pipe(map((val:any)=>{
    return val*10
  }))
  getdata() {
    // this.myobsrv.subscribe((val: any) => {
    //   this.data.push(val);
    //   console.log(this.data)
    //   // this.data=val;
    // },
    //   (err) => { alert(err.message) },
    //   ()=>{alert("all the data is streamed now")}


    // );

    this.myobsrv.subscribe({
      next:(val: any)=>{
        this.data.push(val);
    },
      error(err){
      alert(err.message)
    },
      complete(){
alert('all the data is streamed completely')
    }
    })
}
}
