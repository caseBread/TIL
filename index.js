import { BoostSet } from "./boostSet.js"
const log = console.log;


const BS = new BoostSet([1,2,3]);
const otherBS = new BoostSet([1,3]);

log(BS.sum(otherBS));
log(BS.complement(otherBS));
log(BS.intersect(otherBS));
log(BS.resultAll());

