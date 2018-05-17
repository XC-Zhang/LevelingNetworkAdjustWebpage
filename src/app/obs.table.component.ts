import { Component, Input, ViewChild } from "@angular/core";
import { Observation } from "../models";
import { MatTable } from "@angular/material/table";

@Component({
    selector: "obs-table",
    templateUrl: "./obs.table.component.html",
    styleUrls: ["./obs.table.component.css"]
})
export class ObsTableComponent {
    @Input() dataSource : Observation[];
    @ViewChild(MatTable) table: MatTable<Observation>;
    displayedColumns = ["start", "end", "value", "weight"];
    renderRows () {
        this.table.renderRows();
    }
}