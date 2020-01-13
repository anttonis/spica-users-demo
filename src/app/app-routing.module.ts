import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { PresenceComponent } from './pages/presence/presence.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';


const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'users', component: UsersComponent },
  { path: 'presence', component: PresenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UsersComponent, PresenceComponent];
