import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {InvestmentDetailsModel} from "./investment-details.model";

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() detailsSubmit = new EventEmitter<InvestmentDetailsModel>()
  initialInvestment!: number
  annualInvestment!: number
  expectedReturn!: number
  duration!: number

  onSubmit() {
    console.log('submitted form');

    this.detailsSubmit.emit({
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    });

    this.reset();
  }

  private reset() {
    this.initialInvestment = 0;
    this.annualInvestment = 0;
    this.expectedReturn = 0;
    this.duration = 0;
  }
}
