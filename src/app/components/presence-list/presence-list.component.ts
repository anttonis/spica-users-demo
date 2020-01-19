import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/models/Employee';
import { PresenceService } from 'src/app/services/presence.service';

@Component({
  selector: 'app-presence-list',
  templateUrl: './presence-list.component.html',
  styleUrls: ['./presence-list.component.css']
})
export class PresenceListComponent implements OnInit {

  private gridApi;

  presenceEmployeeList: Employee[] = [];

  private columnDefs = [
    {headerName: 'FirstName', field: 'FirstName'},
    {headerName: 'LastName', field: 'LastName'},
    {headerName: 'Address', field: 'Address'},
  ];

  private datePresence: string;

  constructor(private _presenceService: PresenceService) { }

  ngOnInit() {
    this.datePresence = this.toDateString(new Date());
  }

  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  onPresenceSearch() {
    this._presenceService.getPresence(this.datePresence).subscribe(data => {
      this.presenceEmployeeList = data;
    })
  }

  private toDateString(date: Date): string {
    return (date.getFullYear().toString() + '-' 
       + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
       + ("0" + (date.getDate())).slice(-2))
       + 'T' + date.toTimeString().slice(0,5);
  }

}
