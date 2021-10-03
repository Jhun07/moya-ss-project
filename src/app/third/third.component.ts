import { Component, OnInit , EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  visible: any = true;
@Output() thirdOutput: EventEmitter<any> = new EventEmitter();

//   @Output()  thirdOutput new EventEmitter();
  @Input() thirdInput : any ; 
  constructor() { }

  ngOnInit(): void {
  }
  thirdMethod(){
    this.visible = !this.visible;
    this.thirdOutput.emit(!this.visible ? " Third Component Button is clicked!" : "___________________")

  }
}
