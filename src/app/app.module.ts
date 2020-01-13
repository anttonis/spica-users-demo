import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridListComponent } from './sandbox/grid-list/grid-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { HeaderComponent } from './components/layout/header/header.component';
import { UsersComponent } from './users/users.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';

@NgModule({
  declarations: [
    AppComponent,
    GridListComponent,
    HeaderComponent,
    UsersComponent,
    EmployeeListComponent,
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    AgGridModule.withComponents(null),
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// grid:
// https://medium.com/ag-grid/get-started-with-angular-grid-in-5-minutes-83bbb14fac93