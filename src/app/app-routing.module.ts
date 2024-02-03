import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { CharactersComponent } from './pages/characters/characters.component';
import { MoreComponent } from './pages/more/more.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'content/:id',
    component:ContentComponent
  },
  {
    path:'characters',
    component: CharactersComponent
  },
  {
    path:'more',
    component: MoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
