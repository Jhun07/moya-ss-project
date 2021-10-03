import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  visible: any = true;
 @Output() firstOutput: EventEmitter<any> = new EventEmitter();
  // @Output()  firstOutput = new EventEmitter();
   @Input() firstInput: any; 
  constructor() { }

  ngOnInit(): void {
  }
  firstMethod(){
    this.visible = !this.visible;
    this.firstOutput.emit(!this.visible ? " First Component Button is clicked!" : "__________________")

  }

}