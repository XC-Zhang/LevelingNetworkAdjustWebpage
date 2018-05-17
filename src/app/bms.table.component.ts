import { Component, Input, ViewChild } from "@angular/core";
import { Benchmark } from "../models";
import { MatTable } from "@angular/material/table";

@Component({
    selector: "bms-table",
    templateUrl: "./bms.table.component.html",
    styleUrls: ["./obs.table.component.css"]
})
export class BmsTableComponent {
    private _dataSource: Map<String, Benchmark>;
    dataSourceArray: Benchmark[] = [];
    @ViewChild(MatTable) table: MatTable<Benchmark>;
    displayedColumns = ["name", "approximation", "adjustment", "isKnown"];
    @Input() set dataSource (dataSource: Map<String, Benchmark>) {
        this._dataSource = dataSource;
        this._mapToArray();
    }
    get dataSource() {
        return this._dataSource;
    }
    private _mapToArray () {
        this.dataSourceArray.splice(0);
        this._dataSource.forEach(bm => this.dataSourceArray.push(bm));
    }
    renderRows () {
        this._mapToArray();
        this.table.renderRows();
    }
}