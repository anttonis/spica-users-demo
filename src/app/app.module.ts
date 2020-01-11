import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridListComponent } from './sandbox/grid-list/grid-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './components/layout/header/header.component';
import { UsersComponent } from './users/users.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    HeaderComponent,
    UsersComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents(null)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// grid:
// https://medium.com/ag-grid/get-started-with-angular-grid-in-5-minutes-83bbb14fac93