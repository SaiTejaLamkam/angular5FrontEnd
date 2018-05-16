import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { 
    setInterval(() => {
      this.type3 = !this.type3;
    },1000)
  }
  private actualAmountInUsd = 50;
  INR = true;
  ngOnInit() {
  }

  get amount(){
   return this.INR ? this.actualAmountInUsd*65:this.actualAmountInUsd
  }

  get format(){
    return this.INR? 'INR':'USD'
  }

  toggleINRandUSD(){
    console.log("Hiiiiiiiiiii");
    this.INR = !this.INR
  }

  type1 = true;

  type2 = false;

  type3 = true;

  data = [
    {
      lang:'Javascript',
      usedOn:'web'
    },
    {
      lang:'Swift',
      usedOn:'Ios'
    }
  ]

}
