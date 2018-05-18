import { Component, ViewChild } from '@angular/core';
import { CsvComponent } from "./csv.component";
import { ObsTableComponent } from "./obs.table.component";
import { BmsTableComponent } from "./bms.table.component";
import { Adjustment, Benchmark } from "../models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  adjustment: Adjustment;
  matrixCalculated = false;
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
  onApproximateButtonClick () {
    const benchmarks: Benchmark[] = [];
    this.csvComponent.benchmarks.forEach(value => benchmarks.push(value));
    this.adjustment = new Adjustment(benchmarks, this.csvComponent.observations);
    this.adjustment.approximate();
  }
  onMatricesButtonClick () {
    this.adjustment.getMatrices();
    this.matrixCalculated = true;
  }
}
