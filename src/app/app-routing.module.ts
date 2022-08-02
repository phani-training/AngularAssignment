import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinanceComponent } from './Components/finance/finance.component';
import { PatientInfoComponent } from './Components/patient-info/patient-info.component';

const routes: Routes = [
  {path: '', redirectTo:"Calc", pathMatch:'full'},
  {path: "calc", component:FinanceComponent},
  {path: "patient", component:PatientInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }