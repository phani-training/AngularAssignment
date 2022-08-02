import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FinanceComponent } from './Components/finance/finance.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PatientInfoComponent } from './Components/patient-info/patient-info.component';

@NgModule({
  declarations: [
    AppComponent,
    FinanceComponent,
    NavBarComponent,
    PatientInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
