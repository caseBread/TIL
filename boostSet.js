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
        let arr = this.copySet();
        const thisSet = this.resultAll();
        const result = other.set.filter(d => {
            thisSet.indexOf(d) !== -1
        })

        return arr;
    }

    intersect(other) {
        // 둘다 정렬이 되어있다고 가정
        const thisSet = resultAll();
        let arr = [];
        let i = 0;
        let j = 0;
        while (i < thisSet.length && j < other.set.length) {
            if (thisSet[i] === other.set[j]) {
                arr.push(thisSet[i]);
                i++;
                j++;
            } else if (thisSet[i] > other.set[j]) {
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