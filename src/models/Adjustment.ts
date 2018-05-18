import { Benchmark, Observation } from "./pocos";
import * as mathjs from "mathjs";

export class Adjustment {
    private unknownBenchmarks: Benchmark[];
    public matrixB: number[][];
    public matrixL: number[];
    constructor (private benchmarks: Benchmark[], private observations: Observation[]) { 
        if (benchmarks.length === 0) {
            throw new Error();
        }
    }

    approximate () {
        // 将未知点的高程近似值设为空
        this.unknownBenchmarks = this.benchmarks.filter(benchmark => !benchmark.isKnown);
        this.unknownBenchmarks.forEach(benchmark => benchmark.approximation = null);
        // 寻找已知点，将他们作为起算点
        let startingBenchmarks = this.benchmarks.filter(benchmark => benchmark.isKnown);
        if (startingBenchmarks.length === 0) {
            // 没有设定已知点，则将第一个点作为起算点
            this.benchmarks[0].approximation = 0.0;
            startingBenchmarks.push(this.benchmarks[0]);
        }
        for (let startBenchmark of startingBenchmarks) {
            this.approximateFromBenchmark(startBenchmark);
        }
    }

    private approximateFromBenchmark (start: Benchmark) {
        // 正向推算
        for (let next of start.nexts) {
            if (next.end.approximation === null) {
                next.end.approximation = start.approximation + next.value;
                // 计算下一层
                this.approximateFromBenchmark(next.end);
            }
        }
        // 逆向推算
        for (let prev of start.prevs) {
            if (prev.start.approximation === null) {
                prev.start.approximation = start.approximation - prev.value;
                // 计算上一层
                this.approximateFromBenchmark(prev.start);
            }
        }
    }

    getMatrices () {
        // 检查所有水准点高程都有初值
        if (this.benchmarks.some(benchmark => benchmark.approximation === null)) {
            throw new Error();
        }
        this.matrixB = new Array(this.observations.length);
        this.matrixL = new Array(this.observations.length);
        for (let i = 0; i < this.observations.length; i++) {
            this.matrixB[i] = new Array(this.unknownBenchmarks.length);
            this.matrixB[i].fill(0);
            if (!this.observations[i].end.isKnown) {
                const index = this.unknownBenchmarks.indexOf(this.observations[i].end);
                this.matrixB[i][index] = 1;
            }
            if (!this.observations[i].start.isKnown) {
                const index = this.unknownBenchmarks.indexOf(this.observations[i].start);
                this.matrixB[i][index] = -1;
            }
            this.matrixL[i] = this.observations[i].value + this.observations[i].start.approximation - this.observations[i].end.approximation;
        }
    }
}