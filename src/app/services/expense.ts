import { Injectable, signal, computed } from '@angular/core';
import { Expense } from '../models/expense';

@Injectable({ providedIn: 'root' })
export class ExpenseService {
  private expensesSignal = signal<Expense[]>([]);
  expenses = computed(() => this.expensesSignal());

  totalExpenses = computed(() => this.expensesSignal().reduce((sum, e) => sum + e.amount, 0));

  expenseCount = computed(() => this.expensesSignal().length);

  highestExpense = computed(() => Math.max(0, ...this.expensesSignal().map((e) => e.amount)));

  averageExpense = computed(() =>
    this.expenseCount() > 0 ? this.totalExpenses() / this.expenseCount() : 0,
  );

  addExpense(newExpense: Expense) {
    this.expensesSignal.update((current) => [...current, newExpense]);
  }

  deleteExpense(id: string) {
    this.expensesSignal.update((current) => current.filter((e) => e.id !== id));
  }

  updateExpense(updated: Expense) {
    this.expensesSignal.update((curr) => curr.map((e) => (e.id === updated.id ? updated : e)));
  }

  getExpenseById(id: string) {
    return this.expensesSignal().find((e) => e.id === id);
  }
}
