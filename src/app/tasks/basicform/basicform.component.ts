import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicform',
  templateUrl: './basicform.component.html',
  styleUrls: ['./basicform.component.css']
})
export class BasicformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayVal:any=""
  getValue(data:NgForm){
    this.displayVal=data;
  }
}
