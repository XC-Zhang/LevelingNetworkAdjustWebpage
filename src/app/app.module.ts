import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { CsvComponent } from './csv.component';
import { ObsTableComponent } from './obs.table.component';
import { BmsTableComponent } from './bms.table.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    ObsTableComponent,
    BmsTableComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
