import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { CsvComponent } from './csv.component';
import { ObsTableComponent } from './obs.table.component';
import { BmsTableComponent } from './bms.table.component';
import { MatrixTableComponent } from './matrix.table.component';
import { VectorTableComponent } from './vector.table.component';

@NgModule({
  declarations: [
    AppComponent,
    CsvComponent,
    ObsTableComponent,
    BmsTableComponent,
    MatrixTableComponent,
    VectorTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
