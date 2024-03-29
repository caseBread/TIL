const log = console.log;
class CountSet {
  constructor(set = {}) {
    this.arrayBySet = Object.entries(set);
    this.key = Object.keys(set).map((x) => Number(x));
    this.value = Object.values(set).map((x) => Number(x));
  }

  map(func) {
    const tempKey = [...this.key];
    const tempValue = [...this.value];
    const result = tempKey.map(func).reduce((acc, cur, idx) => {
      acc[cur] = tempValue[idx];
    }, {});
    return new CountSet(result);
  }

  filter(func) {
    const tempKey = [...this.key];
    const tempValue = [...this.value];
    const result = tempKey.filter(func).reduce((acc, cur, idx) => {
      acc[cur] = tempValue[idx];
    }, {});
    return new CountSet(result);
  }

  display(func, initValue) {
    const obj = this.arrayBySet.reduce(func, initValue);
    log(obj);
  }

  append(element) {
    if (this.key.indexOf(element) !== -1) {
      const newValue = this.value.map((x, idx) => {
        if (this.key[idx] === element) {
          return x + 1;
        } else {
          return x;
        }
      });
      return this.key.reduce((acc, curr, idx) => {
        return { ...acc, [curr]: newValue[idx] };
      }, new Object());
    } else {
      return [...this.key, element].reduce((acc, curr, idx) => {
        return { ...acc, [curr]: [...this.value, 1][idx] };
      }, new Object());
    }
  }

  isError(element) {
    if (!this.key.includes(element)) {
      throw "해당 요소가 포함되어있지 않습니다.";
    }
  }

  remove(element) {
    this.isError(element);
    const keyIdx = this.key.indexOf(element);

    const newKey = this.key.filter((x, i) => {
      return i !== keyIdx;
    });

    if (this.value[keyIdx] === 1) {
      const newVal = this.value.filter((x, i) => {
        return i !== keyIdx;
      });
      return newKey.reduce((a, c, i) => {
        return { ...a, [c]: newVal[i] };
      }, new Object());
    } else {
      const newVal = this.value.map((x, i) => {
        if (i !== keyIdx) return x;
        else return x - 1;
      });
      return this.key.reduce((a, c, i) => {
        return { ...a, [c]: newVal[i] };
      }, new Object());
    }
  }

  countFor(element) {
    this.isError(element);
    const keyIdx = this.key.indexOf(element);
    return this.value[keyIdx];
  }

  copySet() {
    return JSON.parse(JSON.stringify(this.set));
  }

  sum(other) {
    const newVal = other.key.map((x, i) => {
      const xInThisKey = this.key.indexOf(x);
      if (xInThisKey !== -1) return this.value[xInThisKey] + other.value[i];
      else return other.value[i];
    });

    const otherNewKey = [...other.key];

    this.key.forEach((x, i) => {
      if (!other.key.includes(x)) {
        otherNewKey.push(x);
        newVal.push(this.value[i]);
      }
    });

    return otherNewKey.reduce((a, c, i) => {
      return { ...a, [c]: newVal[i] };
    }, new Object());
  }

  complement(other) {
    const newVal = this.key.map((x, i) => {
      if (other.key.indexOf(x) !== -1) {
        return this.value[i] - other.value[other.key.indexOf(x)];
      } else return this.value[i];
    });

    const newKey = newVal.filter((x, i) => {
      if (0 < x) return this.key[i];
    });

    const resultVal = newVal.filter((x) => 0 < x);

    return newKey.reduce((a, c, i) => {
      return { ...a, [c]: resultVal[i] };
    }, new Object());
  }

  intersect(other) {
    const newKey = this.key.filter((x) => other.key.includes(x));
    const newVal = [...Array(newKey.length)].map((x) => 1);
    return newKey.reduce((a, c, i) => {
      return { ...a, [c]: newVal[i] };
    }, new Object());
  }

  resultAll() {
    return this.key.reduce((a, c, i) => {
      return { ...a, [c]: this.value[i] };
    }, new Object());
  }
}

export { CountSet };
