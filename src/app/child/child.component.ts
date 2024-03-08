import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
 

  ngOnInit(): void {
  }

  message = 'message from child!!';
  // @Input()
  // childMessage: string | undefined;

  // @Output() messageEvent = new EventEmitter<string>();

  // sendMessage(){
  //   this.messageEvent.emit('Hello from the child');
  // }

}
