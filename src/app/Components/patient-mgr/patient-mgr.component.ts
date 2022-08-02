import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-patient-mgr',
  templateUrl: './patient-mgr.component.html',
  styleUrls: ['./patient-mgr.component.css']
})
export class PatientMgrComponent implements OnInit {
  data : Patient[] =[];
  constructor(private service : PatientService) { }

  ngOnInit(): void {
    this.data = this.service.getAll();
  }
}
