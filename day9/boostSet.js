const log = console.log;
class BoostSet {
  constructor(set) {
    this.set = set;
  }

  map(func) {
    return new BoostSet(this.set.map(func));
  }

  filter(func) {
    return new BoostSet(this.set.filter(func));
  }

  display(func, initValue) {
    const obj = this.set.reduce(func, initValue);
    log(obj);
  }

  copySet() {
    return this.set.slice();
  }

  //other, this.set은 불변해야함
  sum(other) {
    const thisSet = this.copySet();
    const result = other.set.filter((d) => {
      return !thisSet.includes(d);
    });

    thisSet.push.apply(thisSet, result);

    thisSet.sort((a, b) => a - b);

    return new BoostSet(thisSet);
  }

  complement(other) {
    const thisSet = this.copySet();
    return new BoostSet(thisSet.filter((x) => !other.set.includes(x)));
  }

  intersect(other) {
    const thisSet = this.copySet();
    return new BoostSet(thisSet.filter((x) => other.set.includes(x)));
  }

  resultAll() {
    return new BoostSet(this.set);
  }
}

export { BoostSet };
