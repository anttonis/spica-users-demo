import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/Employee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private gridApi;
  private searchValue;

  employeeList: Employee[];

  private columnDefs = [
    {headerName: 'FirstName', field: 'FirstName'},
    {headerName: 'LastName', field: 'LastName'},
    {headerName: 'Address', field: 'Address', getQuickFilterText: () => ''},
    {headerName: 'Maticna st.', field: 'AdditionalField1'}
  ];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => {
      this.employeeList = data;
    })
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  //https://www.ag-grid.com/javascript-grid-filter-quick/
  quickSearch() {
    this.gridApi.setQuickFilter(this.searchValue);
  }

  addEmployee(employee: Employee){
    this.employeeService.addEmployee(employee).subscribe(employee => {
      this.employeeList.push(employee);
      // TODO - update grid with employee without the api fetch
      let arrEmp: Employee[] = [];
      arrEmp.push(employee);
      this.gridApi.updateRowData({add: arrEmp})
    })
  }
}
