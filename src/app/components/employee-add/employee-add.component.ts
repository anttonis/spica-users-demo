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
  Emso: string;
  notValidInput:string;

  constructor() { }

  ngOnInit() {
  }

  onAddEmployee() {

    //this.FirstName = this.FirstName.trim();
    //this.LastName = this.LastName.trim();

    if (!this.validateName(this.FirstName)) {
      this.notValidInput = "Please enter valid 'First Name'.";
    } else if (!this.validateName(this.LastName)) {
      this.notValidInput = "Please enter valid 'Last Name'.";
    } else if (!this.validateEMSO()) {
      this.notValidInput = "Please enter valid 'Maticna stevilka' (13 numbers).";
    } else {
      console.log("Valid!")

      this.notValidInput = "";

      const employee = {
        FirstName: this.FirstName,
        LastName: this.LastName,
        OrganizationalUnitId: Number(this.Emso),
      }
  
      this.addEmployee.emit(employee);
    }
  }

  validateName(name: string) : boolean {
    if (!name) {
      return false;
    } else {
      var trigger = name,
        regexp = new RegExp('^[A-Za-z]{1,}?'),
        test = regexp.test(trigger);
      return test;
    }
  }

  validateEMSO(): boolean {
    if (!this.Emso){
      return false;
    } else {
      var trigger = this.Emso,
      regexp = new RegExp('^[0-9]{13}$'),
      test = regexp.test(trigger);
      return test;
    }
  }
}
