export class Benchmark { 
    adjustment: number = null;
    approximation: number = null;
    nexts: Observation[] = [];
    prevs: Observation[] = [];
    isKnown = false;
    constructor (public name: string) { }
    toString () {
        return this.name;
    }
}

export class Observation { 
    constructor (
        public start: Benchmark,
        public end: Benchmark,
        public value: number,
        public weight: number
    ) { }
}