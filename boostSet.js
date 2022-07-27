class BoostSet {
    constructor(set) {
        this.set = set;
    }


    copySet() {
        return this.set.slice();
    }

    //other, this.set은 불변해야함
    sum(other) {
        let arr = this.copySet();
        const thisSet = this.resultAll();
        const result = other.set.filter(d => {
            return thisSet.indexOf(d) === -1
        });

        arr.push.apply(arr,result);

        arr.sort((a,b) => {
            return a - b;
        });

        return arr;
    }

    complement(other) {
        const thisSet = this.resultAll();
        return thisSet.filter(x => !other.set.includes(x));

    }

    intersect(other) {
        const thisSet = this.resultAll();
        return thisSet.filter(x => other.set.includes(x));
    }

    resultAll() {
        return this.set;
    }
}


export { BoostSet }