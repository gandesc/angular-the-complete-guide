import {Component, inject} from '@angular/core';
import type {InvestmentInput} from "./user-input/investment-input.model";
import {InvestmentService} from "./investment.service";

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  private investmentService = inject(InvestmentService);

  onCalculateInvestmentResults($event: InvestmentInput) {
    this.investmentService.calculateInvestmentResults($event);

    console.log(this.investmentService.resultData);
  }
}
