import { Component, OnChanges, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Perm2Contract';
  baseSalary: number = 120000;
  super: number = 0.095;
  workingDays: number = 230;
  dailyRate: number = 1.3;

  setWorkingDays(event: any){
    this.workingDays = event.target.value;
  }

  setDailyRate(event: any){
    this.dailyRate = event.target.value;
  }

  setSuper(event: any){
    this.super = event.target.value;
  }

  setBaseSalary(event: any){
    this.baseSalary = event.target.value;
  }

  getDailyRateAsPercent(){
    return (this.dailyRate * 100) - 100;
  }

  getTotalPackage(){
    return this.getTotalSuper() + this.baseSalary;
  }

  getTotalSuper(){
    return this.baseSalary * this.super;
  }

  getTotalDividedAvgWorkingDays(){
    return this.getTotalPackage() / this.workingDays;
  }

  getTotalDailyRate(){
    return this.getTotalDividedAvgWorkingDays() * this.dailyRate;
  }
}
