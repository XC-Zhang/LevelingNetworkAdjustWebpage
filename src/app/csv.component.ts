import { AfterViewInit, Component, ElementRef, EventEmitter, Output } from "@angular/core";
import { Benchmark, Observation } from "../models";

@Component({
    selector: "csv-component",
    template: "<input type='file' accept='text/csv' (change)='onChange()'>"
})
export class CsvComponent implements AfterViewInit {
    private inputElement : HTMLInputElement;
    benchmarks : Map<String, Benchmark> = new Map();
    observations : Observation[] = [];
    @Output() onLoad = new EventEmitter<void>();
    constructor (private el: ElementRef<HTMLElement>) { }
    ngAfterViewInit(): void {
        this.inputElement = this.el.nativeElement.querySelector("input[type=file]") as HTMLInputElement;
    }
    click () {
        this.inputElement.click();
    }
    onChange () {
        if (this.inputElement.files.length !== 1) return;
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            (reader.result as String).split(/\r\n|\n|\r/).filter(line => line.length > 0).forEach(line => {
                const split = line.split(/\s/).filter(e => e.length > 0);
                let benchmark1 : Benchmark, benchmark2 : Benchmark;
                if (this.benchmarks.has(split[0])) {
                    benchmark1 = this.benchmarks.get(split[0]);
                } else {
                    benchmark1 = new Benchmark(split[0]);
                    this.benchmarks.set(split[0], benchmark1);
                }
                if (this.benchmarks.has(split[1])) {
                    benchmark2 = this.benchmarks.get(split[1]);
                } else {
                    benchmark2 = new Benchmark(split[1]);
                    this.benchmarks.set(split[1], benchmark2);
                }
                const observation = new Observation(benchmark1, benchmark2, parseFloat(split[3]), parseFloat(split[2]));
                this.observations.push(observation);
                benchmark1.nexts.push(observation);
                benchmark2.prevs.push(observation);
            });
            this.onLoad.emit();
        });
        reader.readAsText(this.inputElement.files[0]);
    }
}