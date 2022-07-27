class CountSet {
    constructor(set = {}) {
        this.key = Object.keys(set).map((x) => Number(x));
        this.value = Object.values(set).map((x) => Number(x));
    }

    append(element) {
        if (this.key.indexOf(element) !== -1) {
            const newValue = this.value.map((x,idx) => {
                if (this.key[idx] === element) {
                   return x+1
                } else { return x }
            });
            return this.key.reduce((acc,curr,idx) => {
                return { ...acc, [curr]: newValue[idx] };
            }, new Object);
        } else {
            return [...this.key,element].reduce((acc,curr,idx) => {
                return { ...acc, [curr]: [...this.value,1][idx]}
            }, new Object);
        }
    }

    isError(element) {
        if (!(element in this.set)) {
            throw "해당 요소가 포함되어있지 않습니다.";
        }
    }

    findElementIndex(element) {
        return this.key.indexOf(element);
    }
    remove(element) {
        this.isError(element)
        


        if (this.set[element] === 1) {
            return { element, ...this.set }
        } else {
            return { ...this.set, element: this.set[element]-1 }
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
        const arr = this.copySet();
        const isSet = other.set.filter(x => x in this.set);
        return arr.map(x => {
            if (x in isSet) {
                arr[x] += other.set[x];
            } else {
                arr[x] = other.set[x];
            } 
        });

    }

    complement(other) {
        const arr = this.copySet();
        for (const i in other.set) {
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
        for (const i in other.set) {
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