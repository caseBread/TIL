const log = console.log;
class BoostSet {
    constructor(set) {
        this.set = set;
    }

    map(cc) {
        const a = this.set;
        return function() {
            return cc(a);
        }
    }

    filter(cc) {
        const a = this.set;
        return function() {
            return cc(a);
        }
    }

    display() {

        const mapc = this.map((a) => {
            const getMapSet = a.map((x) => x+1);
            log(getMapSet);
            return getMapSet;
        });
        const filterc = this.filter((a) => {
            const getFilterSet = a.filter((x) => x<=2);
            log(getFilterSet);
            return getFilterSet;
        });
        const mappedSet = mapc();
        const filteredSet = filterc();
    }

    copySet() {
        return this.set.slice();
    }

    //other, this.set은 불변해야함
    sum(other) {
        const arr = this.copySet();
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