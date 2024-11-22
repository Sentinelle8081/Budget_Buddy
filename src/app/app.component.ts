import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component'; // Importa HeaderComponent
import { RouterModule } from '@angular/router';  // Importa RouterModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Importa il modulo delle animazioni

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [HeaderComponent, RouterModule, BrowserAnimationsModule],  // Aggiungi HeaderComponent nella proprietà `imports`
})
export class AppComponent {
  title = 'my-app';
}
