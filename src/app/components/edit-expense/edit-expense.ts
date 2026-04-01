import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpenseService } from '../../services/expense';
import { Expense, EXPENSE_CATEGORIES } from '../../models/expense';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-edit-expense',
  standalone: true,
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './edit-expense.html',
})
export class EditExpense implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private expenseService = inject(ExpenseService);

  expense = signal<Expense | undefined>(undefined);
  categories = EXPENSE_CATEGORIES;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.expense.set({ ...this.expenseService.getExpenseById(id)! });
    }
  }

  onUpdate() {
    if (this.expense()) {
      this.expenseService.updateExpense(this.expense()!);
      this.router.navigate(['/']);
    }
  }
}
