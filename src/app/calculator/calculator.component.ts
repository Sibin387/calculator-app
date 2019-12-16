import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="Calculator";
  title1="Calculator11";
  result="";
  constructor() { }

  ngOnInit() {

  }
  add(data){
    this.result += data;
  }

  onInputChange($event){
    this.title = $event.target.value;
    //console.log($event);
    //alert($event.target.value);
  }

}
