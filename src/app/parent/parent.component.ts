import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent implements OnInit {
  ngOnInit(): void {
    
  }
  // receiveMessage(msg:string){
  //   alert(msg);
  // }

  @ViewChild(ChildComponent) child:any;

  ngAfterViewInit(){
    alert(this.child.message);
  }

}
