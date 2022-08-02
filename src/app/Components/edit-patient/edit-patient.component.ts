import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Patient } from 'src/app/Models/patient';
import { PatientService } from 'src/app/Services/patient.service';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  id : any;
  selectedPatient : Patient = {} as Patient;
  constructor(private service : PatientService, private activatedRoute : ActivatedRoute, private nav : Router) {
    activatedRoute.paramMap.subscribe((params : ParamMap)=>{
      this.id = params.get("id");
      this.selectedPatient = this.service.findPatient(this.id);
    })
   }

  ngOnInit(): void {
  }

  onUpdate(){
    this.service.updatePatient(this.selectedPatient);
    this.nav.navigate(['/allPatients']);
  }

}
