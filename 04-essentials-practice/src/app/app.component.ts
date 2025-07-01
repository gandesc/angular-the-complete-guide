import { Component } from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import {InvestmentDetailsModel} from "./user-input/investment-details.model";
import {calculateInvestmentResults} from './investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    UserInputComponent,
    InvestmentResultsComponent
  ]
})
export class AppComponent {
  investmentResults?: any[];

  onDetailsSubmitted($event:InvestmentDetailsModel) {
    this.investmentResults = calculateInvestmentResults($event);

    console.log(this.investmentResults);
  }
}
