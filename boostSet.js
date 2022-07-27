class BoostSet {
    constructor(set) {
        this.set = set;
    }

    copySet() {
        return this.set.slice();
    }

    sum(other) {
        let arr = this.copySet();
        other.set.forEach((d,i) => {
            if ((this.set.indexOf(d)) === -1) {
                arr.push(d);
            }
        });
        arr.sort((a,b) => {
            return a-b;
        });
        return arr;
    }

    complement(other) {
        let arr = this.copySet();
        other.set.forEach((d,i) => {
            if (this.set.indexOf(d) !== -1) {
                arr.splice(i,1);
            }
        });
        return arr;
    }

    intersect(other) {
        // 둘다 정렬이 되어있다고 가정
        let arr = [];
        let i = 0;
        let j = 0;
        while (i < this.set.length && j < other.set.length) {
            if (this.set[i] === other.set[j]) {
                arr.push(this.set[i]);
                i++;
                j++;
            } else if (this.set[i] > other.set[j]) {
                j++;
            } else {
                i++;
            }
        }
        return arr;
    }

    resultAll() {
        return this.set;
    }
}


export { BoostSet }