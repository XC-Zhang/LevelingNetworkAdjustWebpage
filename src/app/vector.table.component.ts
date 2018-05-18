import { Component, Input } from "@angular/core";

@Component({
    selector: "vector-table",
    templateUrl: "./vector.table.component.html"
})
export class VectorTableComponent {
    @Input() vector: number[]
}