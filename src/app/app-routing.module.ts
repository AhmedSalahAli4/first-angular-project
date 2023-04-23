import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { CONTACTComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PORTFOLIOComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:"", redirectTo:"home",pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"about", component:ABOUTComponent},
  {path:"portfolio", component:PORTFOLIOComponent},
  {path:"contact", component:CONTACTComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
