import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css']
})
export class ForloopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userDetails= [
    {name:'balu',age:22,gender:"male",ph:9380552833,accounts:['insta','gmail','fb','reddit']},
    {name:'sam',age:22,gender:"female",ph:9380552834,accounts:['insta','gmail','fb','quora']},
    {name:'hema',age:22,gender:"female",ph:9380552768,accounts:['insta','gmail','gb','qoura','whatsapp']}

  ]
}
