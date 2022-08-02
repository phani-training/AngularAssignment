import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {
  principle : number = 0.0;
  rateOfInterest : number = 6.5/100;
  totalAmount : number  =0.0;
  constructor() { }

  ngOnInit(): void {
  }

  onCalculate(){
    let interest = this.principle * 5 * this.rateOfInterest;
    this.totalAmount = this.principle + interest;
  }
}
