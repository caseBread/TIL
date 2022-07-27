class CountSet {
    constructor(set = {}) {
        this.set = set;
    }

    append(element) {
        const arr = this.copySet();
        return element in this.set[element] ? arr[element]++ : arr[element] = 1;
    }

    isError(element) {
        if (!(element in this.set)) {
            throw "해당 요소가 포함되어있지 않습니다.";
        }
    }

    remove(element) {
        this.isError(element)

        if (this.set[element] === 1)
        if (--this.set[element] === 0) {
            var temp = this.set[element];
            delete this.set[element];
            return temp;
        }
    }

    countFor(element) {
        this.isError(element)
        return this.set[element];
    }

    copySet() {
        return JSON.parse(JSON.stringify(this.set));
    }

    sum(other) {
        let arr = this.copySet();
        for (var i in other.set) {
            if (i in arr) {
                arr[i] += other.set[i];
            } else {
                arr[i] = other.set[i];
            }
        }
        return arr;
    }

    complement(other) {
        let arr = this.copySet();
        for (var i in other.set) {
            if (i in arr) {
                arr[i] -= other.set[i];
            } 
            if (arr[i] <= 0) {
                delete arr[i];
            }
        }
        return arr;
    }

    intersect(other) {
        let result = {};
        for (var i in other.set) {
            if (i in this.set) {
                result[i] = 1;
            }
        }
        return result;
    }

    resultAll() {
        return this.set;
    }
}

export { CountSet }