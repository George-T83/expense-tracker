import { Routes } from '@angular/router';
import { Dashboard } from './components/dashboard/dashboard';
import { AddExpense } from './components/add-expense/add-expense';
import { ExpenseList } from './components/expense-list/expense-list';
import { EditExpense } from './components/edit-expense/edit-expense';

export const routes: Routes = [
  { path: '', component: Dashboard, title: 'Dashboard' },
  { path: 'add', component: AddExpense, title: 'Add Expense' },
  { path: 'expenses', component: ExpenseList, title: 'List of Expenses' },
  { path: 'edit/:id', component: EditExpense, title: 'Edit Expense' },
  { path: '**', redirectTo: '' },
];
