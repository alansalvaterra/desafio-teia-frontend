import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  constructor(private router: Router) {}

  navigateToRandom() {
    this.router.navigate(['/randomselection']);
  }

  navigateToSelection(): void {
    this.router.navigate(['/selection']); // Navegar para a rota '/selection' (escolha por seleção)
  }
}
