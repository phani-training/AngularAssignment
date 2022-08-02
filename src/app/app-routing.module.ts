import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientComponent } from './Components/add-patient/add-patient.component';
import { EditPatientComponent } from './Components/edit-patient/edit-patient.component';
import { FinanceComponent } from './Components/finance/finance.component';
import { PatientInfoComponent } from './Components/patient-info/patient-info.component';
import { PatientMgrComponent } from './Components/patient-mgr/patient-mgr.component';

const routes: Routes = [
  {path: '', redirectTo:"Calc", pathMatch:'full'},
  {path: "calc", component:FinanceComponent},
  {path: "patient", component:PatientInfoComponent},
  {path: "allPatients", component:PatientMgrComponent},
  {path: "addpatient", component:AddPatientComponent},
  {path: "patient/:id", component:EditPatientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
