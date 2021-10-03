import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  appMessage = "________________";
  appMessage2 = "_______________"
  appMethod(event:any){
    console.log(event);
      this.appMessage = event;
  }
  appMethod2(event:any){
    this.appMessage2 = event;
  }
      //this.thirdEvent.emit(!this.visible? "Third Component" : "______________")
}


  
  

  // public appMessage = "________________";
  // @Output () firstEvent : EventEmitter<any> = new EventEmitter();
  
  // visible : any = true;

  // ngOnInit(): void {
  // }



  // appMethod(event:any){
  //   this.appMessage = event;
  //   this.visible =!this.visible;
  //   this.firstEvent.emit(!this.visible ? "First Component" : "_____________");
  //  // this.thirdEvent.emit(!this.visible? "Third Component" : "______________")
  //   console.log(this.firstEvent)
  // public appMessage = "________________";
  // @Output () firstEvent : EventEmitter<any> = new EventEmitter();
  
  // visible : any = true;

  // ngOnInit(): void {
  // }

  // appMethod(event:any){
  //   this.appMessage = event;
  //   this.visible =!this.visible;
  //   this.firstEvent.emit(!this.visible ? "First Component" : "_____________");
  //  // this.thirdEvent.emit(!this.visible? "Third Component" : "______________")
  //   console.log(this.firstEvent)
