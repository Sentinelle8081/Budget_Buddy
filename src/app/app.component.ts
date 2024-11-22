import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component'; // Importa HeaderComponent
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { CommonModule } from '@angular/common'; // Importa il CommonModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterModule, CommonModule],  // Aggiungi HeaderComponent nella proprietà `imports`
})

export class AppComponent {
  notifications = [
    { message: 'Paga l’affitto entro il 25 del mese.' },
    { message: 'Scadenza bolletta luce: 28 Novembre.' },
  ];

  // Per testare il layout vuoto, svuota l'array:
  // notifications = [];
}
