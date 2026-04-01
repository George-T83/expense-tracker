import { Component, inject, signal } from '@angular/core';
import { ExpenseService } from '../../services/expense';
import { ExpenseCategory, EXPENSE_CATEGORIES } from '../../models/expense';

@Component({
  selector: 'app-add-expense',
  standalone: true,
  imports: [],
  templateUrl: './add-expense.html',
})
export class AddExpense {
  expenseService = inject(ExpenseService);
  showWarning = signal(false);
  categories = EXPENSE_CATEGORIES;

  onAddExpense(title: string, amount: string, category: string) {
    const parsedAmount = parseFloat(amount);

    if (!title || isNaN(parsedAmount) || parsedAmount <= 0 || !category) {
      this.showWarning.set(true);
      return;
    }

    this.expenseService.addExpense({
      id: Date.now().toString(),
      title,
      amount: parsedAmount,
      category: category as ExpenseCategory,
    });

    this.showWarning.set(false);
  }
}
