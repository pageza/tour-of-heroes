import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
  {path: 'heroes', component: HeroesComponent},
  //adding the path to indivual details using parameters in the path
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'dashboard', component: DashboardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
