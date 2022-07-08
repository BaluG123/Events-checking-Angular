import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getName(data:any){
    alert('someone clicked you!')
    console.warn(data)
  }

  displayVal:any ="";
  getVal(data:any){
    console.log(data)
    this.displayVal=data
  }
  displayDown:any=""
  getDown(data:any){
    console.log(data)
    this.displayDown=data
  }
  
  displayUp:any=""
  getUp(data:any){
    console.log(data)
    this.displayUp=data
  }

  displayBlur:any=""
  getBlur(data:any){
    console.log(data)
    this.displayBlur=data
  }
}
