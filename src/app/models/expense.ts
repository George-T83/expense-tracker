export type ExpenseCategory =
  | 'Work'
  | 'Personal'
  | 'Grocery'
  | 'Utilities'
  | 'Shopping'
  | 'Travel'
  | 'Food'
  | 'School';

export const EXPENSE_CATEGORIES: ExpenseCategory[] = [
  'Work',
  'Personal',
  'Grocery',
  'Utilities',
  'Shopping',
  'Travel',
  'Food',
  'School',
];

export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
}
