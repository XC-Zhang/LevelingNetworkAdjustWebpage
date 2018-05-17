import { Component, ViewChild } from '@angular/core';
import { CsvComponent } from "./csv.component";
import { ObsTableComponent } from "./obs.table.component";
import { BmsTableComponent } from "./bms.table.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(CsvComponent) csvComponent: CsvComponent;
  @ViewChild(ObsTableComponent) obsTableComponent: ObsTableComponent;
  @ViewChild(BmsTableComponent) bmsTableComponent: BmsTableComponent;
  onUploadButtonClick () {
    this.csvComponent.click();
  }
  onCsvLoad () {
    this.obsTableComponent.renderRows();
    this.bmsTableComponent.renderRows();
  }
}
