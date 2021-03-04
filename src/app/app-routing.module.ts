import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './views/about-us/about-us.component';
import { HelpComponent } from './views/help/help.component';
import { HomeComponent } from './views/home/home.component';
import { InfoComponent } from './views/info/info.component';
import { StartComponent } from './views/start/start.component';

const routes: Routes = [
  {path: 'start', component: StartComponent},
  { path: 'home', component: HomeComponent },
  { path: 'help', component: HelpComponent},
  { path: 'about-us', component: AboutUsComponent},
  {path:'info', component: InfoComponent},
  {path:'', redirectTo:'start',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
