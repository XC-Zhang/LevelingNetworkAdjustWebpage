import { Component, Input } from "@angular/core";

@Component({
    selector: "matrix-table",
    templateUrl: "./matrix.table.component.html",
    styleUrls: ["./matrix.table.component.css"]
})
export class MatrixTableComponent {
    private _matrix: number[][];
    @Input() set matrix (matrix: number[][]) {
        this._matrix = matrix;
        this.displayedColumns = [];
        matrix[0].forEach((e, index) => {
            this.displayedColumns.push(index.toString());
        });
    }
    get matrix () {
        return this._matrix;
    }
    displayedColumns: string[] = [];
}