import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  @Output() addEmployee: EventEmitter<any> = new EventEmitter();

  FirstName:string;
  LastName:string;
  notValidInput:string;

  constructor() { }

  ngOnInit() {
  }

  onAddEmployee() {

    if (this.FirstName !== ""){
      this.FirstName = this.FirstName.trim();
    }
    //this.FirstName = this.FirstName.trim();
    //this.LastName = this.LastName.trim();

    if ((this.FirstName === "") || (this.LastName === "")) {
      this.notValidInput = "Please enter a valid First and Last name.";
    } else {
      this.notValidInput = "";

      const employee = {
        FirstName: this.FirstName,
        LastName: this.LastName
      }
  
      this.addEmployee.emit(employee);
    }


  }
}
