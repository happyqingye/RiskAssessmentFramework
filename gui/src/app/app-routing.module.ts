import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './view/home/home.component';
import { HistoryComponent } from './view/history/history.component';
import { ProfileComponent } from './view/profile/profile.component';
import { ResourcesComponent } from './view/resources/resources.component';
import { SettingsComponent } from './view/settings/settings.component';
import { SupportComponent } from './view/support/support.component';
import { ToolsComponent } from './view/tools/tools.component';

const routes: Routes = [
  {path : '', component:  LoginComponent},
  {path : 'home', component: HomeComponent},
  {path : 'history', component: HistoryComponent},
  {path : 'profile', component: ProfileComponent},
  {path : 'resources', component : ResourcesComponent},
  {path : 'settings', component : SettingsComponent},
  {path : 'support', component : SupportComponent},
  {path : 'tools', component : ToolsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
