import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/Models/patient';

@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.component.html',
  styleUrls: ['./patient-info.component.css']
})
export class PatientInfoComponent implements OnInit {

  info : Patient = {} as Patient;
  constructor() { }

  ngOnInit(): void {
    this.info.id = 111;
    this.info.name = "Phaniraj"
    this.info.doctor = "Dr. Suresh Kumar";
    this.info.bill = 5000;
    this.info.address = "RR Nagar, Bangalore";
  }

}
