import { Injectable } from '@angular/core';
import { Patient } from '../Models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  patients : Patient[] = [];
  constructor() { 
    this.patients.push({id: 111, address : "Bangalore", bill : 5000, doctor :"Dr. Nitesh Tiwari", name: 'Phaniraj'});
    this.patients.push({id: 112, address : "Mysore", bill : 15000, doctor :"Dr. Srujanna", name: 'Somnath'});
    this.patients.push({id: 113, address : "Pune", bill : 2000, doctor :"Dr. SV ", name: 'Kumar'});
    this.patients.push({id: 114, address : "Bangalore", bill : 5000, doctor :"Dr. Anirudha", name: 'Lavanya'});
  }

  addNewPatient(p : Patient){
    this.patients.push(p);
  }

  removePatient(id : number){
    let index = this.patients.findIndex((p)=>p.id == id);
    this.patients.splice(index, 1);  
  }
  
    findPatient(id : number) : Patient{
    let selected = this.patients.find((p)=>p.id == id);
    if(selected == undefined){
      throw "Patient not found";
    }
    return selected;
  }

  updatePatient(patient : Patient){
    let index = this.patients.findIndex((p)=>p.id == patient.id);
    this.patients.splice(index, 1, patient);
  }
  
  getAll() : Patient[]{
    return this.patients;
  }
}
