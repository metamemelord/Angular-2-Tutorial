import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public homePara:string = "hehe";
  test = {
    name: "Gaurav",
    age: 22
  }

  @Input() childData; // Prop passed to this component 

  @Output() testEvent = new EventEmitter(); // This is the custom registered event in Angular. Name matters!!!

  fireTestEvent(e) {
    this.testEvent.emit(e); // That event from HomeComponent gets read here, angular then fires an event using EventEmitter
  }

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.homePara = "Omg it changes";
    }, 2000)
  }

  alert(value: string) {
    alert(value)
  }

}
