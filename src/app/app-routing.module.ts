import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserDetailsComponent } from './component/user-details/user-details.component';
import { UserSettingsComponent } from './component/user-settings/user-settings.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id', // localhost:4200/user/1/
    component: UserComponent,
    children: [
      {path: '', redirectTo: 'details', pathMatch: 'full'},
      {path: 'details', component: UserDetailsComponent},
      {path: 'settings', component: UserSettingsComponent}
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
