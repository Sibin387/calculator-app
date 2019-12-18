import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  title="Calculator App";
  result="";
  finalResult=""
  constructor() { }

  ngOnInit() {

  }
  add(data){
    if(data=="="){
      this.finalResult = eval(this.result);
    }else{
      this.result += data;
    }
  }
  clear(){
    this.result="";
    this.finalResult="";
  }
  onInputChange($event){
    this.title = $event.target.value;
    //console.log($event);
    //alert($event.target.value);
  }

}
