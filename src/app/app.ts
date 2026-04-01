import { Component, inject } from '@angular/core';
import { ExpenseService } from './services/expense';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
})
export class App {
  expenseService = inject(ExpenseService);
}
