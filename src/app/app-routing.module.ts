import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app.routes'; // Importa il file con le rotte

@NgModule({
    imports: [RouterModule.forRoot(routes)],  // Usa il file delle rotte
    exports: [RouterModule]
})
export class AppRoutingModule { }
