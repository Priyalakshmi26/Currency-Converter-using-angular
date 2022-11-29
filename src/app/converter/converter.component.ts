import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeService} from '../services/exchange-rates.service'
declare const myFun:any;
declare const mycountry:any;
@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
callfun(){
  myFun();
}
callcountry(){
  mycountry();
}
  amount = 0;
  from = 'USD';
  to = 'UAH';
  rates!: {[key: string]: number}
  
  convert(): number{
    return this.amount * this.rates[this.to];
  }

  loadRates(){
    this.service.getRates(this.from).subscribe(res => this.rates = res.rates)
  } 
  

  constructor(private service: CurrencyExchangeService) {
    
  }

  getAllCurrencies(): string[]{
    return Object.keys(this.rates)
  }


  
  ngOnInit(): void {
    this.loadRates();
  }

}
