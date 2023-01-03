import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaDetailComponent } from './ficha-detail/ficha-detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "/ficha", pathMatch: "full"},
  {path: "ficha", component: HomeComponent},
  {path: "ficha/:id", component: FichaDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
