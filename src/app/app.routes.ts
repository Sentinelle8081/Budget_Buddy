import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component'; // Assicurati che il percorso sia corretto
import { LoginComponent } from './auth/login/login.component'; // Assicurati che il percorso sia corretto
import { RegisterComponent } from './auth/register/register.component'; // Assicurati che il percorso sia corretto

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
];
