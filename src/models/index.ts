export class Benchmark { 
    adjustment: Number = null;
    approximation: Number = null;
    connections: Observation[] = [];
    isKnown = false;
    constructor (public name: String) { }
    toString () {
        return this.name;
    }
}

export class Observation { 
    constructor (
        public start: Benchmark,
        public end: Benchmark,
        public value: Number,
        public weight: Number
    ) { }
}