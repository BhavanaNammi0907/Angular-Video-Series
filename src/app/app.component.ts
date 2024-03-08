import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;

  title = 'My first angular project';

  getMin(a:any,b:any){
    if(a<b){
      return 'The smaller value is ' + a;
    }
    return 'The smaller value is ' + b;
  }

  ngOnInit(): void {
      this.intervalSub = setInterval(() => {
        console.log("Hello from ngOnInIt!");
      },1000);
  }

  ngOnDestroy(): void {
      if(this.intervalSub){
        clearInterval(this.intervalSub);
      }
  }

}
