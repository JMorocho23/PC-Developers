import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Import Any Components that you will navigate too
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './components/home/home.component'

const routes: Routes = [
   {path:'',component: HomeComponent},
  // {path:'contacto',component: ContactCompoent},
];

@NgModule({
  exports:[RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
