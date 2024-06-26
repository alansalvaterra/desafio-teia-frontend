import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RandomSelectionComponent } from './components/random-selection/random-selection.component';
import { StandardSelectionComponent } from './components/standard-selection/standard-selection.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'randomselection',
    component: RandomSelectionComponent
  },
  {
    path: 'standardselection',
    component: StandardSelectionComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
