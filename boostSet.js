const log = console.log;
class BoostSet {
  constructor(set) {
    this.set = set;
  }

  map(func) {
    return BoostSet(this.set.map(func));
  }

  filter(func) {
    return BoostSet(this.set.map(func));
  }

  display(func, initValue) {
    return this.set.reduce(func, initValue);
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
