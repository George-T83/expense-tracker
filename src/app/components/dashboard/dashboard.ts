import { Component, inject } from '@angular/core';
import { ExpenseService } from '../../services/expense';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './dashboard.html',
})
export class Dashboard {
  expenseService = inject(ExpenseService);
}
