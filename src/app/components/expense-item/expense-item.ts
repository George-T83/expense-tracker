import { Component, input, inject } from '@angular/core';
import { Expense } from '../../models/expense';
import { ExpenseService } from '../../services/expense';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-expense-item',
  standalone: true,
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './expense-item.html',
  styleUrl: './expense-item.css',
})
export class ExpenseItem {
  expenseService = inject(ExpenseService);

  expense = input.required<Expense>();

  getCategoryColor(): string {
    switch (this.expense().category) {
      case 'Grocery':
        return 'green';
      case 'Work':
        return 'blue';
      case 'Shopping':
        return 'purple';
      case 'Utilities':
        return 'orange';
      case 'Personal':
        return 'teal';
      case 'School':
        return '#8b5cf6';
      default:
        return 'gray';
    }
  }

  getAmountClass(): string {
    const amount = this.expense().amount;

    if (amount < 25) {
      return 'amount-small';
    }

    if (amount < 100) {
      return 'amount-medium';
    }

    if (amount < 400) {
      return 'amount-large';
    }

    return 'amount-xl';
  }
}
