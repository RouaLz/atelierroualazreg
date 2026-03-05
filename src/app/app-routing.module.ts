import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListAtelierRouaComponent } from './core/list-atelier-roua/list-atelier-roua.component';

const routes: Routes = [
  { path: 'ateliers', component: ListAtelierRouaComponent },
  { path: '', redirectTo: 'ateliers', pathMatch: 'full' } // Redirige vers la liste par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }