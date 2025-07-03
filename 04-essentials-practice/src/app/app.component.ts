import {Component, inject} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserInputComponent} from "./user-input/user-input.component";
import {InvestmentResultsComponent} from "./investment-results/investment-results.component";
import type {InvestmentInput} from "./user-input/investment-input.model";
import {InvestmentService} from "./investment.service";

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
  private investmentService = inject(InvestmentService);

  onCalculateInvestmentResults($event: InvestmentInput) {
    this.investmentService.calculateInvestmentResults($event);

    console.log(this.investmentService.resultData);
  }
}
