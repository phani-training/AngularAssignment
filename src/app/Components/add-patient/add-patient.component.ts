import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  patient : Patient = {} as Patient;
  constructor(private service: PatientService, private nav : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.addNewPatient(this.patient);
    this.nav.navigate(['/allPatients'])
  }

}
